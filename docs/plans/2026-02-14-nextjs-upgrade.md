# Next.js 14 → 16 Upgrade — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade Next.js from 14.2.35 to 16.x to fix 4 high-severity CVEs, migrating all breaking changes.

**Architecture:** Use the official Next.js codemod (`@next/codemod upgrade latest`) which automates the `params`/`searchParams` async migration — the only breaking change that applies to this project. Manual verification via `npm run build` after codemod.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3, `@next/codemod`

---

## Pre-flight checks

### Task 1: Create a git safety checkpoint

**Files:**
- None

**Step 1: Verify git status is clean**

```bash
cd /Users/riccardo.bovetti/LocalOnly/SITIWEB/AIBD2026
git status
```
Expected: working tree clean (or only untracked files). If there are uncommitted changes, commit or stash them before proceeding.

**Step 2: Create a checkpoint tag**

```bash
git tag pre-nextjs16-upgrade
```
Expected: no output (tag created silently). This is a safety net — if anything goes wrong, `git reset --hard pre-nextjs16-upgrade` restores the original state.

---

### Task 2: Run the official codemod

**Files:**
- `package.json` — will be modified
- `package-lock.json` — will be regenerated
- `app/[locale]/layout.tsx` — params async migration
- `app/[locale]/page.tsx` — params async migration
- `app/[locale]/ai-assistant/page.tsx` — params async migration
- `app/[locale]/lectures/page.tsx` — params async migration
- `app/[locale]/lectures/[slug]/page.tsx` — params async migration
- `app/[locale]/overview/page.tsx` — params async migration
- `app/[locale]/resources/page.tsx` — params async migration
- `app/[locale]/search/page.tsx` — params async migration
- `app/[locale]/syllabus/page.tsx` — params async migration

**Step 1: Run the codemod**

```bash
cd /Users/riccardo.bovetti/LocalOnly/SITIWEB/AIBD2026
npx @next/codemod@canary upgrade latest
```

This will:
- Prompt for confirmation → accept
- Update `next`, `react`, `react-dom`, `eslint-config-next` in package.json
- Run `npm install`
- Apply the `next-async-request-api` codemod: wraps all `params` accesses with `await`

Expected output ends with something like:
```
✓ Upgraded next from 14.2.35 to 16.x.x
✓ Applied codemod: next-async-request-api
```

**Step 2: Verify package versions**

```bash
node -e "const p = require('./package.json'); console.log('next:', p.dependencies.next, 'react:', p.dependencies.react)"
```
Expected: `next: 16.x.x  react: 19.x.x`

---

### Task 3: Verify the build

**Files:**
- None (read-only verification)

**Step 1: Run TypeScript check**

```bash
cd /Users/riccardo.bovetti/LocalOnly/SITIWEB/AIBD2026
npx tsc --noEmit
```
Expected: no output (zero errors). If there are errors, see Task 4.

**Step 2: Run production build**

```bash
npm run build
```
Expected: build completes with `✓ Compiled successfully` and no type errors. The build will list all routes — confirm you see `/[locale]`, `/[locale]/lectures/[slug]`, etc.

---

### Task 4: Fix any residual TypeScript errors (run only if Task 3 fails)

**Context:** The codemod changes `params: { locale: string }` to `params: Promise<{ locale: string }>`. In some edge cases it may miss a file or produce a type mismatch.

**Step 1: Identify failing files**

```bash
npx tsc --noEmit 2>&1 | grep "error TS"
```

**Step 2: For each file with a `params` type error, apply this pattern**

Before (what the codemod produces):
```typescript
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = params  // ← error: params is Promise, not destructurable
```

After (correct):
```typescript
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
```

**Step 3: Re-run build to confirm zero errors**

```bash
npm run build
```
Expected: `✓ Compiled successfully`

---

### Task 5: Commit

**Step 1: Stage all changes**

```bash
cd /Users/riccardo.bovetti/LocalOnly/SITIWEB/AIBD2026
git add package.json package-lock.json app/
```

**Step 2: Commit**

```bash
git commit -m "$(cat <<'EOF'
chore: upgrade Next.js 14 → 16, React 18 → 19

Fixes 4 high-severity CVEs:
- GHSA-9g9p-9gw9-jx7f (DoS via Image Optimizer)
- GHSA-h25m-26qc-wcjf (HTTP deserialization DoS)
- GHSA-5j98-mcp5-4vw2 (glob CLI injection, dev-only)

Migration applied via @next/codemod upgrade latest.
Breaking change: params/searchParams are now async Promises.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

**Step 3: Delete the safety tag**

```bash
git tag -d pre-nextjs16-upgrade
```

---

## Notes

- `searchParams` in `app/[locale]/search/page.tsx` uses `useSearchParams()` hook (client-side) — **not affected** by the async params breaking change
- `app/api/search/route.ts` uses `request.nextUrl.searchParams` — **not affected**
- Tailwind CSS stays at v3 — upgrading to v4 is a separate, larger effort
- `@types/node`, `@types/react`, `@types/react-dom` will be updated automatically by the codemod's npm install
