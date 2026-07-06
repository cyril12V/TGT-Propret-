import { ENGAGEMENTS } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function EngagementsBand() {
  return (
    <section
      id="engagements"
      className="bg-[var(--color-navy)] px-5 py-12 text-white md:px-10 md:py-16"
      aria-label="Nos engagements"
    >
      <div className="container-tgt">
        <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENTS.slice(0, 4).map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 border-l border-[rgba(201,168,76,0.3)] pl-5"
            >
              <span
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(201,168,76,0.12)] text-[var(--color-gold)]"
                aria-hidden="true"
              >
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/55">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
