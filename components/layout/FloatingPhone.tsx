"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

/**
 * Bouton téléphone flottant, rond, fixé en bas à droite.
 * Apparaît lors du défilement pour faciliter la prise de contact.
 */
export function FloatingPhone() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phone = CONTACT.phones[0];
  if (!phone) return null;

  return (
    <a
      href={`tel:${phone.tel}`}
      aria-label="Appeler TGT Propreté"
      title="Appelez-nous"
      className={`group fixed bottom-20 right-4 z-[95] flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] shadow-[0_8px_24px_rgba(13,34,68,0.35)] ring-4 ring-[var(--color-gold)]/25 transition-all duration-300 hover:scale-110 hover:bg-[var(--color-gold-2)] md:bottom-8 md:right-8 md:h-16 md:w-16 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span
        // `animate-ping` double la taille de l'élément : sur un halo posé à
        // 16px du bord droit, l'onde sortait de l'écran. Le halo est réduit
        // pour rester dans le cadre.
        className="absolute inset-[10%] rounded-full bg-[var(--color-gold)] opacity-60 motion-safe:animate-ping"
        aria-hidden="true"
      />
      <Phone
        size={24}
        strokeWidth={2}
        className="relative transition-transform group-hover:rotate-12"
        aria-hidden="true"
      />
    </a>
  );
}
