import type { Metadata } from "next";
import { CONTACT, SITE, TESTIMONIALS } from "@/lib/constants";

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

export function aggregateRatingFromTestimonials() {
  if (TESTIMONIALS.length === 0) return null;
  const sum = TESTIMONIALS.reduce((acc, t) => acc + t.rating, 0);
  const avg = sum / TESTIMONIALS.length;
  return {
    "@type": "AggregateRating" as const,
    ratingValue: avg.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    reviewCount: TESTIMONIALS.length,
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
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
    sameAs: CONTACT.socials.map((s) => s.url),
  };
}

type ServiceJsonLdInput = {
  title: string;
  longDesc: string;
  slug: string;
  priceRange?: string;
};

export function serviceJsonLd(service: ServiceJsonLdInput) {
  const offers = service.priceRange
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

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDesc,
    serviceType: service.title,
    url: `${SITE.url}/services/${service.slug}`,
    provider: { "@id": `${SITE.url}#business` },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    ...offers,
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
