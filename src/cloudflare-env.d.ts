// Bindings this app adds to the OpenNext CloudflareEnv (see wrangler.jsonc).
// Kept by hand rather than generated: `wrangler types` emits the full Workers
// runtime typings, which this app does not otherwise need.

interface WorkersRateLimit {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

interface CloudflareEnv {
  REQUEST_ACCESS_RATE_LIMITER?: WorkersRateLimit;
  RESEND_API_KEY?: string;
  LEADS_TO_EMAIL?: string;
  LEADS_FROM_EMAIL?: string;
}
