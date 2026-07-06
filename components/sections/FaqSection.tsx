import { faqJsonLd } from "@/lib/seo";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Props = {
  items: { q: string; a: string }[];
  title?: string;
  intro?: string;
  variant?: "light" | "cream";
};

export function FaqSection({
  items,
  title = "Questions fréquentes",
  intro,
  variant = "light",
}: Props) {
  if (items.length === 0) return null;

  const bg =
    variant === "cream" ? "bg-[var(--color-cream)]" : "bg-[var(--color-light)]";

  return (
    <section
      className={`${bg} px-5 py-16 md:px-10 md:py-20`}
      aria-labelledby="faq-heading"
    >
      <div className="container-tgt max-w-[820px]">
        <SectionLabel>FAQ</SectionLabel>
        <h2
          id="faq-heading"
          className="mt-3 font-serif text-[clamp(32px,4.5vw,52px)] font-light leading-tight"
        >
          {title}
        </h2>
        {intro && (
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
            {intro}
          </p>
        )}

        <dl className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {items.map((item) => (
            <details
              key={item.q}
              className="group py-5"
              name="tgt-faq"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg font-semibold text-[var(--color-navy)] md:text-xl">
                <dt>{item.q}</dt>
                <span
                  aria-hidden="true"
                  className="mt-1 text-2xl leading-none text-[var(--color-gold)] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <dd className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                {item.a}
              </dd>
            </details>
          ))}
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqJsonLd(items.map((i) => ({ question: i.q, answer: i.a }))),
          ),
        }}
      />
    </section>
  );
}
