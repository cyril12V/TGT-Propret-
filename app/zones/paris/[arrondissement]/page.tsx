import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { ParisLinksFooter } from "@/components/sections/ParisLinksFooter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import {
  PARIS_ARRONDISSEMENTS,
  getArrondissementBySlug,
} from "@/lib/zones-paris";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type Params = { arrondissement: string };

export async function generateStaticParams(): Promise<Params[]> {
  return PARIS_ARRONDISSEMENTS.map((a) => ({ arrondissement: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { arrondissement } = await params;
  const arr = getArrondissementBySlug(arrondissement);
  if (!arr) return { title: "Arrondissement introuvable" };

  return buildMetadata({
    title: `Entreprise de nettoyage Paris ${arr.number} (${arr.postalCode}) — TGT Propreté`,
    description: `Société de nettoyage professionnel dans le ${arr.number}e arrondissement de Paris (${arr.district}). Bureaux, copropriétés, particuliers, fin de chantier. Devis gratuit sous 24h.`,
    path: `/zones/paris/${arr.slug}`,
    keywords: arr.keywords,
  });
}

export default async function ArrondissementPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { arrondissement } = await params;
  const arr = getArrondissementBySlug(arrondissement);
  if (!arr) notFound();

  const intro = arr.intro;
  const paragraphs = intro.split(/\n\n+/).filter(Boolean);

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
              <Link
                href="/zones/paris"
                className="hover:text-[var(--color-gold)]"
              >
                Paris
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white">{arr.name}</span>
            </nav>

            <SectionLabel>
              Paris {arr.number}
              <sup>e</sup> · {arr.postalCode}
            </SectionLabel>
            <h1 className="mt-3 font-serif text-[clamp(36px,5.5vw,68px)] font-light leading-[1.05]">
              Entreprise de nettoyage —{" "}
              <em className="italic text-[var(--color-gold)]">
                Paris {arr.number}
                <sup>e</sup> arrondissement
              </em>
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/70">
              {arr.district}. TGT Propreté intervient dans le {arr.number}
              <sup>e</sup> arrondissement de Paris auprès des particuliers,
              entreprises, syndics de copropriété et artisans. Devis gratuit
              sous 24h.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/devis?zone=paris-${arr.number}`}
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-2)]"
              >
                Devis pour Paris {arr.number}
                <sup>e</sup> <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/zones/paris"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Retour au hub Paris
              </Link>
            </div>
          </div>
        </header>

        <article className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-20">
          <div className="container-tgt grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <div className="space-y-5 text-[16px] leading-relaxed text-[var(--color-muted)]">
              <h2 className="font-serif text-3xl font-light text-[var(--color-navy)] md:text-4xl">
                Notre intervention à Paris {arr.number}
                <sup>e</sup>
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
                  {arr.highlights.map((h) => (
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
                  Devis Paris {arr.number}
                  <sup>e</sup>
                </div>
                <h3 className="mt-2 font-serif text-2xl">Réponse sous 24h</h3>
                <p className="mt-2 text-sm text-white/70">
                  Décrivez votre besoin, nous revenons vers vous avec un devis
                  détaillé. Sans engagement.
                </p>
                <Link
                  href={`/devis?zone=paris-${arr.number}`}
                  className="mt-4 inline-flex items-center gap-2 bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] hover:bg-[var(--color-gold-2)]"
                >
                  Demander mon devis{" "}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </article>

        <section className="bg-[var(--color-cream)] px-5 py-16 md:px-10 md:py-20">
          <div className="container-tgt">
            <SectionLabel>Nos services à Paris {arr.number}e</SectionLabel>
            <h2 className="mt-3 font-serif text-[clamp(28px,4vw,48px)] font-light leading-tight">
              Toutes nos prestations dans le {arr.number}
              <sup>e</sup>
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
                          à Paris {arr.number}
                          <sup>e</sup>
                        </span>
                      </h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        {s.shortDesc}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <ParisLinksFooter
          title={`Autres arrondissements proches de Paris ${arr.number}e`}
          intro="Nous intervenons également dans les arrondissements voisins, avec le même niveau de service."
          excludeSlug={arr.slug}
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
              { name: "Paris", url: `${SITE.url}/zones/paris` },
              { name: arr.name, url: `${SITE.url}/zones/paris/${arr.slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}
