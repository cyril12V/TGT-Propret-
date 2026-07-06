import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page introuvable — TGT Propreté",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-navy)] px-5 text-center text-white">
      <div className="font-serif text-[clamp(80px,15vw,200px)] font-light leading-none text-[var(--color-gold)]">
        404
      </div>
      <h1 className="mt-4 font-serif text-3xl font-light md:text-5xl">
        Page <em className="italic text-[var(--color-gold)]">introuvable</em>
      </h1>
      <p className="mt-4 max-w-md text-sm text-white/60">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block bg-[var(--color-gold)] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-2)]"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
