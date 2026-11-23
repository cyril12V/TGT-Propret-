// ─────────────────────────────────────────────────────────────────────────────
// lib/zones.ts — Villes d'Île-de-France (hors Paris intra-muros, voir zones-paris.ts)
//
// Chaque ville doit avoir un `intro` réellement propre à la commune (tissu
// économique, type de bâti, contraintes d'accès). Une page ville qui pourrait
// être recopiée telle quelle sur la ville voisine est une doorway page.
// ─────────────────────────────────────────────────────────────────────────────

export type Zone = {
  slug: string;
  name: string;
  postalCode: string;
  /** Nom du département : « Hauts-de-Seine » */
  department: string;
  /** Code du département : « 92 ». Sert au regroupement dans le hub /zones. */
  departmentCode: string;
  /** 150-250 mots uniques. C'est ce qui distingue la page d'un gabarit. */
  intro: string;
  /** 4 puces de contexte local, affichées en colonne. */
  highlights: string[];
  keywords: string[];
  faqs: { q: string; a: string }[];
  /** 3-4 communes réellement proches, pour le maillage géographique. */
  nearbySlugs: string[];
  /**
   * Page couvrant un département entier plutôt qu'une commune.
   * Change le libellé affiché et le type schema.org émis (AdministrativeArea
   * au lieu de City).
   */
  isDepartment?: boolean;
  /**
   * Surcharges de métadonnées, pour les quelques zones qui décolleront et
   * mériteront une rédaction sur mesure. Sans elles, `zoneMetaTitle()` et
   * `zoneMetaDescription()` composent le gabarit commun aux 21 communes.
   */
  metaTitle?: string;
  metaDescription?: string;
};

