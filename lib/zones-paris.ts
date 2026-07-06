export type ParisArrondissement = {
  slug: string;
  number: number;
  name: string;
  postalCode: string;
  district: string;
  intro: string;
  highlights: string[];
  keywords: string[];
};

export const PARIS_ARRONDISSEMENTS: readonly ParisArrondissement[] = [
  {
    slug: "1er",
    number: 1,
    name: "1er arrondissement",
    postalCode: "75001",
    district: "Louvre — Châtelet — Les Halles",
    intro:
      "Le 1er arrondissement concentre quelques-uns des actifs les plus emblématiques de Paris : musée du Louvre, jardin des Tuileries, Palais Royal, place Vendôme, Comédie-Française, Forum des Halles. Le bâti y est hétérogène — immeubles XVIIIe haussmanniens, hôtels particuliers du Faubourg, surfaces commerciales modernes du Forum, sièges sociaux discrets autour de la rue de Rivoli et de l'avenue de l'Opéra. TGT Propreté intervient dans le 1er auprès de boutiques de luxe de la place Vendôme et de la rue Saint-Honoré (nettoyage avant ouverture, vitrines impeccables, marbres et bronzes des halls), de cabinets juridiques et financiers (rue de la Banque, rue du Mont Thabor), et de copropriétés résidentielles du Palais Royal ou de la rue Sainte-Anne. Les particularités du 1er : flux touristique extrêmement dense exigeant un entretien renforcé des parties communes recevant du public, contraintes de stationnement et zones piétonnes (Halles, Tuileries), et exigences strictes de discrétion dans les immeubles institutionnels et les hôtels d'affaires. Pour le secteur tertiaire haut de gamme, nous proposons des contrats avec interventions matinales (5h-8h) afin de finir avant la prise de poste. Devis gratuit sous 24h après visite sur place, conditions confidentielles pour les enseignes de luxe.",
    highlights: [
      "Boutiques de luxe place Vendôme et rue Saint-Honoré — interventions avant ouverture",
      "Cabinets juridiques et financiers (rue de la Banque, Palais-Royal)",
      "Copropriétés Palais Royal, rue Sainte-Anne, Tuileries",
      "Forum des Halles et zones piétonnes — logistique adaptée",
    ],
    keywords: [
      "entreprise de nettoyage Paris 1",
      "société de nettoyage Paris 1er",
      "nettoyage Paris 1",
      "nettoyage Louvre Châtelet",
      "nettoyage 75001",
    ],
  },

  {
    slug: "5e",
    number: 5,
    name: "5e arrondissement",
    postalCode: "75005",
    district: "Quartier Latin — Sorbonne — Panthéon",
    intro:
      "Le 5e arrondissement est le berceau universitaire de Paris : Sorbonne, Collège de France, Panthéon, Mutualité, bibliothèque Sainte-Geneviève, École Normale Supérieure. À cette densité académique s'ajoutent les rues commerçantes Mouffetard et Monge, les cabinets de professions libérales du boulevard Saint-Germain, et des copropriétés résidentielles haut standing du Val-de-Grâce et de Cluny. TGT Propreté intervient dans le 5e auprès d'établissements d'enseignement supérieur et leurs annexes (bureaux, bibliothèques, amphithéâtres), de librairies et maisons d'édition (rue des Écoles, rue des Bernardins), de cabinets de médecins, avocats et notaires concentrés autour du boulevard Saint-Michel et du jardin des Plantes, ainsi que de résidences familiales de la rue Mouffetard et de Cluny. Les spécificités du 5e : bâti ancien (XVIIe-XIXe), nombreuses copropriétés sans ascenseur avec escaliers en pierre, contraintes de stationnement difficiles, et public résidentiel souvent universitaire ou senior nécessitant flexibilité sur les horaires d'intervention. Pour les cabinets professionnels, nous proposons des contrats avec intervention en dehors des heures d'ouverture, respect des dossiers confidentiels (cabinet médical, étude notariale). Devis gratuit sous 24h.",
    highlights: [
      "Établissements universitaires (Sorbonne, Panthéon, ENS) et annexes",
      "Cabinets de professions libérales (médecins, avocats, notaires)",
      "Librairies et maisons d'édition rue des Écoles, Bernardins",
      "Copropriétés Val-de-Grâce, Cluny, rue Mouffetard",
    ],
    keywords: [
      "entreprise de nettoyage Paris 5",
      "société de nettoyage Paris 5",
      "nettoyage Quartier Latin",
      "nettoyage cabinet médical Paris",
      "nettoyage 75005",
    ],
  },

  {
    slug: "6e",
    number: 6,
    name: "6e arrondissement",
    postalCode: "75006",
    district: "Saint-Germain-des-Prés — Luxembourg — Odéon",
    intro:
      "Le 6e arrondissement est l'un des plus chers et prestigieux de Paris : Saint-Germain-des-Prés, jardin du Luxembourg, Odéon, Saint-Sulpice. Le bâti y est presque exclusivement haussmannien haut de gamme, avec une concentration unique de boutiques de luxe (rue de Sèvres, boulevard Saint-Germain), de galeries d'art, de maisons d'édition historiques (Grasset, Gallimard à proximité), et de cabinets de professions libérales prestigieux. La densité résidentielle haut standing y est exceptionnelle. TGT Propreté intervient dans le 6e auprès de copropriétés haut de gamme de la rue de Tournon, du boulevard Raspail et de la rue de Vaugirard, de boutiques de la rue de Sèvres, de galeries de la rue de Seine et de la rue Mazarine, et de cabinets juridiques et médicaux concentrés autour de Saint-Sulpice. Les particularités du 6e : niveau d'exigence visuel maximal (les copropriétés haut standing ont des halls marbre, miroirs anciens, ascenseurs vintage à banquette nécessitant un entretien soigné), discrétion absolue exigée par la clientèle résidentielle internationale, et contraintes d'accès strictes (PC sécurité, gardiens, codes). Nos contrats dans le 6e incluent systématiquement un référent unique côté TGT, des passages réguliers fixes (jour et heure constants), et un cahier de liaison avec le gardien. Devis gratuit sous 24h après visite.",
    highlights: [
      "Copropriétés haut standing rue de Tournon, Raspail, Vaugirard",
      "Boutiques de luxe rue de Sèvres et boulevard Saint-Germain",
      "Galeries d'art rue de Seine, rue Mazarine, rue Jacob",
      "Cabinets juridiques et médicaux Saint-Sulpice, Odéon",
    ],
    keywords: [
      "entreprise de nettoyage Paris 6",
      "société de nettoyage Paris 6",
      "nettoyage Saint-Germain-des-Prés",
      "nettoyage Odéon Paris",
      "nettoyage 75006",
    ],
  },

  {
    slug: "7e",
    number: 7,
    name: "7e arrondissement",
    postalCode: "75007",
    district: "Tour Eiffel — Invalides",
    intro:
      "Le 7e arrondissement de Paris concentre une densité unique d'institutions, d'ambassades et de logements de standing : Assemblée Nationale, ministères, Invalides, Tour Eiffel, École Militaire, musée d'Orsay, musée du Quai Branly. Le bâti haussmannien y est dominant — appartements de 100 à 300 m² avec moulures, parquets Versailles, marbres et boiseries qui exigent des produits adaptés. TGT Propreté intervient dans le 7e auprès de propriétaires exigeants, de cabinets d'avocats et d'agences immobilières prestigieuses du Faubourg Saint-Germain et de la rue de Grenelle. Notre équipe maîtrise les contraintes spécifiques de l'arrondissement : codes d'accès renforcés des immeubles institutionnels, planning d'intervention compatible avec les contrôles d'accès, discrétion absolue dans les résidences accueillant des personnalités. Nos prestations couvrent l'ensemble des besoins : nettoyage approfondi de pied-à-terre, entretien régulier d'appartements familiaux, nettoyage de vitres haussmanniennes (jusqu'à 4 mètres de hauteur), entretien des parties communes pour les copropriétés de standing. Pour les bureaux du 7e (notamment autour de la rue Saint-Dominique et du boulevard Saint-Germain), nous proposons des contrats d'entretien adaptés aux activités de conseil, de presse et d'institutions. Devis sous 24h après visite sur place ou échange téléphonique. Nous intervenons sans engagement, avec une équipe sélectionnée, formée et assurée en responsabilité civile professionnelle.",
    highlights: [
      "Bâti haussmannien et XVIIIe — produits adaptés (marbre, parquet Versailles, boiseries)",
      "Ambassades et résidences institutionnelles — accès sécurisé et discrétion",
      "Bureaux haut de gamme rue Saint-Dominique, boulevard Saint-Germain",
      "Logements familiaux haut standing du Champ-de-Mars à Solférino",
    ],
    keywords: [
      "entreprise de nettoyage Paris 7",
      "société de nettoyage Paris 7",
      "nettoyage Paris 7",
      "nettoyage appartement Paris 7",
      "nettoyage 75007",
    ],
  },

  {
    slug: "8e",
    number: 8,
    name: "8e arrondissement",
    postalCode: "75008",
    district: "Champs-Élysées — Madeleine",
    intro:
      "Le 8e arrondissement est le cœur économique et tertiaire de Paris : sièges sociaux du CAC40, hôtels palaces de la rue du Faubourg Saint-Honoré, boutiques de luxe de l'avenue Montaigne, ambassades et résidences haut standing du Triangle d'Or. Cette concentration unique d'activités exige un service de nettoyage à la hauteur des standards internationaux. TGT Propreté est présent dans le 8e auprès de cabinets d'avocats d'affaires, d'agences de communication, de family offices, d'agences immobilières premium et de copropriétés de standing. Les exigences spécifiques de l'arrondissement structurent nos prestations : interventions tôt le matin (avant 8h) ou en soirée pour ne pas perturber l'activité, vestiaire et tenue impeccables de l'équipe (les codes vestimentaires sont stricts dans les immeubles de bureaux du 8e), produits haut de gamme adaptés aux marbres, dorures, bronzes et tissus d'ameublement précieux. Nos contrats récurrents couvrent les bureaux (passages quotidiens), les copropriétés de prestige (halls marbre, miroirs muraux, ascenseurs Otis vintage) et les pieds-à-terre internationaux. Pour les show-rooms et boutiques de l'avenue George V ou de la rue du Faubourg Saint-Honoré, nous intervenons en dehors des heures d'ouverture avec un niveau d'exigence digne du luxe parisien. Devis détaillé sous 24h, conditions préférentielles pour les contrats annuels.",
    highlights: [
      "Sièges sociaux CAC40 et cabinets d'affaires (Champs-Élysées, George V, Friedland)",
      "Hôtels palaces et boutiques de luxe — interventions en dehors des heures d'ouverture",
      "Triangle d'Or résidentiel : copropriétés de très haut standing",
      "Ambassades et résidences diplomatiques — sécurité et discrétion absolues",
    ],
    keywords: [
      "entreprise de nettoyage Paris 8",
      "société de nettoyage Paris 8",
      "nettoyage bureaux Paris 8",
      "nettoyage Champs-Élysées",
      "nettoyage 75008",
    ],
  },

  {
    slug: "18e",
    number: 18,
    name: "18e arrondissement",
    postalCode: "75018",
    district: "Montmartre — Pigalle",
    intro:
      "Le 18e arrondissement est l'un des plus contrastés de Paris : Montmartre et son Sacré-Cœur (tourisme massif), Pigalle et son tissu de bars, restaurants et établissements de nuit, la Goutte d'Or et son cosmopolitisme, les anciens ateliers d'artistes reconvertis en lofts, et les marchés aux puces de Clignancourt. Cette mixité crée une demande variée en nettoyage : restaurants et bars (interventions nocturnes ou matinales), boutiques touristiques, copropriétés des Abbesses et de Lamarck, ateliers et galeries d'art. TGT Propreté intervient dans le 18e auprès de propriétaires de restaurants des Abbesses et de Pigalle (nettoyage approfondi quotidien des cuisines et sanitaires, dégraissage des cuisines, désinfection), de gestionnaires d'appartements en location courte durée (Airbnb, hôtels boutiques), et de syndics de copropriétés résidentielles. La spécificité du 18e : un bâti souvent ancien (escaliers étroits, ascenseurs rares, montées sans rampe), des contraintes d'accès (rues piétonnes, voies étroites, stationnement difficile), et une activité commerciale très étendue (nombreux restaurants ouverts en continu). Notre logistique s'adapte : interventions à pied avec matériel transportable, créneaux nocturnes pour les bars et restaurants, prestations rapides entre deux services pour les hôtels-boutiques. Devis gratuit sous 24h, prestations ponctuelles ou récurrentes selon vos besoins.",
    highlights: [
      "Restaurants et bars Abbesses, Pigalle — interventions nocturnes/matinales",
      "Locations courte durée et hôtels-boutiques Montmartre",
      "Copropriétés anciennes — escaliers étroits, contraintes d'accès",
      "Galeries d'art et ateliers (notamment quartier des Abbesses)",
    ],
    keywords: [
      "entreprise de nettoyage Paris 18",
      "société de nettoyage Paris 18",
      "nettoyage Paris 18",
      "nettoyage Montmartre",
      "nettoyage 75018",
    ],
  },

  {
    slug: "19e",
    number: 19,
    name: "19e arrondissement",
    postalCode: "75019",
    district: "Buttes-Chaumont — La Villette — Stalingrad",
    intro:
      "Le 19e arrondissement est en mutation rapide : éco-quartier des Buttes-Chaumont, parc et Cité des Sciences de La Villette, bassin de la Villette devenu lieu de loisirs urbains, ancien Pré Saint-Gervais reconverti, secteur Manin avec ses nouvelles copropriétés. La densité résidentielle a fortement augmenté, accompagnée d'un tissu commercial et artisanal renouvelé. TGT Propreté intervient dans le 19e auprès de copropriétés récentes des Buttes-Chaumont et de la rue Manin (entretien régulier des halls modernes, ascenseurs vitres, locaux poubelles), de restaurants et bars du bassin de la Villette et du canal Saint-Denis, d'établissements culturels et associatifs (Cité de la Musique, Philharmonie, Le 104 à proximité), et d'écoles maternelles et primaires (forte densité de jeunes familles). Les particularités du 19e : copropriétés récentes avec règles précises de gestion des déchets et tri sélectif imposant des contrats clairs avec le syndic, vie associative et culturelle dense impliquant des interventions ponctuelles (post-événement), et présence de jeunes familles demandant des produits écolabellisés. Nos contrats dans le 19e privilégient les produits respectueux et les fréquences adaptées au turnover résidentiel. Devis gratuit sous 24h.",
    highlights: [
      "Copropriétés récentes Buttes-Chaumont, rue Manin",
      "Restaurants et bars bassin de la Villette",
      "Établissements culturels (Philharmonie, Cité de la Musique)",
      "Écoles et crèches — produits écolabellisés exigés",
    ],
    keywords: [
      "entreprise de nettoyage Paris 19",
      "société de nettoyage Paris 19",
      "nettoyage Buttes-Chaumont",
      "nettoyage La Villette",
      "nettoyage 75019",
    ],
  },
  {
    slug: "20e",
    number: 20,
    name: "20e arrondissement",
    postalCode: "75020",
    district: "Belleville — Père-Lachaise — Gambetta",
    intro:
      "Le 20e arrondissement est l'un des plus vivants et hétéroclites de Paris : Belleville (cosmopolitisme, restaurants asiatiques, communauté juive), Ménilmontant (bobo créatif), Gambetta (résidentiel familial), Père-Lachaise (cimetière historique, espaces résidentiels alentours). Le bâti est très varié : immeubles populaires fin XIXe, copropriétés des années 70-80, opérations récentes vers Saint-Blaise et place des Fêtes. TGT Propreté intervient dans le 20e auprès de restaurants et boutiques de Belleville et Ménilmontant (nettoyage approfondi quotidien, gestion déchets), d'agences créatives et lieux culturels (La Bellevilloise, La Maroquinerie à proximité), de copropriétés des nouvelles opérations (Saint-Blaise, place des Fêtes) avec leurs exigences modernes en gestion des parties communes, et de cabinets médicaux et paramédicaux dispersés sur tout l'arrondissement. Les particularités du 20e : rues parfois très en pente (Ménilmontant, Belleville) nécessitant un matériel adapté, fortes différences entre quartiers (bâti ancien populaire vs récent), et densité commerciale concentrée sur quelques rues majeures (avenue Gambetta, rue de Belleville, rue des Pyrénées). Nos contrats dans le 20e tiennent compte de la diversité du territoire avec une logistique flexible. Devis gratuit sous 24h.",
    highlights: [
      "Restaurants et boutiques Belleville, Ménilmontant",
      "Copropriétés modernes Saint-Blaise, place des Fêtes",
      "Lieux culturels (Bellevilloise, Maroquinerie)",
      "Cabinets médicaux et paramédicaux Gambetta",
    ],
    keywords: [
      "entreprise de nettoyage Paris 20",
      "société de nettoyage Paris 20",
      "nettoyage Belleville",
      "nettoyage Ménilmontant",
      "nettoyage 75020",
    ],
  },


  /*Second Arr */
{
    slug: "2e",
    number: 2,
    name: "2e arrondissement",
    postalCode: "75002",
    district: "Sentier — Bourse — Montorgueil",
    intro:
      "Le 2e arrondissement est devenu en moins de quinze ans le hub parisien de la tech et des agences créatives : la rue du Sentier abrite la French Tech historique, autour de Bourse on trouve des cabinets d'avocats d'affaires et des banques d'investissement, et la rue Montorgueil concentre une densité folle de restaurants, bars et boutiques. Le bâti y est mixte : immeubles XVIIIe-XIXe parfois étroits avec escaliers en colimaçon, immeubles haussmanniens et quelques opérations contemporaines. TGT Propreté intervient dans le 2e auprès de start-ups et scale-ups (open-spaces de 100 à 1 500 m² avec mobilier ouvert et acoustique sensible), de cabinets de conseil, de restaurants de la rue Montorgueil et passage des Panoramas, ainsi que d'hôtels boutiques (Édouard 7, Park Hyatt à proximité). Les spécificités du 2e : passages couverts historiques (Galerie Vivienne, Panoramas) nécessitant un entretien soigné des sols anciens, pas de stationnement résident facile, et une vie nocturne dense impliquant des prestations matinales pour les restaurants. Nos contrats start-ups intègrent typiquement passage tôt le matin, fournitures (papier, savon) en option, et flexibilité maximale sur les changements d'effectif. Devis gratuit sous 24h.",
    highlights: [
      "Start-ups et scale-ups (Sentier, French Tech, open-spaces)",
      "Cabinets d'affaires et banques (Bourse, rue Vivienne)",
      "Restaurants et bars rue Montorgueil — interventions matinales",
      "Passages couverts (Galerie Vivienne, Panoramas) — sols anciens",
    ],
    keywords: [
      "entreprise de nettoyage Paris 2",
      "société de nettoyage Paris 2",
      "nettoyage Sentier Paris",
      "nettoyage start-up Paris",
      "nettoyage 75002",
    ],
  },
  {
    slug: "3e",
    number: 3,
    name: "3e arrondissement",
    postalCode: "75003",
    district: "Marais haut — Arts et Métiers — République",
    intro:
      "Le 3e arrondissement abrite la partie nord du Marais — l'un des quartiers les plus prisés de Paris : musée Carnavalet, musée Picasso, musée des Arts et Métiers, rue de Bretagne, marché des Enfants Rouges. Le bâti est emblématique : hôtels particuliers du XVIIe-XVIIIe transformés en sièges sociaux discrets, galeries d'art, créateurs de mode, ateliers d'artisans. TGT Propreté intervient dans le 3e auprès de galeries d'art (rue Charlot, rue de Saintonge), de bureaux et studios créatifs occupant des hôtels particuliers à colombages, de copropriétés haut de gamme (rue de Turenne, rue des Filles du Calvaire) et de boutiques de créateurs. Les particularités du 3e : bâti ancien souvent classé ou inscrit (Monuments Historiques) imposant des produits non-agressifs sur les pierres calcaires, marbres et boiseries, escaliers étroits sans ascenseur dans de nombreux immeubles, et niveau d'exigence visuel élevé (les galeries demandent un soin extrême sur les vitres et les sols). Nos interventions dans le 3e privilégient les produits écolabellisés et les méthodes manuelles compatibles avec le patrimoine historique. Devis gratuit sous 24h avec visite préalable systématique recommandée.",
    highlights: [
      "Galeries d'art rue Charlot, rue de Saintonge — soin extrême",
      "Hôtels particuliers XVIIe-XVIIIe (sièges discrets, studios créatifs)",
      "Boutiques de créateurs et ateliers d'artisans",
      "Bâti classé Monuments Historiques — produits adaptés",
    ],
    keywords: [
      "entreprise de nettoyage Paris 3",
      "société de nettoyage Paris 3",
      "nettoyage Marais haut",
      "nettoyage galerie d'art Paris",
      "nettoyage 75003",
    ],
  },
  {
    slug: "4e",
    number: 4,
    name: "4e arrondissement",
    postalCode: "75004",
    district: "Marais bas — Île Saint-Louis — Hôtel de Ville",
    intro:
      "Le 4e arrondissement combine trois micro-quartiers très distincts : le Marais bas (rue des Rosiers, rue Vieille-du-Temple) avec sa vie commerciale dense, l'Île Saint-Louis et ses hôtels particuliers du XVIIe siècle parmi les plus chers de Paris, et le quartier de l'Hôtel de Ville avec ses bureaux administratifs et institutionnels. Le centre Beaubourg complète ce maillage culturel exceptionnel. TGT Propreté intervient dans le 4e auprès de copropriétés ultra-prestigieuses de l'Île Saint-Louis (quai de Bourbon, quai d'Anjou — entretien régulier des halls anciens, marbres, bronzes), de boutiques et concept-stores du Marais bas, de cabinets institutionnels autour de l'Hôtel de Ville, et de résidences principales de cadres et professions libérales. Les contraintes spécifiques : Île Saint-Louis avec rues étroites et ponts (matériel transportable obligatoire), Monuments Historiques sur la quasi-totalité du bâti résidentiel, exigence de discrétion absolue (de nombreux résidents internationaux et personnalités), et fortes contraintes piétonnes (zones Marais sans véhicules en journée). Nos prestations dans le 4e s'adaptent : créneaux matinaux pour le secteur commerce, équipe pédestre avec sacs et matériel compact pour l'Île Saint-Louis. Devis gratuit sous 24h.",
    highlights: [
      "Île Saint-Louis — copropriétés XVIIe ultra-prestige",
      "Marais bas commercial — boutiques, concept-stores",
      "Hôtel de Ville — bureaux administratifs et institutionnels",
      "Bâti classé — matériel et produits adaptés au patrimoine",
    ],
    keywords: [
      "entreprise de nettoyage Paris 4",
      "société de nettoyage Paris 4",
      "nettoyage Île Saint-Louis",
      "nettoyage Marais",
      "nettoyage 75004",
    ],
  },

  {
    slug: "9e",
    number: 9,
    name: "9e arrondissement",
    postalCode: "75009",
    district: "Opéra — Grands Boulevards",
    intro:
      "Le 9e arrondissement de Paris est un poumon économique alliant grands sièges sociaux, banques d'affaires, agences de publicité et tourisme dense (Opéra Garnier, Galeries Lafayette, Printemps Haussmann). Cette mixité crée une demande forte en nettoyage professionnel : bureaux haussmanniens transformés en open-spaces, boutiques sur les Grands Boulevards, hôtels de tourisme d'affaires autour de Saint-Lazare et de la Trinité. TGT Propreté accompagne dans le 9e des agences créatives (notamment autour de la rue Bergère et de la rue La Fayette), des start-ups installées dans les ex-grands magasins reconvertis, des cabinets d'expertise comptable et des syndics de copropriété. La spécificité de l'arrondissement : des immeubles à étages multiples avec ascenseurs souvent vétustes, des parties communes très passantes (commerces au rez-de-chaussée, hôtels) qui demandent un entretien quotidien renforcé, et des bureaux modernisés sous des plafonds moulurés. Nos prestations s'adaptent : sortie quotidienne des containers (la collecte parisienne du 9e est dense), nettoyage des vitrines des commerces alentours pour les retailers, désinfection renforcée des sanitaires d'établissements recevant du public. Nous intervenons aussi auprès des particuliers du quartier Saint-Georges et de la Nouvelle Athènes, où le bâti reste résidentiel familial. Devis gratuit sous 24h.",
    highlights: [
      "Sièges bancaires et tertiaire (Opéra, Drouot, Saint-Lazare)",
      "Hôtels tourisme d'affaires et retailers (Galeries Lafayette, Printemps)",
      "Agences créatives et start-ups (rue Bergère, rue La Fayette)",
      "Résidentiel familial Saint-Georges et Nouvelle Athènes",
    ],
    keywords: [
      "entreprise de nettoyage Paris 9",
      "société de nettoyage Paris 9",
      "nettoyage Paris 9",
      "nettoyage bureaux Opéra",
      "nettoyage 75009",
    ],
  },

   {
    slug: "10e",
    number: 10,
    name: "10e arrondissement",
    postalCode: "75010",
    district: "Gare du Nord — Gare de l'Est — Canal Saint-Martin",
    intro:
      "Le 10e arrondissement est traversé par les deux plus grandes gares d'Europe (Gare du Nord, Gare de l'Est) et longé par le canal Saint-Martin. Cette double identité — hub de transport et quartier branché du canal — crée une mixité unique : hôtels de chaîne et boutique-hôtels près des gares, restaurants et bars du quartier Sainte-Marthe, bureaux modernes de la place de la République, agences créatives autour du faubourg Saint-Denis, et copropriétés résidentielles le long du canal. TGT Propreté intervient dans le 10e auprès d'hôtels de chaîne et indépendants (nettoyage chambres, parties communes, lobbies — interventions matinales et de turnover), d'agences créatives du faubourg Saint-Denis (médias, design, mode), de restaurants et bars de la rue de Lancry et du canal, et de copropriétés autour de la place du Colonel Fabien. Les spécificités du 10e : flux touristique permanent autour des gares exigeant entretien renforcé des halls hôteliers, contraintes de stationnement très difficiles, et nuisances sonores dans certaines rues impliquant des créneaux horaires précis pour les bureaux. Notre logistique s'adapte : tournée matinale pour les hôtels (5h30-9h), interventions de soirée pour les restaurants. Devis gratuit sous 24h.",
    highlights: [
      "Hôtels Gare du Nord, Gare de l'Est — nettoyage chambres et lobbies",
      "Agences créatives et médias faubourg Saint-Denis",
      "Restaurants et bars canal Saint-Martin — interventions matinales",
      "Copropriétés place du Colonel Fabien, République",
    ],
    keywords: [
      "entreprise de nettoyage Paris 10",
      "société de nettoyage Paris 10",
      "nettoyage Gare du Nord",
      "nettoyage hôtel Paris",
      "nettoyage 75010",
    ],
  },
  {
    slug: "11e",
    number: 11,
    name: "11e arrondissement",
    postalCode: "75011",
    district: "République — Bastille — Oberkampf",
    intro:
      "Le 11e arrondissement est le plus peuplé de Paris en densité — un patchwork de quartiers très différents : République (bureaux, agences), Bastille (commerce, sortie), Oberkampf (bars, restaurants, nightlife), Charonne et Sainte-Marguerite (résidentiel familial), Voltaire (commerce de proximité). Le bâti est mixte : haussmannien autour des grands axes, immeubles plus modestes du XIXe-XXe dans les rues secondaires, lofts et anciens ateliers reconvertis. TGT Propreté intervient dans le 11e auprès d'agences de communication et de start-ups (boulevard Voltaire, rue Saint-Maur), de bars et restaurants de la rue Oberkampf et Jean-Pierre Timbaud (nettoyage approfondi matinal), de cabinets médicaux et paramédicaux autour de Sainte-Marguerite, et de copropriétés des nombreux passages et impasses caractéristiques du 11e. Les spécificités du 11e : densité commerciale et résidentielle simultanée (passages très étroits, accès limités), forte vie nocturne autour d'Oberkampf et Charonne nécessitant des interventions tôt le matin, et patrimoine architectural mixte (immeubles parfois sans ascenseur). Nos contrats récurrents s'adaptent : passages matinaux pour la restauration, créneaux flexibles pour les bureaux. Devis gratuit sous 24h.",
    highlights: [
      "Agences de communication et start-ups (Voltaire, Saint-Maur)",
      "Bars et restaurants Oberkampf, Charonne — interventions matinales",
      "Copropriétés résidentielles Sainte-Marguerite, Voltaire",
      "Passages et impasses étroits — logistique adaptée",
    ],
    keywords: [
      "entreprise de nettoyage Paris 11",
      "société de nettoyage Paris 11",
      "nettoyage Bastille",
      "nettoyage Oberkampf",
      "nettoyage 75011",
    ],
  },
  {
    slug: "12e",
    number: 12,
    name: "12e arrondissement",
    postalCode: "75012",
    district: "Bercy — Gare de Lyon — Nation",
    intro:
      "Le 12e arrondissement combine deux pôles structurants : Bercy avec son grand quartier d'affaires (siège du ministère de l'Économie, AccorHotels Arena, Bercy Village commercial) et Gare de Lyon avec son flux de voyageurs et ses hôtels d'affaires. Au-delà, le quartier de Nation et le bois de Vincennes apportent la dimension résidentielle, et la coulée verte René-Dumont structure le sud de l'arrondissement. TGT Propreté intervient dans le 12e auprès de sièges sociaux et bureaux à Bercy (rue de Bercy, quai de Bercy, ZAC Paris Rive Gauche extension), d'hôtels d'affaires de la Gare de Lyon, de copropriétés du faubourg Saint-Antoine (artères majeures du mobilier et de l'artisanat parisien), et de cabinets professionnels autour de Daumesnil et Picpus. Les particularités du 12e : grandes tours et immeubles modernes côté Bercy (logistique d'ascenseurs et de cartes d'accès organisée), faubourg Saint-Antoine avec son tissu d'artisans (anciens ateliers reconvertis en bureaux ou résidences), et zone calme résidentielle de Picpus à Nation. Pour Bercy, nous proposons des contrats avec intervention matinale concentrée (5h-8h pour les open-spaces de plus de 1 000 m²). Devis gratuit sous 24h.",
    highlights: [
      "Bercy — sièges sociaux, ministère, AccorHotels Arena",
      "Hôtels d'affaires Gare de Lyon — turnover et lobbies",
      "Faubourg Saint-Antoine — bureaux et copropriétés (ex-ateliers)",
      "Résidentiel Nation, Picpus, Daumesnil",
    ],
    keywords: [
      "entreprise de nettoyage Paris 12",
      "société de nettoyage Paris 12",
      "nettoyage Bercy",
      "nettoyage Gare de Lyon",
      "nettoyage 75012",
    ],
  },

  {
    slug: "13e",
    number: 13,
    name: "13e arrondissement",
    postalCode: "75013",
    district: "Place d'Italie — Tolbiac",
    intro:
      "Le 13e arrondissement de Paris combine grandes tours résidentielles (Olympiades, Italie 13), quartiers populaires (Butte-aux-Cailles, Quartier Asiatique d'Avenue de Choisy), équipements universitaires (Tolbiac, Pierre-et-Marie-Curie) et un grand pôle culturel autour de la Bibliothèque François Mitterrand. La demande en nettoyage y est variée : copropriétés des grandes tours nécessitant un entretien quotidien des halls et ascenseurs, restaurants asiatiques et commerces de proximité, bureaux modernes du quartier Paris Rive Gauche (Avenue de France, ZAC Tolbiac). TGT Propreté intervient dans le 13e auprès de syndics gérant les grandes copropriétés Olympiades et Italie 13, de restaurateurs asiatiques pour des prestations spécifiques de désinfestation et nettoyage approfondi, et de start-ups installées dans les nouveaux locaux du quartier Paris Rive Gauche (Station F, BNF). Notre force dans le 13e : une expérience reconnue dans le nettoyage des grandes copropriétés à étages (jusqu'à R+30 pour Italie 13) avec gestion logistique stricte des accès et des plages horaires, ainsi qu'une réactivité sur les petits commerces de la rue de Tolbiac et de l'avenue d'Italie. Nous intervenons aussi sur la Butte-aux-Cailles pour les particuliers et petites copropriétés résidentielles aux escaliers étroits caractéristiques du quartier. Devis personnalisé sous 24h, conditions adaptées au volume.",
    highlights: [
      "Grandes copropriétés tours : Olympiades, Italie 13 (gestion d'ascenseurs et accès)",
      "Bureaux Paris Rive Gauche et Station F (start-ups, BNF)",
      "Commerces du Quartier Asiatique (avenue de Choisy, Ivry, Tolbiac)",
      "Petites copropriétés résidentielles de la Butte-aux-Cailles",
    ],
    keywords: [
      "entreprise de nettoyage Paris 13",
      "société de nettoyage Paris 13",
      "nettoyage Paris 13",
      "nettoyage copropriété Paris 13",
      "nettoyage 75013",
    ],
  },

   {
    slug: "14e",
    number: 14,
    name: "14e arrondissement",
    postalCode: "75014",
    district: "Montparnasse — Denfert-Rochereau — Plaisance",
    intro:
      "Le 14e arrondissement est dominé par le quartier d'affaires Montparnasse (tour Montparnasse, Maine-Montparnasse, gare Montparnasse) qui concentre des bureaux pour des milliers de cadres, complété par des quartiers résidentiels distincts : Denfert-Rochereau (médical, sciences avec l'observatoire), Plaisance et Pernety (résidentiel familial), Alésia. Le bâti est très varié : tours modernes Montparnasse, immeubles haussmanniens autour de l'avenue du Maine, ateliers d'artistes du XIVe historique (Cité Bauer, Cité fleurie), copropriétés des années 1970-80 vers Alésia. TGT Propreté intervient dans le 14e auprès de bureaux et sièges sociaux de la tour Montparnasse et de l'avenue du Maine (open-spaces de très grandes surfaces, parfois 5 000-10 000 m² par étage), d'hôpitaux et cabinets médicaux autour de Denfert et Cochin, d'écoles privées et établissements universitaires (Institut catholique, INA), ainsi que de copropriétés résidentielles familiales. Les particularités du 14e : très grandes surfaces tertiaires nécessitant une logistique d'équipe coordonnée, contraintes hospitalières strictes (Cochin, Saint-Joseph) avec protocoles d'hygiène renforcés, et copropriétés étendues à entretenir efficacement. Nos contrats Montparnasse sont calibrés pour la grande échelle. Devis gratuit sous 24h.",
    highlights: [
      "Tour Montparnasse et Maine-Montparnasse — open-spaces grande surface",
      "Hôpitaux et cabinets médicaux (Cochin, Saint-Joseph, Denfert)",
      "Établissements universitaires et écoles privées (Institut Catholique, INA)",
      "Résidentiel familial Alésia, Pernety, Plaisance",
    ],
    keywords: [
      "entreprise de nettoyage Paris 14",
      "société de nettoyage Paris 14",
      "nettoyage Montparnasse",
      "nettoyage Denfert-Rochereau",
      "nettoyage 75014",
    ],
  },
  
  
  {
    slug: "15e",
    number: 15,
    name: "15e arrondissement",
    postalCode: "75015",
    district: "Vaugirard — Convention",
    intro:
      "Le 15e arrondissement est le plus peuplé de Paris : plus de 230 000 habitants et une concentration tertiaire majeure entre le Front de Seine, Beaugrenelle, Boucicaut et la Porte de Versailles (Paris Expo). Cette taille génère une demande importante en nettoyage à la fois pour les bureaux modernes (tours du Front de Seine, immeubles de la rue Lecourbe et de la rue de la Convention), les grandes copropriétés des années 1970-80 et les pavillons d'expositions accueillant les salons professionnels. TGT Propreté accompagne dans le 15e des PME du quartier Beaugrenelle, des cabinets médicaux autour de l'hôpital Vaugirard, des restaurants de la rue du Commerce, ainsi que des copropriétés du quartier Pasteur. Nos contrats récurrents pour les bureaux du Front de Seine intègrent une logistique adaptée : intervention avant 8h pour les open-spaces, gestion centralisée des accès via PC sécurité, conformité aux protocoles RGPD des cabinets d'avocats et de notaires. Pour les exposants de Paris Expo Porte de Versailles, nous proposons des prestations ponctuelles : nettoyage de stand avant ouverture, remise en état après démontage, gestion des déchets en gros volume. Côté résidentiel, nous couvrons l'ensemble du 15e du quartier Saint-Lambert au Front de Seine. Devis gratuit sous 24h.",
    highlights: [
      "Tours du Front de Seine et Beaugrenelle — bureaux modernes",
      "Paris Expo Porte de Versailles — nettoyage de stands et exposants",
      "Grandes copropriétés années 70-80 (Boucicaut, Convention)",
      "Quartier Pasteur et hôpitaux : cabinets médicaux et paramédicaux",
    ],
    keywords: [
      "entreprise de nettoyage Paris 15",
      "société de nettoyage Paris 15",
      "nettoyage Paris 15",
      "nettoyage Front de Seine",
      "nettoyage 75015",
    ],
  },
  {
    slug: "16e",
    number: 16,
    name: "16e arrondissement",
    postalCode: "75016",
    district: "Auteuil — Passy",
    intro:
      "Le 16e arrondissement est emblématique du résidentiel haut de gamme parisien : hôtels particuliers d'Auteuil, immeubles haussmanniens et Art Déco de Passy, résidences contemporaines du quartier Trocadéro. Les acteurs économiques y sont également présents : ambassades, sièges sociaux discrets (notamment dans la rue de la Pompe et l'avenue Foch), agences immobilières spécialisées dans le haut de gamme, écoles privées et cliniques. TGT Propreté est référencée dans le 16e auprès de gestionnaires d'hôtels particuliers, de cabinets familiaux et de syndics premium. La spécificité de notre intervention dans le 16e : un niveau d'exigence élevé sur les détails (boiseries, parquets, marbres, miroirs anciens), une discrétion totale exigée par la clientèle, et la maîtrise des équipements souvent anciens et précieux (cuisines d'apparat, salles de bain en marbre, vitrines de collection). Nos prestations dans le 16e couvrent : entretien régulier de résidences principales et secondaires (notamment des pieds-à-terre internationaux), nettoyage approfondi avant réception privée, nettoyage de vitres jusqu'à 5 mètres de haut dans les immeubles haussmanniens, entretien des parties communes des copropriétés haut standing (halls en marbre, ascenseurs vintage avec banquette, miroirs muraux). Devis détaillé sous 24h après visite sur place, conditions préférentielles pour les contrats annuels.",
    highlights: [
      "Hôtels particuliers d'Auteuil et résidences contemporaines du Trocadéro",
      "Pieds-à-terre internationaux — discrétion et entretien régulier",
      "Bâti haussmannien et Art Déco — produits adaptés (marbre, bronze)",
      "Copropriétés haut standing : halls marbre, ascenseurs vintage, miroirs",
    ],
    keywords: [
      "entreprise de nettoyage Paris 16",
      "société de nettoyage Paris 16",
      "nettoyage Paris 16",
      "nettoyage Auteuil Passy",
      "nettoyage 75016",
    ],
  },
  {
    slug: "17e",
    number: 17,
    name: "17e arrondissement",
    postalCode: "75017",
    district: "Batignolles — Ternes",
    intro:
      "Le 17e arrondissement est l'un des plus dynamiques de Paris : il combine le quartier d'affaires des Ternes (proche de l'Étoile), le bâti haussmannien classique du Parc Monceau, le récent éco-quartier Clichy-Batignolles (avec le nouveau Tribunal de Paris et le siège régional de la Région Île-de-France) et les quartiers résidentiels des Épinettes et du Wagram. Cette diversité crée une demande variée et un volume important — c'est l'un des arrondissements parisiens où la recherche \"entreprise de nettoyage Paris 17\" est la plus forte. TGT Propreté est très présente dans le 17e auprès de PME du Wagram et des Ternes, de cabinets d'avocats et de notaires, du Palais des Congrès (Porte Maillot) pour les exposants et événements, et de syndics gérant les copropriétés du Parc Monceau et de Plaine Monceau. Nos contrats récurrents pour les bureaux du quartier des Ternes intègrent une intervention discrète tôt le matin ou en soirée, avec un protocole adapté aux activités juridiques et financières (discrétion sur les documents, gestion des accès). Pour Clichy-Batignolles, nous travaillons avec les nouvelles entreprises installées dans les tours récentes, en collaboration avec les PC sécurité des immeubles. Côté résidentiel, nous couvrons les beaux immeubles haussmanniens du Parc Monceau (entretien hebdomadaire, ménages familiaux) et les copropriétés modernes des Épinettes. Devis sous 24h, conditions dégressives sur les contrats annuels.",
    highlights: [
      "Quartier d'affaires des Ternes et du Wagram (cabinets, sièges régionaux)",
      "Éco-quartier Clichy-Batignolles : Tribunal de Paris, Région Île-de-France",
      "Bâti haussmannien Parc Monceau et Plaine Monceau",
      "Palais des Congrès Porte Maillot : nettoyage événementiel et exposants",
    ],
    keywords: [
      "entreprise de nettoyage Paris 17",
      "société de nettoyage Paris 17",
      "nettoyage Paris 17",
      "nettoyage bureaux Paris 17",
      "nettoyage Batignolles",
      "nettoyage 75017",
    ],
  },

] as const;

export function getArrondissementBySlug(
  slug: string,
): ParisArrondissement | undefined {
  return PARIS_ARRONDISSEMENTS.find((a) => a.slug === slug);
}
