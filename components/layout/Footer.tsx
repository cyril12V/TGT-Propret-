import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, IDF_DEPARTMENTS, SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { PARIS_ARRONDISSEMENTS } from "@/lib/zones-paris";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ScrollTopLogo } from "@/components/ui/ScrollTopLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] px-5 pb-7 pt-15 text-white md:px-10 md:pt-16">
      <div className="container-tgt">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="font-serif text-3xl font-light tracking-[0.15em] text-white">
              TGT<span className="text-[var(--color-gold)]">Propreté</span>{" "}
              <span className="text-sm tracking-wider text-white/30">Soigné</span>
              <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-transparent to-[#c9a84c]"></div>
            </div>

            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-white/40">
              Entreprise de nettoyage professionnel à Paris et en Île-de-France.
              Devis gratuit sous 24h.
            </p>
            <ul className="mt-6 flex gap-3" aria-label="Réseaux sociaux">
              {CONTACT.socials.map((s, i) => {
                // On vérifie si c'est le deuxième élément (index === 1)
                const isSecond = i === 1;

                return (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      aria-label={s.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-[5px] flex h-10 w-10 items-center justify-center border transition-all
            ${isSecond
                          ? "border-[#ceb774] text-[#ceb774] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                          : "border-white text-white hover:border-[#ceb774] hover:text-[#ceb774]"
                        }`}
                    >
                      <SocialIcon name={s.name} size={16} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <ScrollTopLogo />

          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-[var(--color-gold)]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Ressources
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-[var(--color-gold)]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/devis"
                  className="transition-colors hover:text-[var(--color-gold)]"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Paris
            </h4>
            <Link
              href="/zones/paris"
              className="mb-3 inline-block text-sm font-semibold text-white/80 transition-colors hover:text-[var(--color-gold)]"
            >
              Tous arrondissements →
            </Link>
            <ul className="columns-2 gap-x-4 space-y-1.5 text-xs text-white/45 sm:columns-2">
              {[...PARIS_ARRONDISSEMENTS]
                .sort((a, b) => a.number - b.number)
                .map((a) => (
                  <li key={a.slug} className="break-inside-avoid">
                    <Link
                      href={`/zones/paris/${a.slug}`}
                      className="transition-colors hover:text-[var(--color-gold)]"
                    >
                      Paris {a.number}
                      <sup>e</sup>
                    </Link>
                  </li>
                ))}
            </ul>

            <h4 className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Île-de-France
            </h4>
            <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-white/45">
              {IDF_DEPARTMENTS.map((d) => (
                <li key={d.code} title={`${d.name} (${d.code})`}>
                  <span className="text-white/30">{d.code}</span> {d.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              {CONTACT.phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-gold)]"
                  >
                    <Phone size={13} strokeWidth={1.8} aria-hidden="true" />
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-gold)]"
                >
                  <Mail size={13} strokeWidth={1.8} aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin
                  size={13}
                  strokeWidth={1.8}
                  className="mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.postalCode} {CONTACT.address.city}
                </span>
              </li>
            </ul>
            <h4 className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Légal
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <Link
                  href="/mentions-legales"
                  className="transition-colors hover:text-[var(--color-gold)]"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="transition-colors hover:text-[var(--color-gold)]"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 pt-7 text-xs text-white/25 md:flex-row md:items-center md:justify-between">
          <span>© {year} {SITE.brand} — Tous droits réservés</span>
          <span>
            Siège : {CONTACT.address.city}, {CONTACT.address.postalCode} ·{" "}
            {CONTACT.address.region}
          </span>
        </div>
      </div>
    </footer >
  );
}
