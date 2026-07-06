# Guide de déploiement — TGT Propreté (Netlify)

Pipeline cible : **`git push` → GitHub `ELMDigitalAgency/tgt-proprete-paris` → Netlify auto-deploy** (aucune intervention manuelle après le premier paramétrage).

---

## 1. Workflow quotidien (après setup initial)

Tu modifies un fichier, puis :

```bash
npm run ship
```

Ce script enchaîne :
1. `npm run typecheck` (TypeScript strict)
2. `npm run lint` (ESLint)
3. `git add .`
4. `git commit -m "chore: update <date>"`
5. `git push`

Dès que le push touche GitHub, **Netlify reçoit un webhook et déploie automatiquement** (~2 min). Aucune action manuelle.

Si tu veux un message de commit personnalisé, fais le commit toi-même avant `npm run ship` :

```bash
git add . && git commit -m "feat: nouvelle section témoignages"
git push
```

---

## 2. Setup initial (à faire une seule fois)

### 2.1 GitHub — repo existe déjà

Le repo a été créé sur `github.com/ELMDigitalAgency/tgt-proprete-paris`. Vérifier la connexion locale :

```bash
git remote -v
# origin  https://github.com/ELMDigitalAgency/tgt-proprete-paris.git (fetch)
# origin  https://github.com/ELMDigitalAgency/tgt-proprete-paris.git (push)
```

### 2.2 Connexion Netlify

1. Aller sur https://app.netlify.com/start
2. **Import an existing project** → **Deploy with GitHub**
3. Autoriser Netlify à accéder à l'org `ELMDigitalAgency` si demandé
4. Sélectionner le repo `tgt-proprete-paris`
5. Branch to deploy : `main`
6. Build settings (auto-détectés grâce à `netlify.toml`) :
   - Build command : `npm run build`
   - Publish directory : `.next`
   - Plugin : `@netlify/plugin-nextjs` (auto-installé)
7. **Variables d'environnement** (Site settings → Environment variables) :

   | Variable | Valeur |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://tgt-proprete-paris.fr` |
   | `CANDIDATURE_INBOX_EMAIL` | `Tgtproprete@gmail.com` |

8. **Deploy site**. Premier build ~2 min. URL provisoire : `<nom-random>.netlify.app`.

### 2.3 Domaine personnalisé

#### Côté Netlify
- Site settings → **Domain management** → **Add custom domain** → `tgt-proprete-paris.fr`
- Ajouter aussi `www.tgt-proprete-paris.fr` (Netlify gère la redirection automatiquement)

#### Côté registrar (OVH/Gandi/IONOS — selon où le client achète le domaine)

Option A — Netlify DNS (recommandé, le plus simple) :
- Dans Netlify : **Set up Netlify DNS**
- Netlify fournit 4 nameservers (ex. `dns1.p01.nsone.net`, etc.)
- Chez le registrar : remplacer les nameservers du domaine par ceux de Netlify
- Tout le reste (HTTPS, sous-domaines) est géré automatiquement

