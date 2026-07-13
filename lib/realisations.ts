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
//
// ⚠️ Les 3 entrées ci-dessous sont des EXEMPLES qui réutilisent des images déjà
//    présentes pour que la section s'affiche tout de suite. Remplace-les par tes
//    vraies photos avant / après.
// ─────────────────────────────────────────────────────────────────────────────

export type Realisation = {
  id: string;
  title: string;
  category: string;
  serviceSlug?: string;
  location?: string;
  beforeImage: string;
  afterImage: string;
};

export const REALISATIONS: readonly Realisation[] = [
  {
    id: "fin-de-chantier-demo",
    title: "Remise en état après travaux",
    category: "Fin de chantier",
    serviceSlug: "nettoyage-fin-de-chantier",
    location: "Paris & IDF",
    // ⤵ EXEMPLE — à remplacer par tes vraies photos avant / après
    beforeImage: "/images/bg_nettoyage-fin-de-chantier.jpg",
    afterImage: "/images/bg-bureaux&entreprise.jpg",
  },
  {
    id: "canape-demo",
    title: "Shampouinage canapé tissu",
    category: "Canapés & Fauteuils",
    serviceSlug: "nettoyage-canapes-fauteuils",
    location: "Paris",
    beforeImage: "/images/bg_nettoyage-canapes-fauteuils.jpeg",
    afterImage: "/images/bg_nettoyage-approfondi.png",
  },
  {
    id: "vitres-demo",
    title: "Nettoyage vitrine sans trace",
    category: "Vitres & Vitrines",
    serviceSlug: "nettoyage-des-vitres",
    location: "Île-de-France",
    beforeImage: "/images/bg_nettoyage-vitres.jpeg",
    afterImage: "/images/bg_Copropriétés&Immeubles.jpg",
  },
];

export function getRealisationsByService(slug: string): Realisation[] {
  return REALISATIONS.filter((r) => r.serviceSlug === slug);
}
