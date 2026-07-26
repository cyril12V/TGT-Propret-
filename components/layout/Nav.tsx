"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);



  return (
    <nav
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between gap-3 border-b border-[rgba(201,168,76,0.25)] bg-[rgba(13,34,68,0.97)] px-4 py-3 backdrop-blur-xl sm:px-5 sm:py-3.5 md:justify-evenly md:px-10"
      aria-label="Navigation principale"
    >
      <Link
        href="/"
        className="flex items-center gap-2 sm:gap-3"
        aria-label={`${SITE.name} — Accueil`}
        onClick={(e) => {
          setOpen(false);
          // Déjà sur l'accueil : un Link vers "/" ne rescrolle pas → on force le retour en haut
          if (window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <span className="inline-block shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-gold)]">
          <Image
            src="/images/logo.png"
            alt=""
            width={56}
            height={56}
            priority
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
        </span>
        <span className="font-serif text-xl font-bold tracking-[0.12em] text-white sm:text-2xl sm:tracking-[0.15em] md:text-[30px]">
          TGT
          <span className="relative inline-block text-[var(--color-gold)] after:absolute after:bottom-[2px] after:left-0 after:h-[2px] after:w-full after:bg-[linear-gradient(to_right,transparent,var(--color-gold))]">
            Propreté
          </span>
        </span>
      </Link>

      <ul className="hidden gap-8 md:flex">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="relative text-xs font-medium uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-[var(--color-gold)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(to_right,transparent,var(--color-gold))] after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/devis"
        className="hidden rounded-[2px] bg-[var(--color-gold)] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-2)] md:inline-block"
      >
        Devis Gratuit
      </Link>

      <button
        type="button"
        className="flex flex-col gap-1.5 p-2 cursor-pointer md:hidden"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span
          className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""
            }`}
        />
        <span
          className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""
            }`}
        />
        <span
          className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""
            }`}
        />
      </button>

      {open && (
        <>
          {/* Voile : un clic à côté ferme le menu */}
          <button
            type="button"
            aria-label="Fermer le menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[64px] z-[98] cursor-default bg-black/50 backdrop-blur-sm md:hidden"
          />

          {/* Panneau du menu — fond bleu */}
          <div className="fixed inset-x-0 top-[64px] z-[99] flex flex-col items-center gap-7 border-b border-[rgba(201,168,76,0.25)] bg-[#013668] px-6 py-10 shadow-[0_24px_40px_rgba(0,0,0,0.35)] md:hidden">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.3em] text-white/85 transition-colors hover:text-[var(--color-gold)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/devis"
              onClick={() => setOpen(false)}
              className="rounded-[2px] bg-[var(--color-gold)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-2)]"
            >
              Devis Gratuit
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

