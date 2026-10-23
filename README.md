# Ramz website

The public one-page marketing site for Ramz — getramz.com.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Resend for the "Request Early Access" form

## Development

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY, LEADS_TO_EMAIL, LEADS_FROM_EMAIL
npm run dev
```

## Request Early Access form

`POST /api/request-access` validates the submission (zod), rejects honeypot
and too-fast submissions, rate-limits by IP, and emails the lead via
[Resend](https://resend.com). It requires three environment variables:

- `RESEND_API_KEY` — API key from your Resend account
- `LEADS_TO_EMAIL` — inbox that receives leads (e.g. `hello@getramz.com`)
- `LEADS_FROM_EMAIL` — verified sending address on a domain confirmed in Resend

Without these set, the endpoint returns `503` rather than pretending to
succeed.

## Brand assets

Logo mark and product screenshots in `public/images/` and
`src/components/logo.tsx` are sourced from the Ramz pitch deck.
