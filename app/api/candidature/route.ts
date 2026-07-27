import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail, rowsToHtml, isMailConfigured } from "@/lib/mailer";

export const runtime = "nodejs";

const CandidatureSchema = z.object({
  firstName: z.string().trim().min(2, "Prénom trop court").max(60),
  lastName: z.string().trim().min(2, "Nom trop court").max(60),
  phone: z
    .string()
    .trim()
    .min(8, "Téléphone invalide")
    .max(25)
    .regex(/^[+0-9 .()-]+$/, "Caractères invalides"),
  email: z.string().trim().email("Email invalide").max(120),
  poste: z.string().trim().min(1, "Poste requis").max(80),
  disponibilite: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

// CV — PDF uniquement, 5 Mo maximum
const MAX_CV_BYTES = 5 * 1024 * 1024;

const ipHits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || entry.resetAt < now) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_HITS) return false;
  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans une minute." },
      { status: 429 },
    );
  }

  // Le formulaire envoie du multipart/form-data (champs + CV en pièce jointe)
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  // Anti-bot : honeypot invisible. Rempli = bot → succès simulé, aucun envoi.
  if (typeof form.get("website") === "string" && form.get("website") !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const parsed = CandidatureSchema.safeParse({
    firstName: form.get("firstName"),
    lastName: form.get("lastName"),
    phone: form.get("phone"),
    email: form.get("email"),
    poste: form.get("poste"),
    disponibilite: form.get("disponibilite") ?? "",
    message: form.get("message") ?? "",
  });
  if (!parsed.success) {
    const first = parsed.error.errors[0];
    return NextResponse.json(
      { error: first?.message ?? "Données invalides" },
      { status: 422 },
    );
  }

  const payload = parsed.data;

  // ── Validation du CV (facultatif, mais PDF uniquement si fourni) ──
  const cvEntry = form.get("cv");
  let cv: { filename: string; content: Buffer } | null = null;

  if (cvEntry instanceof File && cvEntry.size > 0) {
    if (cvEntry.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Le CV doit être au format PDF uniquement." },
        { status: 422 },
      );
    }
    if (cvEntry.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { error: "Le CV ne doit pas dépasser 5 Mo." },
        { status: 422 },
      );
    }
    cv = {
      filename: cvEntry.name || "cv.pdf",
      content: Buffer.from(await cvEntry.arrayBuffer()),
    };
  }

  if (!isMailConfigured()) {
    console.error("[candidature] SMTP non configuré — email non envoyé");
    return NextResponse.json(
      { error: "Service d'envoi indisponible pour le moment." },
      { status: 503 },
    );
  }

  const fullName = `${payload.firstName} ${payload.lastName}`;
  const rows: [string, string][] = [
    ["Nom", fullName],
    ["Téléphone", payload.phone],
    ["Email", payload.email],
    ["Poste visé", payload.poste],
    ["Disponibilité", payload.disponibilite],
    ["Message", payload.message],
    ["CV", cv ? cv.filename : "Aucun CV joint"],
  ];

  try {
    await sendMail({
      subject: `Nouvelle candidature — ${fullName} (${payload.poste})`,
      replyTo: payload.email,
      text: rows
        .filter(([, v]) => v)
        .map(([l, v]) => `${l}: ${v}`)
        .join("\n"),
      html: `<h2 style="font-family:Arial,Helvetica,sans-serif;color:#0d2244;">Nouvelle candidature</h2>${rowsToHtml(
        rows,
      )}`,
      attachments: cv ? [{ filename: cv.filename, content: cv.content }] : undefined,
    });
  } catch (err) {
    console.error("[candidature] échec d'envoi email:", err);
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessayez ou appelez-nous." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
