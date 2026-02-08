# Coding Agent Brief: AI & Data Transformation Course Website
## Development Instructions & Resources

**Project:** ESCP Master in F&B Course Website
**Client:** Professor Riccardo Bovetti
**Target Launch:** 6 weeks from kickoff
**Your Role:** Implement the complete website based on provided specifications

---

## 🎯 Project Overview

You are building a cutting-edge, student-centric course website for "AI & Data Transformation in Food & Beverage" at ESCP Business School. This site must:

1. **Showcase Innovation:** Position Professor Bovetti as a "new generation" professor through modern design and features
2. **Enhance Learning:** Provide intelligent content organization, search, and navigation
3. **Create "WOW" Factor:** Integrate AI Assistant and smart search capabilities
4. **Ensure Accessibility:** WCAG 2.1 Level AA compliant, mobile-first responsive
5. **Optimize Performance:** Lighthouse scores >90 across all metrics

---

## 📚 Documentation Package - READ THESE FIRST

### PRIMARY SPECIFICATION
**File:** `WEBSITE_SPECIFICATION.md`
**Size:** 100+ pages, 14 comprehensive chapters
**Purpose:** Complete blueprint for the entire website

**What's Inside:**
- Section 1: Executive summary and project vision
- Section 2: Design philosophy, visual identity, color palette, typography
- Section 3: Information architecture and site structure
- Section 4: Detailed page-by-page specifications (8 pages)
- Section 5: Interactive features and functionality
- Section 6: Technical specifications and tech stack recommendations
- Section 7: Content strategy and writing guidelines
- Section 8: Content mapping for all lectures
- Section 9: Implementation phases and timeline
- Section 10: Quality assurance and testing checklists
- Section 11: Post-launch considerations
- Section 12: Appendices (design assets, keywords, accessibility reference)

**⚠️ CRITICAL:** Read this document thoroughly before starting development. It contains every design decision, technical requirement, and implementation detail.

---

### CONTENT STRUCTURE REFERENCE
**File:** `LECTURES_METADATA.md`
**Purpose:** Metadata and content outlines for all 7 lectures

**What's Inside:**
- Frontmatter templates for markdown content
- Complete keyword taxonomy (100+ terms for search indexing)
- Learning objectives for each lecture
- Content section outlines
- Asset mappings (images + PDFs)
- Formatting guidelines
- SEO keywords by lecture

**Use This For:**
- Setting up content data structures
- Implementing search indexing
- Creating dynamic lecture pages
- Generating navigation and cross-references

---

### CONTENT EXAMPLE
**File:** `content_course-introduction.md`
**Purpose:** Fully formatted example of how lecture content should be structured

**What's Inside:**
- Complete markdown formatting
- Hierarchical headings (H2, H3)
- Tables, lists, formulas
- Learning objectives and key takeaways
- Discussion prompts
- Navigation links

**Use This As:**
- Template for formatting remaining lecture content
- Reference for markdown structure
- Example of content presentation

---

### PROJECT SUMMARY
**File:** `PROJECT_SUMMARY.md`
**Purpose:** Executive overview of the entire project

**Use This For:**
- Quick reference on project goals
- Understanding design decisions
- Checking asset inventory
- Reviewing implementation recommendations

---

## 🖼️ Asset Inventory

### Images (Hero Sections)
**Location:** `/sessions/gracious-kind-keller/mnt/AIBD2026/BaseDocumenti/`

```
Intro.png          (6.5 MB) → Course Introduction page
lecture1.png       (6.7 MB) → Lecture 1 page
Lecture2.png       (6.2 MB) → Lecture 2 page [Note: capital L]
lecture3.png       (6.7 MB) → Lecture 3 page
lecture4.png       (6.5 MB) → Lecture 4 page
lecture5.png       (6.2 MB) → Lecture 5 page
```

**Implementation Notes:**
- Use as full-width hero images with gradient overlay
- Optimize: Convert to WebP with JPG fallback
- Implement lazy loading for images below fold
- Target size after optimization: <500KB per image

---

### PDFs (Downloadable Materials)
**Location:** `/sessions/gracious-kind-keller/mnt/AIBD2026/BaseDocumenti/`

