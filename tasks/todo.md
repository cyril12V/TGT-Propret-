# Todo — Migration TGT Propreté vers Next.js 15

## Session 2026-05-11 — Scaffold initial

### Phase 1 — Setup
- [x] Cloner le repo GitHub source
- [x] Créer arborescence de dossiers
- [x] Copier assets (logo, aspirateur) vers `public/images/`
- [x] Documenter le contexte dans `tasks/project-context.md`

### Phase 2 — Configs
- [ ] `package.json` (Next 15, React 19, TS, Tailwind v4, Zod)
- [ ] `tsconfig.json` (strict, alias `@/`)
- [ ] `next.config.ts`
- [ ] `postcss.config.mjs` (Tailwind v4)
- [ ] `eslint.config.mjs`
- [ ] `.gitignore`

### Phase 3 — Data layer (lib/)
- [ ] `lib/constants.ts` (info entreprise, contact, zones)
- [ ] `lib/services.ts` (8 services + slugs SEO)
- [ ] `lib/zones.ts` (villes IDF pour SEO local)
- [ ] `lib/seo.ts` (helpers metadata)

### Phase 4 — UI base
- [ ] `app/globals.css` — Tailwind v4 + `@theme` (palette, fonts)
- [ ] `app/layout.tsx` — metadata racine + fonts + JSON-LD
- [ ] `components/ui/Reveal.tsx` — IntersectionObserver wrapper
- [ ] `components/ui/SectionLabel.tsx`

### Phase 5 — Composants layout
- [ ] `components/layout/Nav.tsx` (sticky, mobile menu)
- [ ] `components/layout/Footer.tsx`

### Phase 6 — Sections page d'accueil
- [ ] `components/sections/Hero.tsx`
- [ ] `components/sections/About.tsx`
- [ ] `components/sections/Services.tsx`
- [ ] `components/sections/WhyUs.tsx`
- [ ] `components/sections/ContactBand.tsx`
- [ ] `components/sections/CandidatureForm.tsx` (client + server action)

### Phase 7 — Pages
- [ ] `app/page.tsx` — home
- [ ] `app/services/[slug]/page.tsx` + `generateStaticParams` + metadata
- [ ] `app/zones/[ville]/page.tsx` + `generateStaticParams` + metadata
- [ ] `app/mentions-legales/page.tsx`
- [ ] `app/politique-confidentialite/page.tsx`
- [ ] `app/not-found.tsx`

### Phase 8 — SEO technique
- [ ] `app/sitemap.ts` (sitemap dynamique incluant services + zones)
- [ ] `app/robots.ts`
- [ ] `app/opengraph-image.tsx`
- [ ] JSON-LD LocalBusiness dans layout

### Phase 9 — API
- [ ] `app/api/candidature/route.ts` (POST + Zod + rate limiting basique)

### Phase 2 — Configs ✓
- [x] `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore`

### Phase 3 — Data layer (lib/) ✓
- [x] `lib/constants.ts`, `lib/services.ts`, `lib/zones.ts`, `lib/seo.ts`

### Phase 4 — UI base ✓
- [x] `app/globals.css`, `app/layout.tsx`, `Reveal`, `SectionLabel`

### Phase 5 — Layout ✓
- [x] `Nav` (sticky + menu mobile), `Footer`

### Phase 6 — Sections ✓
- [x] Hero, About, Services, WhyUs, ContactBand, CandidatureForm

### Phase 7 — Pages ✓
- [x] Home + services/[slug] + zones/[ville] + mentions + confidentialité + not-found

### Phase 8 — SEO technique ✓
- [x] sitemap.ts (24 URLs : home + 8 services + 8 zones + 4 pages + 3 admin)
- [x] robots.ts
- [x] opengraph-image.tsx (edge runtime)
- [x] JSON-LD : LocalBusiness + Service + BreadcrumbList

### Phase 9 — API ✓
- [x] `app/api/candidature/route.ts` (Zod + rate-limit in-memory)

### Phase 10 — Vérif ✓
- [x] `npm install` (Next 16.2.6, React 19, Tailwind 4)
- [x] `npm run build` — 24 pages statiques générées
- [x] `npm run lint` — 0 erreur, 0 warning
- [x] `tsc --noEmit` — clean
- [x] Nettoyage `temp-import/`

## Session 2026-07-08 — Retours client (services, about, réalisations)

