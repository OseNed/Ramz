# RAMZ website

The public one-page marketing site for RAMZ, getramz.com. The product itself
lives in `OseNed/ai_gov`.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (preflight and tokens; section styles live in `src/app/globals.css`)
- Resend for the "Request early access" form
- Cloudflare Workers hosting via [OpenNext](https://opennext.js.org/cloudflare)
- Playwright + axe for end-to-end, accessibility and SEO checks

## Development

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY, LEADS_TO_EMAIL, LEADS_FROM_EMAIL
npm run dev                  # http://localhost:3000
```

Checks: `npm run typecheck`, `npm run lint`, `npm run build`, `npm run test:e2e`.

## Request early access form

`POST /api/request-access` validates the submission (zod), silently drops
honeypot and too-fast submissions, rate-limits by client IP, and emails the
lead (work email, company, message, with reply-to set to the visitor) via
[Resend](https://resend.com). Nothing is stored: email is the only record.
It requires:

| Variable           | Kind   | Purpose                                                    |
| ------------------ | ------ | ---------------------------------------------------------- |
| `RESEND_API_KEY`   | secret | API key from the Resend account                            |
| `LEADS_TO_EMAIL`   | secret | Inbox that receives leads, e.g. `hello@getramz.com`        |
| `LEADS_FROM_EMAIL` | secret | Sending address on a domain verified in Resend, e.g. `notify@getramz.com` |

Without them the endpoint returns `503` rather than pretending to succeed;
a Resend failure returns `502`.

Rate limiting uses the Workers Rate Limiting binding
`REQUEST_ACCESS_RATE_LIMITER` (3 per minute per IP, `wrangler.jsonc`) on
Cloudflare, and an in-memory window (5 per 10 minutes) under `next dev` /
`next start`. See `src/lib/rate-limit.ts`.

## Cloudflare Workers

Built with `@opennextjs/cloudflare`. Prerendered pages are served from Workers
static assets (`open-next.config.ts`), so no R2 or KV binding is needed.

```bash
cp .dev.vars.example .dev.vars   # local Workers secrets (git-ignored)
npm run cf:preview               # build + run in workerd at http://localhost:8787
BASE_URL=http://localhost:8787 npm run test:e2e   # run the suite against the Worker
```

First deploy (workers.dev only, no custom domain yet):

```bash
npx wrangler login
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put LEADS_TO_EMAIL
npx wrangler secret put LEADS_FROM_EMAIL
npm run cf:deploy
```

To serve getramz.com, add a Custom Domain to the `ramz-website` Worker
(dashboard, or a `routes` entry with `"custom_domain": true` in
`wrangler.jsonc`) once the workers.dev deployment has been checked.

## Brand assets

The logo mark (`src/components/logo.tsx`) and favicons (`public/icons/`) come
from the RAMZ logo pack. `public/images/og-cover.png` is the social preview.