```
CourseIntro(ESCP-PR-260123-RB01_0100).pdf                    (753 KB)
Lecture1(ESCP-PR-260123-RB02_0200).pdf                       (4.3 MB)
Lecture2(ESCP-PR-260123-RB03_0200).pdf                       (4.5 MB)
Lecture3(ESCP-PR-260123-RB04_0200).pdf                       (1.6 MB)
Lecture3(ESCP-PR-260123-RB04_0200)_APPENDIX.pdf             (16.1 MB) [Large file - note this]
Lecture4(ESCP-PR-260123-RB05_0100).pdf                       (4.2 MB)
Lecture5(ESCP-PR-260123-RB06_0100).pdf                       (829 KB)
```

**Implementation Notes:**
- Serve from `/assets/pdfs/` directory
- Implement download tracking (analytics event)
- Add file size indicators in UI
- Consider CDN for large APPENDIX file

---

## 🎨 Design System Quick Reference

### Color Palette
```css
/* Primary Colors */
--color-primary: #1a1a2e;        /* Deep navy - headers, nav */
--color-accent: #00adb5;         /* Electric blue - CTAs, interactive */
--color-background: #ffffff;     /* Clean white */
--color-background-alt: #f8f9fa; /* Off-white sections */

/* Text Colors */
--color-text-body: #2d3436;      /* Dark gray */
--color-text-heading: #000000;   /* Black */

/* Semantic Colors */
--color-success: #00b894;        /* Green - completed */
--color-warning: #fdcb6e;        /* Amber - important */
--color-error: #ff7675;          /* Coral red - alerts */
```

### Typography
```css
/* Fonts */
--font-primary: 'Inter', -apple-system, sans-serif;
--font-code: 'JetBrains Mono', 'Courier New', monospace;

/* Scale */
--text-h1: 2.5rem;    /* 40px - Page titles */
--text-h2: 2rem;      /* 32px - Section headers */
--text-h3: 1.5rem;    /* 24px - Subsection headers */
--text-h4: 1.25rem;   /* 20px - Card titles */
--text-body: 1rem;    /* 16px - Base text */
--text-small: 0.875rem; /* 14px - Metadata */
```

### Spacing & Layout
```css
--max-width: 1200px;
--gutter: 24px; /* 16px mobile */
--section-padding: 80px; /* 48px tablet, 32px mobile */
--card-spacing: 32px;
--border-radius: 8px; /* cards */
--border-radius-sm: 4px; /* buttons, inputs */
```

### Responsive Breakpoints
```css
--breakpoint-mobile: 576px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1024px;
--breakpoint-xl: 1440px;
```

---

## 🏗️ Site Structure to Build

```
Home Page
├── Hero section (compelling headline + CTA)
├── Quick Access Cards (3: Current Week, All Lectures, AI Assistant)
├── Course Highlights (3-column grid)
├── Course At-a-Glance
└── CTA Footer

Course Overview Page
├── About the Course
├── About Professor Riccardo Bovetti
├── Pedagogical Framework (3 pillars)
├── Learning Objectives
└── AI Manifesto (expandable)

Syllabus & Schedule Page
├── Interactive Timeline (5 sessions)
├── Strategic Agenda Table
├── Assessment Architecture (pie chart)
└── Required Materials

Lectures Hub Page
├── Page header with view options
├── Lecture Cards Grid (2-column desktop, 1 mobile)
│   ├── Course Introduction
│   ├── Lecture 1: Enabling Technologies
│   ├── Lecture 2: Info-Economy & Data Value
│   ├── Lecture 3: Analytics-Driven Strategy
│   ├── Lecture 4: Machine Learning & AI
│   └── Lecture 5: Human Dimension
├── Visual progression connector
└── Progress indicator (optional)

Individual Lecture Page (Template × 7)
├── Hero Section (full-width image + gradient)
├── Lecture Overview Card
├── Table of Contents (sticky sidebar)
├── Main Content Area
│   ├── Section headers with anchors
│   ├── Tables, formulas, callouts
│   ├── Case studies and examples
│   └── Interactive expandable sections
├── Lecture Supplement
│   ├── Key Takeaways Box
│   ├── Discussion Prompts
│   ├── Related Lectures
│   └── Additional Resources
└── Footer Navigation (prev/next)

Resources Page
├── Page header
└── Tabbed Interface
    ├── Tab 1: Lecture Materials (table/grid)
    ├── Tab 2: Recommended Readings
    ├── Tab 3: Tools & Platforms
    ├── Tab 4: F&B Industry Data Sources
    └── Tab 5: Glossary (A-Z)

AI Assistant Page
├── Introduction Panel (collapsible)
├── Chat Interface (iframe/div)
└── Quick Prompts (optional)

Search Functionality
├── Global search bar (header)
└── Results Page
    ├── Refined search input
    ├── Filter options
    └── Result cards with snippets
```

