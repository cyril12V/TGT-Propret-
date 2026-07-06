export type Zone = {
  slug: string;
  name: string;
  postalCode: string;
  department: string;
  intro: string;
};

export const ZONES: readonly Zone[] = [
  {
    slug: "bondy",
    name: "Bondy",
    postalCode: "93140",
    department: "Seine-Saint-Denis",
    intro:
      "Siège social de TGT Propreté depuis 2018, Bondy reste notre point d'ancrage. Nous intervenons quotidiennement auprès des particuliers, commerces et bureaux de la commune, ainsi que dans tout le 93.",
  },
  {
    slug: "saint-denis",
    name: "Saint-Denis",
    postalCode: "93200",
    department: "Seine-Saint-Denis",
    intro:
      "Service de nettoyage et entretien à Saint-Denis : particuliers, entreprises et chantiers de rénovation.",
  },
  {
    slug: "noisy-le-sec",
    name: "Noisy-le-Sec",
    postalCode: "93130",
    department: "Seine-Saint-Denis",
    intro:
      "Équipe de nettoyage disponible à Noisy-le-Sec pour vos besoins ponctuels ou contrats d'entretien réguliers.",
  },
  {
    slug: "pantin",
    name: "Pantin",
    postalCode: "93500",
    department: "Seine-Saint-Denis",
    intro:
      "Prestations de propreté à Pantin pour les copropriétés, bureaux, et particuliers.",
  },
  {
    slug: "montreuil",
    name: "Montreuil",
    postalCode: "93100",
    department: "Seine-Saint-Denis",
    intro:
      "Nettoyage de fin de chantier, ménage à domicile et entretien d'entreprises à Montreuil.",
  },
  {
    slug: "aulnay-sous-bois",
    name: "Aulnay-sous-Bois",
    postalCode: "93600",
    department: "Seine-Saint-Denis",
    intro:
      "Service de propreté à Aulnay-sous-Bois pour les particuliers et professionnels locaux.",
  },
  {
    slug: "le-raincy",
    name: "Le Raincy",
    postalCode: "93340",
    department: "Seine-Saint-Denis",
    intro:
      "Nettoyage professionnel au Raincy : maisons, copropriétés et locaux commerciaux.",
  },
] as const;

export function getZoneBySlug(slug: string): Zone | undefined {
  return ZONES.find((z) => z.slug === slug);
}
