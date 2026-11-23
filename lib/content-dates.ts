// ─────────────────────────────────────────────────────────────────────────────
// lib/content-dates.ts — Dates de dernière modification du contenu
//
// Le sitemap envoyait `new Date()` pour les 79 URL : toutes portaient la date
// du déploiement, y compris les pages inchangées depuis des mois. Un `lastmod`
// qui bouge à chaque build ne dit rien à Google, qui finit par l'ignorer —
// autant perdre le signal utile sur les pages réellement mises à jour.
//
// ⚠ À BUMPER quand on modifie le contenu correspondant. Une date qui ne
//   change pas alors que la page a changé est un moindre mal : Google
//   recrawle de toute façon. L'inverse — tout bouger à chaque build — est ce
//   qu'on vient de corriger.
// ─────────────────────────────────────────────────────────────────────────────

export const CONTENT_UPDATED = {
  /** lib/services.ts — 18 prestations. */
  services: "2026-11-23",
  /** lib/zones.ts — 27 communes et départements. */
  zones: "2026-11-23",
  /** lib/zones-paris.ts — 20 arrondissements. */
  parisArrondissements: "2026-11-23",
  /** Accueil, /services, /zones, /zones/paris, /devis, /blog. */
  staticPages: "2026-11-23",
  /** Mentions légales et politique de confidentialité. */
  legalPages: "2026-11-23",
} as const;
