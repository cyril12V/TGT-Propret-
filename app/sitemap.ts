import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { CONTENT_UPDATED } from "@/lib/content-dates";
import { SERVICES } from "@/lib/services";
import { ZONES } from "@/lib/zones";
import { PARIS_ARRONDISSEMENTS } from "@/lib/zones-paris";
import { ARTICLES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  // Dates de contenu, pas date de build : voir lib/content-dates.ts.
  const statiques = new Date(CONTENT_UPDATED.staticPages);
  const legales = new Date(CONTENT_UPDATED.legalPages);
  const base = SITE.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: statiques, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/services`,
      lastModified: statiques,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/zones`,
      lastModified: statiques,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/zones/paris`,
      lastModified: statiques,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/devis`,
      lastModified: statiques,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    { url: `${base}/blog`, lastModified: statiques, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${base}/mentions-legales`,
      lastModified: legales,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/politique-confidentialite`,
      lastModified: legales,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(CONTENT_UPDATED.services),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const parisPages: MetadataRoute.Sitemap = PARIS_ARRONDISSEMENTS.map((a) => ({
    url: `${base}/zones/paris/${a.slug}`,
    lastModified: new Date(CONTENT_UPDATED.parisArrondissements),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const zonePages: MetadataRoute.Sitemap = ZONES.map((z) => ({
    url: `${base}/zones/${z.slug}`,
    lastModified: new Date(CONTENT_UPDATED.zones),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...parisPages,
    ...zonePages,
    ...blogPages,
  ];
}
