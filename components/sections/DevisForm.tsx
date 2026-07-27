"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { PARIS_ARRONDISSEMENTS } from "@/lib/zones-paris";
import { ZONES } from "@/lib/zones";

const TYPE_CLIENT = [
  { value: "particulier", label: "Particulier" },
  { value: "entreprise", label: "Entreprise / Bureaux" },
  { value: "syndic", label: "Syndic / Copropriété" },
  { value: "artisan", label: "Artisan / Fin de chantier" },
  { value: "autre", label: "Autre" },
];

const FREQUENCES = [
  "Ponctuel",
  "Hebdomadaire",
  "2 fois par semaine",
  "Quotidien",
  "À définir",
];

type Status = "idle" | "submitting" | "success" | "error";

export function DevisForm() {
  const searchParams = useSearchParams();
  const initialZone = searchParams.get("zone") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // capturé AVANT l'await (sinon null après)
    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      typeClient: String(formData.get("typeClient") ?? ""),
      typeService: String(formData.get("typeService") ?? ""),
      zone: String(formData.get("zone") ?? ""),
      surface: String(formData.get("surface") ?? ""),
      frequence: String(formData.get("frequence") ?? ""),
      message: String(formData.get("message") ?? ""),
      rgpd: formData.get("rgpd") === "on",
      website: String(formData.get("website") ?? ""), // honeypot anti-bot
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Erreur lors de l'envoi");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-7 md:p-10"
      aria-describedby={status === "error" ? "devis-error" : undefined}
      noValidate
    >
      {/* Honeypot anti-bot : invisible pour les humains, piège pour les robots */}
      <div className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          name="firstName"
          label="Prénom"
          placeholder="Votre prénom"
          required
          autoComplete="given-name"
        />
        <Field
          name="lastName"
          label="Nom"
          placeholder="Votre nom"
          required
          autoComplete="family-name"
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Field
          name="phone"
          label="Téléphone"
          type="tel"
          placeholder="+33 6 XX XX XX XX"
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

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <SelectField
          name="typeClient"
          label="Vous êtes"
          required
          options={[
            { value: "", label: "Sélectionner" },
            ...TYPE_CLIENT,
          ]}
        />
        <SelectField
          name="typeService"
          label="Service souhaité"
          required
          options={[
            { value: "", label: "Sélectionner un service" },
            ...SERVICES.map((s) => ({ value: s.slug, label: s.title })),
          ]}
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <SelectField
          name="zone"
          label="Zone d'intervention"
          required
          defaultValue={initialZone}
          options={[
            { value: "", label: "Sélectionner" },
            { value: "paris-all", label: "Paris (tous arrondissements)" },
            ...PARIS_ARRONDISSEMENTS.map((a) => ({
              value: `paris-${a.number}`,
              label: `Paris ${a.number}e — ${a.district}`,
            })),
            // Les pages villes pointent vers /devis?zone={slug} : sans ces options,
            // le pré-remplissage retomberait silencieusement sur « Sélectionner ».
            ...ZONES.map((z) => ({
              value: z.slug,
              label: `${z.name} (${z.postalCode})`,
            })),
            { value: "idf", label: "Île-de-France — autre commune" },
            { value: "autre", label: "Autre" },
          ]}
        />
        <Field
          name="surface"
          label="Surface (m²)"
          placeholder="ex : 80"
          autoComplete="off"
        />
      </div>

      <div className="mt-5">
        <SelectField
          name="frequence"
          label="Fréquence"
          options={[
            { value: "", label: "Sélectionner" },
            ...FREQUENCES.map((f) => ({ value: f, label: f })),
          ]}
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]"
        >
          Détails / Précisions
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez votre besoin (étages, accès, contraintes, etc.)"
          className="resize-y border-b border-gray-300 bg-transparent py-3 text-[15px] leading-relaxed outline-none transition-colors focus:border-[var(--color-gold)]"
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs text-[var(--color-muted)]">
        <input
          type="checkbox"
          name="rgpd"
          required
          className="mt-0.5 h-4 w-4 cursor-pointer accent-[var(--color-gold)]"
        />
        <span>
          J&apos;accepte que TGT Propreté traite mes données pour me recontacter
          dans le cadre de ma demande de devis. Mes données ne seront jamais
          cédées à des tiers.{" "}
          <a
            href="/politique-confidentialite"
            className="underline hover:text-[var(--color-navy)]"
          >
            En savoir plus
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[var(--color-navy)] px-12 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--color-navy-2)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Send size={14} className="animate-pulse" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          <>
            Demander mon devis gratuit{" "}
            <ArrowRight size={14} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-[var(--color-muted)]">
        Réponse sous 24h · Gratuit · Sans engagement · Ou par téléphone au{" "}
        <a
          href={`tel:${CONTACT.phones[0]?.tel}`}
          className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)]"
        >
          {CONTACT.phones[0]?.label}
        </a>
      </p>

      {status === "success" && (
        <div
          role="status"
          className="mt-4 flex items-center justify-center gap-2 bg-[var(--color-navy)] p-4 text-center text-sm tracking-wide text-[var(--color-gold)]"
        >
          <CheckCircle2 size={18} aria-hidden="true" />
          Votre demande de devis a bien été envoyée ! Nous vous répondrons sous
          24h.
        </div>
      )}
      {status === "error" && (
        <div
          id="devis-error"
          role="alert"
          className="mt-4 flex items-center justify-center gap-2 border border-red-300 bg-red-50 p-4 text-center text-sm text-red-700"
        >
          <AlertCircle size={18} aria-hidden="true" />
          {errorMsg || "Une erreur est survenue. Réessayez plus tard."}
        </div>
      )}
    </form>
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
    <div className="flex flex-col gap-2">
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
        className="border-b border-gray-300 bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-[var(--color-gold)]"
      />
    </div>
  );
}

type SelectFieldProps = {
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  options: { value: string; label: string }[];
};

function SelectField({
  name,
  label,
  required = false,
  defaultValue = "",
  options,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="appearance-none border-b border-gray-300 bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-[var(--color-gold)]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={!o.value && required}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
