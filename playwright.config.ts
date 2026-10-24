import { defineConfig, devices } from "@playwright/test";

/**
 * E2E suite. By default it builds and starts the Next.js production server.
 * Set BASE_URL to run the same tests against another target, e.g. the
 * Cloudflare Workers preview: `npm run cf:preview` then
 * `BASE_URL=http://localhost:8787 npm run test:e2e`.
 */
const baseURL = process.env.BASE_URL ?? "http://localhost:3200";

const viewport = (width: number, height = 900) => ({ viewport: { width, height } });

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: { baseURL, trace: "retain-on-failure" },
  projects: [
    // Layout checks at every breakpoint the design was verified at.
    { name: "desktop-1440", use: { ...devices["Desktop Chrome"], ...viewport(1440) } },
    { name: "desktop-1280", use: { ...devices["Desktop Chrome"], ...viewport(1280) }, testMatch: /layout/ },
    { name: "laptop-1024", use: { ...devices["Desktop Chrome"], ...viewport(1024) }, testMatch: /layout/ },
    { name: "tablet-768", use: { ...devices["Desktop Chrome"], ...viewport(768, 1024) }, testMatch: /layout/ },
    {
      name: "mobile-390",
      use: { ...devices["iPhone 14"], defaultBrowserType: "chromium" },
      testMatch: /layout|form|animation/,
    },
    {
      // devices["iPhone SE"] is the 320px first generation, so set 375 explicitly.
      name: "mobile-375",
      use: { ...devices["iPhone SE"], viewport: { width: 375, height: 667 }, defaultBrowserType: "chromium" },
      testMatch: /layout/,
    },
    {
      name: "mobile-320",
      use: { ...devices["iPhone SE"], defaultBrowserType: "chromium" },
      testMatch: /layout/,
    },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: "npm run build && npx next start -p 3200",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
      },
});
