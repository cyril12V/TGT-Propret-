import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CONTACT, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales — TGT Propreté",
  description:
    "Mentions légales du site TGT Propreté : éditeur, hébergement, propriété intellectuelle.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="bg-[var(--color-light)] px-5 pt-32 pb-20 md:px-10">
        <article className="container-tgt prose-tgt">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-[var(--color-muted)]">
            <Link href="/" className="hover:text-[var(--color-gold)]">
              Accueil
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-[var(--color-navy)]">Mentions légales</span>
          </nav>

          <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-tight">
            Mentions légales
          </h1>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-[var(--color-muted)]">
            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Éditeur du site
              </h2>
              <p className="mt-3">
                {SITE.brand}
                <br />
                {CONTACT.address.street}, {CONTACT.address.postalCode}{" "}
                {CONTACT.address.city}, {CONTACT.address.region}, France
                <br />
                Téléphone : {CONTACT.phones[0]?.label}
                <br />
                Email : {CONTACT.email}
                <br />
                Responsable de la publication : {CONTACT.manager}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Hébergement
              </h2>
              <p className="mt-3">
                Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
                Covina, CA 91723, États-Unis —{" "}
                <a
                  href="https://vercel.com"
                  className="text-[var(--color-gold)] underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  vercel.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Propriété intellectuelle
              </h2>
              <p className="mt-3">
                L&apos;ensemble du contenu de ce site (textes, images, logos,
                graphismes) est la propriété exclusive de {SITE.brand}, sauf
                mention contraire. Toute reproduction, totale ou partielle, est
                strictement interdite sans autorisation préalable écrite.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Données personnelles
              </h2>
              <p className="mt-3">
                Pour toute information relative au traitement de vos données
                personnelles, consultez notre{" "}
                <Link
                  href="/politique-confidentialite"
                  className="text-[var(--color-gold)] underline"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Crédits
              </h2>
              <p className="mt-3">
                Conception et développement du site : équipe interne TGT
                Propreté. Polices : Cormorant Garamond et Jost, distribuées par
                Google Fonts.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
