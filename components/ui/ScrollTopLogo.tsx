"use client";

/**
 * Logo cliquable qui fait défiler la page vers le tout en haut.
 */
export function ScrollTopLogo() {
  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Revenir en haut de la page"
      className="mt-6 block w-[100px] overflow-hidden rounded-full transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
    >
      <img src="/images/logo.png" alt="Logo TGT Propreté" className="w-full" />
    </button>
  );
}
