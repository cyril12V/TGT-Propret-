import type { NextConfig } from "next";

const SERVICE_ALIASES: Record<string, string> = {
  "fin-de-chantier": "nettoyage-fin-de-chantier",
  "bureaux-entreprises": "nettoyage-bureaux-entreprises",
  "entreprises-bureaux": "nettoyage-bureaux-entreprises",
  "nettoyage-bureaux": "nettoyage-bureaux-entreprises",
  "apres-sinistre": "nettoyage-apres-sinistre",
  "nettoyage-copropriete": "nettoyage-coproprietes-immeubles",
  "nettoyage-vitres": "nettoyage-des-vitres",
  "nettoyage-tapis": "nettoyage-tapis-moquettes",
  "nettoyage-restaurants": "nettoyage-restaurants-cuisines",
  "nettoyage-cabinets-medicaux": "nettoyage-cabinets-medicaux-cliniques",
  "nettoyage-renovation-sols": "renovation-sols-decapage",
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/devis", permanent: true },
      { source: "/contacts", destination: "/devis", permanent: true },
      // /services et /zones sont désormais de vraies pages hub, plus des redirections.
      // Slugs courts ou anciens : un audit SEO (15/09/2026) les a relevés en 404,
      // et deux d'entre eux ont déjà circulé comme liens morts dans le blog.
      ...Object.entries(SERVICE_ALIASES).map(([alias, slug]) => ({
        source: `/services/${alias}`,
        destination: `/services/${slug}`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
