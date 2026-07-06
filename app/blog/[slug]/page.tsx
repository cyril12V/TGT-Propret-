import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactBand } from "@/components/sections/ContactBand";
import { ARTICLES, formatPublishedDate, getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/constants";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };

  return buildMetadata({
    title: `${article.title} — Blog TGT Propreté`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    keywords: article.keywords,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <Nav />
      <main id="main">
        <article>
          <header className="bg-[var(--color-navy)] px-5 pb-12 pt-32 text-white md:px-10 md:pb-16 md:pt-36">
            <div className="container-tgt">
              <nav
                aria-label="Fil d'Ariane"
                className="mb-8 text-xs text-white/55"
              >
                <Link href="/" className="hover:text-[var(--color-gold)]">
                  Accueil
                </Link>
                <span aria-hidden="true"> / </span>
                <Link href="/blog" className="hover:text-[var(--color-gold)]">
                  Blog
                </Link>
                <span aria-hidden="true"> / </span>
                <span className="text-white">{article.title}</span>
              </nav>

              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                <span className="h-px w-7 bg-[var(--color-gold)]" aria-hidden="true" />
                {article.category}
              </div>

              <h1 className="mt-3 font-serif text-[clamp(36px,6vw,64px)] font-light leading-[1.05]">
                {article.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
                {article.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60">
                <span className="inline-flex items-center gap-2">
                  <User size={14} strokeWidth={1.6} aria-hidden="true" />
                  {article.author}
                </span>
                <time
                  dateTime={article.publishedAt}
                  className="inline-flex items-center gap-2"
                >
                  <CalendarDays size={14} strokeWidth={1.6} aria-hidden="true" />
                  {formatPublishedDate(article.publishedAt)}
                </time>
                <span className="inline-flex items-center gap-2">
                  <Clock size={14} strokeWidth={1.6} aria-hidden="true" />
                  {article.readingTime} min de lecture
                </span>
              </div>
            </div>
          </header>

          <div className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-20">
            <div className="container-tgt max-w-[760px]">
              {article.content}

              <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)] transition-colors hover:text-[var(--color-gold)]"
                >
                  <ArrowLeft size={14} aria-hidden="true" /> Retour au blog
                </Link>
                <Link
                  href="/#candidature"
                  className="inline-flex items-center gap-2 bg-[var(--color-navy)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--color-navy-2)]"
                >
                  Demander un devis <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {others.length > 0 && (
            <section className="bg-[var(--color-cream)] px-5 py-16 md:px-10 md:py-20">
              <div className="container-tgt">
                <h2 className="font-serif text-3xl font-light text-[var(--color-navy)] md:text-4xl">
                  À lire ensuite
                </h2>
                <div className="mt-8 grid gap-px bg-[rgba(13,34,68,0.08)] sm:grid-cols-2">
                  {others.map((a) => {
                    const Icon = a.Icon;
                    return (
                      <Link
                        key={a.slug}
                        href={`/blog/${a.slug}`}
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
                            {a.category}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold leading-tight text-[var(--color-navy)] md:text-2xl">
                          {a.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                          {a.excerpt}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </article>
        <ContactBand />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(article)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: SITE.url },
              { name: "Blog", url: `${SITE.url}/blog` },
              { name: article.title, url: `${SITE.url}/blog/${article.slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}
