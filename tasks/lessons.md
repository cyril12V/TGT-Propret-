# Leçons apprises

À remplir au fil des sessions. Format : date, contexte, erreur, leçon, règle ajoutée.

---

## 2026-07-28 — Un audit externe n'est pas un état des lieux

**Contexte** : refonte SEO à partir du document `Plan SEO Complet TGT Propreté nettoyagesidffr.md`.

**Erreur évitée de justesse** : le document annonçait une « architecture mono-page critique » et
demandait de créer 9 pages services. Le code en livrait déjà 12, plus 20 pages arrondissement et
un sitemap complet. Appliquer le plan à la lettre aurait produit des doublons de pages existantes
et une cannibalisation de mots-clés.

**Leçon** : lire le code avant d'appliquer un audit externe. Un audit décrit le site tel qu'il était
au moment de l'analyse, ou tel que son auteur l'a compris depuis l'extérieur. Les recommandations
restent utiles, le diagnostic est à revérifier.

**Règle** : face à un audit ou à un cahier des charges externe, commencer par établir l'état réel
(routes, données, sitemap) et signaler les écarts avant de proposer un plan.

---

## 2026-07-28 — Les pages géo se jugent au ratio de contenu unique

**Contexte** : création de 13 pages villes et refonte de 7 autres.

**Constat mesuré** : les pages villes partageaient 46 % de leurs séquences de 6 mots avec leurs
voisines, essentiellement à cause d'une grille de 12 cartes services reprenant le même `shortDesc`
sur les 40 pages géo du site. Retirer ce paragraphe des grilles a ramené le chiffre à 36 % sans
rien perdre en maillage interne, puisque les liens et les ancres restent.

**Leçon** : sur un réseau de pages locales, le nombre de mots ne dit rien. Ce qui compte est la part
de contenu qui n'existe que sur cette page. Un bloc partagé de 400 mots répété 40 fois pèse plus
lourd qu'il n'y paraît.

**Règle** : après toute création de pages géo en série, mesurer l'overlap réel entre deux pages
voisines (shingles de 6 mots) plutôt que de se fier au nombre de mots. Si un paragraphe reste vrai
en changeant le nom de la ville, il ne compte pas comme contenu local.

---

## 2026-07-28 — Une valeur métier dupliquée finit toujours par diverger

**Contexte** : incohérences trouvées en cours de refonte.

**Constat** : l'ancienneté de l'entreprise existait en quatre endroits avec deux valeurs
différentes (`SITE.yearsOfExperience: 6`, `STATS` « 8+ », un texte d'engagement « 8+ », et un
« 6+ ans » codé en dur dans le template zone). Le nombre de prestations était affiché « 13 » et
« 12 » sur la même page du hub Paris.

**Leçon** : toute donnée affichée à plusieurs endroits doit être dérivée d'une source unique.
Ces écarts ne cassent aucun test et passent la CI sans bruit, mais ils sont visibles par les
visiteurs et par Google.

**Règle** : pas de chiffre métier codé en dur dans le JSX. Dériver depuis `lib/constants.ts`
(`getYearsOfExperience()`) ou depuis la longueur du tableau de données (`SERVICES.length`).

---

## 2026-07-28 — Un avis qu'on écrit sur soi-même n'est pas un avis

**Contexte** : le site émettait un `aggregateRating` de 5.0/5 sur 4 avis dans son JSON-LD
`LocalBusiness`, calculé à partir du tableau `TESTIMONIALS`.

**Problème** : ces témoignages sont publiés par TGT Propreté sur son propre site. Les
baliser en `Review` avec une note agrégée revient à déclarer à Google des avis
auto-promotionnels, ce que ses consignes sur les données structurées interdisent
explicitement. Le risque n'est pas l'absence d'étoiles, c'est une action manuelle sur
l'ensemble des données structurées du domaine.

**Leçon** : `aggregateRating` et `Review` ne se remplissent qu'avec des avis collectés
et vérifiables par un tiers — fiche Google Business Profile, plateforme d'avis. Un
témoignage client reste parfaitement légitime sur la page, il ne doit simplement pas
être déclaré en donnée structurée.

**Règle** : toute donnée structurée qui déclenche un enrichissement visuel dans les
résultats (étoiles, prix, disponibilité) doit être adossée à une source vérifiable.
En l'absence de source, ne rien émettre plutôt qu'émettre une valeur plausible.

---

## 2026-07-28 — La casse des fichiers ne pardonne pas au déploiement

