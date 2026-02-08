# AI & Data Transformation Course Website
## Complete Project Documentation

**Course:** AI & Data Transformation in Food & Beverage
**Institution:** ESCP Business School
**Professor:** Riccardo Bovetti
**Project Phase:** Specification Complete ✅ → Ready for Development

---

## 📂 Project Files Overview

### For Coding Agent (Start Here)

1. **`CODING_AGENT_BRIEF.md`** ⭐ **START HERE**
   - Complete development instructions
   - Asset inventory and locations
   - Technical requirements and priorities
   - Testing checklists
   - 6-week implementation roadmap
   - **Read this first before beginning development**

2. **`WEBSITE_SPECIFICATION.md`** 📘 **MAIN REFERENCE**
   - 100+ pages comprehensive blueprint
   - 14 chapters covering every aspect
   - Design system, page specs, technical details
   - **The authoritative source for all decisions**

3. **`LECTURES_METADATA.md`** 📊 **CONTENT STRUCTURE**
   - Metadata for all 7 lectures
   - Frontmatter templates
   - Keyword taxonomy (100+ terms)
   - Content outlines and asset mappings

4. **`content_course-introduction.md`** 📝 **FORMATTING EXAMPLE**
   - Fully formatted lecture example
   - Shows proper markdown structure
   - Template for remaining lectures

---

### For Stakeholders (Overview)

5. **`PROJECT_SUMMARY.md`** 📄 **EXECUTIVE SUMMARY**
   - Project overview and deliverables
   - Key features and characteristics
   - Data sources and references
   - Next steps and recommendations

6. **`README.md`** 📖 **THIS FILE**
   - Quick navigation guide
   - File descriptions and purposes

---

## 🖼️ Asset Locations

### Images (PNG)
**Path:** `/sessions/gracious-kind-keller/mnt/AIBD2026/BaseDocumenti/`

```
Intro.png          → Course Introduction hero (6.5 MB)
lecture1.png       → Lecture 1 hero (6.7 MB)
Lecture2.png       → Lecture 2 hero (6.2 MB) ⚠️ Note: capital L
lecture3.png       → Lecture 3 hero (6.7 MB)
lecture4.png       → Lecture 4 hero (6.5 MB)
lecture5.png       → Lecture 5 hero (6.2 MB)
```

### PDFs (Downloadable Materials)
**Path:** `/sessions/gracious-kind-keller/mnt/AIBD2026/BaseDocumenti/`

```
CourseIntro(ESCP-PR-260123-RB01_0100).pdf                (753 KB)
Lecture1(ESCP-PR-260123-RB02_0200).pdf                   (4.3 MB)
Lecture2(ESCP-PR-260123-RB03_0200).pdf                   (4.5 MB)
Lecture3(ESCP-PR-260123-RB04_0200).pdf                   (1.6 MB)
Lecture3(ESCP-PR-260123-RB04_0200)_APPENDIX.pdf         (16.1 MB) ⚠️ Large
Lecture4(ESCP-PR-260123-RB05_0100).pdf                   (4.2 MB)
Lecture5(ESCP-PR-260123-RB06_0100).pdf                   (829 KB)
```

---

## 🎯 Quick Start for Developers

### Step 1: Read Documentation (1-2 hours)
1. Start with **`CODING_AGENT_BRIEF.md`** for overview and instructions
2. Review **`WEBSITE_SPECIFICATION.md`** Sections 1-6 for design and technical details
3. Check **`LECTURES_METADATA.md`** for content structure
4. Examine **`content_course-introduction.md`** for formatting example

### Step 2: Set Up Environment (30 minutes)
1. Choose tech stack (recommended: Next.js + Tailwind)
2. Initialize project with design tokens from specification
3. Set up folder structure as documented
4. Configure i18n for bilingual support (IT/EN)

### Step 3: Build Foundation (Week 1-2)
1. Implement design system (colors, typography, spacing)
2. Create reusable components (Header, Footer, Card, Button)
3. Build page templates (Home, Lecture, Resources)
4. Implement responsive navigation

### Step 4: Integrate Content (Week 3-4)
1. Extract lecture content from Google Drive sources
2. Format following `content_course-introduction.md` example
3. Implement lecture page template with TOC
4. Add all images and PDFs

### Step 5: Add Interactivity (Week 5)
1. Implement intelligent search (Lunr.js or Algolia)
2. Integrate AI Assistant iframe (URL TBD)
3. Add smooth scrolling and animations
4. Implement language toggle

### Step 6: Polish & Launch (Week 6)
1. Optimize images (WebP conversion, compression)
2. Run accessibility audit (WCAG AA compliance)
3. Test cross-browser and mobile
4. Achieve Lighthouse scores >90
5. Deploy and monitor

---

## 📊 Project Scope