export const ZONES: readonly Zone[] = [
  /* ══════════════════  SEINE-SAINT-DENIS (93)  ══════════════════ */

  {
    slug: "seine-saint-denis",
    name: "Seine-Saint-Denis",
    postalCode: "93",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    isDepartment: true,
    intro:
      "La Seine-Saint-Denis est le département d'implantation de TGT Propreté : notre siège se trouve au 57 avenue Carnot à Bondy, et c'est depuis là que partent nos équipes et notre matériel. C'est donc le territoire sur lequel nos délais sont les plus courts et notre connaissance du terrain la plus fine. Le 93 est aussi le département francilien le plus contrasté pour un prestataire de propreté. Il concentre le pôle tertiaire de la Plaine Saint-Denis et ses plateaux de bureaux, les quartiers en transformation autour des nouvelles gares du Grand Paris Express, un parc de copropriétés des années 1960-1970 aux grands volumes de parties communes, des zones d'activité et logistiques au nord vers Aulnay et Le Bourget, un tissu dense de commerces et de restaurants de proximité, et un pavillonnaire important à l'est. TGT Propreté intervient sur l'ensemble du département auprès d'entreprises, de syndics de copropriété, de commerçants, d'artisans du bâtiment pour les fins de chantier et de particuliers. Sept communes disposent de leur page dédiée, mais notre couverture ne s'y limite pas : nous nous déplaçons dans tout le 93, avec un devis gratuit sous 24h.",
    highlights: [
      "Siège social à Bondy (93140) — délais les plus courts du réseau",
      "Plateaux de bureaux de la Plaine Saint-Denis et quartiers Grand Paris Express",
      "Copropriétés des années 1960-1970 : grands volumes de parties communes",
      "Zones d'activité et logistiques au nord, pavillonnaire à l'est",
    ],
    keywords: [
      "nettoyage Seine-Saint-Denis",
      "entreprise de nettoyage 93",
      "société de nettoyage Seine-Saint-Denis",
      "nettoyage bureaux 93",
      "nettoyage copropriété Seine-Saint-Denis",
    ],
    faqs: [
      {
        q: "Couvrez-vous tout le département de la Seine-Saint-Denis ?",
        a: "Oui, l'ensemble du 93. Sept communes disposent d'une page dédiée sur ce site — Bondy, Saint-Denis, Noisy-le-Sec, Pantin, Montreuil, Aulnay-sous-Bois et Le Raincy — mais notre couverture ne s'y limite pas. Les autres communes du département sont traitées avec le même niveau de service.",
      },
      {
        q: "Pourquoi vos délais sont-ils plus courts en Seine-Saint-Denis ?",
        a: "Parce que notre siège et notre matériel sont à Bondy, au centre du département. Là où une intervention ponctuelle demande plus de délai dans les Yvelines ou l'Essonne, nous pouvons généralement intervenir sous 24 à 48h dans le 93.",
      },
      {
        q: "Travaillez-vous avec les syndics du 93 ?",
        a: "Oui, nous avons des contrats récurrents avec plusieurs cabinets gérant des résidences sur le département. Nous fournissons l'attestation de vigilance URSSAF et l'attestation d'assurance RC professionnelle, et nous adaptons notre calendrier au rythme budgétaire des assemblées générales.",
      },
      {
        q: "Intervenez-vous dans les zones d'activité et les entrepôts du 93 ?",
        a: "Oui, notamment sur les secteurs d'Aulnay-sous-Bois et du nord du département. Nous prenons en charge les bureaux rattachés aux sites, les vestiaires, les réfectoires et les sanitaires collectifs, avec un lavage mécanisé pour les grandes surfaces de sol béton.",
      },
    ],
    nearbySlugs: ["bondy", "saint-denis", "montreuil", "pantin"],
  },

  {
    slug: "bondy",
    name: "Bondy",
    postalCode: "93140",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    intro:
      "Bondy est le siège social de TGT Propreté depuis 2018 : nos équipes et notre matériel partent du 57 avenue Carnot, à cinq minutes de la gare RER E. C'est la commune que nous connaissons le mieux, et celle où nos délais d'intervention sont les plus courts. Le tissu local mêle des copropriétés des années 1960-1970 aux cages d'escalier larges et aux locaux poubelles semi-enterrés, des pavillons du Bondy-Nord, des commerces de proximité le long de la rue Roger Salengro, et des locaux d'activité et petites unités tertiaires près du canal de l'Ourcq et de la ZAC des Rives de l'Ourcq. Nous intervenons à Bondy auprès de syndics gérant des résidences de 30 à 120 lots (entretien des halls, escaliers, ascenseurs, rotation des containers selon le calendrier de collecte d'Est Ensemble), de commerçants et restaurateurs du centre-ville, d'artisans en fin de chantier sur les rénovations pavillonnaires, et de particuliers pour le ménage approfondi et le nettoyage de textiles. Les contraintes propres à Bondy : stationnement tendu autour du centre et de la gare, immeubles souvent sans local technique dédié, et calendriers de collecte différenciés entre Bondy-Nord et Bondy-Centre. Devis gratuit sous 24h, visite sur place possible le jour même.",
    highlights: [
      "Siège social 57 Av. Carnot — délai d'intervention le plus court de notre réseau",
      "Copropriétés des années 1960-1970 : halls, escaliers, locaux poubelles",
      "Commerces et restaurants du centre-ville et de la rue Roger Salengro",
      "Fins de chantier sur rénovations pavillonnaires et locaux du canal de l'Ourcq",
    ],
    keywords: [
      "entreprise de nettoyage Bondy",
      "société de nettoyage Bondy",
      "nettoyage copropriété Bondy",
      "ménage Bondy",
      "nettoyage 93140",
    ],
    faqs: [
      {
        q: "Sous quel délai intervenez-vous à Bondy ?",
        a: "Bondy est notre commune d'implantation : nos équipes partent du 57 avenue Carnot. Nous pouvons passer faire un devis sur place le jour même et démarrer une prestation ponctuelle sous 24 à 48h selon la charge du planning.",
      },
      {
        q: "Gérez-vous la sortie des containers à Bondy ?",
        a: "Oui. Nous calons la sortie et la rentrée des bacs sur le calendrier de collecte d'Est Ensemble, qui diffère entre Bondy-Nord et Bondy-Centre. Le nettoyage et la désinfection du local poubelles sont inclus dans nos contrats de copropriété.",
      },
      {
        q: "Travaillez-vous avec les syndics de Bondy ?",
        a: "Oui, nous avons des contrats récurrents avec plusieurs cabinets gérant des résidences de 30 à 120 lots sur la commune. Nous fournissons l'attestation URSSAF et l'attestation d'assurance RC professionnelle, et nous nous adaptons au calendrier budgétaire de votre assemblée générale.",
      },
      {
        q: "Intervenez-vous chez les particuliers à Bondy ?",
        a: "Oui, pour le nettoyage approfondi de logements, les remises en état après travaux, et le traitement des textiles (canapés, tapis, moquettes) à domicile. Nous nous déplaçons dans tous les quartiers, de Bondy-Nord au centre.",
      },
    ],
    nearbySlugs: ["noisy-le-sec", "pantin", "le-raincy", "aulnay-sous-bois"],
  },

  {
    slug: "saint-denis",
    name: "Saint-Denis",
    postalCode: "93200",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    intro:
      "Saint-Denis est la commune la plus contrastée du 93 pour un prestataire de propreté : d'un côté le centre historique autour de la basilique, avec son bâti ancien, ses rues piétonnes et son marché ; de l'autre le pôle tertiaire de la Plaine Saint-Denis, ses sièges sociaux, ses plateaux de bureaux récents et ses studios de production. S'y ajoutent le quartier Pleyel, en pleine transformation autour de la nouvelle gare du Grand Paris Express, et les résidences livrées à l'occasion des Jeux de 2024. TGT Propreté intervient à Saint-Denis auprès d'entreprises de la Plaine (entretien de plateaux en open space, salles de réunion, sanitaires, en horaires décalés avant 8h ou après 18h), de commerces et restaurants du centre-ville et des abords du Stade de France, de copropriétés récentes comme anciennes, et d'entreprises du bâtiment pour les remises en état de fin de chantier — un besoin très soutenu compte tenu du volume de constructions et de réhabilitations en cours. Les spécificités locales : accès et stationnement difficiles autour de la basilique et du marché, contrôle d'accès strict dans les immeubles de bureaux de la Plaine (badges, PC sécurité), et forte demande d'interventions hors heures ouvrées.",
    highlights: [
      "Plateaux de bureaux de la Plaine Saint-Denis — interventions avant 8h ou après 18h",
      "Commerces et restauration du centre historique et des abords du Stade de France",
      "Fins de chantier : forte activité de construction et de réhabilitation",
      "Copropriétés récentes du quartier Pleyel et résidences post-2024",
    ],
    keywords: [
      "entreprise de nettoyage Saint-Denis",
      "société de nettoyage Saint-Denis 93",
      "nettoyage bureaux Plaine Saint-Denis",
      "nettoyage fin de chantier Saint-Denis",
      "nettoyage 93200",
    ],
    faqs: [
      {
        q: "Intervenez-vous dans les bureaux de la Plaine Saint-Denis ?",
        a: "Oui, c'est l'une de nos zones tertiaires principales. Nous intervenons en horaires décalés — le matin avant 8h ou le soir après 18h — pour ne pas gêner vos équipes. Nos agents sont habitués aux procédures de badge et de PC sécurité des immeubles de la Plaine.",
      },
      {
        q: "Gérez-vous les remises en état de fin de chantier à Saint-Denis ?",
        a: "Oui, c'est une demande très soutenue sur la commune vu le volume de constructions et de réhabilitations. Nous traitons l'aspiration des poussières de plâtre, le voile de ciment, les traces de peinture et de colle, le nettoyage des menuiseries et le lavage des vitres avant livraison.",
      },
      {
        q: "Le stationnement complique-t-il vos interventions dans le centre ?",
        a: "Le centre historique et les abords du marché sont contraints, mais nos équipes viennent avec le matériel dimensionné pour être déchargé rapidement. Pour les prestations lourdes, nous convenons à l'avance d'un créneau et d'un point de déchargement avec vous.",
      },
      {
        q: "Proposez-vous des contrats pour les commerces de Saint-Denis ?",
        a: "Oui. Pour les commerces et la restauration, nous proposons des passages avant ouverture ou après fermeture : sols, vitrines, sanitaires, et pour les cuisines un protocole HACCP avec dégraissage des hottes et des équipements de cuisson.",
      },
    ],
    nearbySlugs: ["pantin", "asnieres-sur-seine", "colombes", "bondy"],
  },

  {
    slug: "noisy-le-sec",
    name: "Noisy-le-Sec",
    postalCode: "93130",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    intro:
      "Noisy-le-Sec est notre commune limitrophe : depuis Bondy, nos équipes y sont en quelques minutes, ce qui en fait l'une des villes où nous pouvons répondre le plus vite à une demande urgente. La ville s'organise autour de sa gare RER E et du terminus du tramway T1, avec un centre commerçant dense, un parc pavillonnaire important sur les hauteurs de Merlan et du Londeau, et des ensembles de logements collectifs en cours de réhabilitation dans le cadre du renouvellement urbain. Le tissu économique local est fait de commerces de proximité, de petites entreprises de services, d'artisans du bâtiment et de professions libérales installées en rez-de-chaussée. TGT Propreté intervient à Noisy-le-Sec pour l'entretien de parties communes de copropriétés (halls, escaliers, ascenseurs, locaux poubelles), le nettoyage de commerces et de cabinets, les remises en état après travaux dans le pavillonnaire comme dans les logements réhabilités, et le nettoyage approfondi chez les particuliers. Les points d'attention sur la commune : nombreux petits immeubles sans gardien où la fiche de passage horodatée devient le seul repère du syndic, et copropriétés anciennes avec escaliers en pierre ou tomettes qui demandent des produits à pH neutre.",
    highlights: [
      "Commune limitrophe de notre siège — réponse rapide sur les demandes urgentes",
      "Copropriétés sans gardien : suivi par fiche de passage horodatée",
      "Commerces et cabinets libéraux du centre et des abords de la gare RER E",
      "Remises en état dans le pavillonnaire du Merlan et du Londeau",
    ],
    keywords: [
      "entreprise de nettoyage Noisy-le-Sec",
      "société de nettoyage Noisy-le-Sec",
      "nettoyage copropriété Noisy-le-Sec",
      "ménage Noisy-le-Sec",
      "nettoyage 93130",
    ],
    faqs: [
      {
        q: "À quelle vitesse pouvez-vous intervenir à Noisy-le-Sec ?",
        a: "Noisy-le-Sec est limitrophe de notre siège à Bondy. C'est l'une des communes où nous répondons le plus vite : devis sur place généralement sous 24h, et intervention ponctuelle possible sous 24 à 48h.",
      },
      {
        q: "Comment le syndic vérifie-t-il le passage dans un immeuble sans gardien ?",
        a: "Nous affichons dans le hall ou le local technique une fiche de passage horodatée et signée par l'agent. Beaucoup de copropriétés de Noisy-le-Sec n'ont pas de gardien : cette fiche est le repère qui permet au conseil syndical de contrôler le respect du cahier des charges.",
      },
      {
        q: "Traitez-vous les escaliers en pierre et les tomettes anciennes ?",
        a: "Oui. Sur le bâti ancien de la commune, nous utilisons des détergents à pH neutre qui n'attaquent ni la pierre ni les tomettes. Aucun produit acide ou décapant agressif n'est appliqué sur ces revêtements.",
      },
      {
        q: "Intervenez-vous après des travaux de rénovation ?",
        a: "Oui, aussi bien dans le pavillonnaire du Merlan et du Londeau que dans les logements collectifs réhabilités. Nous prenons en charge l'aspiration des poussières fines, le grattage des résidus et le lessivage complet avant remise des clés.",
      },
    ],
    nearbySlugs: ["bondy", "pantin", "montreuil", "le-raincy"],
  },

  {
    slug: "pantin",
    name: "Pantin",
    postalCode: "93500",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    intro:
      "Pantin a changé de visage en une quinzaine d'années : les anciennes usines et magasins généraux des bords du canal de l'Ourcq sont devenus des sièges sociaux, des ateliers d'artistes, des studios et des espaces de coworking, tandis que le centre ancien autour de l'église et du marché a gardé son bâti et ses commerces de proximité. Cette double nature définit nos interventions sur la commune. TGT Propreté travaille à Pantin auprès d'entreprises installées dans les bâtiments réhabilités des Grands Moulins et du quai de l'Ourcq — plateaux en open space, verrières et grandes surfaces vitrées héritées de l'architecture industrielle, sols béton ciré ou résine qui demandent un entretien spécifique —, de galeries et de lieux culturels, de commerces et restaurants du centre-ville, et de copropriétés qui vont du petit collectif ancien aux programmes neufs livrés le long du canal. Les particularités locales : beaucoup de surfaces vitrées de grande hauteur héritées des bâtiments industriels, revêtements techniques (béton ciré, résine, parquet massif) incompatibles avec les décapants standards, et une clientèle tertiaire qui demande des passages en dehors des heures de bureau. Devis gratuit sous 24h, visite préalable recommandée pour les volumes industriels reconvertis.",
    highlights: [
      "Bâtiments industriels reconvertis : Grands Moulins, quai de l'Ourcq",
      "Grandes surfaces vitrées et verrières — matériel de hauteur adapté",
      "Sols techniques (béton ciré, résine) traités sans décapant agressif",
      "Commerces et restauration du centre ancien et du marché",
    ],
    keywords: [
      "entreprise de nettoyage Pantin",
      "société de nettoyage Pantin",
      "nettoyage bureaux Pantin",
      "nettoyage vitres Pantin",
      "nettoyage 93500",
    ],
    faqs: [
      {
        q: "Nettoyez-vous les verrières et grandes hauteurs des bâtiments reconvertis ?",
        a: "Oui. Les anciens bâtiments industriels de Pantin ont beaucoup de surfaces vitrées en hauteur. Nous intervenons avec perches télescopiques et matériel à eau pure. Au-delà d'une certaine hauteur, une visite préalable est nécessaire pour définir les moyens d'accès.",
      },
      {
        q: "Comment traitez-vous le béton ciré et les sols en résine ?",
        a: "Avec des détergents à pH neutre et un matériel non abrasif. Le béton ciré et les résines sont très présents dans les plateaux reconvertis de Pantin, et un décapant standard les ternit définitivement. Nous identifions le revêtement avant la première intervention.",
      },
      {
        q: "Intervenez-vous en dehors des heures de bureau à Pantin ?",
        a: "Oui, c'est le mode de fonctionnement majoritaire pour nos clients tertiaires de la commune : passage tôt le matin avant l'arrivée des équipes, ou en soirée après leur départ. Les horaires sont fixés dans le contrat.",
      },
      {
        q: "Proposez-vous des contrats pour les copropriétés de Pantin ?",
        a: "Oui, du petit collectif ancien du centre aux programmes neufs du canal. La prestation couvre les halls, escaliers, paliers, ascenseurs, la gestion des containers et le nettoyage du local poubelles.",
      },
    ],
    nearbySlugs: ["bondy", "noisy-le-sec", "montreuil", "saint-denis"],
  },

  {
    slug: "montreuil",
    name: "Montreuil",
    postalCode: "93100",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    intro:
      "Montreuil est la plus grande commune de Seine-Saint-Denis après Saint-Denis, et l'une des plus hétérogènes : le Bas-Montreuil, ancien quartier industriel devenu un pôle d'agences, de studios et d'associations ; le centre-ville et la mairie ; les Murs à Pêches et le haut Montreuil, plus résidentiels, avec un bâti pavillonnaire et des copropriétés de tailles très variables. La ville accueille une forte densité de petites structures — agences, cabinets, associations, artisans — installées dans des locaux de plain-pied ou en rez-de-chaussée d'immeuble. TGT Propreté intervient à Montreuil pour l'entretien de bureaux et de locaux associatifs (souvent des surfaces de 40 à 200 m² avec un besoin de deux à trois passages par semaine), le nettoyage de parties communes de copropriétés, les fins de chantier sur les nombreuses réhabilitations de lofts et d'ateliers du Bas-Montreuil, et le ménage approfondi chez les particuliers. Les contraintes sur la commune : dénivelé important entre le bas et le haut de Montreuil qui pèse sur les temps de trajet, stationnement difficile dans le Bas-Montreuil, et anciens ateliers reconvertis en habitation dont les volumes et les matériaux (verrières, poutres métalliques, sols bruts) demandent une approche adaptée.",
    highlights: [
      "Bas-Montreuil : agences, studios et associations en petites surfaces",
      "Ateliers et lofts reconvertis — verrières, poutres, sols bruts",
      "Copropriétés de tailles très variables, du bas au haut Montreuil",
      "Fins de chantier sur réhabilitations, très nombreuses sur la commune",
    ],
    keywords: [
      "entreprise de nettoyage Montreuil",
      "société de nettoyage Montreuil 93",
      "nettoyage bureaux Montreuil",
      "nettoyage fin de chantier Montreuil",
      "nettoyage 93100",
    ],
    faqs: [
      {
        q: "Prenez-vous les petites surfaces de bureaux à Montreuil ?",
        a: "Oui. Beaucoup de nos clients montreuillois sont des agences, cabinets ou associations de 40 à 200 m² avec deux à trois passages par semaine. Nous établissons un cahier des charges à cette échelle sans surfacturer une structure d'entretien surdimensionnée.",
      },
      {
        q: "Intervenez-vous dans les lofts et ateliers reconvertis ?",
        a: "Oui, c'est une demande fréquente dans le Bas-Montreuil. Ces volumes combinent verrières, structures métalliques et sols bruts : nous adaptons le matériel de hauteur et les produits à chaque matériau plutôt que d'appliquer un protocole standard.",
      },
      {
        q: "Combien de temps faut-il pour un nettoyage de fin de chantier à Montreuil ?",
        a: "Cela dépend de la surface et de l'état du chantier. Nous établissons le devis après visite sur place ou sur plans, et nous dimensionnons l'équipe pour tenir la date de livraison que vous nous donnez.",
      },
      {
        q: "Le haut et le bas de Montreuil sont-ils desservis de la même façon ?",
        a: "Oui, nous intervenons sur toute la commune. Le dénivelé et le stationnement du Bas-Montreuil allongent un peu les temps de trajet : nous en tenons compte dans la planification pour que le créneau annoncé soit tenu.",
      },
    ],
    nearbySlugs: ["noisy-le-sec", "pantin", "vincennes", "bondy"],
  },

  {
    slug: "aulnay-sous-bois",
    name: "Aulnay-sous-Bois",
    postalCode: "93600",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    intro:
      "Aulnay-sous-Bois est une commune étendue, structurée par la gare RER B et coupée entre un sud pavillonnaire dense, un centre commerçant, et un nord marqué par les grands ensembles et par les zones d'activité de la Garenne et du Parc des Expositions, à proximité immédiate de Paris Nord 2 et de Roissy. Cette implantation logistique change la nature de la demande : aux besoins résidentiels classiques s'ajoutent des locaux d'activité, des entrepôts, des surfaces de bureaux rattachées à des sites logistiques, et des zones de vestiaires et de réfectoires à entretenir quotidiennement. TGT Propreté intervient à Aulnay-sous-Bois pour l'entretien de bureaux et de locaux sociaux en zone d'activité, le nettoyage de parties communes de copropriétés et de résidences, les remises en état après travaux dans le parc pavillonnaire du sud, et les prestations aux particuliers. Les points d'attention locaux : distances internes importantes qui rendent la planification plus sensible qu'ailleurs, surfaces d'activité aux sols béton nécessitant un matériel de lavage mécanisé, et vestiaires et sanitaires collectifs qui demandent un protocole de désinfection quotidien plutôt qu'un simple passage d'entretien.",
    highlights: [
      "Zones d'activité de la Garenne et du Parc des Expositions, proximité Paris Nord 2",
      "Vestiaires et réfectoires collectifs : protocole de désinfection quotidien",
      "Sols béton d'activité — lavage mécanisé",
      "Pavillonnaire du sud : remises en état après travaux",
    ],
    keywords: [
      "entreprise de nettoyage Aulnay-sous-Bois",
      "société de nettoyage Aulnay-sous-Bois",
      "nettoyage locaux d'activité Aulnay",
      "ménage Aulnay-sous-Bois",
      "nettoyage 93600",
    ],
    faqs: [
      {
        q: "Intervenez-vous dans les zones d'activité d'Aulnay-sous-Bois ?",
        a: "Oui, sur les secteurs de la Garenne et du Parc des Expositions. Nous prenons en charge les bureaux rattachés aux sites, les vestiaires, les réfectoires et les sanitaires collectifs, avec un protocole de désinfection quotidien sur les points de contact.",
      },
      {
        q: "Comment traitez-vous les grandes surfaces de sol béton ?",
        a: "Avec un matériel de lavage mécanisé, dimensionné à la surface. Un lavage manuel sur plusieurs centaines de mètres carrés d'entrepôt n'est ni rentable pour vous ni efficace : nous chiffrons le passage machine dans le devis.",
      },
      {
        q: "Desservez-vous tous les quartiers d'Aulnay ?",
        a: "Oui, du sud pavillonnaire au nord. Aulnay est une commune étendue : les temps de trajet internes sont intégrés à la planification pour que le créneau convenu soit respecté.",
      },
      {
        q: "Proposez-vous des contrats de copropriété à Aulnay-sous-Bois ?",
        a: "Oui, pour les résidences comme pour les petits collectifs : halls, escaliers, paliers, ascenseurs, rotation des containers et nettoyage du local poubelles, avec fiche de passage horodatée pour le syndic.",
      },
    ],
    nearbySlugs: ["bondy", "le-raincy", "noisy-le-sec", "saint-denis"],
  },

  {
    slug: "le-raincy",
    name: "Le Raincy",
    postalCode: "93340",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    intro:
      "Le Raincy est une commune résidentielle atypique en Seine-Saint-Denis : un ancien parc de château loti à la fin du XIXe siècle, avec de larges avenues plantées, des villas et maisons de maître souvent inscrites dans un tissu pavillonnaire protégé, et un centre commerçant autour de l'avenue de la Résistance et de la gare RER E. L'église Notre-Dame du Raincy, première grande église en béton armé, donne à la commune une identité patrimoniale forte. Le bâti collectif y est limité et plutôt haut de gamme. TGT Propreté intervient au Raincy principalement auprès de particuliers — nettoyage approfondi de maisons, entretien régulier, traitement de textiles d'ameublement, repassage et rangement —, de petites copropriétés de standing dont les halls et les cages d'escalier demandent un soin particulier, et de professions libérales installées en maison ou en rez-de-chaussée le long des grands axes. Les spécificités locales : maisons de grande surface avec des matériaux nobles (parquets massifs, marbre, boiseries) qui excluent les produits agressifs, exigence de discrétion de la clientèle résidentielle, et jardins et abords privatifs dont le nettoyage des terrasses et des accès fait souvent partie de la demande.",
    highlights: [
      "Maisons de maître et villas — parquets massifs, marbre, boiseries",
      "Petites copropriétés de standing : halls et cages d'escalier soignés",
      "Professions libérales installées en maison ou rez-de-chaussée",
      "Nettoyage de terrasses et d'abords privatifs",
    ],
    keywords: [
      "entreprise de nettoyage Le Raincy",
      "société de nettoyage Le Raincy",
      "ménage à domicile Le Raincy",
      "nettoyage maison Le Raincy",
      "nettoyage 93340",
    ],
    faqs: [
      {
        q: "Traitez-vous les parquets massifs et le marbre des maisons du Raincy ?",
        a: "Oui. Ces matériaux nobles excluent les décapants et les produits acides. Nous utilisons des détergents à pH neutre et un matériel non abrasif, et nous identifions chaque revêtement lors de la première visite avant d'établir le protocole.",
      },
      {
        q: "Intervenez-vous sur les terrasses et les abords extérieurs ?",
        a: "Oui, le nettoyage des terrasses, allées et accès privatifs fait souvent partie de la demande au Raincy. Nous adaptons la pression et le traitement à la nature du revêtement (dallage, pierre reconstituée, bois).",
      },
      {
        q: "Vos intervenants sont-ils discrets ?",
        a: "La discrétion fait partie de nos consignes de base : nos agents ne manipulent aucun effet personnel ni document, et nous privilégions un intervenant attitré et stable plutôt qu'une rotation de personnel.",
      },
      {
        q: "Proposez-vous du repassage et du rangement au Raincy ?",
        a: "Oui, c'est une demande courante sur la commune. Le repassage se fait à votre domicile avec votre centrale vapeur et votre table. Ce service peut être combiné avec du ménage sur un même forfait horaire.",
      },
    ],
    nearbySlugs: ["bondy", "aulnay-sous-bois", "noisy-le-sec", "montreuil"],
  },

  /* ══════════════════  HAUTS-DE-SEINE (92)  ══════════════════ */

  {
    slug: "hauts-de-seine",
    name: "Hauts-de-Seine",
    postalCode: "92",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    isDepartment: true,
    intro:
      "Les Hauts-de-Seine sont le deuxième territoire de TGT Propreté après la Seine-Saint-Denis, et c'est le département francilien le plus tertiaire : La Défense à cheval sur Courbevoie et Puteaux, le pôle média et numérique de Boulogne-Billancourt et d'Issy-les-Moulineaux, les sièges sociaux de Neuilly-sur-Seine et de Levallois-Perret, le quartier administratif et universitaire de Nanterre. Ce profil change la nature du travail : les immeubles de bureaux y sont grands, badgés, souvent occupés en continu, et l'entretien se fait en horaires décalés — avant 8h ou après 19h — avec des équipes déclarées et un passage par l'accueil ou le PC sécurité. Le résidentiel du 92 est tout aussi exigeant : haussmanniens de Neuilly et de Boulogne, immeubles de rapport des années 1930 à Levallois et Asnières-sur-Seine, grandes copropriétés des années 1960-1970 à Colombes et Nanterre, propriétés individuelles à Rueil-Malmaison. Les syndics y attendent un agent attitré, stable, qui connaît les codes et le calendrier de collecte. Nous intervenons sur l'ensemble du département auprès d'entreprises, de syndics, de commerçants, d'agences immobilières et de particuliers. Neuf communes disposent de leur page dédiée ; notre couverture ne s'y limite pas. Devis gratuit sous 24h.",
    highlights: [
      "La Défense, Boulogne et Issy : plateaux de bureaux en horaires décalés",
      "Haussmanniens de Neuilly et Boulogne, immeubles 1930 de Levallois",
      "Sièges sociaux et accueils à forte exigence de discrétion",
      "Neuf communes avec page dédiée, couverture sur tout le 92",
    ],
    keywords: [
      "société de nettoyage 92",
      "entreprise de nettoyage Hauts-de-Seine",
      "nettoyage bureaux Hauts-de-Seine",
      "nettoyage copropriété 92",
      "nettoyage La Défense",
    ],
    faqs: [
      {
        q: "Intervenez-vous dans les tours de La Défense ?",
        a: "Oui, sur les plateaux de bureaux de Courbevoie et du secteur de La Défense. Ces sites imposent un passage par le PC sécurité, des badges nominatifs et des créneaux d'intervention précis : nous fournissons la liste nominative des agents, leurs attestations et nous nous calons sur le règlement intérieur de l'immeuble.",
      },
      {
        q: "Pouvez-vous intervenir avant l'arrivée des salariés ?",
        a: "C'est le mode d'intervention le plus fréquent dans le 92. Nous passons avant 8h ou après 19h selon votre organisation, et pour les sites sensibles nous pouvons intervenir de nuit. L'objectif est que personne de notre équipe ne soit présent pendant vos heures de bureau.",
      },
      {
        q: "Quels sont vos délais dans les Hauts-de-Seine ?",
        a: "Comptez 24 à 48h pour une intervention ponctuelle sur la première couronne — Boulogne, Neuilly, Levallois, Courbevoie, Issy, Asnières, Colombes. Pour Rueil-Malmaison et l'ouest du département, les contrats réguliers se calent sans difficulté, les urgences ponctuelles demandent un peu plus de délai depuis notre siège de Bondy.",
      },
      {
        q: "Travaillez-vous avec les syndics du 92 ?",
        a: "Oui, avec plusieurs cabinets gérant des résidences sur Boulogne, Levallois, Colombes et Nanterre. Nous fournissons l'attestation de vigilance URSSAF et l'attestation d'assurance RC professionnelle, nous affectons un agent attitré par immeuble et nous présentons un devis au forfait annuel, directement exploitable en assemblée générale.",
      },
    ],
    nearbySlugs: [
      "boulogne-billancourt",
      "neuilly-sur-seine",
      "levallois-perret",
      "courbevoie",
      "nanterre",
      "issy-les-moulineaux",
      "asnieres-sur-seine",
      "colombes",
      "rueil-malmaison",
    ],
  },

  {
    slug: "boulogne-billancourt",
    name: "Boulogne-Billancourt",
    postalCode: "92100",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Boulogne-Billancourt est la plus peuplée des communes d'Île-de-France après Paris, et l'un des premiers pôles tertiaires du pays. La ville concentre des sièges sociaux, des groupes de médias et de production audiovisuelle, et un parc de bureaux dense entre le pont de Saint-Cloud, la rue du Vieux-Pont-de-Sèvres et le quartier du Trapèze. Le bâti résidentiel est tout aussi caractéristique : immeubles Art déco des années 1930, patrimoine moderne signé Le Corbusier, Perret ou Mallet-Stevens, et programmes neufs du Trapèze et de l'île Seguin livrés depuis les années 2010. TGT Propreté intervient à Boulogne-Billancourt auprès d'entreprises tertiaires (entretien de plateaux, salles de réunion, espaces d'accueil et sanitaires, en horaires décalés), de copropriétés dont les halls Art déco et les cages d'escalier d'origine demandent des produits non agressifs, de commerces et de restaurants des axes commerçants, et d'entreprises du bâtiment pour les remises en état après travaux. Les particularités locales : forte densité de bureaux imposant des interventions avant 8h ou après 18h, contrôle d'accès systématique dans les immeubles récents du Trapèze, et patrimoine bâti protégé où marbres, ferronneries et mosaïques d'origine ne tolèrent aucun décapant.",
    highlights: [
      "Pôle tertiaire majeur : sièges sociaux, médias, production audiovisuelle",
      "Copropriétés Art déco — marbres, ferronneries et mosaïques d'origine",
      "Programmes neufs du Trapèze et de l'île Seguin, accès badgé",
      "Interventions tertiaires avant 8h ou après 18h",
    ],
    keywords: [
      "entreprise de nettoyage Boulogne-Billancourt",
      "société de nettoyage Boulogne-Billancourt",
      "nettoyage bureaux Boulogne-Billancourt",
      "nettoyage copropriété Boulogne-Billancourt",
      "nettoyage 92100",
    ],
    faqs: [
      {
        q: "Intervenez-vous rapidement à Boulogne-Billancourt ?",
        a: "Oui. Nous couvrons Boulogne-Billancourt depuis notre base d'Île-de-France avec un devis gratuit sous 24h, et une visite sur place pour les surfaces tertiaires ou les copropriétés, où le chiffrage à distance est rarement fiable.",
      },
      {
        q: "Comment traitez-vous les halls Art déco des immeubles boulonnais ?",
        a: "Sans décapant ni produit acide. Les marbres, mosaïques et ferronneries d'origine se ternissent définitivement au contact d'un produit agressif. Nous travaillons au pH neutre, avec un matériel non abrasif, et nous identifions chaque matériau avant la première intervention.",
      },
      {
        q: "Pouvez-vous intervenir en dehors des heures de bureau ?",
        a: "Oui, c'est le mode de fonctionnement standard pour nos clients tertiaires de Boulogne : passage tôt le matin avant l'arrivée des équipes, ou en soirée après leur départ. Nos agents sont habitués aux procédures de badge et de PC sécurité des immeubles du Trapèze.",
      },
      {
        q: "Quels services proposez-vous aux copropriétés de Boulogne-Billancourt ?",
        a: "L'entretien complet des parties communes : halls, cages d'escalier, paliers, ascenseurs, vitreries communes, sortie et rentrée des containers selon le calendrier de collecte, et nettoyage du local poubelles. Un contrôle qualité régulier et une fiche de passage horodatée permettent au syndic de suivre la prestation.",
      },
    ],
    nearbySlugs: ["issy-les-moulineaux", "levallois-perret", "neuilly-sur-seine", "rueil-malmaison"],
  },

  {
    slug: "neuilly-sur-seine",
    name: "Neuilly-sur-Seine",
    postalCode: "92200",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Neuilly-sur-Seine prolonge directement le 16e et le 17e arrondissement, et en partage les codes : immeubles haussmanniens et post-haussmanniens de grand standing le long de l'avenue Charles-de-Gaulle et du boulevard Bineau, hôtels particuliers du côté du boulevard Maurice-Barrès et du bois de Boulogne, et une densité rare de cabinets de professions libérales — médecins, avocats, notaires, conseils — installés en rez-de-chaussée ou en étage noble. Le tertiaire y est présent mais discret, souvent sous forme de petites structures à forte valeur ajoutée plutôt que de grands plateaux. TGT Propreté intervient à Neuilly auprès de copropriétés haut de gamme (halls en marbre, miroirs anciens, ascenseurs à cabine boisée, moquettes d'étage), de cabinets médicaux et paramédicaux nécessitant un bionettoyage avec des détergents-désinfectants aux normes virucides et bactéricides, de cabinets juridiques exigeant la confidentialité, et de particuliers pour l'entretien de grands appartements. Les spécificités locales : niveau d'exigence visuel maximal, contrôle d'accès systématique avec gardien et PC sécurité, et clientèle qui privilégie un intervenant attitré et stable, avec un référent unique côté prestataire, plutôt qu'une rotation d'agents.",
    highlights: [
      "Copropriétés haut de gamme — marbres, miroirs anciens, ascenseurs boisés",
      "Forte densité de cabinets médicaux et paramédicaux : bionettoyage",
      "Cabinets juridiques et de conseil — confidentialité, NDA possible",
      "Intervenant attitré et référent unique, sans rotation d'agents",
    ],
    keywords: [
      "entreprise de nettoyage Neuilly-sur-Seine",
      "société de nettoyage Neuilly",
      "nettoyage copropriété Neuilly-sur-Seine",
      "nettoyage cabinet médical Neuilly",
      "nettoyage 92200",
    ],
    faqs: [
      {
        q: "Quel niveau de finition proposez-vous pour les halls de Neuilly ?",
        a: "Les copropriétés de Neuilly ont des halls en marbre, des miroirs anciens et des ascenseurs à cabine boisée qui se voient au premier coup d'œil. Nous travaillons au pH neutre, sans abrasif, avec un passage fixe — même jour, même heure — et un cahier de liaison tenu avec le gardien.",
      },
      {
        q: "Êtes-vous formés au bionettoyage des cabinets médicaux ?",
        a: "Oui. Nos équipes appliquent un protocole de bionettoyage avec des détergents-désinfectants de qualité hospitalière répondant aux normes européennes virucides, bactéricides et fongicides, avec une attention particulière aux points de contact : poignées, interrupteurs, accoudoirs de salle d'attente, lecteurs de cartes.",
      },
      {
        q: "Comment garantissez-vous la confidentialité dans un cabinet d'avocats ?",
        a: "Nos agents sont formés au respect du secret professionnel et ont pour consigne de ne jamais manipuler ni déplacer un document. Nous signons un accord de confidentialité si votre activité l'exige.",
      },
      {
        q: "Aurons-nous toujours le même intervenant ?",
        a: "Oui, c'est notre mode de fonctionnement à Neuilly : un intervenant attitré et un référent unique côté TGT Propreté. En cas d'absence, un agent de remplacement briefé en amont sur votre cahier des charges prend le relais aux horaires convenus, sans coupure de service.",
      },
    ],
    nearbySlugs: ["levallois-perret", "courbevoie", "boulogne-billancourt", "asnieres-sur-seine"],
  },

  {
    slug: "levallois-perret",
    name: "Levallois-Perret",
    postalCode: "92300",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Levallois-Perret est l'une des communes les plus denses d'Europe, et l'une des plus tertiaires des Hauts-de-Seine : sièges sociaux, sociétés de services, agences et cabinets occupent un parc de bureaux important concentré autour de la rue Anatole-France, du front de Seine et des abords de la mairie. Le résidentiel est majoritairement collectif, mêlant immeubles de la fin du XIXe et du début du XXe siècle à des programmes récents, avec une part notable de résidences avec gardien. La commune est compacte, ce qui simplifie les tournées mais tend fortement le stationnement. TGT Propreté intervient à Levallois-Perret pour l'entretien de plateaux de bureaux et d'espaces d'accueil en horaires décalés, le nettoyage de parties communes de copropriétés, le lavage de vitres et de façades vitrées d'immeubles tertiaires, et les remises en état après travaux — fréquentes vu le rythme de renouvellement du parc de bureaux. Les points d'attention locaux : stationnement très contraint qui impose de convenir à l'avance des créneaux de déchargement, immeubles de bureaux à contrôle d'accès badgé, et copropriétés avec gardien où la coordination avec le personnel de la résidence conditionne la qualité du service.",
    highlights: [
      "Parc de bureaux dense — plateaux, accueils, salles de réunion",
      "Lavage de vitres et façades vitrées d'immeubles tertiaires",
      "Copropriétés avec gardien : coordination et cahier de liaison",
      "Remises en état fréquentes liées au renouvellement des bureaux",
    ],
    keywords: [
      "entreprise de nettoyage Levallois-Perret",
      "société de nettoyage Levallois",
      "nettoyage bureaux Levallois-Perret",
      "nettoyage vitres Levallois",
      "nettoyage 92300",
    ],
    faqs: [
      {
        q: "Intervenez-vous dans les immeubles de bureaux de Levallois ?",
        a: "Oui, c'est notre activité principale sur la commune : plateaux en open space, salles de réunion, espaces d'accueil et sanitaires, avec passage avant 8h ou après 18h. Nos agents sont habitués aux accès badgés et aux procédures de PC sécurité.",
      },
      {
        q: "Le stationnement pose-t-il problème pour vos interventions ?",
        a: "Levallois est très contraint sur ce point. Pour les prestations qui nécessitent du matériel lourd — lavage de vitres, remise en état, traitement de moquettes — nous convenons à l'avance d'un créneau et d'un point de déchargement avec vous ou le gardien.",
      },
      {
        q: "Prenez-vous en charge le lavage des façades vitrées ?",
        a: "Oui, avec perches télescopiques et technique à l'eau pure pour une finition sans trace, châssis et encadrements inclus. Au-delà d'une certaine hauteur, une visite préalable définit les moyens d'accès et la fréquence adaptée.",
      },
      {
        q: "Comment travaillez-vous avec le gardien de la résidence ?",
        a: "Nous mettons en place un cahier de liaison et une fiche de passage horodatée. Le gardien reste l'interlocuteur du quotidien, le conseil syndical dispose d'une trace écrite du respect du cahier des charges.",
      },
    ],
    nearbySlugs: ["neuilly-sur-seine", "courbevoie", "asnieres-sur-seine", "boulogne-billancourt"],
  },

  {
    slug: "courbevoie",
    name: "Courbevoie",
    postalCode: "92400",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Courbevoie porte une grande partie du quartier d'affaires de La Défense : les tours et immeubles du secteur Faubourg de l'Arche et de l'esplanade relèvent de la commune, à côté d'un tissu résidentiel très différent, du centre ancien de Bécon-les-Bruyères aux immeubles du quartier Gambetta et aux copropriétés du bord de Seine. Cette juxtaposition d'un pôle tertiaire de premier plan et d'une ville résidentielle structure nos interventions. TGT Propreté intervient à Courbevoie auprès d'entreprises installées en périphérie immédiate de La Défense — plateaux de bureaux, espaces d'accueil, salles de réunion, sanitaires, avec des prestations calées avant 8h ou après 18h —, de copropriétés du centre et de Bécon, de commerces des axes de proximité, et d'entreprises du bâtiment pour les remises en état lors des réaménagements de plateaux, très fréquents dans ce secteur. Les spécificités locales : procédures d'accès strictes dans les immeubles de bureaux du secteur d'affaires (badges, PC sécurité, plages horaires imposées), grandes surfaces vitrées nécessitant un matériel adapté, et coexistence de moquettes de bureau à traiter par injection-extraction et de sols durs sur un même site.",
    highlights: [
      "Secteur d'affaires de La Défense — Faubourg de l'Arche, esplanade",
      "Accès badgés et plages horaires imposées par les PC sécurité",
      "Moquettes de bureau traitées par injection-extraction",
      "Copropriétés de Bécon-les-Bruyères et du bord de Seine",
    ],
    keywords: [
      "entreprise de nettoyage Courbevoie",
      "société de nettoyage Courbevoie",
      "nettoyage bureaux La Défense",
      "nettoyage moquette bureau Courbevoie",
      "nettoyage 92400",
    ],
    faqs: [
      {
        q: "Intervenez-vous dans les immeubles du secteur de La Défense ?",
        a: "Oui, sur la partie du quartier d'affaires située sur Courbevoie, notamment le Faubourg de l'Arche. Nos agents sont habitués aux procédures d'accès du secteur : badge, PC sécurité et plages horaires imposées par le gestionnaire de l'immeuble.",
      },
      {
        q: "Comment nettoyez-vous les moquettes de bureaux ?",
        a: "Par injection-extraction, après aspiration industrielle et brossage mécanique. Le procédé retire le trafic incrusté et les taches sans détremper la moquette : comptez 4 à 8 heures de séchage, ce qui permet un passage en soirée ou le week-end pour une réouverture normale.",
      },
      {
        q: "Pouvez-vous intervenir le week-end à Courbevoie ?",
        a: "Oui. Pour les prestations lourdes en site tertiaire — traitement de moquettes, remise en état après réaménagement, lavage complet de vitrages — le week-end est souvent le créneau le plus efficace, sans gêne pour vos équipes.",
      },
      {
        q: "Proposez-vous des contrats pour les copropriétés de Bécon ?",
        a: "Oui. L'entretien couvre les halls, cages d'escalier, paliers, ascenseurs et vitreries communes, la sortie et la rentrée des containers selon le calendrier de collecte, et le nettoyage du local poubelles.",
      },
    ],
    nearbySlugs: ["nanterre", "levallois-perret", "asnieres-sur-seine", "neuilly-sur-seine"],
  },

  {
    slug: "nanterre",
    name: "Nanterre",
    postalCode: "92000",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Nanterre est une commune de contrastes marqués : préfecture des Hauts-de-Seine, elle accueille la partie ouest du quartier d'affaires de La Défense et le secteur des Terrasses, l'université Paris Nanterre et ses annexes, un centre-ville commerçant réaménagé, ainsi que des quartiers résidentiels et des zones d'activité du côté du Petit-Nanterre et des bords de Seine. Le parc immobilier va du grand plateau tertiaire au collectif social, en passant par le pavillonnaire. TGT Propreté intervient à Nanterre auprès d'entreprises et d'administrations du secteur des Terrasses et de La Défense ouest (plateaux, accueils, sanitaires, en horaires décalés), d'établissements et d'annexes de l'enseignement supérieur, de copropriétés du centre et des quartiers résidentiels, et d'entreprises du bâtiment pour les fins de chantier — une demande soutenue compte tenu des opérations d'aménagement en cours sur la commune. Les points d'attention locaux : distances internes importantes entre le secteur d'affaires, l'université et le Petit-Nanterre, procédures d'accès et de sécurité dans les immeubles tertiaires et les bâtiments publics, et bâti très hétérogène qui interdit d'appliquer un protocole unique d'un site à l'autre.",
    highlights: [
      "Secteur des Terrasses et La Défense ouest — tertiaire et administrations",
      "Établissements d'enseignement supérieur et annexes",
      "Fins de chantier liées aux opérations d'aménagement en cours",
      "Copropriétés du centre-ville et quartiers résidentiels",
    ],
    keywords: [
      "entreprise de nettoyage Nanterre",
      "société de nettoyage Nanterre",
      "nettoyage bureaux Nanterre",
      "nettoyage fin de chantier Nanterre",
      "nettoyage 92000",
    ],
    faqs: [
      {
        q: "Intervenez-vous sur le secteur des Terrasses et La Défense ouest ?",
        a: "Oui, pour l'entretien de plateaux de bureaux, d'espaces d'accueil et de sanitaires, avec des passages avant 8h ou après 18h. Nos agents connaissent les procédures d'accès badgé et de PC sécurité de ces immeubles.",
      },
      {
        q: "Prenez-vous en charge les fins de chantier à Nanterre ?",
        a: "Oui, c'est une demande soutenue vu les opérations d'aménagement en cours. Nous traitons l'aspiration des poussières de plâtre, le voile de ciment sur les carrelages, les traces de peinture et de colle, le nettoyage des menuiseries et le lavage des vitres avant livraison.",
      },
      {
        q: "Travaillez-vous avec des établissements d'enseignement ?",
        a: "Oui, pour des bureaux, bibliothèques, salles et annexes. Ces sites imposent des créneaux précis en dehors des heures de cours et un respect strict des consignes de sécurité du bâtiment.",
      },
      {
        q: "Le devis est-il gratuit à Nanterre ?",
        a: "Oui, gratuit et sans engagement, sous 24h. Vu l'hétérogénéité du bâti sur la commune, nous recommandons une visite sur place pour les surfaces tertiaires et les copropriétés : un chiffrage à distance y est rarement fiable.",
      },
    ],
    nearbySlugs: ["courbevoie", "rueil-malmaison", "colombes", "levallois-perret"],
  },

  {
    slug: "issy-les-moulineaux",
    name: "Issy-les-Moulineaux",
    postalCode: "92130",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Issy-les-Moulineaux s'est imposée comme l'un des principaux pôles de bureaux du sud-ouest parisien, avec une spécialisation forte dans les médias, les télécoms et le numérique. Le parc tertiaire se concentre autour du Val de Seine, des quais et du quartier Issy-Val-de-Seine, où les immeubles récents alignent de grandes façades vitrées, des halls d'accueil très visibles et des plateaux en open space. Le résidentiel accompagne cette dynamique, entre programmes neufs des Hauts d'Issy et du Fort, et bâti plus ancien du centre-ville et de la rue du Général-Leclerc. TGT Propreté intervient à Issy-les-Moulineaux pour l'entretien de plateaux et d'espaces d'accueil en horaires décalés, le lavage de façades vitrées et de baies, le traitement de moquettes de bureaux par injection-extraction, l'entretien de parties communes de copropriétés, et les remises en état lors des réaménagements de plateaux. Les spécificités locales : très grandes surfaces vitrées qui font l'image de l'entreprise dès le hall et demandent une finition sans trace, accès badgé systématique dans les immeubles du Val de Seine, et forte proportion de sites qui ne peuvent être traités qu'avant 8h, après 19h ou le week-end.",
    highlights: [
      "Pôle médias, télécoms et numérique du Val de Seine",
      "Grandes façades vitrées — finition sans trace, châssis inclus",
      "Moquettes de bureaux : injection-extraction, séchage 4 à 8 heures",
      "Interventions avant 8h, après 19h ou le week-end",
    ],
    keywords: [
      "entreprise de nettoyage Issy-les-Moulineaux",
      "société de nettoyage Issy-les-Moulineaux",
      "nettoyage bureaux Issy-les-Moulineaux",
      "nettoyage vitres Issy Val de Seine",
      "nettoyage 92130",
    ],
    faqs: [
      {
        q: "Nettoyez-vous les grandes façades vitrées du Val de Seine ?",
        a: "Oui, à la raclette et au mouilleur pour les surfaces accessibles, à la perche télescopique et à l'eau pure pour la hauteur. Les châssis, rails et encadrements sont inclus : une vitre sans trace avec un châssis encrassé ne donne pas le résultat attendu dans un hall d'accueil.",
      },
      {
        q: "Pouvez-vous intervenir uniquement en dehors des heures ouvrées ?",
        a: "Oui, c'est le cas de la majorité de nos clients tertiaires à Issy : passage avant 8h, après 19h ou le week-end. Les horaires sont fixés dans le contrat et nos agents disposent des accès et badges nécessaires.",
      },
      {
        q: "Combien de temps sèche une moquette de bureau après traitement ?",
        a: "Entre 4 et 8 heures selon la ventilation et la température des locaux. Nos extracteurs professionnels laissent la moquette à peine humide, ce qui permet un traitement en soirée ou le week-end pour une réouverture normale.",
      },
      {
        q: "Intervenez-vous aussi pour les copropriétés d'Issy ?",
        a: "Oui, aussi bien dans les programmes neufs des Hauts d'Issy que dans le bâti ancien du centre : halls, escaliers, paliers, ascenseurs, vitreries communes, gestion des containers et nettoyage du local poubelles.",
      },
    ],
    nearbySlugs: ["boulogne-billancourt", "levallois-perret", "neuilly-sur-seine", "massy"],
  },

  {
    slug: "asnieres-sur-seine",
    name: "Asnières-sur-Seine",
    postalCode: "92600",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Asnières-sur-Seine combine un centre-ville ancien autour de la gare et de l'avenue Sainte-Anne, des quartiers pavillonnaires et de petits collectifs sur les hauteurs, et un secteur en pleine mutation le long des bords de Seine et du quartier des Bords-de-Seine, où les anciennes emprises industrielles laissent place à des programmes de logements et à des locaux d'activité. Le tissu économique local repose sur des PME, des artisans, des commerces de proximité et des professions libérales, plutôt que sur de grands plateaux tertiaires. TGT Propreté intervient à Asnières pour l'entretien de parties communes de copropriétés — c'est la demande dominante sur la commune, avec un parc de petits et moyens collectifs souvent sans gardien —, le nettoyage de locaux de PME et de cabinets, les remises en état après travaux dans les programmes neufs et les réhabilitations, et les prestations aux particuliers. Les points d'attention locaux : copropriétés de taille modeste où le budget d'entretien est serré et où la fréquence doit être calibrée au plus juste, bâti ancien avec escaliers en pierre ou carreaux de ciment nécessitant des produits à pH neutre, et stationnement difficile dans le centre et aux abords de la gare.",
    highlights: [
      "Parc de petites et moyennes copropriétés, souvent sans gardien",
      "Escaliers en pierre et carreaux de ciment — traitement au pH neutre",
      "PME, artisans et professions libérales du centre",
      "Programmes neufs des Bords-de-Seine : remises en état",
    ],
    keywords: [
      "entreprise de nettoyage Asnières-sur-Seine",
      "société de nettoyage Asnières",
      "nettoyage copropriété Asnières-sur-Seine",
      "entretien parties communes Asnières",
      "nettoyage 92600",
    ],
    faqs: [
      {
        q: "Proposez-vous des contrats adaptés aux petites copropriétés ?",
        a: "Oui, c'est le cœur de notre activité à Asnières. Sur un petit collectif, la fréquence se cale au plus juste — souvent un à deux passages hebdomadaires sur les parties communes — pour tenir le budget voté en assemblée générale sans sacrifier la propreté du hall.",
      },
      {
        q: "Comment traitez-vous les escaliers anciens et les carreaux de ciment ?",
        a: "Au pH neutre, sans produit acide ni décapant. Les carreaux de ciment et la pierre du bâti ancien d'Asnières se marquent définitivement au contact d'un produit agressif.",
      },
      {
        q: "Comment le conseil syndical suit-il la prestation sans gardien ?",
        a: "Par une fiche de passage horodatée et signée, affichée dans le hall ou le local technique, complétée par un contrôle qualité régulier de notre part. Beaucoup d'immeubles d'Asnières n'ont pas de gardien : c'est le repère qui permet de vérifier le respect du cahier des charges.",
      },
      {
        q: "Intervenez-vous pour les PME et les cabinets d'Asnières ?",
        a: "Oui, sur des surfaces de bureaux modestes avec deux à trois passages par semaine : dépoussiérage des postes, désinfection des points de contact et des sanitaires, vidage des corbeilles avec tri sélectif et nettoyage des sols.",
      },
    ],
    nearbySlugs: ["colombes", "levallois-perret", "courbevoie", "saint-denis"],
  },

  {
    slug: "colombes",
    name: "Colombes",
    postalCode: "92700",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Colombes est l'une des communes les plus étendues des Hauts-de-Seine, organisée autour de plusieurs centralités plutôt que d'un seul centre : le centre-ville et la gare, le quartier du Petit-Colombes, les Fossés-Jean, la Petite-Garenne et le secteur des Vallées. Le bâti va du pavillonnaire des Vallées aux grands ensembles du Petit-Colombes, en passant par des copropriétés de taille moyenne et des programmes récents. Le tissu économique associe des zones d'activité et des locaux de PME à un commerce de proximité réparti entre les différents quartiers. TGT Propreté intervient à Colombes pour l'entretien de parties communes de copropriétés et de résidences, le nettoyage de locaux d'entreprises et d'ateliers, les remises en état après travaux dans le pavillonnaire comme dans le collectif réhabilité, et les prestations aux particuliers — ménage approfondi, traitement de canapés, tapis et moquettes à domicile. Les spécificités locales : commune très étendue où la planification des tournées conditionne le respect des créneaux, résidences avec de grands volumes de parties communes et plusieurs cages d'escalier par bâtiment, et locaux poubelles souvent mutualisés dont l'entretien et la désinfection demandent un passage dédié.",
    highlights: [
      "Résidences à plusieurs cages d'escalier — volumes de parties communes élevés",
      "Locaux poubelles mutualisés : passage dédié désinfection",
      "Zones d'activité et locaux de PME répartis sur la commune",
      "Remises en état dans le pavillonnaire des Vallées et le collectif réhabilité",
    ],
    keywords: [
      "entreprise de nettoyage Colombes",
      "société de nettoyage Colombes",
      "nettoyage copropriété Colombes",
      "ménage Colombes",
      "nettoyage 92700",
    ],
    faqs: [
      {
        q: "Gérez-vous les résidences à plusieurs cages d'escalier ?",
        a: "Oui. Sur ce type de résidence, très présent à Colombes, nous dimensionnons l'équipe au nombre de cages et d'étages, et nous établissons un planning de rotation pour que chaque bâtiment soit traité à la même fréquence, sans qu'aucun ne soit oublié.",
      },
      {
        q: "Prenez-vous en charge les locaux poubelles mutualisés ?",
        a: "Oui, avec un passage dédié : nettoyage des sols et des parois, désinfection, et gestion de la sortie et de la rentrée des containers selon le calendrier de collecte. C'est un point sensible sur les résidences où le local est partagé entre plusieurs bâtiments.",
      },
      {
        q: "Desservez-vous tous les quartiers de Colombes ?",
        a: "Oui, du centre-ville au Petit-Colombes, aux Fossés-Jean et aux Vallées. Colombes est étendue : les temps de trajet internes sont intégrés à la planification pour que le créneau annoncé soit tenu.",
      },
      {
        q: "Intervenez-vous chez les particuliers à Colombes ?",
        a: "Oui, pour le nettoyage approfondi de logements, les remises en état après travaux et le traitement à domicile des canapés, fauteuils, tapis et moquettes par injection-extraction.",
      },
    ],
    nearbySlugs: ["asnieres-sur-seine", "nanterre", "courbevoie", "saint-denis"],
  },

  {
    slug: "rueil-malmaison",
    name: "Rueil-Malmaison",
    postalCode: "92500",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    intro:
      "Rueil-Malmaison est l'une des communes les plus vastes et les plus vertes des Hauts-de-Seine, avec un profil très différent de la première couronne dense : un centre-ville commerçant, un patrimoine historique autour du château de Malmaison, de larges quartiers pavillonnaires et résidentiels, et un pôle tertiaire notable autour de Rueil-sur-Seine et de l'avenue du 18-Juin-1940, où plusieurs sièges sociaux sont installés. Les bords de Seine et le quartier de Buzenval complètent ce tissu. TGT Propreté intervient à Rueil-Malmaison auprès d'entreprises du secteur tertiaire (plateaux de bureaux, accueils, salles de réunion, en horaires décalés), de copropriétés résidentielles dont beaucoup disposent d'espaces extérieurs communs et de parkings souterrains, de particuliers pour l'entretien de maisons et le traitement de textiles, et d'entreprises du bâtiment pour les fins de chantier. Les points d'attention locaux : superficie importante qui impose une planification rigoureuse des tournées, parkings et sous-sols de copropriété nécessitant un balayage et un lavage mécanisés ainsi qu'un traitement des taches d'huile, et abords extérieurs — allées, terrasses communes, entrées — qui font partie intégrante de la prestation d'entretien sur la commune.",
    highlights: [
      "Pôle tertiaire de Rueil-sur-Seine — sièges sociaux et plateaux de bureaux",
      "Parkings et sous-sols de copropriété : lavage mécanisé, taches d'huile",
      "Abords extérieurs communs — allées, terrasses, entrées",
      "Maisons et résidences : entretien régulier et traitement de textiles",
    ],
    keywords: [
      "entreprise de nettoyage Rueil-Malmaison",
      "société de nettoyage Rueil-Malmaison",
      "nettoyage bureaux Rueil-Malmaison",
      "nettoyage copropriété Rueil-Malmaison",
      "nettoyage 92500",
    ],
    faqs: [
      {
        q: "Nettoyez-vous les parkings souterrains de copropriété ?",
        a: "Oui. Nous procédons au balayage et au lavage mécanisés des sols, au nettoyage des murs et des piliers accessibles, et au traitement des taches d'huile. C'est une prestation qui se planifie généralement une à deux fois par an, en complément de l'entretien courant.",
      },
      {
        q: "Les abords extérieurs sont-ils inclus dans vos contrats ?",
        a: "Ils peuvent l'être, et c'est fréquent à Rueil vu la place des espaces communs extérieurs : balayage des allées et des entrées, nettoyage des terrasses communes, entretien des accès. Le périmètre est défini dans le cahier des charges avec le syndic.",
      },
      {
        q: "Intervenez-vous dans les bureaux de Rueil-sur-Seine ?",
        a: "Oui, pour l'entretien de plateaux, d'espaces d'accueil, de salles de réunion et de sanitaires, avec des passages avant 8h ou après 18h afin de ne pas gêner vos équipes.",
      },
      {
        q: "Rueil est une grande commune : tenez-vous les créneaux annoncés ?",
        a: "Oui. La superficie de Rueil impose une planification rigoureuse des tournées, que nous établissons par secteur. Le créneau convenu dans le contrat est celui sur lequel nous nous engageons.",
      },
    ],
    nearbySlugs: ["nanterre", "courbevoie", "colombes", "boulogne-billancourt"],
  },

  /* ══════════════════  VAL-DE-MARNE (94)  ══════════════════ */

  {
    slug: "val-de-marne",
    name: "Val-de-Marne",
    postalCode: "94",
    department: "Val-de-Marne",
    departmentCode: "94",
    isDepartment: true,
    intro:
      "Le Val-de-Marne est le département francilien où les besoins de propreté sont les plus variés, parce que son tissu économique l'est aussi. On y trouve le marché international de Rungis et sa zone d'activité agroalimentaire, la plateforme d'Orly et les hôtels et sociétés de service qui l'entourent, le pôle administratif, hospitalier et universitaire de Créteil autour du CHU Henri-Mondor et du centre commercial Créteil Soleil, les communes résidentielles bourgeoises de Vincennes et Saint-Mandé en lisière du bois, les anciens secteurs industriels d'Ivry-sur-Seine et de Vitry-sur-Seine devenus quartiers mixtes avec ateliers d'artistes et locaux reconvertis, et un pavillonnaire étendu le long de la Marne. Pour un prestataire, cela signifie des protocoles différents d'un site à l'autre : hygiène alimentaire stricte autour de Rungis, bionettoyage pour les cabinets médicaux et les structures de soins du secteur de Créteil, entretien de parties communes pour les copropriétés de Vincennes et d'Ivry, remise en état de locaux pour les commerces et les restaurants. TGT Propreté intervient sur l'ensemble du département. Deux communes disposent de leur page dédiée ; les autres sont traitées avec le même niveau de service, devis gratuit sous 24h.",
    highlights: [
      "Rungis et sa zone agroalimentaire : protocoles d'hygiène alimentaire",
      "Pôle hospitalier et universitaire de Créteil — bionettoyage",
      "Copropriétés de Vincennes et Saint-Mandé, pavillonnaire des bords de Marne",
      "Locaux reconvertis d'Ivry et Vitry : ateliers, bureaux, commerces",
    ],
    keywords: [
      "société de nettoyage 94",
      "entreprise de nettoyage Val-de-Marne",
      "nettoyage bureaux Val-de-Marne",
      "nettoyage copropriété 94",
      "nettoyage Créteil Vincennes",
    ],
    faqs: [
      {
        q: "Intervenez-vous sur les sites agroalimentaires du secteur de Rungis ?",
        a: "Oui, sur les locaux, bureaux, vestiaires, réfectoires et sanitaires des entreprises du secteur. Nous appliquons un protocole conforme aux exigences HACCP sur les zones de production et de stockage, avec traçabilité des passages et des produits utilisés. Le détail du protocole est établi après visite, selon votre plan de maîtrise sanitaire.",
      },
      {
        q: "Prenez-vous en charge les cabinets médicaux du Val-de-Marne ?",
        a: "Oui. Le bionettoyage des cabinets, laboratoires et structures de soins fait l'objet d'une prestation dédiée : zonage du site, circuits de déchets DASRI, désinfection des surfaces de contact et traçabilité écrite de chaque intervention. Le secteur de Créteil concentre une bonne part de cette demande.",
      },
      {
        q: "Quels sont vos délais dans le Val-de-Marne ?",
        a: "24 à 48h pour une intervention ponctuelle sur Vincennes, Saint-Mandé, Ivry, Charenton et Créteil, qui sont proches de notre siège de Bondy par la A86 et la A4. Sur le sud du département, vers Villeneuve-Saint-Georges ou Boissy-Saint-Léger, nous groupons les interventions par secteur.",
      },
      {
        q: "Travaillez-vous avec les restaurants et commerces du 94 ?",
        a: "Oui, c'est une part importante de notre activité sur le département : dégraissage des cuisines, hottes et conduits, plonges, sols antidérapants, vitrines et devantures. Nous intervenons en dehors des heures de service, tôt le matin ou après la fermeture, pour ne jamais gêner l'exploitation.",
      },
    ],
    nearbySlugs: ["vincennes", "creteil"],
  },

  {
    slug: "vincennes",
    name: "Vincennes",
    postalCode: "94300",
    department: "Val-de-Marne",
    departmentCode: "94",
    intro:
      "Vincennes est une commune compacte et dense, adossée au bois et au château, avec un caractère résidentiel affirmé : immeubles de la fin du XIXe et de l'entre-deux-guerres, façades en brique et en meulière, halls d'entrée souvent d'origine, et un centre commerçant très actif autour de la rue du Midi et de l'avenue de Paris. Le tertiaire y est présent sous forme de petites structures — cabinets médicaux et paramédicaux, avocats, notaires, agences — plutôt que de grands plateaux. La proximité immédiate du 12e arrondissement et la desserte par le RER A et la ligne 1 en font une adresse recherchée. TGT Propreté intervient à Vincennes pour l'entretien de parties communes de copropriétés — la demande principale, avec des halls et cages d'escalier d'époque qui demandent un entretien soigné —, le nettoyage de cabinets médicaux et de professions libérales, l'entretien de commerces et de restaurants du centre, et les prestations aux particuliers. Les spécificités locales : bâti ancien avec carreaux de ciment, mosaïques et ferronneries d'origine incompatibles avec les décapants, immeubles souvent sans ascenseur où le portage du matériel doit être anticipé, et stationnement très tendu qui impose de convenir des créneaux de déchargement à l'avance.",
    highlights: [
      "Copropriétés d'époque — carreaux de ciment, mosaïques, ferronneries",
      "Immeubles sans ascenseur : portage du matériel anticipé",
      "Cabinets médicaux et professions libérales du centre",
      "Commerces et restauration de la rue du Midi et de l'avenue de Paris",
    ],
    keywords: [
      "entreprise de nettoyage Vincennes",
      "société de nettoyage Vincennes",
      "nettoyage copropriété Vincennes",
      "nettoyage cabinet médical Vincennes",
      "nettoyage 94300",
    ],
    faqs: [
      {
        q: "Comment entretenez-vous les halls anciens de Vincennes ?",
        a: "Sans décapant ni produit acide. Les carreaux de ciment, mosaïques et ferronneries d'origine des immeubles vincennois se marquent définitivement au contact d'un produit agressif. Nous travaillons au pH neutre et identifions chaque matériau avant la première intervention.",
      },
      {
        q: "Intervenez-vous dans les immeubles sans ascenseur ?",
        a: "Oui, c'est fréquent sur la commune. Le portage du matériel est anticipé dans l'organisation de la prestation, et le temps correspondant est intégré au devis plutôt que découvert en cours de contrat.",
      },
      {
        q: "Prenez-vous en charge les cabinets médicaux de Vincennes ?",
        a: "Oui, avec un protocole de bionettoyage : détergents-désinfectants aux normes virucides, bactéricides et fongicides, et désinfection systématique des points de contact — poignées, interrupteurs, accoudoirs de salle d'attente, lecteurs de cartes.",
      },
      {
        q: "Travaillez-vous pour les commerces et restaurants du centre ?",
        a: "Oui, avec des passages avant ouverture ou après fermeture. Pour la restauration, nous appliquons un protocole HACCP incluant le dégraissage des hottes, des équipements de cuisson et le récurage des sols.",
      },
    ],
    nearbySlugs: ["montreuil", "creteil", "noisy-le-sec", "bondy"],
  },

  {
    slug: "creteil",
    name: "Créteil",
    postalCode: "94000",
    department: "Val-de-Marne",
    departmentCode: "94",
    intro:
      "Créteil est la préfecture du Val-de-Marne, et l'une des rares communes d'Île-de-France conçues largement comme un ensemble urbain planifié : le centre administratif et l'Hôtel de Ville, le lac et les quartiers résidentiels qui l'entourent, le Mont-Mesly, l'Échat et le secteur hospitalier autour du CHI et du CHU Henri-Mondor, ainsi que la zone d'activité des Petits Carreaux et le pôle universitaire. Cette structure produit une demande particulière : beaucoup de grands ensembles résidentiels avec de vastes parties communes, un secteur médical et paramédical important, et un tissu de bureaux et de locaux d'activité administratifs. TGT Propreté intervient à Créteil pour l'entretien de parties communes de résidences et de copropriétés de grande taille, le nettoyage de cabinets médicaux et paramédicaux gravitant autour du pôle hospitalier, l'entretien de bureaux et de locaux d'activité, et les remises en état après travaux. Les points d'attention locaux : grandes résidences à plusieurs bâtiments où la constance du passage compte plus que la ponctualité d'une intervention isolée, exigences de bionettoyage dans l'environnement médical, et distances internes importantes entre les quartiers qui rendent la planification déterminante.",
    highlights: [
      "Grandes résidences à plusieurs bâtiments — constance du passage",
      "Environnement médical du pôle hospitalier : bionettoyage",
      "Bureaux et locaux d'activité du secteur administratif et des Petits Carreaux",
      "Remises en état après travaux dans le collectif",
    ],
    keywords: [
      "entreprise de nettoyage Créteil",
      "société de nettoyage Créteil",
      "nettoyage copropriété Créteil",
      "nettoyage cabinet médical Créteil",
      "nettoyage 94000",
    ],
    faqs: [
      {
        q: "Gérez-vous les grandes résidences de Créteil ?",
        a: "Oui. Sur une résidence à plusieurs bâtiments, nous dimensionnons l'équipe au nombre de cages et d'étages et nous établissons un planning de rotation, de sorte que chaque bâtiment soit traité à la même fréquence. Une fiche de passage horodatée permet au syndic de le vérifier.",
      },
      {
        q: "Intervenez-vous dans les cabinets médicaux du secteur hospitalier ?",
        a: "Oui, avec un protocole de bionettoyage : détergents-désinfectants de qualité hospitalière aux normes virucides, bactéricides et fongicides, et désinfection méticuleuse des points de contact. Nos agents sont sensibilisés à la confidentialité de l'environnement médical.",
      },
      {
        q: "Proposez-vous des contrats pour les bureaux et locaux d'activité ?",
        a: "Oui, sur le secteur administratif comme sur la zone des Petits Carreaux : dépoussiérage des postes, désinfection des surfaces partagées et des sanitaires, vidage des corbeilles avec tri sélectif, entretien des sols, en horaires décalés si nécessaire.",
      },
      {
        q: "Le devis nécessite-t-il une visite sur place à Créteil ?",
        a: "Pour les copropriétés et les surfaces tertiaires, oui : les volumes de parties communes et le nombre d'accès rendent un chiffrage à distance peu fiable. La visite est gratuite et le devis vous parvient sous 24h.",
      },
    ],
    nearbySlugs: ["vincennes", "montreuil", "massy", "bondy"],
  },

  /* ══════════════════  YVELINES (78)  ══════════════════ */

  {
    slug: "yvelines",
    name: "Yvelines",
    postalCode: "78",
    department: "Yvelines",
    departmentCode: "78",
    isDepartment: true,
    intro:
      "Les Yvelines sont le département le plus étendu de l'ouest francilien, et le plus contrasté : Versailles et son centre historique classé, les parcs d'activité de Saint-Quentin-en-Yvelines, les plateaux de bureaux de Vélizy-Villacoublay tournés vers l'automobile et l'aéronautique, le tissu industriel de Poissy et des Mureaux, les communes résidentielles aisées de Saint-Germain-en-Laye, du Vésinet et de Croissy, puis une large frange rurale vers Rambouillet et la vallée de Chevreuse. À Versailles, l'entretien demande une attention particulière : parties communes protégées, immeubles XVIIIe et XIXe aux matériaux anciens — pierre, marbre, parquets, ferronneries — qui ne supportent pas les produits agressifs, et syndics habitués à un niveau d'exigence élevé. Sur les parcs d'activité, la logique est inverse : grandes surfaces, sols techniques, lavage mécanisé, entretien en horaires décalés. TGT Propreté intervient dans tout le département, avec une organisation adaptée à la distance depuis notre siège de Bondy : les contrats réguliers se planifient sans difficulté, les interventions ponctuelles sont groupées par secteur pour ne pas vous faire payer un trajet inutile. Versailles dispose de sa page dédiée. Devis gratuit sous 24h.",
    highlights: [
      "Versailles : immeubles XVIIIe-XIXe, matériaux anciens, syndics exigeants",
      "Saint-Quentin-en-Yvelines et Vélizy : parcs d'activité et plateaux de bureaux",
      "Communes résidentielles de Saint-Germain-en-Laye et du Vésinet",
      "Interventions groupées par secteur, pour ne pas facturer le trajet",
    ],
    keywords: [
      "société de nettoyage 78",
      "entreprise de nettoyage Yvelines",
      "nettoyage bureaux Yvelines",
      "nettoyage copropriété 78",
      "nettoyage Versailles Saint-Quentin",
    ],
    faqs: [
      {
        q: "Les Yvelines sont loin de Bondy : intervenez-vous vraiment jusque-là ?",
        a: "Oui, et c'est une part régulière de notre activité. La distance ne change pas le prix de la prestation, elle change l'organisation : un contrat régulier se cale dans une tournée, ce qui le rend parfaitement tenable. Pour une urgence ponctuelle isolée dans l'ouest du département, nous vous donnons un délai honnête plutôt qu'une promesse que nous ne tiendrions pas.",
      },
      {
        q: "Savez-vous traiter les matériaux anciens des immeubles de Versailles ?",
        a: "Oui. Pierre, marbre, terre cuite, parquets anciens et ferronneries appellent des produits à pH neutre et des méthodes douces : un détergent alcalin ou un détartrant acide mal choisi marque définitivement une pierre calcaire. Nous relevons les matériaux lors de la visite et nous les inscrivons au cahier des charges.",
      },
      {
        q: "Intervenez-vous sur les parcs d'activité et les bureaux du 78 ?",
        a: "Oui, sur Saint-Quentin-en-Yvelines, Vélizy-Villacoublay, Montigny-le-Bretonneux et Guyancourt notamment. Nous prenons en charge les plateaux de bureaux, les sanitaires collectifs, les réfectoires et les vestiaires, avec un lavage mécanisé pour les grandes surfaces de sol.",
      },
      {
        q: "Quelles communes des Yvelines couvrez-vous ?",
        a: "L'ensemble du département. Versailles dispose d'une page dédiée sur ce site, mais nous intervenons aussi sur Saint-Germain-en-Laye, Le Vésinet, Chatou, Croissy, Poissy, Saint-Quentin-en-Yvelines, Vélizy et les communes voisines. Donnez-nous votre adresse, nous répondons sous 24h avec un délai réaliste.",
      },
    ],
    nearbySlugs: ["versailles"],
  },

  {
    slug: "versailles",
    name: "Versailles",
    postalCode: "78000",
    department: "Yvelines",
    departmentCode: "78",
    intro:
      "Versailles impose des contraintes que l'on rencontre peu ailleurs en Île-de-France : un centre historique classé, un bâti XVIIe et XVIIIe siècle dans les quartiers Saint-Louis et Notre-Dame, des hôtels particuliers, et un patrimoine où pierre de taille, parquets anciens, boiseries et ferronneries sont la règle plutôt que l'exception. À côté de ce cœur historique, la ville accueille un tissu tertiaire réel — cabinets de professions libérales, sièges d'associations et d'institutions, établissements d'enseignement —, un commerce dense autour du marché Notre-Dame et de la rue de la Paroisse, et des quartiers résidentiels plus récents à Montreuil-Versailles, Porchefontaine et Clagny. TGT Propreté intervient à Versailles pour l'entretien de copropriétés du centre historique, le nettoyage de cabinets et de locaux de professions libérales, l'entretien de commerces, et les remises en état après travaux — un besoin fréquent compte tenu du rythme de rénovation du bâti ancien. Les spécificités locales : matériaux anciens qui excluent tout produit acide ou décapant, contraintes d'accès et de stationnement dans le secteur classé, et niveau d'exigence esthétique élevé sur les parties communes visibles depuis la rue.",
    highlights: [
      "Centre historique classé — pierre de taille, parquets anciens, boiseries",
      "Aucun produit acide ni décapant sur le bâti ancien",
      "Cabinets de professions libérales et institutions",
      "Remises en état après rénovation du bâti ancien",
    ],
    keywords: [
      "entreprise de nettoyage Versailles",
      "société de nettoyage Versailles",
      "nettoyage copropriété Versailles",
      "nettoyage fin de chantier Versailles",
      "nettoyage 78000",
    ],
    faqs: [
      {
        q: "Comment traitez-vous le bâti ancien de Versailles ?",
        a: "Sans aucun produit acide ni décapant. La pierre de taille, les parquets anciens, les boiseries et les ferronneries du centre historique se dégradent définitivement au contact de ces produits. Nous travaillons au pH neutre, avec un matériel non abrasif, et nous identifions chaque matériau lors de la visite préalable.",
      },
      {
        q: "Intervenez-vous dans le secteur classé malgré les contraintes d'accès ?",
        a: "Oui. L'accès et le stationnement sont contraints dans le centre historique : nous convenons à l'avance d'un créneau et d'un point de déchargement, et nous dimensionnons le matériel pour être opérationnels rapidement sur place.",
      },
      {
        q: "Prenez-vous en charge les fins de chantier à Versailles ?",
        a: "Oui, c'est une demande fréquente vu le rythme de rénovation du bâti ancien. Nous traitons l'aspiration des poussières de plâtre, le grattage des traces de peinture et de colle, le lessivage des murs et menuiseries et le lavage des vitres, avec des méthodes adaptées aux matériaux d'origine.",
      },
      {
        q: "Versailles est loin de votre siège : quels sont vos délais ?",
        a: "Nous intervenons sur l'ensemble de l'Île-de-France, Yvelines comprises. Le devis reste gratuit sous 24h. Pour Versailles, nous groupons les interventions par secteur afin de tenir des créneaux fiables : les contrats réguliers sont donc plus faciles à caler que les urgences ponctuelles.",
      },
    ],
    nearbySlugs: ["rueil-malmaison", "boulogne-billancourt", "nanterre", "massy"],
  },

  /* ══════════════════  ESSONNE (91)  ══════════════════ */

  {
    slug: "essonne",
    name: "Essonne",
    postalCode: "91",
    department: "Essonne",
    departmentCode: "91",
    isDepartment: true,
    intro:
      "L'Essonne a un profil que l'on ne retrouve nulle part ailleurs en Île-de-France : c'est le département de la recherche et des campus. Le plateau de Saclay y concentre laboratoires, écoles d'ingénieurs et centres de R&D, Orsay et Gif-sur-Yvette prolongent ce tissu universitaire, Les Ulis forme l'un des plus grands parcs d'activité du sud francilien, et Massy est devenue un pôle tertiaire à part entière autour de sa gare TGV. Évry-Courcouronnes apporte la dimension administrative et hospitalière, Corbeil-Essonnes et Brétigny un tissu industriel et logistique, et le sud du département bascule rapidement vers le rural. Cette composition change le travail : sur un site de recherche, l'entretien se négocie zone par zone — bureaux et circulations pour nous, laboratoires et salles techniques selon un protocole défini avec le responsable HSE, locaux interdits sans accompagnement. Sur les parcs d'activité, ce sont de grandes surfaces de sol, des sanitaires collectifs et des réfectoires à traiter en horaires décalés. TGT Propreté intervient dans toute l'Essonne depuis son siège de Bondy, en groupant les interventions par secteur. Massy dispose de sa page dédiée. Devis gratuit sous 24h.",
    highlights: [
      "Plateau de Saclay, Orsay, Gif : laboratoires et campus, entretien par zones",
      "Parc d'activité des Ulis et pôle tertiaire de Massy",
      "Évry-Courcouronnes : administratif, hospitalier, universitaire",
      "Interventions groupées par secteur sur le sud du département",
    ],
    keywords: [
      "société de nettoyage 91",
      "entreprise de nettoyage Essonne",
      "nettoyage bureaux Essonne",
      "nettoyage copropriété 91",
      "nettoyage Massy Saclay",
    ],
    faqs: [
      {
        q: "Pouvez-vous intervenir sur un site de recherche ou un laboratoire ?",
        a: "Oui, en nous limitant strictement au périmètre défini avec votre responsable HSE. Nous prenons en charge les bureaux, circulations, sanitaires, réfectoires et salles de réunion. Les zones techniques et les laboratoires relèvent d'un protocole spécifique, et certaines salles ne se nettoient pas sans accompagnement : c'est à vous de fixer cette frontière, nous la respectons à la lettre.",
      },
      {
        q: "Quels sont vos délais en Essonne ?",
        a: "Massy, Palaiseau, Longjumeau et Chilly-Mazarin sont accessibles rapidement par la A6 et la A86 : comptez 24 à 48h pour une intervention ponctuelle. Sur le sud du département, nous groupons les interventions, ce qui rend les contrats réguliers faciles à planifier et les urgences isolées un peu plus longues à caler.",
      },
      {
        q: "Intervenez-vous sur les parcs d'activité comme Les Ulis ?",
        a: "Oui. Grandes surfaces de sol en lavage mécanisé, sanitaires collectifs, vestiaires, réfectoires et bureaux rattachés aux sites. Ce sont des prestations que nous réalisons déjà sur les zones d'activité du nord de la Seine-Saint-Denis, avec le même matériel.",
      },
      {
        q: "Quelles communes de l'Essonne couvrez-vous ?",
        a: "L'ensemble du département. Massy dispose d'une page dédiée sur ce site, et nous intervenons également sur Palaiseau, Orsay, Les Ulis, Évry-Courcouronnes, Longjumeau, Chilly-Mazarin, Savigny-sur-Orge et les communes voisines. Indiquez-nous votre adresse, nous vous répondons sous 24h.",
      },
    ],
    nearbySlugs: ["massy"],
  },

  {
    slug: "massy",
    name: "Massy",
    postalCode: "91300",
    department: "Essonne",
    departmentCode: "91",
    intro:
      "Massy est un nœud de transport majeur du sud francilien — RER B et C, gares TGV Massy-Palaiseau et Massy-TGV — et cette position a fait de la ville un pôle d'activité et de bureaux de premier plan en Essonne. Le quartier d'Atlantis et le secteur Massy-Opéra concentrent des immeubles tertiaires, des sièges régionaux et des locaux d'activité, à proximité immédiate du cluster Paris-Saclay. Le résidentiel se répartit entre le centre, Massy-Villaine, Massy-Verrières et des programmes neufs livrés autour des gares. TGT Propreté intervient à Massy pour l'entretien de plateaux de bureaux et d'espaces d'accueil, le nettoyage de locaux d'activité et de leurs zones sociales — vestiaires, réfectoires, sanitaires collectifs —, l'entretien de parties communes de copropriétés et de résidences récentes, et les remises en état lors des réaménagements et des livraisons de programmes neufs. Les spécificités locales : immeubles tertiaires à contrôle d'accès et plages horaires imposées, sols techniques d'activité demandant un lavage mécanisé, résidences neuves aux parties communes très visibles où la finition compte dès la livraison, et forte demande de fin de chantier liée au rythme de construction autour des gares.",
    highlights: [
      "Pôle tertiaire d'Atlantis et Massy-Opéra, proximité Paris-Saclay",
      "Locaux d'activité : vestiaires, réfectoires, sanitaires collectifs",
      "Résidences neuves — parties communes visibles dès la livraison",
      "Fins de chantier soutenues par la construction autour des gares",
    ],
    keywords: [
      "entreprise de nettoyage Massy",
      "société de nettoyage Massy",
      "nettoyage bureaux Massy",
      "nettoyage fin de chantier Massy",
      "nettoyage 91300",
    ],
    faqs: [
      {
        q: "Intervenez-vous dans les bureaux du quartier Atlantis ?",
        a: "Oui, pour l'entretien de plateaux, d'espaces d'accueil, de salles de réunion et de sanitaires. Les immeubles tertiaires de Massy imposent souvent un accès badgé et des plages horaires précises : nos agents sont habitués à ces procédures.",
      },
      {
        q: "Prenez-vous en charge les vestiaires et réfectoires des locaux d'activité ?",
        a: "Oui, avec un protocole de désinfection quotidien plutôt qu'un simple passage d'entretien. Ce sont les zones où le risque sanitaire et les remontées de salariés sont les plus fréquents.",
      },
      {
        q: "Intervenez-vous à la livraison des programmes neufs ?",
        a: "Oui, c'est une demande soutenue à Massy vu le rythme de construction autour des gares. Nous réalisons la remise en état finale avant livraison : poussières de plâtre, voile de ciment, traces de peinture et de colle, menuiseries, placards, vitres et sanitaires.",
      },
      {
        q: "Massy est en Essonne : intervenez-vous vraiment jusque-là ?",
        a: "Oui, nous couvrons l'ensemble de l'Île-de-France, Essonne comprise. Comme pour toutes nos zones éloignées de Bondy, nous groupons les interventions par secteur : les contrats réguliers se calent facilement, les urgences ponctuelles demandent plus de délai.",
      },
    ],
    nearbySlugs: ["issy-les-moulineaux", "creteil", "versailles", "boulogne-billancourt"],
  },
  /* ══════════════════  VAL-D'OISE (95)  ══════════════════ */

  {
    slug: "val-d-oise",
    name: "Val-d'Oise",
    postalCode: "95",
    department: "Val-d'Oise",
    departmentCode: "95",
    isDepartment: true,
    intro:
      "Le Val-d'Oise est le département limitrophe de notre siège : depuis Bondy, le nord de la Seine-Saint-Denis se prolonge directement dans le sud du 95, et nos équipes y circulent sans difficulté par la A1, la A3 et la Francilienne. Le département s'organise autour de trois ensembles très différents. La plateforme de Roissy-Charles-de-Gaulle et sa couronne logistique d'abord, avec ses entrepôts, ses hôtels et ses sociétés de service qui fonctionnent en continu : là, le nettoyage se fait de nuit ou au petit matin, et la régularité compte plus que tout. L'agglomération de Cergy-Pontoise ensuite, avec son quartier d'affaires, sa préfecture et son université : plateaux de bureaux, parties communes de grandes copropriétés, locaux administratifs. Les communes de la vallée de Montmorency enfin — Enghien-les-Bains, Montmorency, Saint-Gratien — au bâti résidentiel plus ancien et aux copropriétés exigeantes, ainsi qu'Argenteuil et Sarcelles, aux grands ensembles des années 1960-1970 dont les parties communes demandent un entretien soutenu. TGT Propreté intervient dans tout le Val-d'Oise auprès d'entreprises, de syndics, de commerçants, d'artisans en fin de chantier et de particuliers. Aucune commune du 95 n'a encore sa page dédiée sur ce site : dites-nous simplement votre adresse, le devis reste gratuit sous 24h.",
    highlights: [
      "Département limitrophe de notre siège — accès direct par la A1 et la A3",
      "Roissy et sa couronne logistique : entrepôts et hôtels, nettoyage de nuit",
      "Cergy-Pontoise : quartier d'affaires, préfecture, université",
      "Grands ensembles d'Argenteuil et de Sarcelles, copropriétés de Montmorency",
    ],
    keywords: [
      "société de nettoyage 95",
      "entreprise de nettoyage Val-d'Oise",
      "nettoyage bureaux Val-d'Oise",
      "nettoyage copropriété 95",
      "nettoyage Cergy Roissy",
    ],
    faqs: [
      {
        q: "Intervenez-vous vraiment dans le Val-d'Oise ?",
        a: "Oui, et c'est l'un de nos départements les plus accessibles : le sud du 95 est à quinze à vingt minutes de notre siège de Bondy par la A3 et la A1. Nous y travaillons régulièrement, même si aucune commune du département n'a encore sa page dédiée sur ce site.",
      },
      {
        q: "Pouvez-vous intervenir de nuit sur le secteur de Roissy ?",
        a: "Oui. Les entrepôts, hôtels et sociétés de service de la plateforme fonctionnent en continu : l'entretien se fait donc de nuit ou tôt le matin, selon vos créneaux. Nous fournissons la liste nominative des agents et leurs attestations, ce que les sites sous contrôle d'accès exigent systématiquement.",
      },
      {
        q: "Travaillez-vous avec les syndics du 95 ?",
        a: "Oui, sur le même modèle que dans le 93 : un agent attitré par immeuble, l'attestation de vigilance URSSAF et l'attestation d'assurance RC professionnelle fournies, la sortie et la rentrée des containers calées sur le calendrier de collecte de la commune, et un devis au forfait annuel présentable en assemblée générale.",
      },
      {
        q: "Quelles communes du Val-d'Oise couvrez-vous ?",
        a: "L'ensemble du département : Cergy, Pontoise, Argenteuil, Sarcelles, Garges-lès-Gonesse, Gonesse, Goussainville, Roissy-en-France, Enghien-les-Bains, Montmorency, Sannois, Ermont, Franconville et les communes voisines. Donnez-nous votre adresse, nous vous répondons sous 24h.",
      },
    ],
    nearbySlugs: [],
  },

  /* ══════════════════  SEINE-ET-MARNE (77)  ══════════════════ */

  {
    slug: "seine-et-marne",
    name: "Seine-et-Marne",
    postalCode: "77",
    department: "Seine-et-Marne",
    departmentCode: "77",
    isDepartment: true,
    intro:
      "La Seine-et-Marne est le plus vaste département d'Île-de-France : à elle seule, elle couvre près de la moitié de la région. Pour un prestataire de propreté, cela impose une règle simple et honnête : l'ouest du département se traite comme la proche couronne, l'est se traite en tournée. À l'ouest, Chelles, Noisiel, Champs-sur-Marne, Torcy et Lognes prolongent directement notre zone d'intervention en Seine-Saint-Denis — quelques minutes séparent Bondy de Chelles par la N3 ou le RER E. Le secteur de Marne-la-Vallée et du Val d'Europe, autour de Serris et de Bailly-Romainvilliers, concentre des plateaux de bureaux, des hôtels et des commerces de centre commercial qui demandent un entretien soutenu et des interventions avant ouverture. Melun apporte la dimension administrative et préfectorale, Meaux un centre historique et un tissu de commerces de proximité, et les abords de la A4 une activité logistique marquée, avec de grandes surfaces de sol béton à laver mécaniquement. Au-delà de Melun et de Meaux, le département devient rural : nous y intervenons sur contrat régulier, où la tournée se planifie, plutôt que sur urgence isolée. Aucune commune du 77 n'a encore sa page dédiée. Devis gratuit sous 24h.",
    highlights: [
      "Ouest du département — Chelles, Noisiel, Champs-sur-Marne — à quelques minutes de Bondy",
      "Marne-la-Vallée et Val d'Europe : bureaux, hôtels, commerces",
      "Entrepôts et plateformes logistiques le long de la A4",
      "Contrats réguliers sur l'est rural, où la tournée se planifie",
    ],
    keywords: [
      "société de nettoyage 77",
      "entreprise de nettoyage Seine-et-Marne",
      "nettoyage bureaux Seine-et-Marne",
      "nettoyage copropriété 77",
      "nettoyage Chelles Marne-la-Vallée",
    ],
    faqs: [
      {
        q: "La Seine-et-Marne est immense : jusqu'où intervenez-vous ?",
        a: "Sans restriction sur l'ouest du département — Chelles, Vaires-sur-Marne, Noisiel, Champs-sur-Marne, Torcy, Lognes, Bussy-Saint-Georges — qui est à quelques minutes de notre siège. Sur Melun, Meaux et le secteur de Marne-la-Vallée, nous intervenons régulièrement. Au-delà, sur l'est rural, nous privilégions les contrats réguliers : la tournée se planifie, alors qu'une urgence isolée à cent kilomètres n'a de sens pour personne.",
      },
      {
        q: "Intervenez-vous sur les entrepôts et plateformes logistiques du 77 ?",
        a: "Oui, c'est une demande fréquente le long de la A4. Nous prenons en charge les bureaux rattachés aux sites, les vestiaires, les réfectoires, les sanitaires collectifs, et le lavage mécanisé des grandes surfaces de sol béton. Les créneaux se calent sur vos rotations d'équipes.",
      },
      {
        q: "Pouvez-vous nettoyer un commerce avant son ouverture ?",
        a: "Oui, c'est le mode d'intervention standard pour les commerces et les boutiques de centre commercial du secteur de Marne-la-Vallée : nous passons avant l'ouverture, vitrines et sols compris, afin que la surface de vente soit prête à la première heure.",
      },
      {
        q: "Quelles communes de Seine-et-Marne couvrez-vous ?",
        a: "L'ensemble du département, avec les nuances de délai expliquées plus haut : Chelles, Vaires-sur-Marne, Noisiel, Champs-sur-Marne, Torcy, Lognes, Bussy-Saint-Georges, Serris, Melun, Meaux, Pontault-Combault, Roissy-en-Brie et les communes voisines. Donnez-nous votre adresse, nous vous répondons sous 24h avec un délai réaliste.",
      },
    ],
    nearbySlugs: [],
  },

] as const;

