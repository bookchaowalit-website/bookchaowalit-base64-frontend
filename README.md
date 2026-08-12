# Base64 Encoder / Decoder

Encode and decode Base64 strings in the browser.

## Problem
Copy-pasting Base64 through random sites is slow and leaks content.

## Features
- Encode text → Base64
- Decode Base64 → text (UTF-8)
- Copy result with one click
- Client-side only — nothing leaves your machine

## Limitations
- Binary file encode/decode is not included (text only)
- Invalid Base64 shows a clear error

## Run
```bash
npm install
npm run dev
```

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Fully client-side (no API keys)

## Honesty notes
- Portfolio developer utility showcase
- Not a multi-tenant SaaS product
