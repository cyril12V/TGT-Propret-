import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { DevisForm } from "@/components/sections/DevisForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { ParisLinksFooter } from "@/components/sections/ParisLinksFooter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CONTACT, ENGAGEMENTS, SITE } from "@/lib/constants";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

const DEVIS_FAQS = [
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui. Nous établissons votre devis gratuitement et sans engagement de votre part. Vous n'avez aucune obligation de signer après réception.",
  },
  {
    q: "Combien de temps pour recevoir mon devis ?",
    a: "24 heures maximum. Pour les bureaux, copropriétés et fins de chantier complexes, nous proposons souvent une visite préalable gratuite avant de chiffrer précisément.",
  },
  {
    q: "Quelles informations dois-je fournir ?",
    a: "Le type de prestation, la surface approximative, la zone d'intervention (arrondissement parisien ou ville d'Île-de-France), et la fréquence souhaitée. Plus vous nous donnez de détails, plus notre devis sera précis.",
  },
  {
    q: "Que se passe-t-il après le devis ?",
    a: "Si le devis vous convient, nous fixons ensemble une date de démarrage. Nous signons un contrat clair (durée, modalités de résiliation, fréquence) et nous démarrons l'intervention. Pour les prestations ponctuelles, paiement à l'intervention. Pour les contrats récurrents, facturation mensuelle.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Devis nettoyage Paris gratuit sous 24h — TGT Propreté",
  description:
    "Demandez votre devis nettoyage gratuit sous 24h. Bureaux, particuliers, copropriétés, fin de chantier à Paris et en Île-de-France. Sans engagement, réponse rapide.",
  path: "/devis",
  keywords: [
    "devis nettoyage Paris",
    "devis société nettoyage Paris",
    "devis ménage Paris",
    "devis nettoyage bureaux Paris",
    "devis nettoyage copropriété",
  ],
});

export default function DevisPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <header className="bg-[var(--color-navy)] px-5 pb-14 pt-32 text-white md:px-10 md:pb-16 md:pt-36">
          <div className="container-tgt">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-white/55">
              <Link href="/" className="hover:text-[var(--color-gold)]">
                Accueil
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white">Devis</span>
            </nav>

            <SectionLabel>Devis gratuit</SectionLabel>
            <h1 className="mt-3 font-serif text-[clamp(36px,5.5vw,68px)] font-light leading-[1.05]">
              Devis gratuit pour votre{" "}
              <em className="italic text-[var(--color-gold)]">nettoyage à Paris</em>
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/70">
              Décrivez votre besoin en quelques minutes. Nous revenons vers
              vous sous 24h avec un devis détaillé, transparent et sans
              engagement. Pour les urgences, un appel direct va plus vite.
            </p>

            <ul className="mt-8 grid gap-4 text-sm text-white/70 sm:grid-cols-3">
              <li className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(201,168,76,0.12)] text-[var(--color-gold)]"
                  aria-hidden="true"
                >
                  <Clock size={18} strokeWidth={1.7} />
                </span>
                Réponse sous 24h
              </li>
              <li className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(201,168,76,0.12)] text-[var(--color-gold)]"
                  aria-hidden="true"
                >
                  <ShieldCheck size={18} strokeWidth={1.7} />
                </span>
                Gratuit &amp; sans engagement
              </li>
              <li className="flex items-center gap-3">
                <a
                  href={`tel:${CONTACT.phones[0]?.tel}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold-2)]"
                  aria-label="Appeler directement"
                >
                  <Phone size={18} strokeWidth={2} />
                </a>
                Ou appelez-nous : {CONTACT.phones[0]?.label}
              </li>
            </ul>
          </div>
        </header>

        <section className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-20">
  <div className="container-tgt grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
    <Suspense fallback={<div className="h-[500px]" />}>
      <DevisForm />
    </Suspense>

    <aside className="space-y-8">
      {/* Section : Pourquoi TGT Propreté ? */}
      <div>
        <h2 className="font-serif text-2xl font-semibold text-[var(--color-navy)] md:text-3xl">
          Pourquoi TGT Propreté ?
        </h2>
        <ul className="mt-5 space-y-5">
          {ENGAGEMENTS.slice(0, 4).map(({ Icon, title, desc }) => (
            <li key={title} className="flex items-start gap-4">
              <span
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-navy)]"
                aria-hidden="true"
              >
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-[var(--color-navy)]">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Section : Bloc Contact Direct Premium */}
      <div className="rounded-2xl bg-[var(--color-navy)] p-6 md:p-8 text-white shadow-xl border border-white/5 backdrop-blur-sm">
        <h2 className="font-serif text-xl font-semibold tracking-wide">
          Préférer un <span className="text-[var(--color-gold)]">contact direct</span> ?
        </h2>
        
        {/* Grid interne pour séparer proprement la liste et la carte */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          {/* Liste des contacts */}
          <div>
            <ul className="space-y-4 text-sm font-medium text-white/80">
              {CONTACT.phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="group inline-flex items-center gap-3 transition-all duration-300 hover:text-[var(--color-gold)] hover:translate-x-1"
                  >
                    <Phone size={15} aria-hidden="true" className="text-[var(--color-gold)] transition-transform group-hover:scale-110" /> 
                    <span>{p.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-3 transition-all duration-300 hover:text-[var(--color-gold)] hover:translate-x-1"
                >
                  <Mail size={15} aria-hidden="true" className="text-[var(--color-gold)] transition-transform group-hover:scale-110" /> 
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Conteneur de la Carte de Visite animée */}
          <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/30">
            <img 
              src="/images/Carte_de_visite.jpg" 
              alt="Notre carte de visite" 
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

        </div>
      </div>
    </aside>
  </div>
</section>

        <FaqSection
          title="Questions sur le devis"
          items={DEVIS_FAQS}
          variant="cream"
        />

        <ParisLinksFooter
          title="Vous êtes dans un arrondissement spécifique ?"
          intro="Sélectionnez votre arrondissement pour découvrir nos prestations locales et nos tarifs indicatifs."
          variant="light"
        />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: SITE.url },
              { name: "Devis", url: `${SITE.url}/devis` },
            ]),
          ),
        }}
      />
    </>
  );
}
