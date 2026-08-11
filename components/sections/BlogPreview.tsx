import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ARTICLES, formatPublishedDate } from "@/lib/articles";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function BlogPreview() {
  const articles = [...ARTICLES]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <section
      id="blog"
      className="bg-[var(--color-cream)] px-5 py-20 md:px-10 md:py-25"
      aria-labelledby="blog-heading"
    >
      <div className="container-tgt">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[620px] space-y-4">
            <SectionLabel>Le journal — TGT Propreté</SectionLabel>
            <h2
              id="blog-heading"
              className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-none"
            >
              Conseils &amp;{" "}
              <em className="italic text-[var(--color-gold)]">retours d&apos;expérience</em>
            </h2>
            <div className="mt-6 h-[2px] w-full max-w-[296px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
            <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
              Prix, fréquences, méthodes, anecdotes — on partage tout ce
              qu&apos;on a appris sur le nettoyage professionnel en
              Île-de-France.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-[var(--color-navy)]/15 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            Tous les articles <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className="mt-12 grid gap-px bg-[rgba(13,34,68,0.08)] sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {articles.map(({ slug, title, excerpt, category, Icon, publishedAt, readingTime }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group flex flex-col gap-4 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.08)]"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)] transition-colors group-hover:bg-[var(--color-gold)]"
                  aria-hidden="true"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  {category}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold leading-tight text-[var(--color-navy)] md:text-[22px]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-[var(--color-muted)]">
                <time dateTime={publishedAt}>{formatPublishedDate(publishedAt)}</time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={12} aria-hidden="true" />
                  {readingTime} min
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
