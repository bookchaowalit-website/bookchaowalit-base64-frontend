# Upgrade plan

## Current state: 8/10 (was 6/10)

Working, UTF-8-safe Base64 bench with unit-tested logic, a real MCP endpoint,
and CI running lint, typecheck, tests, and build.

## Backlog

### P0
- (none open)

### P1
- Confirm the canonical production domain (`lib/site.ts` falls back to
  `https://base64.bookchaowalit.com`; the portfolio list links the
  `*-frontend.vercel.app` URL) and set `NEXT_PUBLIC_SITE_URL` in Vercel.

### P2
- Optional file input (drag-and-drop) for text files, still browser-only.
- Remove unused starter SVGs in `public/` once confirmed unreferenced.
- Share `lib/mcp.ts` and the more-projects data via a package instead of copies.

## Done in this pass
- Extracted encode/decode into `lib/base64.ts`: strict UTF-8 decode (invalid
  bytes now error instead of silently producing U+FFFD), whitespace-tolerant
  and URL-safe input, padding validation, URL-safe output toggle.
- Replaced the stub `/api/mcp` ("Sample data") with a JSON-RPC handler
  (`lib/mcp.ts`) exposing `base64_encode` / `base64_decode`.
- `node:test` unit tests (`npm test`), `typecheck` script, GitHub Actions CI.
- Fixed all ESLint errors; rewrote the 978-line hand-unrolled
  `more-projects` page as a data-driven list with accessible link labels.
- Replaced stale `public/robots.txt` / `sitemap.xml` (wrong domain) with
  `app/robots.ts` / `app/sitemap.ts`; added canonical + `og:url`.
- a11y: `aria-pressed` mode toggles, error linked to the input, focus rings on
  inputs and links. Removed `app/page.tsx.backup`.

## Done in this pass (pass 2)
- Generated `app/opengraph-image.tsx` social card (1200×630 PNG at build time, site palette) so `summary_large_image` has a real image.
- `/more-projects` no longer links to this app itself.
- `PRODUCT.md`: dropped the broken create-next-app "Source README excerpt" (its open code fence swallowed the rest of the brief); points to README/CI checks instead.