- [x] **About « Notre Équipe »** : fond passé de cream (#f5f0e8) à un **bleu nuit**
      harmonisé à la charte (dégradé navy), textes adaptés en clair, cadres dorés
      et encadrement conservés — [components/sections/About.tsx](../components/sections/About.tsx).
- [x] **Comparateur Avant / Après** réutilisable (curseur glissant, souris + tactile
      + clavier) — [components/ui/BeforeAfter.tsx](../components/ui/BeforeAfter.tsx).
- [x] **Section « Nos Réalisations »** (accueil, après Services) alimentée par
      [lib/realisations.ts](../lib/realisations.ts) — [components/sections/Realisations.tsx](../components/sections/Realisations.tsx).
- [x] **Avant / Après sur les fiches services** : bloc affiché au clic sur un service
      quand une réalisation lui est associée — [app/services/[slug]/page.tsx](../app/services/%5Bslug%5D/page.tsx).
- [x] Lien **Réalisations** ajouté au menu ([lib/constants.ts](../lib/constants.ts)).
- [x] Vérif : `tsc --noEmit` clean, `next build` OK (toutes pages générées).
- [x] ✅ **Vraies photos intégrées** : 12 photos client triées → **6 cas avant/après**
      (conciergerie/micro-ondes, vitres, fin de chantier/siphon, salle & cuisine
      resto, canapé) copiées dans `public/images/realisations/` et déclarées dans
      `lib/realisations.ts` avec ratio par orientation. Layout masonry pour gérer
      portrait/paysage.
- Non retenues : galeries sans vraie paire (vitres x2 séries, process canapé),
  doublons et photos ambiguës — proposables plus tard en galerie « résultats ».
- Note : les photos par service étaient **déjà présentes** dans cette version (rien à restaurer).

## Session 2026-07-28 — Refonte SEO (services + géo)

Point de départ : le document `Plan SEO Complet TGT Propreté nettoyagesidffr.md` décrivait
une « architecture mono-page critique » et demandait de créer 9 pages services. Diagnostic
périmé : les 12 pages services existaient déjà. Les vrais blocages étaient la profondeur du
contenu et la couverture géographique.

### Fondations
- [x] Type `Service` étendu : `tldr`, `sections` (H2 + intro + blocs H3), `process`, `relatedSlugs`
- [x] Type `Zone` aligné sur `ParisArrondissement` : `intro` long, `highlights`, `keywords`, `faqs`, `nearbySlugs`, `departmentCode`
- [x] Pages hub `/services` et `/zones` créées — c'étaient des redirections 302 vers des ancres
- [x] Fils d'Ariane recâblés : `/#services` → `/services`, ajout du niveau `Zones`
- [x] `getYearsOfExperience()` dérivé de `SITE.foundingYear` — quatre sources divergentes auparavant (6 vs 8 ans)
- [x] Compteurs de prestations dérivés de `SERVICES.length` — le hub Paris affichait 13 et 12 sur la même page
- [x] `robots.ts` : règles explicites GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended
- [x] Fautes en production corrigées (elles partaient dans le JSON-LD `FAQPage`) : « Malheuresement », « vous on des vitrages », « tâches » → « taches »

### Correctifs structurels
- [x] **12 arrondissements orphelins** : `app/zones/paris/page.tsx` codait en dur 8 arrondissements
      « prioritaires » ; les 12 autres affichaient une carte pointant vers `/devis` alors que leur
      page existait et figurait au sitemap. Les 20 sont désormais liés.
- [x] Deux liens morts dans les articles de blog (`/services/entreprises-bureaux`, `/services/nettoyage-copropriete`)
- [x] `DevisForm` : le select « zone » ne listait que les arrondissements, donc `?zone={ville}` retombait
      silencieusement sur « Sélectionner ». Les 20 communes ajoutées.
- [x] Lint remis au vert : 2 erreurs `react-hooks/set-state-in-effect` préexistantes dans `Testimonials.tsx`
      (index de carrousel reclampé au rendu, `loading` initialisé depuis la config au lieu d'un effet)

### Contenu
- [x] 12 pages services réécrites en profondeur — 1 340 à 2 606 mots (contre ~350)
- [x] 13 nouvelles communes : 92 (Boulogne-Billancourt, Nanterre, Levallois, Neuilly, Issy, Courbevoie,
      Asnières, Colombes, Rueil-Malmaison), 78 (Versailles), 94 (Créteil, Vincennes), 91 (Massy)
- [x] 7 communes existantes réécrites au même standard (~40 mots d'intro → 150-250 mots uniques)
- [x] Bloc `ZonesBand` sur l'accueil — la home ne pointait vers aucune page géo
- [x] H2 de l'accueil orientés mots-clés, title accueil passé en mot-clé d'abord

### Résultats mesurés
| Indicateur | Avant | Après |
|---|---|---|
| Pages statiques | 51 | **72** |
| URLs au sitemap | 51 | **66** |
| Pages villes | 7 (toutes en 93) | **20** (93, 92, 94, 78, 91) |
| Mots / page service | ~350 | **1 340 – 2 606** |
| Mots / page ville | ~200 | **~920** |
| Duplication entre villes voisines | 46 % | **36 %** |
| Duplication entre arrondissements | 56 % | **46 %** |
| JSON-LD page ville | BreadcrumbList | **FAQPage + Service + WebPage + BreadcrumbList** |
| Liens morts | 2 | **0** |

`npm run preflight` : 0 erreur. `npm run build` : 72 pages. Sitemap : 66 URLs toutes en 200.
Un seul `<h1>` et un seul canonical sur chacune des 66 pages.

### Reste à faire (hors code)
1. Code de vérification Search Console → décommenter `app/layout.tsx` et soumettre le sitemap
2. Décider du tracking analytics (GA4 ou Vercel Analytics) — rien n'est en place
3. Avis Google : les `TESTIMONIALS` sont 4 avis internes, pas des avis vérifiés. Le `aggregateRating`
   du JSON-LD s'en nourrit — à surveiller, Google déclasse les notes auto-déclarées.
4. Backlinks et annuaires, avec NAP strictement aligné sur `lib/constants.ts`

---

## Session 2026-07-28 (suite) — Plan SEO v2 + JSON-LD complet

Deux documents reçus : `Plan SEO Complet ... (1).md` (13 pages services au lieu de 9,
+ page Seine-Saint-Denis) et `JSON-LD Schema.org ... .md` (format `@graph` avec
`hasOfferCatalog`).

### Nouvelles pages services — 12 → 16
- [x] `nettoyage-commerces-boutiques` — commerces, boutiques, points de vente
- [x] `nettoyage-agences-immobilieres` — états des lieux, fin de bail, relocation
- [x] `desinfection-locaux` — désinfection professionnelle, points de contact
- [x] `renovation-sols-decapage` — décapage, métallisation, cristallisation marbre

**Non créé volontairement** : `/shampouinage-moquette-paris`. Le mot-clé
« shampouinage moquette » (10 vol/mois) vise la même intention que
`nettoyage-tapis-moquettes` (480 vol/mois), qui le couvre déjà et le cite dans ses
`offers`. Une page dédiée aurait cannibalisé la page forte. La moitié réellement
distincte du besoin — sols durs, décapage, cristallisation — est traitée par
`renovation-sols-decapage`.

### JSON-LD
- [x] `hasOfferCatalog` ajouté à `serviceJsonLd`, alimenté par un champ `offers[]`
      renseigné sur les **16** services (5 prestations nommées chacun)
- [x] `@id` stable sur chaque Service (`{url}#service`)
- [x] `name` du JSON-LD qualifié géographiquement (« … à Paris et en Île-de-France »)
- [x] Placeholders du document sans objet : téléphone, adresse et code postal réels
      étaient déjà câblés depuis `lib/constants.ts` (57 Av. Carnot, 93140 Bondy).
      Les `sameAs` du document contenaient des URLs erronées (`tgtpropreteparis`,
      `tgtpropretepark`) — les vraies sont dans `CONTACT.socials`.

### aggregateRating — risque de pénalité levé
Le site émettait une note agrégée de 5.0/5 sur 4 avis, calculée à partir des
`TESTIMONIALS`, c'est-à-dire de témoignages publiés par l'entreprise sur elle-même.
C'est exactement le cas que Google qualifie d'avis auto-promotionnels.

- [x] Nouvelle constante `GOOGLE_REVIEWS` dans `lib/constants.ts`, à `null` par défaut
- [x] `aggregateRating` n'est émis que si elle contient de vraies données de fiche GBP
- [x] Balisage `Review` des témoignages supprimé du JSON-LD — ils restent affichés
      pour les visiteurs, ils ne sont plus déclarés en données structurées
- [ ] **À faire côté TGT** : relever la note et le nombre d'avis sur la fiche Google
      Business Profile, puis renseigner `GOOGLE_REVIEWS` (une seule ligne à éditer,
      le mode d'emploi est en commentaire au-dessus)

### Page département
- [x] `/zones/seine-saint-denis` — page couvrant le 93 entier. Champ `isDepartment`
      ajouté au type `Zone` : change la préposition affichée (« en » au lieu de « à »)
      et le type schema.org émis (`AdministrativeArea` au lieu de `City`).

### Mots-clés génériques
Conformément à la note stratégique du document, aucune page dédiée n'a été créée pour
« nettoyage Paris », « entreprise de nettoyage », « services de propreté ». Ils sont
couverts par l'accueil et le hub `/services`.

### Résultats mesurés
| Indicateur | Avant cette étape | Après |
|---|---|---|
| Pages statiques | 72 | **77** |
| URLs au sitemap | 66 | **71** |
| Pages services | 12 | **16** |
| Pages géo | 40 | **41** |
| Mots — 4 nouveaux services | — | **1 463 à 1 628** |
| Duplication entre nouveaux services | — | **19 à 23 %** |
| `hasOfferCatalog` | absent | **16 services** |
| `aggregateRating` non vérifiable | présent | **supprimé** |

---

## Session 2026-07-28 (fin) — Contenus rédigés Bureaux et Fin de Chantier

Deux documents de contenu reçus, intégrés intégralement.

### Nouveaux champs sur le type `Service`
- [x] `h1: { lead, accent }` — H1 sur mesure, `accent` en doré italique
- [x] `metaTitle` / `metaDescription` — title tag et meta description sur mesure
- [x] `sources: { label, url }[]` — bloc « Sources utiles » avec liens externes (E-E-A-T)
- [x] `ServiceTable` sur `ServiceSection` — grille tarifaire, conteneur `overflow-x-auto`
      pour que le tableau défile sur mobile sans faire défiler la page
- [x] `items` et `outro` sur `ServiceSection` — liste et paragraphe rattachés au H2

### Contenus
- [x] **Bureaux** — 2 078 mots, 14 H2. Statistiques sourcées (92 % des salariés,
      14 Md€/an), obligations du Code du travail (art. R. 4228-1), grille tarifaire
      3 lignes, 3 sources externes (INRS, Légifrance, FEP), 9 questions FAQ
- [x] **Fin de chantier** — 2 289 mots, 15 H2. Norme NF P 03-001, 3 sources externes
      (CAPEB, Artisan du Bâtiment, Archipad), 8 questions FAQ

### Arbitrages tranchés avec le client
| Point | Décision |
|---|---|
| Grille tarifaire fin de chantier | **Non intégrée.** Le tableau du document (2-3 €/m²) contredisait le tarif du site (4,50-8,50 €/m²). Tarif du site conservé. |
| Devis « sous 2 heures » | **Non retenu.** 24h partout, cohérent avec les 71 pages. |
| « Vitres jusqu'au R+3 sans nacelle » | **Non retenu.** Capacité technique non confirmée. |
| Interventions 7j/7 | Confirmé, intégré. |
| Garantie de retour sans frais | Confirmé, intégré. |
| Évacuation gravats incluse + tri sélectif | Confirmé. **La FAQ disait l'inverse** (facturation en sus) — corrigée. |

### Fichiers de documentation remis à jour
- [x] `README.md` — Next.js 16, arborescence réelle, 71 URLs, JSON-LD, section avis Google
- [x] `DEPLOY.md` — le SMTP Hostinger est branché (la doc annonçait encore un placeholder Resend)

`npm run preflight` : 0 erreur. Build : 77 pages. Sitemap : 71 URLs toutes en 200,
aucun lien mort, 1 h1 et 1 canonical par page.

---

## Session 2026-07-28 (mise en ligne) — Logos, avis Google, déploiement

### Logos partenaires
- [x] `yema_logo.jpg` et `sunny-smoker_logo.jpg` ajoutés dans `public/images/`
- [x] `CLIENTS` de `Testimonials.tsx` passe à 3 entrées
- [x] **Bug trouvé** : l'ancien `YEMA_logo.jpg` n'était pas une image mais une page
      HTML enregistrée par erreur — le logo était cassé en production depuis l'origine
- [x] **Bug trouvé** : `logo_rect.jpg` était au format HEIF, illisible par les
      navigateurs, et référencé nulle part. Supprimé.
- [x] **Piège de casse** : Windows ne distingue pas `YEMA_logo.jpg` de `yema_logo.jpg`,
      Linux si. Git avait conservé l'ancienne casse alors que le code pointait vers la
      nouvelle : le logo aurait renvoyé un 404 sur Vercel. Corrigé par `git mv` explicite
      via un nom temporaire. Les 37 références d'images ont été vérifiées une à une
      contre les noms réels de l'index git — aucune autre divergence.

### Avis Google
- [x] `GOOGLE_REVIEWS` renseigné : **5,0 sur 11 avis** (relevé du 28/07/2026)
- [x] L'`aggregateRating` est donc à nouveau émis, cette fois adossé à une source
      vérifiable — voir la leçon du jour sur les avis auto-déclarés
- [x] **Bloc note Google ajouté au footer**, donc présent sur les 71 pages. Le balisage
      étant émis site-wide depuis le layout, Google exige que la note corresponde à un
      contenu réellement affiché. Sans ce bloc, le balisage aurait été non conforme.
- [x] La note codée en dur « 5.0★ » du hub Paris est désormais dérivée de `GOOGLE_REVIEWS`
- [x] Les `TESTIMONIALS` restent volontairement non balisés en `Review`

### Déploiement
Poussé sur `main`, Vercel a redéployé. Vérifié en production sur `nettoyagesidf.fr` :
71 URLs au sitemap, les 4 crawlers IA autorisés dans `robots.txt`, les nouvelles pages
services et zones en 200, les 3 logos servis en `image/jpeg`, `aggregateRating` présent
et note visible sur toutes les pages testées.

### À surveiller
- Mettre à jour `GOOGLE_REVIEWS` à chaque palier d'avis — la valeur doit rester
  strictement égale à celle de la fiche Google Business Profile.
- Le dépôt s'auto-commite avec des messages illisibles. Les seuls commits lisibles de
  la session sont ceux rédigés à la main.

---

## Revue de session — 2026-05-11

**Réalisé** : Migration complète du site HTML monolithique (1404 lignes) vers une app Next.js 15/16 structurée. Arborescence pro : `app/` (routes + SEO), `components/` (layout/sections/ui), `lib/` (data + SEO helpers). Tailwind v4 avec design tokens via `@theme`. SSG sur toutes les pages publiques. SEO complet : metadata API, sitemap dynamique avec 8 services + 8 zones, robots.txt, OG image edge, JSON-LD (LocalBusiness, Service, Breadcrumb).

**Points d'attention** :
- Next 15.1.6 avait une vulnérabilité (CVE-2025-66478), upgradé en 16.2.6 — `next lint` est déprécié en v16, remplacé par `eslint .` direct.
- Image `Aspirateur.jpg` = 2.4 MB → à optimiser (compression WebP) avant prod.
- API candidature : validation + rate-limit OK, mais l'envoi email reste à brancher (placeholder Resend dans le code).
- Liens sociaux du footer = "#" — à remplacer par les vraies URLs.

**Prochaines étapes suggérées** :
1. Optimiser `aspirateur.jpg` (sharp ou photoshop → WebP ~150 KB)
2. Brancher Resend/Mailgun sur `/api/candidature`
3. Remplir les URLs sociales (Instagram, LinkedIn, Facebook)
4. Définir `NEXT_PUBLIC_SITE_URL` réelle dans Vercel
5. Ajouter favicon.ico dédié (actuellement = logo.png)
6. Tests Lighthouse (objectif >90 sur tous les critères)


---

## Session 2026-08-10 — Retours client (lot 1)

### Fait
- [x] **Avis Google en direct** — migration vers **Places API (New)**, appel côté serveur
      (`lib/google-reviews.ts`), cache 6 h, clé hors bundle navigateur.
      `Testimonials` devient un composant serveur ; l'interactif part dans
      `TestimonialsView`. Place ID de la fiche : `ChIJ8TYHhTIT5kcRTzxSFofsBmk`.
- [x] **Prestations en pleine largeur** — une prestation par ligne sur la home
      (visuel à droite, texte à gauche ; visuel au-dessus sur mobile).
      Suppression des cartes fantômes et du calcul de colonnes devenus inutiles.
- [x] **Photo dédiée « Commerces & Boutiques »** — `bg_nettoyage-commerces-boutiques.jpg`
      (Pexels, licence libre commerciale) ; la prestation ne partage plus la photo des vitres.
- [x] **Bug images** — deux visuels de prestations ne s'affichaient plus (voir `bugs.md`).

### Bloqué côté client
- [ ] **Texte des avis Google** — la clé fournie ne renvoie pas le champ `reviews`
      (note 5,0 et 11 avis remontent bien, le texte non). Facturation à activer sur le
      projet Google Cloud. Le code est prêt : les avis s'afficheront sans redéploiement,
      au prochain rafraîchissement du cache.
- [ ] **Tarifs forfaitaires** — en attente de la grille du client.

### À décider
- [ ] Appliquer aussi la pleine largeur au hub `/services` (aujourd'hui grille 3 colonnes).
- [ ] 3 prestations partagent encore un visuel avec une autre :
      `agences-immobilieres` ↔ `nettoyage-approfondi`, `desinfection-locaux` ↔ `cabinets-medicaux`,
      `renovation-sols-decapage` ↔ `tapis-moquettes`. Plus visible depuis le passage en pleine largeur.
