import "server-only";
import nodemailer from "nodemailer";

// ─────────────────────────────────────────────────────────────────────────────
// Configuration SMTP — lue UNIQUEMENT depuis les variables d'environnement.
// Aucun secret n'est écrit dans le code. Voir .env.example.
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, MAIL_TO, MAIL_FROM
// ─────────────────────────────────────────────────────────────────────────────

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT ?? "465");
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;

/** Destinataire (boîte qui reçoit les demandes) et expéditeur affiché. */
export const MAIL_TO = process.env.MAIL_TO ?? user ?? "";
export const MAIL_FROM = process.env.MAIL_FROM ?? user ?? "";

/** True seulement si toutes les variables SMTP essentielles sont présentes. */
export function isMailConfigured(): boolean {
  return Boolean(host && user && pass && MAIL_TO);
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (!host || !user || !pass) {
    throw new Error("SMTP non configuré (variables d'environnement manquantes)");
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = SSL/TLS ; 587 = STARTTLS
      auth: { user, pass },
    });
  }
  return transporter;
}

type Attachment = { filename: string; content: Buffer };

type SendArgs = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: Attachment[];
};

export async function sendMail({
  subject,
  html,
  text,
  replyTo,
  attachments,
}: SendArgs): Promise<void> {
  const t = getTransporter();
  await t.sendMail({
    from: `"Site TGT Propreté" <${MAIL_FROM}>`,
    to: MAIL_TO,
    subject,
    text,
    html,
    replyTo,
    attachments,
  });
}

/** Échappe le HTML pour éviter toute injection dans l'email. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Construit un tableau HTML simple à partir de paires libellé/valeur. */
export function rowsToHtml(rows: [string, string][]): string {
  const body = rows
    .filter(([, v]) => v && v.trim() !== "")
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 14px;border:1px solid #e5e0d5;background:#f7f4ec;font-weight:600;color:#0d2244;white-space:nowrap;">${escapeHtml(
          label,
        )}</td>
          <td style="padding:8px 14px;border:1px solid #e5e0d5;color:#1a1a2e;">${escapeHtml(
          value,
        ).replace(/\n/g, "<br>")}</td>
        </tr>`,
    )
    .join("");
  return `<table style="border-collapse:collapse;width:100%;max-width:640px;font-family:Arial,Helvetica,sans-serif;font-size:14px;">${body}</table>`;
}
