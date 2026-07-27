# Guide de déploiement — TGT Propreté (Vercel)

Objectif : **`git push` sur la branche `main` → Vercel redéploie automatiquement la prod** (~1 min), sans aucune manip. C'est le comportement natif de Vercel une fois le dépôt connecté.

---

## 1. Le principe (à comprendre une fois)

```
Tu modifies le code  →  commit + push sur GitHub (branche main)  →  Vercel détecte le push  →  build + déploiement auto  →  site en ligne à jour
```

- Chaque push sur `main` = déploiement de **production**.
- Chaque push sur une autre branche / PR = déploiement de **preview** (une URL de test temporaire).
- Aucun `git pull` ni relance manuelle à faire côté prod : Vercel s'occupe de tout.

---

## 2. Setup initial (une seule fois)

### 2.1 Connecter Vercel au dépôt GitHub
1. Va sur https://vercel.com → connecte-toi **avec GitHub**.
2. **Add New… → Project**.
3. Choisis le dépôt **`cyril12V/TGT-Propret-`** (celui qui reçoit tous les changements) → **Import**.
4. Vercel détecte tout seul **Next.js** — ne touche à rien :
   - Framework Preset : `Next.js`
   - Build Command : `next build` (auto)
   - Output : géré par Vercel (auto)
5. Clique **Deploy**. Au bout d'~1 min, tu as une URL `xxxxx.vercel.app`.

> Branche de production = `main` par défaut. C'est bon.

### 2.2 Variables d'environnement
Dans **Project → Settings → Environment Variables**, ajoute au minimum :

| Nom | Valeur | Environnement |
|-----|--------|---------------|
| `NEXT_PUBLIC_SITE_URL` | `https://nettoyagesidf.fr` | Production |

(Voir `.env.example` pour les variables optionnelles : avis Google, emails.)
Après ajout/modif d'une variable → **Redeploy** pour qu'elle soit prise en compte.

### 2.3 Brancher le nom de domaine
1. **Project → Settings → Domains → Add**.
2. Saisis ton domaine (ex. `tgt-proprete.fr`).
3. Vercel affiche les enregistrements DNS à créer chez ton registrar (là où tu as acheté le domaine) :
   - soit un **A record** vers l'IP indiquée,
   - soit un **CNAME** vers `cname.vercel-dns.com`.
4. Ajoute ces enregistrements chez ton registrar. Le HTTPS (certificat) est automatique.
5. Une fois le domaine actif, remets `NEXT_PUBLIC_SITE_URL` sur ce domaine et redeploy.

---

## 3. Workflow quotidien (après setup)

```bash
# tu modifies des fichiers, puis :
git add .
git commit -m "feat: ma modif"
git push
```

→ Vercel redéploie la prod tout seul. Tu peux suivre le build en direct sur le dashboard Vercel (onglet **Deployments**).

---

## 4. Bon à savoir

- **Rollback** : dans Vercel → Deployments, tu peux remettre en prod une version précédente en 1 clic.
- **Preview par PR** : chaque Pull Request obtient automatiquement une URL de preview pour valider avant de merger.
- **Emails** : l'envoi est branché sur le SMTP Hostinger via `lib/mailer.ts`. Les variables `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `MAIL_TO` et `MAIL_FROM` doivent être définies dans Vercel → Settings → Environment Variables. Si elles manquent, les routes `/api/devis` et `/api/candidature` répondent `503` au lieu d'accepter la demande sans l'envoyer.
- **Avis Google** : `aggregateRating` n'est pas émis tant que `GOOGLE_REVIEWS` vaut `null` dans `lib/constants.ts`. À renseigner avec la vraie note et le vrai nombre d'avis de la fiche Google Business Profile.
- **Search Console** : le code de vérification est commenté dans `app/layout.tsx`. À décommenter avant de soumettre le sitemap.
- **Rate-limiting API** : en mémoire (se réinitialise entre les instances serverless) — suffisant pour un site vitrine, à remplacer par un store externe (Upstash) si le trafic grimpe.
