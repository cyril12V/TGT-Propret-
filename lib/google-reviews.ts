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
 *  se fait au champ le plus cher de la requête. */
const FIELD_MASK = "reviews";

/** 6 heures : une fiche Google bouge de quelques avis par mois au plus. */
const REVALIDATE_SECONDS = 21_600;

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
 * Renvoie les avis Google de la fiche, triés par note décroissante.
 *
 * Ne lève jamais : un incident côté Google ne doit pas casser le rendu de la
 * page d'accueil. En cas d'échec, le tableau vide déclenche l'affichage des
 * témoignages de secours.
 */
export async function getGoogleReviews(): Promise<GoogleReviewItem[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return [];

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

    if (!response.ok) return [];

    const data = (await response.json()) as { reviews?: PlacesReview[] };

    return (data.reviews ?? [])
      .map(normalize)
      .filter((review): review is GoogleReviewItem => review !== null)
      .sort((a, b) => b.rating - a.rating);
  } catch {
    return [];
  }
}
