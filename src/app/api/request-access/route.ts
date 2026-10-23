import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { requestAccessSchema } from "@/lib/request-access-schema";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "request-access: missing RESEND_API_KEY, LEADS_TO_EMAIL, or LEADS_FROM_EMAIL",
    );
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
