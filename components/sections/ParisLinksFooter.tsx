import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PARIS_ARRONDISSEMENTS } from "@/lib/zones-paris";

type Props = {
  title?: string;
  intro?: string;
  variant?: "light" | "cream" | "navy";
  excludeSlug?: string;
};

export function ParisLinksFooter({
  title = "Nous intervenons à Paris",
  intro = "TGT Propreté couvre les principaux arrondissements de Paris. Cliquez sur votre arrondissement pour découvrir nos prestations locales.",
  variant = "cream",
  excludeSlug,
}: Props) {
  const items = excludeSlug
    ? PARIS_ARRONDISSEMENTS.filter((a) => a.slug !== excludeSlug)
    : PARIS_ARRONDISSEMENTS;

  const bg =
    variant === "navy"
      ? "bg-[var(--color-navy)] text-white"
      : variant === "cream"
        ? "bg-[var(--color-cream)]"
        : "bg-[var(--color-light)]";

  const titleColor = variant === "navy" ? "text-white" : "";
  const introColor =
    variant === "navy" ? "text-white/65" : "text-[var(--color-muted)]";
  const cardBg =
    variant === "navy"
      ? "bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(201,168,76,0.08)] border-[rgba(201,168,76,0.18)]"
      : "bg-white hover:border-[var(--color-gold)] border-[var(--color-navy)]/10";
  const cardText =
    variant === "navy" ? "text-white" : "text-[var(--color-navy)]";

  return (
    <section className={`${bg} px-5 py-16 md:px-10 md:py-20`}>
      <div className="container-tgt">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <h2
              className={`font-serif text-[clamp(28px,3.5vw,42px)] font-light leading-tight ${titleColor}`}
            >
              {title}
            </h2>
            <p className={`mt-3 text-[15px] leading-relaxed ${introColor}`}>
              {intro}
            </p>
          </div>
          <Link
            href="/zones/paris"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] hover:underline"
          >
            Hub Paris <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {items.map((arr) => (
            <li key={arr.slug}>
              <Link
                href={`/zones/paris/${arr.slug}`}
                className={`block border ${cardBg} p-4 transition-colors`}
              >
                <div
                  className={`font-serif text-lg font-semibold ${cardText}`}
                >
                  Paris {arr.number}
                  <sup>e</sup>
                </div>
                <div
                  className={`mt-0.5 text-xs ${variant === "navy" ? "text-white/55" : "text-[var(--color-muted)]"}`}
                >
                  {arr.district}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
