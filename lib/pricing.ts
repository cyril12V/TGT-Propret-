// ─────────────────────────────────────────────────────────────────────────────
// lib/pricing.ts — Grille tarifaire, SOURCE UNIQUE
//
// Tout prix affiché ailleurs que sur la page du service concerné doit être lu
// ici. Avant ce fichier, la FAQ de /zones/paris annonçait « bureaux à partir
// de 0,50 €/m² » et « fin de chantier à partir de 4 €/m² » quand les pages
// services affichaient 2,50 €/m² et 4,50 à 8,50 €/m² : un acheteur qui compare
// deux pages du même site doute ensuite de tout le reste.
//
// Les `priceRange` de `lib/services.ts` restent la référence détaillée de
// chaque prestation ; ce fichier porte les ordres de grandeur réutilisés en
// transverse (FAQ, pages zones, métadonnées).
// ─────────────────────────────────────────────────────────────────────────────

export const PRICING = {
  /**
   * Nettoyage de bureaux. Les deux valeurs répondent à deux besoins
   * différents, et c'est leur confusion qui a produit la contradiction :
   *   - `bureauxRecurrent` : contrat régulier, prix au passage, la surface
   *     étant traitée plusieurs fois par semaine ;
   *   - `bureauxPonctuel` : intervention unique ou remise en état, qui
   *     reprend tout à zéro — c'est le `priceRange` de la page service.
   *
   * → À faire confirmer par Rabah. Si le tarif en contrat régulier n'est pas
   *   0,50 €/m² par passage, c'est la seule ligne à corriger sur tout le site.
   */
  bureauxRecurrent: "0,50 €/m² par passage",
  bureauxPonctuel: "2,50 €/m²",

  /** Pages services : « À partir de 28€/h ». */
  menageDomicile: "28 €/h",
  /** Pages services : « À partir de 23€/h ». */
  repassage: "23 €/h",
  /** Pages services : « Dès 35€/h ». */
  restaurants: "35 €/h",

  /** Grille écrite par Rabah, page « Fin de chantier ». */
  finDeChantierStudio: "180 € HT",
  finDeChantierGrandesSurfaces: "4,50 € à 8,50 €/m²",

  /** Page « Vitres & Vitrines ». */
  vitres: "2,50 € à 4,00 €/m²",
} as const;
