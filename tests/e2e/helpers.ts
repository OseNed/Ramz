import type { Page } from "@playwright/test";

// Third-party font CSS may be unreachable in sandboxed CI; that is reported by
// the font test, not treated as a page error.
const IGNORED_ERRORS = [/fontshare\.com/, /net::ERR_/];

export function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  return () => errors.filter((e) => !IGNORED_ERRORS.some((re) => re.test(e)));
}

/** Scroll through the page so every one-time reveal has fired. */
export async function revealAll(page: Page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(120);
  }
  await page.waitForTimeout(800); // .rv transition is 0.7s
}

export const SECTION_IDS = ["top", "platform", "how", "frameworks", "who", "early-access"];

/** A random documentation-range IP so rate-limit buckets never collide between tests. */
export function testIp() {
  return `198.51.100.${Math.floor(Math.random() * 250) + 1}`;
}