### Site Structure (8 Main Pages)
1. **Home** - Hero, Quick Access, Course Highlights
2. **Course Overview** - About course, professor, methodology
3. **Syllabus & Schedule** - Timeline, assessment, materials
4. **Lectures Hub** - Grid of all 7 lectures
5. **Individual Lecture Pages** (×7) - Full content, TOC, resources
6. **Resources** - PDFs, readings, tools, glossary
7. **AI Assistant** - Embedded external platform
8. **Search** - Intelligent full-text search

### Key Features
- ✅ Intelligent search with fuzzy matching and synonyms
- ✅ AI Assistant integration (iframe/div)
- ✅ Bilingual support (IT/EN)
- ✅ Responsive design (mobile-first)
- ✅ WCAG 2.1 AA accessibility
- ✅ Lighthouse scores >90
- ✅ Dynamic navigation with breadcrumbs
- ✅ Interactive elements (accordions, tabs, smooth scroll)

### Content Coverage
- **7 Lectures:**
  - Course Introduction: Productivity Paradox to Autonomous Agents
  - Lecture 1: Enabling Technologies
  - Lecture 2: Info-Economy & Data Value Model
  - Lecture 3: Analytics-Driven Strategy & Vision Simulation
  - Lecture 4: Machine Learning & AI for Business
  - Lecture 5: Human Dimension of Big Data & Analytics
- **Course Materials:** Syllabus, assessment details, AI Manifesto
- **Resources:** PDFs, readings, tools, glossary

---

## 🎨 Design Highlights

### Visual Identity
- **Color Palette:** Deep navy (#1a1a2e) + Electric blue (#00adb5) + Clean white
- **Typography:** Inter (primary), JetBrains Mono (code)
- **Style:** Content-first, modular cards, minimal navigation
- **Inspiration:** rbovetti.com (clean, accessible, bilingual)

### Responsive Breakpoints
- Mobile: <576px
- Tablet: 768px - 1023px
- Desktop: ≥1024px
- XL: ≥1440px

### Accessibility
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation
- Screen reader compatible
- Color contrast 4.5:1
- Focus indicators

---

## ✅ Quality Standards

### Performance Targets (Lighthouse)
- **Performance:** >90
- **Accessibility:** >95
- **Best Practices:** >90
- **SEO:** >95

### Load Time Goals
- <3 seconds on 3G connection
- <1.5 seconds First Contentful Paint
- <4 seconds Time to Interactive

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Mobile Chrome (Android)

---

## 📞 Contact & Questions

### For Development Clarifications
**Primary Reference:** `WEBSITE_SPECIFICATION.md` (answers 99% of questions)

**If Still Unclear:**
- Check `LECTURES_METADATA.md` for content structure
- Review `content_course-introduction.md` for formatting
- See `CODING_AGENT_BRIEF.md` for implementation guidance

### Outstanding Items (Client to Provide)
- [ ] AI Assistant external platform URL
- [ ] Hosting/deployment details
- [ ] Domain name
- [ ] Analytics tracking ID
- [ ] Full Italian translations (if needed beyond UI elements)

---

## 🚀 Timeline

**Total Duration:** 6 weeks

- **Week 1-2:** Foundation & Core Structure
- **Week 3-4:** Content Integration
- **Week 5:** Interactive Features
- **Week 6:** Polish & Optimization
- **Week 7+:** Launch & Iteration

**Target Launch:** 6 weeks from kickoff

---

## 📈 Success Metrics

The website is successful when:

1. ✅ **Students find content easily** (intuitive navigation + search)
2. ✅ **Site showcases innovation** (modern design, AI integration)
3. ✅ **Performance is excellent** (Lighthouse >90, fast load)
4. ✅ **Accessibility is perfect** (WCAG AA, works for everyone)
5. ✅ **Professor is proud** (becomes showcase for his course)

---

## 📚 Additional Resources

### Source Documents (Google Drive)
**Folder ID:** 1J8gV6g5AfYf0vpAVe5DfSSy_L8x86pfN

1. Course Syllabus
2. Course Introduction
3. Lecture 1: Enabling Technologies
4. Lecture 2: Info-Economy & Data Value Model
5. Lecture 3: Analytics-Driven Strategy
6. Lecture 4: Machine Learning & AI
7. Lecture 5: Human Dimension of BD&A

### Design Reference
**Analyzed:** rbovetti.com (content-first, bilingual, modular approach)

---

## 🎓 Project Philosophy

**Content-First:** Information hierarchy drives all design decisions
**Student-Centric:** Every feature serves the learner's needs
**Tech-Forward:** Modern, innovative, cutting-edge
**Accessible:** Inclusive design for all students
**Performant:** Fast, responsive, optimized
**Maintainable:** Clean code, clear documentation

---

**This project represents the intersection of academic excellence and digital innovation. Build something students will love to use and professors will be proud to showcase.**

**Ready to build? Start with `CODING_AGENT_BRIEF.md` and let's create something exceptional! 🚀**

---

**Project Status:** ✅ Specification Complete | 🔨 Ready for Development
**Last Updated:** February 8, 2026
**Prepared by:** Claude (Cowork Mode)
