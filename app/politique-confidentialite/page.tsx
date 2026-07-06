import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CONTACT, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité — TGT Propreté",
  description:
    "Comment TGT Propreté collecte, utilise et protège vos données personnelles conformément au RGPD.",
  path: "/politique-confidentialite",
});

export default function ConfidentialitePage() {
  return (
    <>
      <Nav />
      <main id="main" className="bg-[var(--color-light)] px-5 pt-32 pb-20 md:px-10">
        <article className="container-tgt">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-[var(--color-muted)]">
            <Link href="/" className="hover:text-[var(--color-gold)]">
              Accueil
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-[var(--color-navy)]">
              Politique de confidentialité
            </span>
          </nav>

          <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-tight">
            Politique de confidentialité
          </h1>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-[var(--color-muted)]">
            <p>
              {SITE.brand} accorde une importance particulière à la protection
              de vos données personnelles. Cette politique vous informe des
              traitements réalisés conformément au Règlement Général sur la
              Protection des Données (RGPD) et à la loi Informatique et
              Libertés.
            </p>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Données collectées
              </h2>
              <p className="mt-3">
                Lors de l&apos;envoi du formulaire de candidature, nous
                collectons les données suivantes : prénom, nom, téléphone,
                email, poste souhaité, disponibilité et message libre. Ces
                données sont nécessaires au traitement de votre candidature.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Finalité du traitement
              </h2>
              <p className="mt-3">
                Vos données sont utilisées exclusivement pour étudier votre
                candidature, vous recontacter et le cas échéant constituer un
                dossier d&apos;embauche. Aucune donnée n&apos;est cédée ni
                vendue à des tiers.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Durée de conservation
              </h2>
              <p className="mt-3">
                Les candidatures non retenues sont conservées 2 ans à compter
                du dernier contact, sauf opposition de votre part.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Vos droits
              </h2>
              <p className="mt-3">
                Vous disposez d&apos;un droit d&apos;accès, de rectification,
                de suppression, de limitation et d&apos;opposition au
                traitement de vos données. Pour exercer ces droits, contactez :{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[var(--color-gold)] underline"
                >
                  {CONTACT.email}
                </a>
                .
              </p>
              <p className="mt-3">
                Vous pouvez également introduire une réclamation auprès de la
                CNIL —{" "}
                <a
                  href="https://www.cnil.fr"
                  className="text-[var(--color-gold)] underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  cnil.fr
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                Cookies
              </h2>
              <p className="mt-3">
                Ce site n&apos;utilise aucun cookie de tracking publicitaire.
                Seuls des cookies techniques strictement nécessaires au bon
                fonctionnement du site peuvent être déposés.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