---

## 🔧 Technical Implementation Requirements

### Tech Stack (Recommended)

**Frontend Framework:**
- **Recommended:** Next.js 14+ (React) or Nuxt 3+ (Vue)
- **Why:** SSR for SEO, component reusability, fast performance
- **Alternative:** Vanilla JS with modular approach (simpler, no build step)

**Styling:**
- **Recommended:** Tailwind CSS
- **Why:** Consistency, responsive utilities, maintainability
- **Alternative:** Custom CSS with design tokens

**Search:**
- **Client-side:** Lunr.js or Fuse.js (for static site)
- **Server-side:** Algolia or Meilisearch (for advanced features)

**Internationalization:**
- **React:** next-i18next
- **Vue:** vue-i18n
- **Translation files:** JSON format

**Analytics:**
- Google Analytics 4 or Plausible (privacy-focused)

---

### Performance Targets (MANDATORY)

Run Lighthouse audit and achieve:
- **Performance:** >90
- **Accessibility:** >95
- **Best Practices:** >90
- **SEO:** >95

**Key Metrics:**
- Load Time: <3 seconds on 3G
- First Contentful Paint: <1.5 seconds
- Time to Interactive: <4 seconds

**Optimization Strategies:**
- Image optimization (WebP with fallback)
- Code splitting (load only necessary JS per page)
- Minification of CSS/JS
- Critical CSS inlining
- Lazy loading images below fold

---

### Accessibility Requirements (MANDATORY)

**WCAG 2.1 Level AA Compliance:**

✅ **Perceivable:**
- Alt text for all images
- Sufficient color contrast (4.5:1 for normal text)
- Captions for any video content

✅ **Operable:**
- Full keyboard navigation (Tab, Enter, Arrow keys)
- Focus indicators visible
- No flashing content >3 times/second
- Skip navigation links

✅ **Understandable:**
- Language of page identified in HTML
- Consistent navigation across pages
- Form labels and error messages

✅ **Robust:**
- Valid semantic HTML5
- ARIA labels where needed
- Compatible with screen readers (test with NVDA/JAWS)

---

### SEO Implementation (MANDATORY)

**Every Page Must Include:**
- Unique `<title>` tag (60-70 characters)
- Meta description (150-160 characters)
- Open Graph tags (og:title, og:description, og:image)
- Canonical URL
- Structured data (Schema.org for Course)

**Example for Lecture Page:**
```html
<title>Lecture 1: Enabling Technologies | AI & Data Transformation</title>
<meta name="description" content="Explore the four eras of automation, the Productivity Paradox, and enabling technologies like Cloud, IoT, and Robotics in F&B.">
<meta property="og:title" content="Lecture 1: Enabling Technologies">
<meta property="og:image" content="/assets/images/lectures/lecture1.png">
<link rel="canonical" href="https://[domain]/lectures/lecture-1">
```

**Additional:**
- Generate sitemap.xml
- Configure robots.txt
- Implement breadcrumb structured data
- Use descriptive URLs (/lectures/enabling-technologies, not /page?id=1)

---

## 🎯 Priority Features to Implement

### 1. Intelligent Search System (HIGH PRIORITY)

**Requirements:**
- Full-text search across all lecture content
- Real-time suggestions (as-you-type)
- Fuzzy matching for typos
- Synonym support (ML = Machine Learning, AI = Artificial Intelligence)
- Contextual results with snippets
- Direct links to relevant sections within pages

**Implementation:**
1. Index all content during build (titles, headings, body text, keywords)
2. Weight results: Titles > Headings > Body text
3. Highlight search terms in results
4. Show source (which lecture/page)
5. "No results" state with helpful suggestions

**Tech:**
- Client-side: Lunr.js (lighter) or Fuse.js (more features)
- Server-side: Algolia (premium but powerful)

---

### 2. AI Assistant Integration (HIGH PRIORITY)

**Requirements:**
- Embed external AI platform via iframe or div
- Seamless visual integration (match site styling)
- Introduction panel explaining how to use
- Quick prompt suggestions
- Clear indication of external service

**Implementation:**
1. Create dedicated `/ai-assistant` page
2. Add collapsible intro panel with usage tips
3. Embed iframe with provided URL (to be supplied by client)
4. Style iframe container to match site design
5. Add "Open AI Assistant" links throughout site (lecture pages, search no-results)

