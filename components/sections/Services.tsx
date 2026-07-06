import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { SERVICES, POLES } from "@/lib/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ─── Séparateur de pôle ───────────────────────────────────────────────────────

function PoleDivider({ label, tag }: { label: string; tag: string }) {
  return (
    <div className="col-span-full flex items-center gap-6 px-1 py-4 pt-14">
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, #c9a84c, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="flex shrink-0 flex-col items-center gap-1.5 text-center">
        <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 font-serif text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white">
          {tag}
        </span>
        <span className="font-serif text-2xl sm:text-4xl font-semibold text-[var(--color-navy)] max-w-[240px] sm:max-w-none text-center leading-tight">
          {label}
        </span>
      </div>
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, #c9a84c, transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Carte service (Révélation naturelle du fond Doré au Hover) ───────────────

function ServiceCard({
  slug,
  num,
  bgImage,
  Icon,
  title,
  shortDesc,
  isSpecialty = false,
}: {
  slug: string;
  num: string;
  bgImage: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  shortDesc: string;
  isSpecialty?: boolean;
}) {
  return (
    /* 
      Le parent reste fixe au sol avec le fond doré. 
      On enlève 'overflow-hidden' pour permettre à la carte de déborder en haut au hover.
    */
    <Link
      href={`/services/${slug}`}
      className="group relative block min-h-[350px] bg-[var(--color-gold)]"
    >
      {/* 
        Ce bloc contient l'image, le dégradé et le texte.
        Au hover, tout ce bloc monte de 8px (hover:-translate-y-2), 
        donc l'image se décale aussi vers le haut en sortant légèrement du cadre initial.
      */}
      <div className="absolute inset-0 z-10 flex h-full w-full flex-col justify-end bg-white p-8 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(13,34,68,0.15)] overflow-hidden">

        {/* Image de fond (Nette à 100%) */}
        <div className="absolute inset-0 z-0 h-full w-full block">
          <Image
            src={bgImage || "/images/placeholder.jpg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>

        {/* Overlay dégradé blanc */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/85 via-50% to-transparent opacity-95" />

        {/* Contenu (Texte et Icônes) */}
        <div className="relative z-20 flex flex-col h-full justify-between">

          {/* Haut de carte */}
          <div className="flex items-start justify-between mb-10">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[var(--color-navy)] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:text-white"
              aria-hidden="true"
            >
              <Icon size={26} strokeWidth={1.5} />
            </span>

            <span
              className="font-serif text-5xl font-light leading-none text-[var(--color-navy)] opacity-20 transition-all duration-300 group-hover:opacity-100 group-hover:text-[var(--color-gold)]"
              aria-hidden="true"
            >
              {num}
            </span>
          </div>

          {/* Bas de carte */}
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <h3 className="font-serif text-2xl font-bold leading-snug text-[var(--color-navy)]">
                {title}
              </h3>

              {isSpecialty && (
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-gold)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white"
                  title="Notre spécialité"
                >
                  <Star size={9} fill="white" strokeWidth={0} aria-hidden="true" />
                  Spécialité
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed text-[var(--color-muted)] group-hover:text-[var(--color-navy)] transition-colors duration-300 line-clamp-3 font-medium">
              {shortDesc}
            </p>

            <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] transform translate-x-[-5px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              En savoir plus <ArrowRight size={12} aria-hidden="true" />
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
}

function GhostCard() {
  return (
    <div
      className="hidden bg-white/40 sm:block"
      aria-hidden="true"
    />
  );
}

function getGhostCount(itemCount: number, cols: number): number {
  const remainder = itemCount % cols;
  return remainder === 0 ? 0 : cols - remainder;
}

// ─── Section principale ────────────────────────────────────────────────────────

export function Services() {
  const servicesByPole = POLES.map((pole) => ({
    pole,
    items: SERVICES.filter((s) => s.pole === pole.id),
  }));

  return (
    <section
      id="services"
      className="bg-[var(--color-light)] px-5 py-20 md:px-10 md:py-25"
    >
      <div className="container-tgt mx-auto max-w-7xl">

        {/* En-tête principal */}
        <Reveal className="mx-auto max-w-[620px] text-center">
          <div
            className="mx-auto mb-4 h-px w-48"
            style={{
              background:
                "linear-gradient(to right, transparent, #c9a84c, transparent)",
            }}
            aria-hidden="true"
          />

          <SectionLabel centered>Ce Que Nous Faisons</SectionLabel>

          <h2 className="font-serif text-[clamp(40px,5vw,68px)] font-semibold leading-none tracking-tight text-[var(--color-navy)]">
            Nos{" "}
            <em className="italic text-[var(--color-gold)]">Services</em>
          </h2>

          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
            De votre salon à votre chantier, nous couvrons l&apos;ensemble de
            vos besoins en nettoyage professionnel.
          </p>

          <div
            className="mx-auto mt-4 h-px w-48"
            style={{
              background:
                "linear-gradient(to right, transparent, #c9a84c, transparent)",
            }}
            aria-hidden="true"
          />
        </Reveal>

        {/* Grille de services */}
        <Reveal className="mt-12 md:mt-16">
          <div
            className="border border-[#c9a84c]/30 rounded-lg overflow-hidden shadow-xl"
            style={{ background: "#c9a84c" }}
          >
            {servicesByPole.map(({ pole, items }) => {
              const cols =
                items.length === 1
                  ? 1
                  : items.length === 2
                    ? 2
                    : items.length === 3
                      ? 3
                      : 4;

              const effectiveCols =
                items.length === 6
                  ? 3
                  : items.length === 5
                    ? 3
                    : cols;

              const ghosts = getGhostCount(items.length, effectiveCols);

              const gridClass =
                effectiveCols === 1
                  ? "grid gap-px sm:grid-cols-1"
                  : effectiveCols === 2
                    ? "grid gap-px sm:grid-cols-2"
                    : effectiveCols === 3
                      ? "grid gap-px sm:grid-cols-2 lg:grid-cols-3"
                      : "grid gap-px sm:grid-cols-2 lg:grid-cols-4";

              return (
                <div key={pole.id} className="bg-[var(--color-light)]">
                  <div className="col-span-full px-6">
                    <PoleDivider label={pole.label} tag={pole.tag} />
                  </div>

                  <div className={gridClass}>
                    {items.map(({ slug, num, bgImage, Icon, title, shortDesc }) => (
                      <ServiceCard
                        key={slug}
                        slug={slug}
                        num={num}
                        bgImage={bgImage}
                        Icon={Icon}
                        title={title}
                        shortDesc={shortDesc}
                        isSpecialty={num === "01"}
                      />
                    ))}

                    {/* Cartes fantômes */}
                    {Array.from({ length: ghosts }).map((_, i) => (
                      <GhostCard key={`ghost-${pole.id}-${i}`} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}