import { expect, test } from "@playwright/test";
import { collectErrors, revealAll, SECTION_IDS } from "./helpers";

test.describe("layout", () => {
  test("renders every section without overflow, clipping or console errors", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/");
    await revealAll(page);

    for (const id of SECTION_IDS) await expect(page.locator(`#${id}`)).toBeAttached();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "From AI Governance to Responsible AI.",
    );
    await expect(page.locator("footer")).toBeVisible();

    const width = page.viewportSize()!.width;
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);

    // No text-bearing element extends past the viewport or clips its own content.
    const offenders = await page.evaluate((vw) => {
      const out: string[] = [];
      document.querySelectorAll("h1,h2,h3,p,li,a,button,label,input,textarea").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || el.closest("[aria-hidden='true']")) return;
        if (r.left < -1 || r.right > vw + 1) out.push(`${el.tagName} outside viewport: ${el.textContent?.slice(0, 40)}`);
        if (el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflowX === "hidden")
          out.push(`${el.tagName} clipped: ${el.textContent?.slice(0, 40)}`);
      });
      return out;
    }, width);
    expect(offenders).toEqual([]);

    expect(errors()).toEqual([]);
  });

  test("header items and hero CTAs do not overlap", async ({ page }) => {
    await page.goto("/");
    const box = async (selector: string) => (await page.locator(selector).first().boundingBox())!;
    const overlaps = (a: { x: number; y: number; width: number; height: number }, b: typeof a) =>
      a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;

    expect(overlaps(await box(".site-header .brand"), await box(".site-header .btn"))).toBe(false);
    const ctas = page.locator(".hero-ctas .btn");
    expect(overlaps((await ctas.nth(0).boundingBox())!, (await ctas.nth(1).boundingBox())!)).toBe(false);
  });

  test("navigation links collapse on small screens", async ({ page }) => {
    await page.goto("/");
    const width = page.viewportSize()!.width;
    const links = page.locator(".nav-links");
    if (width <= 760) await expect(links).toBeHidden();
    else await expect(links).toBeVisible();
    await expect(page.locator(".site-header").getByRole("link", { name: "Request early access" })).toBeVisible();
  });

  test("platform rail shows only when the three cards sit in one row", async ({ page }) => {
    await page.goto("/");
    const rail = page.locator(".rail");
    if (page.viewportSize()!.width <= 1000) await expect(rail).toBeHidden();
    else await expect(rail).toBeVisible();
  });
});
