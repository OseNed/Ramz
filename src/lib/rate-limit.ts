import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Rate limit for the early-access form.
 *
 * On Cloudflare Workers this uses the REQUEST_ACCESS_RATE_LIMITER binding
 * (Workers Rate Limiting API, configured in wrangler.jsonc), which is shared
 * across isolates in a Cloudflare location. A process-local Map is not: each
 * isolate would keep its own count.
 *
 * Outside Workers (`next dev`, `next start`) it falls back to an in-memory
 * window, which is fine for a single local process.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

function isRateLimitedInMemory(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

function workersRateLimiter() {
  try {
    return getCloudflareContext().env.REQUEST_ACCESS_RATE_LIMITER;
  } catch {
    // Not running inside the Workers runtime.
    return undefined;
  }
}

export async function isRateLimited(key: string): Promise<boolean> {
  const limiter = workersRateLimiter();
  if (limiter) {
    const { success } = await limiter.limit({ key });
    return !success;
  }
  return isRateLimitedInMemory(key);
}
