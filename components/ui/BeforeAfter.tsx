"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type BeforeAfterProps = {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** Ratio CSS du cadre, ex. "4 / 3" ou "16 / 10". Défaut : 4/3. */
  ratio?: string;
  className?: string;
};

/**
 * Comparateur Avant / Après avec curseur glissant.
 * L'image « Après » occupe tout le cadre ; l'image « Avant » est révélée
 * à gauche du curseur. Contrôlable à la souris, au doigt et au clavier.
 */
export function BeforeAfter({
  beforeImage,
  afterImage,
  beforeAlt = "Avant intervention",
  afterAlt = "Après intervention",
  ratio = "4 / 3",
  className = "",
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50); // pourcentage révélé de l'image « Avant »
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, raw)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className={`group relative w-full select-none overflow-hidden rounded-sm ${className}`}
      // `pan-y` et non `none` : en `none`, le navigateur cédait TOUT geste
      // tactile au composant, y compris le défilement vertical — cinq
      // comparateurs empilés dans « Réalisations » bloquaient la page sur
      // mobile. En `pan-y`, le glissement horizontal nous revient et le
      // défilement vertical reste au navigateur.
      style={{ aspectRatio: ratio, touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Image APRÈS (fond, plein cadre) */}
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center"
        draggable={false}
      />
      <span className="pointer-events-none absolute bottom-3 right-3 z-20 rounded-full bg-[var(--color-navy)]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
        Après
      </span>

      {/* Image AVANT (révélée à gauche du curseur) */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
          draggable={false}
        />
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
          Avant
        </span>
      </div>

      {/* Poignée */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Comparer avant et après"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        className="absolute top-0 z-20 flex h-full w-11 -translate-x-1/2 cursor-ew-resize items-center justify-center outline-none"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute h-full w-[2px] bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)] bg-white shadow-lg transition-transform group-hover:scale-105 sm:h-10 sm:w-10">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6L4 12l5 6M15 6l5 6-5 6" stroke="#0d2244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
