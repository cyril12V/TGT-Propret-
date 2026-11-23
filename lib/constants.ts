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
  foundingYear: 2018,
} as const;

/**
 * Années d'expérience, dérivées de `SITE.foundingYear`.
 * Source unique : évite les « 6+ ans » et « 8+ années » divergents d'une page à l'autre.
 */
export function getYearsOfExperience(): number {
  return new Date().getFullYear() - SITE.foundingYear;
}

/**
 * Avis Google Business Profile.
 *
 * Ces valeurs alimentent l'`aggregateRating` du JSON-LD `CleaningService` et
 * déclenchent l'affichage des étoiles dans les résultats de recherche.
 *
 * Elles doivent correspondre **exactement** à la fiche Google Business Profile :
 * Google sanctionne les notes agrégées qui ne se retrouvent nulle part. Les
 * `TESTIMONIALS` plus bas sont des témoignages éditoriaux, jamais balisés en
 * `Review` pour cette raison.
 *
 * → À mettre à jour à chaque palier d'avis (relevé du 28/07/2026 : 5,0 sur 11 avis).
 * Passer la constante à `null` retire proprement l'`aggregateRating` du site.
 */
export type GoogleReviews = {
  ratingValue: number;
  reviewCount: number;
  url: string;
};

/**
 * Identifiant Google Maps de la fiche. Toutes les URL Google du site se
 * composent à partir de lui.
 *
 * L'ancien lien était copié depuis la barre d'adresse de Maps : il portait le
 * nom de la fiche (« Entreprise de Nettoyage Paris IDF - TGT Propreté »), un
 * caractère invisible U+2060 et des paramètres de session. Un lien construit
 * sur le `place_id` ne bouge pas quand la fiche est renommée.
 */
export const GOOGLE_PLACE_ID = "ChIJ8TYHhTIT5kcRTzxSFofsBmk";

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;

export const GOOGLE_REVIEWS: GoogleReviews | null = {
  ratingValue: 5.0,
  reviewCount: 16,
  url: GOOGLE_MAPS_URL,
};

/**
 * Horaires d'ouverture — SOURCE UNIQUE.
 *
 * Ces valeurs alimentent le JSON-LD `CleaningService`. Elles doivent être
 * recopiées à l'identique sur la fiche Google Business Profile, PagesJaunes
 * et 118712 : Google croise ces sources pour établir la fiche locale, et un
 * écart entre elles dégrade la confiance accordée à l'établissement.
 */
export const OPENING_HOURS = {
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  opens: "08:00",
  closes: "19:00",
  /** Libellé affiché aux visiteurs, dérivé des mêmes valeurs. */
  label: "Du lundi au samedi, 8h – 19h",
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
  denomination: "TGT Propreté",
  /** « SASU », « SARL », « EURL »… */
  formeJuridique: null,
  /** Ex. : « 1 000 € ». */
  capitalSocial: null,
  /** 9 chiffres. Le SIRET du siège s'en déduit, il n'est pas obligatoire ici. */
  siren: null,
  /** Ville du greffe : « RCS Bobigny ». */
  rcsVille: null,
  /** « FR » + 11 chiffres, si l'entreprise est assujettie. */
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
  { num: `${getYearsOfExperience()}+`, label: "Années d'expérience" },
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
    desc: `${getYearsOfExperience()}+ années d'expérience, des dizaines de clients fidèles, une exigence constante.`,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Sophie L.",
    role: "Responsable administrative",
    text: "Service impeccable ! L'équipe est ponctuelle, discrète et très professionnelle. Nos bureaux n'ont jamais été aussi propres.",
    rating: 5,
  },
  {
    name: "Karim D.",
    role: "Gérant de boutique",
    text: "TGT Propreté s'occupe de notre magasin depuis plusieurs mois. Nous sommes très satisfaits du rendu et du sérieux de l'équipe.",
    rating: 5,
  },
  {
    name: "Julien P.",
    role: "Particulier",
    text: "Une entreprise sérieuse et réactive. Devis clair sous 24h, intervention parfaite. Je recommande sans hésitation.",
    rating: 5,
  },
  {
    name: "Émilie R.",
    role: "Architecte d'intérieur",
    text: "Nettoyage de fin de chantier nickel. Les artisans avaient fait des dégâts, ils ont tout repris en main. Mes clients étaient ravis.",
    rating: 5,
  },
];