**Contexte** : remplacement du logo YEMA, renommé de `YEMA_logo.jpg` en `yema_logo.jpg`.

**Piège** : Windows et macOS ignorent la casse des noms de fichiers, Linux non. En local
tout fonctionnait. Git, avec `core.ignorecase=true`, avait conservé l'ancienne casse dans
son index alors que le code référençait la nouvelle. Sur Vercel, qui build sous Linux,
l'image aurait renvoyé un 404 — un bug invisible jusqu'à la mise en production.

Corollaire du même problème : supprimer `YEMA_logo.jpg` juste après avoir créé
`yema_logo.jpg` efface le nouveau fichier, puisque le système les considère identiques.

**Leçon** : un renommage qui ne change que la casse doit être fait explicitement dans
l'index git, via un nom temporaire intermédiaire :

```bash
git mv public/images/ANCIEN.jpg public/images/__tmp.jpg
git mv public/images/__tmp.jpg public/images/nouveau.jpg
```

**Règle** : avant tout déploiement sur un hébergeur Linux, comparer les chemins d'assets
référencés dans le code aux noms exacts de `git ls-files`. Utiliser
`git -c core.quotePath=false ls-files` : par défaut git échappe les caractères non-ASCII
en octal, ce qui fait passer des noms accentués corrects pour des divergences.

---

## 2026-07-28 — Une donnée structurée doit correspondre à du contenu visible

**Contexte** : activation de l'`aggregateRating` avec les vrais avis Google (5,0 sur 11).

**Point manqué au premier passage** : le JSON-LD `CleaningService` est émis depuis le
layout racine, donc sur les 71 pages. Or Google exige que la note déclarée corresponde à
un contenu réellement affiché sur la page qui la déclare. Elle n'était visible que sur le
hub Paris : 70 pages déclaraient une note invisible pour le visiteur.

**Correction** : bloc note Google ajouté au footer, présent partout, et lié à la fiche.

**Leçon** : le périmètre d'un balisage doit être aligné sur le périmètre du contenu qu'il
décrit. Un JSON-LD placé dans un layout s'applique à toutes les pages — il ne doit donc
contenir que des affirmations vraies et visibles sur toutes les pages.

**Règle** : après avoir ajouté un enrichissement au JSON-LD du layout, vérifier que
l'information correspondante est affichée sur toutes les pages, pas seulement sur celle
où on l'a conçue.

---

## 2026-07-28 — Deux mots-clés, une seule intention : une seule page

**Contexte** : le plan SEO demandait une page `/shampouinage-moquette-paris` alors que
`nettoyage-tapis-moquettes` existait déjà.

**Analyse** : « shampouinage moquette » (10 vol/mois) et « nettoyage tapis » (480
vol/mois) renvoient à la même prestation et à la même intention d'achat. Deux pages
distinctes se seraient disputé les mêmes requêtes, chacune affaiblissant l'autre, pour
capter un volume marginal. En revanche, la seconde moitié du besoin décrit dans le
document — décapage, cristallisation, sols durs — est un métier différent, avec un
matériel et un protocole distincts.

**Leçon** : un plan SEO raisonne par mot-clé, un site doit raisonner par intention. Deux
mots-clés qui appellent la même réponse se traitent sur une seule page ; c'est la
différence de prestation, pas la différence de formulation, qui justifie une page.

**Règle** : avant de créer une page pour un mot-clé, vérifier qu'aucune page existante
ne répond déjà à la même intention. Si c'est le cas, renforcer la page existante et
ajouter le terme à ses `keywords` et `offers` plutôt que d'en créer une seconde.

---

## 2026-07-28 — Les liens profonds doivent correspondre aux valeurs du formulaire

**Contexte** : les pages villes pointent vers `/devis?zone={slug}` pour pré-remplir le formulaire.

**Erreur** : le select « zone » de `DevisForm` ne contenait que les 20 arrondissements parisiens,
`idf` et `autre`. Un slug de commune ne correspondait à aucune option, donc le `defaultValue`
retombait sur « Sélectionner » — sans erreur, sans avertissement. Le visiteur devait resaisir
l'information que le lien était censé transmettre.

**Leçon** : un paramètre d'URL qui alimente un `<select>` doit être vérifié contre la liste réelle
des options. L'échec est silencieux par construction.

**Règle** : quand un lien pré-remplit un formulaire, tester le parcours complet, pas seulement que
la page cible répond 200.
