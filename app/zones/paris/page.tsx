import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { ParisLinksFooter } from "@/components/sections/ParisLinksFooter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE, TESTIMONIALS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { PARIS_ARRONDISSEMENTS } from "@/lib/zones-paris";
import { aggregateRatingFromTestimonials, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

const PARIS_FAQS = [
  {
    q: "Intervenez-vous dans tous les arrondissements de Paris ?",
    a: "Oui. TGT Propreté intervient dans les 20 arrondissements de Paris, et chacun dispose de sa page dédiée détaillant le bâti local, les types de clients que nous y servons et les contraintes d'accès propres au secteur.",
  },
  {
    q: "Quel est le délai pour un devis de nettoyage à Paris ?",
    a: "24 heures maximum après votre demande. Pour les bureaux et copropriétés, nous proposons souvent une visite préalable gratuite afin d'établir un devis précis. Pour les particuliers, un échange téléphonique de 10 minutes suffit généralement.",
  },
  {
    q: "Combien coûte un nettoyage professionnel à Paris ?",
    a: "Les tarifs dépendent du service. Pour vous donner des ordres de grandeur : ménage à domicile à partir de 28€/h, nettoyage de bureaux à partir de 0,50€/m² par passage, nettoyage de fin de chantier à partir de 4€/m², nettoyage de canapé à partir de 55€ pour un 2 places. Devis détaillé sous 24h.",
  },
  {
    q: "Pouvez-vous intervenir en urgence à Paris ?",
    a: "Oui, nous proposons des interventions en urgence sous 12 à 48h selon la zone et le type de prestation (états des lieux, sinistres, fins de chantier serrées). Contactez-nous directement par téléphone pour les urgences avérées.",
  },
  {
    q: "Travaillez-vous avec des syndics de copropriété parisiens ?",
    a: "Oui, nous avons des contrats récurrents avec plusieurs cabinets de syndic à Paris. Nous fournissons l'attestation URSSAF, l'attestation d'assurance RC professionnelle et nous adaptons à votre process AG/budget de copropriété.",
  },
  {
    q: "Quels arrondissements parisiens sont les plus demandés ?",
    a: "Nous observons une forte demande dans le 5e (Saint-Michel - Notre-Dame, Panthéon), le 6e (Saint-Germain-des-Prés), le 8e (Champs-Élysées, Madeleine), le 18e (Montmartre, Pigalle) et le 19e (Porte de la Villette) — particulièrement pour les bureaux et copropriétés.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Entreprise de Nettoyage Paris — Devis gratuit 24h | TGT Propreté",
  description:
    "Entreprise de nettoyage professionnel à Paris : tous arrondissements. Bureaux, copropriétés, particuliers, fin de chantier, vitres, canapés, tapis. Devis gratuit sous 24h.",
  path: "/zones/paris",
  keywords: [
    "entreprise de nettoyage Paris",
    "société de nettoyage Paris",
    "nettoyage Paris",
    "ménage Paris",
    "nettoyage bureaux Paris",
    "nettoyage copropriété Paris",
    "devis nettoyage Paris",
  ],
});

export default function ParisHubPage() {
  const rating = aggregateRatingFromTestimonials();

  // Mise en avant visuelle uniquement : les 20 arrondissements ont tous leur page
  // dédiée et sont tous liés depuis ce hub.
  const featuredNumbers = [1, 5, 6, 7, 8, 18, 19, 20];

  const priorityArrondissements = PARIS_ARRONDISSEMENTS.filter((arr) =>
    featuredNumbers.includes(Number(arr.number))
  );

  const secondaryArrondissements = PARIS_ARRONDISSEMENTS.filter((arr) =>
    !featuredNumbers.includes(Number(arr.number))
  );

  return (
    <>
      <Nav />
      <main id="main">

        {/* ── HERO ── */}
        <header className=" relative overflow-hidden bg-[var(--color-navy)] px-5 pb-20 pt-36 text-white md:px-10 md:pb-28 md:pt-44">
          <Image
            src="/images/Agent_TGT_F.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="z-0 object-cover object-center opacity-30"
          />


          <div className="container-tgt relative z-10">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-white/50">
              <Link href="/" className="transition-colors hover:text-[var(--color-gold)]">
                Accueil
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white/80">Paris</span>
            </nav>

            <SectionLabel>Zone d&apos;intervention principale</SectionLabel>

            <h1 className="mt-4 font-serif text-[clamp(44px,6.5vw,84px)] font-light leading-[1.01]">
              Entreprise de nettoyage{" "}
              <em className="italic text-[var(--color-gold)]">à Paris</em>
            </h1>

            {/* Gold underline under h1 */}
            <div
              aria-hidden="true"
              className="mt-4 h-px w-48"
              style={{
                background: "linear-gradient(to right, var(--color-gold), transparent)",
              }}
            />

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              TGT Propreté est votre interlocuteur unique pour le{" "}
              <strong className="font-semibold text-white/90">
                nettoyage professionnel à Paris
              </strong>
              . Bureaux, copropriétés, particuliers, boutiques, fins de chantier —
              nous intervenons dans les 20 arrondissements avec une équipe formée,
              assurée et stable. Devis gratuit sous 24h.
            </p>

            {rating && (
              <div className="mt-8 inline-flex items-center gap-3 border border-[rgba(201,168,76,0.3)] bg-[rgba(13,34,68,0.45)] px-5 py-3 text-sm text-white/80 backdrop-blur-sm">
                <div className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      strokeWidth={0}
                      fill="currentColor"
                      className="text-[var(--color-gold)]"
                    />
                    ))}
                </div>
                <span>
                  <strong className="text-[var(--color-gold)]">
                    {rating.ratingValue}/5
                  </strong>{" "}
                  · {rating.reviewCount} avis Google
                </span>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-[2px] bg-[var(--color-gold)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-2)] hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)]"
              >
                Devis gratuit sous 24h <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-[2px] border border-white/25 bg-[rgba(13,34,68,0.35)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-[2px] transition-all hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Voir nos {SERVICES.length} services
              </Link>
            </div>
          </div>
        </header>

        {/* ── STATS BAR ── */}
        <div className="bg-[var(--color-gold)] text-center">
          <div className="container-tgt grid grid-cols-2 divide-x divide-[rgba(13,34,68,0.15)] md:grid-cols-4">
            {[
              {
                number: String(PARIS_ARRONDISSEMENTS.length),
                label: "Arrondissements couverts",
              },
              {
                number: String(SERVICES.length),
                label: "Prestations disponibles",
              },
              { number: "24h", label: "Délai devis garanti" },
              {
                number: rating ? `${rating.ratingValue}★` : "24h/24",
                label: rating ? "Note moyenne Google" : "Demande en ligne",
              },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1 px-6 py-6 md:px-8">
                <span className="font-serif text-3xl font-light text-[var(--color-navy)]">
                  {s.number}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[rgba(13,34,68,0.6)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── ARRONDISSEMENTS ── */}
        <section className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-24">
          <div className="container-tgt">
            <SectionLabel>Nos arrondissements desservis</SectionLabel>

            {/* SECTION 1 : Arrondissements principaux */}
            <h2 className="relative mt-3 inline-block font-serif text-[clamp(32px,4.5vw,52px)] font-light leading-tight">
              Nos secteurs d&apos;intervention{" "}
              <em className="italic text-[var(--color-gold)]">principaux</em>
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 block h-px w-full bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c] to-[#c9a84c]/0"
              />
            </h2>

            <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[var(--color-muted)]">
              Découvrez nos présentations dédiées par arrondissement pour consulter nos prestations locales, nos tarifs indicatifs et nos références de proximité.
            </p>

            {/* OPTIMISATION : Ajout des bordures sur les côtés (border + border-color) */}
            <ul className="mt-12 grid gap-px border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/30 rounded-[3px] sm:grid-cols-2 lg:grid-cols-4">
              {priorityArrondissements.map((arr) => (
                <li key={arr.slug}>
                  <Link
                    href={`/zones/paris/${arr.slug}`}
                    className="group relative flex h-full flex-col gap-3 overflow-hidden bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.08)]"
                  >
                    {/* Ligne dorée animée au survol */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-300 group-hover:scale-x-100"
                    />

                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)] transition-colors duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-white"
                        aria-hidden="true"
                      >
                        <MapPin size={20} strokeWidth={1.5} />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                        {arr.postalCode}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)]">
                      Paris {arr.number}<sup>e</sup>
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{arr.district}</p>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      Voir la page
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* SECTION 2 : Autres arrondissements */}
            <div className="mt-20">
              <h2 className="relative inline-block font-serif text-[clamp(28px,3.5vw,42px)] font-light leading-tight">
                Nous intervenons également{" "}
                <em className="italic text-[var(--color-gold)]">partout dans Paris</em>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 block h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"

                />
              </h2>

              <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[var(--color-muted)]">
                Nos équipes se déplacent quotidiennement dans tout Paris, avec la
                même réactivité et la même qualité de service. Chaque
                arrondissement dispose de sa page dédiée : cliquez sur le vôtre
                pour découvrir le détail de nos interventions locales.
              </p>

              {/* OPTIMISATION : Même effet de bordure périphérique pour la seconde grille */}
              <ul className="mt-12 grid gap-px border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/20 rounded-[3px] sm:grid-cols-2 lg:grid-cols-4 opacity-95">
                {secondaryArrondissements.map((arr) => (
                  <li key={arr.slug}>
                    <Link
                      href={`/zones/paris/${arr.slug}`}
                      className="group relative flex h-full flex-col gap-3 overflow-hidden bg-white/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.08)]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-300 group-hover:scale-x-100"
                      />

                      <div className="flex items-center justify-between">
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)] transition-colors duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-white"
                          aria-hidden="true"
                        >
                          <MapPin size={20} strokeWidth={1.5} />
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                          {arr.postalCode}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)]/80">
                        Paris {arr.number}<sup>e</sup>
                      </h3>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">{arr.district}</p>

                      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors">
                        Voir la page
                        <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="bg-[var(--color-cream)] px-5 py-16 md:px-10 md:py-24">
          <div className="container-tgt">
            <SectionLabel>Services à Paris</SectionLabel>

            <h2 className="relative mt-3 inline-block font-serif text-[clamp(32px,4.5vw,52px)] font-light leading-tight">
              {SERVICES.length} prestations couvertes,{" "}
              <em className="italic text-[var(--color-gold)]">un seul interlocuteur</em>
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 block h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"

              />
            </h2>

            <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[var(--color-muted)]">
              De l&apos;entretien quotidien d&apos;un bureau au nettoyage d&apos;un
              canapé taché, nous couvrons l&apos;ensemble des besoins en propreté
              professionnelle à Paris.
            </p>

            <ul className="mt-12 grid w-full grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-gold)] overflow-hidden rounded-xl border border-[var(--color-gold)]">
              {SERVICES.map((s) => {
                const Icon = s.Icon;
                // --- MODIFICATION ICI : Suppression de la constante isSpecialty ---
                return (
                  <li key={s.slug} className="overflow-hidden">
                    <Link
                      href={`/services/${s.slug}`}
                      className="group relative flex h-full flex-col gap-4 bg-white p-8 transition-all duration-500 ease-out hover:z-10 hover:shadow-[0_30px_60px_rgba(13,34,68,0.15)]"
                    >
                      {/* Bordure animée inférieure signature (épaisseur 3px et radius 3px) */}
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-[3px]"
                      />

                      {/* --- MODIFICATION ICI : Suppression du bloc d'affichage du Badge Spécialité --- */}

                      {/* Flèche d'action discrète en haut à droite (toujours affichée maintenant car le badge est supprimé) */}
                      <div className="absolute top-6 right-6 text-[var(--color-gold)] opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>

                      {/* Conteneur d'icône avec micro-animation au survol */}
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)] transition-all duration-500 ease-out group-hover:bg-[var(--color-navy)] group-hover:text-white group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <div className="transition-transform duration-500 group-hover:rotate-6">
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Contenu textuel */}
                      <div className="flex flex-col gap-2">
                        <h3 className="font-serif text-xl font-semibold text-[var(--color-navy)] transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                          {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                          {s.shortDesc}
                        </p>
                      </div>

                      {/* Section prix / pied de carte aligné en bas */}
                      {s.priceRange && (
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                            {s.priceRange}
                          </span>
                          <span className="text-[11px] font-medium text-[var(--color-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Voir l&apos;offre
                          </span>
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ── POURQUOI NOUS ── */}
        <section className="bg-[var(--color-navy)] px-5 py-16 md:px-10 md:py-24">
          <div className="container-tgt">
            <SectionLabel>Pourquoi nous choisir</SectionLabel>

            <h2 className="relative mt-3 inline-block font-serif text-[clamp(32px,4.5vw,52px)] font-light leading-tight text-white">
              L&apos;excellence,{" "}
              <em className="italic text-[var(--color-gold)]">pas une promesse</em>
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-gold), transparent)",
                }}
              />
            </h2>

            <div className="mt-14 grid gap-px bg-[rgba(255,255,255,0.06)] md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Équipe formée & stable",
                  desc: "Nos agents sont recrutés, formés et fidélisés. Pas de turn-over, pas de surprises. Vous connaissez votre interlocuteur.",
                },
                {
                  n: "02",
                  title: "Assurance RC professionnelle",
                  desc: "Attestation URSSAF & assurance RC fournis à chaque contrat. Zéro risque administratif pour votre syndicat ou votre RH.",
                },
                {
                  n: "03",
                  title: "Réactivité garantie sous 24h",
                  desc: "Devis envoyé sous 24h, interventions d'urgence 24-48h. Disponibles 6j/7 par téléphone pour les urgences avérées.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="flex flex-col gap-4 border border-[rgba(201,168,76,0.1)] bg-[rgba(255,255,255,0.03)] p-10 transition-colors duration-300 hover:border-[rgba(201,168,76,0.28)] hover:bg-[rgba(201,168,76,0.04)]"
                >
                  <span className="font-serif text-5xl font-light text-[rgba(201,168,76,0.2)]">
                    {item.n}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGES ── */}
        <section className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-24">
          <div className="container-tgt">
            <SectionLabel>Témoignages clients Paris</SectionLabel>

            <h2 className="relative mt-3 inline-block font-serif text-[clamp(32px,4.5vw,52px)] font-light leading-tight">
              Ils nous font{" "}
              <em className="italic text-[var(--color-gold)]">confiance</em>
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-gold), transparent)",
                }}
              />
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.slice(0, 3).map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col gap-4 border-t-[3px] border-[var(--color-gold)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(13,34,68,0.1)]"
                >
                  <div className="flex gap-1" aria-label={`${t.rating}/5`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={14}
                        strokeWidth={0}
                        fill="currentColor"
                        className={
                          i < t.rating
                            ? "text-[var(--color-gold)]"
                            : "text-gray-200"
                        }
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="font-serif text-base italic leading-relaxed text-[var(--color-navy)]">
                    « {t.text} »
                  </blockquote>
                  <figcaption className="border-t border-gray-100 pt-4 text-sm">
                    <div className="font-serif font-semibold text-[var(--color-navy)]">
                      {t.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
                      {t.role}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          title="Questions fréquentes sur le nettoyage à Paris"
          items={PARIS_FAQS}
          intro="Tout ce qu'il faut savoir avant de choisir TGT Propreté pour vos locaux à Paris."
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
              { name: "Paris", url: `${SITE.url}/zones/paris` },
            ]),
          ),
        }}
      />
    </>
  );
}