// ─────────────────────────────────────────────────────────────────────────────
// Avis clients — les vrais avis de la fiche Google Business Profile.
//
// Composant serveur : l'appel à Google est fait au rendu, la clé API reste sur
// le serveur et le HTML livré contient déjà les avis (bon pour le SEO et le LCP).
// Le résultat est mis en cache 6 h par Next (voir lib/google-reviews.ts).
//
// Configuration — dans .env.local en local, et dans les variables
// d'environnement de l'hébergeur en production :
//   GOOGLE_PLACES_API_KEY=<clé Google Cloud, Places API (New) activée>
//   GOOGLE_PLACE_ID=<Place ID de la fiche Google Business Profile>
//
// Sans ces variables — ou si Google ne renvoie aucun avis — la section renvoie
// vers la fiche Google. Il n'y a plus aucun témoignage de secours : des avis
// écrits à la main et présentés comme laissés « directement sur Google »
// engagent la responsabilité de l'entreprise.
// ─────────────────────────────────────────────────────────────────────────────

import { getGooglePlaceData } from "@/lib/google-reviews";
import { TestimonialsView } from "@/components/sections/TestimonialsView";

export async function Testimonials() {
  const { reviews, rating, reviewCount } = await getGooglePlaceData();

  return (
    <TestimonialsView
      reviews={reviews}
      rating={rating}
      reviewCount={reviewCount}
    />
  );
}
