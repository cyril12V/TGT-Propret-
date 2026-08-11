"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Deux garde-fous par rapport à un simple `threshold: 0.1` :
    //
    // `threshold: 0` — un seuil exprimé en ratio ne peut jamais être atteint
    // par un bloc bien plus haut que la fenêtre : la grille des prestations
    // dépasse 7 000 px, soit 12 % au mieux sur un écran de 950 px, et moins
    // encore sur un écran plus court, où elle resterait invisible à jamais.
    //
    // Marge haute énorme — tout ce qui est passé au-dessus de la fenêtre est
    // considéré comme vu. Sans cela, un saut de défilement (lien d'ancre, molette
    // rapide, restauration de position) pouvait enjamber un bloc sans qu'aucune
    // frame ne l'observe visible : il restait masqué définitivement.
    // La marge basse négative, elle, garde l'apparition progressive.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          window.setTimeout(() => setVisible(true), delay);
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: "100000px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