/**
 * Codes des départements réellement couverts par une page, énumérés en
 * français : « 77, 78, 91, 92, 93, 94 et 95 ».
 *
 * Dérivé de `ZONES` pour que l'ajout d'une page département n'oublie pas la
 * description du hub /zones, où la liste était écrite à la main.
 */
/**
 * Nombre de COMMUNES ayant une page dédiée, départements exclus.
 *
 * `ZONES.length` mélange les deux depuis l'ajout des sept pages
 * département : l'utiliser pour annoncer « N communes » est faux.
 */
export function communeCount(): number {
  return ZONES.filter((z) => !z.isDepartment).length;
}

/** Nombre de pages département. */
export function departmentCount(): number {
  return ZONES.filter((z) => z.isDepartment).length;
}

export function departmentCodesServed(): string {
  const codes = Array.from(new Set(ZONES.map((z) => z.departmentCode))).sort();
  if (codes.length <= 1) return codes.join("");
  return `${codes.slice(0, -1).join(", ")} et ${codes[codes.length - 1]}`;
}

export function getZoneBySlug(slug: string): Zone | undefined {
  return ZONES.find((z) => z.slug === slug);
}

/**
 * Préposition de lieu : « à Bondy », « en Seine-Saint-Denis », « dans les
 * Hauts-de-Seine », « dans le Val-de-Marne ».
 *
 * Un « en » systématique pour les départements marchait tant que seule la
 * Seine-Saint-Denis avait sa page. Avec les sept départements, il produit
 * « en Hauts-de-Seine », « en Val-de-Marne » et « en Val-d'Oise », qui sont
 * des fautes. Rien dans le nom ne permet de dériver l'article : il faut la
 * table, comme pour `PORTEE_DEPARTEMENT`.
 */
