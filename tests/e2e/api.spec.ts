import { expect, test } from "@playwright/test";
import { testIp } from "./helpers";

// Server-side behaviour of POST /api/request-access, against the real route.
const valid = { email: "e2e-test@getramz.com", company: "RAMZ E2E test", message: "API test" };

test.describe("POST /api/request-access", () => {
  test.skip(({ isMobile }) => isMobile, "server behaviour is viewport-independent");

  const post = (request: import("@playwright/test").APIRequestContext, data: unknown, ip = testIp()) =>
    request.post("/api/request-access", {
      data,
      headers: { "cf-connecting-ip": ip, "x-forwarded-for": ip },
    });

  test("rejects invalid JSON", async ({ request }) => {
    const ip = testIp();
    const res = await request.post("/api/request-access", {
      data: "{not json",
      headers: { "content-type": "application/json", "cf-connecting-ip": ip, "x-forwarded-for": ip },
    });
    expect(res.status()).toBe(400);
  });

  test("validates email, company and message length server-side", async ({ request }) => {
    for (const [data, message] of [
      [{ ...valid, email: "nope" }, "Enter a valid email address."],
      [{ ...valid, email: "" }, "Enter your work email."],
      [{ ...valid, company: "  " }, "Enter your company name."],
    ] as const) {
      const res = await post(request, data);
      expect(res.status()).toBe(400);
      expect((await res.json()).error).toBe(message);
    }
    expect((await post(request, { ...valid, message: "x".repeat(2001) })).status()).toBe(400);
    expect((await post(request, { ...valid, company: "x".repeat(201) })).status()).toBe(400);
  });

  test("silently accepts honeypot submissions without sending", async ({ request }) => {
    const res = await post(request, { ...valid, website: "https://spam.example" });
    expect(res.status()).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });

  test("silently accepts implausibly fast submissions without sending", async ({ request }) => {
    const res = await post(request, { ...valid, renderedAt: Date.now() });
    expect(res.status()).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });

  test("never reports success for a real submission it could not deliver", async ({ request }) => {
    test.skip(!!process.env.RESEND_CONFIGURED, "delivery is configured; covered by the delivery check");
    const res = await post(request, { ...valid, renderedAt: Date.now() - 10_000 });
    expect([502, 503]).toContain(res.status());
    expect(typeof (await res.json()).error).toBe("string");
  });

  test("rate-limits repeated submissions from one IP", async ({ request }) => {
    // In-memory fallback allows 5 per 10 min; the Workers binding 3 per minute.
    const ip = testIp();
    const statuses: number[] = [];
    for (let i = 0; i < 7; i++) statuses.push((await post(request, { ...valid, email: "bad" }, ip)).status());
    expect(statuses).toContain(429);
    expect(statuses.slice(0, 3).every((s) => s === 400)).toBe(true);
    // A different client is unaffected.
    expect((await post(request, { ...valid, email: "bad" })).status()).toBe(400);
  });
});
