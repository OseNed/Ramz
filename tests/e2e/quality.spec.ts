import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { revealAll } from "./helpers";

test.describe("quality", () => {
  test.skip(({ isMobile }) => isMobile, "covered by the desktop run");

  test("has no WCAG 2.1 AA accessibility violations", async ({ page }) => {
    await page.goto("/");
    await revealAll(page); // headings fade in; measure them at full opacity
    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
      .analyze();
    expect(violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(", ")}`)).toEqual([]);
  });

  test("metadata, Open Graph and crawl files are current", async ({ page, request }) => {
    await page.goto("/");
    const meta = (selector: string) => page.locator(selector).getAttribute("content");

    await expect(page).toHaveTitle("RAMZ | From AI Governance to Responsible AI");
    expect(await page.locator("html").getAttribute("lang")).toBe("en");
    expect(await meta('meta[name="description"]')).toContain("Manage AI systems");
    expect(await page.locator('link[rel="canonical"]').getAttribute("href")).toBe("https://getramz.com");
    expect(await meta('meta[property="og:title"]')).toBe("RAMZ | From AI Governance to Responsible AI");
    expect(await meta('meta[property="og:image"]')).toBe("https://getramz.com/images/og-cover.png");
    expect(await meta('meta[name="twitter:card"]')).toBe("summary_large_image");
    await expect(page.locator("h1")).toHaveCount(1);

    const html = await page.content();
    expect(html).not.toMatch(/Autonomous Era|Request Access<|why-ramz|request-access"|api\/early-access/);

    const og = await request.get("/images/og-cover.png");
    expect(og.status()).toBe(200);
    expect(og.headers()["content-type"]).toBe("image/png");
    for (const path of ["/icons/favicon.svg", "/icons/favicon-32.png", "/icons/favicon-48.png", "/icons/apple-touch-icon-180.png"]) {
      expect((await request.get(path)).status(), path).toBe(200);
    }
    expect(await (await request.get("/robots.txt")).text()).toContain("Sitemap: https://getramz.com/sitemap.xml");
    expect(await (await request.get("/sitemap.xml")).text()).toContain("<loc>https://getramz.com</loc>");
  });

  test("sends security headers", async ({ request }) => {
    const headers = (await request.get("/")).headers();
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["x-powered-by"]).toBeUndefined();
  });

  test("loads only working assets", async ({ page }) => {
    const failed: string[] = [];
    page.on("response", (r) => {
      if (r.status() >= 400 && !/fontshare/.test(r.url())) failed.push(`${r.status()} ${r.url()}`);
    });
    page.on("requestfailed", (r) => {
      if (!/fontshare/.test(r.url())) failed.push(`failed ${r.url()}`);
    });
    await page.goto("/", { waitUntil: "networkidle" });
    expect(failed).toEqual([]);
  });

  test("loads the body font and requests the display font", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    expect(await page.evaluate(() => document.fonts.check('16px "Inter Variable"'))).toBe(true);
    await expect(page.locator('link[rel="stylesheet"][href*="fontshare.com"][href*="general-sans"]')).toHaveCount(1);
    // fonts.check() is also true when no such face exists, so look for a loaded face.
    const generalSans = await page.evaluate(async () => {
      await document.fonts.ready;
      return [...document.fonts].some((f) => f.family.includes("General Sans") && f.status === "loaded");
    });
    // Reported, not failed: some sandboxes block the Fontshare CDN.
    test.info().annotations.push({ type: "General Sans loaded", description: String(generalSans) });
  });

  test("meets Core Web Vitals budgets (lab)", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const vitals = await page.evaluate(
      () =>
        new Promise<{ lcp: number; cls: number }>((resolve) => {
          let lcp = 0;
          let cls = 0;
          new PerformanceObserver((l) => l.getEntries().forEach((e) => (lcp = e.startTime))).observe({
            type: "largest-contentful-paint",
            buffered: true,
          });
          new PerformanceObserver((l) =>
            l.getEntries().forEach((e) => {
              const shift = e as PerformanceEntry & { value: number; hadRecentInput: boolean };
              if (!shift.hadRecentInput) cls += shift.value;
            }),
          ).observe({ type: "layout-shift", buffered: true });
          setTimeout(() => resolve({ lcp, cls }), 1500);
        }),
    );
    test.info().annotations.push({ type: "vitals", description: JSON.stringify(vitals) });
    expect(vitals.lcp).toBeLessThan(2500);
    expect(vitals.cls).toBeLessThan(0.1);

    const jsBytes = await page.evaluate(() =>
      performance
        .getEntriesByType("resource")
        .filter((r) => (r as PerformanceResourceTiming).initiatorType === "script")
        .reduce((sum, r) => sum + (r as PerformanceResourceTiming).encodedBodySize, 0),
    );
    test.info().annotations.push({ type: "script bytes (compressed)", description: String(jsBytes) });
  });
});
