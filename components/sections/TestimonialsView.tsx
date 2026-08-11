// ─────────────────────────────────────────────────────────────────────────────
// Partie interactive de la section « Avis clients » (carrousel, bandeau logos).
//
// Les avis sont récupérés côté serveur par `Testimonials` (voir
// lib/google-reviews.ts) puis passés en props : le HTML livré contient déjà les
// avis, sans écran de chargement ni appel réseau depuis le navigateur.
// ─────────────────────────────────────────────────────────────────────────────

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { GoogleReviewItem } from "@/lib/google-reviews";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

// ─── Données clients (logos) ──────────────────────────────────────────────────
// Logos dans /public/images/. Ils sont affichés dans un masque circulaire :
// privilégier un visuel carré, sujet centré, avec de la marge sur les bords.
// `fallbackInitials` s'affiche si le fichier est absent ou illisible.

const CLIENTS = [
  {
    id: 1,
    name: "YEMA",
    src: "/images/yema_logo.jpg",
    fallbackInitials: "YE",
  },
  {
    id: 2,
    name: "L'Italien",
    src: "/images/Litalien_logo.jpg",
    fallbackInitials: "LI",
  },
  {
    id: 3,
    name: "Sunny Smoker",
    src: "/images/sunny-smoker_logo.jpg",
    fallbackInitials: "SS",
  },
] as const;

// ─── Avis de secours (affichés si l'API Google ne renvoie rien) ──────────────

const FALLBACK_REVIEWS: GoogleReviewItem[] = [
  {
    authorName: "Sophie M.",
    rating: 5,
    text: "Intervention irréprochable dans notre restaurant. L'équipe a respecté nos contraintes horaires et le résultat est à la hauteur des normes HACCP les plus strictes. Je recommande vivement.",
    relativeTime: "il y a 2 semaines",
    photoUrl: "",
  },
  {
    authorName: "Alexandre D.",
    rating: 5,
    text: "Notre immeuble n'avait jamais été aussi propre. TGT Propreté a pris en charge les parties communes avec un soin remarquable. Les résidents sont unanimes.",
    relativeTime: "il y a 1 mois",
    photoUrl: "",
  },
  {
    authorName: "Isabelle R.",
    rating: 5,
    text: "Service de nettoyage de fin de chantier exceptionnel. Chaque recoin traité avec une précision chirurgicale. Livraison parfaite pour notre client.",
    relativeTime: "il y a 3 semaines",
    photoUrl: "",
  },
  {
    authorName: "Karim B.",
    rating: 5,
    text: "Réactivité et professionnalisme au rendez-vous. Notre cabinet médical est désormais entretenu selon des protocoles dignes des plus hauts standards sanitaires.",
    relativeTime: "il y a 5 jours",
    photoUrl: "",
  },
  {
    authorName: "Marie-Laure F.",
    rating: 4,
    text: "Grand ménage réalisé avec beaucoup d'attention. Les agents sont discrets, ponctuels et utilisent des produits éco-certifiés. Mon appartement est méconnaissable.",
    relativeTime: "il y a 2 mois",
    photoUrl: "",
  },
];

// ─── Composant : Initiales avatar (fallback si pas de photo) ─────────────────

function AvatarInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] font-serif text-sm font-semibold text-[var(--color-gold)]">
      {initials}
    </span>
  );
}

