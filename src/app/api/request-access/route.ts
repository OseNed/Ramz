import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { requestAccessSchema } from "@/lib/request-access-schema";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

type Setting = "RESEND_API_KEY" | "LEADS_TO_EMAIL" | "LEADS_FROM_EMAIL";

/**
 * Reads a setting from process.env (next dev/start, and Workers via OpenNext),
 * falling back to the Cloudflare Worker env bindings directly.
 */
function readSetting(name: Setting): string | undefined {
  const fromProcess = process.env[name]?.trim();
  if (fromProcess) return fromProcess;
  try {
    return getCloudflareContext().env[name]?.trim() || undefined;
  } catch {
    return undefined; // not running on Workers
  }
}

/** Names (never values) of the Worker's vars, secrets and bindings, for diagnosing setup. */
function workerEnvNames(): string[] {
  try {
    return Object.keys(getCloudflareContext().env).map((name) => JSON.stringify(name));
  } catch {
    return [];
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  // Cloudflare sets cf-connecting-ip and clients cannot override it there;
  // x-forwarded-for covers other hosts and local development.
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  if (await isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = requestAccessSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 },
    );
  }

  const { email, company, message, website, renderedAt } = parsed.data;

  // Honeypot field filled in: silently drop, but don't tip off the bot.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Submitted implausibly fast after the form rendered: likely a bot.
  if (renderedAt && Date.now() - renderedAt < 1500) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = readSetting("RESEND_API_KEY");
  const to = readSetting("LEADS_TO_EMAIL");
  const from = readSetting("LEADS_FROM_EMAIL");

  if (!apiKey || !to || !from) {
    // Names only, never values.
    const missing = Object.entries({ RESEND_API_KEY: apiKey, LEADS_TO_EMAIL: to, LEADS_FROM_EMAIL: from })
      .filter(([, value]) => !value)
      .map(([name]) => name);
    console.error(`request-access: missing ${missing.join(", ")}`);
    console.error(`request-access: Worker env has: ${workerEnvNames().join(", ") || "(none)"}`);
    return NextResponse.json(
      { error: "Early access requests are temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Early access request — ${company}`,
    html: `
      <p><strong>Work email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      ${message ? `<p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>` : ""}
    `,
  });

  if (error) {
    console.error("request-access: resend error", error);
    return NextResponse.json(
      { error: "We couldn't send your request. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
