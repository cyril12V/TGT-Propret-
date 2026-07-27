import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { ParisLinksFooter } from "@/components/sections/ParisLinksFooter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/services";
import { ZONES, getZoneBySlug, getNearbyZones } from "@/lib/zones";
import { SITE, getYearsOfExperience } from "@/lib/constants";
import {
  breadcrumbJsonLd,
  buildMetadata,
  webPageJsonLd,
  zoneServiceJsonLd,
} from "@/lib/seo";

type Params = { ville: string };

export async function generateStaticParams(): Promise<Params[]> {
  return ZONES.map((z) => ({ ville: z.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { ville } = await params;
  const zone = getZoneBySlug(ville);
  if (!zone) return { title: "Zone introuvable" };

  return buildMetadata({
    title: `Entreprise de nettoyage ${zone.name} (${zone.postalCode}) — TGT Propreté`,
    description: `Nettoyage professionnel à ${zone.name} : bureaux, copropriétés, fin de chantier, vitres, textiles. Devis gratuit sous 24h. TGT Propreté intervient dans tout le ${zone.department}.`,
    path: `/zones/${zone.slug}`,
    keywords: zone.keywords,
  });
}

export default async function ZonePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { ville } = await params;
  const zone = getZoneBySlug(ville);
  if (!zone) notFound();

  const paragraphs = zone.intro.split(/\n\n+/).filter(Boolean);
  const nearby = getNearbyZones(zone);
  const years = getYearsOfExperience();

  const metaDescription = `Nettoyage professionnel à ${zone.name} (${zone.postalCode}) : bureaux, copropriétés, fin de chantier, vitres et textiles. Devis gratuit sous 24h.`;

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
              <Link href="/zones" className="hover:text-[var(--color-gold)]">
                Zones
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white">{zone.name}</span>
            </nav>

            <SectionLabel>
              {zone.department} · {zone.postalCode}
            </SectionLabel>
            <h1 className="mt-3 font-serif text-[clamp(36px,5.5vw,68px)] font-light leading-[1.05]">
              Entreprise de nettoyage à{" "}
              <em className="italic text-[var(--color-gold)]">{zone.name}</em>
            </h1>

            {/* Résumé autonome : c'est le passage que les moteurs de réponse extraient. */}
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/70">
              TGT Propreté est une entreprise de nettoyage professionnel qui
              intervient à {zone.name} ({zone.postalCode}, {zone.department})
              auprès des entreprises, syndics de copropriété, commerçants et
              particuliers. {SERVICES.length} prestations disponibles, {years}+
              ans d&apos;expérience, devis gratuit sous 24h.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/devis?zone=${zone.slug}`}
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-2)]"
              >
                Devis pour {zone.name} <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/zones"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Toutes nos zones
              </Link>
            </div>
          </div>
        </header>

        <article className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-20">
          <div className="container-tgt grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <div className="space-y-5 text-[16px] leading-relaxed text-[var(--color-muted)]">
              <h2 className="font-serif text-3xl font-light text-[var(--color-navy)] md:text-4xl">
                Notre intervention à {zone.name}
              </h2>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="bg-[var(--color-cream)] p-6">
                <h3 className="font-serif text-lg font-semibold text-[var(--color-navy)]">
                  Spécificités locales
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
                  {zone.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-navy)]"
                        aria-hidden="true"
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--color-navy)] p-6 text-white">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Devis {zone.name}
                </div>
                <h3 className="mt-2 font-serif text-2xl">Réponse sous 24h</h3>
                <p className="mt-2 text-sm text-white/70">
                  Décrivez votre besoin, nous revenons vers vous avec un devis
                  détaillé. Sans engagement.
                </p>
                <Link
                  href={`/devis?zone=${zone.slug}`}
                  className="mt-4 inline-flex items-center gap-2 bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] hover:bg-[var(--color-gold-2)]"
                >
                  Demander mon devis <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </article>

        <section className="bg-[var(--color-cream)] px-5 py-16 md:px-10 md:py-20">
          <div className="container-tgt">
            <SectionLabel>Nos services à {zone.name}</SectionLabel>
            <h2 className="mt-3 font-serif text-[clamp(28px,4vw,48px)] font-light leading-tight">
              Toutes nos prestations à {zone.name}
            </h2>

            <ul className="mt-10 grid gap-px bg-[rgba(13,34,68,0.08)] sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => {
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
                        {s.title}{" "}
                        <span className="font-sans text-xs text-[var(--color-muted)]">
                          à {zone.name}
                        </span>
                      </h3>
                      {/* Pas de shortDesc ici : répété sur 40 pages géo, il
                          diluait la part de contenu propre à la commune. */}
                      {s.priceRange && (
                        <span className="mt-auto pt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-gold)]">
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

        <div className="w-full bg-[var(--color-light)] py-16 border-t border-b border-[rgba(13,34,68,0.06)]">
          <FaqSection
            title={`Nettoyage à ${zone.name} — vos questions`}
            items={zone.faqs}
            variant="light"
          />
        </div>

        {nearby.length > 0 && (
          <section className="bg-[var(--color-cream)] px-5 py-16 md:px-10 md:py-20">
            <div className="container-tgt">
              <h2 className="font-serif text-3xl font-light text-[var(--color-navy)]">
                Communes voisines desservies
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
                Nos équipes couvrent également les communes limitrophes de{" "}
                {zone.name}, avec le même niveau de service.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {nearby.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zones/${z.slug}`}
                      className="inline-block border border-[var(--color-navy)]/15 bg-white px-4 py-2 text-sm text-[var(--color-navy)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                    >
                      Nettoyage à {z.name}{" "}
                      <span className="text-[var(--color-muted)]">
                        ({z.postalCode})
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <ParisLinksFooter
          title={`À deux pas de ${zone.name} : Paris`}
          intro={`${zone.name} est proche de Paris. Découvrez nos prestations dans les arrondissements parisiens voisins.`}
          variant="light"
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
              { name: "Zones", url: `${SITE.url}/zones` },
              { name: zone.name, url: `${SITE.url}/zones/${zone.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            zoneServiceJsonLd({
              name: zone.name,
              postalCode: zone.postalCode,
              department: zone.department,
              slug: zone.slug,
              description: metaDescription,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              title: `Entreprise de nettoyage ${zone.name} (${zone.postalCode})`,
              description: metaDescription,
              path: `/zones/${zone.slug}`,
              speakableSelectors: ["h1"],
            }),
          ),
        }}
      />
    </>
  );
}
