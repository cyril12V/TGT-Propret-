# TGT Propreté

Site officiel de **TGT Propreté** — entretien et nettoyage professionnel en Île-de-France.

Stack : **Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 · Zod**.

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

## Arborescence

```
app/
  layout.tsx                  Layout racine (metadata, fonts, JSON-LD LocalBusiness)
  page.tsx                    Page d'accueil one-page
  globals.css                 Tailwind v4 + design tokens (@theme)
  sitemap.ts                  Sitemap dynamique (services + zones)
  robots.ts                   robots.txt
  opengraph-image.tsx         OG image dynamique 1200x630
  not-found.tsx               Page 404
  services/[slug]/page.tsx    Page SEO par service (SSG)
  zones/[ville]/page.tsx      Page SEO local par ville (SSG)
  mentions-legales/page.tsx
  politique-confidentialite/page.tsx
  api/candidature/route.ts    POST candidature (Zod + rate limit)
components/
  layout/    Nav, Footer
  sections/  Hero, About, Services, WhyUs, ContactBand, CandidatureForm
  ui/        Reveal, SectionLabel
lib/
  constants.ts   Identité, contact, navigation
  services.ts    Catalogue des 8 services + slugs SEO
  zones.ts       Villes d'intervention (SEO local)
  seo.ts         Helpers metadata + JSON-LD
public/images/   logo.png, aspirateur.jpg
tasks/           Contexte projet, todo, lessons, bugs
```

## SEO

- **Metadata API** (titre, description, OG, Twitter, canonical) sur chaque page
- **Structured data JSON-LD** :
  - `CleaningService` (LocalBusiness) dans le layout
  - `Service` sur les pages /services/[slug]
  - `BreadcrumbList` sur les pages internes
- **Sitemap dynamique** (`/sitemap.xml`) incluant home, services, zones, pages légales
- **Robots** (`/robots.txt`) — `/api/` exclu
- **OG image** générée dynamiquement (`/opengraph-image`)
- **SSG par défaut** sur toutes les pages publiques
- **Pages SEO local** par ville (`/zones/[ville]`) pour capter la recherche géolocalisée

## Branchement email candidature

Le formulaire `POST /api/candidature` valide les données via Zod et log la candidature. Pour activer l'envoi d'email, ouvrez [app/api/candidature/route.ts](app/api/candidature/route.ts) et branchez Resend / Mailgun / SendGrid / SMTP à l'emplacement indiqué.

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
