"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { STATS } from "@/lib/constants";
import CountUp from 'react-countup';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--color-navy)] px-5 pb-16 pt-28 md:pt-32"
    >
      <Image
        src="/images/Agent_TGT.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center opacity-30 "
      />



      <div
        className="absolute inset-0 z-[2]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[920px] text-center">
        <div className="animate-fade-up mb-8 inline-flex items-center gap-3 rounded-full border border-[rgba(201,168,76,0.5)] bg-[rgba(13,34,68,0.25)] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-gold)] backdrop-blur-sm md:mb-10">
          <span className="h-px w-5 bg-[var(--color-gold)]" aria-hidden="true" />
          Entreprise de nettoyage — Paris &amp; Île-de-France
          <span className="h-px w-5 bg-[var(--color-gold)]" aria-hidden="true" />
        </div>

        <h1 className="animate-fade-up-1 font-serif text-[clamp(40px,7.5vw,92px)] font-light leading-[0.98] tracking-tight text-white">
          Entreprise de nettoyage
          <br />
          <em className="italic text-[var(--color-gold)]">à Paris</em>
          <br />
          <span className="block text-[clamp(30px,5.5vw,68px)]">
            et en Île-de-France
          </span>
        </h1>

        <p className="animate-fade-up-2 mx-auto mt-6 max-w-[600px] text-base leading-relaxed tracking-wide text-white/70 md:text-lg">
          Solutions de nettoyage sur-mesure pour professionnels et copropriétés :
          <em> bureaux, locaux commerciaux, fins de chantier, vitrages, et bien plus encore. </em>
          Devis gratuit sous 24h pour tous les arrondissements de <em className=" text-[var(--color-gold)]">Paris </em> et
          <em className=" text-[var(--color-gold)]"> l&apos;Île-de-France.</em>
        </p>

        <div className=" animate-fade-up-3 mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            href="/devis"
            className=" inline-flex items-center gap-2 bg-[var(--color-gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-2)] md:px-9"
          >
            Demander un devis{" "}
            <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
          </Link>
          <Link
            href="/zones/paris"
            className="inline-flex items-center gap-2 border border-white/30 bg-[rgba(13,34,68,0.35)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-[2px] transform translate-z-0 transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] md:px-9">
            Nos zones à Paris
          </Link>
        </div>
      </div>

      import CountUp from 'react-countup';

      // ... (ton code au-dessus reste identique)

      <ul
        className="relative z-10 mt-14 grid w-full max-w-[820px] grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-x-4 md:mt-16"
        aria-label="Chiffres clés"
      >
        {STATS.map((s, index) => {
          // On vérifie si c'est le 3ème élément (index 2)
          const isThirdElement = index === 2;

          // On prépare les données du compteur au cas où
          const numericValue = parseInt(s.num.replace(/\D/g, ''), 10) || 0;
          const suffix = s.num.replace(/[0-9]/g, '');

          return (
            <li
              key={s.label}
              className="relative text-center sm:after:absolute sm:after:right-0 sm:after:top-1/4 sm:after:h-1/2 sm:after:w-[1px] sm:after:bg-gradient-to-b sm:after:from-transparent sm:after:via-[#c9a84c] sm:after:to-transparent sm:last:after:hidden"
            >
              <div className="font-serif text-3xl font-semibold leading-none text-[var(--color-gold)] md:text-4xl">
                {isThirdElement ? (
                  // S'il s'agit du 3ème élément, on active l'animation de montée fluide
                  <CountUp
                    start={0}
                    end={numericValue}
                    duration={4.5}
                    separator=" "
                    suffix={suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  >
                    {({ countUpRef }) => <span ref={countUpRef}>0</span>}
                  </CountUp>
                ) : (
                  // Pour tous les autres (1er, 2ème, 4ème), on affiche le texte fixe normalement
                  s.num
                )}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/50">
                {s.label}
              </div>
            </li>
          );
        })}
      </ul>

      <div
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[var(--color-gold)]/60"
        aria-hidden="true"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}
