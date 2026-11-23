import type { Metadata } from "next";
import {
  CONTACT,
  GOOGLE_MAPS_URL,
  GOOGLE_REVIEWS,
  OPENING_HOURS,
  SITE,
  formatRating,
} from "@/lib/constants";
import { ZONES } from "@/lib/zones";
import { PARIS_ARRONDISSEMENTS, ordinalFr } from "@/lib/zones-paris";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  /**
   * Conservé pour documenter l'intention de chaque page, mais **jamais émis**
   * en `<meta name="keywords">` : la balise est ignorée par Google depuis 2009
   * et reste lisible par les concurrents.
   */
  keywords?: readonly string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? `${SITE.url}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Note Google affichée aux visiteurs — AFFICHAGE SEUL.
 *
 * Elle n'est plus émise en `aggregateRating` dans le JSON-LD : Google
 * n'affiche pas d'étoiles pour une note qu'une entreprise publie sur
 * elle-même, donc la balise ne pouvait rien rapporter, alors qu'une note
 * déclarée qui diverge de la fiche Google expose à une pénalité pour
 * données structurées trompeuses. Les étoiles des résultats de recherche
 * locaux viennent de la fiche Business Profile, pas d'ici.
 */
export function googleRatingBadge() {
  if (!GOOGLE_REVIEWS) return null;
  return {
    ratingValue: formatRating(GOOGLE_REVIEWS.ratingValue),
    reviewCount: GOOGLE_REVIEWS.reviewCount,
    url: GOOGLE_REVIEWS.url,
  };
}

/**
 * Nœud `WebSite`, référencé par `isPartOf` dans chaque `WebPage`.
 *
 * Il était cité sous `#website` sans être défini nulle part : toutes les
 * pages pointaient vers une entité inexistante.
 */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE.url}#business` },
  };
}

/**
 * Zones desservies déclarées à Google.
 *
 * Composée depuis les mêmes sources que les pages du site : les 20
 * arrondissements, les 21 communes et départements qui ont une page dédiée.
 * Une zone déclarée ici sans page derrière serait une affirmation que rien
 * ne soutient.
 */
function areaServedList() {
  const arrondissements = PARIS_ARRONDISSEMENTS.map((a) => ({
    "@type": "City" as const,
    name: `Paris ${ordinalFr(a.number)} arrondissement`,
    postalCode: a.postalCode,
  }));

  const communes = ZONES.filter((z) => !z.isDepartment).map((z) => ({
    "@type": "City" as const,
    name: z.name,
    postalCode: z.postalCode,
  }));

  const departements = ZONES.filter((z) => z.isDepartment).map((z) => ({
    "@type": "AdministrativeArea" as const,
    name: z.department,
  }));

  return [
    { "@type": "City" as const, name: "Paris" },
    ...arrondissements,
    ...communes,
    ...departements,
    { "@type": "AdministrativeArea" as const, name: "Île-de-France" },
  ];
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    image: `${SITE.url}/images/logo.png`,
    foundingDate: String(SITE.foundingYear),
    telephone: CONTACT.phones[0]?.tel,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      postalCode: CONTACT.address.postalCode,
      addressRegion: CONTACT.address.region,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8999832,
      longitude: 2.4817104,
    },
    hasMap: GOOGLE_MAPS_URL,
    areaServed: areaServedList(),
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...OPENING_HOURS.days],
        opens: OPENING_HOURS.opens,
        closes: OPENING_HOURS.closes,
      },
    ],
    // Ni `aggregateRating` ni `Review` : voir `googleRatingBadge()`. Les avis
    // affiches sur le site viennent de l'API Google Places, la fiche Business
    // Profile reste la seule source de notes pour les moteurs.
    sameAs: [
      ...CONTACT.socials.map((s) => s.url),
      GOOGLE_MAPS_URL,
    ],
  };
}

type ServiceJsonLdInput = {
  title: string;
  longDesc: string;
  slug: string;
  priceRange?: string;
  /** Prestations détaillées → `hasOfferCatalog`, exploité par les moteurs de réponse. */
  offers?: readonly string[];
};

export function serviceJsonLd(service: ServiceJsonLdInput) {
  const priceOffer = service.priceRange
    ? {
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            description: service.priceRange,
            priceCurrency: "EUR",
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "City", name: "Paris" },
        },
      }
    : {};

  const offerCatalog =
    service.offers && service.offers.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Prestations — ${service.title}`,
            itemListElement: service.offers.map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }
      : {};

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${service.slug}#service`,
    // Le libellé du site est court pour l'interface ; le JSON-LD porte la
    // formulation complète avec la qualification géographique.
    name: `${service.title} à Paris et en Île-de-France`,
    description: service.longDesc,
    serviceType: service.title,
    url: `${SITE.url}/services/${service.slug}`,
    provider: { "@id": `${SITE.url}#business` },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    ...priceOffer,
    ...offerCatalog,
  };
}

type ZoneServiceJsonLdInput = {
  name: string;
  postalCode: string;
  department: string;
  slug: string;
  description: string;
  /** Département entier : AdministrativeArea au lieu de City. */
  isDepartment?: boolean;
};

/**
 * `Service` rattaché à une commune précise.
 * Complète le `CleaningService` global du layout en déclarant explicitement
 * la zone desservie, ce que les pages villes n'émettaient pas jusqu'ici.
 */
export function zoneServiceJsonLd(zone: ZoneServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Nettoyage professionnel à ${zone.name}`,
    description: zone.description,
    serviceType: "Nettoyage professionnel",
    url: `${SITE.url}/zones/${zone.slug}`,
    provider: { "@id": `${SITE.url}#business` },
    areaServed: zone.isDepartment
      ? {
          "@type": "AdministrativeArea",
          name: zone.department,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Île-de-France",
          },
        }
      : {
          "@type": "City",
          name: zone.name,
          postalCode: zone.postalCode,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: zone.department,
          },
        },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}

export function webPageJsonLd(input: {
  title: string;
  description: string;
  path: string;
  speakableSelectors?: string[];
}) {
  const url = `${SITE.url}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": `${SITE.url}#website` },
    about: { "@id": `${SITE.url}#business` },
    inLanguage: "fr-FR",
    ...(input.speakableSelectors && input.speakableSelectors.length > 0
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: input.speakableSelectors,
          },
        }
      : {}),
  };
}

export function articleJsonLd(article: {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  publishedAt: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    keywords: article.keywords.join(", "),
    url: `${SITE.url}/blog/${article.slug}`,
    image: `${SITE.url}/opengraph-image`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: "Chargé d'Affaire TGT Propreté",
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${article.slug}`,
    },
  };
}
