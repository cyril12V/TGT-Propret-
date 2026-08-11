import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { SERVICES, POLES } from "@/lib/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ─── Séparateur de pôle ───────────────────────────────────────────────────────

function PoleDivider({ label, tag }: { label: string; tag: string }) {
  return (
    <div className="col-span-full flex items-center gap-3 px-1 py-4 pt-14 sm:gap-6">
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

// ─── Carte service — photo en fond, texte par-dessus, pleine largeur ─────────
// La carte occupe 100 % de la largeur : la photo couvre tout le fond, un
// dégradé blanc remonte du bas et le contenu se pose dessus. Le texte est
// borné en largeur pour rester lisible sur grand écran.
// Seule la première image de la section est préchargée — le reste est en lazy.

function ServiceCard({
  slug,
  num,
  bgImage,
  Icon,
  title,
  shortDesc,
  priority = false,
  isSpecialty = false,
}: {
  slug: string;
  num: string;
  bgImage: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  shortDesc: string;
  priority?: boolean;
  isSpecialty?: boolean;
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative flex min-h-[340px] w-full flex-col justify-end overflow-hidden bg-white p-7 transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(13,34,68,0.15)] sm:min-h-[380px] sm:p-9 lg:min-h-[420px] lg:p-12"
    >
      {/* Photo de fond — couvre toute la carte */}
      <Image
        src={bgImage}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
      />

      {/* Dégradé blanc : lisibilité du texte posé dessus */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-white via-white/85 via-50% to-transparent opacity-95"
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative flex max-w-3xl flex-col gap-6">
        <div className="flex items-center gap-4">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-navy)] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:text-white"
            aria-hidden="true"
          >
            <Icon size={26} strokeWidth={1.5} />
          </span>

          <span
            className="font-serif text-5xl font-light leading-none text-[var(--color-navy)] opacity-20 transition-all duration-300 group-hover:text-[var(--color-gold)] group-hover:opacity-100"
            aria-hidden="true"
          >
            {num}
          </span>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-2xl font-bold leading-snug text-[var(--color-navy)] lg:text-3xl">
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

          <p className="text-sm font-medium leading-relaxed text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-navy)] lg:text-[15px]">
            {shortDesc}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] transition-all duration-300 md:-translate-x-[5px] md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100">
            En savoir plus <ArrowRight size={12} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
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
            Nos services de{" "}
            <em className="italic text-[var(--color-gold)]">
              nettoyage professionnel
            </em>
          </h2>

          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
            De votre salon à votre chantier, nous couvrons l&apos;ensemble de
            vos besoins en nettoyage à Paris et en Île-de-France.
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
            {servicesByPole.map(({ pole, items }, poleIndex) => (
              <div key={pole.id} className="bg-[var(--color-light)]">
                <div className="px-6">
                  <PoleDivider label={pole.label} tag={pole.tag} />
                </div>

                {/* Une prestation par ligne, sur toute la largeur */}
                <div className="grid grid-cols-1 gap-px">
                  {items.map(({ slug, num, bgImage, Icon, title, shortDesc }, i) => (
                    <ServiceCard
                      key={slug}
                      slug={slug}
                      num={num}
                      bgImage={bgImage}
                      Icon={Icon}
                      title={title}
                      shortDesc={shortDesc}
                      priority={poleIndex === 0 && i === 0}
                      isSpecialty={num === "01"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-[var(--color-navy)]/20 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            Voir le détail de nos prestations
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}