import { CONTACT, MALIKA } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-32"
      style={{
        // Bleu nuit — harmonisé avec la charte (navy de la marque), plus doux qu'un noir franc
        background:
          "linear-gradient(165deg, #0d2244 0%, #16305f 52%, #0f2749 100%)",
      }}
    >
      {/* Halo doré discret pour lier la section au reste de la page */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* ---------------- TITRE DE LA SECTION ---------------- */}
      <div className="relative max-w-7xl mx-auto px-4 w-full text-center pb-16 md:pb-24">
        <span className="text-[11px] uppercase tracking-[0.5em] text-[#c9a84c] font-semibold block mb-4">
          L&apos;Excellence à votre service
        </span>
        <h2 className="font-serif text-4xl md:text-6xl font-light tracking-widest text-white uppercase">
          Notre <em className="italic text-[var(--color-gold)]">Équipe</em>
        </h2>
        <div className="mt-6 mx-auto w-26 h-[2px] bg-gradient-to-l from-transparent via-[#c9a84c] to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto space-y-24">

        {/* ---------------- SECTION RABAH AMMOUCHE ---------------- */}
        <div className="w-full">
          <Reveal>
            {/* Grille responsive : Photo en haut sur mobile, Gauche sur Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

              {/* Côté Gauche : L'image du fondateur */}
              <div className="w-full flex justify-center items-center p-4">
                <div className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[4/5]">
                  {/* Cadre doré décalé — encadrement raffiné */}
                  <span
                    className="pointer-events-none absolute -inset-3 rounded-[400px_400px_20px_20px] border border-[#c9a84c]/40"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/ID_photo.jpg"
                    alt="Portrait de Rabah Ammouche"
                    className="relative w-full h-full object-cover object-center rounded-[400px_400px_20px_20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)] border-[2px] border-[#c9a84c]"
                  />
                </div>
              </div>

              {/* Côté Droit : Le texte de présentation */}
              <div className="flex flex-col justify-center text-left px-4 md:px-0">
                <span className="text-[12px] uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3 block">
                  Co-fondateur &amp; Gérant
                </span>

                <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-wide mb-2 text-white">
                  {CONTACT.manager}
                </h3>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-6 block font-medium">
                  {CONTACT.role}
                </span>

                <p className="text-[15px] font-light leading-relaxed text-white/80 mb-8 max-w-xl text-justify">
                  Étudiant en informatique et entrepreneur déterminé, Rabah Ammouche mène de front ses études supérieures et la direction de TGT Propreté. Il a cofondé cette entreprise avec un objectif clair : bousculer la concurrence traditionnelle en imposant un standard supérieur, axé sur l&apos;obsession du petit détail. Porté par une culture de la précision et une rigueur à toute épreuve, il se différencie sur le marché par son ultra-réactivité et un niveau d&apos;exigence sans compromis.
                </p>

                <div className="border-t border-[#c9a84c]/25 pt-6 max-w-md">
                  <p className="font-serif text-[18px] md:text-[20px] italic text-[var(--color-gold-2)] leading-snug">
                    &quot;Ce qui se cache à l&apos;œil nu, nous le voyons.&quot;
                  </p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>


        {/* ---------------- SECTION MALIKA TLILI ---------------- */}
        <div className="w-full">
          <Reveal>
            {/* Inversion de l'ordre sur desktop : Texte à gauche, Photo à droite pour briser la monotonie */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

              {/* Côté Gauche : Le texte de présentation */}
              <div className="flex flex-col justify-center text-left px-4 md:px-0 order-2 md:order-1">
                <span className="text-[12px] uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3 block">
                  Co-fondatrice &amp; Co-gérante
                </span>

                <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-wide mb-2 text-white">
                  {MALIKA.gérante}
                </h3>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-6 block font-medium">
                  {MALIKA.role}
                </span>

                <p className="text-[15px] font-light leading-relaxed text-white/80 mb-8 max-w-xl text-justify">
                  Forte d&apos;une expertise de plus de 8 ans sur le terrain de la propreté, Malika Tlili a décidé de transformer ce savoir-faire d&apos;excellence en cofondant sa propre structure. Véritable pilier opérationnel de TGT Propreté, elle maîtrise chaque aspect technique et réglementaire du secteur. Elle se distingue par une exigence managériale stricte et une rigueur absolue, garantissant que la promesse du &quot;petit détail&quot; soit appliquée avec une régularité irréprochable sur chaque chantier.
                </p>

                <div className="border-t border-[#c9a84c]/25 pt-6 max-w-md">
                  <p className="font-serif text-[18px] md:text-[20px] italic text-[var(--color-gold-2)] leading-snug">
                    &quot;La rigueur opérationnelle au service de votre image.&quot;
                  </p>
                </div>
              </div>

              {/* Côté Droit : L'image de la co-fondatrice (Effet miroir parfait) */}
              <div className="w-full flex justify-center items-center p-4 order-1 md:order-2">
                <div className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[4/5]">
                  {/* Cadre doré décalé — encadrement raffiné */}
                  <span
                    className="pointer-events-none absolute -inset-3 rounded-[400px_400px_20px_20px] border border-[#c9a84c]/40"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/ID_photo_M.png"
                    alt="Portrait de Malika Tlili"
                    className="relative w-full h-full object-cover object-center rounded-[400px_400px_20px_20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)] border-[2px] border-[#c9a84c]"
                  />
                </div>
              </div>

            </div>
          </Reveal>
        </div>

      </div>

      {/* ---------------- BADGE INTERMÉDIAIRE DE RÉACTIVITÉ ---------------- */}
      <div className="relative flex justify-center items-center mt-20 md:mt-32 px-4">
        <div className="flex items-center border border-[#c9a84c]/70 bg-white/[0.04] px-8 py-4 rounded-sm shadow-xl backdrop-blur-md transform transition-transform duration-500 hover:scale-105">
          <div className="flex items-center">
            <span className="font-serif text-[#c9a84c] text-3xl tracking-widest font-light">
              1h
            </span>
          </div>
          <div className="h-10 w-[2px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent mx-6"></div>
          <div className="flex items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/85 font-medium">
              Réponse en moins de 1h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
