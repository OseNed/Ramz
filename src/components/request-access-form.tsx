"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function RequestAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const renderedAt = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
      renderedAt: renderedAt.current ?? undefined,
    };

    try {
      const response = await fetch("/api/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          typeof result.error === "string" ? result.error : "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-hairline bg-canvas p-8 text-center sm:p-10"
      >
        <p className="text-heading-md text-ink">Request received.</p>
        <p className="mt-2 text-body-md text-muted">
          Thank you for your interest in Ramz. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-hairline bg-canvas p-6 sm:p-8"
    >
      {/* Honeypot — hidden from sighted users and screen readers, bots fill it in. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="mt-1.5 h-11 w-full rounded-md border border-stone bg-canvas px-3 text-body-md text-ink outline-none placeholder:text-stone focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Company name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Acme Corp"
            className="mt-1.5 h-11 w-full rounded-md border border-stone bg-canvas px-3 text-body-md text-ink outline-none placeholder:text-stone focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message <span className="font-normal text-stone">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your AI governance needs."
            className="mt-1.5 w-full resize-none rounded-md border border-stone bg-canvas px-3 py-2.5 text-body-md text-ink outline-none placeholder:text-stone focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="mt-4 text-sm text-danger-text">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-white transition-opacity duration-150 ease-ramz hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request Early Access"}
      </button>
    </form>
  );
}