**⚠️ IMPORTANT:** AI Assistant URL will be provided by client. Leave placeholder for now.

---

### 3. Responsive Navigation (HIGH PRIORITY)

**Desktop (≥1024px):**
```
[LOGO/TITLE] | Course Overview | Lectures | Resources | AI Assistant | [SEARCH] | [IT/EN]
```

**Mobile (<1024px):**
- Hamburger menu (☰)
- Priority order: Lectures, Course Overview, Resources, AI Assistant, Search, Language

**Features:**
- Sticky header on scroll
- Active page indicator
- Smooth scroll to sections
- Breadcrumbs on deep pages

---

### 4. Dynamic Content Features (MEDIUM PRIORITY)

**"Current Week" Indicator:**
- Highlight current lecture based on course calendar
- Show in Quick Access Card on home page
- Update automatically based on date

**Progress Tracking (Optional - Phase 2):**
- If user accounts implemented later
- Checkmarks on completed lectures
- "Resume" button on partially viewed

**Language Toggle:**
- Persist user preference (localStorage or cookie)
- Switch UI elements and translated pages
- URL structure: `/en/...` or `?lang=en`

---

## 📝 Content Integration Instructions

### Lecture Content Format

Each lecture page uses this content structure:

```yaml
---
lectureNumber: 1
title: "AI & Data Transformation in F&B: Enabling Technologies"
shortTitle: "Enabling Technologies"
sessionDate: "2026-02-16"
sessionTime: "AM"
duration: "3 hours"
image: "/assets/images/lectures/lecture1.png"
pdfFile: "/assets/pdfs/Lecture1(ESCP-PR-260123-RB02_0200).pdf"
keywords: ["Automation", "Productivity Paradox", "Cloud", "IoT"]
objectives:
  - "Understand four eras of automation"
  - "Analyze Productivity Paradox"
relatedLectures: [2, 4]
---

[Markdown content here]
```

### Content Sources

**Full Content Available From:**
1. **Google Drive Documents** (7 documents)
   - Already analyzed and structured in `LECTURES_METADATA.md`
   - Extract full text following structure in `content_course-introduction.md`

2. **Metadata Reference:**
   - Use `LECTURES_METADATA.md` for frontmatter, keywords, objectives

3. **Formatting Example:**
   - Follow `content_course-introduction.md` for markdown structure

### Content Processing Steps

1. **Extract:** Get full text from Google Drive documents
2. **Structure:** Apply hierarchical headings (H2, H3, H4)
3. **Format:** Convert to markdown (tables, lists, formulas)
4. **Enhance:** Add callout boxes for key concepts
5. **Link:** Cross-reference related lectures
6. **Index:** Add to search index with keywords

---

## 🧪 Testing Checklist (MANDATORY BEFORE LAUNCH)

### Functional Testing

**Navigation:**
- [ ] All menu items link correctly
- [ ] Breadcrumbs display accurate path
- [ ] Previous/Next lecture navigation works
- [ ] Language toggle switches content
- [ ] Smooth scrolling to anchor links

**Content:**
- [ ] All 7 lecture pages display without errors
- [ ] Images load with alt text
- [ ] PDFs download successfully (test all 7)
- [ ] External links open in new tab
- [ ] Formulas render properly (if using MathJax/KaTeX)
- [ ] Tables are readable and responsive

**Search:**
- [ ] Returns accurate results
- [ ] Filters work correctly
- [ ] Handles typos (fuzzy matching)
- [ ] "No results" state displays
- [ ] Links to correct sections

**Interactive:**
- [ ] AI Assistant iframe loads
- [ ] Accordions expand/collapse
- [ ] Tabs switch content
- [ ] Hover states trigger

---

### Cross-Browser Testing

**Test On:**
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Mobile Chrome (Android)

**Devices:**
- Desktop (1920×1080, 1366×768)
- Tablet (iPad 768×1024)
- Mobile (iPhone 375×667, Android 360×640)

---

### Lighthouse Audits

Run on at least 3 pages (Home, Lecture page, Search):
- [ ] Performance >90
- [ ] Accessibility >95
- [ ] Best Practices >90
- [ ] SEO >95

**If scores are low:**
- Check image optimization
- Review lazy loading implementation
- Validate HTML
- Check ARIA labels

---

### Accessibility Testing

**Automated:**
- [ ] Run WAVE extension (no errors)
- [ ] Run axe DevTools (no violations)

