// ─────────────────────────────────────────────────────────────────────────────
// lib/services.ts
// ─────────────────────────────────────────────────────────────────────────────

import {
  // B2B — Pôle Professionnel
  Utensils,        // Restaurants & Cuisines 
  Briefcase,       // Bureaux & Entreprises
  Building2,       // Copropriétés & Immeubles
  Stethoscope,     // Cabinets Médicaux
  HardHat,         // Fin de Chantier
  AppWindow,       // Vitres & Vitrines

  // B2C — Pôle Particuliers
  Sparkles,        // Nettoyage Approfondi
  PackageOpen,     // Déménagement (conservé dans les imports si besoin)
  Sofa,            // Canapés & Fauteuils
  Layers,          // Tapis & Moquettes
  FlameKindling,   // Désinfestation / Après Sinistre

  // Confort & Sur-Mesure
  Shirt,           // Repassage & Rangement
  Sliders,         // Prestations Sur-Mesure

  type LucideIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type PoleId = "b2b" | "B2B & B2C" | "B2C";

export type Pole = {
  id: PoleId;
  label: string;
  tag: string;
};

export type Service = {
  slug: string;
  num: string;
  pole: PoleId;
  bgImage: string; // ← AJOUT : Chemin ou identifiant de l'image de fond
  Icon: LucideIcon;
  title: string;
  shortDesc: string;
  longDesc: string;
  keywords: string[];
  priceRange?: string;
  faqs?: { q: string; a: string }[];
};

// ─── Pôles ────────────────────────────────────────────────────────────────────

export const POLES: readonly Pole[] = [
  { id: "b2b", label: "Entreprises & Professionnels", tag: "B2B" },
  { id: "B2B & B2C", label: "Particuliers & Résidentiel", tag: "B2B & B2C" },
  { id: "B2C", label: "Confort & Sur-Mesure", tag: "B2C" },
] as const;

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES: readonly Service[] = [

  /* ══════════════════  I. PÔLE PROFESSIONNEL (B2B)  ══════════════════ */

  {
    slug: "nettoyage-restaurants-cuisines",
    num: "01",
    pole: "b2b",
    bgImage: "/images/bg-restaurant&cuisine.jpg",
    Icon: Utensils,
    title: "Restaurants & Cuisines",
    shortDesc:
      "Nettoyage haute précision aux normes HACCP divisé en deux expertises. Cuisine : dégraissage technique des hottes, pianos, plaques et friteuses. Salle : remise à neuf des sols, bars, mobiliers et sanitaires.",
    longDesc:
      "Spécialiste du secteur CHR à Paris et en Île-de-France, TGT Propreté assure une remise à neuf complète de vos espaces de restauration. De la désinfection des pianos de cuisson au dégraissage des hottes, en passant par le récurage des sols et l'astiquage des salles de réception, nous garantissons un niveau d'hygiène irréprochable face aux contrôles sanitaires les plus stricts.",
    keywords: [
      "nettoyage restaurant Paris",
      "hygiène cuisine professionnelle",
      "nettoyage HACCP Île-de-France",
      "dégraissage hotte restaurant",
    ],
    priceRange: "Dès 35€/h • Sur Devis",
    faqs: [
      {
        q: "Intervenez-vous en dehors de nos heures d'ouverture ?",
        a: "Absolument. Nos équipes s'adaptent à vos impératifs commerciaux et interviennent de nuit ou tôt le matin pour que votre établissement soit opérationnel dès l'arrivée de votre brigade.",
      },
      {
        q: "Vos protocoles respectent-ils les normes de sécurité sanitaire ?",
        a: "Oui, toutes nos procédures suivent scrupuleusement la méthode HACCP. Nous utilisons des dégraissants et désinfectants de qualité professionnelle homologués pour le contact alimentaire.",
      },
      {
        q: "Quel protocole utilisez-vous pour les équipements de cuisson (pianos, friteuses, fours) ?",
        a: "Nous appliquons des traitements dégraissants et décarbonisants professionnels à haute température. Les friteuses sont vidées, nettoyées et rincées, et les brûleurs ou plaques de cuisson sont récurés en profondeur sans altérer les matériaux nobles (inox, fonte).",
      },
      {
        q: "Prenez-vous en charge le dégraissage en profondeur des hottes de cuisine ?",
        a: "Tout à fait. Nous ne nous contentons pas d'un nettoyage de surface : nos équipes procèdent au dégraissage complet de la hotte, à l'intérieur comme à l'extérieur, ainsi qu'au lavage intensif des filtres amovibles. Ce traitement en profondeur élimine radicalement les accumulations de graisses cuites pour vous garantir un espace de travail sain et performant.",
      },
    ],
  },

  {
    slug: "nettoyage-bureaux-entreprises",
    num: "02",
    pole: "b2b",
    bgImage: "/images/bg-bureaux&entreprise.jpg",
    Icon: Briefcase,
    title: "Bureaux & Entreprises",
    shortDesc:
      "Entretien rigoureux de vos espaces de travail, open-spaces et cabinets pour préserver le confort de vos équipes.",
    longDesc:
      "Nous concevons un cahier des charges sur mesure pour l'entretien de vos locaux professionnels à Paris et en Île-de-France. Nos prestations incluent le dépoussiérage des postes de travail, la désinfection des surfaces partagées, des poignées et des sanitaires, le vidage des corbeilles avec tri sélectif, et le nettoyage soigné de tous types de sols.",
    keywords: [
      "nettoyage bureaux Paris",
      "entretien locaux professionnels",
      "ménage entreprise Île-de-France",
      "nettoyage cabinet avocat Paris",
    ],
    priceRange: "Dès 2,5€/m² • Sur Devis",
    faqs: [
      {
        q: "Proposez-vous des interventions en horaires décalés (soir ou matin) ?",
        a: "Oui, pour préserver la concentration de vos équipes et le calme de vos réunions, nous intervenons principalement en dehors de vos heures de bureau : soit tôt le matin avant 8h, soit le soir après 18h. Nos horaires sont entièrement modulables selon votre organisation.",
      },
      {
        q: "Comment garantissez-vous la confidentialité et la sécurité de nos documents ?",
        a: "C’est notre priorité absolue. Nos agents sont formés au respect strict du secret professionnel et à la discrétion. Ils ont pour consigne claire de ne jamais manipuler ou déplacer les documents laissés sur les bureaux. De plus, nous pouvons signer un accord de confidentialité (NDA) si votre secteur d'activité (comme le droit ou la finance) l'exige.",
      },
      {
        q: "Fournissez-vous les consommables sanitaires ?",
        a: "Oui, sur demande, nous pouvons gérer l'approvisionnement et la recharge de vos consommables (papier toilette, essuie-mains, savon, gel hydroalcoolique..).",
      },
      {
        q: "Le tarif au m² comprend-il la fourniture des consommables (papier hygiénique, savon, sacs poubelles) ?",
        a: "Notre tarif de base comprend l'intégralité du matériel et des produits de nettoyage professionnels nécessaires à la prestation. Pour les consommables sanitaires (savon, essuie-mains, papier toilette), nous proposons une option de gestion des stocks : nous assurons l'approvisionnement et la recharge pour que vous ne manquiez de rien.",
      },
      {
        q: "Que se passe-t-il si notre agent habituel est malade ou en congé ?",
        a: "Nous garantissons la continuité de votre service. En cas d'absence de votre agent attitré, un agent de remplacement, briefé en amont sur votre cahier des charges et vos spécificités, prend le relais aux horaires convenus. Vous n'avez aucune coupure dans votre entretien.",
      },
    ],
  },

  {
    slug: "nettoyage-coproprietes-immeubles",
    num: "03",
    pole: "b2b",
    bgImage: "/images/bg_Copropriétés&Immeubles.jpg",
    Icon: Building2,
    title: "Copropriétés & Immeubles",
    shortDesc:
      "Entretien rigoureux des halls, escaliers et ascenseurs pour le confort des résidents. Gestion de la rotation des containers poubelles et nettoyage des locaux spécifiques.",
    longDesc:
      "Partenaire privilégié des syndics et des conseils syndicaux, TGT Propreté assure la propreté quotidienne ou hebdomadaire des immeubles d'habitation. Nous gérons le balayage et lavage des halls et escaliers, la désinfection des ascenseurs et digicodes, le nettoyage des vitreries communes, ainsi que la gestion complète des containers de déchets.",
    keywords: [
      "nettoyage copropriété Paris",
      "entretien immeuble Île-de-France",
      "sortie poubelles syndic",
      "nettoyage hall entrée immeuble",
    ],
    priceRange: "Forfait Annuel • Sur-Mesure",
    faqs: [
      {
        q: "Gérez-vous la rotation et la sortie des poubelles ?",
        a: "Oui, nous intégrons la sortie et la rentrée des containers en parfaite conformité avec les horaires de ramassage de votre commune.",
      },
      {
        q: "Que comprend exactement l'entretien des parties communes ?",
        a: "Notre prestation de base comprend le balayage et le lavage du hall d'entrée, des escaliers, des paliers et de l'ascenseur (miroirs et parois inox inclus). Nous nettoyons également les rampes, les boîtes aux lettres, les portes vitrées de l'entrée et nous assurons le vidage des corbeilles à prospectus.",
      },
      {
        q: "Comment les résidents et le syndic peuvent-ils vérifier le passage de l'agent ?",
        a: "Pour garantir une transparence totale, nous mettons en place une fiche de passage horodatée et signée par l'agent, affichée de manière visible dans le hall ou le local technique. De plus, un contrôle qualité régulier est effectué par nos soins pour veiller au respect strict du cahier des charges.",
      },
      {
        q: "Pouvez-vous intervenir pour des besoins ponctuels (encombrants, fin d'hiver) ?",
        a: "Absolument. En plus de l'entretien régulier, nous proposons des prestations spécifiques sur demande du syndic : l'évacuation d'encombrants, le nettoyage haute pression des parkings ou des cours intérieures, et la remise en état des sols (cristallisation des halls en marbre ou traitement des thermoplastiques).",
      },
    ],
  },

  {
    slug: "nettoyage-cabinets-medicaux-cliniques",
    num: "04",
    pole: "b2b",
    bgImage: "/images/bg_CabinetsMédicaux&Cliniques.jpg",
    Icon: Stethoscope,
    title: "Cabinets Médicaux & Cliniques",
    shortDesc:
      "Bionettoyage et désinfection rigoureuse de vos salles d'attente, d'examen et blocs de soins. Protocoles stricts pour éliminer les risques de contamination croisée.",
    longDesc:
      "Parce que l'hygiène en milieu médical ne tolère aucune approximation, nos équipes sont spécifiquement formées aux techniques de bionettoyage. Nous intervenons dans les cabinets dentaires, médicaux, paramédicaux et cliniques privées à Paris.",
    keywords: [
      "nettoyage cabinet médical",
      "nettoyage médical",
      "désinfection clinique Paris",
      "bionettoyage dentiste Île-de-France",
      "hygiène milieu médical",
    ],
    priceRange: "Protocole strict • Sur Devis",
    faqs: [
      {
        q: "Quels types de désinfectants utilisez-vous ?",
        a: "Nous utilisons exclusivement des détergents-désinfectants de qualité hospitalière bénéficiant des normes européennes virucides, bactéricides et fongicides en vigueur.",
      },
      {
        q: "Vos agents sont-ils formés au secret médical ?",
        a: "Absolument. Nos personnels interviennent avec une discrétion totale et sont parfaitement sensibilisés à la confidentialité liée à l'environnement médical.",
      },
      {
        q: "Comment assurez-vous la désinfection des points de contact sensibles ?",
        a: "Lors de chaque passage, une attention méticuleuse est portée à tous les points de contact fréquents : poignées de portes, interrupteurs, robinetteries, comptoirs d'accueil, accoudoirs des sièges en salle d'attente et lecteurs de cartes bancaires / Vitale.",
      },
    ],
  },

  {
    slug: "nettoyage-fin-de-chantier",
    num: "05",
    pole: "b2b",
    bgImage: "/images/bg_nettoyage-fin-de-chantier.jpg",
    Icon: HardHat,
    title: "Fin de Chantier / Post-Travaux",
    shortDesc:
      "Nettoyage intensif et remise en état après travaux ou rénovation. Élimination des poussières de plâtre, voiles de ciment, traces de peinture et livraison clé en main avant emménagement.",
    longDesc:
      "Destiné aux architectes, constructeurs et particuliers exigeants, ce service élimine les stigmates des chantiers. Nous procédons à l'aspiration des poussières fines, au grattage des résidus de colle, ciment et peinture, ainsi qu'au lessivage intégral des murs et placards.",
    keywords: [
      "nettoyage fin de chantier Paris",
      "remise en état après travaux",
      "nettoyage post-rénovation",
      "nettoyage fin de chantier Île-de-France",
    ],
    priceRange: "4,50€ à 8,50€ / m² • Sur Devis (après visite ou plans)",
    faqs: [
      {
        q: "À quel moment de votre chantier intervenez-vous ?",
        a: "Nous intervenons à deux moments clés : en cours de chantier pour réguler la poussière et libérer les accès pour les différents corps de métier, puis à la toute fin pour la remise en état finale 'blanc' juste avant la livraison des clés.",
      },
      {
        q: "Qu'est-ce qui est inclus exactement dans une prestation de fin de chantier ?",
        a: "C'est une remise en état intégrale de fond en comble. Elle comprend l'aspiration industrielle de la poussière de plâtre, le grattage des traces de peinture, de colle et de silicone, l'élimination du voile de ciment sur les carrelages, le nettoyage intérieur/extérieur des menuiseries et placards, le lavage haute performance des vitres (châssis inclus), ainsi que la désinfection complète des sanitaires et de la cuisine.",
      },
      {
        q: "Pouvez-vous intervenir rapidement pour respecter nos délais de livraison ?",
        a: "Nous savons que les fins de chantiers sont soumises à d'importantes contraintes de temps. Grâce à la réactivité de nos équipes en Île-de-France, nous pouvons planifier des interventions rapides et mobiliser le nombre d'agents nécessaire pour garantir une livraison de l'espace à la date et à l'heure convenues.",
      },
      {
        q: "Comment garantissez-vous de ne pas rayer nos matériaux neufs (parquet, vitres, robinetterie) ?",
        a: "C'est tout le savoir-faire de nos équipes. Nous n'utilisons aucun produit ou matériel abrasif agressif. Les vitres neuves sont traitées avec des grattoirs de vitrier professionnels spécifiques, et nous adaptons nos détergents (pH neutre, décapants doux) selon la nature de vos revêtements (marbre, parquet massif, inox, résines).",
      },
      {
        q: "Prenez-vous en charge l'évacuation des derniers gravats et déchets de chantier ?",
        a: "Notre prestation principale se concentre sur le nettoyage et la mise en propreté. Cependant, nous pouvons intégrer sur demande l'évacuation des petits déchets de finition ou des cartons d'emballage restants vers la déchetterie professionnelle. Cette prestation fera l'objet d'une facturation supplémentaire, indexée sur les frais d'accès et de dépôt de la déchetterie.",
      },
    ],
  },

  {
    slug: "nettoyage-des-vitres",
    num: "06",
    pole: "b2b",
    bgImage: "/images/bg_nettoyage-vitres.jpeg",
    Icon: AppWindow,
    title: "Vitres & Vitrines",
    shortDesc:
      "Nettoyage professionnel de vitrines, baies vitrées et surfaces vitrées complexes. Finition sans trace garantie, incluant le nettoyage des châssis et des encadrements.",
    longDesc:
      "À l'aide de techniques professionnelles (raclette, mouilleur, eau pure), nous redonnons de l'éclat à vos fenêtres, baies vitrées, verrières et devantures de boutiques à Paris. Nous nettoyons les vitres intérieures, extérieures, encadrements, rails et joints.",
    keywords: [
      "laveur de vitres Paris",
      "nettoyage vitrine magasin",
      "lavage baies vitrées",
      "nettoyage vitres Île-de-France",
    ],
    priceRange: "2,50€ à 4,00€ / m² ou au Forfait",
    faqs: [
      {
        q: "Intervenez-vous on des vitrages difficiles d'accès ?",
        a: "Oui, nous disposons de perches télescopiques et de matériel adapté pour nettoyer en toute sécurité les surfaces vitrées en hauteur.",
      },
      {
        q: "La météo peut-elle annuler une prestation ?",
        a: "En cas de pluie diluvienne ou de gel extrême, nous reportons l'intervention extérieure d'un commun accord.",
      },
      {
        q: "Est-ce que le nettoyage inclut les vitrines avec autocollants ou vitrophanie ?",
        a: "Absolument. Nous adaptons notre méthode pour nettoyer autour de vos marquages publicitaires ou vitrophanies sans les endommager, en utilisant des produits non corrosifs qui préservent le vinyle.",
      },
    ],
  },

  /* ═══════════════  II. PÔLE PARTICULIERS & RÉSIDENTIEL (B2B & B2C)  ═══════════════ */

  {
    slug: "nettoyage-approfondi",
    num: "07",
    pole: "B2B & B2C",
    bgImage: "/images/bg_nettoyage-approfondi.png",
    Icon: Sparkles,
    title: "Nettoyage Approfondi & Grand Ménage",
    shortDesc:
      "Nettoyage complet et millimétré de votre domicile à Paris : sols, cuisine, sanitaires et toutes vos surfaces.",
    longDesc:
      "Notre service de nettoyage approfondi redéfinit la propreté de votre logement. Idéal pour un nettoyage de printemps, un retour de vacances ou avant une réception, il comprend le détartrage des salles de bain, le dégraissage de la cuisine, le dépoussiérage des plinthes et le lavage de tous vos sols.",
    keywords: [
      "nettoyage approfondi Paris",
      "ménage à domicile Paris",
      "grand nettoyage Île-de-France",
      "femme de ménage Paris",
    ],
    priceRange: "À partir de 28€/h",
    faqs: [
      {
        q: "Quelle est la différence entre un ménage classique et un nettoyage approfondi ?",
        a: "Un ménage classique assure l'entretien courant (poussière de surface, passage de l'aspirateur, nettoyage rapide). Le nettoyage approfondi (ou grand ménage) est une intervention en profondeur : nous déplaçons le mobilier léger, lessivons les plinthes, dégraissons l'intérieur/extérieur de la hotte et du four, et éliminons le calcaire incrusté des robinetteries.",
      },
      {
        q: "Combien de temps faut-il prévoir pour mon logement ?",
        a: "Le temps d'intervention dépend de la superficie et de l'état initial. À titre indicatif, comptez en moyenne 4 à 5 heures pour un appartement de 60 m² lors d'un grand nettoyage initial. Un plan d'action vous est proposé avant le démarrage.",
      },
      {
        q: "Fournissez-vous le matériel et les produits de nettoyage ?",
        a: "Oui, nos équipes interviennent entièrement équipées avec leur matériel professionnel et des produits écolabellisés, hautement performants et respectueux de votre santé ainsi que de vos surfaces délicates (marbre, parquet massif, etc.).",
      },
      {
        q: "Proposez-vous le crédit d'impôt de 50 % (Services à la Personne) ?",
        a: "Malheuresement non. En tant qu'entreprise de nettoyage multisectorielle intervenant principalement auprès des professionnels (B2B), nous ne bénéficions pas de l'agrément Services à la Personne. Nos tarifs incluent l'intégralité de nos charges, nos assurances professionnelles et la fourniture de nos équipements industriels.",
      },
    ],
  },

  {
    slug: "nettoyage-canapes-fauteuils",
    num: "08",
    pole: "B2B & B2C",
    bgImage: "/images/bg_nettoyage-canapes-fauteuils.jpeg",
    Icon: Sofa,
    title: "Canapés & Fauteuils",
    shortDesc:
      "Shampouinage et détachage professionnel par injection-extraction pour éliminer tâches, odeurs et acariens.",
    longDesc:
      "Redonnez l'éclat du neuf à vos mobiliers textiles grâce à notre technique professionnelle d'injection-extraction. Idéal pour les canapés, fauteuils, chaises de bureau ou têtes de lit en tissu, notre traitement agit au cœur des fibres pour extraire les saletés incrustées, les auréoles, les odeurs (tabac, animaux) et éliminer 99% des allergènes et acariens. Nous utilisons des produits professionnels non agressifs qui ravivent les couleurs sans altérer la texture de vos meubles.",
    keywords: [
      "nettoyage canapé Paris",
      "shampouinage fauteuil tissu",
      "détachage canapé à domicile",
      "nettoyage textile ameublement",
    ],
    priceRange: "À la pièce (sur photo ou modèle)",
    faqs: [
      {
        q: "Combien de temps faut-il pour le séchage ?",
        a: "Entre 4h et 12h selon le tissu et la température de la pièce.",
      },
      {
        q: "Pouvez-vous enlever toutes les tâches (vin, sang, café, urine) ?",
        a: "Nous traitons efficacement la grande majorité des tâches incrustées, les auréoles et les mauvaises odeurs. Cependant, le résultat dépend de l'ancienneté de la tâche et si elle a déjà été frottée avec de mauvais produits. Plus l'intervention est rapide, plus le taux de réussite est proche de 100%.",
      },
    ],
  },

  {
    slug: "nettoyage-tapis-moquettes",
    num: "09",
    pole: "B2B & B2C",
    bgImage: "/images/bg_nettoyage-moquettes.png",
    Icon: Layers,
    title: "Tapis & Moquettes",
    shortDesc:
      "Shampouinage, désinfection et traitement anti-tâches de vos tapis et moquettes à Paris. Restauration des fibres en profondeur.",
    longDesc:
      "Prolongez la durée de vie de vos revêtements de sol grâce à nos protocoles de nettoyage à haute efficacité. Pour les moquettes de bureaux, de commerces ou de résidences, nous combinons l'aspiration industrielle, le brossage mécanique et l'injection-extraction pour éliminer le trafic, les tâches tenaces et les odeurs incrustées. Pour vos tapis (synthétiques, laine, orientaux), nous adaptons notre méthode après examen de la fibre pour raviver les couleurs d'origine et éliminer acariens et allergènes, sans aucun risque d'altération.",
    keywords: [
      "nettoyage tapis Paris",
      "lavage moquette à domicile",
      "détachage tapis laine",
      "nettoyage moquette bureau",
    ],
    priceRange: "Tarif au m² ou forfait tapis",
    faqs: [
      {
        q: "Est-ce que cela abîme les fibres des tapis précieux ?",
        a: "Pas du tout. Nous adaptons la pression et les shampoings au type de textile pour préserver les fibres.",
      },
      {
        q: "Le traitement élimine-t-il les acariens ?",
        a: "Oui, notre procédé thermique et l'aspiration à haute dépression éradiquent les acariens, bactéries et poussières incrustées.",
      },
      {
        q: "Comment fonctionne la tarification pour les tapis ?",
        a: "Pour les moquettes, le tarif est calculé au m² selon la surface totale. Pour les tapis, nous fonctionnons au forfait ou à la pièce : il vous suffit de nous envoyer les dimensions et une photo du tapis (ou d'indiquer son modèle/matière) pour recevoir votre prix fixe avant notre intervention.",
      },
      {
        q: "Quel est le temps de séchage à prévoir après votre passage ?",
        a: "Grâce à la puissance d'aspiration de nos extracteurs professionnels, la moquette ou le tapis reste à peine humide. Comptez en moyenne entre 4 et 8 heures pour un séchage complet, selon la ventilation et la température des locaux.",
      },
      {
        q: "Pouvez-vous intervenir dans des bureaux ou commerces en dehors des heures de travail ?",
        a: "Absolument. Pour le confort de vos équipes et de vos clients, nos équipes de nettoyage B2B interviennent en horaires décalés (soir, nuit ou week-end) afin de vous livrer des sols impeccables et secs dès la réouverture.",
      }
    ],
  },

  {
    slug: "nettoyage-apres-sinistre",
    num: "10",
    pole: "B2B & B2C",
    bgImage: "/images/bg_Nettoyage-apres-sinistre.png",
    Icon: FlameKindling,
    title: "Nettoyage Après Sinistre",
    shortDesc: "Intervention d'urgence après dégât des eaux, inondation ou incendie. Assainissement, aspiration des fluides et désodorisation.",
    longDesc: "Nous intervenons en urgence pour limiter les dommages et assainir vos locaux après un sinistre (dégât des eaux, rupture de canalisation, début d'incendie). Notre protocole inclut l'aspiration motopompée des eaux résiduelles, le nettoyage des suies, l'assèchement des surfaces, le traitement anti-moisissures et la désodorisation complète pour rendre les espaces à nouveau sains.",
    keywords: [
      "nettoyage degat des eaux Paris",
      "nettoyage apres sinistre Ile-de-France",
      "assainissement inondation",
      "nettoyage suie incendie"
    ],
    priceRange: "SUR DEVIS (PRISE EN CHARGE ASSURANCES)",
    faqs: [
      {
        q: "Comment puis-je me faire remboursement l'intervention ?",
        a: "Après notre diagnostic, nous vous fournissons un devis détaillé et une facture acquittée. Vous pourrez transmettre ces documents directement à votre compagnie d'assurance dans le cadre de votre déclaration de sinistre pour obtenir votre prise en charge."
      },
      {
        q: "Dans quel délai pouvez-vous intervenir après un dégât des eaux ?",
        a: "Le facteur temps est crucial pour éviter la prolifération des moisissures. Nous faisons de ces demandes une priorité absolue et mobilisons une équipe technique sous 24h à 48h à Paris et en Île-de-France."
      }
    ]
  },
  {
    slug: "prestations-sur-mesure-conciergerie",
    num: "12",
    pole: "B2B & B2C",
    bgImage: "/images/bg_nettoyage-sur-mesure-conciergerie.jpg",
    Icon: Sliders,
    title: "Prestations Sur-Mesure & Conciergerie",
    shortDesc:
      "Une exigence unique ? Nous concevons votre protocole d'entretien exclusif et entièrement personnalisé.",
    longDesc:
      "Dédiée aux professionnels de la gestion de biens en courte durée (Airbnb, conciergeries) et aux exigences d'exception, notre offre sur-mesure garantit un nettoyage de qualité hôtelière en Île-de-France. Nous sécurisons vos rotations dans la fenêtre critique, 7j/7. Notre service complet intègre le ménage de départ minutieux, la désinfection, la gestion logistique de la blanchisserie (linge propre et sale), le réassort de vos consommables et un reporting photos Avant/Après systématique pour valoriser votre parc immobilier et maximiser vos notes voyageurs.",
    keywords: [
      "conciergerie nettoyage Paris",
      "nettoyage airbnb ile-de-france",
      "menage conciergerie courte duree",
      "blanchisserie conciergerie paris",
    ],
    priceRange: "Sur étude privée (FORFAITS DISPONIBLES)",
    faqs: [
      {
        q: "Comment faire une demande spécifique ?",
        a: "Contactez-nous directement par téléphone ou via notre formulaire. Notre équipe vous recontacte en moins d'une heure.",
      },
      {
        q: "Proposez-vous des interventions d'urgence ?",
        a: "Grâce à notre réactivité et notre implantation en Île-de-France, nous faisons notre maximum pour répondre aux demandes urgentes dans les plus brefs délais.",
      },
      {
        q: "Comment fonctionne votre grille tarifaire pour les conciergeries ?",
        a: "Pour garantir une rentabilité optimale et une transparence totale, nous fonctionnons au forfait par typologie de logement (du Studio au T4 et +), incluant les interventions du week-end (samedi et dimanche) sans aucun surcoût caché. Nous proposons des Forfaits 'Light' (ménage pro hors linge) ou des Forfaits 'Premium' (ménage, gestion du linge et réassort). Nos tarifs de base sont ensuite ajustables selon le volume annuel de vos rotations."
      },
      {
        q: "Prenez-vous en charge la blanchisserie et les consommables ?",
        a: "Absolument. Dans notre offre globale, nous gérons le retrait du linge sale et la mise en place du linge propre (qu'il soit fourni par vos soins ou via notre système de location). Nos équipes s'occupent également du réassort de vos consommables de base (papier toilette, sacs poubelles, éponges, produits d'accueil) afin que le logement soit immédiatement prêt à recevoir vos prochains voyageurs."
      }
    ],
  },

  /* ══════════════════  III. B2C  ══════════════════ */

  {
    slug: "repassage-rangement-domicile",
    num: "11",
    pole: "B2C",
    bgImage: "/images/bg-repassage-rangement-domicile.jpg",
    Icon: Shirt,
    title: "Repassage & Rangement",
    shortDesc:
      "Entretien méticuleux de votre garde-robe et organisation soignée de vos dressings pour un confort absolu.",
    longDesc:
      "Offrez-vous le confort d'un linge impeccable. Nos intervenants prennent en charge le repassage soigné de vos vêtements et de votre linge de maison, avec pliage rigoureux et rangement méthodique.",
    keywords: [
      "repassage à domicile Paris",
      "aide ménagère repassage",
      "rangement dressing Paris",
      "repassage chemises à domicile",
    ],
    priceRange: "À partir de 23€/h",
    faqs: [
      {
        q: "Proposez-vous le crédit d'impôt de 50 % (Services à la Personne) pour le repassage ?",
        a: "Malheuresement non. En tant qu'entreprise de nettoyage et de services multisectorielle (SARL), nous ne bénéficions pas de l'agrément Services à la Personne. Nos tarifs affichés sont transparents et incluent l'intégralité de nos charges sociales, nos assurances professionnelles ainsi que la garantie d'un travail rigoureux et encadré.",
      },
      {
        q: "Dois-je fournir le matériel de repassage ?",
        a: "Oui, l'intervenant utilise votre centrale vapeur ou fer à repasser ainsi que votre table.",
      },
      {
        q: "Puis-je combiner ce service avec du ménage ?",
        a: "Tout à fait. Beaucoup de nos clients allouent une partie de leur forfait au ménage et l'autre au soin du linge.",
      },
      {
        q: "Prenez-vous en charge les tissus très délicats comme la soie ou le lin ?",
        a: "Oui, nos équipes sont formées au respect des étiquettes d'entretien et adaptent la température et le traitement aux matières les plus exigeantes pour garantir un soin sans aucun risque de détérioration.",
      }
    ],
  },


] as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByPole(pole: PoleId): Service[] {
  return SERVICES.filter((s) => s.pole === pole);
}

/**
 * AJOUT : Récupère uniquement le chemin de l'image de fond pour un service donné
 */
export function getServiceBackground(slug: string): string | undefined {
  const service = getServiceBySlug(slug);
  return service?.bgImage;
}