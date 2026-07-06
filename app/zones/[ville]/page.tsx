import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { ParisLinksFooter } from "@/components/sections/ParisLinksFooter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/services";
import { ZONES, getZoneBySlug } from "@/lib/zones";
import { SITE } from "@/lib/constants";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

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
    title: `Société de nettoyage ${zone.name} (${zone.postalCode}) — TGT Propreté`,
    description: `Service de nettoyage professionnel à ${zone.name} : particuliers, entreprises, chantiers. Devis gratuit sous 24h. TGT Propreté intervient dans tout le ${zone.department}.`,
    path: `/zones/${zone.slug}`,
    keywords: [
      `nettoyage ${zone.name}`,
      `société de nettoyage ${zone.name}`,
      `ménage ${zone.name}`,
      `entretien bureaux ${zone.name}`,
      `nettoyage ${zone.postalCode}`,
    ],
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

  return (
    <>
      <Nav />
      <main id="main">
        <article className="bg-[var(--color-light)] px-5 pt-32 pb-20 md:px-10">
          <div className="container-tgt">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-[var(--color-muted)]">
              <Link href="/" className="hover:text-[var(--color-gold)]">
                Accueil
              </Link>
              <span aria-hidden="true"> / </span>
              <span>Zones</span>
              <span aria-hidden="true"> / </span>
              <span className="text-[var(--color-navy)]">{zone.name}</span>
            </nav>

            <SectionLabel>
              Zone d&apos;intervention · {zone.postalCode}
            </SectionLabel>
            <h1 className="mt-3 font-serif text-[clamp(40px,6vw,72px)] font-light leading-tight">
              Nettoyage professionnel à{" "}
              <em className="italic text-[var(--color-gold)]">{zone.name}</em>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
              {zone.intro}
            </p>

            <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
              <div className="space-y-5">
                <h2 className="font-serif text-3xl font-light">
                  Nos services à {zone.name}
                </h2>
                <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                  TGT Propreté propose à {zone.name} ({zone.postalCode},{" "}
                  {zone.department}) l&apos;intégralité de son offre de nettoyage
                  professionnel. Que vous soyez particulier, gestionnaire de
                  bureaux ou artisan en fin de chantier, notre équipe se
                  déplace rapidement pour évaluer vos besoins et établir un
                  devis gratuit sous 24h.
                </p>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {SERVICES.map((s) => {
                    const Icon = s.Icon;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex items-start gap-3 border border-transparent bg-white p-4 transition-colors hover:border-[var(--color-gold)]"
                        >
                          <span
                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)] transition-colors group-hover:bg-[var(--color-gold)]"
                            aria-hidden="true"
                          >
                            <Icon size={18} strokeWidth={1.6} />
                          </span>
                          <span>
                            <span className="block font-serif text-lg font-semibold text-[var(--color-navy)]">
                              {s.title}
                            </span>
                            <span className="text-xs text-[var(--color-muted)]">
                              à {zone.name}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <h2 className="mt-10 font-serif text-3xl font-light">
                  Pourquoi choisir TGT Propreté à {zone.name} ?
                </h2>
                <ul className="space-y-3 text-[15px] text-[var(--color-muted)]">
                  <li>— Équipe locale basée à Bondy (93140), réactive sur tout le {zone.department}</li>
                  <li>— Tarifs transparents, devis gratuit sous 24h</li>
                  <li>— 6+ ans d&apos;expérience, satisfaction garantie</li>
                  <li>— Matériel et produits professionnels</li>
                </ul>
              </div>

              <aside className="space-y-4 bg-[var(--color-navy)] p-8 text-white">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Intervention à {zone.name}
                </div>
                <h3 className="font-serif text-2xl">Devis gratuit sous 24h</h3>
                <p className="text-sm text-white/70">
                  Appelez-nous ou demandez un devis en ligne.
                </p>
                <Link
                  href="/devis"
                  className="mt-2 inline-block bg-[var(--color-gold)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] hover:bg-[var(--color-gold-2)]"
                >
                  Demander un devis
                </Link>
              </aside>
            </div>

            <section className="mt-20">
              <h2 className="font-serif text-3xl font-light">
                Autres zones desservies
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {ZONES.filter((z) => z.slug !== zone.slug).map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zones/${z.slug}`}
                      className="inline-block border border-[var(--color-navy)]/15 bg-white px-4 py-2 text-sm text-[var(--color-navy)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                    >
                      {z.name}{" "}
                      <span className="text-[var(--color-muted)]">
                        ({z.postalCode})
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <ParisLinksFooter
          title={`À deux pas de ${zone.name} : Paris`}
          intro={`${zone.name} est limitrophe ou très proche de Paris. Découvrez nos prestations dans les arrondissements parisiens voisins.`}
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
              { name: "Zones", url: `${SITE.url}/#zones` },
              { name: zone.name, url: `${SITE.url}/zones/${zone.slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}
