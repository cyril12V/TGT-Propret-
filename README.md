# TGT Propreté

Site officiel de **TGT Propreté** — entretien et nettoyage professionnel en Île-de-France.

Stack : **Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 · Zod · Nodemailer**.

**71 URLs indexables** : 16 pages services, 20 arrondissements parisiens, 21 pages villes et départements, 6 articles, 2 hubs et les pages statiques.

## Démarrage rapide

```bash
npm install
cp .env.example .env.local   # ajustez NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

## Scripts

| Commande            | Description                            |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Serveur de développement Next.js       |
| `npm run build`     | Build de production                    |
| `npm start`         | Lance le build de production           |
| `npm run lint`      | ESLint (Next core-web-vitals + TS)     |
| `npm run typecheck` | Vérification TypeScript stricte        |
| `npm run preflight` | `typecheck` + `lint` — à passer avant tout commit |

## Arborescence

```
app/
  layout.tsx                            Layout racine (metadata, fonts, JSON-LD CleaningService)
  page.tsx                              Accueil
  globals.css                           Tailwind v4 + design tokens (@theme)
  sitemap.ts                            Sitemap dynamique (alimenté par lib/)
  robots.ts                             robots.txt + autorisation explicite des crawlers IA
  opengraph-image.tsx                   OG image dynamique 1200x630
  not-found.tsx                         Page 404
  services/page.tsx                     Hub — 16 prestations par pôle
  services/[slug]/page.tsx              Page service (SSG)
  zones/page.tsx                        Hub — Paris + communes par département
  zones/paris/page.tsx                  Hub Paris
  zones/paris/[arrondissement]/page.tsx 20 arrondissements (SSG)
  zones/[ville]/page.tsx                21 communes et départements (SSG)
  blog/ + blog/[slug]/page.tsx          6 articles
  devis/page.tsx                        Formulaire de devis
  mentions-legales/ · politique-confidentialite/
  api/devis/route.ts                    POST devis (Zod + honeypot + rate limit + SMTP)
  api/candidature/route.ts              POST candidature (idem + upload CV PDF)
components/
  layout/    Nav, Footer, StickyCTA, FloatingPhone
  sections/  Hero, About, Services, Realisations, WhyUs, ZonesBand, Testimonials,
             BlogPreview, ContactBand, DevisForm, CandidatureForm, FaqSection,
             ParisLinksFooter, EngagementsBand
  ui/        Reveal, SectionLabel, BeforeAfter, SocialIcon, ScrollTopLogo
lib/
  constants.ts   Identité, contact, navigation, GOOGLE_REVIEWS
  services.ts    16 services : sections, process, faqs, offers, sources
  zones.ts       21 communes et départements
  zones-paris.ts 20 arrondissements
  articles.tsx   6 articles de blog
  seo.ts         buildMetadata() + tous les générateurs JSON-LD
  mailer.ts      SMTP Hostinger (server-only)
public/images/   Logo, photos de fond par service, réalisations avant/après
tasks/           Contexte projet, todo, lessons, bugs
```

**Le contenu ne vit jamais dans le JSX.** Ajouter une entrée dans `lib/services.ts` ou
`lib/zones.ts` crée la page **et** son entrée de sitemap automatiquement.

## SEO

- **Metadata API** via `buildMetadata()` — titre, description, canonical, robots, OG, Twitter en un appel
- **Structured data JSON-LD** :
  - `CleaningService` (LocalBusiness) dans le layout, avec `@id` référencé par les autres blocs
  - `Service` + `hasOfferCatalog` sur les 16 pages services
  - `Service` avec `areaServed` sur les pages géographiques
  - `FAQPage` émis automatiquement par `<FaqSection>`
  - `BreadcrumbList`, `WebPage`, `ItemList`, `Article`
- **Sitemap dynamique** (`/sitemap.xml`) — 71 URLs, alimenté par les fichiers `lib/`
- **Robots** (`/robots.txt`) — `/api/` exclu, GPTBot / ClaudeBot / PerplexityBot / Google-Extended autorisés explicitement
- **OG image** générée dynamiquement (`/opengraph-image`)
- **SSG** sur toutes les pages publiques

### Avis Google — à renseigner

`aggregateRating` n'est **pas** émis tant que `GOOGLE_REVIEWS` vaut `null` dans
[lib/constants.ts](lib/constants.ts). C'est volontaire : les `TESTIMONIALS` du site sont
des témoignages éditoriaux, pas des avis vérifiables, et Google sanctionne les notes
agrégées auto-déclarées. Pour activer les étoiles, renseigner la note et le nombre
d'avis réels de la fiche Google Business Profile.

## Envoi des emails

Les routes `POST /api/devis` et `POST /api/candidature` valident via Zod (honeypot +
rate limit 5 req/min/IP) puis envoient par SMTP via [lib/mailer.ts](lib/mailer.ts).
Sans configuration SMTP, elles répondent `503` plutôt que d'accepter silencieusement.

## Variables d'environnement

| Variable                 | Description                                  |
| ------------------------ | -------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | URL canonique (sans `/` final)               |
| `CANDIDATURE_INBOX_EMAIL`| Email destinataire des candidatures          |

## Déploiement

Recommandé sur **Vercel** :

```bash
npx vercel
```

Configurez `NEXT_PUBLIC_SITE_URL` dans les Project Settings → Environment Variables.
