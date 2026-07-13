import { MapPin } from "lucide-react";
import { REALISATIONS } from "@/lib/realisations";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Realisations() {
  if (REALISATIONS.length === 0) return null;

  return (
    <section
      id="realisations"
      className="bg-[var(--color-light)] px-5 py-20 md:px-10 md:py-25"
    >
      <div className="container-tgt mx-auto max-w-7xl">

        {/* En-tête */}
        <Reveal className="mx-auto max-w-[620px] text-center">
          <div
            className="mx-auto mb-4 h-px w-48"
            style={{
              background:
                "linear-gradient(to right, transparent, #c9a84c, transparent)",
            }}
            aria-hidden="true"
          />

          <SectionLabel centered>Avant / Après</SectionLabel>

          <h2 className="font-serif text-[clamp(40px,5vw,68px)] font-semibold leading-none tracking-tight text-[var(--color-navy)]">
            Nos <em className="italic text-[var(--color-gold)]">Réalisations</em>
          </h2>

          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
            Faites glisser le curseur pour découvrir la différence. La preuve de
            notre exigence, chantier après chantier.
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

        {/* Grille de réalisations (masonry — gère les orientations mixtes) */}
        <div className="mt-12 gap-8 md:mt-16 md:columns-2">
          {REALISATIONS.map((r, i) => (
            <Reveal key={r.id} delay={i * 80} className="mb-8 break-inside-avoid">
              <figure className="group overflow-hidden border border-[#c9a84c]/25 bg-white shadow-lg">
                <BeforeAfter
                  beforeImage={r.beforeImage}
                  afterImage={r.afterImage}
                  beforeAlt={`${r.title} — avant intervention`}
                  afterAlt={`${r.title} — après intervention TGT Propreté`}
                  ratio={r.ratio ?? "4 / 3"}
                />
                <figcaption className="flex items-start justify-between gap-4 px-6 py-5">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                      {r.category}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-[var(--color-navy)]">
                      {r.title}
                    </h3>
                  </div>
                  {r.location && (
                    <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs text-[var(--color-muted)]">
                      <MapPin size={13} aria-hidden="true" />
                      {r.location}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
