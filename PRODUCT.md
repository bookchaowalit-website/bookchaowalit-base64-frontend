# bookchaowalit-base64-frontend — Product brief

<!-- impeccable:product-schema 1 -->

**Slug:** `bookchaowalit-website/bookchaowalit-base64-frontend`  
**Generated:** 2026-08-11 (bulk Book Dev closeout)  
**Status:** starter / portfolio boundary

## Purpose

Portfolio repository under Book Dev. This brief records ownership and the
current honest status so the nested tree is not an empty shell in the task
system.

## Runnable path

See `README.md` for install and run instructions when present.

## Limits

- Not claimed as production-ready unless README and tests prove it.
- Mobile smoke / emulator acceptance is separate and toolchain-dependent.

## Platform

web

## Users

Repository evidence suggests developers and technical users who need to
inspect or transform UTF-8 text in a browser without uploading it.

## Product Purpose

Encode and decode Base64 text locally. Success means the user can move between
plain text and Base64 quickly while understanding that the input stays in the
browser.

## Positioning

The meaningful mechanism is a small, client-only utility with explicit
UTF-8-safe behavior and no server upload.

## Operating Context

The user pastes or types a text payload, chooses encode or decode, runs the
operation, and copies the result for debugging or data-URL/token work.

## Capabilities and Constraints

- Encode UTF-8 text and decode Base64 text.
- Copy, clear, and swap input/output locally.
- Invalid Base64 must produce a clear error.
- Binary-file conversion and multi-tenant SaaS behavior are out of scope.

## Brand Commitments

The product is part of the Bookchaowalit developer-tools portfolio and must
remain honest about browser-only storage and processing.

## Evidence on Hand

- `README.md` documents the feature boundary and local-only behavior.
- `app/page.tsx` contains the working encode/decode interaction.
- No customer proof, usage benchmark, or external data is claimed.

## Product Principles

- Keep sensitive text local by default.
- Make the transformation legible before the user copies it.
- Fail clearly on invalid input.

## Accessibility & Inclusion

Use labeled controls, keyboard-operable actions, visible focus, and readable
error states for the browser tool.

## Current capabilities

See `README.md` for the authoritative feature list, limits and the checks CI runs
(lint, typecheck, unit tests, build). `docs/UPGRADE-PLAN.md` tracks the backlog.
