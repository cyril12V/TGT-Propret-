import { NextResponse } from "next/server";
import { z } from "zod";

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

  // INTÉGRATION EMAIL : brancher ici Resend, Mailgun, SendGrid ou SMTP.
  // Le CV est déjà prêt à être joint (cv.filename + cv.content en Buffer).
  // Exemple Resend avec pièce jointe :
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "candidatures@nettoyagesidf.fr",
  //     to: process.env.CANDIDATURE_INBOX_EMAIL!,
  //     subject: `Candidature — ${payload.firstName} ${payload.lastName}`,
  //     text: JSON.stringify(payload, null, 2),
  //     attachments: cv
  //       ? [{ filename: cv.filename, content: cv.content }]
  //       : undefined,
  //   });
  console.info("[candidature]", {
    from: `${payload.firstName} ${payload.lastName}`,
    email: payload.email,
    poste: payload.poste,
    cv: cv ? `${cv.filename} (${cv.content.length} octets)` : "aucun",
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
