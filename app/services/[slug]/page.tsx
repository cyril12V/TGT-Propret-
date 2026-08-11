import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { ParisLinksFooter } from "@/components/sections/ParisLinksFooter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import {
  SERVICES,
  getServiceBySlug,
  getRelatedServices,
  type ServiceStep,
} from "@/lib/services";
import { ZONES } from "@/lib/zones";
import { getRealisationsByService } from "@/lib/realisations";
import { SITE } from "@/lib/constants";
import {
  breadcrumbJsonLd,
  buildMetadata,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

type Params = { slug: string };

/** Parcours standard, utilisé tant qu'un service n'a pas son propre `process`. */
const DEFAULT_PROCESS: ServiceStep[] = [
  {
    step: "Échange",
    text: "Échange téléphonique ou demande en ligne pour cerner vos besoins",
  },
  { step: "Devis", text: "Devis personnalisé gratuit sous 24h" },
  {
    step: "Intervention",
    text: "Intervention par notre équipe expérimentée à Paris ou en Île-de-France",
  },
  { step: "Contrôle", text: "Contrôle qualité et satisfaction garantie" },
];

export async function generateStaticParams(): Promise<Params[]> {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service introuvable" };

  return buildMetadata({
    title:
      service.metaTitle ?? `${service.title} à Paris — TGT Propreté Île-de-France`,
    description:
      service.metaDescription ??
      `${service.shortDesc} Devis gratuit sous 24h à Paris et en Île-de-France.`,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = getRelatedServices(service, 4);
  const realisations = getRealisationsByService(service.slug);
  const linkedZones = ZONES.slice(0, 8);

  // Process propre au service quand il est renseigné, sinon le parcours standard.
  const process = service.process ?? DEFAULT_PROCESS;

  return (
    <>
      <Nav />
      <main id="main">
        {/* HERO : photo de fond du service (comme l'ancienne version) */}
        <section className="relative flex min-h-[440px] items-end overflow-hidden pt-32 pb-12 md:min-h-[540px]">
          <Image
            src={service.bgImage || "/images/placeholder.jpg"}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Voile dégradé bleu nuit pour la lisibilité du texte */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(13,34,68,0.94) 0%, rgba(13,34,68,0.72) 45%, rgba(13,34,68,0.35) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="container-tgt relative px-5 md:px-10">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-white/60">
              <Link href="/" className="hover:text-[var(--color-gold)]">
                Accueil
              </Link>
              <span aria-hidden="true"> / </span>
              <Link href="/services" className="hover:text-[var(--color-gold)]">
                Services
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white">{service.title}</span>
            </nav>

            <SectionLabel>Service {service.num} · Paris &amp; IDF</SectionLabel>
            <h1 className="mt-3 font-serif text-[clamp(36px,5.5vw,72px)] font-light leading-tight text-white">
              {service.h1 ? (
                <>
                  {service.h1.lead}{" "}
                  <em className="italic text-[var(--color-gold-2)]">
                    {service.h1.accent}
                  </em>
                </>
              ) : (
                <>
                  {service.title}{" "}
                  <em className="italic text-[var(--color-gold-2)]">à Paris</em>
                </>
              )}
            </h1>
            <div
              className="mt-2 h-[2px] w-40 bg-gradient-to-r from-[#c9a84c] to-transparent"
              aria-hidden="true"
            />

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {service.tldr ?? service.shortDesc}
            </p>
            {service.priceRange && (
              <div className="mt-5 inline-flex items-center gap-2 border border-[var(--color-gold)]/50 bg-[var(--color-navy)]/40 px-4 py-2 text-sm backdrop-blur-sm">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-2)]">
                  Tarif indicatif
                </span>
                <span className="font-semibold text-white">
                  {service.priceRange}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* CONTENU principal du service et encart Devis */}
        <article className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-20">
          <div className="container-tgt">
            <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
              <div className="space-y-5">
                <h2 className="font-serif text-3xl font-light relative inline-block after:absolute after:bottom-[2px] after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,transparent,var(--color-gold))] text-[var(--color-navy)]">
                  En quoi consiste ce service ?
                </h2>
                <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {service.longDesc}
                </p>

                {/* Corps de page détaillé : chaque H2 ouvre sur une réponse directe,
                    puis se décline en H3. C'est ce qui rend la page extractible. */}
                {service.sections?.map((section) => (
                  <section key={section.h2} className="pt-6">
                    <h2 className="font-serif relative inline-block after:absolute after:bottom-[2px] after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,transparent,var(--color-gold))] text-3xl font-light text-[var(--color-navy)]">
                      {section.h2}
                    </h2>
                    {section.intro && (
                      <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-muted)]">
                        {section.intro}
                      </p>
                    )}
                    {section.items && section.items.length > 0 && (
                      <ul className="mt-5 space-y-2 text-[15px] text-[var(--color-muted)]">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="mt-[9px] h-1 w-3 flex-shrink-0 bg-[var(--color-gold)]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.blocks?.map((block) => (
                      <div key={block.h3} className="mt-7">
                        <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)]">
                          {block.h3}
                        </h3>
                        {block.text && (
                          <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)]">
                            {block.text}
                          </p>
                        )}
                        {block.items && block.items.length > 0 && (
                          <ul className="mt-3 space-y-2 text-[15px] text-[var(--color-muted)]">
                            {block.items.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span
                                  className="mt-[9px] h-1 w-3 flex-shrink-0 bg-[var(--color-gold)]"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {section.table && (
                      <div className="mt-7">
                        {/* Le conteneur scrolle horizontalement : sur mobile, c'est
                            le tableau qui défile, jamais la page entière. */}
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[420px] border-collapse text-left text-[15px]">
                            <thead>
                              <tr className="border-b-2 border-[var(--color-gold)]">
                                {section.table.headers.map((h) => (
                                  <th
                                    key={h}
                                    scope="col"
                                    className="py-3 pr-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]"
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row) => (
                                <tr
                                  key={row.join("|")}
                                  className="border-b border-[rgba(13,34,68,0.08)]"
                                >
                                  {row.map((cell, i) => (
                                    <td
                                      key={cell}
                                      className={`py-3 pr-4 ${
                                        i === row.length - 1
                                          ? "font-semibold text-[var(--color-navy)]"
                                          : "text-[var(--color-muted)]"
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {section.table.note && (
                          <p className="mt-3 text-[13px] italic leading-relaxed text-[var(--color-muted)]">
                            {section.table.note}
                          </p>
                        )}
                      </div>
                    )}

                    {section.outro && (
                      <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
                        {section.outro}
                      </p>
                    )}
                  </section>
                ))}

                <section className="pt-6">
                  <h2 className="font-serif relative inline-block after:absolute after:bottom-[2px] after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,transparent,var(--color-gold))] text-3xl font-light text-[var(--color-navy)]">
                    Notre méthode
                  </h2>
                  <ol className="mt-5 space-y-3 text-[15px] text-[var(--color-muted)]">
                    {process.map((p, i) => (
                      <li key={p.step} className="flex gap-3">
                        <span className="font-semibold text-[var(--color-gold)]">
                          {String(i + 1).padStart(2, "0")}.
                        </span>
                        <span>
                          <strong className="font-semibold text-[var(--color-navy)]">
                            {p.step}
                          </strong>{" "}
                          — {p.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="pt-6">
                  <h2 className="font-serif relative inline-block after:absolute after:bottom-[2px] after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,transparent,var(--color-gold))] text-3xl font-light text-[var(--color-navy)]">
                    Où intervenons-nous ?
                  </h2>
                  <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    Nous assurons ce service dans les 20 arrondissements de
                    Paris et dans {ZONES.length}{" "}
                    communes d&apos;Île-de-France, depuis notre siège de Bondy
                    (93140). Devis gratuit sous 24h, quelle que soit la commune.
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {linkedZones.map((z) => (
                      <li key={z.slug}>
                        <Link
                          href={`/zones/${z.slug}`}
                          className="inline-flex min-h-11 items-center border border-[var(--color-navy)]/15 bg-white px-3 py-1.5 text-[13px] text-[var(--color-navy)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                        >
                          {service.title} à {z.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/zones"
                        className="inline-block border border-[var(--color-gold)] bg-white px-3 py-1.5 text-[13px] font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
                      >
                        Toutes nos zones →
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>

              <aside className="space-y-4 bg-[var(--color-navy)] p-8 text-white">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Demander un devis
                </div>
                <h3 className="font-serif text-2xl">Réponse sous 24h, gratuit</h3>
                <p className="text-sm text-white/70">
                  Décrivez votre besoin, nous vous recontactons rapidement avec
                  un devis détaillé.
                </p>
                <Link
                  href={`/devis?service=${service.slug}`}
                  className="mt-2 inline-flex items-center gap-2 bg-[var(--color-gold)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] hover:bg-[var(--color-gold-2)]"
                >
                  Demander un devis <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </aside>
            </div>
          </div>
        </article>

        {service.faqs && service.faqs.length > 0 && (
          <div className="w-full bg-[var(--color-cream)] py-16 border-t border-b border-[rgba(13,34,68,0.06)]">
            <FaqSection
              title={`${service.title} — vos questions`}
              items={service.faqs}
              variant="cream"
            />
          </div>

        )}

        {/* SOURCES : signal E-E-A-T, les affirmations chiffrées sont vérifiables */}
        {service.sources && service.sources.length > 0 && (
          <aside
            className="bg-[var(--color-light)] px-5 py-12 md:px-10"
            aria-labelledby="sources-heading"
          >
            <div className="container-tgt">
              <h2
                id="sources-heading"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]"
              >
                Sources utiles
              </h2>
              <ul className="mt-4 space-y-2 text-[14px] text-[var(--color-muted)]">
                {service.sources.map((s) => (
                  <li key={s.url} className="flex gap-3">
                    <span
                      className="mt-[9px] h-1 w-3 flex-shrink-0 bg-[var(--color-gold)]"
                      aria-hidden="true"
                    />
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[var(--color-gold)] underline-offset-4 transition-colors hover:text-[var(--color-gold)]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}

        {/* BLOC RÉALISATION : Avant / Après du service (si disponible) */}
        {realisations.length > 0 && (
          <article className="bg-[var(--color-light)] px-5 py-20 md:px-10">
            <div className="container-tgt">
              <SectionLabel>Avant / Après</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-light text-[var(--color-navy)] relative inline-block after:absolute after:bottom-[2px] after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,transparent,var(--color-gold))]">
                Nos réalisations
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
                Faites glisser le curseur pour mesurer la différence avant et
                après notre intervention.
              </p>

              <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
                {realisations.map((r) => (
                  <figure
                    key={r.id}
                    className="overflow-hidden border border-[#c9a84c]/25 bg-white shadow-lg"
                  >
                    <BeforeAfter
                      beforeImage={r.beforeImage}
                      afterImage={r.afterImage}
                      beforeAlt={`${r.title} — avant`}
                      afterAlt={`${r.title} — après`}
                      ratio={r.ratio ?? "4 / 3"}
                    />
                    <figcaption className="px-6 py-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                        {r.category}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-semibold text-[var(--color-navy)]">
                        {r.title}
                      </h3>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>
        )}

        {/* TROISIÈME BLOC : Section Autres services réalignée proprement */}
        <article className="bg-[var(--color-light)] px-5 py-20 md:px-10">
          <div className="container-tgt">
            <section>
              <h2 className="font-serif relative inline-block after:absolute after:bottom-[2px] after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,transparent,var(--color-gold))] text-3xl font-light text-[var(--color-navy)]">
                Autres services
              </h2>
              <div className="mt-8 grid gap-px bg-[rgba(13,34,68,0.06)] sm:grid-cols-2 lg:grid-cols-4">
                {others.map((s) => {
                  const Icon = s.Icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group block bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.1)]"
                    >
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)] transition-colors group-hover:bg-[var(--color-gold)]"
                        aria-hidden="true"
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-3 font-serif text-xl font-semibold text-[var(--color-navy)]">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-muted)]">
                        {s.shortDesc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        </article>

        <ParisLinksFooter
          title={`${service.title} dans votre arrondissement`}
          intro="Nous intervenons dans les principaux arrondissements de Paris. Sélectionnez le vôtre pour découvrir nos prestations locales."
          variant="light"
        />

        <ContactBand />
      </main>
      <Footer />

      {/* SCRIPTS DE DONNÉES STRUCTURÉES (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              title: service.title,
              longDesc: service.longDesc,
              slug: service.slug,
              priceRange: service.priceRange,
              offers: service.offers,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              title: `${service.title} à Paris`,
              description: service.tldr ?? service.shortDesc,
              path: `/services/${service.slug}`,
              speakableSelectors: ["h1"],
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: SITE.url },
              { name: "Services", url: `${SITE.url}/services` },
              {
                name: service.title,
                url: `${SITE.url}/services/${service.slug}`,
              },
            ]),
          ),
        }}
      />
    </>
  );
}