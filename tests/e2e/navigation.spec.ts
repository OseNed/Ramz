import { expect, test } from "@playwright/test";

test.describe("navigation", () => {
  const navLinks = [
    ["Platform", "platform"],
    ["How it works", "how"],
    ["Frameworks", "frameworks"],
    ["Who it's for", "who"],
  ] as const;

  for (const [label, id] of navLinks) {
    test(`"${label}" scrolls to #${id}`, async ({ page }) => {
      await page.goto("/");
      await page.locator(".nav-links").getByRole("link", { name: label }).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect(page.locator(`#${id}`)).toBeInViewport();
    });
  }

  test("CTAs point at the form and how it works", async ({ page }) => {
    await page.goto("/");
    await page.locator(".hero-ctas").getByRole("link", { name: "See how it works" }).click();
    await expect(page.locator("#how")).toBeInViewport();
    await page.locator(".hero-ctas").getByRole("link", { name: "Request early access" }).click();
    await expect(page.locator("#early-access")).toBeInViewport();
    await page.locator(".site-header").getByRole("link", { name: "Request early access" }).click();
    await expect(page).toHaveURL(/#early-access$/);
  });

  test("every in-page link has a target and the logo returns to top", async ({ page }) => {
    await page.goto("/");
    const missing = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>("a[href^='#']")]
        .map((a) => a.getAttribute("href")!.slice(1))
        .filter((id) => !document.getElementById(id)),
    );
    expect(missing).toEqual([]);
    await expect(page.locator("a[href^='mailto:']")).toHaveAttribute("href", "mailto:hello@getramz.com");

    await page.locator("#who").scrollIntoViewIfNeeded();
    await page.getByRole("link", { name: "RAMZ home" }).click();
    await expect(page.locator("h1")).toBeInViewport();
  });
});
