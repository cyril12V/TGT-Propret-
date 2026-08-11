"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Send,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const POSTES = [
  "Agent de nettoyage – Particuliers",
  "Agent de nettoyage – Entreprises",
  "Agent de nettoyage – Chantiers",
  "Repassage & Services à domicile",
  "Polyvalent(e)",
  "Autre poste (À préciser dans la description)"
];

const DISPOS = [
  "Immédiatement",
  "Dans 2 semaines",
  "Dans 1 mois",
  "À définir",
];

type Status = "idle" | "submitting" | "success" | "error";

export function CandidatureForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [cvName, setCvName] = useState<string>("");

  function handleCvChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setCvName("");
      return;
    }
    // On n'accepte que les PDF
    if (file.type !== "application/pdf") {
      e.target.value = "";
      setCvName("");
      setStatus("error");
      setErrorMsg("Le CV doit être au format PDF uniquement.");
      return;
    }
    setCvName(file.name);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMsg("");

    try {
      // multipart/form-data : on laisse le navigateur fixer le Content-Type
      // (avec le boundary) pour transmettre le CV en pièce jointe.
      const res = await fetch("/api/candidature", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Erreur lors de l'envoi");
      }

      setStatus("success");
      form.reset();
      setCvName("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  return (
    <section
      id="candidature"
      className="bg-[var(--color-cream)] px-5 py-20 md:px-10 md:py-25"
    >
      <div className="container-tgt">
        <Reveal className="mx-auto max-w-[620px] space-y-4 text-center">
          <SectionLabel centered>Nous Rejoindre</SectionLabel>
          <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-none">
            Formulaire de{" "}
            <em className="italic text-[var(--color-gold)]">Candidature</em>
          </h2>
          <div className="mx-auto mt-6 h-[2px] w-full max-w-[296px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
            Vous êtes motivé, rigoureux et vous aimez le travail bien fait ?
            Rejoignez l&apos;équipe TGT Propreté.
          </p>
        </Reveal>

        {/* Deux colonnes seulement à partir de `lg` : en `md`, les grilles de
            champs imbriquées dans cette colonne tombaient à ~78px de large. */}
        <Reveal className="mt-15 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-[var(--color-navy)]">
              Ce que nous recherchons
            </h3>
            <p className="text-[15px] italic leading-relaxed text-[var(--color-navy)]/50">
              TGT Propreté est toujours à la recherche de personnes sérieuses et
              motivées pour renforcer notre équipe d&apos;intervention en
              Île-de-France.
            </p>
            <ul className="space-y-4">
              {[
                "Sens du détail et rigueur dans le travail",
                "Ponctualité et fiabilité",
                "Esprit d'équipe et bon relationnel client",
                "Expérience en nettoyage appréciée (non obligatoire)",
                "Permis B souhaité pour déplacements",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-muted)]"
                >
                  <span
                    className="flex-shrink-0 font-semibold text-[var(--color-gold)]"
                    aria-hidden="true"
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-[10px] bg-[var(--color-navy)] p-6 text-white">
              {/* eslint-disable-next-line @next/next/no-img-element -- visuel décoratif, remplacement par next/image à prévoir */}
              <img
                src="/images/Carte_de_visite.jpg"
                alt="Carte de visite — Rabah Ammouche"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[10px] p-8 md:p-12"
            aria-describedby={status === "error" ? "form-error" : undefined}
            noValidate
          >
            {/* Honeypot anti-bot : invisible pour les humains, piège pour les robots */}
            <div className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Ne pas remplir ce champ</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field
                name="firstName"
                label="Prénom"
                placeholder="Votre prénom"
                required
              />
              <Field
                name="lastName"
                label="Nom"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Field
                name="phone"
                label="Téléphone"
                type="tel"
                placeholder="+33 7 XX XX XX XX"
                required
                autoComplete="tel"
              />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="votre@email.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="mt-5 flex min-w-0 flex-col gap-2">
              <label
                htmlFor="poste"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]"
              >
                Poste Souhaité *
              </label>
              <select
                id="poste"
                name="poste"
                required
                defaultValue=""
                className="w-full min-w-0 appearance-none border-b border-gray-300 bg-transparent py-3 text-base md:text-[15px] outline-none transition-colors focus:border-[var(--color-gold)]"
              >
                <option value="" disabled>
                  Sélectionner un poste
                </option>
                {POSTES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex min-w-0 flex-col gap-2">
              <label
                htmlFor="disponibilite"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]"
              >
                Disponibilité
              </label>
              <select
                id="disponibilite"
                name="disponibilite"
                defaultValue=""
                className="w-full min-w-0 appearance-none border-b border-gray-300 bg-transparent py-3 text-base md:text-[15px] outline-none transition-colors focus:border-[var(--color-gold)]"
              >
                <option value="">Sélectionner</option>
                {DISPOS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* CV — PDF uniquement */}
            <div className="mt-5 flex min-w-0 flex-col gap-2">
              <label
                htmlFor="cv"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]"
              >
                CV (PDF uniquement)
              </label>
              <label
                htmlFor="cv"
                className="flex min-w-0 cursor-pointer items-center gap-3 border border-dashed border-gray-300 bg-transparent px-4 py-3 text-[15px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-gold)]"
              >
                <FileText
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-[var(--color-gold)]"
                  aria-hidden="true"
                />
                <span className="min-w-0 truncate">
                  {cvName || "Joindre votre CV au format PDF"}
                </span>
              </label>
              <input
                id="cv"
                name="cv"
                type="file"
                accept="application/pdf,.pdf"
                onChange={handleCvChange}
                className="sr-only"
              />
              <p className="text-[11px] text-[var(--color-muted)]/70">
                Format accepté : PDF uniquement (max. 5 Mo).
              </p>
            </div>

            <div className="mt-5 flex min-w-0 flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]"
              >
                Description / Motivation
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Parlez-nous de vous, votre expérience et vos motivations..."
                rows={4}
                className="w-full min-w-0 resize-y border-b border-gray-300 bg-transparent py-3 text-base md:text-[15px] leading-relaxed outline-none transition-colors focus:border-[var(--color-gold)]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-[5px] hover:text-[#ceb774] mt-6 inline-flex w-full items-center justify-center gap-2 bg-[var(--color-navy)] px-12 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--color-navy-2)]  disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Send size={14} className="animate-pulse" aria-hidden="true" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  Envoyer ma Candidature{" "}
                  <ArrowRight size={14} aria-hidden="true" />
                </>
              )}
            </button>

            {status === "success" && (
              <div
                role="status"
                className="mt-4 flex items-center justify-center gap-2 bg-[var(--color-navy)] p-4 text-center text-sm tracking-wide text-[var(--color-gold)]"
              >
                <CheckCircle2 size={18} aria-hidden="true" />
                Votre candidature a bien été envoyée ! Nous vous répondrons dans
                les 24h.
              </div>
            )}
            {status === "error" && (
              <div
                id="form-error"
                role="alert"
                className="mt-4 flex items-center justify-center gap-2 border border-red-300 bg-red-50 p-4 text-center text-sm text-red-700"
              >
                <AlertCircle size={18} aria-hidden="true" />
                {errorMsg || "Une erreur est survenue. Réessayez plus tard."}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
}: FieldProps) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full min-w-0 border-b border-gray-300 bg-transparent py-3 text-base md:text-[15px] outline-none transition-colors focus:border-[var(--color-gold)]"
      />
    </div>
  );
}
