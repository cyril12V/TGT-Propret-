import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { SERVICES, POLES } from "@/lib/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ─── Filet doré dégradé (composant partagé) ───────────────────────────────────
// Évite la duplication du style inline dans toute la section.

const GOLD_LINE =
  "linear-gradient(to right, transparent, #c9a84c, transparent)";

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent to-transparent ${className}`}
      style={{ backgroundImage: GOLD_LINE }}
      aria-hidden="true"
    />
  );
}

// ─── Séparateur de pôle ───────────────────────────────────────────────────────

function PoleDivider({ label, tag }: { label: string; tag: string }) {
  return (
    <div className="col-span-full flex items-center gap-3 px-1 pb-6 pt-14 sm:gap-6 sm:pb-8 sm:pt-20">
      <GoldRule className="flex-1" />

      {/* `min-w-0 shrink` sous `sm` : évite que le bloc dépasse la largeur
          disponible et soit coupé par l'`overflow-hidden` du cadre. */}
      <div className="flex min-w-0 shrink flex-col items-center gap-2.5 text-center sm:shrink-0">
        <span className="rounded-full bg-[var(--color-gold)] px-3.5 py-1 font-serif text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-navy)] shadow-sm sm:text-xs">
          {tag}
        </span>
        {/* Le label porte le niveau de titre sémantique du pôle */}
        <h3 className="max-w-full text-balance text-center font-serif text-2xl font-semibold leading-tight text-[var(--color-navy)] sm:max-w-none sm:text-4xl">
          {label}
        </h3>
      </div>

      <GoldRule className="flex-1" />
    </div>
  );
}

// ─── Carte service — photo en fond, texte par-dessus ─────────────────────────
// La photo couvre tout le fond, un dégradé blanc remonte du bas et le contenu
// se pose dessus. La carte « spécialité » occupe toute la largeur et sert de
// point d'entrée ; les autres s'alignent sur 2 colonnes dès `md`, ce qui évite
// une page interminable de cartes pleine largeur.
// Photos en chargement différé : la section démarre ~2 écrans sous la ligne de
// flottaison, un préchargement volerait de la bande passante au hero (LCP).

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
    <Link
      href={`/services/${slug}`}
      aria-label={`${title} — en savoir plus`}
      className={[
        "group relative flex w-full flex-col justify-end overflow-hidden bg-white p-6 outline-none",
        "transition-all duration-500 ease-out hover:z-10 hover:shadow-[0_24px_48px_-12px_rgba(13,34,68,0.25)]",
        "focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-gold)]",
        "min-h-[340px] sm:min-h-[380px] sm:p-8 lg:p-10",
        // Léger soulèvement au survol (désactivé si l'utilisateur préfère
        // réduire les animations)
        "motion-reduce:hover:translate-y-0",
        isSpecialty ? "md:col-span-2 lg:min-h-[460px] lg:p-14" : "lg:min-h-[400px]",
      ].join(" ")}
    >
      {/* Photo de fond — décorative : le titre porte déjà l'information */}
      <Image
        src={bgImage}
        alt=""
        fill
        sizes={
          isSpecialty
            ? "(min-width: 1280px) 1200px, 100vw"
            : "(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
        }
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      {/* Dégradé blanc : lisibilité du texte posé dessus (un peu plus dense
          en bas pour que le texte reste net quelle que soit la photo) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-white via-white/90 via-45% to-transparent"
        aria-hidden="true"
      />

      {/* Filet doré qui se dessine au survol / au focus */}
      <span
        className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
        aria-hidden="true"
      />

      {/* Grand numéro en filigrane, en haut à droite : repère éditorial discret */}
      <span
        className="pointer-events-none absolute right-5 top-4 font-serif text-7xl font-light leading-none text-[var(--color-navy)] opacity-10 transition-all duration-500 group-hover:text-[var(--color-gold)] group-hover:opacity-25 motion-reduce:transition-none sm:right-8 sm:top-6 sm:text-8xl"
        aria-hidden="true"
      >
        {num}
      </span>

      {/* Contenu */}
      <div className="relative flex max-w-3xl flex-col gap-5 sm:gap-6">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-navy)] shadow-md ring-1 ring-[var(--color-gold)]/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:ring-transparent motion-reduce:group-hover:scale-100"
          aria-hidden="true"
        >
          <Icon size={26} strokeWidth={1.5} />
        </span>

        <div>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h4
              className={[
                "text-balance font-serif font-bold leading-snug text-[var(--color-navy)]",
                isSpecialty ? "text-2xl sm:text-3xl lg:text-4xl" : "text-2xl lg:text-[28px]",
              ].join(" ")}
            >
              {title}
            </h4>

            {isSpecialty && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-gold)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]">
                <Star size={9} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                Spécialité
              </span>
            )}
          </div>

          {/* Texte en navy plutôt qu'en `--color-muted` : posé sur une photo,
              le gris n'offrait plus le contraste minimum. */}
          <p className="max-w-prose text-pretty text-sm font-medium leading-relaxed text-[var(--color-navy)]/80 transition-colors duration-300 group-hover:text-[var(--color-navy)] sm:text-[15px]">
            {shortDesc}
          </p>

          {/* Toujours visible sur mobile/tactile ; révélé au survol ou au
              focus clavier sur desktop. */}
          <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-text)] transition-all duration-300 md:-translate-x-[5px] md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-visible:translate-x-0 md:group-focus-visible:opacity-100">
            En savoir plus{" "}
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
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
      className="bg-[var(--color-light)] px-4 py-20 sm:px-6 md:px-10 md:py-25"
    >
      <div className="container-tgt mx-auto max-w-7xl">
        {/* En-tête principal */}
        <Reveal className="mx-auto max-w-[760px] text-center">
          <GoldRule className="mx-auto mb-5 w-48" />

          <SectionLabel centered>Ce Que Nous Faisons</SectionLabel>

          <h2 className="text-balance font-serif text-[clamp(36px,5vw,68px)] font-semibold leading-[1.05] tracking-tight text-[var(--color-navy)]">
            Nos services de{" "}
            <em className="italic text-[var(--color-gold-title)]">
              nettoyage professionnel
            </em>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-pretty text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
            De votre salon à votre chantier, nous couvrons l&apos;ensemble de vos
            besoins en nettoyage à Paris et en Île-de-France.
          </p>

          <GoldRule className="mx-auto mt-6 w-48" />
        </Reveal>

        {/* Grille de services */}
        <Reveal className="mt-12 md:mt-16">
          {/* Le fond doré des `gap-px` forme les filets entre les cartes */}
          <div className="overflow-hidden rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c] shadow-xl">
            {servicesByPole.map(({ pole, items }) => (
              <div key={pole.id} className="bg-[var(--color-light)]">
                <div className="px-4 sm:px-6">
                  <PoleDivider label={pole.label} tag={pole.tag} />
                </div>

                {/* Spécialité en pleine largeur, le reste sur 2 colonnes dès
                    `md`. Les `gap-px` laissent apparaître un filet doré. */}
                <div className="grid grid-cols-1 gap-px md:grid-cols-2">
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
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center md:mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-[var(--color-navy)]/20 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] shadow-sm outline-none transition-all hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:text-[var(--color-gold-text)] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Voir le détail de nos prestations
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}