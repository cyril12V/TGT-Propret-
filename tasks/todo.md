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

