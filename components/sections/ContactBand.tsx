import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function ContactBand() {
  return (
    <section
      className="bg-[var(--color-gold)] px-5 py-14 text-center md:px-10 md:py-16 shadow-[14px_15px_30px_5px_rgba(184,148,42,0.6)] relative z-10"
      aria-labelledby="contact-band-heading"
    >
      <h2
        id="contact-band-heading"
        className="mb-2 font-serif text-4xl font-light text-[var(--color-navy)] md:text-5xl"
      >
        Besoin d&apos;un devis nettoyage à Paris ou en Île-de-France ?
      </h2>
      <p className="mb-7 text-sm tracking-wide text-[var(--color-navy)]/70">
        Réponse sous 24h — Gratuit &amp; sans engagement
      </p>

      <Link
        href="/devis"
        className="inline-flex items-center gap-2 bg-[var(--color-navy)] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--color-navy-2)]"
      >
        Demander mon devis gratuit{" "}
        <ArrowRight size={14} aria-hidden="true" />
      </Link>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {CONTACT.phones.map((p) => (
          <a
            key={p.tel}
            href={`tel:${p.tel}`}
            className="inline-flex items-center gap-2 border-b border-[var(--color-navy)]/30 pb-0.5 text-sm font-semibold tracking-wide text-[var(--color-navy)] transition-colors hover:border-[var(--color-navy)]"
          >
            <Phone size={14} strokeWidth={2} aria-hidden="true" /> {p.label}
          </a>
        ))}
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-2 border-b border-[var(--color-navy)]/30 pb-0.5 text-sm font-semibold tracking-wide text-[var(--color-navy)] transition-colors hover:border-[var(--color-navy)]"
        >
          <Mail size={14} strokeWidth={2} aria-hidden="true" /> {CONTACT.email}
        </a>
        <span className="inline-flex items-center gap-2 border-b border-[var(--color-navy)]/30 pb-0.5 text-sm font-semibold tracking-wide text-[var(--color-navy)]">
          <MapPin size={14} strokeWidth={2} aria-hidden="true" />{" "}
          {CONTACT.address.street}, {CONTACT.address.postalCode} – {" "}
          {CONTACT.address.city}
        </span>
      </div>
    </section>
  );
}
