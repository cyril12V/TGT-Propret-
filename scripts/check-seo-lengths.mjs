// ─────────────────────────────────────────────────────────────────────────────
// Contrôle des longueurs de métadonnées SEO
//
//   npm run build && node scripts/check-seo-lengths.mjs
//
// Parcourt le HTML généré dans .next/server/app, mesure chaque <title> et
// chaque <meta name="description">, et sort en erreur si l'un dépasse la
// limite de troncature des résultats de recherche.
//
// Les longueurs se mesurent sur le HTML RENDU, pas sur les gabarits : c'est le
// seul moyen de couvrir d'un coup les 16 services et les 43 pages zones, dont
// les balises sont composées à la volée.
// ─────────────────────────────────────────────────────────────────────────────

import { promises as fs } from "node:fs";
import path from "node:path";

const RACINE = ".next/server/app";
const MAX_TITLE = 60;
const MAX_DESCRIPTION = 155;

/** Mots-clés métier : chaque page de service doit en porter un dans son title. */
const MOTS_METIER = [
  "nettoyage",
  "bionettoyage",
  "désinfection",
  "rénovation",
  "repassage",
];

/** Pages techniques sans métadonnées éditoriales, hors contrôle. */
const IGNOREES = ["_not-found", "_global-error", "_error"];

function decode(html) {
  return html
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function listerPages(dossier) {
  const trouvees = [];
  for (const entree of await fs.readdir(dossier, { withFileTypes: true })) {
    const chemin = path.join(dossier, entree.name);
    if (entree.isDirectory()) trouvees.push(...(await listerPages(chemin)));
    else if (entree.name.endsWith(".html")) trouvees.push(chemin);
  }
  return trouvees;
}

async function main() {
  let pages;
  try {
    pages = (await listerPages(RACINE)).sort();
  } catch {
    console.error(
      `Dossier ${RACINE} introuvable. Lance « npm run build » d'abord.`,
    );
    process.exitCode = 1;
    return;
  }

  let controlees = 0;
  const problemes = [];

  for (const fichier of pages) {
    const relatif = fichier.slice(RACINE.length).replace(/\\/g, "/");
    if (IGNOREES.some((n) => relatif.includes(n))) continue;

    const html = await fs.readFile(fichier, "utf8");
    const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) ?? ["", ""])[1]);
    const description = decode(
      (html.match(/<meta name="description" content="([^"]*)"/) ?? ["", ""])[1],
    );

    if (!title) continue;
    controlees += 1;

    if (title.length > MAX_TITLE) {
      problemes.push(`${relatif} — title ${title.length} car. : « ${title} »`);
    }
    if (description.length > MAX_DESCRIPTION) {
      problemes.push(`${relatif} — description ${description.length} car.`);
    }
    if (
      relatif.startsWith("/services/") &&
      !MOTS_METIER.some((m) => title.toLowerCase().includes(m))
    ) {
      problemes.push(`${relatif} — title sans mot-clé métier : « ${title} »`);
    }
  }

  console.log(`${controlees} pages contrôlées.`);

  if (problemes.length === 0) {
    console.log(
      `✅ Aucun dépassement (title ≤ ${MAX_TITLE}, description ≤ ${MAX_DESCRIPTION}).`,
    );
    return;
  }

  console.log(`\n❌ ${problemes.length} problème(s) :\n`);
  for (const p of problemes) console.log(`  ${p}`);
  process.exitCode = 1;
}

main();
