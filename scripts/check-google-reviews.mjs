// ─────────────────────────────────────────────────────────────────────────────
// Diagnostic des avis Google — Places API (New)
//
//   node --env-file=.env.local scripts/check-google-reviews.mjs
//
// Interroge la fiche Google Business Profile palier par palier et dit lequel
// répond. Le texte des avis appartient au palier « Enterprise + Atmosphere » :
// tant que ce palier reste muet, le site affiche ses témoignages de secours.
//
// À relancer après chaque changement dans la console Google Cloud pour savoir
// en dix secondes si les avis passent, sans redéployer le site.
// ─────────────────────────────────────────────────────────────────────────────

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

// Lieu de contrôle : des milliers d'avis publics. S'il ne renvoie rien non
// plus, le problème vient du projet Google Cloud, pas de la fiche TGT.
const CONTROL_PLACE_ID = "ChIJLU7jZClu5kcR4PcOOO6p3I0"; // Tour Eiffel

const TIERS = [
  { sku: "Essentials", fields: "id,formattedAddress" },
  { sku: "Pro", fields: "rating,userRatingCount" },
  { sku: "Enterprise", fields: "editorialSummary" },
  { sku: "Enterprise + Atmosphere", fields: "reviews" },
];

async function callPlaces(placeId, fields) {
  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=fr&regionCode=FR`,
    {
      headers: {
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": fields,
      },
    },
  );

  const body = await response.json();
  return { status: response.status, body };
}

/**
 * Un palier peut ne rien renvoyer pour deux raisons opposées : la fiche ne
 * possède pas cette donnée, ou le projet Google Cloud n'a pas droit au palier.
 * On tranche en rejouant le même appel sur un lieu de contrôle qui, lui,
 * possède à coup sûr la donnée.
 */
async function probe(sku, fields) {
  const own = await callPlaces(PLACE_ID, fields);

  if (own.status !== 200) {
    const message = own.body?.error?.message ?? "erreur inconnue";
    return { sku, ok: false, blocked: true, line: `HTTP ${own.status} — ${message}` };
  }

  const keys = Object.keys(own.body);
  if (keys.length > 0) {
    const detail = own.body.reviews
      ? `${own.body.reviews.length} avis`
      : keys.join(", ");
    return { sku, ok: true, blocked: false, line: detail };
  }

  const control = await callPlaces(CONTROL_PLACE_ID, fields);
  const controlServed = Object.keys(control.body ?? {}).length > 0;

  return {
    sku,
    ok: false,
    blocked: !controlServed,
    line: controlServed
      ? "vide sur la fiche TGT, mais servi sur le lieu de contrôle → la donnée n'existe pas sur cette fiche"
      : "vide ici ET sur le lieu de contrôle → palier non servi à ce projet Google Cloud",
  };
}

async function main() {
  if (!API_KEY || !PLACE_ID) {
    console.error(
      "GOOGLE_PLACES_API_KEY et GOOGLE_PLACE_ID doivent être définies.\n" +
        "Lance le script avec :  node --env-file=.env.local scripts/check-google-reviews.mjs",
    );
    process.exitCode = 1;
    return;
  }

  console.log(`\nFiche TGT (${PLACE_ID}) — paliers de la Places API (New) :\n`);

  const results = [];
  for (const { sku, fields } of TIERS) {
    const result = await probe(sku, fields);
    results.push(result);
    console.log(`  ${result.ok ? "✓" : "✗"} ${sku.padEnd(24)} ${result.line}`);
  }

  const reviews = results.at(-1);

  if (reviews.ok) {
    console.log(
      "\n✅ Les avis remontent. Le site les affichera au prochain rafraîchissement " +
        "du cache (6 h), ou immédiatement après un redéploiement.\n",
    );
    return;
  }

  console.log(
    reviews.blocked
      ? "\n⚠️  Le palier « Enterprise + Atmosphere » n'est pas servi à ce projet\n" +
          "   Google Cloud — c'est lui qui porte le texte des avis.\n" +
          "   À vérifier sur console.cloud.google.com, projet de cette clé :\n" +
          "     1. un compte de facturation actif est rattaché au projet\n" +
          "     2. l'API « Places API (New) » est activée\n" +
          "     3. la clé n'est pas restreinte à d'autres API\n" +
          "   Le code du site est prêt : aucune modification ne sera nécessaire.\n"
      : "\n⚠️  Le projet Google Cloud a bien accès au palier, mais la fiche TGT ne\n" +
          "   renvoie aucun avis : probablement des notes sans commentaire écrit.\n" +
          "   Il faut alors demander à des clients de laisser un avis rédigé.\n",
  );
}

main();
