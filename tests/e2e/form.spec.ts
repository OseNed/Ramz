import { expect, test } from "@playwright/test";

const form = (page: import("@playwright/test").Page) => page.locator("form.ea-form");
const status = (page: import("@playwright/test").Page) => page.locator("#request-access-status");
const submit = (page: import("@playwright/test").Page) => form(page).locator("button[type=submit]");

async function fillValid(page: import("@playwright/test").Page) {
  await page.getByLabel("Work email").fill("e2e-test@getramz.com");
  await page.getByLabel("Company name").fill("RAMZ E2E test");
  await page.getByLabel(/Message/).fill("Automated end-to-end test, please ignore.");
}

test.describe("early-access form (client)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#early-access");
  });

  test("requires a valid work email", async ({ page }) => {
    await submit(page).click();
    await expect(status(page)).toHaveText("Enter a valid work email.");
    await expect(page.getByLabel("Work email")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("Work email")).toBeFocused();

    await page.getByLabel("Work email").fill("not-an-email");
    await submit(page).click();
    await expect(status(page)).toHaveText("Enter a valid work email.");
  });

  test("requires a company name", async ({ page }) => {
    await page.getByLabel("Work email").fill("e2e-test@getramz.com");
    await submit(page).click();
    await expect(status(page)).toHaveText("Enter your company name.");
    await expect(page.getByLabel("Company name")).toHaveAttribute("aria-invalid", "true");
  });

  test("sends email, company, message, honeypot and timing to /api/request-access", async ({ page }) => {
    let body: Record<string, unknown> = {};
    await page.route("**/api/request-access", async (route) => {
      body = route.request().postDataJSON();
      await route.fulfill({ status: 200, json: { ok: true } });
    });
    await fillValid(page);
    await submit(page).click();

    await expect(submit(page)).toHaveText("Request received");
    await expect(status(page)).toHaveText("Thanks. We will be in touch.");
    await expect(page.getByLabel("Work email")).toHaveValue("");
    expect(body).toMatchObject({
      email: "e2e-test@getramz.com",
      company: "RAMZ E2E test",
      message: "Automated end-to-end test, please ignore.",
      website: "",
    });
    expect(typeof body.renderedAt).toBe("number");
  });

  test("shows the server's error message", async ({ page }) => {
    await page.route("**/api/request-access", (route) =>
      route.fulfill({ status: 502, json: { error: "We couldn't send your request. Please try again." } }),
    );
    await fillValid(page);
    await submit(page).click();
    await expect(status(page)).toHaveText("We couldn't send your request. Please try again.");
    await expect(status(page)).toHaveClass(/is-error/);
    await expect(submit(page)).toHaveText("Request early access");
    await expect(submit(page)).toBeEnabled();
  });

  test("handles a network failure", async ({ page }) => {
    await page.route("**/api/request-access", (route) => route.abort("failed"));
    await fillValid(page);
    await submit(page).click();
    await expect(status(page)).toHaveText(
      "Something went wrong. Please check your connection and try again.",
    );
  });

  test("disables the button while sending", async ({ page }) => {
    let release!: () => void;
    const held = new Promise<void>((r) => (release = r));
    await page.route("**/api/request-access", async (route) => {
      await held;
      await route.fulfill({ status: 200, json: { ok: true } });
    });
    await fillValid(page);
    await submit(page).click();
    await expect(submit(page)).toHaveText("Sending…");
    await expect(submit(page)).toBeDisabled();
    release();
    await expect(submit(page)).toHaveText("Request received");
  });

  test("real route: unconfigured email delivery surfaces as an error, not a fake success", async ({ page }) => {
    test.skip(!!process.env.RESEND_CONFIGURED, "delivery is configured; covered by the delivery check");
    await fillValid(page);
    await page.waitForTimeout(1600); // stay above the server's too-fast threshold
    const [response] = await Promise.all([
      page.waitForResponse("**/api/request-access"),
      submit(page).click(),
    ]);
    expect([502, 503]).toContain(response.status());
    await expect(status(page)).toHaveClass(/is-error/);
    await expect(submit(page)).not.toHaveText("Request received");
  });

  // Real delivery: sends one email to LEADS_TO_EMAIL. Run only against a target
  // whose Resend secrets are set, e.g.
  // RESEND_CONFIGURED=1 BASE_URL=https://<preview>.workers.dev npx playwright test -g "delivery" --project=desktop-1440
  test("delivery: a real submission reaches Resend and shows success", async ({ page }, testInfo) => {
    test.skip(!process.env.RESEND_CONFIGURED, "set RESEND_CONFIGURED=1 against a configured deployment");
    test.skip(testInfo.project.name !== "desktop-1440", "send a single test email per run");
    const marker = `RAMZ delivery test ${new Date().toISOString()}`;
    await page.getByLabel("Work email").fill("e2e-test@getramz.com");
    await page.getByLabel("Company name").fill("RAMZ delivery test");
    await page.getByLabel(/Message/).fill(marker);
    await page.waitForTimeout(1600); // stay above the server's too-fast threshold
    const [response] = await Promise.all([
      page.waitForResponse("**/api/request-access"),
      submit(page).click(),
    ]);
    expect(response.status()).toBe(200);
    await expect(submit(page)).toHaveText("Request received");
    testInfo.annotations.push({ type: "check inbox for", description: marker });
  });
});
