# Course Concierge canonical URLs implementation plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make Course Concierge consistently identify its public domain and each indexable page's canonical URL.

**Architecture:** Keep the existing Next.js pages and content. Use the Metadata API for self-referencing canonical links, a single public origin for metadata and sitemap generation, and a permanent redirect from `/` to the English homepage. Do not place a homepage canonical in the shared layout, where it could be inherited by lecture pages.

**Tech Stack:** Next.js 16, React 19, TypeScript, native Node tests, Python HTML/XML smoke checks.

### Task 1: Reproduce and align the public domain

- Verify the current built homepage has no canonical, and the sitemap uses `aibd-course.vercel.app`.
- Create `lib/site.ts` exporting `SITE_URL = 'https://courseconcierge.rbovetti.com'`.
- Import that constant in `app/layout.tsx` and `app/sitemap.ts`; replace the old sitemap address in `public/robots.txt`.
- Change `app/page.tsx` to `permanentRedirect('/en')` using the existing default locale.

### Task 2: Set individual canonicals

- Add `alternates.canonical` to the homepage, overview, syllabus, lectures index, and AI assistant metadata.
- Add a server metadata layout around the existing client resources page.
- Include locale and lecture slug in `app/[locale]/lectures/[slug]/page.tsx` metadata. Preserve lecture titles, descriptions and keywords.
- Keep the internal search route and page contents unchanged.

### Task 3: Verify the complete generated site

- Run `npm test` and `npm run build` from this checkout.
- Parse the built sitemap and assert all 12 URLs use the public domain.
- For every sitemap URL, parse its generated HTML and assert exactly one canonical, matching that URL, and no `noindex` directive.
- Check robots.txt references the same sitemap; check the root redirect is permanent.
- Review `git diff --check` and the final patch before publication.
- Verify any publication on the public domain before requesting Google recrawl or validating fixes.
