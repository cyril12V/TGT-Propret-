import { Award, MapPinned, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const REASONS = [
  {
    Icon: Award,
    title: "8 + années d'expérience",
    desc: "Forts de plus de 8 ans dans le secteur, nous maîtrisons chaque type d'intervention avec rigueur et méthode.",
  },
  {
    Icon: Users,
    title: "Polyvalence reconnue",
    desc: "Particuliers, entreprises, chantiers — notre savoir-faire couvre l'ensemble des besoins en propreté.",
  },
  {
    Icon: Sparkles,
    title: "Exigence sur les détails",
    desc: "Nous ne livrons que ce que nous serions fiers d'avoir chez nous. Chaque finition est contrôlée.",
  },
  {
    Icon: MapPinned,
    title: "Toute l'Île-de-France",
    desc: "Basés à Bondy (93140), nous intervenons rapidement dans tout le 93 et l'agglomération parisienne.",
  },
];

export function WhyUs() {
  return (
    <section
      id="pourquoi-nous"
      className="bg-[var(--color-navy)] px-5 py-20 text-white md:px-10 md:py-25"
    >
      <div className="container-tgt">
        <Reveal className="space-y-4 text-center">
          <SectionLabel centered>Pourquoi Nous Choisir</SectionLabel>

          <div className="flex flex-col items-center">
            <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-none text-white">
              Pourquoi choisir TGT Propreté{" "}
              <em className="italic text-[#c9a84c]">en Île-de-France</em>
            </h2>

            {/* Trait de séparation horizontal en dégradé symétrique (Prestige) */}
            <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          </div>
          <p className="mx-auto max-w-[560px] text-[15px] leading-relaxed text-white/60">
            Quatre raisons pour lesquelles particuliers et entreprises nous
            choisissent en Île-de-France.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-16 md:gap-10">
          {REASONS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="relative pt-7 before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#c9a84c] before:to-transparent"
            >
              <span
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c]"
                aria-hidden="true"
              >
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <h3 className="mb-3 font-serif text-xl font-semibold text-white md:text-2xl">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">{desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
