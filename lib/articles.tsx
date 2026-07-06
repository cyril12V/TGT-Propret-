import {
  Banknote,
  Building,
  Building2,
  Compass,
  Hammer,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  Icon: LucideIcon;
  author: string;
  publishedAt: string;
  readingTime: number;
  keywords: string[];
  content: ReactNode;
};

const proseClasses = "space-y-5 text-[16px] leading-relaxed text-[var(--color-muted)]";
const h2 = "mt-12 font-serif text-3xl font-light text-[var(--color-navy)] md:text-4xl";
const h3 = "mt-8 font-serif text-xl font-semibold text-[var(--color-navy)] md:text-2xl";
const list = "ml-5 list-disc space-y-2 text-[var(--color-muted)]";

export const ARTICLES: readonly Article[] = [
  {
    slug: "prix-nettoyage-bureaux-paris-2026",
    title: "Prix nettoyage bureaux Paris 2026 : fourchettes par m² et par fréquence",
    excerpt:
      "Combien coûte vraiment un contrat d'entretien de bureaux à Paris en 2026 ? Fourchettes par m², par fréquence, par arrondissement, et les pièges à éviter pour ne pas surpayer.",
    category: "Tarifs",
    Icon: TrendingUp,
    author: "Rabah Ammouche",
    publishedAt: "2026-05-08",
    readingTime: 8,
    keywords: [
      "prix nettoyage bureaux Paris",
      "tarif nettoyage bureaux Paris",
      "coût entretien bureaux Paris",
      "devis bureaux Paris",
    ],
    content: (
      <div className={proseClasses}>
        <p>
          Le coût d&apos;un contrat de nettoyage de bureaux à Paris reste l&apos;une
          des questions les plus floues pour les responsables des services
          généraux. Entre les forfaits opaques, les tarifs cassés des plateformes
          et les devis trop ronds, difficile de savoir ce qu&apos;on paie
          vraiment. Voici les vrais ordres de grandeur observés en 2026 sur le
          marché parisien tertiaire, et comment les utiliser pour cadrer un
          devis solide.
        </p>

        <h2 className={h2}>Le tarif par m² selon la fréquence</h2>
        <p>
          C&apos;est l&apos;indicateur le plus utile à Paris pour comparer des
          devis : le prix par m² par passage. Voici ce qu&apos;on observe pour
          un open-space classique (200 à 500 m²) :
        </p>
        <ul className={list}>
          <li>
            <strong>Quotidien (5 passages/sem)</strong> : 0,40 à 0,65 € HT/m²
            par passage. Soit ~ 100-160 €/mois pour 80 m².
          </li>
          <li>
            <strong>3 passages/semaine</strong> : 0,55 à 0,90 € HT/m². Le bon
            compromis pour la majorité des PME.
          </li>
          <li>
            <strong>2 passages/semaine</strong> : 0,70 à 1,10 € HT/m². Adapté
            aux structures &lt; 10 personnes.
          </li>
          <li>
            <strong>Hebdomadaire</strong> : 1,00 à 1,40 € HT/m². Le minimum pour
            garder un bureau présentable.
          </li>
          <li>
            <strong>Mensuel ou ponctuel</strong> : 1,50 à 2,20 € HT/m². Plus
            cher car le grand ménage prend plus de temps.
          </li>
        </ul>

        <h2 className={h2}>Variation par arrondissement</h2>
        <p>
          À Paris, le tarif au m² n&apos;est pas uniforme. Les arrondissements
          centraux (1<sup>er</sup>, 2<sup>e</sup>, 8<sup>e</sup>, 9<sup>e</sup>)
          coûtent typiquement 10 à 15 % plus cher que la moyenne, à cause de :
        </p>
        <ul className={list}>
          <li>
            Stationnement difficile voire impossible (les équipes prennent
            transport en commun + matériel transportable)
          </li>
          <li>
            Accès renforcés (PC sécurité, badges, gardiens) qui rallongent les
            temps d&apos;intervention
          </li>
          <li>
            Niveau d&apos;exigence visuel plus élevé (siège social, accueil
            clientèle)
          </li>
        </ul>
        <p>
          À l&apos;inverse, les 13<sup>e</sup>, 18<sup>e</sup>, 19<sup>e</sup>,{" "}
          20<sup>e</sup> offrent souvent des tarifs 5 à 10 % plus doux pour des
          prestations équivalentes.
        </p>

        <h2 className={h2}>Les coûts cachés à anticiper</h2>
        <p>
          Un devis sérieux mentionne explicitement ces éléments — sinon, c&apos;est
          un signal d&apos;alerte :
        </p>
        <h3 className={h3}>Fournitures consommables</h3>
        <p>
          Papier toilette, savon, essuie-tout : généralement 30 à 80 €/mois
          selon l&apos;effectif. Soit fournis par le prestataire (option), soit
          à votre charge. Précisez-le en amont.
        </p>

        <h3 className={h3}>Vitres extérieures</h3>
        <p>
          Rarement incluses dans le contrat d&apos;entretien. Comptez 4 à 8 €/m²
          de vitrage, 1 à 4 fois par an selon l&apos;exposition. Pour une
          vitrine commerciale, le passage hebdo est la norme.
        </p>

        <h3 className={h3}>Périodes exceptionnelles</h3>
        <p>
          Pont, fêtes, déménagement : prévoir un avenant ou des heures
          supplémentaires. Un bon prestataire vous propose un planning
          prévisionnel annuel dès la signature.
        </p>

        <h3 className={h3}>Augmentations annuelles</h3>
        <p>
          La majorité des contrats prévoit une indexation sur l&apos;indice du
          coût horaire main d&apos;œuvre (INSEE) : typiquement 2 à 4 %/an. Lire
          la clause attentivement.
        </p>

        <h2 className={h2}>Agence vs auto-entrepreneur : le vrai écart</h2>
        <p>
          Un auto-entrepreneur indépendant facture souvent 15-25 % moins cher
          qu&apos;une société de nettoyage structurée. Mais le calcul total
          inclut aussi :
        </p>
        <ul className={list}>
          <li>
            <strong>Remplacement en cas d&apos;absence</strong> : zéro chez
            l&apos;indépendant, garanti chez une société (continuité du service)
          </li>
          <li>
            <strong>Assurance RC pro</strong> : vérifiez impérativement —
            beaucoup d&apos;indépendants sont mal couverts
          </li>
          <li>
            <strong>Attestation URSSAF</strong> : obligatoire pour les
            copropriétés et entreprises sérieuses
          </li>
          <li>
            <strong>Encadrement et contrôle qualité</strong> : nul chez
            l&apos;indépendant
          </li>
        </ul>
        <p>
          Notre recommandation : pour les bureaux de moins de 50 m² avec une
          fréquence faible, l&apos;auto-entrepreneur peut suffire. Au-delà, la
          société structurée est presque toujours rentable.
        </p>

        <h2 className={h2}>Comment cadrer un devis solide</h2>
        <p>
          Demandez systématiquement un devis qui précise :
        </p>
        <ul className={list}>
          <li>Surface couverte (m² exact, pièce par pièce si pertinent)</li>
          <li>Détail des prestations (sols, sanitaires, vitres, mobilier, déchets)</li>
          <li>Fréquence des passages</li>
          <li>Horaires d&apos;intervention</li>
          <li>Tarif unitaire ET tarif mensuel</li>
          <li>Modalités de résiliation (préavis 2 mois est la norme)</li>
          <li>Référent unique côté prestataire</li>
        </ul>

        <p className="rounded-none border-l-[3px] border-[var(--color-gold)] bg-white px-6 py-5 font-serif text-xl italic leading-snug text-[var(--color-navy)]">
          « Un bon contrat de nettoyage de bureaux à Paris se mesure à la
          stabilité de l&apos;équipe et à la transparence du devis, pas
          uniquement au tarif au m². »
        </p>

        <h2 className={h2}>Pour aller plus loin</h2>
        <p>
          Vous voulez un devis détaillé sur vos bureaux à Paris ? Décrivez votre
          besoin sur notre{" "}
          <Link href="/devis" className="text-[var(--color-gold)] underline">
            page de demande de devis
          </Link>{" "}
          ou consultez{" "}
          <Link
            href="/services/entreprises-bureaux"
            className="text-[var(--color-gold)] underline"
          >
            notre page Nettoyage Bureaux
          </Link>
          {" "}pour le détail de nos prestations. Nous revenons sous 24h avec une
          proposition adaptée à votre arrondissement et à vos contraintes.
        </p>
      </div>
    ),
  },
  {
    slug: "nettoyage-copropriete-paris-guide-syndic",
    title: "Nettoyage copropriété Paris : le guide complet pour syndics",
    excerpt:
      "Obligations, tarifs, cadrage du contrat, gestion des déchets : tout ce qu'un syndic ou un conseil syndical parisien doit savoir avant de signer un contrat de nettoyage des parties communes.",
    category: "Syndic",
    Icon: Building,
    author: "Rabah Ammouche",
    publishedAt: "2026-04-26",
    readingTime: 9,
    keywords: [
      "nettoyage copropriété Paris",
      "guide syndic nettoyage",
      "entretien parties communes Paris",
      "contrat nettoyage immeuble",
    ],
    content: (
      <div className={proseClasses}>
        <p>
          Le nettoyage des parties communes est l&apos;un des postes les plus
          visibles du budget de copropriété. Mal cadré, il génère des
          réclamations de copropriétaires, des conflits avec le syndic et des
          tensions en assemblée générale. Bien cadré, il devient un argument
          pour la valorisation patrimoniale. Voici comment monter un contrat
          solide en 2026 à Paris.
        </p>

        <h2 className={h2}>Ce que la loi impose (et ce qu&apos;elle n&apos;impose pas)</h2>
        <p>
          Aucune loi française n&apos;impose une fréquence minimale de nettoyage
          des parties communes. Le règlement de copropriété peut en revanche
          fixer un cahier des charges précis, et certaines obligations sanitaires
          s&apos;appliquent (notamment pour les locaux poubelles). En pratique,
          les copropriétés parisiennes appliquent ces standards :
        </p>
        <ul className={list}>
          <li>
            <strong>Halls et entrée</strong> : 3 à 6 passages par semaine, idéalement
            quotidien pour les copropriétés &gt; 50 logements
          </li>
          <li>
            <strong>Escaliers</strong> : 1 à 3 passages par semaine selon la
            fréquentation et le standing
          </li>
          <li>
            <strong>Ascenseurs</strong> : nettoyage des cabines à chaque passage
            (essuyage des miroirs, dépoussiérage des boutons)
          </li>
          <li>
            <strong>Locaux poubelles</strong> : lavage hebdomadaire minimum,
            désinfection mensuelle, conformité au plan de prévention des
            nuisibles
          </li>
          <li>
            <strong>Parties communes extérieures</strong> : balayage et lavage
            réguliers selon la propreté visible
          </li>
        </ul>

        <h2 className={h2}>La sortie des containers : un détail majeur</h2>
        <p>
          À Paris, la collecte des déchets suit un calendrier précis par
          arrondissement (3 à 6 collectes/semaine selon le type de déchet et la
          zone). Une copropriété sans sortie/rentrée organisée se retrouve avec
          des containers sur le trottoir 24h/24, ce qui est source de PV
          municipaux et de tensions.
        </p>
        <p>
          La sortie des containers fait quasi-systématiquement partie du
          contrat de nettoyage. Coût additionnel : faible (15-30 € par cycle de
          collecte). Si votre prestataire actuel ne le fait pas, demandez le
          inclus.
        </p>

        <h2 className={h2}>Tarifs typiques par standing</h2>
        <p>
          À Paris en 2026, voici les fourchettes constatées par immeuble :
        </p>
        <h3 className={h3}>Petite copropriété standard (10-20 logements)</h3>
        <p>
          Hall + escaliers (3 passages/semaine) + sortie containers : 250 à 450
          €/mois HT.
        </p>

        <h3 className={h3}>Copropriété moyenne (30-50 logements)</h3>
        <p>
          Hall + escaliers (3-5 passages/semaine) + sortie containers + lavage
          local poubelle : 400 à 800 €/mois HT.
        </p>

        <h3 className={h3}>Grande copropriété ou standing supérieur</h3>
        <p>
          5-7 passages/semaine, hall avec marbre et bronze, miroirs muraux,
          ascenseur Otis vintage, locaux poubelles avec containers roulants :
          800 à 1 500 €/mois HT, parfois plus pour les très hauts standings.
        </p>

        <h3 className={h3}>Tour ou résidence avec parties communes étendues</h3>
        <p>
          Pour les opérations type Italie 13, Olympiades, Front de Seine : 1
          500 à 3 500 €/mois HT selon le nombre d&apos;étages et les services
          inclus (gardiennage, accueil).
        </p>

        <h2 className={h2}>Comment cadrer un contrat solide</h2>
        <p>
          Le contrat doit lister explicitement :
        </p>
        <ul className={list}>
          <li>
            <strong>Cahier des charges détaillé</strong> : liste exhaustive des
            zones et fréquences. Joindre un plan annoté est une bonne pratique.
          </li>
          <li>
            <strong>Horaires d&apos;intervention</strong> : matin tôt pour ne
            pas perturber les résidents
          </li>
          <li>
            <strong>Remplacement en cas d&apos;absence</strong> : modalités
            précises (délai de prévenance, équipe remplacement disponible)
          </li>
          <li>
            <strong>Cahier de liaison</strong> : présent dans le hall, signé à
            chaque passage, contresigné mensuellement par le gardien ou un
            membre du conseil syndical
          </li>
          <li>
            <strong>Périodicité du contrôle qualité</strong> : visite trimestrielle
            du dirigeant de l&apos;entreprise
          </li>
          <li>
            <strong>Modalités de résiliation</strong> : préavis 2 mois standard,
            résiliation pour faute possible
          </li>
          <li>
            <strong>Documents annexes</strong> : attestation URSSAF, attestation
            RC pro, RIB de l&apos;entreprise (pour prélèvement)
          </li>
        </ul>

        <h2 className={h2}>Erreurs fréquentes à éviter</h2>
        <h3 className={h3}>Choisir uniquement sur le prix</h3>
        <p>
          Un écart de 15 à 20 % sur le tarif mensuel correspond souvent à une
          différence de temps réel passé sur place. Une équipe qui doit boucler
          un immeuble en 30 minutes au lieu de 60 minutes ne fait pas le même
          travail.
        </p>

        <h3 className={h3}>Mélanger plusieurs petits prestataires</h3>
        <p>
          Tentation : un prestataire pour le hall, un autre pour les vitres, un
          troisième pour la désinfestation. Coût total souvent supérieur à un
          contrat unique consolidé, et fragmentation des responsabilités.
        </p>

        <h3 className={h3}>Ne pas vérifier l&apos;URSSAF</h3>
        <p>
          Le syndic engage la responsabilité de la copropriété si le prestataire
          n&apos;est pas à jour de ses cotisations. Toujours demander
          l&apos;attestation à jour (renouvelée chaque trimestre).
        </p>

        <h3 className={h3}>Sous-estimer la sortie des containers</h3>
        <p>
          Une copropriété qui laisse ses containers sur le trottoir s&apos;expose
          à des amendes municipales et au mécontentement des copropriétaires.
          Toujours intégrer la sortie/rentrée dans le contrat.
        </p>

        <h2 className={h2}>Ce que TGT Propreté propose aux syndics</h2>
        <p>
          Nous avons développé une offre dédiée aux syndics et conseils
          syndicaux parisiens, avec :
        </p>
        <ul className={list}>
          <li>Devis comparable et transparent (détail des passages, surfaces, fournitures)</li>
          <li>Référent unique : un interlocuteur dédié pour vos copropriétés</li>
          <li>
            Attestations à jour (URSSAF trimestrielle, RC pro, K-bis)
            transmises automatiquement au syndic
          </li>
          <li>Cahier de liaison physique présent dans chaque hall</li>
          <li>Visite trimestrielle du dirigeant pour contrôle qualité</li>
          <li>Engagement de continuité (équipe remplacement formée disponible)</li>
        </ul>

        <p className="rounded-none border-l-[3px] border-[var(--color-gold)] bg-white px-6 py-5 font-serif text-xl italic leading-snug text-[var(--color-navy)]">
          « Une copropriété parisienne bien entretenue, c&apos;est un syndic
          tranquille, des copropriétaires satisfaits, et une valeur patrimoniale
          préservée. »
        </p>

        <h2 className={h2}>Demander un devis</h2>
        <p>
          Pour un devis détaillé sur votre immeuble, consultez{" "}
          <Link
            href="/services/nettoyage-copropriete"
            className="text-[var(--color-gold)] underline"
          >
            notre page Nettoyage Copropriété
          </Link>{" "}
          ou{" "}
          <Link href="/devis" className="text-[var(--color-gold)] underline">
            envoyez-nous votre demande
          </Link>
          . Nous revenons sous 24h avec une proposition adaptée à votre
          arrondissement, votre nombre de logements et votre niveau d&apos;exigence.
        </p>
      </div>
    ),
  },
  {
    slug: "comment-choisir-entreprise-nettoyage-paris",
    title: "Comment choisir son entreprise de nettoyage à Paris ? Le guide 2026",
    excerpt:
      "Certifications, assurance, équipe interne ou sous-traitance, transparence du devis — voici les 7 critères concrets pour ne pas se tromper en choisissant son prestataire de nettoyage à Paris.",
    category: "Choisir",
    Icon: Compass,
    author: "Rabah Ammouche",
    publishedAt: "2026-05-04",
    readingTime: 7,
    keywords: [
      "comment choisir entreprise nettoyage Paris",
      "critères choix société nettoyage",
      "comparaison entreprises nettoyage Paris",
      "certifications nettoyage",
    ],
    content: (
      <div className={proseClasses}>
        <p>
          À Paris, on compte plusieurs centaines de sociétés de nettoyage —
          des grandes enseignes nationales aux artisans indépendants. Le marché
          est tellement fragmenté que faire le bon choix relève souvent du
          parcours du combattant. Voici les 7 critères que nous appliquerions
          nous-mêmes si nous étions clients à votre place.
        </p>

        <h2 className={h2}>1. La transparence du devis</h2>
        <p>
          Un devis sérieux liste précisément les prestations, la surface
          couverte, le matériel utilisé, la fréquence et le tarif unitaire (€/h
          ou €/m²). Méfiez-vous des forfaits ronds donnés au téléphone sans
          visite ni description. À Paris, où les configurations d&apos;immeubles
          varient énormément, un bon prestataire vous propose une visite
          préalable ou demande des photos détaillées avant de chiffrer.
        </p>

        <h2 className={h2}>2. L&apos;assurance responsabilité civile professionnelle</h2>
        <p>
          C&apos;est non-négociable. Une bonne entreprise de nettoyage est
          assurée en RC pro pour couvrir les dommages éventuels (parquet rayé,
          objet cassé, dégât des eaux). Demandez l&apos;attestation
          d&apos;assurance — un prestataire sérieux la fournit en 24h sans
          difficulté. Sans cette assurance, vous êtes seul en cas de pépin.
        </p>

        <h2 className={h2}>3. Équipe interne vs sous-traitance</h2>
        <p>
          Beaucoup d&apos;agences parisiennes sous-traitent à des
          indépendants. Ce n&apos;est pas mauvais en soi, mais cela complique
          la traçabilité, le contrôle qualité et la stabilité de l&apos;équipe
          qui intervient chez vous. Privilégiez les structures qui emploient
          directement leur personnel — vous aurez le même visage à chaque
          passage, ce qui change tout pour la confiance et le résultat.
        </p>

        <h2 className={h2}>4. Les références locales à Paris</h2>
        <p>
          Demandez 2 ou 3 références dans des contextes similaires au vôtre.
          Une société qui intervient déjà dans votre arrondissement —{" "}
          <Link href="/zones/paris" className="text-[var(--color-gold)] underline">
            voir nos zones d&apos;intervention à Paris
          </Link>{" "}
          — connaît les contraintes locales (accès, stationnement, codes
          d&apos;immeubles, normes de copropriétés). Un prestataire qui dit
          intervenir partout sans pouvoir citer trois clients précis dans Paris
          intra-muros est souvent moins crédible qu&apos;une structure spécialisée.
        </p>

        <h2 className={h2}>5. La conformité RGPD et les contrats clairs</h2>
        <p>
          Pour les bureaux et copropriétés, vérifiez que le prestataire vous
          fournit un contrat précisant les modalités de résiliation, la
          fréquence, les remplacements en cas d&apos;absence et la gestion des
          données (accès, badges, codes). Pour les copropriétés, vérifiez
          aussi qu&apos;il fournit l&apos;attestation URSSAF (équipe déclarée)
          — c&apos;est obligatoire pour que le syndic puisse payer en toute
          légalité.
        </p>

        <h2 className={h2}>6. Les produits utilisés</h2>
        <p>
          Demandez quels produits le prestataire utilise. Les sociétés
          sérieuses privilégient aujourd&apos;hui des produits écolabellisés
          (Ecolabel européen, Ecocert) pour limiter l&apos;exposition aux
          solvants agressifs. Pour les bureaux et les cabinets médicaux,
          c&apos;est un critère de santé au travail. Pour le résidentiel, c&apos;est
          surtout important s&apos;il y a des enfants, des animaux ou des
          personnes sensibles.
        </p>

        <h2 className={h2}>7. La réactivité et le sérieux dans les échanges</h2>
        <p>
          Un bon indicateur : le délai de réponse au premier contact. Un
          prestataire qui met 3 jours à répondre à votre demande de devis
          mettra probablement 3 jours à répondre à votre demande d&apos;urgence.
          Chez TGT Propreté, nous nous engageons sur un devis sous 24h pour
          toute demande envoyée à Paris ou en Île-de-France.
        </p>

        <p className="rounded-none border-l-[3px] border-[var(--color-gold)] bg-white px-6 py-5 font-serif text-xl italic leading-snug text-[var(--color-navy)]">
          « Une entreprise de nettoyage sérieuse, à Paris ou ailleurs, doit
          être transparente sur trois choses : ses tarifs, son équipe, et son
          assurance. »
        </p>

        <h2 className={h2}>En résumé</h2>
        <p>
          Choisir son entreprise de nettoyage à Paris, c&apos;est avant tout
          choisir une équipe qui vous correspond. Prenez le temps de la
          rencontrer, demandez le devis détaillé, vérifiez l&apos;assurance, et
          n&apos;hésitez pas à comparer 2 ou 3 propositions. Pour découvrir
          notre approche et nos zones d&apos;intervention,{" "}
          <Link href="/zones/paris" className="text-[var(--color-gold)] underline">
            consultez notre page Paris
          </Link>{" "}
          ou{" "}
          <Link href="/devis" className="text-[var(--color-gold)] underline">
            demandez un devis gratuit
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    slug: "cout-nettoyage-professionnel-ile-de-france",
    title: "Combien coûte un nettoyage professionnel en Île-de-France ?",
    excerpt:
      "Particuliers ou entreprises, voici les vraies fourchettes de prix d'un service de nettoyage en Île-de-France, et les critères qui font varier la facture.",
    category: "Tarifs",
    Icon: Banknote,
    author: "Rabah Ammouche",
    publishedAt: "2026-04-14",
    readingTime: 5,
    keywords: [
      "prix nettoyage Île-de-France",
      "tarif société de nettoyage Paris",
      "coût ménage entreprise",
      "devis nettoyage Bondy",
    ],
    content: (
      <div className={proseClasses}>
        <p>
          C&apos;est la première question que tout client nous pose : combien
          allez-vous nous coûter ? La réponse honnête, c&apos;est «&nbsp;ça
          dépend&nbsp;» — mais ce n&apos;est pas suffisant. Voici les vraies
          fourchettes pratiquées en 2026 en Île-de-France, et les critères qui
          font vraiment varier la facture.
        </p>

        <h2 className={h2}>Les fourchettes 2026 en Île-de-France</h2>
        <p>
          Pour un nettoyage régulier, les tarifs s&apos;expriment soit à
          l&apos;heure, soit au m². Voici ce qu&apos;on observe sur le marché
          francilien&nbsp;:
        </p>
        <ul className={list}>
          <li>
            <strong>Ménage à domicile</strong> : 22 à 35&nbsp;€&nbsp;TTC
            l&apos;heure selon la fréquence et la zone.
          </li>
          <li>
            <strong>Nettoyage de bureaux</strong> : 0,50 à 1,20&nbsp;€/m² par
            passage, dégressif au-delà de 200&nbsp;m².
          </li>
          <li>
            <strong>Nettoyage de fin de chantier</strong> : 4 à 9&nbsp;€/m²
            selon l&apos;état du logement et l&apos;ampleur des résidus.
          </li>
          <li>
            <strong>Nettoyage de vitres</strong> : 25 à 45&nbsp;€/h ou 4 à
            8&nbsp;€/m² de vitrage.
          </li>
        </ul>

        <h2 className={h2}>Les 5 critères qui font varier le devis</h2>
        <h3 className={h3}>1. La surface et l&apos;agencement</h3>
        <p>
          Un studio de 25&nbsp;m² avec une seule pièce de vie ne se nettoie pas
          au même rythme qu&apos;un T4 cloisonné. Plus il y a de pièces, de
          recoins et de meubles, plus le temps d&apos;intervention s&apos;allonge.
        </p>

        <h3 className={h3}>2. La fréquence d&apos;intervention</h3>
        <p>
          Plus vos passages sont rapprochés, moins chaque intervention coûte
          cher (la saleté ne s&apos;accumule pas). Un bureau nettoyé chaque jour
          coûte moins de 0,50&nbsp;€/m² par passage&nbsp;; un nettoyage mensuel
          peut grimper à 1&nbsp;€/m².
        </p>

        <h3 className={h3}>3. Le type de prestation</h3>
        <p>
          Un entretien courant (sols, sanitaires, poussières) coûte deux à trois
          fois moins qu&apos;un grand nettoyage avec vitres, dégraissage et
          désinfection complète.
        </p>

        <h3 className={h3}>4. La zone géographique</h3>
        <p>
          Paris intra-muros est plus cher (stationnement, accès difficile),
          tandis que la grande couronne propose des tarifs plus doux. Une
          société basée à Bondy, comme TGT Propreté, mutualise les déplacements
          dans le 93 pour optimiser les coûts.
        </p>

        <h3 className={h3}>5. Les contraintes spécifiques</h3>
        <p>
          Horaires décalés, intervention le week-end, hauteurs sous plafond
          importantes, matériaux fragiles… chaque contrainte se traduit par un
          surcoût explicite sur le devis.
        </p>

        <h2 className={h2}>Comment obtenir un devis fiable&nbsp;?</h2>
        <p>
          Un devis sérieux se base sur une visite ou des photos précises de
          l&apos;espace concerné. Méfiez-vous des forfaits trop ronds donnés au
          téléphone&nbsp;: ils cachent souvent des surfacturations en cas de
          dépassement. Chez TGT Propreté, nous adressons un devis détaillé sous
          24h après échange téléphonique, gratuit et sans engagement.
        </p>

        <p className="rounded-none border-l-[3px] border-[var(--color-gold)] bg-white px-6 py-5 font-serif text-xl italic leading-snug text-[var(--color-navy)]">
          « Un bon devis nettoyage doit lister précisément les prestations, la
          fréquence, le matériel utilisé et les zones couvertes. »
        </p>
      </div>
    ),
  },
  {
    slug: "frequence-nettoyage-bureaux-entreprise",
    title: "Nettoyage de bureaux : quelle fréquence choisir pour son entreprise ?",
    excerpt:
      "Quotidien, hebdomadaire ou mensuel ? Le bon rythme de nettoyage dépend de l'activité, de l'effectif et du niveau d'image attendu. Notre guide pour trancher.",
    category: "Entreprises",
    Icon: Building2,
    author: "Rabah Ammouche",
    publishedAt: "2026-03-22",
    readingTime: 4,
    keywords: [
      "fréquence nettoyage bureaux",
      "entretien locaux entreprise",
      "contrat de nettoyage",
      "société nettoyage Paris",
    ],
    content: (
      <div className={proseClasses}>
        <p>
          Choisir la bonne fréquence de nettoyage pour ses bureaux, c&apos;est
          arbitrer entre coût, image renvoyée aux clients et confort des
          collaborateurs. Voici nos repères pour faire le bon choix.
        </p>

        <h2 className={h2}>Nettoyage quotidien&nbsp;: pour qui&nbsp;?</h2>
        <p>
          Recommandé pour les structures recevant du public quotidiennement
          (cabinets médicaux, agences commerciales, espaces de coworking) et
          pour les bureaux de plus de 20 collaborateurs. Le passage tous les
          jours permet de maintenir un niveau d&apos;hygiène irréprochable sur
          les sanitaires, les espaces communs et les postes de travail.
        </p>

        <h2 className={h2}>Nettoyage 2 ou 3 fois par semaine</h2>
        <p>
          Le compromis le plus fréquent pour les PME de 5 à 20 personnes. Il
          permet de garder des bureaux propres en lissant le coût&nbsp;: deux
          passages par semaine couvrent l&apos;essentiel (sols, sanitaires,
          déchets, postes de travail) sans alourdir le budget.
        </p>

        <h2 className={h2}>Nettoyage hebdomadaire ou bimensuel</h2>
        <p>
          Adapté aux très petites structures, aux bureaux occupés
          ponctuellement ou aux activités générant peu de salissure. Attention
          toutefois&nbsp;: au-delà d&apos;une semaine sans passage, la poussière
          s&apos;installe durablement et le coût des grands ménages compense
          souvent les économies réalisées sur la fréquence.
        </p>

        <h2 className={h2}>Les paramètres à prendre en compte</h2>
        <ul className={list}>
          <li>
            <strong>Effectif</strong> : plus il y a de personnes, plus il faut
            passer souvent.
          </li>
          <li>
            <strong>Type d&apos;activité</strong> : restauration, médical et
            artisanat exigent un nettoyage quotidien.
          </li>
          <li>
            <strong>Accueil de clients</strong> : si votre image en dépend, ne
            descendez pas sous 2 passages par semaine.
          </li>
          <li>
            <strong>Surface</strong> : un open-space de 300&nbsp;m² ne se
            traite pas comme 3 bureaux de 30&nbsp;m².
          </li>
        </ul>

        <h2 className={h2}>Notre recommandation</h2>
        <p>
          Démarrez avec une fréquence légèrement supérieure à celle que vous
          envisagez (par exemple, 3x/semaine au lieu de 2). Vous ajusterez après
          deux mois, quand vous aurez observé le rythme réel d&apos;encrassement.
          Cette méthode évite le piège classique du «&nbsp;on rattrapera plus
          tard&nbsp;» qui finit en grand nettoyage coûteux.
        </p>
      </div>
    ),
  },
  {
    slug: "checklist-nettoyage-fin-de-chantier",
    title: "Fin de chantier : la checklist pour un nettoyage irréprochable",
    excerpt:
      "Plâtre, peinture, poussière de ponçage, traces de ciment… 12 points à vérifier pour livrer un logement vraiment propre après les travaux.",
    category: "Chantier",
    Icon: Hammer,
    author: "Rabah Ammouche",
    publishedAt: "2026-02-08",
    readingTime: 6,
    keywords: [
      "nettoyage fin de chantier",
      "checklist après travaux",
      "remise en état logement",
      "nettoyage rénovation",
    ],
    content: (
      <div className={proseClasses}>
        <p>
          Le nettoyage de fin de chantier, c&apos;est l&apos;étape qui
          transforme un appartement «&nbsp;techniquement fini&nbsp;» en
          logement vraiment habitable. Plâtre, peinture, poussière de
          ponçage, traces de ciment&nbsp;: voici la checklist complète que
          nous suivons sur chaque intervention.
        </p>

        <h2 className={h2}>Avant l&apos;intervention</h2>
        <ul className={list}>
          <li>
            Vérifier que tous les corps de métier sont passés (plombier,
            électricien, peintre).
          </li>
          <li>
            Évacuer les gros gravats — un nettoyage de chantier n&apos;est pas
            une démolition.
          </li>
          <li>
            Couper l&apos;électricité en cas de nettoyage humide sur des
            installations récentes.
          </li>
        </ul>

        <h2 className={h2}>Les 12 points à traiter</h2>

        <h3 className={h3}>Sols</h3>
        <ul className={list}>
          <li>Aspiration complète à l&apos;aspirateur professionnel HEPA.</li>
          <li>Décapage des traces de peinture et de ciment au grattoir doux.</li>
          <li>Lavage à l&apos;eau additionnée d&apos;un produit adapté au revêtement.</li>
        </ul>

        <h3 className={h3}>Murs et plafonds</h3>
        <ul className={list}>
          <li>Dépoussiérage des traces de plâtre et de peinture sèche.</li>
          <li>Nettoyage des interrupteurs, prises, plinthes.</li>
          <li>Décollage soigneux des protections (rubans de peintre, films).</li>
        </ul>

        <h3 className={h3}>Vitres et menuiseries</h3>
        <ul className={list}>
          <li>Nettoyage des vitres intérieures et extérieures sans traces.</li>
          <li>Décollage des étiquettes et adhésifs sur les vitrages neufs.</li>
          <li>Nettoyage des rails, poignées et joints de fenêtres.</li>
        </ul>

        <h3 className={h3}>Cuisine et sanitaires</h3>
        <ul className={list}>
          <li>Nettoyage complet des éviers, baignoires, WC, robinetterie.</li>
          <li>Détartrage léger des surfaces neuves.</li>
          <li>Désinfection des points de contact.</li>
        </ul>

        <h2 className={h2}>Le contrôle qualité final</h2>
        <p>
          Avant de partir, nous effectuons systématiquement une visite de
          contrôle pièce par pièce avec le maître d&apos;ouvrage ou son
          représentant. Les éventuelles reprises sont faites sur place, sans
          surcoût. C&apos;est la garantie que le logement est livré
          impeccable, prêt pour l&apos;état des lieux ou l&apos;emménagement.
        </p>

        <p className="rounded-none border-l-[3px] border-[var(--color-gold)] bg-white px-6 py-5 font-serif text-xl italic leading-snug text-[var(--color-navy)]">
          « Un chantier propre, c&apos;est un client tranquille et une
          caution récupérée. »
        </p>
      </div>
    ),
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatPublishedDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
