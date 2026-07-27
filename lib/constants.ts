import {
  Award,
  Clock,
  Leaf,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "TGT Propreté",
  brand: "TGT Propreté Soigné",
  tagline: "Entreprise de Nettoyage Paris & Île-de-France",
  description:
    "Entreprise de nettoyage professionnel à Paris et en Île-de-France. Bureaux, copropriétés, fin de chantier, vitres, canapés, tapis. Devis gratuit sous 24h, sans engagement.",
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
  { label: "Prestations & Tarifs", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Avis", href: "/#avis" },
  { label: "Conseils", href: "/#blog" },
  { label: "Paris", href: "/zones/paris" },
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
