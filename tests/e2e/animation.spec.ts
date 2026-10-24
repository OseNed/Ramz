import { expect, test, type Page } from "@playwright/test";

const canvasSnapshot = (page: Page) =>
  page.locator("canvas.hero-net").evaluate((c: HTMLCanvasElement) => c.toDataURL());

test.describe("animation", () => {
  test("hero network draws and moves", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(400);
    const a = await canvasSnapshot(page);
    await page.waitForTimeout(700);
    const b = await canvasSnapshot(page);
    const blank = await page
      .locator("canvas.hero-net")
      .evaluate((c: HTMLCanvasElement) => {
        const d = c.getContext("2d")!.getImageData(0, 0, c.width, c.height).data;
        for (let i = 3; i < d.length; i += 4) if (d[i] > 0) return false;
        return true;
      });
    expect(blank).toBe(false);
    expect(a).not.toBe(b);
  });

  test("hero network pauses when scrolled out of view", async ({ page }) => {
    await page.goto("/");
    await page.locator("#early-access").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const a = await canvasSnapshot(page);
    await page.waitForTimeout(700);
    expect(await canvasSnapshot(page)).toBe(a);
  });

  test("animations never intercept clicks or taps", async ({ page }) => {
    await page.goto("/");
    const cta = page.locator(".hero-ctas .btn-primary");
    const box = (await cta.boundingBox())!;
    const hit = await page.evaluate(
      ([x, y]) => document.elementFromPoint(x, y)?.closest("a")?.textContent,
      [box.x + box.width / 2, box.y + box.height / 2],
    );
    expect(hit).toBe("Request early access");
    await cta.click();
    await expect(page.locator("#early-access")).toBeInViewport();
  });

  test("platform rail starts when its section scrolls into view", async ({ page }) => {
    test.skip(page.viewportSize()!.width <= 1000, "rail is hidden below 1000px");
    await page.goto("/");
    await expect(page.locator(".plat")).not.toHaveClass(/\bon\b/);
    await page.locator("#platform").scrollIntoViewIfNeeded();
    await expect(page.locator(".plat")).toHaveClass(/\bon\b/);
    await expect(page.locator(".rail-dot")).toHaveCSS("opacity", "1");
    await expect(page.locator(".g1")).toHaveCSS("animation-name", "ramz-glow-1");
  });

  test.describe("reduced motion", () => {
    test.use({ reducedMotion: "reduce" });

    test("hero shows a still frame and nothing else animates", async ({ page }) => {
      await page.goto("/");
      await page.waitForTimeout(300);
      const a = await canvasSnapshot(page);
      await page.waitForTimeout(800);
      expect(await canvasSnapshot(page)).toBe(a);

      await page.locator("#platform").scrollIntoViewIfNeeded();
      await expect(page.locator(".rail-dot")).toHaveCSS("display", "none");
      await expect(page.locator(".g1")).toHaveCSS("animation-name", "none");
      await expect(page.locator("#how-title")).toHaveCSS("opacity", "1");
    });
  });
});
