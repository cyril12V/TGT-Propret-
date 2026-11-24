import {
  Award,
  Clock,
  Leaf,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  /**
   * Nom de marque UNIQUE. Il n'y a volontairement plus d'`alternateName` :
   * faire cohabiter « TGT Propreté » et « TGT Propreté Soigné » dilue le
   * signal de marque et empêche Google de rattacher les mentions externes
   * (annuaires, avis, réseaux) à une seule entité.
   */
  name: "TGT Propreté",
  tagline: "Entreprise de nettoyage Paris & Île-de-France",
  /**
   * Meta description de l'accueil — 150 caractères, sous la limite de
   * troncature SERP (~155). Alimente aussi `localBusinessJsonLd` et le
   * `webPageJsonLd` de l'accueil : les trois restent ainsi cohérents.
   */
  description:
    "Entreprise de nettoyage professionnel à Paris et en Île-de-France : bureaux, copropriétés, commerces, fin de chantier, vitres. Devis gratuit sous 24h.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nettoyagesidf.fr",
  locale: "fr_FR",

  /**
   * Date d'immatriculation de la société, telle qu'inscrite au registre
   * national des entreprises (SIREN 999 540 651). Alimente le `foundingDate`
   * du JSON-LD, qui est une affirmation vérifiable sur une base publique.
   *
   * ⚠ Ne pas confondre avec `teamExperienceSince` ci-dessous. Le site
   *   déclarait `foundingYear: 2018`, ce qui faisait dire au JSON-LD que
   *   l'entreprise existait depuis 2018 alors qu'elle a été immatriculée le
   *   5 janvier 2026.
   */
  incorporationDate: "2026-01-05",

  /**
   * Année depuis laquelle les fondateurs exercent le métier, sur le terrain.
   * C'est de cela que parlent les « 8+ ans d'expérience » du site, et c'est
   * ce que dit déjà la biographie de Malika Tlili : une expertise de plus de
   * huit ans, puis la création de sa propre structure.
   *
   * ⚠ Si cette ancienneté de métier n'est pas établie, c'est ici qu'il faut
   *   agir : mettre cette valeur à l'année en cours fait disparaître toute
   *   mention d'ancienneté du site, d'un seul coup.
   */
  teamExperienceSince: 2018,
} as const;

/**
 * Années de MÉTIER des fondateurs, dérivées de `SITE.teamExperienceSince`.
 *
 * Ce n'est pas l'âge de la société, qui a été immatriculée le 5 janvier 2026
 * (voir `SITE.incorporationDate`). Les libellés du site disent donc
 * « d'expérience terrain » ou « de métier », jamais « d'existence ».
 *
 * Source unique : évite les « 6+ ans » et « 8+ années » divergents d'une
 * page à l'autre.
 */
export function getYearsOfExperience(): number {
  return new Date().getFullYear() - SITE.teamExperienceSince;
}

/**
 * Identifiant Google Maps de la fiche. Toutes les URL Google du site se
 * composent à partir de lui.
 *
 * L'ancien lien était copié depuis la barre d'adresse de Maps : il portait le
 * nom de la fiche, un caractère invisible U+2060 et des paramètres de
 * session. Un lien construit sur le `place_id` ne bouge pas quand la fiche
 * est renommée.
 */
export const GOOGLE_PLACE_ID = "ChIJ8TYHhTIT5kcRTzxSFofsBmk";

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;

/**
 * Note formatée à la française : « 5,0 » et non « 5.0 ».
 *
 * La note et le nombre d'avis ne sont plus écrits ici : ils sont lus sur la
 * fiche Google au rendu, par `getGooglePlaceData()` (lib/google-reviews.ts).
 * Les valeurs recopiées à la main — « 5,0 sur 16 avis » — avaient dérivé : la
 * fiche affichait 4,8 sur 17 au 24/11/2026.
 */
export function formatRating(value: number): string {
  return value.toFixed(1).replace(".", ",");
}

/**
 * Horaires d'ouverture — SOURCE UNIQUE, recopiée de la fiche Google.
 *
 * Relevés sur la fiche le 24/11/2026 via l'API Places : du lundi au samedi
 * 7h-minuit, dimanche 10h-18h. Le site déclarait « lundi-samedi 8h-19h »,
 * 118712 « 24h/24 7j/7 » et PagesJaunes des horaires encore différents.
 * Google croise ces sources pour établir la fiche locale : la fiche fait foi,
 * et c'est sur elle que tout le reste doit s'aligner.
 *
 * `closes: "23:59"` et non "00:00" : en schema.org, une fermeture à minuit
 * s'écrit à la fin du jour d'ouverture, sinon l'intervalle est de durée nulle.
 */
export const OPENING_HOURS = {
  semaine: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "23:59",
  },
  dimanche: {
    days: ["Sunday"],
    opens: "10:00",
    closes: "18:00",
  },
  /** Libellé affiché aux visiteurs, dérivé des mêmes valeurs. */
  label: "Du lundi au samedi 7h – minuit, dimanche 10h – 18h",
} as const;

export const MALIKA = {
  gérante: "Malika Tlili",
  initials: "MT",
  role: "Co-Gérante",
} as const;

