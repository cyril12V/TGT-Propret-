import "server-only";

// ─────────────────────────────────────────────────────────────────────────────
// lib/google-reviews.ts
//
// Récupération des avis de la fiche Google Business Profile via la
// **Places API (New)**. L'appel est fait côté serveur uniquement :
//   - la clé API ne part jamais dans le bundle navigateur (pas de NEXT_PUBLIC_),
//   - l'ancienne API `maps.googleapis.com/maps/api/place/details/json` est
//     désactivée par Google et ne répond de toute façon pas en CORS depuis un
//     navigateur : un fetch client était condamné à échouer.
//
// Variables d'environnement (voir .env.example) :
//   GOOGLE_PLACES_API_KEY   clé Google Cloud, API « Places API (New) » activée
//   GOOGLE_PLACE_ID         identifiant de la fiche (ChIJ…)
//
// Sans ces variables, la fonction renvoie un tableau vide et l'interface
// retombe proprement sur les témoignages de secours.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Données de la fiche Google exploitées par le site.
 *
 * `rating` et `reviewCount` étaient auparavant recopiés à la main dans
 * `lib/constants.ts` (« 5,0 sur 16 avis »). Au 24/11/2026 la fiche affichait
 * 4,8 sur 17 avis : une note recopiée dérive forcément, et une note fausse
 * affichée aux visiteurs est pire que pas de note.
 */
export type GooglePlaceData = {
  reviews: GoogleReviewItem[];
  /** Note moyenne de la fiche, ou `null` si Google n'en renvoie pas. */
  rating: number | null;
  /** Nombre total d'avis sur la fiche, tous textes confondus. */
  reviewCount: number | null;
};

/** Avis normalisé, tel que consommé par l'interface. */
export type GoogleReviewItem = {
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  photoUrl: string;
};

/** Sous-ensemble de la réponse Places API (New) que nous exploitons. */
type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; photoUri?: string };
};

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";

/** Seuls les champs réellement affichés sont demandés : la facturation Google
 *  se fait au champ le plus cher de la requête. `rating` et `userRatingCount`
 *  sont dans le palier le moins cher, les ajouter à côté de `reviews` ne
 *  change donc rien à la facture — et évite de recopier la note à la main. */
const FIELD_MASK = "reviews,rating,userRatingCount";

/**
 * 24 heures. Une fiche Google gagne quelques avis par mois au plus, et le champ
 * `reviews` est facturé au palier le plus cher de la Places API (~40 $ / 1 000
 * appels) : à ce rythme le site fait ~30 appels par mois, soit une poignée
 * d'euros au pire. Descendre à 6 h quadruplerait la facture pour gagner une
 * fraîcheur dont personne n'a besoin ici.
 */
const REVALIDATE_SECONDS = 86_400;

/** Note minimale affichée sur le site. */
const MIN_RATING = 4;

function normalize(review: PlacesReview): GoogleReviewItem | null {
  const text = review.text?.text ?? review.originalText?.text ?? "";
  const authorName = review.authorAttribution?.displayName ?? "";
  const rating = review.rating ?? 0;

  // Un avis sans texte ou sans auteur n'a rien à afficher dans une carte.
  if (!text.trim() || !authorName.trim() || rating < MIN_RATING) return null;

  return {
    authorName,
    rating,
    text,
    relativeTime: review.relativePublishTimeDescription ?? "",
    photoUrl: review.authorAttribution?.photoUri ?? "",
  };
}

/**
 * Renvoie les avis de la fiche ainsi que sa note et son nombre d'avis.
 *
 * Ne lève jamais : un incident côté Google ne doit pas casser le rendu d'une
 * page. En cas d'échec, tout est vide ou nul, et l'interface n'affiche ni
 * avis ni note — jamais de valeur de remplacement.
 */
export async function getGooglePlaceData(): Promise<GooglePlaceData> {
  const vide: GooglePlaceData = { reviews: [], rating: null, reviewCount: null };

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return vide;

  try {
    const response = await fetch(
      `${PLACES_ENDPOINT}/${encodeURIComponent(placeId)}?languageCode=fr&regionCode=FR`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": FIELD_MASK,
        },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) return vide;

    const data = (await response.json()) as {
      reviews?: PlacesReview[];
      rating?: number;
      userRatingCount?: number;
    };

    return {
      reviews: (data.reviews ?? [])
        .map(normalize)
        .filter((review): review is GoogleReviewItem => review !== null)
        .sort((a, b) => b.rating - a.rating),
      rating: typeof data.rating === "number" ? data.rating : null,
      reviewCount:
        typeof data.userRatingCount === "number" ? data.userRatingCount : null,
    };
  } catch {
    return vide;
  }
}

/** Avis seuls. Raccourci pour les composants qui n'affichent pas la note. */
export async function getGoogleReviews(): Promise<GoogleReviewItem[]> {
  return (await getGooglePlaceData()).reviews;
}
