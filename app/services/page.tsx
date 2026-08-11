import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { ParisLinksFooter } from "@/components/sections/ParisLinksFooter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { POLES, SERVICES, getServicesByPole } from "@/lib/services";
import { SITE, getYearsOfExperience } from "@/lib/constants";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const HUB_FAQS = [
  {
    q: "Quels services de nettoyage proposez-vous à Paris et en Île-de-France ?",
    a: `TGT Propreté propose ${SERVICES.length} prestations : nettoyage de bureaux et locaux professionnels, entretien de copropriétés et parties communes, nettoyage de fin de chantier, lavage de vitres et vitrines, nettoyage de restaurants aux normes HACCP, bionettoyage de cabinets médicaux, nettoyage de canapés, fauteuils, tapis et moquettes, remise en état après sinistre, nettoyage approfondi de logements, repassage et rangement, et prestations sur mesure pour conciergeries.`,
  },
  {
    q: "Travaillez-vous avec les particuliers ou uniquement les professionnels ?",
    a: "Les deux. Notre pôle professionnel couvre les entreprises, syndics, commerces, restaurants et cabinets médicaux. Notre pôle particuliers couvre le nettoyage approfondi de logements, le traitement des textiles d'ameublement, le repassage et les remises en état après travaux.",
  },
  {
    q: "Comment obtenir un devis pour une prestation de nettoyage ?",
    a: "Par téléphone ou via le formulaire en ligne. Nous revenons vers vous sous 24 heures avec un devis gratuit et sans engagement. Pour les bureaux, les copropriétés et les fins de chantier, une visite sur place préalable permet un chiffrage précis : elle est également gratuite.",
  },
  {
    q: "Sur quelle zone géographique intervenez-vous ?",
    a: "Paris et l'ensemble de l'Île-de-France : les 20 arrondissements parisiens, la Seine-Saint-Denis (93) où se trouve notre siège, les Hauts-de-Seine (92), le Val-de-Marne (94), les Yvelines (78), l'Essonne (91), la Seine-et-Marne (77) et le Val-d'Oise (95).",
  },
  {
    q: "Le matériel et les produits sont-ils fournis ?",
    a: "Oui. Nos équipes interviennent avec leur matériel professionnel et leurs produits, dont des références écolabellisées. Seul le repassage à domicile utilise votre centrale vapeur et votre table. Pour les consommables sanitaires en entreprise, nous proposons une option de gestion des stocks.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Nos Services de Nettoyage à Paris & Île-de-France | TGT Propreté",
  description: `${SERVICES.length} prestations de nettoyage professionnel à Paris et en Île-de-France : bureaux, copropriétés, fin de chantier, vitres, restaurants, textiles. Devis gratuit sous 24h.`,
  path: "/services",
  keywords: [
    "services de nettoyage Paris",
    "prestations nettoyage Île-de-France",
    "entreprise de nettoyage Paris",
    "nettoyage bureaux Paris",
    "nettoyage copropriété Paris",
    "nettoyage fin de chantier Paris",
    "société de nettoyage Paris",
  ],
});

export default function ServicesHubPage() {
  const years = getYearsOfExperience();

  return (
    <>
      <Nav />
      <main id="main">
        <header className="bg-[var(--color-navy)] px-5 pb-14 pt-32 text-white md:px-10 md:pb-20 md:pt-36">
          <div className="container-tgt">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-white/55">
              <Link href="/" className="hover:text-[var(--color-gold)]">
                Accueil
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white">Services</span>
            </nav>

            <SectionLabel>
              {SERVICES.length}{" "}
              prestations · Paris &amp; Île-de-France
            </SectionLabel>
            <h1 className="mt-3 font-serif text-[clamp(36px,5.5vw,68px)] font-light leading-[1.05]">
              Nos services de{" "}
              <em className="italic text-[var(--color-gold)]">
                nettoyage professionnel
              </em>
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/70">
              TGT Propreté couvre {SERVICES.length}{" "}
              prestations de nettoyage à Paris et en Île-de-France, réparties
              entre un pôle professionnel
              (bureaux, copropriétés, commerces, restaurants, cabinets
              médicaux, fin de chantier) et un pôle particuliers (nettoyage
              approfondi, textiles d&apos;ameublement, repassage). {years}+ ans
              d&apos;expérience, devis gratuit sous 24h.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-2)]"
              >
                Demander un devis <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/zones"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Nos zones d&apos;intervention
              </Link>
            </div>
          </div>
        </header>

        {POLES.map((pole, index) => {
          const services = getServicesByPole(pole.id);
          if (services.length === 0) return null;

          return (
            <section
              key={pole.id}
              className={`px-5 py-16 md:px-10 md:py-20 ${
                index % 2 === 0
                  ? "bg-[var(--color-light)]"
                  : "bg-[var(--color-cream)]"
              }`}
            >
              <div className="container-tgt">
                <SectionLabel>{pole.tag}</SectionLabel>
                <h2 className="mt-3 font-serif text-[clamp(28px,4vw,48px)] font-light leading-tight text-[var(--color-navy)]">
                  {pole.label}
                </h2>

                <ul className="mt-10 grid gap-px bg-[rgba(13,34,68,0.08)] sm:grid-cols-2 lg:grid-cols-3 [&>li:only-child]:col-span-full">
                  {services.map((s) => {
                    const Icon = s.Icon;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex h-full flex-col gap-3 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.08)]"
                        >
                          <span
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)] transition-colors group-hover:bg-[var(--color-gold)]"
                            aria-hidden="true"
                          >
                            <Icon size={20} strokeWidth={1.5} />
                          </span>
                          <h3 className="font-serif text-lg font-semibold text-[var(--color-navy)]">
                            {s.title}
                          </h3>
                          <p className="text-sm text-[var(--color-muted)]">
                            {s.shortDesc}
                          </p>
                          {s.priceRange && (
                            <span className="mt-auto pt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-gold)]">
                              {s.priceRange}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          );
        })}

        <div className="w-full bg-[var(--color-light)] py-16 border-t border-b border-[rgba(13,34,68,0.06)]">
          <FaqSection
            title="Nos services — vos questions"
            items={HUB_FAQS}
            variant="light"
          />
        </div>

        <ParisLinksFooter
          title="Nos prestations dans votre arrondissement"
          intro="Nous intervenons dans les 20 arrondissements de Paris. Sélectionnez le vôtre pour découvrir nos prestations locales."
          variant="cream"
        />

        <ContactBand />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: SITE.url },
              { name: "Services", url: `${SITE.url}/services` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              title: "Nos services de nettoyage professionnel",
              description: `${SERVICES.length} prestations de nettoyage professionnel à Paris et en Île-de-France.`,
              path: "/services",
              speakableSelectors: ["h1"],
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Services de nettoyage TGT Propreté",
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE.url}/services/${s.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
