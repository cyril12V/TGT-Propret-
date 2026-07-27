import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail, rowsToHtml, isMailConfigured } from "@/lib/mailer";

export const runtime = "nodejs";

const DevisSchema = z.object({
  // Honeypot anti-bot : champ invisible qui doit rester vide (rempli = bot)
  website: z.string().max(200).optional().default(""),
  firstName: z.string().trim().min(2, "Prénom trop court").max(60),
  lastName: z.string().trim().min(2, "Nom trop court").max(60),
  phone: z
    .string()
    .trim()
    .min(8, "Téléphone invalide")
    .max(25)
    .regex(/^[+0-9 .()-]+$/, "Caractères invalides"),
  email: z.string().trim().email("Email invalide").max(120),
  typeClient: z.enum([
    "particulier",
    "entreprise",
    "syndic",
    "artisan",
    "autre",
  ]),
  typeService: z.string().trim().min(1, "Service requis").max(80),
  zone: z.string().trim().min(1, "Zone requise").max(80),
  surface: z.string().trim().max(20).optional().default(""),
  frequence: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  rgpd: z.literal(true, {
    errorMap: () => ({ message: "Consentement RGPD requis" }),
  }),
});

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

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const parsed = DevisSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.errors[0];
    return NextResponse.json(
      { error: first?.message ?? "Données invalides" },
      { status: 422 },
    );
  }

  const payload = parsed.data;

  // Anti-bot : si le honeypot est rempli, on fait comme si tout allait bien
  // (pas d'email envoyé, pas d'indice donné au bot).
  if (payload.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!isMailConfigured()) {
    console.error("[devis] SMTP non configuré — email non envoyé");
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
    ["Type de client", payload.typeClient],
    ["Service souhaité", payload.typeService],
    ["Zone", payload.zone],
    ["Surface", payload.surface],
    ["Fréquence", payload.frequence],
    ["Message", payload.message],
  ];

  try {
    await sendMail({
      subject: `Nouvelle demande de devis — ${fullName} (${payload.zone})`,
      replyTo: payload.email,
      text: rows
        .filter(([, v]) => v)
        .map(([l, v]) => `${l}: ${v}`)
        .join("\n"),
      html: `<h2 style="font-family:Arial,Helvetica,sans-serif;color:#0d2244;">Nouvelle demande de devis</h2>${rowsToHtml(
        rows,
      )}`,
    });
  } catch (err) {
    console.error("[devis] échec d'envoi email:", err);
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessayez ou appelez-nous." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
