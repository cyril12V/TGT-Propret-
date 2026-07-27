import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getZonesByDepartment } from "@/lib/zones";
import { PARIS_ARRONDISSEMENTS } from "@/lib/zones-paris";

/**
 * Bloc « Zones d'intervention » de la page d'accueil.
 * Sans lui, l'accueil ne pointait vers aucune page géographique : les 20
 * arrondissements et les 20 communes ne dépendaient que du footer.
 */
export function ZonesBand() {
  const byDepartment = getZonesByDepartment();

  return (
    <section
      id="zones-intervention"
      className="bg-[var(--color-cream)] px-5 py-20 md:px-10 md:py-24"
      aria-labelledby="zones-heading"
    >
      <div className="container-tgt">
        <Reveal className="space-y-4 text-center">
          <SectionLabel centered>Où nous intervenons</SectionLabel>

          <div className="flex flex-col items-center">
            <h2
              id="zones-heading"
              className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-none text-[var(--color-navy)]"
            >
              Zones d&apos;intervention{" "}
              <em className="italic text-[var(--color-gold)]">
                en Île-de-France
              </em>
            </h2>
            <div
              className="mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"
              aria-hidden="true"
            />
          </div>

          <p className="mx-auto max-w-[620px] text-[15px] leading-relaxed text-[var(--color-muted)]">
            TGT Propreté couvre les {PARIS_ARRONDISSEMENTS.length}{" "}
            arrondissements de Paris et les principales communes
            d&apos;Île-de-France, depuis notre siège de Bondy (93140). Chaque
            secteur dispose de sa page dédiée.
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-14">
          <Link
            href="/zones/paris"
            className="group flex flex-col gap-3 border border-[var(--color-navy)]/10 bg-[var(--color-navy)] p-8 text-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.18)] md:flex-row md:items-center md:justify-between"
          >
            <span>
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                <MapPin size={13} aria-hidden="true" />
                Paris · 75
              </span>
              <span className="mt-2 block font-serif text-2xl font-light md:text-3xl">
                Nettoyage dans les {PARIS_ARRONDISSEMENTS.length}{" "}
                arrondissements de Paris
              </span>
            </span>
            <span className="inline-flex flex-shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Voir le hub Paris
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        </Reveal>

        <Reveal className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {byDepartment.map((dept) => (
            <div key={dept.code}>
              <h3 className="font-serif text-lg font-semibold text-[var(--color-navy)]">
                {dept.name}{" "}
                <span className="font-sans text-xs text-[var(--color-gold)]">
                  {dept.code}
                </span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-muted)]">
                {dept.zones.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zones/${z.slug}`}
                      className="transition-colors hover:text-[var(--color-gold)]"
                    >
                      Nettoyage à {z.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12 text-center">
          <Link
            href="/zones"
            className="inline-flex items-center gap-2 border border-[var(--color-navy)]/20 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            Toutes nos zones d&apos;intervention
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
