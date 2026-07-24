import { NextResponse } from "next/server";
import { z } from "zod";

const DevisSchema = z.object({
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

  // INTÉGRATION EMAIL : brancher ici Resend, Mailgun, SendGrid ou SMTP.
  // Exemple Resend :
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "devis@nettoyagesidf.fr",
  //     to: process.env.DEVIS_INBOX_EMAIL!,
  //     subject: `Devis — ${payload.typeClient} ${payload.zone}`,
  //     text: JSON.stringify(payload, null, 2),
  //   });
  console.info("[devis]", {
    from: `${payload.firstName} ${payload.lastName}`,
    email: payload.email,
    type: payload.typeClient,
    service: payload.typeService,
    zone: payload.zone,
    surface: payload.surface,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
