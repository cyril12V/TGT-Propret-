# Historique des bugs

À remplir au fil des sessions. Format : symptôme, cause, fix, leçon.

---

## 2026-08-10 — Deux visuels de prestations invisibles en production

**Symptôme** : sur la home, les cartes « Copropriétés & Immeubles » et « Cabinets Médicaux
& Cliniques » affichaient le texte alternatif à la place de la photo. Les autres cartes
s'affichaient normalement.

**Cause** : les fichiers s'appelaient `bg_Copropriétés&Immeubles.jpg` et
`bg_CabinetsMédicaux&Cliniques.jpg`. Servis en statique ils répondaient bien (200), mais
l'optimiseur d'images de Next (`/_next/image?url=…`) les rejetait en 400 à cause des
caractères accentués dans le nom. Le `&` seul ne pose pas de problème :
`bg-bureaux&entreprise.jpg` fonctionne.

**Fix** : renommage en ASCII kebab-case — `bg_coproprietes-immeubles.jpg` et
`bg_cabinets-medicaux-cliniques.jpg` — et mise à jour des trois références dans
`lib/services.ts`.

**Pourquoi ça n'avait pas été vu** : dans l'ancienne carte, l'image servait de fond
derrière un dégradé blanc à 95 % d'opacité. Une image absente ressemblait à une carte
claire un peu vide. Le passage en pleine largeur, où le visuel occupe un panneau dédié,
a rendu le trou évident.

**Leçon** : un nom de fichier d'asset ne doit contenir que de l'ASCII minuscule et des
tirets. Même famille de bug que la casse du logo YEMA (voir `lessons.md`).

---

## 2026-08-11 — Le voile de fermeture du menu mobile mesurait 4 pixels

**Symptôme** : sur mobile, cliquer à côté du menu ouvert ne le fermait pas.

**Cause** : le voile est `fixed inset-0 top-[64px]`, enfant du `<nav>`. Or la nav
porte `backdrop-blur-xl`, et un `backdrop-filter` fait de l'élément le **bloc
conteneur de ses descendants `fixed`**. `inset-0` se résolvait donc sur la boîte de
la nav (69px de haut) et non sur la fenêtre : `top: 64px` + `bottom: 0` = 5px.

**Fix** : `top-full` + `h-[100dvh]` sur le voile ; `top-full` +
`max-h-[calc(100dvh-100%)] overflow-y-auto` sur le panneau (le `100%` se résout sur
la hauteur de la nav, donc la valeur s'ajuste toute seule).

**Leçon** : `backdrop-filter`, `filter` et `transform` créent un bloc conteneur pour
les descendants positionnés. Un `fixed` à l'intérieur n'est plus relatif à la fenêtre.

---

## 2026-08-11 — La grille des prestations restait invisible

**Symptôme** : après le passage des prestations en pleine largeur, la grille
n'apparaissait plus du tout sur certaines hauteurs d'écran — fond crème vide.

**Cause** : `Reveal` observait ses enfants avec `threshold: 0.1`. En trois colonnes
la grille faisait ~2 500px ; en pleine largeur elle est passée à ~7 800px. Sur une
fenêtre de 950px, le ratio visible plafonne à 12 % — et tombe sous les 10 % requis
dès qu'on descend sous 780px de haut. Le seuil n'était alors jamais franchi.

**Fix** : `threshold: 0` (déclenchement au premier pixel visible) + marge basse
négative pour conserver l'apparition progressive, et marge haute de 2000px pour
qu'un bloc enjambé par un saut de défilement se révèle quand même.

**Leçon** : un seuil d'IntersectionObserver exprimé en ratio est piégeux dès que
l'élément peut devenir plus haut que la fenêtre. Préférer `threshold: 0` + `rootMargin`.