**Manual:**
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Focus indicators visible
- [ ] Test with screen reader (NVDA on Windows or VoiceOver on Mac)
- [ ] Color contrast meets 4.5:1 (use Contrast Checker)
- [ ] All images have meaningful alt text
- [ ] Heading hierarchy correct (no skipped levels)

---

## 🚀 Development Workflow

### Phase 1: Foundation (Week 1-2)
1. Set up project (Next.js/Nuxt or vanilla)
2. Implement design system (colors, typography, spacing)
3. Build reusable components (Header, Footer, Card, Button)
4. Create page templates (Home, Lecture, Resources)
5. Implement responsive grid and navigation

**Milestone:** Stakeholder review of design and structure

---

### Phase 2: Content Integration (Week 3-4)
1. Extract and format all 7 lecture contents
2. Implement lecture page template with TOC
3. Build Lectures Hub with grid
4. Create Course Overview page
5. Create Syllabus & Schedule page
6. Add all PDFs and images

**Milestone:** Content review with Professor Bovetti

---

### Phase 3: Interactive Features (Week 5)
1. Implement search functionality (index + UI)
2. Integrate AI Assistant iframe
3. Add smooth scrolling and animations
4. Build expandable sections and tabs
5. Implement language toggle
6. Add "Current Week" dynamic indicator

**Milestone:** Feature testing and UX review

---

### Phase 4: Polish & Optimization (Week 6)
1. Optimize images (WebP conversion, compression)
2. Implement lazy loading
3. Add SEO metadata to all pages
4. Generate sitemap.xml
5. Run accessibility audit and fix issues
6. Cross-browser testing
7. Performance optimization (code splitting, minification)
8. Integrate analytics

**Milestone:** Pre-launch QA

---

## 📋 Deliverables Checklist

Before considering the project complete, ensure:

**Code:**
- [ ] Clean, commented code
- [ ] Modular component structure
- [ ] Git repository with meaningful commits
- [ ] README.md with setup instructions

**Functionality:**
- [ ] All 8 pages fully functional
- [ ] Search working across all content
- [ ] AI Assistant iframe integrated
- [ ] Language toggle operational (IT/EN for UI)
- [ ] All PDFs downloadable
- [ ] All images optimized and loading

**Quality:**
- [ ] Lighthouse scores >90 (all metrics)
- [ ] WCAG 2.1 AA compliant (WAVE audit clean)
- [ ] Cross-browser compatible (6 browsers tested)
- [ ] Responsive on all breakpoints (mobile, tablet, desktop)
- [ ] No console errors

**Documentation:**
- [ ] Content update guide (how to add/edit lectures)
- [ ] Style guide (design tokens reference)
- [ ] Deployment instructions
- [ ] Analytics setup documentation

---

## ❓ Questions or Clarifications

**If You Need:**
- **AI Assistant URL:** Contact client (Prof. Bovetti) - placeholder for now
- **Full Google Drive Documents:** See `LECTURES_METADATA.md` for structure, extract from source
- **Additional Content Translations:** Currently EN primary, IT for UI elements only
- **Specific Branding Elements:** Follow `WEBSITE_SPECIFICATION.md` design system
- **Hosting/Deployment Details:** To be provided by client

**When in Doubt:**
- Refer to `WEBSITE_SPECIFICATION.md` (comprehensive answers)
- Follow example in `content_course-introduction.md`
- Prioritize accessibility and performance
- Keep it clean and maintainable

---

## 🎓 Success Criteria

This project is successful when:

1. **Students Can Easily Find Content:** Intuitive navigation + powerful search
2. **Site Reflects Innovation:** Modern design showcases "new generation" teaching
3. **Performance is Excellent:** Fast load times on all devices
4. **Accessibility is Perfect:** Every student can access content
5. **Professor is Proud:** Site becomes showcase piece for his course

**Remember:** This isn't just a website. It's a learning companion that should inspire students and reflect the cutting-edge nature of AI & Data Transformation.

---

## 📞 Final Notes

- **Timeline:** 6 weeks to launch (aggressive but achievable)
- **Priority:** Mobile-first, accessibility, performance
- **Philosophy:** Content-first, student-centric, tech-forward
- **Standards:** Clean code, thorough testing, excellent documentation

**You have everything you need to build an exceptional course website. Good luck! 🚀**

---

**Document Created:** February 8, 2026
**For:** AI & Data Transformation Course Website Development
**Prepared by:** Claude (Specification Phase)
**Ready for:** Coding Agent Implementation
