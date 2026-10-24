"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";
type Field = "email" | "company";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function RequestAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState<Field | null>(null);
  const renderedAt = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  function fail(text: string, field: Field | null = null) {
    setStatus("error");
    setMessage(text);
    setInvalid(field);
    if (field) (formRef.current?.elements.namedItem(field) as HTMLInputElement | null)?.focus();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""),
      renderedAt: renderedAt.current ?? undefined,
    };

    // Quick client-side checks; the route re-validates with the same zod schema.
    if (!EMAIL_PATTERN.test(payload.email)) return fail("Enter a valid work email.", "email");
    if (!payload.company) return fail("Enter your company name.", "company");

    setStatus("submitting");
    setMessage("");
    setInvalid(null);

    try {
      const response = await fetch("/api/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        return fail(
          typeof result.error === "string"
            ? result.error
            : "Something went wrong. Please try again or email hello@getramz.com.",
        );
      }

      formRef.current?.reset();
      setStatus("success");
      setMessage("Thanks. We will be in touch.");
    } catch {
      fail("Something went wrong. Please check your connection and try again.");
    }
  }

  const buttonLabel =
    status === "submitting"
      ? "Sending…"
      : status === "success"
        ? "Request received"
        : "Request early access";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="ea-form">
      {/* Honeypot: hidden from sighted users and screen readers, bots fill it in. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={invalid === "email" || undefined}
          aria-describedby="request-access-status"
        />
      </div>

      <div className="field">
        <label htmlFor="company">Company name</label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="Acme Corp"
          aria-invalid={invalid === "company" || undefined}
          aria-describedby="request-access-status"
        />
      </div>

      <div className="field">
        <label htmlFor="message">
          Message <span className="optional">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Tell us about your AI governance needs."
        />
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary btn-submit">
        {buttonLabel}
      </button>
      <p
        id="request-access-status"
        role="status"
        aria-live="polite"
        className={`form-msg${status === "error" ? " is-error" : ""}`}
      >
        {message}
      </p>
    </form>
  );
}
