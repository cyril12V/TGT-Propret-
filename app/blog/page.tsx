import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ARTICLES, formatPublishedDate } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Le journal de TGT Propreté — conseils, prix, retours d'expérience",
  description:
    "Articles pratiques et retours d'expérience sur le nettoyage professionnel en Île-de-France : prix, fréquences, fin de chantier, écologie. Mis à jour régulièrement.",
  path: "/blog",
  keywords: [
    "blog nettoyage",
    "conseils nettoyage Île-de-France",
    "prix société de nettoyage",
    "actualités TGT Propreté",
  ],
});

export default function BlogIndexPage() {
  const sorted = [...ARTICLES].sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <>
      <Nav />
      <main id="main" className="bg-[var(--color-light)]">
        <header className="bg-[var(--color-navy)] px-5 pb-16 pt-32 text-white md:px-10 md:pb-24 md:pt-36">
          <div className="container-tgt">
            <SectionLabel>Le journal TGT Propreté</SectionLabel>
            <h1 className="mt-3 font-serif text-[clamp(40px,6vw,72px)] font-light leading-tight">
              Conseils &amp; retours{" "}
              <em className="italic text-[var(--color-gold)]">d&apos;expérience</em>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">
              Prix, fréquences, méthodes, produits, anecdotes de chantier — on
              partage ce qu&apos;on a appris depuis 2018 sur le nettoyage
              professionnel en Île-de-France.
            </p>
          </div>
        </header>

        <section className="px-5 py-16 md:px-10 md:py-24">
          <div className="container-tgt">
            <div className="grid gap-px bg-[rgba(13,34,68,0.08)] sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map(({ slug, title, excerpt, category, Icon, publishedAt, readingTime }) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group flex flex-col gap-4 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.08)] md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)] transition-colors group-hover:bg-[var(--color-gold)]"
                      aria-hidden="true"
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      {category}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-semibold leading-tight text-[var(--color-navy)] md:text-[26px]">
                    {title}
                  </h2>

                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-[var(--color-muted)]">
                    <time dateTime={publishedAt}>
                      {formatPublishedDate(publishedAt)}
                    </time>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} aria-hidden="true" />
                      {readingTime} min
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] opacity-0 transition-opacity group-hover:opacity-100">
                    Lire l&apos;article <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
