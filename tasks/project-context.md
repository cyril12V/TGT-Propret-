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
- **Email** : Tgtproprete@gmail.com
- **Adresse** : 57 Av. Carnot, 93140 Bondy

## Stack Technique
- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript strict (zéro `any`)
- **Styling** : Tailwind CSS v4 (config CSS-based via `@theme`)
- **Fonts** : Cormorant Garamond (serif, titres) + Jost (sans-serif, body) via `next/font/google`
- **Validation** : Zod (formulaire candidature)
- **Déploiement** : Vercel (recommandé) — SSG pour pages publiques

## Architecture
- **One-page** sur `/` avec sections : Hero, About, Services, Why Us, Contact Band, Candidature
- **Pages SEO dédiées** : `/services/[slug]`, `/zones/[ville]`, `/mentions-legales`, `/politique-confidentialite`
- **API** : `POST /api/candidature` (validation Zod, prêt à brancher SMTP/Resend/Mailgun)

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
1. Nettoyage approfondi
2. Nettoyage de vitres
3. Entreprises & bureaux
4. Nettoyage chantier (fin de travaux)
5. Repassage & rangement
6. Désinfestation
7. Après déménagement
8. Sur mesure

## Origine
Importé depuis https://github.com/ammoucheravah0-lab/TGT-Propret-.git
Fichier source : `index.html` monolithique (1404 lignes, CSS inline, JS vanilla).
Migration vers Next.js 15 le 2026-05-11.

## Domaine & présence en ligne
- **NDD principal** : `nettoyagesidf.fr` (Vercel)
- **Google Business Profile** : déjà créé — fiche TGT Propreté visible sur Google Maps (57 Av. Carnot, Bondy)
- **Instagram** : @tgt.proprete — https://www.instagram.com/tgt.proprete/
- **LinkedIn** : https://www.linkedin.com/company/tgt-propret%C3%A9/
- **Facebook** : https://www.facebook.com/people/TGTPropret%C3%A9/61582833761269/