const PREPOSITION_DEPARTEMENT: Record<string, string> = {
  "Seine-Saint-Denis": "en",
  "Hauts-de-Seine": "dans les",
  "Val-de-Marne": "dans le",
  "Val-d'Oise": "dans le",
  "Seine-et-Marne": "en",
  Yvelines: "dans les",
  Essonne: "en",
};

export function zonePreposition(zone: Zone): string {
  if (!zone.isDepartment) return "à";
  return PREPOSITION_DEPARTEMENT[zone.department] ?? "en";
}

/**
 * Accord du département après « dans … ».
 *
 * Le gabarit précédent écrivait « dans tout le Seine-Saint-Denis » et
 * « dans tout le Hauts-de-Seine » : chaque département demande son propre
 * article, il n'y a pas de règle dérivable du nom.
 */
const PORTEE_DEPARTEMENT: Record<string, string> = {
  "Seine-Saint-Denis": "toute la Seine-Saint-Denis",
  "Hauts-de-Seine": "tous les Hauts-de-Seine",
  "Val-de-Marne": "tout le Val-de-Marne",
  "Val-d'Oise": "tout le Val-d'Oise",
  "Seine-et-Marne": "toute la Seine-et-Marne",
  Yvelines: "toutes les Yvelines",
  Essonne: "toute l'Essonne",
};