Option B — DNS chez le registrar :
- Type `A` : `@` → `75.2.60.5` (IP Netlify, à confirmer dans l'UI)
- Type `CNAME` : `www` → `<nom-site>.netlify.app`

**HTTPS** : Netlify génère automatiquement un certificat Let's Encrypt dans les 5 minutes suivant la propagation DNS.

---

## 3. Google Search Console

1. https://search.google.com/search-console → **Ajouter une propriété** → Préfixe URL : `https://tgt-proprete-paris.fr`
2. Méthode **Balise HTML** → copier le code de vérification
3. Dans [app/layout.tsx](app/layout.tsx) ligne 55, décommenter :
   ```tsx
   verification: {
     google: "le-code-copié",
   },
   ```
4. `npm run ship` → Netlify redéploie → cliquer **Vérifier** dans Search Console
5. Search Console → **Sitemaps** → ajouter `sitemap.xml`

---

## 4. Google Business Profile (priorité absolue côté client)

Sa fiche existe déjà (lien Google Maps fourni). À optimiser :

- [ ] **Photos** : 10+ photos (équipe, locaux, chantiers). Booste fortement le classement Local Pack.
- [ ] **Description** : reprendre celle du site (mots-clés "entreprise de nettoyage Paris", services)
- [ ] **Catégorie principale** : "Service de nettoyage" + secondaires (bureaux, tapis, etc.)
- [ ] **Services + tarifs** : ajouter chaque service avec fourchette de prix
- [ ] **Zone de service** : étendre à Paris + arrondissements
- [ ] **Lien site web** : `https://tgt-proprete-paris.fr` une fois en ligne
- [ ] **Avis** : viser 5-10 avis 5 étoiles rapidement (envoyer le lien d'avis aux clients existants)
- [ ] **Posts hebdomadaires** : Google indexe les posts GMB (1/semaine minimum)

**Pourquoi c'est critique** : 60 % des clics sur "entreprise de nettoyage Paris [N]" vont au Local Pack, pas aux résultats organiques. Sans GBP optimisée, on perd la majorité du trafic.

---

## 5. Branchement email candidatures et devis

Actuellement, les API `/api/devis` et `/api/candidature` valident les données puis **loggent dans la console Netlify** (visibles dans Functions → Logs) sans envoyer d'email.

Pour activer Resend (recommandé, gratuit 3 000 emails/mois) :

1. Créer compte https://resend.com
2. Domains → Add `tgt-proprete-paris.fr` → ajouter les DNS DKIM fournis
3. Générer une API key (Settings → API keys)
4. Netlify → Site settings → Environment variables → ajouter `RESEND_API_KEY=re_...`
5. En local : `npm install resend && git add . && git commit -m "feat: branchement Resend"`
6. Décommenter les blocs Resend dans :
   - [app/api/devis/route.ts](app/api/devis/route.ts) (lignes 78-86)
   - [app/api/candidature/route.ts](app/api/candidature/route.ts) (lignes 66-74)
7. `npm run ship` → Netlify redéploie

---

## 6. Checklist post-déploiement

À faire dans les 24h après mise en ligne :

- [ ] `https://tgt-proprete-paris.fr` charge en HTTPS
- [ ] `https://www.tgt-proprete-paris.fr` redirige vers la version sans `www`
- [ ] Sitemap accessible : `https://tgt-proprete-paris.fr/sitemap.xml`
- [ ] Robots.txt OK : `https://tgt-proprete-paris.fr/robots.txt`
- [ ] OG image fonctionne : tester un partage WhatsApp/LinkedIn du lien
- [ ] Lighthouse ≥ 90 sur les 4 critères : https://pagespeed.web.dev/?url=https%3A%2F%2Ftgt-proprete-paris.fr%2F
- [ ] Rich Results Test : https://search.google.com/test/rich-results
- [ ] Sitemap soumis dans Search Console
- [ ] Fiche Google Business mise à jour avec le nouveau lien site
- [ ] Test formulaire `/devis` (vérifier réception côté inbox)
- [ ] Navigation mobile testée (sticky CTA, formulaire, menu hamburger)

---

## 7. Surveillance & monitoring

### Netlify Analytics (payant ~9 $/mois)
Pas nécessaire au démarrage. Plausible (~9 €/mois) ou Google Analytics 4 (gratuit avec bannière cookies) sont des alternatives plus économiques.

### Google Search Console (gratuit)
- Onglet **Performance** : suivre les positions sur les mots-clés cibles ("entreprise de nettoyage Paris", "Paris 17", etc.)
- **Premiers résultats** attendus : 4 à 8 semaines après l'indexation
- **Top 10** sur "entreprise de nettoyage Paris" : 3 à 6 mois (combiné GBP + backlinks)

---

## 8. Prochaines optimisations (post-déploiement)

Non bloquant pour la mise en ligne, mais booste le SEO :

1. **Backlinks** : annuaires pro (Pages Jaunes Pro, Yelp, Yellow Pages, BNI, associations de syndic). Cible : 50–80 domaines référents en 6 mois.
2. **Photos réelles** : remplacer `/public/images/aspirateur.jpg` et le logo placeholder par des photos d'équipe et de chantiers.
3. **Avis Google** : viser 30+ avis 5 étoiles dans 6 mois.
4. **Articles blog** : 2 nouveaux articles/mois (longue traîne). Idées : "Nettoyage Airbnb Paris", "Désinfection bureaux", "Sortie containers : guide syndic".
5. **Plausible** ou **GA4** pour le monitoring trafic.

---

## En cas de problème

| Symptôme | Cause probable | Solution |
|---|---|---|
| Build Netlify échoue | Variable d'env manquante | Site settings → Environment variables |
| Page blanche après push | Erreur runtime | Netlify → Deploys → Function logs |
| HTTPS pas généré | DNS non propagé | Attendre 5min–24h, vérifier https://dnschecker.org |
| Formulaire ne reçoit rien | Email pas branché | Voir section 5 (Resend) |
| `npm run ship` échoue | TS ou lint erreur | Corriger, relancer |
| Lighthouse < 90 | Image lourde ou JS non utilisé | Audit complet via Lighthouse CI |

---

## Astuce : déploiements preview pour chaque branche

Si tu crées une branche (`git checkout -b feature/x`) puis tu push, Netlify déploie automatiquement une **URL de preview** distincte (ex. `feature-x--tgt-proprete-paris.netlify.app`). Pratique pour montrer une nouveauté au client avant de merger sur `main`.

Configuration par défaut, rien à faire.
