# Contexte Projet — TGT Propreté

## Identité
- **Nom** : TGT Propreté (TGT Propreté Soigné)
- **Activité** : Entreprise de nettoyage et entretien professionnel
- **Cible** : Particuliers, entreprises, chantiers
- **Zone** : Île-de-France (siège à Bondy, 93140)
- **Ancienneté** : Plus de 6 ans (fondée vers 2018)

## Contact
- **Responsable** : Rabah Ammouche — Chargé d'Affaire
- **Téléphones** : +33 7 52 08 11 44 · +33 7 69 91 57 34
- **Email** : Contact@tgtproprete.fr (source de vérité : `lib/constants.ts`)
- **Adresse** : 57 Av. Carnot, 93140 Bondy

## Stack Technique
- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript strict (zéro `any`)
- **Styling** : Tailwind CSS v4 (config CSS-based via `@theme`)
- **Fonts** : Cormorant Garamond (serif, titres) + Jost (sans-serif, body) via `next/font/google`
- **Validation** : Zod (formulaire candidature)
- **Déploiement** : Vercel (recommandé) — SSG pour pages publiques

## Architecture
**66 URLs indexables.** L'accueil est une page de présentation, pas le site entier.

- **Accueil `/`** : Hero, Engagements, About, Services, Réalisations, WhyUs, ZonesBand, Avis, Blog, Contact, Candidature
- **Hubs** : `/services` (12 prestations par pôle), `/zones` (Paris + communes par département)
- **Services** : `/services/[slug]` — 12 pages, 1 300 à 2 600 mots chacune
- **Géo** : `/zones/paris` + `/zones/paris/[arrondissement]` (20) + `/zones/[ville]` (20 communes sur 93, 92, 94, 78, 91)
- **Blog** : `/blog` + `/blog/[slug]` (6 articles)
- **Légal** : `/mentions-legales`, `/politique-confidentialite`
- **API** : `POST /api/devis` et `POST /api/candidature` (Zod, honeypot, rate-limit, SMTP Hostinger via `lib/mailer.ts`)

### Où vit le contenu
Tout le contenu éditorial est dans `lib/`, jamais en dur dans le JSX. Ajouter une entrée
dans un de ces fichiers crée la page **et** l'entrée de sitemap automatiquement.

| Fichier | Contenu |
|---|---|
| `lib/services.ts` | 12 services : `tldr`, `sections` (H2/H3), `process`, `faqs`, `relatedSlugs` |
| `lib/zones.ts` | 20 communes : `intro` (150-250 mots uniques), `highlights`, `keywords`, `faqs`, `nearbySlugs` |
| `lib/zones-paris.ts` | 20 arrondissements, même structure |
| `lib/articles.tsx` | 6 articles de blog |
| `lib/seo.ts` | `buildMetadata()` + tous les générateurs JSON-LD |

**Règle** : le contenu d'une page géo doit être propre à la commune. Si un paragraphe
reste vrai en changeant le nom de la ville, c'est une doorway page — à réécrire.

## Palette
- `--color-navy: #0D2244`
- `--color-navy-2: #152d5a`
- `--color-gold: #C9A84C`
- `--color-gold-2: #e8c870`
- `--color-cream: #F5F0E8`
- `--color-light: #fdfcf9`

## Priorités
1. **SEO** — meta, OG, sitemap, robots, JSON-LD LocalBusiness, structured data
2. **Performance** — SSG, next/font, next/image, Lighthouse > 90
3. **Accessibilité** — sémantique HTML5, contrastes, ARIA labels
4. **Conversion** — CTA clairs (devis + candidature)

## Services proposés
Source de vérité : `lib/services.ts`. Ne pas dupliquer la liste ici — elle a déjà divergé une fois.

**Pôle professionnel (B2B)** : restaurants & cuisines · bureaux & entreprises · copropriétés &
immeubles · cabinets médicaux & cliniques · fin de chantier · vitres & vitrines

**Particuliers & résidentiel** : nettoyage approfondi · canapés & fauteuils · tapis & moquettes ·
après sinistre · prestations sur-mesure & conciergerie

**Confort** : repassage & rangement

## Origine
Importé depuis https://github.com/ammoucheravah0-lab/TGT-Propret-.git
Fichier source : `index.html` monolithique (1404 lignes, CSS inline, JS vanilla).
Migration vers Next.js le 2026-05-11.

## Domaine & présence en ligne
- **NDD principal** : `nettoyagesidf.fr` (Vercel)
- **Google Business Profile** : déjà créé — fiche TGT Propreté visible sur Google Maps (57 Av. Carnot, Bondy)
- **Instagram** : @tgt.proprete — https://www.instagram.com/tgt.proprete/
- **LinkedIn** : https://www.linkedin.com/company/tgt-propret%C3%A9/
- **Facebook** : https://www.facebook.com/people/TGTPropret%C3%A9/61582833761269/
