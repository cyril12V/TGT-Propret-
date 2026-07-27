import type { Metadata } from "next";
import { CONTACT, GOOGLE_REVIEWS, SITE, TESTIMONIALS } from "@/lib/constants";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: readonly string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  keywords,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? `${SITE.url}/opengraph-image`;

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
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

const PARIS_ARRONDISSEMENT_NUMBERS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;

/**
 * Note agrégée émise uniquement si `GOOGLE_REVIEWS` contient de vraies données
 * de fiche Google Business Profile.
 *
 * Les `TESTIMONIALS` du site sont des témoignages éditoriaux, pas des avis
 * collectés et vérifiables : les agréger en `AggregateRating` expose à une
 * pénalité pour données structurées trompeuses. On préfère ne rien émettre.
 */
export function aggregateRatingFromTestimonials() {
  if (!GOOGLE_REVIEWS) return null;
  return {
    "@type": "AggregateRating" as const,
    ratingValue: GOOGLE_REVIEWS.ratingValue.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    reviewCount: GOOGLE_REVIEWS.reviewCount,
  };
}

export function localBusinessJsonLd() {
  const rating = aggregateRatingFromTestimonials();

  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    alternateName: SITE.brand,
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
    hasMap:
      "https://www.google.com/maps/place/TGT+propret%C3%A9/@48.8999832,2.4817104,17z/data=!3m1!4b1!4m6!3m5!1s0x47e61332850736f1:0x6906ec8716523c4f!8m2!3d48.8999832!4d2.4817104",
    areaServed: [
      { "@type": "City", name: "Paris" },
      ...PARIS_ARRONDISSEMENT_NUMBERS.map((n) => ({
        "@type": "City" as const,
        name: `Paris ${n}e arrondissement`,
        postalCode: `750${String(n).padStart(2, "0")}`,
      })),
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "City", name: "Bondy" },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    ...(rating ? { aggregateRating: rating } : {}),
    // Les témoignages du site ne sont pas balisés en `Review` : Google considère
    // comme trompeurs les avis qu'une entreprise publie sur elle-même. Ils restent
    // affichés pour les visiteurs, ils ne sont simplement pas déclarés en JSON-LD.
    sameAs: [
      ...CONTACT.socials.map((s) => s.url),
      ...(GOOGLE_REVIEWS ? [GOOGLE_REVIEWS.url] : []),
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
      name: SITE.brand,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${article.slug}`,
    },
  };
}