// ─── Composant : Étoiles ──────────────────────────────────────────────────────

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={0}
          fill="currentColor"
          className={i < rating ? "text-[var(--color-gold)]" : "text-gray-200"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ─── Composant : Carte avis ───────────────────────────────────────────────────

function ReviewCard({ review }: { review: GoogleReviewItem }) {
  return (
    <figure className="relative flex h-full flex-col gap-4 overflow-hidden border-t-[3px] border-[var(--color-gold)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,34,68,0.10)]">
      {/* Icône décorative */}
      <Quote
        size={40}
        strokeWidth={1}
        className="absolute right-5 top-5 text-[rgba(13,34,68,0.05)]"
        aria-hidden="true"
      />

      {/* Badge Google */}
      <div className="flex items-center justify-between">
        <StarRow rating={review.rating} />
        <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </span>
      </div>

      {/* Texte */}
      <blockquote className="flex-1 font-serif text-[15px] italic leading-relaxed text-[var(--color-navy)]">
        «&thinsp;{review.text}&thinsp;»
      </blockquote>

      {/* Auteur */}
      <figcaption className="flex items-center gap-3 border-t border-gray-100 pt-4">
        {review.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- photo servie par Google, hors optimiseur Next
          <img
            src={review.photoUrl}
            alt=""
            className="h-10 w-10 shrink-0 rounded-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <AvatarInitials name={review.authorName} />
        )}
        <div>
          <div className="font-serif text-sm font-semibold text-[var(--color-navy)]">
            {review.authorName}
          </div>
          {review.relativeTime && (
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
              {review.relativeTime}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

// ─── Composant : Séparateur gradient gold ────────────────────────────────────

function GoldDivider({ label, sub }: { label: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-[620px] space-y-3 text-center">
      <div
        className="mx-auto h-px w-48"
        style={{
          background:
            "linear-gradient(to right, transparent, #c9a84c, transparent)",
        }}
        aria-hidden="true"
      />
      {sub && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
          {sub}
        </p>
      )}
      <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-light leading-none">
        {label}
      </h2>
      <div
        className="mx-auto h-px w-48"
        style={{
          background:
            "linear-gradient(to right, transparent, #c9a84c, transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Composant : Bandeau clients défilant ────────────────────────────────────

function ClientsTrack() {
  // On duplique pour le défilement infini
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <div className="relative overflow-hidden">
      {/* Fondu gauche/droite */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to right, var(--color-light), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to left, var(--color-light), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Piste animée */}
      <div
        className="flex gap-10 py-4"
        style={{
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((client, idx) => (
          <div
            key={`${client.id}-${idx}`}
            className="flex aspect-square h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#e8d9b5] bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(201,168,76,0.18)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- fallback initiales géré à la main sur onError */}
            <img
              src={client.src}
              alt={client.name}
              className="h-full w-full rounded-full object-cover opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              loading="lazy"
              onError={(e) => {
                // Fallback si le logo n'existe pas encore
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent && !parent.querySelector(".fallback-text")) {
                  const span = document.createElement("span");
                  span.className =
                    "fallback-text font-serif text-lg font-semibold text-[var(--color-navy)] opacity-40";
                  span.textContent = client.fallbackInitials;
                  parent.appendChild(span);
                }
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </div>
  );
}

// ─── Composant : Carrousel avis ───────────────────────────────────────────────

/**
 * Nombre de cartes visibles, pour les seuls contrôles (flèches et pastilles).
 *
 * La MISE EN PAGE, elle, ne dépend plus de ce hook : elle est pilotée par la
 * variable CSS `--visible`, redéfinie par media queries. Auparavant le rendu
 * serveur partait à 1 carte pleine largeur et basculait à 3 à l'hydratation —
 * un saut de mise en page très visible sur desktop. Désormais le HTML livré est
 * déjà dans la bonne disposition ; seul le nombre de pastilles s'ajuste après
 * l'hydratation, sans rien déplacer.
 */
function useVisibleCount() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const compute = () =>
      setCount(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    compute();
    // `requestAnimationFrame` : sans lui, un redimensionnement déclenchait un
    // rendu par pixel parcouru.
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return count;
}

function ReviewsCarousel({ reviews }: { reviews: GoogleReviewItem[] }) {
  const visible = useVisibleCount();
  const [rawIndex, setRawIndex] = useState(0);
  const total = reviews.length;
  const maxIndex = Math.max(0, total - visible);

  // Reclampe au rendu plutôt que dans un effet : quand `visible` change
  // (rotation d'écran, redimensionnement), l'index redevient valide sans
  // déclencher de rendu en cascade.
  const index = Math.min(rawIndex, maxIndex);

  // Le nombre d'avis est connu dès le rendu serveur : on peut donc borner la
  // disposition sans risque de décalage. Avec moins d'avis que de colonnes, les
  // cartes s'étalent au lieu de laisser un trou à droite.
  const basisClass =
    total <= 1
      ? "basis-full"
      : total === 2
        ? "basis-full sm:basis-[calc(50%-12px)]"
        : "basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]";

  const prev = useCallback(() => setRawIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setRawIndex((i) => Math.min(maxIndex, i + 1)),
    [maxIndex]
  );

  // Swipe tactile
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const delta = touchStartX.current - endX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="relative">
      {/* Fenêtre. `--visible` est redéfinie par media queries : largeur des
          cartes et amplitude du défilement restent cohérentes sans JavaScript. */}
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="carrousel-piste flex gap-6 transition-transform duration-500 ease-in-out"
          style={
            {
              "--index": index,
              transform: "translateX(calc(-1 * var(--index) * var(--pas)))",
            } as React.CSSProperties
          }
        >
          {reviews.map((review, i) => (
            <div key={i} className={`min-w-0 shrink-0 grow-0 ${basisClass}`}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Avis précédents"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        {/* Indicateurs */}
        <div className="flex items-center">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            // La pastille visible fait 6px de haut : la cible tactile, elle,
            // doit rester atteignable au doigt — d'où le bouton de 44px de haut
            // qui l'entoure.
            <button
              key={i}
              onClick={() => setRawIndex(i)}
              aria-label={`Aller à la page ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className="flex h-11 items-center px-2"
            >
              <span
                className="block h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "2rem" : "0.375rem",
                  background: i === index ? "#c9a84c" : "#d1d5db",
                }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Avis suivants"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

// ─── Section principale ────────────────────────────────────────────────────────

export function TestimonialsView({ reviews }: { reviews: GoogleReviewItem[] }) {
  const displayed = reviews.length > 0 ? reviews : FALLBACK_REVIEWS;

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          SECTION 1 — ILS NOUS FONT CONFIANCE
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="clients"
        className="bg-[var(--color-light)] px-5 py-16 md:px-10 md:py-20"
        aria-labelledby="clients-heading"
      >
        <div className="container-tgt space-y-10">
          <Reveal>
            <GoldDivider
              sub="Partenaires & Clients"
              label={
                <>
                  Ils nous font{" "}
                  <em className="italic text-[var(--color-gold)]">confiance</em>
                </>
              }
            />
          </Reveal>

          <Reveal>
            <ClientsTrack />
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — AVIS CLIENTS GOOGLE
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="avis"
        className="bg-white px-5 py-16 md:px-10 md:py-24"
        aria-labelledby="testimonials-heading"
      >
        <div className="container-tgt space-y-12">
          <Reveal>
            <div className="mx-auto max-w-[620px] space-y-4 text-center">
              <SectionLabel centered>Avis Clients</SectionLabel>

              <div
                className="mx-auto h-px w-48"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #c9a84c, transparent)",
                }}
                aria-hidden="true"
              />

              <h2
                id="testimonials-heading"
                className="font-serif text-[clamp(30px,4vw,52px)] font-light leading-none"
              >
                Ce que disent nos{" "}
                <em className="italic text-[var(--color-gold)]">clients</em>
              </h2>

              <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                Particuliers, dirigeants, gestionnaires — ils témoignent de leur
                expérience avec TGT Propreté directement sur Google.
              </p>

              <div
                className="mx-auto h-px w-48"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #c9a84c, transparent)",
                }}
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <Reveal>
            <ReviewsCarousel reviews={displayed} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
