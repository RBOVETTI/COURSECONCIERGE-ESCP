# AI & Data Transformation Course Website
## Complete Design Blueprint & Technical Specification
### ESCP Master in Food & Beverage Administration

**Professor:** Riccardo Bovetti
**Course:** AI & Data Transformation in Food & Beverage
**Version:** 1.0
**Date:** February 8, 2026

---

## 1. EXECUTIVE SUMMARY & PROJECT VISION

### 1.1 Strategic Objectives
This website serves as the digital "concierge" for the AI & Data Transformation course at ESCP Business School, establishing Professor Riccardo Bovetti as a "new generation" professor through a cutting-edge, student-centric digital learning hub. The site combines rigorous academic content organization with innovative interactive features to create a "WOW" experience that reflects the forward-thinking nature of both the subject matter and the teaching approach.

### 1.2 Core Value Proposition
- **For Students:** A centralized, intelligently organized hub providing seamless access to all course materials, enhanced by interactive elements and smart search capabilities
- **For the Professor:** A powerful branding vehicle showcasing pedagogical innovation and technical sophistication
- **For the Institution:** A demonstration of cutting-edge digital education delivery

### 1.3 Success Metrics
- Student engagement (time on site, materials accessed)
- Search effectiveness (queries resolved)
- AI Assistant utilization rate
- Mobile responsiveness and accessibility scores
- Student satisfaction and feedback

---

## 2. DESIGN PHILOSOPHY & VISUAL IDENTITY

### 2.1 Design Principles (inspired by rbovetti.com)
1. **Content-First Architecture:** Information hierarchy drives design decisions, not decorative elements
2. **Accessibility-Conscious:** Semantic HTML, clear contrast, keyboard navigation
3. **Modular & Scalable:** Card-based system allowing easy expansion
4. **Bilingual Native:** Italian/English toggle integrated at core level
5. **Tech-Forward Aesthetic:** Clean, modern, minimalist interface reflecting AI/Data themes
6. **Progressive Disclosure:** Information revealed contextually to prevent cognitive overload

### 2.2 Visual Style Guidelines

#### Typography
- **Primary Font:** Inter or similar sans-serif (modern, clean, highly legible)
- **Secondary Font:** JetBrains Mono or similar monospace for code/technical elements
- **Scale:**
  - H1: 2.5rem (40px) - Page titles
  - H2: 2rem (32px) - Section headers
  - H3: 1.5rem (24px) - Subsection headers
  - H4: 1.25rem (20px) - Card titles
  - Body: 1rem (16px) - Base text
  - Small: 0.875rem (14px) - Metadata, captions