export function zoneDepartmentScope(zone: Zone): string {
  return PORTEE_DEPARTEMENT[zone.department] ?? `tout le ${zone.department}`;
}

/**
 * Title tag d'une page zone — sans la marque (page profonde), et sans le code
 * postal, qui faisait dépasser les 60 caractères sur les noms longs
 * (Boulogne-Billancourt). Les caractères libérés portent l'incitation au clic,
 * seul vrai levier sur un CTR de 0,70 %. Le code postal reste présent dans la
 * description, le H1, les `keywords` et le JSON-LD.
 *
 * « Entreprise de nettoyage {commune} » est conservé mot pour mot : c'est la
 * requête qui génère les impressions.
 */
export function zoneMetaTitle(zone: Zone): string {
  if (zone.metaTitle) return zone.metaTitle;

  // Pour un département, le code EST la requête : « société de nettoyage 92 »
  // (30 rech./mois), « société de nettoyage 94 », « … 78 », « … 91 ». Le nom
  // seul ne la contient pas. Le plus long reste sous 60 caractères
  // (Seine-Saint-Denis : 58), et `npm run check:seo` le vérifie au build.
  if (zone.isDepartment) {
    return `Entreprise de nettoyage ${zone.name} (${zone.postalCode}) — Devis 24h`;
  }

  return `Entreprise de nettoyage ${zone.name} — Devis 24h`;
}

