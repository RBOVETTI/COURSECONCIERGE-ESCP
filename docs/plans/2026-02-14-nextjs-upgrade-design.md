# Design: Upgrade Next.js 14 → 16

**Date:** 2026-02-14
**Project:** AIBD2026
**Status:** Approved

## Problem

Next.js 14.2.35 has 4 high-severity CVEs:
- `GHSA-9g9p-9gw9-jx7f` — DoS via Image Optimizer remotePatterns
- `GHSA-h25m-26qc-wcjf` — HTTP request deserialization DoS via RSC
- `GHSA-5j98-mcp5-4vw2` — glob CLI command injection (via eslint-config-next, dev-only)

Target version: **Next.js 16.1.6** (latest stable, already used by LE7VITI in the same portfolio).

## Approach: Codemod-assisted upgrade (Option A)

Use the official Next.js upgrade codemod which:
1. Updates `next`, `react`, `react-dom`, `eslint-config-next` to latest
2. Automatically migrates `params`/`searchParams` from synchronous to async (the main breaking change)

## Breaking Changes Applicable to This Project

| Change | Impact | Files |
|--------|--------|-------|
| `params` is now a Promise | **High** — ~8 server component files | `app/[locale]/**` |
| `searchParams` is now a Promise | **High** — search page | `app/[locale]/search/page.tsx` |
| React 18 → 19 (new minimum) | Low — no deprecated hooks used | — |
| GET Route Handlers not cached by default | None — search API is stateless | — |
| `fetch` not cached by default | None — no fetch in Server Components | — |

## What Is NOT Changing

- App Router structure (no refactoring of `[locale]` routing)
- Tailwind CSS (stays at v3, no upgrade to v4)
- TypeScript configuration
- Content files and MDX pipeline

## Verification

After the codemod: run `npm run build` and confirm zero TypeScript/build errors.
