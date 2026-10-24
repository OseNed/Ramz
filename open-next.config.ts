import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// The site is fully prerendered and never revalidates, so prerendered pages
// are served straight from Workers static assets: no R2 bucket or KV needed.
// Switch to the R2 cache if ISR or on-demand revalidation is ever added.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