#### Color Palette
- **Primary (Brand):** Deep navy/charcoal (#1a1a2e) - Headers, nav
- **Accent (Tech):** Electric blue (#00adb5) - Interactive elements, CTAs
- **Background:** Clean white (#ffffff) with subtle off-white sections (#f8f9fa)
- **Text:** Dark gray (#2d3436) for body, black (#000000) for headers
- **Success:** Green (#00b894) for completed elements
- **Warning:** Amber (#fdcb6e) for important notices
- **Error/Emphasis:** Coral red (#ff7675) for alerts

#### Spacing & Layout
- **Grid System:** 12-column responsive grid
- **Max Content Width:** 1200px (ensures optimal reading line length)
- **Gutter:** 24px (desktop), 16px (mobile)
- **Section Padding:** 80px vertical (desktop), 48px (tablet), 32px (mobile)
- **Card Spacing:** 32px between cards
- **Border Radius:** 8px (cards), 4px (buttons, inputs)

#### Visual Elements
- **Shadows:** Subtle elevation (0 2px 8px rgba(0,0,0,0.08))
- **Hover States:** Smooth transitions (0.3s ease), subtle lift effect
- **Icons:** Lucide React or Feather Icons (consistent, minimal)
- **Images:** Full-bleed hero images for lectures, aspect ratio 16:9 or 21:9
- **Dividers:** Minimal use, 1px solid lines with low opacity when needed

### 2.3 Responsive Breakpoints
- **Desktop:** ≥ 1024px (full layout, side navigation possible)
- **Tablet:** 768px - 1023px (condensed layout, hamburger menu)
- **Mobile:** < 768px (stacked layout, priority content first)

---

## 3. INFORMATION ARCHITECTURE & SITE STRUCTURE

### 3.1 Site Map

```
HOME (Landing)
│
├── COURSE OVERVIEW
│   ├── About the Course
│   ├── About the Professor
│   ├── Learning Methodology
│   └── Assessment & Evaluation
│
├── SYLLABUS & SCHEDULE
│   ├── Course Calendar (chronological view)
│   ├── Learning Objectives
│   ├── Required Materials
│   └── AI Manifesto
│
├── LECTURES (Core Hub)
│   ├── Course Introduction
│   ├── Lecture 1: Enabling Technologies
│   ├── Lecture 2: Info-Economy & Data Value
│   ├── Lecture 3: Analytics-Driven Strategy
│   ├── Lecture 4: Machine Learning & AI
│   └── Lecture 5: Human Dimension of BD&A
│
├── RESOURCES
│   ├── Downloadable PDFs (all lectures)
│   ├── Recommended Readings
│   ├── Tools & Platforms
│   └── Useful Links
│
├── AI ASSISTANT (embedded)
│   └── [External URL integration via iframe/div]
│
└── SEARCH
    └── Intelligent search across all content
```

### 3.2 Navigation Structure

#### Primary Navigation (Desktop Header)
```
[LOGO/COURSE TITLE] | Course Overview | Lectures | Resources | AI Assistant | [SEARCH ICON] | [IT/EN]
```

#### Mobile Navigation (Hamburger Menu)
Priority order:
1. Lectures (most accessed)
2. Course Overview
3. Resources
4. AI Assistant
5. Search
6. Language Toggle

#### Breadcrumbs
Display contextual path for deep pages:
```
Home > Lectures > Lecture 3: Analytics-Driven Strategy
```

### 3.3 User Journey Mapping

#### Primary Path (Student First Visit)
1. **Land on Home** → Compelling hero with course value proposition
2. **Read Course Overview** → Understand methodology and approach
3. **Browse Lectures** → Explore chronological content structure
4. **Access Specific Lecture** → View detailed content + download PDF
5. **Use Search** → Find specific topics across all materials
6. **Try AI Assistant** → Get personalized help

#### Secondary Path (Returning Student)
1. **Land on Home** → Quick access card to "Current Week"
2. **Direct to Lecture** → Resume where they left off
3. **Download Materials** → Quick access to PDFs
4. **Search for Topic** → Find specific concept across lectures

---

## 4. DETAILED PAGE SPECIFICATIONS

### 4.1 HOME PAGE

#### Hero Section
**Layout:** Full-width hero with gradient overlay on background image
- **Headline (H1):** "AI & Data Transformation in Food & Beverage"
- **Subheadline:** "ESCP Master in F&B Administration | Prof. Riccardo Bovetti"
- **CTA Button:** "Explore Course Content" → scrolls to Quick Access
- **Visual:** Abstract tech/data visualization background (Intro.png as inspiration)
- **Badge:** "Master-Level Course | 2026"

#### Quick Access Cards (Below Hero)
Three prominent cards for instant navigation:
1. **Current Week**
   - Dynamic display showing current lecture
   - Visual: Thumbnail of lecture image
   - Text: "Week 3 | Lecture 3: Analytics-Driven Strategy"
   - CTA: "Go to Lecture →"

2. **All Lectures**
   - Gateway to lecture hub
   - Visual: Grid icon or stacked cards visual
   - Text: "Browse All Course Content"
   - CTA: "View All Lectures →"

3. **AI Assistant**
   - Direct access to assistant
   - Visual: Chatbot/AI icon
   - Text: "Get Personalized Help"
   - CTA: "Open AI Assistant →"

#### Course Highlights Section
**Layout:** Three-column grid (responsive to single column on mobile)
- **Column 1:** "Learn by Doing"
  - Icon: Interactive simulation symbol
  - Text: Brief description of experiential methodology
  - Feature: HBS simulation, case studies, groupwork

- **Column 2:** "Cutting-Edge Content"
  - Icon: Neural network or circuit board
  - Text: Latest 2026 trends and technologies
  - Feature: From enabling tech to ethical AI

- **Column 3:** "Expert Instruction"
  - Icon: Professor/teaching symbol
  - Text: EY Partner + Academic leader
  - Feature: Real-world consultancy meets theory

#### Course At-a-Glance
**Layout:** Horizontal info cards or timeline
- **Duration:** 5 sessions (Feb-Mar 2026)
- **Format:** Interactive lectures + simulation + exam
- **Focus:** AI/ML, Big Data, Analytics in F&B sector
- **Language:** English & Italian materials available

#### Call-to-Action Footer on Home
**Background:** Accent color block
- **Text:** "Ready to transform your understanding of AI & Data?"
- **CTA:** "View Full Syllabus" or "Start with Lecture 1"

---

### 4.2 COURSE OVERVIEW PAGE

#### About the Course Section
**Content Source:** Course Syllabus document
- **Introduction:** The strategic importance and unique approach (bridging theory and boardroom reality)
- **Key Differentiators:**
  - Practitioner-led (not "ivory tower")
  - F&B sector specialization
  - Value-driven managerial approach

**Layout:** Two-column text with pull quotes highlighting key concepts

#### About Professor Riccardo Bovetti
**Content Source:** Course Syllabus Section 1
- **Professional Photo:** If available, otherwise abstract tech portrait
- **Credentials Table:**
  - Professional Standing: EY Partner
  - Industry Specialization: Consumer Product & Retail
  - Academic Foundation: Adjunct Professor (ESCP, SAA, etc.)
- **The "F***ing Rude" Story:** Presented with context as testament to direct, results-focused style
- **Unique Value Proposition:** Technical expert who mastered management (reverse journey)

**Visual Enhancement:** Timeline or infographic showing career trajectory

#### Pedagogical Framework
**Content Source:** Course Syllabus Section 2
- **Three Pillars Visualization:**
  1. Interactive Lectures (lean delivery + targeted activities)
  2. Experiential Simulation (HBS Data Analytics tool)
  3. Case Study Application (living challenges, not static Harvard cases)

**Layout:** Three cards with icons, expandable for more details

#### Learning Objectives
**What Students Will Master:**
- Navigate the productivity paradox and digital transformation challenges
- Apply machine learning frameworks to F&B business problems
- Execute analytics-driven strategy using modern data ecosystems
- Balance algorithmic decision-making with ethical human oversight
- Lead AI adoption through structured roadmaps and governance models

**Format:** Checklist-style presentation with checkmark icons

#### The AI Manifesto
**Content Source:** Course Syllabus Section 5
**Visual:** Bordered callout box or highlighted card
- **Philosophy:** AI as advisor, not replacement
- **Principles:**
  1. Inviting AI to the Table
  2. Human-in-the-Loop
  3. Persona-Driven Interaction
  4. "Worst AI" Assumption
  5. Academic Integrity Rule

**Interactive Element:** Expandable accordion for each principle with detailed explanation

---

### 4.3 SYLLABUS & SCHEDULE PAGE

#### Course Calendar (Interactive Timeline)
**Content Source:** Course Syllabus Section 3
**Visualization:** Horizontal timeline with nodes for each session

```
Feb 16 (AM) ──→ Feb 16 (PM) ──→ Feb 23 ──→ Mar 9 ──→ Mar 23
   [Node]         [Node]        [Node]     [Node]    [Node]
```

**Each Node Contains:**
- Date
- Phase name (e.g., "Initial Foundations")
- Focus area (e.g., "Digital & BD&A Intro")
- Key topics (expandable)
- Status indicator: "Upcoming" / "Current" / "Completed" (if dynamic)
- Link to corresponding lecture materials

**Mobile View:** Vertical timeline with cards

#### Strategic Agenda Table
**Layout:** Enhanced table with visual hierarchy
| Date | Phase | Focus Area | Key Topics |
|------|-------|------------|------------|
| [Full details from syllabus] |

**Interactivity:** Click row to expand and see lecture details + direct link to lecture page

#### Assessment Architecture
**Content Source:** Course Syllabus Section 4
**Visualization:** Pie chart or weighted bar chart showing:
- Individual Written Exam: 80% (with mandatory 8/20 minimum)
- Group Activities: 10%
- In-Class Discussion: 10%

**Additional Information:**
- Pass/Fail criteria clearly highlighted
- Rationale for structure ("no hiding behind group")
- Exam format and expectations

#### Required Materials & Preparation
**List Format with Download Links:**
- [ ] HBS Data Analytics Simulation access info
- [ ] Recommended pre-reading list
- [ ] Technical prerequisites (if any)
- [ ] Software/tools to install

---

### 4.4 LECTURES HUB PAGE (Core Content)

#### Page Header
- **Title (H1):** "Course Lectures"
- **Subtitle:** "Chronological journey from Digital Transformation to Ethical AI"
- **Filter/View Options:**
  - View: Grid (default) / List / Timeline
  - Sort: Chronological / By topic

#### Lecture Cards (Grid Layout - 2 columns desktop, 1 mobile)

**Each Card Contains:**
1. **Visual:** Full-width hero image (from PNG files: Intro.png, lecture1.png, etc.)
2. **Lecture Number Badge:** "Lecture 1" or "Course Intro"
3. **Title (H3):** Full lecture title
4. **Duration/Session Info:** "Session: Feb 16 AM | Duration: 3 hours"
5. **Short Description:** 2-3 sentence teaser of content (extracted from documents)
6. **Key Topics Tags:** 3-5 keyword tags (e.g., "Automation", "Productivity Paradox", "IoT", "Cloud")
7. **CTA Button:** "View Lecture →"
8. **Download Icon:** Direct link to PDF (opens in new tab)

**Card Hover State:**
- Subtle lift effect (transform: translateY(-4px))
- Shadow deepens
- CTA button color shift

#### Lecture Sequence Visual
**Below cards:** A visual connector showing the learning progression
```
[Intro] → [L1: Tech] → [L2: Data Value] → [L3: Strategy] → [L4: ML/AI] → [L5: Human Dimension]
```

**Interactivity:** Click any node to jump to that lecture

#### Progress Indicator (if dynamic/personalized)
**Optional Feature:** Show student which lectures they've accessed
- Checkmarks on completed lectures
- "Resume" button on partially viewed content

---

### 4.5 INDIVIDUAL LECTURE PAGE (Template)

#### Page Structure (applies to all 7 lecture pages)

**A. Hero Section**
- **Full-width hero image** (lecture-specific PNG)
- **Overlay gradient** for text legibility
- **Content on overlay:**
  - Lecture number badge
  - Full lecture title (H1)
  - Session date and duration
  - **Dual CTA Buttons:**
    - Primary: "Download PDF" (icon + text)
    - Secondary: "Ask AI About This Topic" (opens AI assistant with context)

**B. Lecture Overview Card**
- **Abstract/Introduction:** First paragraph from the Google Doc content
- **Learning Objectives:** Bullet list of what students will master
- **Key Concepts:** Tag cloud or badge list of main topics

**C. Table of Contents (Auto-generated from lecture structure)**
**Format:** Sticky sidebar (desktop) or collapsible dropdown (mobile)
- Numbered list of all H2/H3 sections from content
- Click to jump to section (smooth scroll)
- Active section highlighted as user scrolls

Example for Lecture 1:
```
1. The Age of the Exponential
2. The Productivity Paradox
3. Infrastructure and Connectivity
4. Physical Innovation
5. Enhanced Perception: AR
6. The Intelligence Layer
7. Navigating the Human-AI Paradox
```

**D. Main Content Area**
**Layout:** Single column, max-width 800px for optimal reading

**Content Presentation Guidelines:**
- **Section Headers (H2):** From document structure, numbered
- **Subsection Headers (H3):** From document structure
- **Body Text:** Preserve paragraph structure from source
- **Tables:** Styled responsive tables (scroll horizontal on mobile if needed)
- **Formulas:** Render mathematical notation properly (KaTeX or MathJax)
- **Quotes/Callouts:** Highlighted boxes for key concepts (e.g., "The Strategic So What?")
- **Examples/Case Studies:** Distinct visual treatment (bordered cards with light background)

**Special Content Elements:**

1. **Data/Statistics Highlights**
   - Visual callout boxes for key numbers
   - Example: "790% increase in ML interest since 2013"
   - Icon + large number + context

2. **Definition Boxes**
   - Glossary-style highlights for technical terms
   - Hover or click to expand full definition
   - Example: "Productivity = Output / Input"

3. **Company Case Studies**
   - Cards highlighting industry examples
   - Example: "Coca-Cola: Predictive Analytics for Demand Forecasting"
   - Logo (if available) + company name + use case + outcome

4. **Comparison Tables**
   - Structured tables from documents (e.g., Era 1 vs Era 2 automation)
   - Enhanced with subtle color coding for easier scanning

5. **Process Flows/Diagrams**
   - Visual representation of concepts like "Data → Information → Knowledge → Decision"
   - Use icons and arrows for clarity

**E. Interactive Elements (Within Content)**

1. **Expandable Sections**
   - For dense technical content or optional deep-dives
   - Accordion-style: click header to expand/collapse
   - Example: Detailed algorithm explanations

2. **Hover Definitions**
   - Technical terms underlined with dotted line
   - Hover to see tooltip with definition
   - Click to go to glossary (if implemented)

3. **Inline Questions/Reflections**
   - Callout boxes posing strategic questions from the content
   - Example: "Are you reimagining your value chain, or simply layering software over a 19th-century process?"
   - Purpose: Prompt critical thinking

**F. Lecture Supplement Section**

**Key Takeaways Box**
- Synthesized 5-7 bullet points of core learnings
- Visually distinct (accent color background)
- "What you should remember from this lecture"

**Discussion Prompts** (if applicable)
- Questions for group discussion or reflection
- Example: "How does the Productivity Paradox apply to your organization?"

**Related Lectures**
- Links to previous/next lecture
- Cross-references to other relevant lectures
- Example: "Also see Lecture 4 for ML algorithmic details"

**Additional Resources**
- Links to cited sources or recommended readings
- External articles, videos, tools mentioned in lecture
- Properly attributed with publication info

**G. Footer Section**

**Navigation:**
- Previous Lecture ← | Back to All Lectures | → Next Lecture
- Large, obvious buttons for easy navigation

**Feedback Prompt:**
- "Was this lecture helpful?" with simple rating mechanism (optional, if dynamic)

---

### 4.6 RESOURCES PAGE

#### Page Structure

**A. Page Header**
- Title: "Course Resources"
- Description: "Downloadable materials, tools, and curated links to deepen your understanding"

**B. Resource Categories (Tabbed or Accordion Interface)**

**Tab 1: Lecture Materials**
- Table or card grid of all PDFs
- Columns: Lecture Name | Type | File Size | Last Updated | Download Link
- Filter: By lecture number or topic
- Bulk download option: "Download All Lectures (ZIP)"

**Tab 2: Recommended Readings**
- Curated list of books, articles, papers
- Each entry:
  - Title & Author
  - Brief description (why it's relevant)
  - External link (if available online)
  - Tags: Which lecture(s) it relates to

Example entries might include:
- Davenport & Harris: "Competing on Analytics"
- Floridi: "The Fourth Revolution"
- HBS Case: "Vision Analytics Simulation"

**Tab 3: Tools & Platforms**
- List of software, platforms, websites mentioned in course
- Each entry:
  - Tool name & logo
  - Description
  - Relevant lecture
  - Link to tool website
  - Access info (free, subscription, student license)

Examples:
- HBS Simulations
- Cloud platforms (AWS, Azure, GCP)
- Data analysis tools (Tableau, Power BI, Python libraries)
- AI/ML platforms

**Tab 4: F&B Industry Data Sources**
- Curated links to industry-specific datasets and research
- Nielsen, IRI, Euromonitor, etc.
- Market research reports
- Case study repositories

**Tab 5: Glossary**
- Comprehensive A-Z glossary of technical terms
- Each term:
  - Definition
  - Related lecture(s)
  - See also: related terms

**Search Functionality:**
- Search bar at top of resources page
- Filter across all resource types
- Instant results highlighting

---

### 4.7 AI ASSISTANT PAGE

#### Integration Approach
**Technical Implementation:**
- External AI platform accessed via unique URL
- Embedded in site using iframe or dedicated div
- Seamless visual integration (maintains site header/navigation)

**Layout:**

**A. Introduction Panel (Collapsible)**
- **Heading:** "Your AI Course Assistant"
- **Welcome Message:**
  - "Ask questions about any course topic"
  - "Get clarification on complex concepts"
  - "Explore connections between lectures"
- **Usage Tips:**
  - How to phrase questions effectively
  - What the assistant can and cannot do
  - Privacy/data handling notice
- **CTA:** "Start Conversation" (collapses intro panel, focuses on chat)

**B. Chat Interface**
- **Full-height iframe/div** containing external AI assistant
- **Visual consistency:**
  - Assistant UI styled to match site colors (if customizable)
  - Or: minimal styling to avoid visual clash

**C. Quick Prompts (Optional Pre-Chat)**
- Suggested starting questions as clickable buttons:
  - "Explain the Productivity Paradox"
  - "How does K-Means clustering work?"
  - "What are the ethical implications of AI in F&B?"
  - "Compare supervised vs unsupervised learning"

**D. Context Awareness (If supported by AI platform)**
- Assistant pre-loaded with course context
- Knows lecture content and structure
- Can reference specific sections and provide links back to lecture pages

---

### 4.8 SEARCH PAGE / FUNCTIONALITY

#### Search Interface

**A. Search Bar (Global - in header)**
- **Placement:** Top right of navigation bar
- **Icon:** Magnifying glass
- **Behavior:** Click expands to full search bar overlay or dropdown
- **Placeholder:** "Search lectures, topics, concepts..."

**B. Search Results Page**

**Layout when results displayed:**

**Search Input Area:**
- Large search bar (user can refine search)
- Filter options:
  - [ ] Lectures
  - [ ] Resources
  - [ ] All content
- Sort by: Relevance / Lecture Order

**Results Display:**

Each result card shows:
1. **Content Type Badge:** "Lecture 3" or "Resource" or "Syllabus"
2. **Result Title:** Heading where match was found
3. **Snippet:** 2-3 lines of context showing search term highlighted
4. **Lecture/Source:** Which lecture or page it's from
5. **CTA:** "View in context →" (links to specific section of page)

**No Results State:**
- Friendly message: "No results found for '{search term}'"
- Suggestions:
  - Try different keywords
  - Browse all lectures
  - Ask the AI Assistant
- CTA: "Explore Course Content" or "Open AI Assistant"

**Search Intelligence Features:**

1. **Auto-complete / Suggestions**
   - As user types, suggest common terms
   - Show recent searches

2. **Synonym Matching**
   - Search for "ML" also returns "Machine Learning"
   - Search for "AI" includes "Artificial Intelligence"

3. **Fuzzy Matching**
   - Handle typos gracefully
   - "algoritm" suggests "algorithm"

4. **Keyword Tagging**
   - Each lecture pre-tagged with key terms
   - Improves search accuracy

5. **Related Topics**
   - After showing results, suggest: "You might also be interested in: [topic]"

---

## 5. INTERACTIVE FEATURES & FUNCTIONALITY

### 5.1 Intelligent Search System

**Core Requirements:**
- Full-text search across all lecture content
- Keyword/tag-based search
- Real-time results (as-you-type suggestions)
- Contextual results with snippets
- Link directly to relevant section within lecture page
- Search history (optional, if personalized)

**Technical Implementation:**
- Client-side: Lunr.js or Fuse.js for lightweight search
- Or server-side: Elasticsearch, Algolia for advanced features
- Index includes: Lecture titles, headings, body text, keywords, PDF metadata

**Search Enhancements:**
- Synonym mapping
- Fuzzy matching for typos
- Weight results by relevance (titles > headings > body text)
- Filter by lecture number or topic area

### 5.2 AI Assistant Integration

**Integration Method:**
- Iframe embedding of external AI platform URL
- Or: Embedded div if platform provides widget/SDK
- Authentication/access control (if needed for students only)

**Context Provision:**
- Pre-load AI with course syllabus and lecture summaries
- Enable AI to link back to specific lecture sections
- Train/configure AI on course-specific terminology

**User Experience:**
- Seamless visual integration (match site styling)
- Clear indication when user is interacting with external service
- Privacy notice regarding data shared with AI platform

### 5.3 Responsive & Adaptive Elements

**Dynamic Content:**
- "Current Week" indicator (updates based on course calendar)
- Progress tracking (if user accounts implemented)
- "Recently Viewed" lectures

**Personalization (Optional/Phase 2):**
- Bookmarking favorite sections
- Personal notes on lecture pages
- Custom learning path based on interests

### 5.4 Accessibility Features

**Required for Inclusive Design:**
- Keyboard navigation for all interactive elements
- ARIA labels for screen readers
- Alt text for all images
- Sufficient color contrast (WCAG AA minimum)
- Focus indicators on interactive elements
- Skip navigation links
- Resizable text without breaking layout
- Captions/transcripts for any video content (future)

### 5.5 Progressive Enhancement

**Core Content First:**
- Site fully functional without JavaScript
- JavaScript enhances with smooth scrolls, animations, dynamic search
- Graceful degradation for older browsers

**Performance Optimization:**
- Lazy loading for images below fold
- Minified CSS/JS
- Compressed images (WebP with JPG fallback)
- Critical CSS inlined
- Deferred loading of non-critical resources

---

## 6. TECHNICAL SPECIFICATIONS

### 6.1 Technology Stack Recommendations

**Frontend Framework:**
- **Recommended:** React with Next.js or Vue with Nuxt
  - Benefits: Component reusability, SSR for SEO, fast performance
  - Alternative: Vanilla JavaScript with modular approach (simpler, no build step)

**Styling:**
- **Recommended:** Tailwind CSS or custom CSS with design tokens
  - Ensures consistency and maintainability
  - Responsive utilities built-in

**Search Implementation:**
- **Client-side:** Lunr.js or Fuse.js (for static site)
- **Server-side:** Algolia, Meilisearch, or Elasticsearch (for dynamic, advanced features)

**Content Management:**
- **Static:** Markdown files with frontmatter (easy to maintain, version controlled)
- **CMS:** Strapi, Contentful, or Sanity (if non-technical updates needed)

**Bilingual Support:**
- **i18n library:** next-i18next (for Next.js) or vue-i18n (for Vue)
- Translation files: JSON format for easy management
- Language toggle persists user preference (cookie or localStorage)

**Analytics:**
- Google Analytics 4 or Plausible (privacy-focused)
- Track: Page views, search queries, PDF downloads, AI assistant usage

### 6.2 File Structure & Organization

```
/site-root
├── /assets
│   ├── /images
│   │   ├── /lectures (Intro.png, lecture1.png, ...)
│   │   ├── /ui (icons, logos, decorative elements)
│   │   └── /professor (profile photo if applicable)
│   ├── /pdfs (all downloadable lecture PDFs)
│   └── /fonts (if custom fonts used)
│
├── /components
│   ├── Header.js / Header.vue
│   ├── Footer.js / Footer.vue
│   ├── LectureCard.js
│   ├── SearchBar.js
│   ├── AIAssistant.js
│   └── ... (other reusable UI components)
│
├── /content (if using markdown approach)
│   ├── /lectures
│   │   ├── intro.md
│   │   ├── lecture-1.md
│   │   ├── lecture-2.md
│   │   └── ...
│   ├── course-overview.md
│   ├── syllabus.md
│   └── resources.md
│
├── /pages (or /views)
│   ├── index (Home)
│   ├── course-overview
│   ├── syllabus
│   ├── lectures
│   │   └── [id] (dynamic lecture pages)
│   ├── resources
│   ├── ai-assistant
│   └── search
│
├── /styles
│   ├── globals.css
│   ├── variables.css (design tokens)
│   └── ... (component-specific styles if not using Tailwind)
│
├── /public
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
└── /locales (for translations)
    ├── en.json
    └── it.json
```

### 6.3 Content Data Structure (for Lectures)

**Markdown Frontmatter Example:**
```yaml
---
lectureNumber: 1
title: "AI & Data Transformation in the Food & Beverage Industry: Enabling Technologies"
shortTitle: "Enabling Technologies"
sessionDate: "2026-02-16"
sessionTime: "AM"
duration: "3 hours"
image: "/assets/images/lectures/lecture1.png"
pdfFile: "/assets/pdfs/Lecture1(ESCP-PR-260123-RB02_0200).pdf"
keywords:
  - "Automation"
  - "Productivity Paradox"
  - "Cloud Computing"
  - "IoT"
  - "Robotics"
  - "Machine Learning"
objectives:
  - "Understand the four eras of automation"
  - "Analyze the Productivity Paradox"
  - "Identify key enabling technologies in F&B"
relatedLectures: [2, 4]
---

[Markdown content here]
```

**Benefits of This Structure:**
- Easy to query and filter
- Consistent metadata across all lectures
- Supports dynamic features (search, tags, navigation)

### 6.4 SEO & Metadata

**Each Page Should Include:**
- Unique `<title>` tag (e.g., "Lecture 3: Analytics-Driven Strategy | AI & Data Course")
- Meta description (150-160 characters summarizing page content)
- Open Graph tags for social sharing (og:title, og:description, og:image)
- Canonical URL to prevent duplicate content issues
- Structured data (Schema.org) for courses and educational content

**Example for Lecture Page:**
```html
<title>Lecture 1: Enabling Technologies | AI & Data Transformation Course</title>
<meta name="description" content="Explore the four eras of automation, the Productivity Paradox, and key enabling technologies like Cloud, IoT, and Robotics in the F&B industry.">
<meta property="og:title" content="Lecture 1: Enabling Technologies">
<meta property="og:description" content="Understanding digital transformation through historical context and modern tech enablers.">
<meta property="og:image" content="/assets/images/lectures/lecture1.png">
```

### 6.5 Performance Targets

**Metrics (measured via Lighthouse or WebPageTest):**
- **Load Time:** < 3 seconds on 3G connection
- **First Contentful Paint:** < 1.5 seconds
- **Time to Interactive:** < 4 seconds
- **Lighthouse Performance Score:** > 90
- **Lighthouse Accessibility Score:** > 95
- **Lighthouse Best Practices Score:** > 90
- **Lighthouse SEO Score:** > 95

**Optimization Strategies:**
- Image optimization (WebP format, responsive images)
- Code splitting (load only necessary JS per page)
- Caching strategy (browser cache, CDN)
- Minification of CSS/JS
- Critical CSS inlining
- Lazy loading images and non-critical content

---

## 7. CONTENT STRATEGY & WRITING GUIDELINES

### 7.1 Tone of Voice

**Primary Tone: Tech-Forward and Innovative**
- Confident and authoritative (reflecting subject matter expertise)
- Clear and direct (no jargon for jargon's sake)
- Forward-looking (emphasizing cutting-edge concepts)
- Practical and actionable (theory grounded in application)

**Secondary Characteristics:**
- Intellectually rigorous (academic credibility)
- Accessible without being overly simplified
- Engaging and dynamic (not dry textbook style)
- International (suitable for diverse student body)

**Language Specifics:**
- Use active voice where possible
- Short, punchy sentences mixed with more complex structures for variety
- Technical terms introduced with clear definitions
- Real-world examples to illustrate abstract concepts
- Rhetorical questions to engage critical thinking

**Examples of Tone:**

❌ Avoid: "This section will discuss some aspects of machine learning which may be relevant to business contexts."
✅ Prefer: "Machine Learning has transformed from a niche technical tool to a mainstream business necessity. Here's how industry leaders leverage it for competitive advantage."

❌ Avoid: "It might be interesting to note that..."
✅ Prefer: "The strategic imperative is clear: organizations must..."

### 7.2 Bilingual Content Strategy

**Approach:**
- **Primary Content:** English (as per course delivery)
- **Key Pages Translated:** Home, Course Overview, Syllabus
- **Lecture Content:** English (with Italian summary/abstract if resources allow)
- **UI Elements:** Fully bilingual (navigation, buttons, labels)

**Translation Guidelines:**
- Professional translation (not automated)
- Maintain tone and nuance across languages
- Adapt idioms and cultural references appropriately
- Ensure technical terms consistent in both languages

**Implementation:**
- Language toggle prominent in header
- User preference saved (cookie/localStorage)
- URL structure: `/en/...` and `/it/...` or query parameter `?lang=en`
- Each page has `<link rel="alternate" hreflang="en/it">` tags

### 7.3 Content Maintenance Plan

**Regular Updates:**
- Course calendar dates (for future iterations)
- "Current Week" indicator
- New resources as they become available
- Updated industry examples and statistics

**Content Review Cycle:**
- Pre-semester: Full content audit and updates
- Mid-semester: Add supplementary materials based on student questions
- Post-semester: Incorporate feedback and learnings into next iteration

**Responsibility:**
- **Professor:** Content accuracy, new case studies, resource additions
- **Web Admin:** Technical updates, bug fixes, performance optimization
- **Students (optional):** Feedback mechanism for content suggestions

---

## 8. CONTENT MAPPING: LECTURE-BY-LECTURE BREAKDOWN

### 8.1 Course Introduction Page

**Content Source:** "Course Introduction The Enterprise AI & Machine Learning Companion: From Productivity Paradox to Autonomous Agents"

**Key Sections to Include:**
1. **The Productivity Paradox**
   - Historical context (electrification of factories)
   - Modern parallel (office productivity lag)
   - Visual: Before/after comparison or timeline

2. **Demystifying Machine Learning**
   - Definition and strategic necessity
   - The role of algorithms
   - ML vs Explicit Programming comparison table

3. **Industry Applications in F&B**
   - Case studies: Coca-Cola, Starbucks, PepsiCo, Kraft Heinz, Nestle
   - Visual: Company logos with use case highlights

4. **Supervised Learning Framework**
   - Regression vs Classification
   - The three algorithm groups (Linear, Tree, Neural)

5. **Model Validation**
   - Data partitioning
   - Confusion Matrix visualization
   - Error types and business implications

6. **Overfitting & Regularization**
   - Problem explanation
   - Solutions (L1/L2, Tree Depth)

7. **Unsupervised Learning**
   - Clustering methods (DBSCAN, K-Means, Hierarchical)

8. **Evolution of AI**
   - Timeline from Turing to AGI
   - Floridi's "Divorce" and "Envelope" concepts

9. **From Prompting to Agents**
   - Prompt engineering examples
   - The proprietary AI Roadmap (5 steps)

**Visual Assets:**
- Intro.png as hero image
- Custom diagrams for Confusion Matrix, Algorithm comparison, AI timeline

**Downloadable:**
- CourseIntro(ESCP-PR-260123-RB01_0100).pdf

---

### 8.2 Lecture 1: Enabling Technologies

**Content Source:** "AI & Data Transformation in the Food & Beverage Industry: Enabling Technologies"

**Key Sections:**
1. **The Age of the Exponential**
   - Four Eras of Automation (1790-present)
   - Visual: Timeline with key milestones

2. **The Productivity Paradox**
   - Productivity formula
   - Efficiency vs Effectiveness
   - Historical lag example

3. **Infrastructure: Cloud Computing & IoT**
   - Market projections and statistics
   - F&B applications (Digital Twins, smart kitchens)
   - Global leadership data (China vs North America)
   - Smart Farming case study

4. **Physical Innovation: Robotics & 3D Printing**
   - Investment trends
   - Barilla 3D pasta case study
   - Osaka University bioprinted Wagyu
   - DayTwo personalized nutrition

5. **Enhanced Perception: Augmented Reality**
   - Four primary applications in F&B
   - Use case examples

6. **The Intelligence Layer**
   - Big Data vs Synthetic Data
   - ML and AI market projections
   - Financial forecasts for F&B AI

7. **Navigating Human-AI Paradoxes**
   - Polanyi Paradox
   - Moravec Paradox
   - Table: Human-only skills vs Machine capabilities

**Visual Assets:**
- lecture1.png as hero
- Infographic for Four Eras
- Icons for each enabling technology

**Downloadable:**
- Lecture1(ESCP-PR-260123-RB02_0200).pdf

---

### 8.3 Lecture 2: Info-Economy & Data Value Model

**Content Source:** "The Info-Economy and the Data Value Model: Strategic Foundations for the Digital Age"

**Key Sections:**
1. **Economics of Bits vs. Atoms**
   - Three foundational axioms
   - Strategic question: Where does value come from?

2. **Richness vs. Reach Paradoxes**
   - Comparative analysis table (Paradox 1, 2, 3)
   - Strava Heat Maps case study (Milano vs Kandahar)

3. **Value Hierarchy: Data to Decisions**
   - Knowledge Pyramid visualization
   - Real-world application: Crowdsourcing infrastructure

4. **Big Data Value Model**
   - 5 Stages of Data Processing (Generation to Support)
   - 3+2 Vs definition (Volume, Variety, Velocity, Veracity, Value)

5. **Technical Infrastructure**
   - Storage & Programming Models
   - Semantic Layer (three tiers)

6. **Analytics Spectrum**
   - Descriptive (CLV formula)
   - Predictive (ETS formula)
   - Prescriptive (Linear Programming)

7. **ML and Human Bias**
   - The bias trap warning

8. **The Fourth Revolution**
   - Displacement timeline (Copernican → AI)
   - Machine = Syntax, Human = Semantics

9. **Digital Ethics**
   - Strategic Triad (Can, May, Should)
   - 5 Pillars of AI Ethics

10. **Business Model Transformation: Servitization**
    - Industry shifts
    - Incentive reversal explanation

**Visual Assets:**
- Lecture2.png as hero
- Knowledge Pyramid diagram
- Analytics spectrum visual
- Ethics framework infographic

**Downloadable:**
- Lecture2(ESCP-PR-260123-RB03_0200).pdf

---

### 8.4 Lecture 3: Analytics-Driven Strategy

**Content Source:** "Masterclass Module: Analytics-Driven Strategy and the 'Vision' Simulation"

**Key Sections:**
1. **Modern CPG Analytics Landscape (2026)**
   - Data evolution table (Traditional vs Modern)

2. **Case Study: Decline of "Blue" Detergent**
   - Problem state diagnosis
   - Competitive pincer movement (Turbo vs Fresh)

3. **Vision Analytics System**
   - Three Pillars (Descriptive, Predictive, Prescriptive)
   - Vision Capabilities (Drill-downs, Scenario Planning)

4. **Competitive Intelligence**
   - Competitor comparison table (Turbo, Fresh, Store Brands)
   - Strategic Variable Balancing

5. **Evaluating Performance**
   - Leading questions post-simulation

6. **2026 Data Landscape**
   - Privacy and signal loss
   - MMM and Clean Rooms
   - Rise of Retail Media Networks (statistics)

7. **Advanced Applications**
   - Trade Promotion Optimization (TPO) steps
   - PepsiCo collaborative forecasting case

8. **Strategic Takeaways**
   - Decision quality
   - Causal inference
   - Optimization mindset

**Visual Assets:**
- lecture3.png as hero
- Vision system diagram
- Competitive landscape visual
- TPO process flow

**Downloadable:**
- Lecture3(ESCP-PR-260123-RB04_0200).pdf
- Lecture3(ESCP-PR-260123-RB04_0200)_APPENDIX.pdf (note: appendix is large file)

---

### 8.5 Lecture 4: Machine Learning & AI for Business

**Content Source:** "Comprehensive Course Module: Machine Learning and Artificial Intelligence for Business"

**Key Sections:**
1. **Mainstreaming of Machine Learning**
   - 790% growth stat
   - Definition and strategic role

2. **Deciphering the Algorithm**
   - Four core characteristics (Finite, Deterministic, Non-Ambiguous, General)
   - Historical context (al-Khwarizmi)

3. **Strategic Industry Applications in F&B**
   - Use case table (Coca-Cola, Starbucks, PepsiCo, Kraft Heinz, Nestle)
   - Business value mapping

4. **Prediction vs. Clustering**
   - Core strategic choice

5. **Predictive Modeling**
   - Regression vs Classification
   - Three algorithm pillars (Linear, Tree, Neural)

6. **Algorithm Lifecycle**
   - Train → Test → Evaluate → Use (with Improve loop)
   - Data partitioning
   - Confusion Matrix
   - Overfitting and Regularization

7. **Unsupervised Learning**
   - DBSCAN, K-Means, Hierarchical Clustering

8. **Philosophy and Evolution of AI**
   - Historical milestones timeline
   - Floridi's "Divorce" and "Envelope"

9. **Practical Implementation**
   - Prompt Engineering examples
   - AI Roadmap and Target Operating Model (TOM)

**Visual Assets:**
- lecture4.png as hero
- Algorithm comparison chart
- Confusion Matrix
- AI evolution timeline
- TOM framework diagram

**Downloadable:**
- Lecture4(ESCP-PR-260123-RB05_0100).pdf

---

### 8.6 Lecture 5: Human Dimension of Big Data & Analytics

**Content Source:** "Mastering the Human Dimension of Big Data & Analytics: From Data to Decision"

**Key Sections:**
1. **Human-Centric Paradigm**
   - Ontological shift from data to knowledge
   - Three interconnected lenses (Customer, Workforce, Philosophy)

2. **Redefining Customer Journey**
   - Digital power shift
   - New touchpoints (Taste & Try, DIY, Experience)
   - Value-based advertising
   - "Eat-arian new religions" concept

3. **Strategic Trade-offs**
   - Four pillars table (Interpretation vs Control, Speed, Ethics, Utility)
   - Big Data vs Small Data distinction

4. **Future of Work**
   - Digital Tsunami impact
   - Three collaborative pillars (Liaison, Scientific Method, Hybrid Synthesis)

5. **Philosophical Foundations**
   - Four pillars: Ontology, Epistemology, Mimesis, Poiesis

6. **Living in the Infosphere**
   - Floridi's concept
   - Ontological Poietic Epistemology framework
   - Practical applications (Data Security, Reliability, Social Responsibility)

**Visual Assets:**
- lecture5.png as hero
- Customer journey map
- Trade-offs framework
- Philosophical pillars diagram
- Infosphere concept visual

**Downloadable:**
- Lecture5(ESCP-PR-260123-RB06_0100).pdf

---

## 9. IMPLEMENTATION PHASES & TIMELINE

### Phase 1: Foundation & Core Structure (Weeks 1-2)
**Deliverables:**
- Site architecture and navigation structure
- Design system and style guide
- Homepage (fully functional)
- Course Overview page
- Syllabus & Schedule page
- Basic header/footer components
- Responsive framework

**Milestone:** Stakeholder review of core structure and design

---

### Phase 2: Content Integration (Weeks 3-4)
**Deliverables:**
- All 7 lecture pages (content integrated from Google Docs)
- Lectures hub page
- Resources page (with PDF downloads functional)
- Search functionality (basic implementation)
- Bilingual toggle (UI elements)

**Milestone:** Content review and accuracy check with Professor

---

### Phase 3: Interactive Features (Week 5)
**Deliverables:**
- AI Assistant integration (iframe/div with external URL)
- Enhanced search with filters and suggestions
- Smooth scrolling and navigation enhancements
- Interactive elements (accordions, tabs, hover states)
- "Current Week" dynamic indicator

**Milestone:** Feature testing and UX review

---

### Phase 4: Polish & Optimization (Week 6)
**Deliverables:**
- Performance optimization (image compression, lazy loading, etc.)
- SEO implementation (metadata, structured data, sitemap)
- Accessibility audit and fixes
- Cross-browser testing
- Mobile responsiveness fine-tuning
- Analytics integration

**Milestone:** Pre-launch QA

---

### Phase 5: Launch & Iteration (Week 7+)
**Deliverables:**
- Site goes live
- Monitor analytics and user feedback
- Bug fixes and minor adjustments
- Documentation for content updates
- Training for Professor/admin on making updates

**Milestone:** Official launch and student onboarding

---

## 10. QUALITY ASSURANCE & TESTING

### 10.1 Functional Testing Checklist

**Navigation:**
- [ ] All menu items link correctly
- [ ] Breadcrumbs display accurate path
- [ ] Previous/Next lecture navigation works
- [ ] Back to top button functions (if implemented)
- [ ] Language toggle switches content correctly

**Content:**
- [ ] All lecture content displays without errors
- [ ] Images load correctly (with alt text)
- [ ] PDFs download successfully
- [ ] External links open in new tab
- [ ] Mathematical formulas render properly
- [ ] Tables are readable and responsive

**Interactive Features:**
- [ ] Search returns accurate results
- [ ] Search filters function correctly
- [ ] AI Assistant iframe loads and is accessible
- [ ] Accordions expand/collapse smoothly
- [ ] Tabs switch content correctly
- [ ] Hover states trigger appropriately

**Forms (if any):**
- [ ] Validation works (if contact form implemented)
- [ ] Feedback mechanism submits correctly

### 10.2 Cross-Browser & Device Testing

**Browsers to Test:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Mobile Chrome (Android)

**Devices:**
- Desktop (1920x1080, 1366x768)
- Laptop (1440x900)
- Tablet (iPad, 768x1024)
- Mobile (iPhone, 375x667; Android, 360x640)

**Test Criteria:**
- Layout integrity (no broken grids)
- Text legibility (no overflow or cut-off)
- Touch targets (min 44x44px on mobile)
- Performance (no significant lag)

### 10.3 Accessibility Testing

**Automated Tools:**
- Lighthouse accessibility audit (target: >95)
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools

**Manual Checks:**
- [ ] Keyboard navigation works (Tab, Enter, Arrow keys)
- [ ] Focus indicators visible
- [ ] Screen reader testing (NVDA or JAWS)
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] All images have meaningful alt text
- [ ] Headings follow logical hierarchy (no skipped levels)
- [ ] ARIA labels present where needed

### 10.4 Performance Testing

**Tools:**
- Google Lighthouse
- WebPageTest
- GTmetrix

**Metrics to Monitor:**
- Load time (target: <3s)
- First Contentful Paint (target: <1.5s)
- Largest Contentful Paint (target: <2.5s)
- Time to Interactive (target: <4s)
- Cumulative Layout Shift (target: <0.1)
- Total page weight (target: <2MB)

### 10.5 SEO Audit

**Checklist:**
- [ ] All pages have unique, descriptive `<title>` tags
- [ ] Meta descriptions present (150-160 characters)
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Images have alt text
- [ ] Internal linking structure logical
- [ ] Sitemap.xml generated and submitted
- [ ] Robots.txt configured correctly
- [ ] Canonical URLs set
- [ ] Open Graph tags present
- [ ] Structured data (Schema.org) implemented
- [ ] Mobile-friendly (passes Google test)
- [ ] HTTPS enabled (if applicable)

---

## 11. POST-LAUNCH CONSIDERATIONS

### 11.1 Analytics & Tracking

**Key Metrics to Monitor:**
- **Engagement:**
  - Average session duration
  - Pages per session
  - Bounce rate by page
  - Most viewed lectures

- **Search:**
  - Search queries (what are students looking for?)
  - Failed searches (queries with no results)
  - Search refinement rate

- **Downloads:**
  - PDF download count by lecture
  - Most downloaded resources

- **AI Assistant:**
  - Usage rate (% of visitors who access it)
  - Average interaction time
  - Referral from assistant to lecture pages

- **Navigation Patterns:**
  - Entry pages
  - Exit pages
  - Navigation flow (where do students go after homepage?)

**Tools:**
- Google Analytics 4 (or privacy-focused alternative like Plausible)
- Hotjar or similar for heatmaps (understand user behavior)
- Search query logs (if custom search implemented)

### 11.2 Feedback Mechanism

**Student Feedback Collection:**
- Simple rating widget on each lecture page ("Was this helpful?")
- Optional comment box for suggestions
- Mid-semester survey (via external tool like Google Forms)
- Office hours feedback (informal)

**Feedback Review Process:**
- Monthly review of analytics and feedback
- Prioritize issues and feature requests
- Quarterly updates to content and features

### 11.3 Content Update Workflow

**Regular Updates:**
- Course calendar (for next academic year)
- New case studies and examples
- Updated statistics and industry data
- Additional resources as discovered

**Who Updates What:**
- **Professor:** Content accuracy, new materials, resource links
- **Web Admin/Developer:** Technical fixes, feature additions, performance optimization
- **Students:** Feedback and suggestions (reviewed by Professor)

**Update Process:**
1. Professor provides updated content (Google Doc or direct input)
2. Developer integrates updates into site
3. Staging site review before publishing to live
4. Version control (Git) for all changes

### 11.4 Future Enhancements (Phase 2 Ideas)

**Potential Features for Future Iterations:**
- User accounts and login (for personalized experience)
- Progress tracking (checkmarks on completed lectures)
- Note-taking functionality (students can add private notes)
- Discussion forum or Q&A section
- Video content integration (lecture recordings if available)
- Interactive quizzes and self-assessment tools
- Integration with learning management system (LMS) if ESCP uses one
- Advanced AI features (personalized study plans, adaptive content recommendations)
- Gamification elements (badges for milestones, leaderboards for engagement)
- Mobile app (Progressive Web App for offline access)

**Prioritization Criteria:**
- Student demand (feedback)
- Educational impact (does it improve learning outcomes?)
- Technical feasibility (complexity vs. benefit)
- Professor's vision and goals

---

## 12. APPENDICES

### Appendix A: Design Assets Reference

**Image Assets Available:**
| Filename | Usage | Dimensions | Format |
|----------|-------|------------|--------|
| Intro.png | Course Introduction hero | TBD | PNG |
| lecture1.png | Lecture 1 hero | TBD | PNG |
| Lecture2.png | Lecture 2 hero | TBD | PNG |
| lecture3.png | Lecture 3 hero | TBD | PNG |
| lecture4.png | Lecture 4 hero | TBD | PNG |
| lecture5.png | Lecture 5 hero | TBD | PNG |

**PDF Assets:**
| Filename | Linked From | Size |
|----------|-------------|------|
| CourseIntro(ESCP-PR-260123-RB01_0100).pdf | Course Introduction page | 753 KB |
| Lecture1(ESCP-PR-260123-RB02_0200).pdf | Lecture 1 page | 4.3 MB |
| Lecture2(ESCP-PR-260123-RB03_0200).pdf | Lecture 2 page | 4.5 MB |
| Lecture3(ESCP-PR-260123-RB04_0200).pdf | Lecture 3 page | 1.6 MB |
| Lecture3(ESCP-PR-260123-RB04_0200)_APPENDIX.pdf | Lecture 3 resources | 16.1 MB |
| Lecture4(ESCP-PR-260123-RB05_0100).pdf | Lecture 4 page | 4.2 MB |
| Lecture5(ESCP-PR-260123-RB06_0100).pdf | Lecture 5 page | 829 KB |

---

### Appendix B: Content Sources Mapping

**Google Drive Documents:**
1. **Course Syllabus: AI & Data Transformation in Food & Beverage (F&B)**
   - Used for: Course Overview page, Syllabus page, About Professor section

2. **Course Introduction: The Enterprise AI & Machine Learning Companion**
   - Used for: Course Introduction lecture page

3. **Lecture 1: AI & Data Transformation in the Food & Beverage Industry: Enabling Technologies**
   - Used for: Lecture 1 page

4. **Lecture 2: The Info-Economy and the Data Value Model**
   - Used for: Lecture 2 page

5. **Lecture 3: Masterclass Module: Analytics-Driven Strategy and the "Vision" Simulation**
   - Used for: Lecture 3 page

6. **Lecture 4: Comprehensive Course Module: Machine Learning and Artificial Intelligence for Business**
   - Used for: Lecture 4 page

7. **Lecture 5: Mastering the Human Dimension of Big Data & Analytics: From Data to Decision**
   - Used for: Lecture 5 page

**All documents available at:**
Google Drive Folder ID: 1J8gV6g5AfYf0vpAVe5DfSSy_L8x86pfN

---

### Appendix C: Keyword & Tag Taxonomy

**Master Keyword List (for search and tagging):**

**Core Concepts:**
- Artificial Intelligence (AI)
- Machine Learning (ML)
- Big Data & Analytics (BD&A)
- Digital Transformation
- Data-Driven Decision Making

**Technologies:**
- Cloud Computing
- Internet of Things (IoT)
- Robotics
- Additive Manufacturing / 3D Printing
- Augmented Reality (AR)
- Neural Networks
- Deep Learning
- Generative AI

**Methodologies:**
- Supervised Learning
- Unsupervised Learning
- Regression
- Classification
- Clustering (K-Means, DBSCAN, Hierarchical)
- Predictive Analytics
- Prescriptive Analytics
- Descriptive Analytics

**Business Concepts:**
- Productivity Paradox
- Data Value Model
- Knowledge Pyramid
- Analytics-Driven Strategy
- Trade Promotion Optimization (TPO)
- Customer Lifetime Value (CLV)
- Servitization
- Target Operating Model (TOM)

**F&B Specific:**
- Consumer Packaged Goods (CPG)
- Food & Beverage Industry
- Smart Farming
- Vertical Farming
- Retail Media Networks
- Case Studies (Coca-Cola, Starbucks, PepsiCo, Nestle, Barilla, etc.)

**Ethical & Philosophical:**
- AI Ethics
- Digital Ethics
- Ontology
- Epistemology
- Poiesis
- Infosphere
- Floridi's Fourth Revolution
- Human-in-the-Loop

**Technical Terms:**
- Algorithm
- Overfitting
- Regularization
- Confusion Matrix
- Training Data / Testing Data
- Synthetic Data
- Richness vs. Reach
- Marketing Mix Modeling (MMM)

---

### Appendix D: Accessibility Quick Reference

**WCAG 2.1 Level AA Requirements:**
- **Perceivable:** Information and UI components presentable to users
  - Text alternatives for non-text content
  - Captions for audio/video
  - Content can be presented in different ways
  - Sufficient color contrast (4.5:1 for normal text, 3:1 for large text)

- **Operable:** UI components and navigation must be operable
  - All functionality available from keyboard
  - Enough time to read and use content
  - No content that causes seizures (no flashing >3 times/second)
  - Navigable (skip links, clear headings, focus visible)

- **Understandable:** Information and operation of UI must be understandable
  - Readable text (language of page identified)
  - Predictable (consistent navigation, no unexpected context changes)
  - Input assistance (error identification, labels/instructions)

- **Robust:** Content must be robust enough for wide variety of user agents
  - Compatible with current and future assistive technologies
  - Valid HTML (no parsing errors)

**Key Checks for This Project:**
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`)
- Skip navigation link (allows keyboard users to skip to main content)
- Descriptive link text (avoid "click here")
- Form labels associated with inputs
- ARIA landmarks where appropriate
- Focus management for interactive elements (especially AI assistant iframe)

---

### Appendix E: Responsive Design Breakpoints Detail

**Mobile First Approach:**

**Extra Small (< 576px):**
- Single column layout
- Stacked navigation (hamburger menu)
- Images full-width
- Typography slightly smaller (but still legible)
- Touch targets minimum 44x44px
- Simplified tables (consider card view for complex data)

**Small (≥ 576px):**
- Single column maintained
- Slightly increased spacing
- Images can have side margins

**Medium (≥ 768px) - Tablet:**
- Two-column layout possible for some sections
- Side-by-side cards in grids
- Horizontal navigation if space allows (or remain hamburger)
- Tables display normally

**Large (≥ 1024px) - Desktop:**
- Full multi-column layouts
- Sidebar navigation possible (sticky TOC on lecture pages)
- Maximum content width constrained (1200px) for readability
- Hover states prominent

**Extra Large (≥ 1440px):**
- Same as Large but with more whitespace
- Images and cards can be larger
- Multi-column resource lists

---

## 13. FINAL NOTES FOR CODING AGENT

### Development Priorities:
1. **Mobile-first responsive design** - Majority of students may access via mobile
2. **Performance** - Fast load times crucial for engagement
3. **Accessibility** - Non-negotiable for inclusive education
4. **Clean, maintainable code** - Future updates should be easy
5. **SEO** - Ensure content is discoverable

### Code Standards:
- **HTML:** Semantic, valid HTML5
- **CSS:** BEM methodology or utility-first (Tailwind) for naming consistency
- **JavaScript:** ES6+, modular approach, avoid jQuery unless necessary
- **Comments:** Clear comments explaining complex logic
- **Version Control:** Git with meaningful commit messages

### Content Integration:
- All lecture content from Google Drive documents (provided separately in markdown files)
- Images from `/BaseDocumenti` folder
- PDFs from `/BaseDocumenti` folder
- Maintain content structure and hierarchy from source documents

### Testing Before Launch:
- [ ] Lighthouse audit (all metrics >90)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS and Android)
- [ ] Accessibility audit (WAVE, axe)
- [ ] Broken link check
- [ ] PDF download verification
- [ ] Search functionality test
- [ ] AI Assistant integration test
- [ ] Language toggle verification

### Handoff Documentation:
- **README.md** with setup instructions
- **Content update guide** for non-technical users
- **Style guide** with design tokens and component examples
- **Architecture diagram** showing site structure and data flow

---

## 14. CONCLUSION & NEXT STEPS

This specification document provides a comprehensive blueprint for creating a cutting-edge, student-centric course website that reflects the innovative spirit of Professor Riccardo Bovetti's AI & Data Transformation course.

### Key Success Factors:
1. **Content-First Design:** Information architecture drives all design decisions
2. **Innovative Features:** AI Assistant and intelligent search create "WOW" factor
3. **Accessibility & Performance:** Ensure all students can access content quickly and easily
4. **Scalability:** Modular design allows for future enhancements
5. **Bilingual Support:** Native IT/EN integration respects diverse student body

### Immediate Next Steps:
1. **Review & Approval:** Professor Bovetti reviews and approves this specification
2. **Design Mockups:** Create visual mockups for key pages (Home, Lecture page) for approval
3. **Content Preparation:** Convert Google Docs content to structured markdown files
4. **Development Kickoff:** Begin Phase 1 (Foundation & Core Structure)
5. **AI Assistant Setup:** Finalize external AI platform and integration method

### Expected Outcome:
A sophisticated, user-friendly digital learning hub that:
- Positions Professor Bovetti as a tech-forward educator
- Enhances student learning experience through intelligent organization
- Showcases ESCP's commitment to innovative digital education
- Serves as a model for future course websites

**This website will not just be a repository of information, but an active learning companion that guides, engages, and empowers students throughout their AI & Data Transformation journey.**

---

**Document Version:** 1.0
**Last Updated:** February 8, 2026
**Next Review:** Upon approval and before development kickoff

**Prepared by:** Claude (Cowork Mode)
**For:** Professor Riccardo Bovetti, ESCP Business School
