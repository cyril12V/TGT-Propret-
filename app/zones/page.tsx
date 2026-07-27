import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ZONES, getZonesByDepartment } from "@/lib/zones";
import { PARIS_ARRONDISSEMENTS } from "@/lib/zones-paris";
import { SITE, CONTACT } from "@/lib/constants";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const HUB_FAQS = [
  {
    q: "Dans quelles villes d'Île-de-France intervenez-vous ?",
    a: `TGT Propreté intervient dans les 20 arrondissements de Paris et dans ${ZONES.length} communes d'Île-de-France, réparties sur la Seine-Saint-Denis (93), les Hauts-de-Seine (92), le Val-de-Marne (94), les Yvelines (78) et l'Essonne (91). Notre siège est à Bondy (93140). Les communes non listées sont traitées sur demande, avec le même niveau de service.`,
  },
  {
    q: "Le délai d'intervention dépend-il de la commune ?",
    a: `Le devis reste gratuit sous 24h partout. En revanche, plus la commune est éloignée de notre siège de ${CONTACT.address.city}, plus nous groupons les interventions par secteur : les contrats réguliers se calent facilement partout en Île-de-France, tandis que les urgences ponctuelles demandent davantage de délai sur les zones éloignées comme les Yvelines ou l'Essonne.`,
  },
  {
    q: "Proposez-vous les mêmes services dans toutes les communes ?",
    a: "Oui, l'intégralité de notre catalogue est disponible sur l'ensemble de nos zones : bureaux, copropriétés, fin de chantier, vitres, restaurants, cabinets médicaux, textiles d'ameublement, nettoyage approfondi et prestations sur mesure. Seul le protocole est adapté au bâti local.",
  },
  {
    q: "Comment savoir si ma commune est desservie ?",
    a: "Consultez la liste par département sur cette page. Si votre commune n'y figure pas, contactez-nous : nous couvrons l'ensemble de l'Île-de-France et nous vous dirons sous 24h si nous pouvons tenir la fréquence dont vous avez besoin.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Zones d'intervention — Paris & Île-de-France | TGT Propreté",
  description: `Entreprise de nettoyage à Paris et en Île-de-France : 20 arrondissements et ${ZONES.length} communes desservies dans le 93, 92, 94, 78 et 91. Devis gratuit sous 24h.`,
  path: "/zones",
  keywords: [
    "zones d'intervention nettoyage Île-de-France",
    "entreprise de nettoyage Île-de-France",
    "société de nettoyage 93",
    "société de nettoyage 92",
    "nettoyage Paris et banlieue",
  ],
});

export default function ZonesHubPage() {
  const byDepartment = getZonesByDepartment();

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
              <span className="text-white">Zones</span>
            </nav>

            <SectionLabel>
              {PARIS_ARRONDISSEMENTS.length} arrondissements ·{" "}
              {ZONES.length}{" "}
              communes
            </SectionLabel>
            <h1 className="mt-3 font-serif text-[clamp(36px,5.5vw,68px)] font-light leading-[1.05]">
              Nos zones{" "}
              <em className="italic text-[var(--color-gold)]">
                d&apos;intervention
              </em>
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/70">
              TGT Propreté intervient dans les{" "}
              {PARIS_ARRONDISSEMENTS.length} arrondissements de Paris et dans{" "}
              {ZONES.length}{" "}
              communes d&apos;Île-de-France. Notre siège est
              situé au {CONTACT.address.street}, {CONTACT.address.postalCode}{" "}
              {CONTACT.address.city}. Devis gratuit sous 24h, quelle que soit la
              commune.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/zones/paris"
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-2)]"
              >
                Nettoyage à Paris <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Nos prestations
              </Link>
            </div>
          </div>
        </header>

        {/* Paris en premier : c'est la zone la plus travaillée du site. */}
        <section className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-20">
          <div className="container-tgt">
            <SectionLabel>Paris intra-muros · 75</SectionLabel>
            <h2 className="mt-3 font-serif text-[clamp(28px,4vw,48px)] font-light leading-tight text-[var(--color-navy)]">
              Les {PARIS_ARRONDISSEMENTS.length} arrondissements de Paris
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
              Chaque arrondissement dispose de sa page dédiée, avec le détail du
              bâti local, des types de clients que nous y servons et des
              contraintes d&apos;accès propres au secteur.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {PARIS_ARRONDISSEMENTS.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/zones/paris/${a.slug}`}
                    className="inline-flex items-center gap-2 border border-[var(--color-navy)]/15 bg-white px-4 py-2 text-sm text-[var(--color-navy)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  >
                    <MapPin size={13} aria-hidden="true" />
                    Paris {a.number}
                    <sup>e</sup>{" "}
                    <span className="text-[var(--color-muted)]">
                      ({a.postalCode})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/zones/paris"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] hover:text-[var(--color-gold)]"
            >
              Voir le hub Paris <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {byDepartment.map((dept, index) => (
          <section
            key={dept.code}
            className={`px-5 py-16 md:px-10 md:py-20 ${
              index % 2 === 0
                ? "bg-[var(--color-cream)]"
                : "bg-[var(--color-light)]"
            }`}
          >
            <div className="container-tgt">
              <SectionLabel>
                {dept.name} · {dept.code}
              </SectionLabel>
              <h2 className="mt-3 font-serif text-[clamp(28px,4vw,48px)] font-light leading-tight text-[var(--color-navy)]">
                Nettoyage en {dept.name}
              </h2>

              <ul className="mt-8 grid gap-px bg-[rgba(13,34,68,0.08)] sm:grid-cols-2 lg:grid-cols-3">
                {dept.zones.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zones/${z.slug}`}
                      className="group flex h-full flex-col gap-2 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.08)]"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                        {z.postalCode}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-[var(--color-navy)]">
                        Nettoyage à {z.name}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        {z.highlights[0]}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <div className="w-full bg-[var(--color-cream)] py-16 border-t border-b border-[rgba(13,34,68,0.06)]">
          <FaqSection
            title="Zones d'intervention — vos questions"
            items={HUB_FAQS}
            variant="cream"
          />
        </div>

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
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              title: "Nos zones d'intervention en Île-de-France",
              description: `${PARIS_ARRONDISSEMENTS.length} arrondissements parisiens et ${ZONES.length} communes d'Île-de-France desservies.`,
              path: "/zones",
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
            name: "Zones d'intervention TGT Propreté",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Paris",
                url: `${SITE.url}/zones/paris`,
              },
              ...ZONES.map((z, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: z.name,
                url: `${SITE.url}/zones/${z.slug}`,
              })),
            ],
          }),
        }}
      />
    </>
  );
}