export const CONTACT = {
  manager: "Rabah Ammouche",
  initials: "RA",
  role: "Gérant",
  phones: [
    { label: "+33 7 52 08 11 44", tel: "+33752081144" },
    { label: "+33 7 69 91 57 34", tel: "+33769915734" },
  ],
  email: "Contact@tgtproprete.fr",
  address: {
    street: "57 Av. Carnot",
    postalCode: "93140",
    city: "Bondy",
    region: "Île-de-France",
    country: "FR",
  },
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/tgt-propret%C3%A9/" },
    { name: "Instagram", url: "https://www.instagram.com/tgt.proprete/" },
    { name: "Facebook", url: "https://www.facebook.com/people/TGTPropret%C3%A9/61582833761269/" },
  ],
} as const;

/**
 * Identité légale de l'éditeur du site — à renseigner depuis le Kbis.
 *
 * L'article 6-III de la LCEN impose à une société d'afficher sa dénomination,
 * sa forme juridique, le montant de son capital social, l'adresse de son
 * siège, son numéro RCS et le nom du directeur de la publication. La page
 * ne donnait jusqu'ici que l'hébergeur.
 *
 * Chaque champ laissé à `null` est simplement omis de la page : aucune
 * mention inventée. Une seule ligne à remplir par information.
 *
 * ⚠ Je ne suis pas juriste : faire relire la page une fois remplie.
 */
export const LEGAL: {
  denomination: string;
  formeJuridique: string | null;
  capitalSocial: string | null;
  siren: string | null;
  rcsVille: string | null;
  tvaIntracommunautaire: string | null;
  directeurPublication: string;
} = {
  /** Dénomination sociale exacte, telle qu'inscrite au registre. */
  denomination: "TGT PROPRETÉ",
  /**
   * Catégorie juridique 5499 au registre national des entreprises, soit
   * « société à responsabilité limitée ». Si Rabah est associé unique, la
   * mention d'usage est « EURL » — une EURL étant juridiquement une SARL à
   * associé unique, « SARL » reste exact dans les deux cas.
   */
  formeJuridique: "SARL",
  capitalSocial: "2 000 €",
  /** 9 chiffres. Le SIRET du siège s'en déduit, il n'est pas obligatoire ici. */
  siren: "999 540 651",
  /** Siège à Bondy (93) : greffe du tribunal de commerce de Bobigny. */
  rcsVille: "Bobigny",
  /**
   * « FR » + clé + SIREN. Pour ce SIREN, le numéro serait FR49999540651.
   *
   * Volontairement laissé vide : le numéro est calculable, mais il n'est
   * valable que si l'entreprise est effectivement assujettie à la TVA. Une
   * société récente peut relever de la franchise en base, et publier un
   * numéro inactif serait une erreur. → À confirmer avec le comptable.
   */
  tvaIntracommunautaire: null,
  directeurPublication: "Rabah Ammouche",
};

export const IDF_DEPARTMENTS: readonly { code: string; name: string }[] = [
  { code: "77", name: "Seine-et-Marne" },
  { code: "78", name: "Yvelines" },
  { code: "91", name: "Essonne" },
  { code: "92", name: "Hauts-de-Seine" },
  { code: "93", name: "Seine-Saint-Denis" },
  { code: "94", name: "Val-de-Marne" },
  { code: "95", name: "Val-d'Oise" },
];

export const NAV_LINKS = [
  { label: "Notre équipe", href: "/#about" },
  { label: "Prestations & Tarifs", href: "/services" },
  { label: "Zones", href: "/zones" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Avis", href: "/#avis" },
  { label: "Conseils", href: "/#blog" },
  { label: "Contact", href: "/devis" },
] as const;

export const STATS: readonly { num: string; label: string }[] = [
  // « d'expérience terrain » et non « d'existence » : la société a été
  // immatriculée en 2026, l'ancienneté est celle du métier des fondateurs.
  { num: `${getYearsOfExperience()}+`, label: "Ans d'expérience terrain" },
  { num: "750+", label: "Clients satisfaits" },
  { num: "800+", label: "Interventions réalisées" },
  { num: "100%", label: "Satisfaction garantie" },
];

export type Engagement = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

export const ENGAGEMENTS: readonly Engagement[] = [
  {
    Icon: ShieldCheck,
    title: "Qualité irréprochable",
    desc: "Des standards élevés pour des résultats impeccables, contrôlés à chaque intervention.",
  },
  {
    Icon: Leaf,
    title: "Produits écoresponsables",
    desc: "Nous privilégions des produits respectueux de votre santé et de l'environnement.",
  },
  {
    Icon: Users,
    title: "Équipe qualifiée",
    desc: "Des professionnels formés, discrets et engagés au service de votre tranquillité.",
  },
  {
    Icon: Clock,
    title: "Intervention rapide",
    desc: "Réactivité et flexibilité — devis sous 24h, intervention selon votre planning.",
  },
  {
    Icon: Award,
    title: "Satisfaction garantie",
    desc: `${getYearsOfExperience()}+ années de métier, des clients fidèles, une exigence constante sur chaque intervention.`,
  },
];
