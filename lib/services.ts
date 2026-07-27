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

  // Ajouts plan SEO
  Store,           // Commerces & Boutiques
  KeyRound,        // Agences Immobilières & États des Lieux
  ShieldPlus,      // Désinfection de Locaux
  Layers3,         // Rénovation de Sols & Décapage

  type LucideIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type PoleId = "b2b" | "B2B & B2C" | "B2C";

export type Pole = {
  id: PoleId;
  label: string;
  tag: string;
};

/** Bloc H3 à l'intérieur d'une section de contenu. */
export type ServiceBlock = {
  h3: string;
  text?: string;
  items?: string[];
};

/**
 * Section H2 du corps de page.
 * `intro` doit répondre directement à la question du H2 dès la première phrase :
 * c'est ce paragraphe que les moteurs de réponse (AI Overviews, Perplexity) extraient.
 */
export type ServiceSection = {
  h2: string;
  intro?: string;
  blocks?: ServiceBlock[];
};

export type ServiceStep = {
  step: string;
  text: string;
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
  /** Résumé autonome affiché en tête de page, compréhensible hors contexte. */
  tldr?: string;
  /** Corps de page détaillé. Sans lui, la page retombe sur longDesc seul. */
  sections?: ServiceSection[];
  /** Process propre au service. Remplace le bloc « Notre méthode » générique. */
  process?: ServiceStep[];
  /** Slugs de services complémentaires, pour le maillage interne. */
  relatedSlugs?: string[];
  /** Prestations nommées → `hasOfferCatalog` dans le JSON-LD. */
  offers?: string[];
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
    offers: [
      "Nettoyage HACCP de cuisine professionnelle",
      "Dégraissage de hottes et filtres",
      "Décarbonisation des équipements de cuisson",
      "Remise en état de salle et bar",
      "Désinfection des sanitaires clients",
    ],
    tldr: "Le nettoyage de restaurant couvre deux zones aux exigences distinctes : la cuisine, où le dégraissage des hottes et des équipements de cuisson répond à la méthode HACCP, et la salle, où la remise en état des sols, du bar et des sanitaires conditionne l'accueil des clients. TGT Propreté intervient de nuit ou tôt le matin à Paris et en Île-de-France.",
    relatedSlugs: [
      "nettoyage-des-vitres",
      "nettoyage-tapis-moquettes",
      "nettoyage-fin-de-chantier",
      "nettoyage-bureaux-entreprises",
    ],
    sections: [
      {
        h2: "Pourquoi le nettoyage d'un restaurant ne s'improvise pas",
        intro:
          "Un établissement de restauration cumule deux contraintes que l'on retrouve rarement ensemble : une obligation sanitaire opposable lors d'un contrôle, et une exigence esthétique permanente côté salle. Les deux se traitent avec des produits, des protocoles et des niveaux de finition différents, dans une fenêtre horaire étroite entre la fermeture et le service suivant.",
        blocks: [
          {
            h3: "Le risque sanitaire est concret",
            text: "Les graisses cuites accumulées dans une hotte constituent un risque d'incendie documenté. Les résidus organiques sur les plans de travail, les siphons et les joints de carrelage sont les premiers points examinés lors d'un contrôle des services vétérinaires. Un manquement peut entraîner une mise en demeure, voire une fermeture administrative.",
          },
          {
            h3: "La salle est votre vitrine",
            text: "Un sol collant, une banquette tachée ou des sanitaires négligés pèsent davantage sur les avis en ligne que la plupart des critiques portant sur la cuisine. C'est le poste sur lequel un client se forge une opinion avant même d'avoir été servi.",
          },
          {
            h3: "Une fenêtre d'intervention étroite",
            text: "Un restaurant se nettoie quand il est vide. Nos équipes interviennent après la fermeture ou avant l'arrivée de la brigade, avec un temps de séchage compatible avec la reprise du service.",
          },
        ],
      },
      {
        h2: "Que comprend notre prestation en cuisine professionnelle ?",
        intro:
          "Nous appliquons des dégraissants et désinfectants professionnels homologués pour le contact alimentaire, selon un protocole conforme à la méthode HACCP. L'intervention traite les équipements, les surfaces et les points critiques.",
        blocks: [
          {
            h3: "Équipements de cuisson",
            text: "Nous utilisons des traitements dégraissants et décarbonisants à haute température, sans altérer les matériaux nobles comme l'inox ou la fonte.",
            items: [
              "Pianos, plaques et feux vifs : récurage en profondeur des brûleurs et grilles",
              "Friteuses : vidange, nettoyage de la cuve et rinçage",
              "Fours et salamandres : décarbonisation intérieure et extérieure",
              "Plancha, grills et rôtissoires",
            ],
          },
          {
            h3: "Hottes et systèmes d'extraction",
            text: "Nous ne nous limitons pas au bandeau visible. Le dégraissage porte sur l'intérieur comme l'extérieur de la hotte, avec lavage intensif des filtres amovibles pour éliminer les accumulations de graisses cuites.",
          },
          {
            h3: "Surfaces, sols et points critiques",
            items: [
              "Plans de travail, étagères et desserte inox",
              "Récurage des sols antidérapants et détartrage des siphons",
              "Nettoyage des joints de carrelage et des plinthes à gorge",
              "Désinfection des poignées, robinetteries et commandes",
              "Extérieur des chambres froides et des armoires réfrigérées",
            ],
          },
        ],
      },
      {
        h2: "Que comprend notre prestation en salle ?",
        intro:
          "La salle demande un niveau de finition visible, obtenu avec des produits différents de ceux de la cuisine. L'objectif est un espace qui paraît neuf à l'ouverture.",
        blocks: [
          {
            h3: "Sols et mobilier",
            items: [
              "Lavage et remise en éclat des sols, quel que soit le revêtement",
              "Nettoyage des tables, chaises, pieds de table et dessous de plateau",
              "Traitement des banquettes et assises textiles par injection-extraction",
              "Dépoussiérage des luminaires, étagères et éléments de décoration",
            ],
          },
          {
            h3: "Bar et espace de service",
            text: "Astiquage du comptoir, nettoyage des tireuses, des bacs et des dessous de bar, détartrage de la plonge et des évaporateurs, dégraissage des surfaces verticales exposées aux projections.",
          },
          {
            h3: "Sanitaires clients",
            text: "Désinfection complète, détartrage de la robinetterie et des cuvettes, traitement des odeurs, nettoyage des miroirs et des distributeurs. C'est le poste le plus commenté par les clients après la cuisine.",
          },
          {
            h3: "Vitrines et devanture",
            text: "Lavage sans trace des vitrages intérieurs et extérieurs, châssis et rails inclus, avec méthode adaptée aux vitrophanies et marquages publicitaires pour ne pas les décoller.",
          },
        ],
      },
      {
        h2: "À quelle fréquence nettoyer un restaurant ?",
        intro:
          "L'entretien quotidien reste à la charge de la brigade : c'est une obligation d'exploitation. Notre intervention se positionne sur ce que ce nettoyage courant ne traite pas. Concrètement, un passage hebdomadaire ou bihebdomadaire couvre la remise à niveau de la salle et des sanitaires, tandis que le dégraissage complet des hottes et la décarbonisation des équipements de cuisson se planifient à intervalle plus long, selon l'intensité du service. Un établissement qui tourne midi et soir sept jours sur sept sature ses filtres bien plus vite qu'une table ouverte cinq services par semaine. Nous calons le calendrier sur votre activité réelle après une première visite.",
      },
    ],
    process: [
      {
        step: "Visite de l'établissement",
        text: "Nous examinons la cuisine, la salle et les sanitaires, et relevons l'état des hottes et des équipements. Gratuit et sans engagement.",
      },
      {
        step: "Protocole et créneau",
        text: "Nous définissons le détail des postes, la fréquence et le créneau d'intervention compatible avec vos services.",
      },
      {
        step: "Intervention hors service",
        text: "Passage de nuit ou tôt le matin, avec un temps de séchage calculé pour que l'établissement soit opérationnel à l'ouverture.",
      },
      {
        step: "Contrôle avant départ",
        text: "Vérification poste par poste. L'équipe ne quitte pas les lieux avant que la cuisine et la salle soient prêtes pour le service.",
      },
    ],
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
    offers: [
      "Nettoyage quotidien de bureaux",
      "Entretien d'open space et salles de réunion",
      "Désinfection des points de contact",
      "Gestion des consommables sanitaires",
      "Nettoyage en horaires décalés",
    ],
    tldr: "Le nettoyage de bureaux consiste à entretenir quotidiennement ou plusieurs fois par semaine les postes de travail, les espaces communs et les sanitaires d'une entreprise. TGT Propreté intervient à Paris et en Île-de-France en horaires décalés, avant 8h ou après 18h, avec un cahier des charges établi sur mesure et un devis gratuit sous 24h.",
    relatedSlugs: [
      "nettoyage-des-vitres",
      "nettoyage-tapis-moquettes",
      "nettoyage-fin-de-chantier",
      "nettoyage-coproprietes-immeubles",
    ],
    sections: [
      {
        h2: "Pourquoi confier le nettoyage de ses bureaux à un professionnel ?",
        intro:
          "Un bureau propre agit sur trois plans simultanément : la santé des collaborateurs, l'image renvoyée aux visiteurs, et la durée de vie des équipements. Les postes de travail, claviers, téléphones et poignées concentrent une part importante des transmissions en open space, et les sanitaires partagés en sont le point le plus sensible. Confier cet entretien à une équipe formée évite aussi de faire porter la tâche par vos salariés, avec des résultats irréguliers et un matériel inadapté.",
        blocks: [
          {
            h3: "Une hygiène maîtrisée sur les points de contact",
            text: "Les surfaces les plus touchées d'un bureau ne sont pas les plus visibles. Notre protocole traite systématiquement les zones où la contamination circule, indépendamment de leur aspect apparent.",
            items: [
              "Poignées de porte, interrupteurs et boutons d'ascenseur",
              "Claviers, souris, téléphones fixes et écrans partagés",
              "Robinetterie, chasses d'eau et distributeurs sanitaires",
              "Tables de réunion, machines à café et micro-ondes des espaces communs",
            ],
          },
          {
            h3: "Une image cohérente avec votre activité",
            text: "L'accueil, la salle de réunion et les vitres intérieures sont les premières choses que voit un client ou un candidat. Un hall impeccable et des vitres sans trace pèsent davantage sur la perception de votre entreprise que la plupart des budgets de communication.",
          },
          {
            h3: "Des équipements qui durent plus longtemps",
            text: "Une moquette non entretenue s'encrasse en profondeur et devient impossible à récupérer après quelques années de trafic. Un sol souple non protégé se raye. L'entretien régulier repousse le renouvellement de ces revêtements de plusieurs années.",
          },
        ],
      },
      {
        h2: "Que comprend notre prestation de nettoyage de bureaux ?",
        intro:
          "Notre prestation de base couvre les postes de travail, les circulations, les espaces communs et les sanitaires. Elle se complète d'interventions périodiques et de services optionnels que nous calons sur votre organisation plutôt que sur un forfait standard.",
        blocks: [
          {
            h3: "Entretien courant, quotidien ou hebdomadaire",
            text: "C'est le socle de tout contrat. La fréquence est définie ensemble en fonction de votre effectif et du passage réel dans les locaux.",
            items: [
              "Dépoussiérage des bureaux, mobiliers, plinthes et rebords",
              "Aspiration et lavage des sols selon le revêtement (carrelage, moquette, parquet, souple)",
              "Désinfection complète des sanitaires et réapprovisionnement des consommables",
              "Vidage des corbeilles avec respect du tri sélectif",
              "Nettoyage des espaces de pause, cuisines et salles de réunion",
            ],
          },
          {
            h3: "Interventions périodiques",
            text: "Certaines opérations n'ont pas de sens en quotidien mais deviennent indispensables à intervalle régulier. Elles sont planifiées à l'avance et intégrées au contrat.",
            items: [
              "Lavage des vitres intérieures et extérieures, châssis inclus",
              "Traitement des moquettes par injection-extraction",
              "Décapage et protection des sols durs",
              "Dépoussiérage en hauteur : luminaires, bouches de ventilation, dessus d'armoires",
            ],
          },
          {
            h3: "Services complémentaires",
            text: "Sur demande, nous prenons en charge des prestations qui débordent du nettoyage proprement dit et simplifient votre gestion quotidienne.",
            items: [
              "Gestion des stocks et réassort des consommables sanitaires",
              "Remise en état après travaux ou réaménagement de plateau",
              "Nettoyage avant ou après un événement d'entreprise",
              "Entretien des espaces extérieurs et abords d'entrée",
            ],
          },
        ],
      },
      {
        h2: "À quelle fréquence faut-il nettoyer des bureaux ?",
        intro:
          "La règle utile n'est pas la surface mais le nombre de passages quotidiens. Pour un bureau occupé cinq jours sur sept, un entretien quotidien ou trois à quatre passages hebdomadaires couvrent la majorité des besoins. Les sanitaires, eux, demandent un passage quotidien dès lors qu'ils sont partagés par plus d'une dizaine de personnes : c'est le seul poste sur lequel nous déconseillons de réduire la fréquence pour des raisons budgétaires. À l'inverse, un plateau en télétravail partiel avec une occupation concentrée sur deux ou trois jours n'a pas besoin de cinq passages : nous calons les interventions sur les jours réellement occupés.",
      },
      {
        h2: "Comment est calculé le prix du nettoyage de bureaux ?",
        intro:
          "Notre tarif indicatif démarre à 2,5 € du mètre carré, mais le chiffrage réel dépend de quatre facteurs que nous évaluons lors d'une visite gratuite. Aucun devis sérieux ne peut être établi uniquement sur une surface communiquée par téléphone.",
        blocks: [
          {
            h3: "Les quatre facteurs qui font varier le prix",
            items: [
              "La surface et la configuration : un open space se traite plus vite que le même métrage découpé en bureaux fermés",
              "La fréquence : le coût au passage baisse à mesure que la fréquence augmente",
              "Le revêtement de sol : moquette, parquet massif et sols techniques demandent des protocoles et des temps différents",
              "Les horaires : une intervention de nuit ou le week-end se valorise différemment d'un passage en début de matinée",
            ],
          },
          {
            h3: "Ce qui est toujours compris",
            text: "Le matériel professionnel, les produits de nettoyage et l'encadrement de l'agent sont inclus dans le tarif, sans supplément. Seuls les consommables sanitaires font l'objet d'une option de gestion de stock si vous souhaitez nous en confier l'approvisionnement.",
          },
        ],
      },
    ],
    process: [
      {
        step: "Visite sur place",
        text: "Nous venons voir vos locaux, relevons les surfaces, les revêtements et les contraintes d'accès. Gratuit et sans engagement.",
      },
      {
        step: "Cahier des charges",
        text: "Nous rédigeons le détail des tâches, leur fréquence et les horaires d'intervention. Vous validez avant tout démarrage.",
      },
      {
        step: "Agent attitré",
        text: "Un agent référent est affecté à votre site et briefé sur vos spécificités. En cas d'absence, un remplaçant briefé prend le relais aux mêmes horaires.",
      },
      {
        step: "Contrôle qualité",
        text: "Un responsable passe régulièrement vérifier le respect du cahier des charges et reste votre interlocuteur unique en cas de remarque.",
      },
    ],
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
    offers: [
      "Entretien des parties communes",
      "Nettoyage des cages d'escalier et paliers",
      "Désinfection des ascenseurs",
      "Sortie et rentrée des containers",
      "Nettoyage des parkings et sous-sols",
    ],
    tldr: "Le nettoyage de copropriété regroupe l'entretien régulier des parties communes d'un immeuble : hall, escaliers, paliers, ascenseur, local poubelles et parkings. TGT Propreté travaille avec les syndics et conseils syndicaux à Paris et en Île-de-France sur des contrats annuels sur mesure, avec fiche de passage horodatée et contrôle qualité régulier.",
    relatedSlugs: [
      "nettoyage-des-vitres",
      "nettoyage-bureaux-entreprises",
      "nettoyage-apres-sinistre",
      "nettoyage-fin-de-chantier",
    ],
    sections: [
      {
        h2: "Qu'est-ce que le nettoyage de copropriété ?",
        intro:
          "Le nettoyage de copropriété désigne l'entretien des espaces partagés d'un immeuble d'habitation : tout ce qui n'appartient à personne en particulier et donc à tous les copropriétaires. Il couvre le hall d'entrée, les cages d'escalier, les paliers, l'ascenseur, les couloirs de cave, le local poubelles, les parkings et les abords extérieurs. C'est une charge commune, votée en assemblée générale et répartie entre les copropriétaires selon les tantièmes.",
        blocks: [
          {
            h3: "Une obligation d'entretien, pas une option de confort",
            text: "Le syndic est tenu d'assurer la conservation et l'entretien de l'immeuble. Des parties communes laissées à l'abandon engagent sa responsabilité, créent des risques sanitaires réels dans les locaux poubelles et les vide-ordures, et constituent un motif récurrent de contestation en assemblée générale.",
          },
          {
            h3: "Un effet direct sur la valeur des lots",
            text: "Un hall entretenu, des escaliers propres et un local poubelles sans odeur pèsent sur la première impression d'un acquéreur ou d'un locataire potentiel. À prestation égale sur le logement, un immeuble mal tenu se négocie moins bien. C'est le poste de charge dont le retour est le plus visible pour les résidents.",
          },
          {
            h3: "Trois modes de gestion possibles",
            text: "Une copropriété peut employer un gardien, salarier directement un agent d'entretien, ou passer par un prestataire. Le prestataire évite la gestion sociale, les remplacements en cas d'absence, l'achat de matériel et la responsabilité d'employeur, ce qui explique qu'il soit le mode dominant sur les immeubles de taille moyenne.",
          },
        ],
      },
      {
        h2: "Que comprend l'entretien des parties communes ?",
        intro:
          "Le contenu exact figure dans le cahier des charges annexé au contrat. Voici le périmètre que nous couvrons par défaut, avant adaptation à votre immeuble.",
        blocks: [
          {
            h3: "Hall d'entrée et espaces d'accueil",
            text: "C'est la zone la plus visible et la plus fréquentée. Elle conditionne la perception de l'immeuble entier et justifie la fréquence la plus élevée du contrat.",
            items: [
              "Balayage et lavage des sols, avec traitement adapté au revêtement (marbre, carrelage, tomettes, pierre)",
              "Nettoyage des portes vitrées, intérieur et extérieur",
              "Entretien des boîtes aux lettres, interphone et digicode",
              "Vidage des corbeilles à prospectus",
              "Dépoussiérage des miroirs, ferronneries et éléments décoratifs",
            ],
          },
          {
            h3: "Cages d'escalier, paliers et couloirs",
            text: "Le nettoyage se fait du haut vers le bas, étage par étage, pour éviter de resalir les niveaux déjà traités. Sur le bâti ancien parisien, nous travaillons au pH neutre : la pierre, les tomettes et les carreaux de ciment se marquent définitivement au contact d'un produit acide.",
            items: [
              "Balayage humide et lavage des marches et des paliers",
              "Nettoyage des rampes, mains courantes et barreaudages",
              "Dépoussiérage des plinthes, appuis de fenêtre et luminaires accessibles",
              "Nettoyage des vitrages de cage d'escalier",
            ],
          },
          {
            h3: "Ascenseurs",
            text: "La cabine d'ascenseur est le point de contact le plus partagé d'un immeuble, et l'un des plus négligés. Nous la traitons à chaque passage.",
            items: [
              "Nettoyage du sol et des parois, avec produit adapté à l'inox brossé ou aux boiseries",
              "Désinfection du tableau de commande et des boutons de palier",
              "Nettoyage des miroirs et des seuils de porte",
              "Dépoussiérage des rails de guidage accessibles",
            ],
          },
          {
            h3: "Local poubelles et gestion des containers",
            text: "C'est le poste qui génère le plus de remontées de résidents, et celui où l'écart entre un prestataire sérieux et un passage superficiel se voit le plus vite. Nous calons la rotation sur le calendrier de collecte de votre commune.",
            items: [
              "Sortie et rentrée des containers aux jours et horaires de collecte",
              "Lavage et désinfection des sols et parois du local",
              "Nettoyage extérieur des bacs et traitement des odeurs",
              "Ramassage des déchets déposés en parties communes",
            ],
          },
          {
            h3: "Parkings, caves et sous-sols",
            text: "Ces espaces se traitent en général une à deux fois par an, en complément de l'entretien courant, avec un matériel de lavage mécanisé adapté aux grandes surfaces de béton.",
            items: [
              "Balayage et lavage mécanisé des sols",
              "Traitement des taches d'huile et d'hydrocarbures",
              "Nettoyage des murs, piliers et portes de box accessibles",
              "Dégagement et nettoyage des couloirs de cave",
            ],
          },
          {
            h3: "Abords extérieurs et espaces communs",
            text: "Selon la configuration de l'immeuble, le contrat peut inclure le balayage des allées et des entrées, le nettoyage des cours intérieures, des terrasses communes et des façades accessibles depuis le sol.",
          },
        ],
      },
      {
        h2: "À quelle fréquence nettoyer les parties communes d'une copropriété ?",
        intro:
          "La fréquence se détermine à partir du nombre de lots et du passage réel, pas de la surface. Un immeuble de 20 lots avec une seule cage d'escalier n'a pas les mêmes besoins qu'une résidence de 120 lots répartis sur quatre bâtiments.",
        blocks: [
          {
            h3: "Repères par typologie d'immeuble",
            items: [
              "Petit collectif, moins de 20 lots : un à deux passages par semaine sur le hall et les escaliers",
              "Immeuble moyen, 20 à 60 lots : deux à trois passages hebdomadaires, hall traité à chaque passage",
              "Grande résidence, plus de 60 lots : passage quotidien ou quasi quotidien sur les zones à fort trafic",
              "Local poubelles : rotation des containers calée sur les jours de collecte, quel que soit l'immeuble",
            ],
          },
          {
            h3: "Les facteurs qui font monter la fréquence",
            items: [
              "Présence de commerces ou de professions libérales en rez-de-chaussée",
              "Immeuble sans ascenseur, où tout le trafic passe par l'escalier",
              "Nombre élevé de logements meublés ou en location courte durée",
              "Cour intérieure ou espace vert générant des apports de terre et de feuilles",
            ],
          },
          {
            h3: "Ajuster sans dégrader",
            text: "Quand le budget voté impose de réduire la voilure, mieux vaut concentrer les passages sur le hall et le local poubelles plutôt que de diluer une fréquence faible sur l'ensemble des espaces. Un hall impeccable deux fois par semaine produit un meilleur ressenti qu'un passage superficiel partout une seule fois.",
          },
        ],
      },
      {
        h2: "Comment le syndic contrôle-t-il la qualité de la prestation ?",
        intro:
          "C'est la principale difficulté d'un contrat de copropriété : le syndic n'est presque jamais sur place au moment du passage, et le conseil syndical ne dispose souvent que du ressenti des résidents. Nous mettons en place trois dispositifs pour que la vérification soit factuelle.",
        blocks: [
          {
            h3: "Fiche de passage horodatée",
            text: "Une fiche affichée dans le hall ou le local technique est datée et signée par l'agent à chaque intervention. Elle est consultable par tous les résidents, ce qui met fin aux discussions sur la réalité des passages.",
          },
          {
            h3: "Contrôle qualité par un responsable",
            text: "Un responsable indépendant de l'agent passe régulièrement vérifier le respect du cahier des charges, poste par poste. Les écarts sont corrigés sans que vous ayez à les signaler.",
          },
          {
            h3: "Interlocuteur unique et réactivité",
            text: "Vous disposez d'un référent unique côté TGT Propreté, joignable directement. Nous nous engageons sur une réactivité de 24 heures sur les signalements, qu'ils viennent du syndic, du conseil syndical ou du gardien.",
          },
          {
            h3: "Continuité de service",
            text: "En cas d'absence de votre agent attitré, un agent de remplacement briefé en amont sur votre cahier des charges prend le relais aux horaires convenus. Le contrat ne prévoit aucune coupure de service.",
          },
        ],
      },
      {
        h2: "Comment est établi un contrat de nettoyage de copropriété ?",
        intro:
          "Nous fonctionnons au forfait annuel, calculé après visite de l'immeuble. Le forfait couvre l'ensemble des passages prévus au cahier des charges, le matériel, les produits et l'encadrement de l'agent.",
        blocks: [
          {
            h3: "Les éléments relevés lors de la visite",
            items: [
              "Surface réelle des parties communes, cages de cave et parkings inclus",
              "Nombre d'étages, de cages d'escalier et de bâtiments",
              "Présence et type d'ascenseur",
              "Nature des revêtements : marbre, tomettes, carreaux de ciment, thermoplastique, moquette de palier",
              "Configuration du local poubelles et calendrier de collecte de la commune",
              "Contraintes d'accès : digicode, gardien, horaires imposés, stationnement",
            ],
          },
          {
            h3: "Prestations ponctuelles hors forfait",
            text: "Certaines opérations sortent du contrat régulier et se chiffrent à la prestation : évacuation d'encombrants, nettoyage haute pression des parkings ou des cours, cristallisation d'un hall en marbre, remise en état après un dégât des eaux ou des travaux dans les communs.",
          },
          {
            h3: "Documents fournis",
            text: "Nous transmettons systématiquement l'attestation de vigilance URSSAF et l'attestation d'assurance responsabilité civile professionnelle, que le syndic doit pouvoir présenter au conseil syndical. Nous adaptons également notre calendrier de proposition au rythme budgétaire de votre assemblée générale.",
          },
        ],
      },
      {
        h2: "Pourquoi choisir TGT Propreté pour votre copropriété ?",
        intro:
          "Nous travaillons avec des syndics et des conseils syndicaux depuis 2018, sur des immeubles allant du petit collectif ancien à la résidence de plus de cent lots. Notre approche tient en quatre points.",
        blocks: [
          {
            h3: "Des équipes stables",
            text: "Un agent attitré par immeuble, qui connaît les codes, les horaires de collecte et les particularités du bâtiment. La rotation permanente d'agents est la première cause de baisse de qualité sur un contrat de copropriété.",
          },
          {
            h3: "Le respect du bâti",
            text: "Nous identifions les revêtements avant la première intervention et travaillons au pH neutre sur les matériaux anciens. Aucun décapant ni produit acide sur un marbre, une pierre, des tomettes ou des carreaux de ciment.",
          },
          {
            h3: "Une traçabilité vérifiable",
            text: "Fiche de passage horodatée, contrôle qualité régulier et référent unique. Le conseil syndical dispose d'éléments concrets pour rendre compte en assemblée générale.",
          },
          {
            h3: "Des produits écoresponsables",
            text: "Nous privilégions des produits écolabellisés, sans danger pour les résidents, les enfants et les animaux qui circulent quotidiennement dans les parties communes.",
          },
        ],
      },
    ],
    process: [
      {
        step: "Visite de l'immeuble",
        text: "Nous parcourons les parties communes avec le syndic ou un membre du conseil syndical, du sous-sol aux derniers étages. Gratuit et sans engagement.",
      },
      {
        step: "Cahier des charges et forfait annuel",
        text: "Nous détaillons les tâches, leur fréquence et les horaires, puis chiffrons un forfait annuel. Le document est présentable tel quel en assemblée générale.",
      },
      {
        step: "Mise en place",
        text: "Affectation d'un agent attitré, briefing sur les codes d'accès et le calendrier de collecte, pose de la fiche de passage dans le hall.",
      },
      {
        step: "Suivi et contrôle",
        text: "Passages de contrôle qualité réguliers et référent unique joignable. Réactivité de 24 heures sur tout signalement.",
      },
    ],
    faqs: [
      {
        q: "À quelle fréquence faut-il nettoyer les parties communes d'une copropriété ?",
        a: "Cela dépend du nombre de lots et du passage réel, pas de la surface. Comptez un à deux passages hebdomadaires pour un petit collectif de moins de 20 lots, deux à trois pour un immeuble de 20 à 60 lots, et un passage quotidien ou quasi quotidien au-delà de 60 lots. Le local poubelles suit toujours le calendrier de collecte de la commune, quelle que soit la taille de l'immeuble.",
      },
      {
        q: "Qui paie le nettoyage des parties communes ?",
        a: "C'est une charge commune, répartie entre tous les copropriétaires selon les tantièmes et votée en assemblée générale. Le syndic gère le budget et signe le contrat avec le prestataire.",
      },
      {
        q: "Combien coûte le nettoyage d'une copropriété ?",
        a: "Nous fonctionnons au forfait annuel, établi après visite de l'immeuble. Le chiffrage dépend de la surface des parties communes, du nombre d'étages et de cages d'escalier, de la présence d'un ascenseur, de la nature des revêtements et de la fréquence retenue. Un devis à distance sur la seule base du nombre de lots n'est pas fiable : la visite est gratuite et sans engagement.",
      },
      {
        q: "Comment les résidents et le syndic peuvent-ils vérifier le passage de l'agent ?",
        a: "Par une fiche de passage horodatée et signée par l'agent, affichée de manière visible dans le hall ou le local technique. Un contrôle qualité est en outre effectué régulièrement par un responsable indépendant de l'agent, pour veiller au respect du cahier des charges.",
      },
      {
        q: "Que se passe-t-il si notre agent habituel est absent ?",
        a: "Un agent de remplacement, briefé en amont sur votre cahier des charges, vos codes d'accès et vos spécificités, prend le relais aux horaires convenus. Le contrat ne prévoit aucune coupure de service.",
      },
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
    offers: [
      "Bionettoyage de salle de soins",
      "Désinfection virucide et bactéricide",
      "Traitement des points de contact",
      "Entretien de salle d'attente",
      "Nettoyage de cabinet dentaire",
    ],
    tldr: "Le bionettoyage est un protocole en deux temps — nettoyage puis désinfection — appliqué en milieu de soins pour éliminer le risque de contamination croisée. TGT Propreté intervient dans les cabinets médicaux, dentaires, paramédicaux et cliniques privées à Paris et en Île-de-France, avec des détergents-désinfectants aux normes européennes virucides, bactéricides et fongicides.",
    relatedSlugs: [
      "nettoyage-bureaux-entreprises",
      "nettoyage-des-vitres",
      "nettoyage-apres-sinistre",
      "nettoyage-tapis-moquettes",
    ],
    sections: [
      {
        h2: "Qu'est-ce que le bionettoyage en milieu médical ?",
        intro:
          "Le bionettoyage se distingue d'un nettoyage courant sur un point précis : il enchaîne systématiquement une phase de nettoyage, qui retire les salissures et la matière organique, puis une phase de désinfection, qui élimine les micro-organismes restants. L'ordre compte. Un désinfectant appliqué sur une surface encore souillée perd une grande partie de son efficacité, car la matière organique le neutralise avant qu'il n'atteigne les micro-organismes.",
        blocks: [
          {
            h3: "Le principe de la marche en avant",
            text: "Le nettoyage progresse du plus propre vers le plus sale, et jamais l'inverse. Les salles d'examen sont traitées avant les sanitaires, et le matériel utilisé dans une zone contaminée ne repasse jamais dans une zone propre. Cette règle évite le transport de germes d'une pièce à l'autre.",
          },
          {
            h3: "Un matériel dédié par zone",
            text: "Chiffonnettes et franges sont codées par couleur et changées entre chaque zone. Un même support ne sert pas successivement à une paillasse de soin et à une cuvette de sanitaire.",
          },
          {
            h3: "Des produits aux normes opposables",
            text: "Nous utilisons exclusivement des détergents-désinfectants de qualité hospitalière répondant aux normes européennes virucides, bactéricides et fongicides, avec respect strict des temps de contact indiqués par le fabricant.",
          },
        ],
      },
      {
        h2: "Quels espaces traitons-nous dans un cabinet médical ?",
        intro:
          "Chaque zone d'un cabinet appelle un niveau de traitement différent, du plus exigeant en salle de soins au plus courant dans les espaces administratifs.",
        blocks: [
          {
            h3: "Salles d'examen et de soins",
            items: [
              "Bionettoyage des paillasses, plans de travail et dessertes",
              "Traitement du fauteuil ou de la table d'examen, accoudoirs et commandes inclus",
              "Désinfection des équipements fixes et de leurs surfaces de contact",
              "Sols traités en dernier, avec matériel dédié à la zone",
            ],
          },
          {
            h3: "Salle d'attente",
            text: "C'est le lieu où se croisent le plus grand nombre de personnes, dont certaines contagieuses. Nous y traitons systématiquement les accoudoirs de sièges, les poignées, les tables basses et les jouets ou présentoirs éventuels.",
          },
          {
            h3: "Accueil et espace administratif",
            items: [
              "Comptoir d'accueil et vitre de séparation",
              "Lecteurs de cartes bancaires et de cartes Vitale",
              "Claviers, téléphones et terminaux partagés",
              "Vidage des corbeilles avec respect des circuits de tri",
            ],
          },
          {
            h3: "Sanitaires et locaux techniques",
            text: "Désinfection complète, détartrage, réapprovisionnement des consommables et traitement des points de contact. Ces espaces sont toujours traités en dernier, avec un matériel qui ne repasse dans aucune autre zone.",
          },
        ],
      },
      {
        h2: "Comment garantissez-vous la confidentialité dans un cabinet ?",
        intro:
          "Un agent d'entretien en cabinet médical circule au milieu de dossiers patients, d'écrans allumés et de documents en cours de traitement. Nos consignes sont explicites sur ce point : nos agents ne manipulent, ne déplacent et ne lisent aucun document, aucun dossier et aucun écran. Ils sont sensibilisés à la nature de l'environnement médical et au secret professionnel qui s'y attache. Les corbeilles sont vidées sans tri ni examen du contenu, et nous respectons les circuits de collecte que vous avez mis en place pour les déchets d'activité de soins. Si votre activité l'exige, nous signons un accord de confidentialité formalisé avant le démarrage du contrat.",
      },
      {
        h2: "À quelle fréquence faire nettoyer un cabinet médical ?",
        intro:
          "En milieu de soins, la question de la fréquence se pose différemment d'un bureau classique : ce n'est pas l'aspect visuel qui commande, mais le nombre de patients reçus. Un cabinet en activité doit être bionettoyé quotidiennement, salle d'attente et sanitaires compris. Les surfaces de contact en salle d'examen relèvent, elles, d'une désinfection entre chaque patient, qui reste à la charge du praticien : notre intervention complète ce geste, elle ne le remplace pas. Pour les structures à forte affluence, cliniques privées et cabinets de groupe, nous proposons un second passage en milieu de journée sur les zones les plus exposées. Le calendrier est défini après visite, en fonction de votre file active et de vos horaires de consultation.",
      },
    ],
    process: [
      {
        step: "Visite et protocole",
        text: "Nous relevons le zonage du cabinet, les circuits de déchets et les contraintes horaires, puis rédigeons un protocole de bionettoyage propre à votre structure.",
      },
      {
        step: "Agent sensibilisé",
        text: "Un agent attitré, formé au bionettoyage et à la confidentialité du milieu médical, est affecté à votre cabinet.",
      },
      {
        step: "Marche en avant",
        text: "Nettoyage puis désinfection, du plus propre vers le plus sale, avec matériel codé par couleur et respect des temps de contact.",
      },
      {
        step: "Contrôle et traçabilité",
        text: "Passages de contrôle qualité réguliers et référent unique joignable pour tout ajustement du protocole.",
      },
    ],
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
    offers: [
      "Remise en état après travaux",
      "Élimination des poussières de plâtre",
      "Retrait du voile de ciment",
      "Grattage des traces de peinture et de colle",
      "Lavage des vitres de fin de chantier",
    ],
    tldr: "Le nettoyage de fin de chantier est la remise en état complète d'un local après travaux, avant sa livraison ou son emménagement. Il élimine la poussière de plâtre, le voile de ciment, les traces de peinture, de colle et de silicone. TGT Propreté intervient à Paris et en Île-de-France, avec un devis établi après visite ou sur plans.",
    relatedSlugs: [
      "nettoyage-des-vitres",
      "nettoyage-approfondi",
      "nettoyage-bureaux-entreprises",
      "nettoyage-apres-sinistre",
    ],
    sections: [
      {
        h2: "Qu'est-ce que le nettoyage de fin de chantier ?",
        intro:
          "Le nettoyage de fin de chantier est une remise en état intégrale, pas un ménage renforcé. Il traite des salissures que l'entretien courant n'attaque pas : poussière de plâtre logée dans les rainures et les grilles de ventilation, voile de ciment sur les carrelages neufs, projections de peinture, résidus de colle et de silicone sur les vitres et les menuiseries. Ces salissures durcissent avec le temps, ce qui rend l'intervention plus difficile et plus coûteuse au fil des semaines. C'est la raison pour laquelle elle se planifie dès l'arrêt des travaux.",
        blocks: [
          {
            h3: "La différence avec un nettoyage classique",
            text: "Un nettoyage courant travaille sur des surfaces déjà propres à l'origine. Une fin de chantier part de surfaces neuves mais souillées par des matériaux de construction, avec un risque de dégradation permanente si la méthode est mauvaise : un grattoir mal utilisé raye une vitre neuve, un décapant acide ternit définitivement un marbre.",
          },
          {
            h3: "Deux moments d'intervention possibles",
            text: "Nous intervenons en cours de chantier pour réguler la poussière et libérer les accès entre corps de métier, puis à la toute fin pour la remise en état finale avant livraison des clés. Les deux se chiffrent séparément.",
          },
        ],
      },
      {
        h2: "Que comprend une prestation de fin de chantier ?",
        intro:
          "Notre prestation couvre l'ensemble des surfaces du local, du sol au plafond, y compris l'intérieur des rangements et les menuiseries. Voici le détail de ce que nous traitons systématiquement.",
        blocks: [
          {
            h3: "Élimination des poussières de construction",
            items: [
              "Aspiration industrielle de la poussière de plâtre, y compris dans les rainures et les angles",
              "Dépoussiérage des murs, plafonds et retombées",
              "Nettoyage des grilles de ventilation et des bouches d'aération",
              "Traitement des radiateurs, gaines et éléments techniques apparents",
            ],
          },
          {
            h3: "Traitement des sols",
            text: "Chaque revêtement demande un produit et un matériel différents. Nous identifions la nature du sol avant d'intervenir, en particulier sur les matériaux poreux ou fragiles.",
            items: [
              "Élimination du voile de ciment sur les carrelages neufs",
              "Décapage et lavage des sols souples et thermoplastiques",
              "Traitement doux du marbre, de la pierre et des résines, sans produit acide",
              "Nettoyage des parquets massifs au pH neutre",
            ],
          },
          {
            h3: "Menuiseries, vitrages et éléments fixes",
            items: [
              "Lavage haute performance des vitres, châssis, rails et joints inclus",
              "Grattage des traces de peinture, de colle et de silicone au grattoir de vitrier",
              "Nettoyage intérieur et extérieur des placards, tiroirs et rangements",
              "Portes, plinthes, poignées, interrupteurs et prises",
            ],
          },
          {
            h3: "Sanitaires et cuisine",
            text: "Les pièces d'eau concentrent les résidus de pose : joints, silicone, étiquettes d'usine sur les appareils. Nous les livrons prêtes à l'usage, robinetterie détartrée et appareils sanitaires désinfectés.",
          },
        ],
      },
      {
        h2: "Quand faut-il faire intervenir une entreprise de nettoyage de fin de chantier ?",
        intro:
          "Le bon moment se situe après l'arrêt complet des travaux et avant la réception, idéalement dans les 24 à 48 heures qui suivent le départ du dernier corps de métier. Passé ce délai, la poussière en suspension se redépose sur toutes les surfaces déjà traitées, ce qui oblige à reprendre le travail. Si un artisan doit encore repasser, mieux vaut nous prévenir : nous décalons l'intervention plutôt que de la refaire deux fois. Sur les chantiers longs, une intervention intermédiaire de régulation de la poussière permet aux corps de métier suivants de travailler dans de meilleures conditions et réduit le volume de la remise en état finale.",
      },
      {
        h2: "Comment est calculé le prix d'un nettoyage de fin de chantier ?",
        intro:
          "Notre fourchette indicative va de 4,50 € à 8,50 € du mètre carré. L'écart entre ces deux bornes tient à l'état réel du chantier, que seule une visite ou l'examen des plans permet d'évaluer. Un plateau de bureaux livré propre par les entreprises se situe en bas de fourchette ; un logement rénové avec dépose de cloisons, ponçage et reprise de peinture se situe en haut.",
        blocks: [
          {
            h3: "Ce qui fait monter le devis",
            items: [
              "Un chantier laissé en l'état, avec gravats et emballages non évacués",
              "Des travaux de ponçage ou de plâtrerie, qui génèrent une poussière très fine et diffuse",
              "Une forte proportion de surfaces vitrées et de menuiseries à gratter",
              "Des matériaux fragiles imposant des méthodes lentes : marbre, parquet massif, résine, inox brossé",
              "Un accès contraint : étage sans ascenseur, stationnement impossible, créneau horaire imposé",
            ],
          },
          {
            h3: "L'évacuation des déchets",
            text: "Notre prestation porte sur la mise en propreté. L'évacuation des petits déchets de finition et des cartons d'emballage peut être intégrée sur demande, avec une facturation complémentaire indexée sur les frais d'accès et de dépôt en déchetterie professionnelle.",
          },
        ],
      },
    ],
    process: [
      {
        step: "Visite ou plans",
        text: "Nous évaluons l'état du chantier sur place ou sur plans, et relevons les matériaux à protéger. Gratuit et sans engagement.",
      },
      {
        step: "Devis et date de livraison",
        text: "Nous chiffrons la prestation et dimensionnons l'équipe pour tenir la date de réception que vous nous donnez.",
      },
      {
        step: "Remise en état",
        text: "Intervention du haut vers le bas : plafonds et hauteurs, murs et menuiseries, vitrages, puis sols en dernier.",
      },
      {
        step: "Réception avec vous",
        text: "Nous parcourons le local ensemble avant de partir. Les points de reprise sont traités sur place, pas lors d'un second passage.",
      },
    ],
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
    offers: [
      "Lavage de vitres sans trace",
      "Nettoyage de vitrines et devantures",
      "Lavage de baies vitrées et verrières",
      "Nettoyage à l'eau pure en hauteur",
      "Nettoyage des châssis et encadrements",
    ],
    tldr: "Le nettoyage professionnel de vitres se fait à la raclette et au mouilleur sur les surfaces accessibles, et à la perche télescopique alimentée en eau pure pour la hauteur. TGT Propreté traite vitrines, baies vitrées et verrières à Paris et en Île-de-France, châssis, rails et joints inclus, avec une finition sans trace.",
    relatedSlugs: [
      "nettoyage-bureaux-entreprises",
      "nettoyage-coproprietes-immeubles",
      "nettoyage-fin-de-chantier",
      "nettoyage-restaurants-cuisines",
    ],
    sections: [
      {
        h2: "Pourquoi confier le lavage de vitres à un professionnel ?",
        intro:
          "Une vitre nettoyée avec un produit ménager et du papier laisse presque toujours des traces, pour une raison simple : le produit sèche plus vite qu'il n'est retiré, et le film qu'il laisse devient visible dès que la lumière change d'angle. La méthode professionnelle inverse la logique. On mouille abondamment pour décoller la salissure, puis on retire l'eau d'un seul geste à la raclette, avant tout début de séchage.",
        blocks: [
          {
            h3: "La technique classique : mouilleur et raclette",
            text: "Le mouilleur imbibe la surface d'une solution faiblement dosée, ce qui dissout le film gras. La raclette, dont le caoutchouc est changé dès qu'il s'émousse, retire l'eau en un passage continu. C'est la vitesse d'exécution qui produit l'absence de trace, pas la quantité de produit.",
          },
          {
            h3: "L'eau pure pour la hauteur",
            text: "Au-delà de la portée du bras, nous utilisons une perche télescopique alimentée en eau déminéralisée. Cette eau, débarrassée de ses sels minéraux, sèche sans laisser de dépôt : la vitre n'a pas besoin d'être essuyée, ce qui rend le nettoyage en hauteur possible depuis le sol et en toute sécurité.",
          },
          {
            h3: "Ce que le nettoyage improvisé abîme",
            text: "Un grattoir mal orienté raye définitivement un vitrage neuf. Un produit acide attaque les joints en silicone et corrode les châssis en aluminium anodisé. Sur les vitrines pourvues de vitrophanies, un solvant standard décolle le vinyle en quelques passages.",
          },
        ],
      },
      {
        h2: "Que comprend une prestation de nettoyage de vitres ?",
        intro:
          "Une vitre sans trace posée dans un châssis encrassé ne donne pas le résultat attendu. Notre prestation traite l'ensemble de l'ouvrant, pas seulement la surface vitrée.",
        blocks: [
          {
            h3: "Les surfaces vitrées",
            items: [
              "Vitres intérieures et extérieures",
              "Baies vitrées et fenêtres à grands vantaux",
              "Verrières et puits de lumière accessibles",
              "Vitrines et devantures commerciales",
              "Cloisons vitrées intérieures et portes en verre",
            ],
          },
          {
            h3: "Les encadrements et les périphériques",
            items: [
              "Châssis et encadrements, aluminium, PVC ou bois",
              "Rails de coulissants et gorges de guidage",
              "Joints et silicones",
              "Appuis de fenêtre et rebords extérieurs",
            ],
          },
          {
            h3: "Cas particuliers",
            text: "Nous adaptons la méthode aux vitrines pourvues de marquages publicitaires ou de vitrophanies, en utilisant des produits non corrosifs qui préservent le vinyle, et aux vitrages neufs de fin de chantier, qui demandent un grattoir de vitrier professionnel pour retirer les résidus de silicone et les projections de peinture.",
          },
        ],
      },
      {
        h2: "À quelle fréquence faire laver ses vitres ?",
        intro:
          "La fréquence dépend surtout de l'exposition et de l'usage du local. Une vitrine commerciale sur un axe passant se salit en quelques jours et demande un passage hebdomadaire pour rester présentable. Des bureaux en étage, moins exposés aux projections de la rue, tiennent un rythme trimestriel ou semestriel selon leur orientation. Les vitrages d'un immeuble d'habitation, cages d'escalier et hall compris, se traitent généralement deux à quatre fois par an dans le cadre du contrat de copropriété. Les façades exposées au nord et à la pluie battante se salissent plus vite que les autres : sur un même bâtiment, il est courant de retenir deux fréquences différentes selon l'orientation plutôt qu'un rythme unique.",
      },
      {
        h2: "Comment est calculé le prix du nettoyage de vitres ?",
        intro:
          "Notre tarif indicatif va de 2,50 € à 4,00 € du mètre carré de surface vitrée, ou au forfait pour les interventions récurrentes. Le positionnement dans cette fourchette dépend de quatre facteurs que nous relevons lors de la visite.",
        blocks: [
          {
            h3: "Les facteurs de chiffrage",
            items: [
              "L'accessibilité : une baie de plain-pied se traite bien plus vite qu'un vitrage en hauteur nécessitant perche et eau pure",
              "Le découpage : dix petits carreaux à petits-bois demandent plus de temps qu'une seule grande surface équivalente",
              "L'état de départ : un vitrage jamais nettoyé ou sortant de chantier appelle un premier passage renforcé",
              "La fréquence : un contrat récurrent abaisse le coût unitaire de chaque passage",
            ],
          },
          {
            h3: "La question de la hauteur",
            text: "Notre matériel couvre les vitrages accessibles depuis le sol avec perche télescopique. Au-delà, l'intervention nécessite des moyens d'accès spécifiques dont la faisabilité et le coût sont évalués lors de la visite préalable.",
          },
        ],
      },
    ],
    process: [
      {
        step: "Relevé des surfaces",
        text: "Nous mesurons les surfaces vitrées, identifions les accès et repérons les vitrophanies ou vitrages fragiles. Gratuit et sans engagement.",
      },
      {
        step: "Choix de la méthode",
        text: "Mouilleur et raclette pour les surfaces accessibles, perche télescopique et eau pure pour la hauteur.",
      },
      {
        step: "Vitres, châssis et rails",
        text: "Passage complet sur la surface vitrée puis sur l'encadrement, les rails et les joints. Une vitre propre dans un châssis sale ne compte pas comme terminée.",
      },
      {
        step: "Contrôle en lumière rasante",
        text: "Vérification finale sous un angle de lumière défavorable, celui qui révèle les traces. C'est le seul contrôle qui vaut.",
      },
    ],
    faqs: [
      {
        q: "Intervenez-vous sur des vitrages difficiles d'accès ?",
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
    offers: [
      "Grand ménage de logement",
      "Dégraissage de four et de hotte",
      "Détartrage de salle de bain",
      "Lessivage des plinthes et huisseries",
      "Nettoyage des vitres intérieures",
    ],
    tldr: "Le nettoyage approfondi, ou grand ménage, va au-delà de l'entretien courant : déplacement du mobilier léger, lessivage des plinthes, dégraissage de l'intérieur du four et de la hotte, détartrage complet des sanitaires. TGT Propreté intervient à domicile à Paris et en Île-de-France à partir de 28 € de l'heure, matériel et produits inclus.",
    relatedSlugs: [
      "nettoyage-canapes-fauteuils",
      "nettoyage-tapis-moquettes",
      "nettoyage-des-vitres",
      "repassage-rangement-domicile",
    ],
    sections: [
      {
        h2: "Quelle différence entre un ménage classique et un nettoyage approfondi ?",
        intro:
          "Un ménage classique entretient ce qui est visible et accessible : poussière de surface, aspirateur, lavage des sols dégagés, sanitaires rafraîchis. Un nettoyage approfondi s'attaque à ce que l'entretien courant laisse s'accumuler depuis des mois : le calcaire incrusté dans la robinetterie, la graisse cuite dans le four, la poussière derrière les meubles et sur les plinthes, le film gras sur les carrelages muraux de cuisine.",
        blocks: [
          {
            h3: "Ce que l'entretien courant ne traite pas",
            items: [
              "Intérieur du four, de la hotte et du micro-ondes",
              "Dessus d'armoires, plinthes et huisseries",
              "Sous et derrière le mobilier léger",
              "Calcaire incrusté sur robinetteries, parois de douche et cuvettes",
              "Joints de carrelage et coulures dans les pièces d'eau",
              "Intérieur des placards et des tiroirs",
            ],
          },
          {
            h3: "Quand le programmer",
            text: "Le nettoyage approfondi se justifie à des moments précis plutôt qu'à intervalle fixe : avant une remise de clés, à l'entrée dans un logement, après une longue absence, avant ou après une réception, ou en remise à niveau annuelle quand l'entretien courant a pris du retard.",
          },
        ],
      },
      {
        h2: "Que comprend un grand ménage, pièce par pièce ?",
        intro:
          "Nous établissons un plan d'action avant de commencer, en fonction de l'état réel du logement et du temps disponible. Voici le périmètre couvert par pièce.",
        blocks: [
          {
            h3: "Cuisine",
            items: [
              "Dégraissage intérieur et extérieur du four, de la hotte et du micro-ondes",
              "Nettoyage des plaques de cuisson et de la crédence",
              "Extérieur des appareils électroménagers et dessus de réfrigérateur",
              "Détartrage de l'évier et de la robinetterie",
              "Nettoyage des façades de placards, intérieur sur demande",
            ],
          },
          {
            h3: "Salle de bain et sanitaires",
            items: [
              "Détartrage complet de la douche, de la baignoire et des parois",
              "Traitement des joints et des coulures",
              "Robinetteries, pommeaux et flexibles",
              "Cuvette, abattant et pourtour des WC",
              "Miroirs, meubles vasque et rangements",
            ],
          },
          {
            h3: "Pièces de vie et chambres",
            items: [
              "Dépoussiérage complet, dessus d'armoires et luminaires compris",
              "Lessivage des plinthes, interrupteurs et poignées de porte",
              "Déplacement du mobilier léger pour traiter le sol en dessous",
              "Nettoyage des vitres intérieures et des rebords de fenêtre",
              "Lavage des sols avec un produit adapté au revêtement",
            ],
          },
        ],
      },
      {
        h2: "Combien de temps prévoir pour un nettoyage approfondi ?",
        intro:
          "Le temps dépend de la superficie et surtout de l'état de départ. À titre de repère, comptez en moyenne 4 à 5 heures pour un appartement de 60 m² lors d'un premier grand nettoyage. Un studio se traite en 2 à 3 heures, un logement familial de 100 m² demande une journée à deux intervenants. Ces durées augmentent sensiblement si le logement n'a pas été entretenu depuis longtemps, s'il comporte beaucoup de surfaces vitrées ou si les pièces d'eau présentent un entartrage ancien. Nous vous donnons une estimation après un échange sur la configuration du logement, et nous établissons un plan d'action avec vous avant de démarrer, de façon à traiter en priorité ce qui compte le plus pour vous si le temps venait à manquer.",
      },
      {
        h2: "Qui fournit le matériel et les produits ?",
        intro:
          "Nos équipes arrivent entièrement équipées, avec leur matériel professionnel et leurs produits, dont des références écolabellisées. Vous n'avez rien à prévoir et rien à acheter. Ce point mérite d'être vérifié quand vous comparez des devis : un tarif horaire plus bas qui suppose l'usage de votre propre matériel et de vos produits ne se compare pas à un tarif qui inclut tout. Nos produits sont sélectionnés pour être performants sans agresser les surfaces délicates. Sur le marbre, le parquet massif, la pierre naturelle et les résines, nous travaillons au pH neutre, sans décapant ni produit acide. Si votre logement comporte des matériaux particuliers, signalez-le avant l'intervention : nous adaptons la sélection en conséquence.",
      },
    ],
    process: [
      {
        step: "Échange préalable",
        text: "Nous faisons le point sur la superficie, l'état de départ et vos priorités, puis nous vous donnons une estimation de durée.",
      },
      {
        step: "Plan d'action",
        text: "Nous établissons avec vous l'ordre de traitement des pièces avant de démarrer, pour que l'essentiel soit couvert en priorité.",
      },
      {
        step: "Intervention équipée",
        text: "Nos intervenants arrivent avec leur matériel professionnel et leurs produits écolabellisés. Rien à fournir de votre côté.",
      },
      {
        step: "Tour final",
        text: "Nous parcourons le logement avec vous avant de partir. Les points de reprise sont traités sur place.",
      },
    ],
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
        a: "Malheureusement non. En tant qu'entreprise de nettoyage multisectorielle intervenant principalement auprès des professionnels (B2B), nous ne bénéficions pas de l'agrément Services à la Personne. Nos tarifs incluent l'intégralité de nos charges, nos assurances professionnelles et la fourniture de nos équipements industriels.",
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
      "Shampouinage et détachage professionnel par injection-extraction pour éliminer taches, odeurs et acariens.",
    longDesc:
      "Redonnez l'éclat du neuf à vos mobiliers textiles grâce à notre technique professionnelle d'injection-extraction. Idéal pour les canapés, fauteuils, chaises de bureau ou têtes de lit en tissu, notre traitement agit au cœur des fibres pour extraire les saletés incrustées, les auréoles, les odeurs (tabac, animaux) et éliminer 99% des allergènes et acariens. Nous utilisons des produits professionnels non agressifs qui ravivent les couleurs sans altérer la texture de vos meubles.",
    keywords: [
      "nettoyage canapé Paris",
      "shampouinage fauteuil tissu",
      "détachage canapé à domicile",
      "nettoyage textile ameublement",
    ],
    priceRange: "À la pièce (sur photo ou modèle)",
    offers: [
      "Shampouinage de canapé",
      "Détachage professionnel",
      "Nettoyage par injection-extraction",
      "Traitement du cuir et du similicuir",
      "Élimination des acariens et allergènes",
    ],
    tldr: "Le nettoyage de canapé par injection-extraction consiste à injecter une solution nettoyante au cœur des fibres puis à l'extraire immédiatement avec la saleté dissoute. TGT Propreté intervient à domicile à Paris et en Île-de-France sur les canapés en tissu, cuir et microfibre, avec un séchage de 4 à 12 heures et un devis établi sur photo.",
    relatedSlugs: [
      "nettoyage-tapis-moquettes",
      "nettoyage-approfondi",
      "nettoyage-apres-sinistre",
      "prestations-sur-mesure-conciergerie",
    ],
    sections: [
      {
        h2: "Pourquoi faire nettoyer son canapé par un professionnel ?",
        intro:
          "Un canapé accumule en quelques années ce qu'un aspirateur domestique ne retire pas : squames, acariens, poussière fine descendue au cœur du rembourrage, transpiration, résidus alimentaires et odeurs. Ces dépôts ne se voient pas immédiatement mais ternissent progressivement la couleur d'origine et rendent le tissu rêche au toucher. Le nettoyage domestique ne fait qu'agir en surface : sans extraction, l'eau et le produit restent dans la mousse et favorisent les auréoles et les moisissures.",
        blocks: [
          {
            h3: "Ce que l'aspirateur ne retire pas",
            items: [
              "Acariens et allergènes logés dans le rembourrage",
              "Poussière fine descendue sous la trame du tissu",
              "Transpiration et corps gras incrustés sur les accoudoirs et les têtières",
              "Odeurs de tabac, de cuisine et d'animaux fixées dans la mousse",
            ],
          },
          {
            h3: "Le risque du nettoyage improvisé",
            text: "Frotter une tache avec un produit inadapté est la principale cause d'échec définitif. Le frottement fait pénétrer la tache plus profondément et abîme la trame ; certains détachants du commerce décolorent le tissu en séchant. Une tache déjà frottée reste traitable, mais avec un taux de réussite nettement inférieur.",
          },
          {
            h3: "Un arbitrage économique simple",
            text: "Un nettoyage professionnel coûte une fraction du prix d'un canapé neuf et prolonge sa durée de vie de plusieurs années. Sur un modèle de qualité, l'opération se rentabilise dès la première intervention.",
          },
        ],
      },
      {
        h2: "Comment se déroule un nettoyage de canapé par injection-extraction ?",
        intro:
          "L'injection-extraction est le procédé de référence pour les textiles d'ameublement. La machine injecte une solution nettoyante sous pression au cœur des fibres, puis l'aspire immédiatement avec la saleté qu'elle a dissoute. Le textile ressort à peine humide, jamais détrempé.",
        blocks: [
          {
            h3: "1. Identification du textile",
            text: "Nous commençons par lire l'étiquette d'entretien et tester le produit sur une zone cachée. Un velours, un lin, une microfibre et un similicuir ne se traitent pas de la même façon, et certains tissus dits « nettoyage à sec uniquement » excluent l'injection-extraction.",
          },
          {
            h3: "2. Aspiration et brossage",
            text: "Aspiration à haute dépression de l'ensemble de l'assise, du dossier, des accoudoirs et des interstices, complétée d'un brossage mécanique qui décolle les particules accrochées à la trame.",
          },
          {
            h3: "3. Détachage ciblé",
            text: "Les taches identifiées sont prétraitées une par une avec un produit choisi selon leur nature : corps gras, tanins, protéines ou pigments ne réagissent pas aux mêmes agents.",
          },
          {
            h3: "4. Injection-extraction",
            text: "Passage complet sur toutes les surfaces textiles, avec une pression adaptée à la résistance de la fibre. C'est l'étape qui retire les auréoles, les allergènes et les odeurs.",
          },
          {
            h3: "5. Finition et séchage",
            text: "Extraction renforcée pour retirer un maximum d'humidité résiduelle, puis remise en forme des coussins. Nous vous indiquons le délai avant réutilisation et les consignes de ventilation.",
          },
        ],
      },
      {
        h2: "Quels types de canapés et de textiles traitons-nous ?",
        intro:
          "Nous intervenons sur l'ensemble des mobiliers textiles d'un logement ou d'un bureau, avec une méthode adaptée à chaque matière.",
        blocks: [
          {
            h3: "Canapés et fauteuils en tissu",
            text: "Coton, polyester, velours, lin, chenille : c'est le cas le plus courant et celui où l'injection-extraction donne les résultats les plus visibles. La pression est ajustée à la résistance de la trame.",
          },
          {
            h3: "Cuir et similicuir",
            text: "Le cuir ne se traite pas par injection-extraction. Nous procédons par nettoyage doux, produit spécifique et nourrissage pour éviter le dessèchement et les craquelures.",
          },
          {
            h3: "Microfibre et alcantara",
            text: "Ces matières marquent facilement à l'eau et demandent un dosage précis pour éviter les auréoles de séchage. Le test préalable sur zone cachée est ici indispensable.",
          },
          {
            h3: "Autres mobiliers textiles",
            items: [
              "Chaises et fauteuils de bureau, y compris en parc d'entreprise",
              "Têtes de lit en tissu",
              "Banquettes de restaurant et assises de salle d'attente",
              "Chaises de salle à manger et poufs",
            ],
          },
        ],
      },
      {
        h2: "Combien de temps sèche un canapé après nettoyage ?",
        intro:
          "Comptez entre 4 et 12 heures selon l'épaisseur du rembourrage, la nature du tissu et la ventilation de la pièce. Un canapé fin en tissu léger sèche en une demi-journée ; une assise épaisse en velours dans une pièce peu ventilée peut demander une nuit complète. Le nettoyage se planifie donc idéalement en matinée pour une réutilisation le soir même. Aérer la pièce et faire fonctionner le chauffage en hiver accélère nettement le séchage. Nous déconseillons de replacer les housses ou les plaids tant que le rembourrage n'est pas parfaitement sec.",
      },
      {
        h2: "Comment obtenir un devis pour un nettoyage de canapé ?",
        intro:
          "Nous chiffrons à la pièce, sur photo ou sur indication du modèle. Envoyez-nous une photo d'ensemble, une photo des taches éventuelles et le nombre de places : vous recevez un prix fixe avant l'intervention, sans surprise le jour J. Trois éléments font varier le tarif : le nombre de places et la présence d'une méridienne ou d'un angle, la nature du textile, et l'état de départ. Un canapé simplement encrassé par l'usage se traite plus vite qu'un modèle présentant des taches anciennes déjà frottées. Précisez également si l'accès se fait par un étage sans ascenseur, cela conditionne le matériel que nous montons.",
      },
    ],
    process: [
      {
        step: "Devis sur photo",
        text: "Envoyez une photo d'ensemble, une photo des taches et le nombre de places. Vous recevez un prix fixe avant l'intervention.",
      },
      {
        step: "Test préalable",
        text: "Lecture de l'étiquette d'entretien et test du produit sur une zone cachée. C'est ce qui évite toute mauvaise surprise sur les matières délicates.",
      },
      {
        step: "Détachage puis extraction",
        text: "Aspiration, brossage mécanique, prétraitement des taches une par une, puis injection-extraction sur l'ensemble des surfaces.",
      },
      {
        step: "Séchage accompagné",
        text: "Extraction renforcée, remise en forme des coussins et consignes de ventilation. Réutilisation sous 4 à 12 heures.",
      },
    ],
    faqs: [
      {
        q: "À quelle fréquence faut-il faire nettoyer son canapé ?",
        a: "Un nettoyage professionnel une à deux fois par an suffit pour un usage courant. Comptez deux à trois fois par an en présence d'enfants en bas âge, d'animaux ou de fumeurs. Entre deux interventions, un passage d'aspirateur hebdomadaire avec l'embout textile et un brossage régulier retardent nettement l'encrassement.",
      },
      {
        q: "Le nettoyage élimine-t-il les acariens et les allergènes ?",
        a: "Oui. L'aspiration à haute dépression combinée à l'injection-extraction retire les acariens, leurs déjections et la poussière fine logée dans le rembourrage. C'est la raison pour laquelle nous recommandons deux passages par an aux personnes allergiques.",
      },
      {
        q: "Combien de temps faut-il pour le séchage ?",
        a: "Entre 4h et 12h selon le tissu et la température de la pièce.",
      },
      {
        q: "Pouvez-vous enlever toutes les taches (vin, sang, café, urine) ?",
        a: "Nous traitons efficacement la grande majorité des taches incrustées, les auréoles et les mauvaises odeurs. Cependant, le résultat dépend de l'ancienneté de la tache et si elle a déjà été frottée avec de mauvais produits. Plus l'intervention est rapide, plus le taux de réussite est proche de 100%.",
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
      "Shampouinage, désinfection et traitement anti-taches de vos tapis et moquettes à Paris. Restauration des fibres en profondeur.",
    longDesc:
      "Prolongez la durée de vie de vos revêtements de sol grâce à nos protocoles de nettoyage à haute efficacité. Pour les moquettes de bureaux, de commerces ou de résidences, nous combinons l'aspiration industrielle, le brossage mécanique et l'injection-extraction pour éliminer le trafic, les taches tenaces et les odeurs incrustées. Pour vos tapis (synthétiques, laine, orientaux), nous adaptons notre méthode après examen de la fibre pour raviver les couleurs d'origine et éliminer acariens et allergènes, sans aucun risque d'altération.",
    keywords: [
      "nettoyage tapis Paris",
      "lavage moquette à domicile",
      "détachage tapis laine",
      "nettoyage moquette bureau",
    ],
    priceRange: "Tarif au m² ou forfait tapis",
    offers: [
      "Shampouinage de moquette",
      "Nettoyage de moquette par injection-extraction",
      "Nettoyage de tapis en laine et d'orient",
      "Traitement anti-taches",
      "Désodorisation des textiles de sol",
    ],
    tldr: "Le nettoyage de tapis et de moquettes combine aspiration industrielle, brossage mécanique et injection-extraction pour retirer le trafic incrusté, les taches et les odeurs. TGT Propreté intervient sur place à Paris et en Île-de-France, chez les particuliers comme en bureaux et commerces, avec un séchage de 4 à 8 heures.",
    relatedSlugs: [
      "nettoyage-canapes-fauteuils",
      "nettoyage-bureaux-entreprises",
      "nettoyage-approfondi",
      "nettoyage-coproprietes-immeubles",
    ],
    sections: [
      {
        h2: "Pourquoi faire nettoyer ses tapis et moquettes ?",
        intro:
          "Une moquette agit comme un filtre : elle piège la poussière, les allergènes et les particules apportées par les chaussures, ce qui améliore la qualité de l'air tant qu'elle est entretenue, et la dégrade dès qu'elle est saturée. Passé ce point, l'aspirateur ne retire plus que la surface. Les fibres se couchent sous le passage répété, la couleur s'assombrit dans les zones de trafic, et les odeurs s'installent durablement.",
        blocks: [
          {
            h3: "Le trafic, principale cause de dégradation",
            text: "Dans un bureau ou un commerce, les couloirs et les abords d'ascenseur s'assombrissent bien avant le reste de la surface. Ce marquage n'est pas une usure définitive : il s'agit dans la majorité des cas de particules abrasives incrustées entre les fibres, que l'extraction retire.",
          },
          {
            h3: "Un enjeu de durée de vie",
            text: "Un revêtement textile non entretenu se remplace au bout de quelques années. Traité une à deux fois par an, il tient nettement plus longtemps. Sur un plateau de bureaux, l'écart de coût entre l'entretien et le remplacement est considérable.",
          },
          {
            h3: "Les tapis anciens et les fibres naturelles",
            text: "Un tapis en laine, en soie ou d'origine orientale demande un examen de la fibre avant toute intervention. Ces pièces supportent mal les procédés standardisés et les températures élevées : le protocole se définit après examen, pas avant.",
          },
        ],
      },
      {
        h2: "Comment nettoyons-nous les tapis et les moquettes ?",
        intro:
          "Notre méthode enchaîne trois opérations complémentaires. Aucune ne suffit seule : c'est leur combinaison qui permet de retirer à la fois la poussière sèche et les salissures liées.",
        blocks: [
          {
            h3: "1. Aspiration industrielle",
            text: "Un aspirateur professionnel à haute dépression retire la poussière sèche et les particules abrasives logées à la base des fibres, celles qui coupent la trame à chaque pas et abrègent la durée de vie du revêtement.",
          },
          {
            h3: "2. Brossage mécanique",
            text: "La brosse redresse les fibres couchées par le passage et décolle les salissures accrochées à la trame, ce qu'une simple aspiration ne fait pas. C'est cette étape qui rend visible la différence sur les zones de trafic.",
          },
          {
            h3: "3. Injection-extraction",
            text: "Une solution nettoyante est injectée au cœur du textile puis immédiatement aspirée avec la saleté dissoute. Le revêtement ressort à peine humide, ce qui évite les auréoles de séchage et le risque de moisissure sous la moquette.",
          },
          {
            h3: "Traitements complémentaires",
            items: [
              "Prétraitement ciblé des taches selon leur nature",
              "Traitement désodorisant sur les odeurs installées",
              "Protection anti-taches sur demande, après nettoyage",
              "Traitement antimicrobien pour les espaces recevant du public",
            ],
          },
        ],
      },
      {
        h2: "Quels revêtements traitons-nous ?",
        blocks: [
          {
            h3: "Moquettes de bureaux et de commerces",
            text: "Dalles ou moquettes pleines, en fibre synthétique le plus souvent. C'est le cas le plus fréquent en entreprise, et celui qui se prête le mieux à l'injection-extraction. L'intervention se planifie en soirée ou le week-end pour une réouverture normale le lendemain.",
          },
          {
            h3: "Moquettes de résidences et de parties communes",
            text: "Paliers, couloirs et escaliers moquettés d'immeubles d'habitation. Ces surfaces cumulent trafic et apports extérieurs, et se traitent généralement une à deux fois par an en complément de l'entretien courant.",
          },
          {
            h3: "Tapis synthétiques",
            text: "Polypropylène, polyamide, polyester : ces fibres supportent bien l'injection-extraction et se traitent au forfait, à la pièce.",
          },
          {
            h3: "Tapis en laine et tapis d'orient",
            text: "Fibres naturelles sensibles à la température et à l'humidité, avec un risque de dégorgement des couleurs sur les pièces anciennes. Nous procédons après examen de la fibre et test de solidité des teintures, avec une pression et un dosage réduits.",
          },
        ],
      },
      {
        h2: "Combien de temps sèche une moquette après nettoyage ?",
        intro:
          "Comptez entre 4 et 8 heures selon la ventilation et la température des locaux. Nos extracteurs professionnels laissent le textile à peine humide, jamais détrempé : c'est ce qui rend possible un traitement en soirée dans des bureaux pour une réouverture le lendemain matin. En entreprise, le créneau le plus efficace reste le vendredi soir ou le samedi, qui laisse le week-end complet pour un séchage sans contrainte. Aérer les locaux et maintenir le chauffage en hiver réduit sensiblement le délai. Nous déconseillons de replacer le mobilier lourd tant que la moquette n'est pas parfaitement sèche.",
      },
      {
        h2: "Comment est calculé le prix du nettoyage de tapis et moquettes ?",
        intro:
          "Deux modes de tarification s'appliquent selon le type de revêtement. Pour les moquettes, le tarif se calcule au mètre carré sur la surface totale à traiter. Pour les tapis, nous fonctionnons au forfait à la pièce : envoyez-nous les dimensions et une photo, ou indiquez le modèle et la matière, et vous recevez un prix fixe avant l'intervention. Trois éléments font varier le chiffrage : la nature de la fibre, l'état de départ, et l'accessibilité de la surface. Une moquette de bureaux dégagée se traite plus vite qu'une surface encombrée de mobilier à déplacer, et un tapis en laine ancienne demande un protocole plus lent qu'un tapis synthétique récent.",
      },
    ],
    process: [
      {
        step: "Examen de la fibre",
        text: "Identification du revêtement et test de solidité des teintures sur une zone cachée, en particulier sur les fibres naturelles.",
      },
      {
        step: "Aspiration et brossage",
        text: "Aspiration industrielle à haute dépression, puis brossage mécanique pour redresser les fibres et décoller les salissures liées.",
      },
      {
        step: "Injection-extraction",
        text: "Prétraitement des taches, puis passage complet avec pression et dosage adaptés à la fibre.",
      },
      {
        step: "Séchage et remise en place",
        text: "Extraction renforcée pour limiter l'humidité résiduelle, consignes de ventilation, réutilisation sous 4 à 8 heures.",
      },
    ],
    faqs: [
      {
        q: "Faut-il déplacer les meubles avant votre intervention ?",
        a: "Nous déplaçons le mobilier léger dans le cadre de la prestation. Pour les meubles lourds, les armoires pleines et le matériel informatique, prévoyez un dégagement en amont : cela nous permet de traiter la totalité de la surface plutôt que de contourner les obstacles.",
      },
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
    offers: [
      "Intervention après dégât des eaux",
      "Aspiration motopompée des eaux résiduelles",
      "Traitement anti-moisissures",
      "Nettoyage des suies après incendie",
      "Désodorisation des locaux sinistrés",
    ],
    tldr: "Le nettoyage après sinistre consiste à assainir un local touché par un dégât des eaux, une inondation ou un début d'incendie : aspiration des eaux résiduelles, assèchement, traitement anti-moisissures, nettoyage des suies et désodorisation. TGT Propreté mobilise une équipe sous 24 à 48 heures à Paris et en Île-de-France, avec des documents transmissibles à votre assurance.",
    relatedSlugs: [
      "nettoyage-approfondi",
      "nettoyage-fin-de-chantier",
      "nettoyage-tapis-moquettes",
      "nettoyage-coproprietes-immeubles",
    ],
    sections: [
      {
        h2: "Pourquoi intervenir vite après un sinistre ?",
        intro:
          "Le délai est le facteur décisif. Après un dégât des eaux, les moisissures se développent en 24 à 72 heures sur les matériaux poreux restés humides : cloisons en plaque de plâtre, sous-couches de parquet, isolants, moquettes. Passé ce stade, le problème change de nature. On ne parle plus de nettoyage mais de dépose et de remplacement, avec un coût sans commune mesure.",
        blocks: [
          {
            h3: "Ce que produit l'attente",
            items: [
              "Développement de moisissures dans les cloisons et les isolants",
              "Gonflement irréversible des parquets et des panneaux de particules",
              "Odeurs qui s'installent durablement dans les textiles et les revêtements",
              "Fixation des suies acides sur les peintures et les surfaces métalliques",
            ],
          },
          {
            h3: "Le cas particulier des suies",
            text: "Après un début d'incendie, les suies sont chimiquement acides. Elles continuent d'attaquer les peintures, les métaux et les plastiques tant qu'elles ne sont pas retirées. Chaque jour d'attente augmente la part des surfaces qui devront être refaites plutôt que nettoyées.",
          },
        ],
      },
      {
        h2: "Que comprend notre intervention après sinistre ?",
        intro:
          "Nous procédons par étapes, du plus urgent au plus fin. L'objectif est d'arrêter la dégradation avant de traiter l'aspect.",
        blocks: [
          {
            h3: "Dégât des eaux et inondation",
            items: [
              "Aspiration motopompée des eaux résiduelles",
              "Retrait des revêtements textiles gorgés d'eau",
              "Assèchement des surfaces et des supports",
              "Traitement anti-moisissures des zones exposées",
              "Nettoyage et désinfection des sols, murs et mobiliers récupérables",
            ],
          },
          {
            h3: "Après incendie",
            items: [
              "Retrait des suies sur les murs, plafonds et surfaces",
              "Nettoyage des résidus de combustion sur les menuiseries et les métaux",
              "Traitement des textiles et revêtements imprégnés",
              "Désodorisation complète des volumes",
            ],
          },
          {
            h3: "Assainissement et finition",
            text: "Une fois les dommages traités, nous procédons au nettoyage complet du local pour qu'il redevienne utilisable : sols, sanitaires, cuisine, menuiseries et vitrages.",
          },
        ],
      },
      {
        h2: "Comment se passe la prise en charge par l'assurance ?",
        intro:
          "Notre rôle est de vous fournir les pièces dont votre assureur a besoin, dans la forme attendue. Après le diagnostic sur place, nous établissons un devis détaillé qui décrit poste par poste les opérations nécessaires : c'est ce document que vous transmettez à votre compagnie dans le cadre de votre déclaration de sinistre. À l'issue de l'intervention, nous vous remettons une facture acquittée, également transmissible. Nous vous recommandons de photographier les lieux avant notre passage, dès la découverte du sinistre : ces clichés constituent l'élément de preuve le plus solide pour l'expert. Nous ne nous substituons pas à votre assureur et n'intervenons pas dans la négociation de votre indemnisation : nous fournissons les documents, la décision de prise en charge relève de votre contrat.",
      },
      {
        h2: "Dans quel délai intervenez-vous ?",
        intro:
          "Nous traitons les demandes après sinistre en priorité absolue et mobilisons une équipe technique sous 24 à 48 heures à Paris et en Île-de-France. Pour ce type de demande, appelez-nous directement plutôt que de passer par le formulaire : le téléphone reste le canal le plus rapide, et un échange de quelques minutes nous permet d'évaluer les moyens à engager et de vous donner un créneau ferme. Si vous ne pouvez pas nous joindre immédiatement, quelques gestes utiles en attendant : coupez l'arrivée d'eau ou l'alimentation électrique de la zone si c'est possible sans risque, ventilez largement, et surtout ne jetez rien avant le passage de l'expert.",
      },
    ],
    process: [
      {
        step: "Appel et diagnostic",
        text: "Échange téléphonique immédiat pour évaluer l'ampleur, puis diagnostic sur place sous 24 à 48 heures.",
      },
      {
        step: "Devis détaillé",
        text: "Nous chiffrons poste par poste. Le document est directement transmissible à votre assurance.",
      },
      {
        step: "Assainissement",
        text: "Aspiration, assèchement, traitement anti-moisissures ou retrait des suies selon la nature du sinistre.",
      },
      {
        step: "Remise en état et facture",
        text: "Nettoyage complet du local et désodorisation, puis remise d'une facture acquittée pour votre dossier.",
      },
    ],
    faqs: [
      {
        q: "Comment puis-je obtenir le remboursement de l'intervention ?",
        a: "Après notre diagnostic, nous vous fournissons un devis détaillé et, à l'issue de l'intervention, une facture acquittée. Vous transmettez ces documents à votre compagnie d'assurance dans le cadre de votre déclaration de sinistre. La décision de prise en charge relève de votre contrat : nous fournissons les pièces, nous n'intervenons pas dans la négociation."
      },
      {
        q: "Que faire en attendant votre arrivée ?",
        a: "Coupez l'arrivée d'eau ou l'alimentation électrique de la zone si vous pouvez le faire sans risque, ventilez largement pour limiter l'humidité, et photographiez les lieux en l'état. Surtout, ne jetez rien avant le passage de l'expert : les biens endommagés font partie du dossier d'indemnisation.",
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
    offers: [
      "Ménage de rotation Airbnb",
      "Gestion du linge de location courte durée",
      "Réassort des consommables d'accueil",
      "Reporting photo avant et après",
      "Intervention 7j/7 week-end inclus",
    ],
    tldr: "Le ménage de conciergerie sécurise la rotation entre deux séjours en location courte durée : nettoyage de départ, désinfection, gestion du linge, réassort des consommables et reporting photo. TGT Propreté intervient 7 jours sur 7 à Paris et en Île-de-France, au forfait par typologie de logement, week-end inclus sans surcoût.",
    relatedSlugs: [
      "nettoyage-approfondi",
      "nettoyage-canapes-fauteuils",
      "repassage-rangement-domicile",
      "nettoyage-des-vitres",
    ],
    sections: [
      {
        h2: "Pourquoi la rotation en location courte durée est un métier à part",
        intro:
          "Une rotation Airbnb n'a rien d'un ménage ordinaire. Elle se joue dans une fenêtre de quelques heures entre le départ d'un voyageur et l'arrivée du suivant, sans possibilité de report, et le résultat est noté publiquement quelques heures plus tard. Une rotation manquée ne se rattrape pas : elle se traduit par un commentaire qui pèse sur votre classement pendant des mois.",
        blocks: [
          {
            h3: "La contrainte de la fenêtre critique",
            text: "Entre le check-out et le check-in, tout doit être fait : ménage complet, changement du linge, réassort, vérification de l'état du logement. Un retard n'est pas absorbable, ce qui exige une organisation dimensionnée pour les week-ends et les jours de forte rotation.",
          },
          {
            h3: "Un niveau d'exigence hôtelier",
            text: "Le voyageur compare votre logement à un hôtel, pas à une location classique. Les points qui déclenchent les commentaires négatifs sont toujours les mêmes : cheveux dans la douche, poussière sur les plinthes, four ou micro-ondes sales, linge froissé, odeur de renfermé.",
          },
          {
            h3: "La détection d'incidents",
            text: "L'agent de ménage est la seule personne à entrer dans le logement entre deux séjours. C'est donc lui qui constate une casse, une dégradation ou un dysfonctionnement. Encore faut-il que l'information vous remonte immédiatement et avec une preuve.",
          },
        ],
      },
      {
        h2: "Que comprend une prestation de conciergerie ?",
        intro:
          "Notre offre couvre l'ensemble de la rotation. Elle se décline en deux niveaux selon que vous nous confiez ou non la gestion du linge.",
        blocks: [
          {
            h3: "Ménage de départ",
            items: [
              "Nettoyage complet de toutes les pièces, sols, surfaces et menuiseries",
              "Désinfection de la salle de bain et des sanitaires",
              "Cuisine : plaques, four, micro-ondes, réfrigérateur vidé et nettoyé",
              "Vaisselle en attente, rangement et remise en configuration d'origine",
              "Vidage des poubelles et sortie des déchets",
              "Aération et traitement des odeurs",
            ],
          },
          {
            h3: "Gestion du linge",
            text: "Nous assurons le retrait du linge sale et la mise en place du linge propre, qu'il soit fourni par vos soins ou via notre système de location. Lits faits, serviettes disposées, linge de cuisine renouvelé.",
          },
          {
            h3: "Réassort des consommables",
            items: [
              "Papier toilette, essuie-tout et sacs poubelle",
              "Savon, gel douche et produits d'accueil",
              "Éponges, liquide vaisselle et produits d'entretien de base",
              "Café, thé et sucre selon votre standard d'accueil",
            ],
          },
          {
            h3: "Reporting photo avant et après",
            text: "Chaque rotation donne lieu à un reporting photographique systématique. Il documente l'état à l'arrivée de l'agent et le résultat après intervention, ce qui vous donne une preuve exploitable en cas de litige avec un voyageur et une visibilité sur l'état réel de votre parc.",
          },
        ],
      },
      {
        h2: "Comment fonctionne la tarification en conciergerie ?",
        intro:
          "Nous fonctionnons au forfait par typologie de logement, du studio au T4 et plus, plutôt qu'au temps passé. C'est le seul mode compatible avec une gestion locative : vous connaissez votre coût par rotation à l'avance et pouvez le répercuter dans votre calcul de rentabilité.",
        blocks: [
          {
            h3: "Deux niveaux de forfait",
            items: [
              "Forfait Light : ménage professionnel complet, hors gestion du linge",
              "Forfait Premium : ménage, gestion du linge et réassort des consommables",
            ],
          },
          {
            h3: "Ce qui est inclus sans supplément",
            text: "Les interventions du samedi et du dimanche sont comprises dans le forfait, sans majoration. C'est un point à vérifier systématiquement lorsque vous comparez des prestataires : le week-end concentre l'essentiel des rotations, et une majoration sur ces jours change complètement l'économie du contrat.",
          },
          {
            h3: "Volume et ajustement",
            text: "Les tarifs de base sont ajustés selon le volume annuel de rotations. Un parc de plusieurs logements ou une forte saisonnalité se négocient différemment d'un bien unique loué ponctuellement.",
          },
        ],
      },
      {
        h2: "Comment se passe la coordination au quotidien ?",
        intro:
          "Vous nous transmettez votre calendrier de réservations et nous nous chargeons du reste. Les rotations sont planifiées à l'avance sur la base de vos horaires de check-out et de check-in, et nous vous alertons dès qu'un enchaînement paraît trop serré pour être tenu correctement. En cas d'incident constaté dans le logement — casse, dégradation, équipement en panne — vous êtes prévenu immédiatement, photo à l'appui, avant l'arrivée du voyageur suivant. Cela vous laisse le temps de déclencher une réparation, d'ouvrir un litige sur la plateforme ou d'informer le voyageur. Pour les demandes urgentes ou les changements de dernière minute, nous faisons notre maximum en fonction de la charge du planning : plus votre calendrier nous parvient tôt, plus notre marge de manœuvre est grande.",
      },
    ],
    process: [
      {
        step: "Étude de votre parc",
        text: "Nous évaluons la typologie des logements, le volume de rotations et vos standards d'accueil, puis établissons les forfaits.",
      },
      {
        step: "Calendrier de rotations",
        text: "Vous nous transmettez vos réservations, nous planifions les interventions et signalons les enchaînements trop serrés.",
      },
      {
        step: "Rotation complète",
        text: "Ménage, linge, réassort et remise en configuration d'origine, dans la fenêtre entre check-out et check-in, 7 jours sur 7.",
      },
      {
        step: "Reporting photo",
        text: "Envoi systématique des photos avant et après, avec signalement immédiat de tout incident constaté.",
      },
    ],
    faqs: [
      {
        q: "Intervenez-vous le week-end sans majoration ?",
        a: "Oui. Les interventions du samedi et du dimanche sont comprises dans le forfait, sans surcoût. Le week-end concentrant l'essentiel des rotations en location courte durée, une majoration sur ces jours viderait le forfait de son intérêt.",
      },
      {
        q: "Que se passe-t-il si l'agent constate une dégradation ?",
        a: "Vous êtes prévenu immédiatement, photos à l'appui, avant l'arrivée du voyageur suivant. Le reporting photo systématique de chaque rotation vous donne une preuve exploitable si vous devez ouvrir un litige sur la plateforme.",
      },
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
    offers: [
      "Repassage à domicile",
      "Repassage de linge de maison",
      "Pliage et rangement du linge",
      "Organisation de dressing",
      "Traitement des tissus délicats",
    ],
    tldr: "Le service de repassage et rangement à domicile prend en charge le repassage des vêtements et du linge de maison, le pliage et le rangement méthodique des armoires et dressings. TGT Propreté intervient à Paris et en Île-de-France à partir de 23 € de l'heure, avec votre matériel de repassage.",
    relatedSlugs: [
      "nettoyage-approfondi",
      "prestations-sur-mesure-conciergerie",
      "nettoyage-canapes-fauteuils",
      "nettoyage-tapis-moquettes",
    ],
    sections: [
      {
        h2: "Que comprend le service de repassage à domicile ?",
        intro:
          "Notre intervenant prend en charge le linge propre et sec que vous avez préparé, le repasse, le plie et le range à sa place. Le service se déroule chez vous, sur le créneau que vous avez défini, sans que votre linge quitte le domicile.",
        blocks: [
          {
            h3: "Le linge traité",
            items: [
              "Chemises, chemisiers et hauts de ville",
              "Pantalons, jupes et robes",
              "Linge de maison : draps, housses, taies et nappes",
              "Torchons et serviettes de table",
            ],
          },
          {
            h3: "Pliage et rangement",
            text: "Le repassage ne s'arrête pas au fer. Le linge est plié selon vos habitudes et rangé à sa place dans les armoires et les dressings, ce qui évite la pile qui attend une semaine sur une chaise avant d'être rangée.",
          },
          {
            h3: "Ce qui n'est pas inclus",
            text: "Nous ne prenons pas en charge le lavage ni le séchage : le linge doit être propre et sec au moment de l'intervention. Nous ne traitons pas non plus les pièces relevant du nettoyage à sec, comme les costumes structurés ou les manteaux doublés.",
          },
        ],
      },
      {
        h2: "Traitez-vous les tissus délicats ?",
        intro:
          "Oui, et c'est précisément ce qui distingue un repassage professionnel. Nos intervenants sont formés à la lecture des étiquettes d'entretien et adaptent la température, la vapeur et l'usage de la pattemouille à chaque matière. La soie se repasse à basse température et sur l'envers, le lin demande au contraire une forte chaleur et une humidité importante, la laine se traite à la vapeur sans appui direct du fer, et les synthétiques brillent définitivement si la semelle est trop chaude. Les brûlures et les lustrages irréversibles viennent presque toujours d'une température appliquée sans vérification préalable de l'étiquette. Si vous avez des pièces auxquelles vous tenez particulièrement, signalez-les en début d'intervention : elles seront traitées avec une attention spécifique, voire écartées si l'étiquette exclut le repassage.",
      },
      {
        h2: "Comment organiser une intervention de repassage ?",
        intro:
          "Quelques points pratiques permettent de tirer le meilleur parti du temps réservé, puisque la prestation se facture à l'heure.",
        blocks: [
          {
            h3: "Le matériel reste le vôtre",
            text: "L'intervenant utilise votre centrale vapeur ou votre fer, ainsi que votre table à repasser. Un matériel en bon état et bien détartré fait une différence réelle sur le rendu comme sur la vitesse d'exécution.",
          },
          {
            h3: "Préparer le linge en amont",
            items: [
              "Linge propre, sec et sorti de la machine sans avoir séjourné en boule",
              "Panier accessible et espace dégagé pour installer la table",
              "Cintres disponibles pour les pièces à suspendre",
              "Pièces délicates ou fragiles signalées à part",
            ],
          },
          {
            h3: "Combiner avec du ménage",
            text: "Beaucoup de nos clients répartissent leur forfait horaire entre l'entretien du logement et le soin du linge sur une même intervention. C'est possible sans surcoût d'organisation : il suffit de nous indiquer la répartition souhaitée.",
          },
        ],
      },
      {
        h2: "En quoi consiste le rangement de dressing ?",
        intro:
          "Le rangement va au-delà du simple retour du linge dans l'armoire. Il s'agit de remettre de l'ordre dans un espace de rangement qui s'est progressivement désorganisé : regrouper les pièces par catégorie et par saison, uniformiser les pliages, dégager ce qui encombre les étagères hautes, rendre visible ce qui était enfoui au fond d'une pile. Le résultat tient dans le temps parce qu'il repose sur une logique simple : chaque type de vêtement a un emplacement, et le rangement suivant reproduit le même schéma. Cette prestation se combine naturellement avec le repassage, puisque le linge repassé est directement intégré au nouveau classement plutôt qu'empilé sur l'existant. Elle se justifie particulièrement lors d'un changement de saison, d'un emménagement ou après une période où l'entretien courant a pris du retard.",
      },
    ],
    process: [
      {
        step: "Définition du besoin",
        text: "Nous convenons du volume de linge, du créneau et de la répartition éventuelle entre repassage et ménage.",
      },
      {
        step: "Préparation",
        text: "Vous mettez à disposition le linge propre et sec, votre centrale vapeur et votre table à repasser.",
      },
      {
        step: "Repassage adapté",
        text: "Lecture des étiquettes et réglage de la température matière par matière, avec traitement à part des pièces signalées comme fragiles.",
      },
      {
        step: "Pliage et rangement",
        text: "Pliage selon vos habitudes et rangement à sa place dans l'armoire ou le dressing.",
      },
    ],
    faqs: [
      {
        q: "Que se passe-t-il si une pièce ne peut pas être repassée ?",
        a: "L'intervenant écarte les pièces dont l'étiquette exclut le repassage ou dont la matière présente un risque, et vous les signale plutôt que de prendre le risque d'une brûlure ou d'un lustrage irréversible. Les costumes structurés et les manteaux doublés relèvent du nettoyage à sec et ne sont pas traités à domicile.",
      },
      {
        q: "Proposez-vous le crédit d'impôt de 50 % (Services à la Personne) pour le repassage ?",
        a: "Malheureusement non. En tant qu'entreprise de nettoyage et de services multisectorielle (SARL), nous ne bénéficions pas de l'agrément Services à la Personne. Nos tarifs affichés sont transparents et incluent l'intégralité de nos charges sociales, nos assurances professionnelles ainsi que la garantie d'un travail rigoureux et encadré.",
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

  /* ══════════════════  IV. AJOUTS PLAN SEO — B2B  ══════════════════ */

  {
    slug: "nettoyage-commerces-boutiques",
    num: "13",
    pole: "b2b",
    bgImage: "/images/bg_nettoyage-vitres.jpeg",
    Icon: Store,
    title: "Commerces & Boutiques",
    shortDesc:
      "Entretien de points de vente à Paris : sols, vitrines, cabines d'essayage, réserves et sanitaires clients. Intervention avant ouverture.",
    longDesc:
      "TGT Propreté assure la propreté quotidienne des commerces et boutiques à Paris et en Île-de-France. Nous intervenons avant l'ouverture, entre 6h et 9h, pour livrer un point de vente prêt à accueillir vos clients : sols traités selon leur revêtement, vitrines et devantures sans trace, comptoirs et caisses désinfectés, cabines d'essayage remises en ordre, réserves et arrière-boutiques entretenues.",
    keywords: [
      "nettoyage commerces Paris",
      "nettoyage boutique Paris",
      "nettoyage magasin Paris",
      "entretien point de vente Paris",
      "nettoyage vitrine commerce",
    ],
    priceRange: "Dès 2,5€/m² • Sur Devis",
    offers: [
      "Nettoyage de commerce avant ouverture",
      "Nettoyage de vitrines et devantures",
      "Entretien de cabines d'essayage",
      "Nettoyage de réserves et arrière-boutiques",
      "Désinfection des caisses et points de contact",
    ],
    tldr: "Le nettoyage de commerce couvre l'entretien quotidien d'un point de vente avant son ouverture : sols, vitrines, comptoirs, cabines d'essayage et sanitaires clients. TGT Propreté intervient dès 6h à Paris et en Île-de-France, pour que la boutique soit prête à l'arrivée du premier client.",
    relatedSlugs: [
      "nettoyage-des-vitres",
      "nettoyage-restaurants-cuisines",
      "renovation-sols-decapage",
      "desinfection-locaux",
    ],
    sections: [
      {
        h2: "Pourquoi la propreté d'un commerce pèse sur le chiffre d'affaires",
        intro:
          "Un client se fait une opinion de votre boutique en quelques secondes, avant même d'avoir regardé un produit. Une vitrine marquée de traces, un sol collant à l'entrée ou une cabine d'essayage laissée en désordre pèsent immédiatement sur la perception de vos prix et de votre sérieux. C'est le seul poste de dépense dont l'effet se voit dès la porte franchie.",
        blocks: [
          {
            h3: "La vitrine est votre première vendeuse",
            text: "Elle est vue par tous les passants, pas seulement par ceux qui entrent. Une vitrine impeccable travaille pour vous en continu ; une vitrine sale annule l'effet du merchandising que vous y avez investi.",
          },
          {
            h3: "Les zones qui déclenchent les avis négatifs",
            text: "Dans le commerce, les commentaires en ligne portent presque toujours sur les mêmes points : les cabines d'essayage, les sanitaires clients et l'état du sol dans les allées. Ce sont ceux que nous traitons en priorité.",
          },
          {
            h3: "Une contrainte d'horaire non négociable",
            text: "Un commerce se nettoie quand il est vide. Nos équipes interviennent dès 6h du matin, avant l'arrivée du personnel et des clients, avec un temps de séchage compatible avec l'heure d'ouverture.",
          },
        ],
      },
      {
        h2: "Que comprend notre prestation pour un commerce ?",
        intro:
          "L'entretien courant couvre la surface de vente et les zones clients. Il se complète d'interventions périodiques sur les postes qui n'ont pas de sens en quotidien.",
        blocks: [
          {
            h3: "Entretien quotidien avant ouverture",
            items: [
              "Balayage et lavage des sols de la surface de vente",
              "Nettoyage des vitrines intérieures et extérieures",
              "Comptoirs, caisses, terminaux de paiement et points de contact",
              "Cabines d'essayage : miroirs, tabourets, portants, sol",
              "Sanitaires clients et personnel",
              "Vidage des corbeilles et évacuation des déchets",
            ],
          },
          {
            h3: "Réserves et arrière-boutiques",
            text: "Ces espaces échappent souvent à l'entretien parce qu'ils ne sont pas vus des clients. Ils concentrent pourtant la poussière et les cartons, et remontent dans la surface de vente à chaque réassort.",
            items: [
              "Balayage et lavage des sols de réserve",
              "Dépoussiérage des rayonnages et zones de stockage",
              "Entretien des espaces de pause du personnel",
            ],
          },
          {
            h3: "Interventions périodiques",
            items: [
              "Décapage et protection des sols durs",
              "Traitement des moquettes et tapis d'accueil par injection-extraction",
              "Nettoyage des enseignes et devantures accessibles",
              "Dépoussiérage en hauteur : luminaires, gaines, dessus de rayonnage",
            ],
          },
        ],
      },
      {
        h2: "Quels types de commerces traitons-nous ?",
        intro:
          "Chaque secteur a ses points sensibles, et le protocole s'adapte à la nature du point de vente plutôt qu'à sa seule surface.",
        blocks: [
          {
            h3: "Prêt-à-porter et boutiques de mode",
            text: "Cabines d'essayage, miroirs pleine hauteur, portants et sols clairs qui marquent vite. C'est le secteur où l'exigence visuelle est la plus forte.",
          },
          {
            h3: "Alimentation, épiceries et supérettes",
            text: "Sols soumis aux projections, meubles réfrigérés et zones de préparation qui appellent une désinfection régulière et des produits homologués pour le contact alimentaire.",
          },
          {
            h3: "Pharmacies et parapharmacies",
            text: "Comptoirs, points de contact et sanitaires demandent un niveau de désinfection proche du milieu médical, avec une clientèle souvent fragile.",
          },
          {
            h3: "Salons de coiffure et instituts",
            text: "Cheveux et produits capillaires saturent rapidement les sols et les siphons. Les bacs, fauteuils et postes de coupe demandent un traitement quotidien.",
          },
          {
            h3: "Galeries marchandes et centres commerciaux",
            text: "Ces implantations imposent des créneaux et des accès définis par le gestionnaire du centre. Nos équipes travaillent avec ces contraintes.",
          },
        ],
      },
      {
        h2: "Comment est calculé le prix du nettoyage d'un commerce ?",
        intro:
          "Notre tarif indicatif démarre à 2,5 € du mètre carré. Le chiffrage réel dépend de la surface de vente, de la fréquence retenue, du revêtement de sol et de la présence de zones spécifiques comme les cabines d'essayage ou une réserve importante. Un commerce ouvert sept jours sur sept avec un fort passage n'a pas les mêmes besoins qu'une boutique ouverte cinq jours. La visite préalable est gratuite et permet un chiffrage ferme : le matériel, les produits et l'encadrement de l'agent sont toujours inclus, seuls les consommables sanitaires font l'objet d'une option de gestion de stock.",
      },
    ],
    process: [
      {
        step: "Visite du point de vente",
        text: "Nous relevons la surface, les revêtements, les zones spécifiques et votre heure d'ouverture. Gratuit et sans engagement.",
      },
      {
        step: "Créneau avant ouverture",
        text: "Nous calons l'intervention sur un créneau matinal compatible avec votre ouverture et le temps de séchage des sols.",
      },
      {
        step: "Agent attitré",
        text: "Un agent référent connaît votre boutique, vos codes d'accès et vos points sensibles. Un remplaçant briefé prend le relais en cas d'absence.",
      },
      {
        step: "Contrôle qualité",
        text: "Passages de contrôle réguliers et référent unique joignable pour tout ajustement.",
      },
    ],
    faqs: [
      {
        q: "Pouvez-vous intervenir avant l'ouverture du commerce ?",
        a: "Oui, nous intervenons dès 6h du matin, avant l'arrivée du personnel et des clients. Le créneau est calé pour que les sols soient secs à l'heure d'ouverture.",
      },
      {
        q: "Nettoyez-vous aussi les vitrines extérieures ?",
        a: "Oui, le lavage des vitrines et devantures est inclus. Nous adaptons la méthode aux vitrophanies et marquages publicitaires, avec des produits non corrosifs qui préservent le vinyle.",
      },
      {
        q: "Intervenez-vous dans les commerces en galerie marchande ?",
        a: "Oui. Ces implantations imposent des créneaux et des procédures d'accès définis par le gestionnaire du centre : nos équipes sont habituées à travailler avec ces contraintes.",
      },
      {
        q: "Proposez-vous des contrats autres que quotidiens ?",
        a: "Oui, nous établissons des contrats quotidiens, hebdomadaires ou sur mesure selon votre activité et votre passage réel. Le coût au passage baisse à mesure que la fréquence augmente.",
      },
      {
        q: "Prenez-vous en charge les réserves et arrière-boutiques ?",
        a: "Oui, et nous le recommandons. Une réserve poussiéreuse remonte dans la surface de vente à chaque réassort : la traiter évite de refaire le travail côté client.",
      },
    ],
  },

  {
    slug: "nettoyage-agences-immobilieres",
    num: "14",
    pole: "b2b",
    bgImage: "/images/bg_nettoyage-approfondi.png",
    Icon: KeyRound,
    title: "Agences Immobilières & États des Lieux",
    shortDesc:
      "Remise en état de logements avant état des lieux, entre deux locataires ou avant mise en vente. Intervention sous 24 à 48h à Paris et en IDF.",
    longDesc:
      "Destiné aux agences immobilières, administrateurs de biens et bailleurs, ce service remet un logement en état de relocation ou de vente. Nous intervenons avant un état des lieux de sortie, entre deux locataires ou avant les visites : détartrage complet des pièces d'eau, dégraissage de la cuisine et de l'électroménager, lessivage des murs lavables et des plinthes, traitement des sols et des textiles, élimination des odeurs. Facturation possible à l'agence, au propriétaire ou au locataire.",
    keywords: [
      "nettoyage agence immobilière Paris",
      "nettoyage avant état des lieux Paris",
      "remise en état appartement Paris",
      "nettoyage fin de bail Paris",
      "nettoyage locatif Île-de-France",
    ],
    priceRange: "Au logement • Sur Devis",
    offers: [
      "Nettoyage avant état des lieux de sortie",
      "Remise en état entre deux locataires",
      "Nettoyage de fin de bail",
      "Préparation d'un bien avant visites",
      "Remise en état après travaux locatifs",
    ],
    tldr: "Le nettoyage pour agences immobilières remet un logement en état avant un état des lieux, une relocation ou une mise en vente. TGT Propreté intervient sous 24 à 48h à Paris et en Île-de-France, avec facturation à l'agence, au propriétaire ou au locataire selon votre organisation.",
    relatedSlugs: [
      "nettoyage-approfondi",
      "nettoyage-fin-de-chantier",
      "nettoyage-tapis-moquettes",
      "prestations-sur-mesure-conciergerie",
    ],
    sections: [
      {
        h2: "Pourquoi les agences externalisent la remise en état",
        intro:
          "Un logement qui n'est pas prêt bloque une transaction. Entre le départ d'un locataire et l'entrée du suivant, chaque jour de vacance est un loyer perdu, et un état des lieux qui tourne au litige mobilise votre équipe bien au-delà du coût d'un nettoyage. Externaliser transforme un aléa en poste budgété.",
        blocks: [
          {
            h3: "Le délai prime sur tout le reste",
            text: "Une date d'état des lieux ne se déplace pas facilement. Nous traitons ces demandes en priorité et intervenons sous 24 à 48h, avec une équipe dimensionnée pour tenir la date que vous nous donnez.",
          },
          {
            h3: "Un état neutre limite les litiges",
            text: "Un logement livré propre déplace la discussion sur les seules dégradations réelles. C'est ce qui rend l'état des lieux plus rapide et moins conflictuel, pour vous comme pour le locataire sortant.",
          },
          {
            h3: "Une facturation qui s'adapte à votre organisation",
            text: "Nous facturons directement l'agence, le propriétaire ou le locataire sortant selon le montage retenu, avec un devis en amont et une facture détaillée exploitable dans votre comptabilité.",
          },
        ],
      },
      {
        h2: "Que comprend une remise en état de logement ?",
        intro:
          "La prestation couvre l'intégralité du logement, y compris l'intérieur des rangements et des appareils. C'est la différence avec un ménage courant, qui ne descend pas à ce niveau de détail.",
        blocks: [
          {
            h3: "Cuisine",
            items: [
              "Dégraissage intérieur et extérieur du four, de la hotte et du micro-ondes",
              "Nettoyage des plaques, de la crédence et des joints",
              "Réfrigérateur vidé, dégivré si nécessaire et désinfecté",
              "Intérieur et extérieur des placards et tiroirs",
              "Détartrage de l'évier et de la robinetterie",
            ],
          },
          {
            h3: "Salle de bain et sanitaires",
            items: [
              "Détartrage complet de la douche, de la baignoire et des parois",
              "Traitement des joints, des silicones et des coulures",
              "Robinetteries, pommeaux, flexibles et bondes",
              "Cuvette, réservoir, abattant et pourtour des WC",
              "Miroirs, meubles vasque et rangements",
            ],
          },
          {
            h3: "Pièces de vie et chambres",
            items: [
              "Lessivage des plinthes, portes, huisseries et interrupteurs",
              "Nettoyage des vitres, châssis et rebords de fenêtre",
              "Traitement des sols selon le revêtement",
              "Intérieur des placards et des rangements intégrés",
              "Radiateurs, bouches de ventilation et volets accessibles",
            ],
          },
          {
            h3: "Traitements complémentaires",
            text: "Selon l'état du bien, nous ajoutons le traitement des moquettes par injection-extraction, la désodorisation en cas d'odeurs de tabac ou d'animaux, et la remise en état après travaux si une rénovation a précédé.",
          },
        ],
      },
      {
        h2: "Sous quel délai intervenez-vous ?",
        intro:
          "Nous mobilisons une équipe sous 24 à 48 heures sur Paris et l'Île-de-France, et nous traitons ces demandes en priorité parce qu'une date d'état des lieux ne se reporte pas. Le plus utile de votre côté est de nous prévenir dès que la date est connue, même si l'accès n'est pas encore possible : cela nous permet de réserver le créneau et de dimensionner l'équipe. Pour les biens de grande surface ou très dégradés, une visite préalable ou quelques photos nous suffisent à évaluer le temps nécessaire et à vous confirmer que la date est tenable. Nous préférons vous dire tout de suite qu'un délai est trop court plutôt que de livrer un travail incomplet la veille de l'état des lieux.",
      },
      {
        h2: "Comment est calculé le prix d'une remise en état ?",
        intro:
          "Nous chiffrons au logement, après description ou visite. Trois éléments déterminent le devis, et la surface n'est que le premier.",
        blocks: [
          {
            h3: "Les facteurs de chiffrage",
            items: [
              "La surface et le nombre de pièces d'eau, qui concentrent l'essentiel du temps",
              "L'état de départ : un logement entretenu se traite bien plus vite qu'un bien laissé plusieurs mois sans entretien",
              "La présence de moquettes, d'odeurs installées ou de traces de travaux",
              "L'accès : étage sans ascenseur, stationnement, disponibilité des clés",
            ],
          },
          {
            h3: "Ce que nous ne promettons pas",
            text: "Nous garantissons un nettoyage de qualité professionnelle, pas la restitution du dépôt de garantie. Celle-ci dépend de l'état global du bien et des dégradations constatées, qui relèvent de la réparation et non du nettoyage.",
          },
        ],
      },
    ],
    process: [
      {
        step: "Prise de rendez-vous",
        text: "Vous nous donnez la date de l'état des lieux et l'accès au bien. Nous confirmons le créneau et vous alertons si le délai est trop court.",
      },
      {
        step: "Devis au logement",
        text: "Chiffrage sur description ou après visite, selon la surface, l'état de départ et les traitements nécessaires.",
      },
      {
        step: "Remise en état",
        text: "Intervention complète du haut vers le bas, pièces d'eau et cuisine traitées en priorité, sols en dernier.",
      },
      {
        step: "Livraison et facturation",
        text: "Nous vous confirmons la fin d'intervention et facturons l'agence, le propriétaire ou le locataire selon votre organisation.",
      },
    ],
    faqs: [
      {
        q: "Pouvez-vous intervenir en urgence avant un état des lieux ?",
        a: "Oui, nous traitons ces demandes en priorité et mobilisons une équipe sous 24 à 48h. Prévenez-nous dès que la date est connue, même si l'accès au bien n'est pas encore possible : cela nous permet de réserver le créneau.",
      },
      {
        q: "Garantissez-vous la restitution du dépôt de garantie ?",
        a: "Non, et aucun prestataire sérieux ne peut le garantir. Nous garantissons un nettoyage de qualité professionnelle. La restitution dépend de l'état global du bien et des dégradations éventuelles, qui relèvent de la réparation, pas du nettoyage.",
      },
      {
        q: "Facturez-vous directement l'agence immobilière ?",
        a: "Oui. Nous facturons l'agence, le propriétaire ou le locataire sortant selon le montage que vous avez retenu, avec un devis en amont et une facture détaillée.",
      },
      {
        q: "Intervenez-vous sur des biens en vente et pas seulement en location ?",
        a: "Oui. Nous préparons également les biens avant les visites ou avant la remise des clés à l'acquéreur, avec le même niveau de remise en état.",
      },
      {
        q: "Que se passe-t-il si le logement est dans un état bien pire que prévu ?",
        a: "Nous vous appelons avant de commencer plutôt que de dépasser silencieusement le devis. Vous décidez alors d'étendre la prestation ou de prioriser certaines pièces dans le temps initialement prévu.",
      },
    ],
  },

  {
    slug: "desinfection-locaux",
    num: "15",
    pole: "b2b",
    bgImage: "/images/bg_CabinetsMédicaux&Cliniques.jpg",
    Icon: ShieldPlus,
    title: "Désinfection de Locaux",
    shortDesc:
      "Désinfection professionnelle de locaux à Paris : traitement des points de contact et désinfection de surface avec des produits virucides, bactéricides et fongicides.",
    longDesc:
      "La désinfection de locaux complète le nettoyage en éliminant les micro-organismes que le détergent seul ne détruit pas. TGT Propreté intervient dans les bureaux, commerces, cabinets et établissements recevant du public à Paris et en Île-de-France, avec des détergents-désinfectants professionnels répondant aux normes européennes virucides, bactéricides et fongicides. L'intervention peut être ponctuelle, après un épisode infectieux dans vos locaux, ou intégrée à un contrat d'entretien régulier.",
    keywords: [
      "désinfection locaux Paris",
      "désinfection bureaux Paris",
      "désinfection professionnelle Île-de-France",
      "traitement antimicrobien locaux",
      "désinfection locaux professionnels",
    ],
    priceRange: "Selon surface et protocole • Sur Devis",
    offers: [
      "Désinfection de surfaces professionnelles",
      "Traitement des points de contact",
      "Désinfection après épisode infectieux",
      "Désinfection de sanitaires et zones humides",
      "Désinfection intégrée à un contrat d'entretien",
    ],
    tldr: "La désinfection de locaux élimine les micro-organismes après un nettoyage préalable, à l'aide de produits virucides, bactéricides et fongicides aux normes européennes. TGT Propreté intervient à Paris et en Île-de-France, en prestation ponctuelle après un épisode infectieux ou intégrée à un contrat d'entretien régulier.",
    relatedSlugs: [
      "nettoyage-bureaux-entreprises",
      "nettoyage-cabinets-medicaux-cliniques",
      "nettoyage-commerces-boutiques",
      "nettoyage-apres-sinistre",
    ],
    sections: [
      {
        h2: "Quelle différence entre nettoyer et désinfecter ?",
        intro:
          "Nettoyer retire les salissures visibles et la matière organique. Désinfecter détruit les micro-organismes qui restent sur une surface déjà propre. Les deux opérations sont complémentaires et leur ordre n'est pas interchangeable : un désinfectant appliqué sur une surface encore sale est neutralisé par la matière organique avant d'avoir agi. C'est l'erreur la plus fréquente, et elle donne une fausse impression de sécurité.",
        blocks: [
          {
            h3: "La désinfection ne remplace pas le nettoyage",
            text: "Elle le complète. Un protocole efficace enchaîne toujours nettoyage puis désinfection, avec respect du temps de contact indiqué par le fabricant du produit. Un désinfectant essuyé trop tôt n'a pas fini d'agir.",
          },
          {
            h3: "Le temps de contact est la variable critique",
            text: "Chaque produit a une durée pendant laquelle il doit rester humide sur la surface pour être efficace. C'est ce paramètre, plus que le produit lui-même, qui distingue une désinfection réelle d'un simple passage de chiffon.",
          },
          {
            h3: "Toutes les surfaces ne se valent pas",
            text: "Les points de contact concentrent la transmission. Une désinfection utile cible d'abord ces surfaces, plutôt que de traiter uniformément des zones que personne ne touche.",
          },
        ],
      },
      {
        h2: "Que comprend notre prestation de désinfection ?",
        intro:
          "Nous intervenons après une phase de nettoyage, sur les surfaces et les zones où le risque de transmission est réel.",
        blocks: [
          {
            h3: "Points de contact",
            text: "C'est le cœur de la prestation, et la partie qui produit le plus d'effet par rapport au temps investi.",
            items: [
              "Poignées de porte, boutons d'ascenseur et interrupteurs",
              "Claviers, souris, téléphones et écrans partagés",
              "Rampes, mains courantes et barres d'appui",
              "Terminaux de paiement, distributeurs et machines à café",
              "Accoudoirs de sièges et tables de réunion",
            ],
          },
          {
            h3: "Sanitaires et zones humides",
            items: [
              "Cuvettes, réservoirs, abattants et commandes de chasse",
              "Lavabos, robinetteries et distributeurs",
              "Douches, siphons et sols antidérapants",
              "Traitement des joints et des zones de stagnation",
            ],
          },
          {
            h3: "Surfaces et espaces communs",
            items: [
              "Plans de travail, comptoirs et banques d'accueil",
              "Espaces de pause, réfectoires et vestiaires",
              "Salles de réunion et espaces d'attente",
              "Sols des zones à fort passage",
            ],
          },
        ],
      },
      {
        h2: "Quels produits utilisons-nous ?",
        intro:
          "Nous utilisons exclusivement des détergents-désinfectants professionnels répondant aux normes européennes en vigueur, virucides, bactéricides et fongicides. Ce sont les mêmes familles de produits que celles employées dans nos interventions en cabinet médical. Les fiches de données de sécurité sont disponibles sur demande, ce qui vous permet de les intégrer à votre document unique d'évaluation des risques ou de les présenter à votre médecine du travail. Ces produits sont sans danger pour les occupants dès lors que les temps de contact et les consignes d'aération sont respectés : c'est précisément ce que garantit une application professionnelle, là où un usage approximatif expose soit à une inefficacité, soit à une exposition inutile.",
      },
      {
        h2: "Dans quels cas faire désinfecter ses locaux ?",
        intro:
          "La désinfection se justifie dans deux situations distinctes, qui n'appellent pas la même organisation.",
        blocks: [
          {
            h3: "En intervention ponctuelle",
            items: [
              "Après un épisode infectieux avéré dans vos locaux",
              "À la reprise d'activité après une fermeture prolongée",
              "Avant l'installation dans des locaux repris d'un précédent occupant",
              "Après un sinistre ayant exposé les surfaces à des eaux usées",
            ],
          },
          {
            h3: "En prestation récurrente",
            text: "Intégrée au contrat d'entretien, la désinfection des points de contact devient une opération de routine plutôt qu'une réaction. C'est le mode retenu par la plupart de nos clients tertiaires, avec une fréquence calée sur l'effectif et le passage.",
          },
          {
            h3: "Les secteurs les plus concernés",
            items: [
              "Bureaux et open spaces à forte densité",
              "Cabinets médicaux et paramédicaux",
              "Commerces et établissements recevant du public",
              "Restauration et cuisines professionnelles",
              "Établissements accueillant des publics fragiles",
            ],
          },
        ],
      },
    ],
    process: [
      {
        step: "Évaluation des besoins",
        text: "Nous identifions les zones à risque, les points de contact et le niveau de traitement adapté à votre activité. Gratuit et sans engagement.",
      },
      {
        step: "Nettoyage préalable",
        text: "Retrait des salissures et de la matière organique. Sans cette étape, le désinfectant est neutralisé avant d'agir.",
      },
      {
        step: "Désinfection",
        text: "Application du produit avec respect strict du temps de contact, du plus propre vers le plus sale, matériel dédié par zone.",
      },
      {
        step: "Consignes de réoccupation",
        text: "Nous vous indiquons le délai d'aération et de réoccupation. Les fiches de données de sécurité sont fournies sur demande.",
      },
    ],
    faqs: [
      {
        q: "La désinfection remplace-t-elle le nettoyage classique ?",
        a: "Non. Elle le complète mais ne s'y substitue pas. Un désinfectant appliqué sur une surface encore sale est neutralisé par la matière organique avant d'avoir agi. Un protocole efficace enchaîne toujours nettoyage puis désinfection.",
      },
      {
        q: "Faut-il évacuer les locaux pendant l'intervention ?",
        a: "Pour la désinfection des surfaces et des points de contact, une évacuation n'est pas nécessaire : nous intervenons en dehors des heures d'occupation. Nous vous indiquons dans tous les cas le délai d'aération à respecter avant réoccupation normale.",
      },
      {
        q: "Vos produits sont-ils sans danger pour les occupants ?",
        a: "Oui, dès lors que les temps de contact et les consignes d'aération sont respectés. Nous utilisons des détergents-désinfectants professionnels aux normes européennes virucides, bactéricides et fongicides, et les fiches de données de sécurité sont disponibles sur demande.",
      },
      {
        q: "Pouvez-vous intervenir rapidement après un cas déclaré dans nos locaux ?",
        a: "Oui, nous traitons ces demandes en priorité. Appelez-nous directement plutôt que de passer par le formulaire : un échange de quelques minutes nous permet d'évaluer les zones à traiter et de vous donner un créneau ferme.",
      },
      {
        q: "La désinfection peut-elle être intégrée à notre contrat d'entretien ?",
        a: "Oui, et c'est le mode retenu par la plupart de nos clients tertiaires. La désinfection des points de contact devient une opération de routine intégrée aux passages réguliers, avec une fréquence calée sur votre effectif et votre passage.",
      },
    ],
  },

  {
    slug: "renovation-sols-decapage",
    num: "16",
    pole: "b2b",
    bgImage: "/images/bg_nettoyage-moquettes.png",
    Icon: Layers3,
    title: "Rénovation de Sols & Décapage",
    shortDesc:
      "Décapage, remise en éclat et protection des sols durs à Paris : thermoplastique, carrelage, marbre, pierre naturelle et béton. Traitement des halls et surfaces à fort passage.",
    longDesc:
      "Un sol dur ne s'use pas uniformément : il perd d'abord sa couche de protection, puis se raye et se ternit dans les zones de passage. Notre prestation de rénovation retire l'ancienne protection encrassée, remet la surface en éclat et applique une nouvelle protection adaptée au revêtement. Nous intervenons sur les halls d'immeuble, plateaux de bureaux, commerces et locaux d'activité à Paris et en Île-de-France, sur thermoplastique, carrelage, marbre, pierre naturelle et béton.",
    keywords: [
      "décapage sol Paris",
      "rénovation sol professionnel Paris",
      "cristallisation marbre Paris",
      "remise en éclat sol Île-de-France",
      "métallisation sol thermoplastique",
    ],
    priceRange: "Tarif au m² • Sur Devis (après visite)",
    offers: [
      "Décapage de sol thermoplastique",
      "Métallisation et protection de sol",
      "Cristallisation de marbre",
      "Remise en éclat de hall d'immeuble",
      "Lavage mécanisé de sols béton",
    ],
    tldr: "La rénovation de sol consiste à retirer l'ancienne protection encrassée, à remettre la surface en éclat puis à appliquer une nouvelle protection adaptée au revêtement. TGT Propreté traite thermoplastique, carrelage, marbre, pierre naturelle et béton à Paris et en Île-de-France, sur devis après visite.",
    relatedSlugs: [
      "nettoyage-coproprietes-immeubles",
      "nettoyage-tapis-moquettes",
      "nettoyage-bureaux-entreprises",
      "nettoyage-fin-de-chantier",
    ],
    sections: [
      {
        h2: "Pourquoi un sol dur se ternit malgré un entretien régulier",
        intro:
          "Un sol protégé porte une couche sacrificielle — émulsion, cire ou cristallisant — qui prend l'usure à la place du revêtement. Cette couche s'encrasse et se raye avec le passage, et aucun lavage courant ne la restaure : la laver revient à nettoyer une protection abîmée. Passé un certain seuil, la seule voie est de la retirer entièrement et d'en poser une neuve.",
        blocks: [
          {
            h3: "Le lavage ne récupère pas une protection usée",
            text: "C'est la confusion la plus fréquente. Une autolaveuse passée sur un sol dont l'émulsion est rayée redonne un aspect propre mais pas de brillance : les rayures diffusent la lumière quel que soit le niveau de propreté.",
          },
          {
            h3: "L'usure est concentrée, pas uniforme",
            text: "Sur un hall ou un plateau, les couloirs et les abords d'ascenseur s'usent bien plus vite que les périphéries. C'est ce contraste qui donne l'impression d'un sol sale alors qu'il est simplement dépoli localement.",
          },
          {
            h3: "Un arbitrage face au remplacement",
            text: "Rénover coûte une fraction du remplacement d'un revêtement et évite l'immobilisation des locaux que suppose une repose. Sur un marbre ou une pierre naturelle, la rénovation est le plus souvent la seule option raisonnable.",
          },
        ],
      },
      {
        h2: "Quels traitements appliquons-nous selon le revêtement ?",
        intro:
          "Chaque famille de sol appelle un procédé distinct. Appliquer le mauvais traitement dégrade le revêtement de façon irréversible : c'est pourquoi nous identifions systématiquement la nature du sol avant d'intervenir.",
        blocks: [
          {
            h3: "Thermoplastique, PVC et linoléum",
            text: "Décapage de l'ancienne émulsion, rinçage neutralisant, puis métallisation par application de couches successives d'émulsion protectrice. C'est le traitement le plus courant en tertiaire et en copropriété.",
            items: [
              "Décapage mécanique de l'ancienne protection",
              "Rinçage et neutralisation du support",
              "Application de deux à quatre couches d'émulsion",
              "Lustrage haute vitesse en finition",
            ],
          },
          {
            h3: "Marbre et pierre naturelle",
            text: "Cristallisation : un traitement chimique et mécanique qui durcit la surface de la pierre et lui rend sa brillance d'origine. Aucun produit acide n'est appliqué en amont, sous peine d'attaquer définitivement le calcaire.",
            items: [
              "Ponçage léger si la surface est rayée",
              "Cristallisation à la monobrosse",
              "Lustrage et protection",
            ],
          },
          {
            h3: "Carrelage et grès cérame",
            text: "Décapage en profondeur, détartrage des joints et remise en état des zones de stagnation. Sur les carrelages poreux, une imperméabilisation limite la reprise d'encrassement.",
          },
          {
            h3: "Béton et sols d'activité",
            text: "Lavage mécanisé sur grande surface, traitement des taches d'huile et d'hydrocarbures. Pour les entrepôts et locaux d'activité, le passage machine est la seule approche économiquement viable.",
          },
        ],
      },
      {
        h2: "Où cette prestation est-elle la plus utile ?",
        intro:
          "La rénovation de sol se justifie partout où la surface est vue et où l'usure est concentrée sur des zones de passage identifiables.",
        blocks: [
          {
            h3: "Halls d'immeuble et parties communes",
            text: "C'est la première chose que voient les résidents et les visiteurs, et souvent la seule surface noble d'une copropriété. Une remise en éclat de hall transforme la perception de l'immeuble entier pour un budget sans commune mesure avec des travaux.",
          },
          {
            h3: "Plateaux de bureaux et espaces d'accueil",
            text: "Les sols souples des plateaux tertiaires se traitent le plus souvent en dehors des heures ouvrées ou le week-end, ce qui laisse le temps de séchage nécessaire entre les couches.",
          },
          {
            h3: "Commerces et surfaces de vente",
            text: "Un sol remis en éclat change l'impression de gamme d'un point de vente. L'intervention se planifie sur une fermeture ou une nuit complète.",
          },
          {
            h3: "Locaux d'activité et entrepôts",
            text: "Lavage mécanisé et traitement des taches, sur des surfaces où seul le passage machine est réaliste.",
          },
        ],
      },
      {
        h2: "Comment se planifie une rénovation de sol ?",
        intro:
          "C'est une intervention lourde qui immobilise la surface, contrairement à un entretien courant. Le décapage, le rinçage et l'application des couches de protection demandent plusieurs heures, auxquelles s'ajoute un temps de séchage entre chaque couche pendant lequel le sol ne doit être ni foulé ni remis sous mobilier. Sur un plateau de bureaux ou un commerce, cela conduit presque toujours à intervenir un week-end ou sur une fermeture, ce qui laisse la marge nécessaire sans perturber l'activité. Dans une copropriété, un hall se traite en une intervention, avec un balisage permettant le passage des résidents. La visite préalable est indispensable : elle permet d'identifier le revêtement, de mesurer l'épaisseur de protection restante et de vérifier qu'un décapage est réalisable sans risque pour le support.",
      },
    ],
    process: [
      {
        step: "Visite et identification",
        text: "Nous identifions la nature du revêtement et l'état de la protection existante. Un traitement inadapté abîme un sol de façon irréversible.",
      },
      {
        step: "Décapage",
        text: "Retrait mécanique de l'ancienne protection encrassée, puis rinçage et neutralisation du support.",
      },
      {
        step: "Protection ou cristallisation",
        text: "Application des couches d'émulsion, ou cristallisation pour le marbre et la pierre, avec séchage entre chaque passe.",
      },
      {
        step: "Lustrage et remise en service",
        text: "Lustrage de finition, puis consignes de délai avant remise du mobilier et reprise du passage.",
      },
    ],
    faqs: [
      {
        q: "Quelle différence entre un décapage et un lavage classique ?",
        a: "Un lavage retire les salissures posées sur la protection du sol. Un décapage retire la protection elle-même, quand elle est trop rayée ou encrassée pour être récupérée, avant d'en appliquer une neuve. Aucun lavage ne redonne de la brillance à une émulsion usée.",
      },
      {
        q: "Peut-on cristalliser n'importe quel sol en pierre ?",
        a: "Non. La cristallisation s'applique aux pierres calcaires comme le marbre. Sur d'autres pierres naturelles, le traitement adapté diffère. C'est la raison pour laquelle nous identifions systématiquement le revêtement lors de la visite avant de proposer un procédé.",
      },
      {
        q: "Combien de temps les locaux sont-ils immobilisés ?",
        a: "Cela dépend de la surface et du nombre de couches, mais il faut compter le temps de séchage entre chaque passe, pendant lequel le sol ne doit être ni foulé ni remis sous mobilier. Sur un plateau ou un commerce, nous intervenons donc en général un week-end ou sur une fermeture.",
      },
      {
        q: "À quelle fréquence faut-il rénover un sol protégé ?",
        a: "Cela dépend entièrement du passage. Un hall d'immeuble ou un plateau à fort trafic demande une rénovation à intervalle plus rapproché qu'un local peu fréquenté. Un entretien courant adapté, avec des produits qui n'attaquent pas l'émulsion, allonge nettement le délai entre deux décapages.",
      },
      {
        q: "Intervenez-vous sur les parkings et sols béton ?",
        a: "Oui, avec un matériel de lavage mécanisé dimensionné à la surface, et un traitement spécifique des taches d'huile et d'hydrocarbures. C'est une prestation qui se planifie généralement une à deux fois par an.",
      },
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

/**
 * Services complémentaires à afficher en fin de page.
 * Utilise `relatedSlugs` quand il est renseigné, sinon retombe sur les premiers
 * services d'un autre pôle pour éviter de proposer quatre variantes du même besoin.
 */
export function getRelatedServices(service: Service, limit = 4): Service[] {
  const explicit = (service.relatedSlugs ?? [])
    .map(getServiceBySlug)
    .filter((s): s is Service => Boolean(s) && s!.slug !== service.slug);

  if (explicit.length >= limit) return explicit.slice(0, limit);

  const already = new Set([service.slug, ...explicit.map((s) => s.slug)]);
  const fillers = SERVICES.filter((s) => !already.has(s.slug));

  return [...explicit, ...fillers].slice(0, limit);
}