"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const HIDDEN_PATHS = ["/devis"];

export function StickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDDEN_PATHS.some((p) => pathname?.startsWith(p))) return null;

  const phone = CONTACT.phones[0];

  return (
    // Masqué au clavier autant qu'à l'œil : en `translate-y-full` seul, les deux
    // liens restaient tabulables sous un `aria-hidden`, et le focus partait hors
    // écran. Le breakpoint suit celui de la nav (menu horizontal à partir de lg).
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-[90] flex gap-px border-t border-[var(--color-gold)]/40 bg-[var(--color-navy)] pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(13,34,68,0.25)] transition-transform duration-300 lg:hidden ${
        visible
          ? "translate-y-0"
          : "invisible translate-y-full pointer-events-none"
      }`}
    >
      {phone && (
        <a
          href={`tel:${phone.tel}`}
          className="flex flex-1 items-center justify-center gap-2 bg-[var(--color-navy)] px-4 py-3.5 text-sm font-semibold text-white"
          aria-label="Appeler TGT Propreté"
        >
          <Phone size={16} strokeWidth={2} aria-hidden="true" />
          Appeler
        </a>
      )}
      <Link
        href="/devis"
        className="flex flex-[1.4] items-center justify-center gap-2 bg-[var(--color-gold)] px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]"
      >
        <span className="whitespace-nowrap">Devis gratuit</span>
        <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
      </Link>
    </div>
  );
}
