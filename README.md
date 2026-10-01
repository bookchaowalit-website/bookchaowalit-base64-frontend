# Base64 Encoder / Decoder

Encode and decode Base64 strings in the browser.

## Problem
Copy-pasting Base64 through random sites is slow and leaks content.

## Features
- Encode text → Base64
- Decode Base64 → text (UTF-8)
- Copy result with one click
- URL-safe output option; decoding accepts standard or URL-safe Base64 and ignores line breaks
- Client-side only — nothing leaves your machine
- `/api/mcp` JSON-RPC endpoint exposing `base64_encode` / `base64_decode` tools (stateless, same logic as the UI)

## Limitations
- Binary file encode/decode is not included (text only)
- Invalid Base64 shows a clear error

## Run
```bash
npm ci
npm run dev
```

## Checks (same as CI)
```bash
npm run lint
npm run typecheck
npm test        # node:test unit tests for lib/base64.ts and lib/mcp.ts
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to override the canonical origin used by metadata,
`robots.txt`, and `sitemap.xml`.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Fully client-side (no API keys)

## Honesty notes
- Portfolio developer utility showcase
- Not a multi-tenant SaaS product