/**
 * Source UNIQUE de la description d'une page zone : balise `<meta>` et blocs
 * JSON-LD. Auparavant deux chaînes distinctes cohabitaient dans le même
 * fichier et avaient divergé.
 */
export function zoneMetaDescription(zone: Zone): string {
  if (zone.metaDescription) return zone.metaDescription;

  const ou = zone.isDepartment
    ? `dans ${zoneDepartmentScope(zone)} (${zone.postalCode})`
    : `${zonePreposition(zone)} ${zone.name} (${zone.postalCode})`;

  return `Nettoyage professionnel ${ou} : bureaux, copropriétés, commerces, fin de chantier, vitres. Devis gratuit sous 24h.`;
}

/** Communes proches déclarées via `nearbySlugs`, pour le maillage géographique. */
export function getNearbyZones(zone: Zone): Zone[] {
  return zone.nearbySlugs
    .map(getZoneBySlug)
    .filter((z): z is Zone => Boolean(z) && z!.slug !== zone.slug);
}

/** Villes groupées par département, dans l'ordre des codes. Utilisé par le hub /zones. */
export function getZonesByDepartment(): { code: string; name: string; zones: Zone[] }[] {
  const map = new Map<string, { code: string; name: string; zones: Zone[] }>();

  for (const zone of ZONES) {
    const entry = map.get(zone.departmentCode);
    if (entry) {
      entry.zones.push(zone);
    } else {
      map.set(zone.departmentCode, {
        code: zone.departmentCode,
        name: zone.department,
        zones: [zone],
      });
    }
  }

  return [...map.values()].sort((a, b) => a.code.localeCompare(b.code));
}
