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
