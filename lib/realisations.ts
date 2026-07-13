// ─────────────────────────────────────────────────────────────────────────────
// lib/realisations.ts
//
// 📸 COMMENT AJOUTER UNE RÉALISATION (avant / après)
// 1. Dépose tes 2 photos dans  public/images/realisations/
//    (ex. "resto-avant.jpg" et "resto-apres.jpg")
// 2. Ajoute un objet dans le tableau REALISATIONS ci-dessous :
//      {
//        id: "un-identifiant-unique",
//        title: "Titre court de la réalisation",
//        category: "Fin de chantier",              // libellé affiché
//        serviceSlug: "nettoyage-fin-de-chantier", // (optionnel) lie à une fiche service
//        location: "Paris 15e",                     // (optionnel)
//        beforeImage: "/images/realisations/resto-avant.jpg",
//        afterImage: "/images/realisations/resto-apres.jpg",
//      }
// 3. C'est tout — la section « Nos Réalisations » et la fiche service se mettent
//    à jour automatiquement.
// ─────────────────────────────────────────────────────────────────────────────

export type Realisation = {
  id: string;
  title: string;
  category: string;
  serviceSlug?: string;
  location?: string;
  beforeImage: string;
  afterImage: string;
  /** Ratio du cadre selon l'orientation des photos. "3 / 4" = portrait, "4 / 3" = paysage. */
  ratio?: string;
};

export const REALISATIONS: readonly Realisation[] = [
  {
    id: "conciergerie-microonde",
    title: "Micro-ondes remis à neuf",
    category: "Conciergerie",
    serviceSlug: "prestations-sur-mesure-conciergerie",
    location: "Île-de-France",
    beforeImage: "/images/realisations/conciergerie-microonde-avant.jpg",
    afterImage: "/images/realisations/conciergerie-microonde-apres.jpg",
    ratio: "3 / 4",
  },
  {
    id: "vitre-restaurant",
    title: "Vitrine de restaurant sans trace",
    category: "Vitres & Vitrines",
    serviceSlug: "nettoyage-des-vitres",
    location: "Paris",
    beforeImage: "/images/realisations/vitre-restaurant-avant.jpg",
    afterImage: "/images/realisations/vitre-restaurant-apres.jpg",
    ratio: "3 / 4",
  },
  {
    id: "chantier-siphon",
    title: "Plomberie dégraissée après travaux",
    category: "Fin de chantier",
    serviceSlug: "nettoyage-fin-de-chantier",
    location: "Île-de-France",
    beforeImage: "/images/realisations/chantier-siphon-avant.jpg",
    afterImage: "/images/realisations/chantier-siphon-apres.jpg",
    ratio: "3 / 4",
  },
  {
    id: "salle-restaurant",
    title: "Salle de réception remise en état",
    category: "Restaurants & Salles",
    serviceSlug: "nettoyage-restaurants-cuisines",
    location: "Paris",
    beforeImage: "/images/realisations/salle-restaurant-avant.jpg",
    afterImage: "/images/realisations/salle-restaurant-apres.jpg",
    ratio: "3 / 4",
  },
  {
    id: "cuisine-restaurant",
    title: "Cuisine professionnelle dégraissée",
    category: "Restaurants & Cuisines",
    serviceSlug: "nettoyage-restaurants-cuisines",
    location: "Paris",
    beforeImage: "/images/realisations/cuisine-restaurant-avant.jpg",
    afterImage: "/images/realisations/cuisine-restaurant-apres.jpg",
    ratio: "4 / 3",
  },
  {
    id: "canape-fauteuil",
    title: "Fauteuil en velours ravivé",
    category: "Canapés & Fauteuils",
    serviceSlug: "nettoyage-canapes-fauteuils",
    location: "Paris",
    beforeImage: "/images/realisations/canape-fauteuil-avant.jpg",
    afterImage: "/images/realisations/canape-fauteuil-apres.jpg",
  },
];

export function getRealisationsByService(slug: string): Realisation[] {
  return REALISATIONS.filter((r) => r.serviceSlug === slug);
}
