import { CONTACT, MALIKA } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
   <section
  id="about"
  className="bg-[var(--color-cream)] py-20 md:py-32 overflow-hidden"
>
  {/* ---------------- TITRE DE LA SECTION ---------------- */}
  <div className="max-w-7xl mx-auto px-4 w-full text-center pb-16 md:pb-24">
    <span className="text-[11px] uppercase tracking-[0.5em] text-[#c9a84c] font-semibold block mb-4">
      L'Excellence à votre service
    </span>
    <h2 className="font-serif text-4xl md:text-6xl font-light tracking-widest text-[var(--color-navy)] uppercase">
      Notre <em className="italic text-[var(--color-gold)]">Équipe</em>
    </h2>
    <div className="mt-6 mx-auto w-26 h-[2px] bg-gradient-to-l from-transparent via-[#c9a84c] to-transparent"></div>
  </div>
  
  <div className="max-w-7xl mx-auto  space-y-24 ">
    
    {/* ---------------- SECTION RABAH AMMOUCHE ---------------- */}
    <div className="w-full ">
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
                className="relative w-full h-full object-cover object-center rounded-[400px_400px_20px_20px] shadow-[0_25px_50px_-12px_rgba(13,34,68,0.45)] border-[2px] border-[#c9a84c]"
              />
            </div>
          </div>

          {/* Côté Droit : Le texte de présentation */}
          <div className="flex flex-col justify-center text-left px-4 md:px-0">
            <span className="text-[12px] uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3 block">
              Co-fondateur & Gérant
            </span>

            <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-wide mb-2 text-[var(--color-navy)]">
              {CONTACT.manager}
            </h3>

            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-navy)]/40 mb-6 block font-medium">
              {CONTACT.role}
            </span>

            <p className="text-[15px] font-light leading-relaxed text-[var(--color-navy)]/80 mb-8 max-w-xl text-justify">
              Étudiant en informatique et entrepreneur déterminé, Rabah Ammouche mène de front ses études supérieures et la direction de TGT Propreté. Il a cofondé cette entreprise avec un objectif clair : bousculer la concurrence traditionnelle en imposant un standard supérieur, axé sur l'obsession du petit détail. Porté par une culture de la précision et une rigueur à toute épreuve, il se différencie sur le marché par son ultra-réactivité et un niveau d'exigence sans compromis.
            </p>

            <div className="border-t border-[#c9a84c]/20 pt-6 max-w-md">
              <p className="font-serif text-[18px] md:text-[20px] italic text-[#c9a84c] leading-snug">
                "Ce qui se cache à l'œil nu, nous le voyons."
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
              Co-fondatrice & Co-gérante
            </span>

            <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-wide mb-2 text-[var(--color-navy)]">
              {MALIKA.gérante}
            </h3>

            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-navy)]/40 mb-6 block font-medium">
              {MALIKA.role}
            </span>

            <p className="text-[15px] font-light leading-relaxed text-[var(--color-navy)]/80 mb-8 max-w-xl text-justify">
              Forte d'une expertise de plus de 8 ans sur le terrain de la propreté, Malika Tlili a décidé de transformer ce savoir-faire d'excellence en cofondant sa propre structure. Véritable pilier opérationnel de TGT Propreté, elle maîtrise chaque aspect technique et réglementaire du secteur. Elle se distingue par une exigence managériale stricte et une rigueur absolue, garantissant que la promesse du "petit détail" soit appliquée avec une régularité irréprochable sur chaque chantier.
            </p>

            <div className="border-t border-[#c9a84c]/20 pt-6 max-w-md">
              <p className="font-serif text-[18px] md:text-[20px] italic text-[#c9a84c] leading-snug">
                "La rigueur opérationnelle au service de votre image."
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
                className="relative w-full h-full object-cover object-center rounded-[400px_400px_20px_20px] shadow-[0_25px_50px_-12px_rgba(13,34,68,0.45)] border-[2px] border-[#c9a84c]"
              />
            </div>
          </div>

        </div>
      </Reveal>
    </div>

  </div>

  {/* ---------------- BADGE INTERMÉDIAIRE DE RÉACTIVITÉ ---------------- */}
  <div className="flex justify-center items-center mt-20 md:mt-32 px-4">
    <div className="flex items-center border border-[#c9a84c] px-8 py-4 rounded-sm shadow-xl backdrop-blur-md transform transition-transform duration-500 hover:scale-105">
      <div className="flex items-center">
        <span className="font-serif text-[#c9a84c] text-3xl tracking-widest font-light">
          1h
        </span>
      </div>
      <div className="h-10 w-[2px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent mx-6"></div>
      <div className="flex items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-navy)] font-medium">
          Réponse en moins de 1h
        </span>
      </div>
    </div>
  </div>
</section>


  );
}
