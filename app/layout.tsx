import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SITE } from "@/lib/constants";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import { StickyCTA } from "@/components/layout/StickyCTA";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...buildMetadata({
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    path: "/",
    keywords: [
      "entreprise de nettoyage Paris",
      "entreprise de nettoyage 93",
      "société de nettoyage Paris",
      "nettoyage bureaux Paris",
      "nettoyage bureaux Île-de-France",
      "nettoyage restaurant Paris",
      "nettoyage commerce Paris",
      "nettoyage copropriété Paris",
      "nettoyage Paris",
      "devis nettoyage Paris",
      "nettoyage de fin de chantier",
      "ménage à domicile Paris",
      "nettoyage Île-de-France",
      "TGT Propreté",
    ],
  }),
  applicationName: SITE.name,
  authors: [{ name: SITE.brand }],
  creator: SITE.brand,
  publisher: SITE.brand,
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    // Renseigner le code de vérification Google Search Console après ajout de la propriété
    // google: "XXXXXXXXXXXXXXXXXXXXXX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D2244",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-[var(--color-navy)] focus:text-white focus:px-4 focus:py-2"
        >
          Aller au contenu principal
        </a>
        {children}
        <StickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
