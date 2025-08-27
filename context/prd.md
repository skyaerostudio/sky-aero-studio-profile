# SkyAero Studio — Product Requirements Document (PRD)
**Version:** 1.0 • **Date:** Aug 27, 2025 • **Owner:** Ryan Razaan Gunawan  
**Purpose:** Define what to build, why it matters, and how we will measure success for SkyAero Studio’s public-facing portfolio & lead-generation website.

---

## 1) Executive Summary
**Vision:** An AI‑first, S‑tier website that converts curious visitors into qualified leads by clearly packaging our productized services and proving credibility with case studies.

**Primary Outcomes**
- Clear tiered offerings with inclusions and indicative price bands.
- Fast path to contact: “Book Intro Call”, “Request Estimate”, and optional WhatsApp quick chat.
- Credibility engine: AI‑first case studies with before/after metrics.

**Launch KPIs (MVP, mobile P75 unless noted)**
- Visitor → Lead conversion ≥ **3.0%** by Day 60; ≥ **4.0%** by Day 90.
- Case study page avg. engagement time ≥ **120s** by Day 60.
- Core Web Vitals: **LCP ≤ 1.8s**, **INP ≤ 200ms**, **CLS ≤ 0.1** (Home/Services/Case Study).
- Lead response SLA: first reply **≤ 1 business day**.
- Bounce rate reduced **≥ 15%** vs. pre‑launch benchmark (same traffic sources).

**Non‑Goals (MVP)**
- Full blog, gated content, complex client portal, or multilingual support.
- Complex pricing configurator; stick to tier cards with “from” price bands.

---

## 2) Problem Statement
- Current presence doesn’t reflect premium, AI‑first brand or show our speed-to-value.
- Prospects can’t see what’s included in each service tier or typical delivery time.
- Case studies lack structured narrative and measurable before/after results.
- Conversions are unclear (no strong CTAs, no consistent lead capture & routing).

**Opportunity:** Package and prove value with crisp storytelling, high performance, and frictionless conversion.

---

## 3) Users & Personas
### P1. SME Founder / Marketing Lead (Primary Buyer)
- **Top tasks:** Understand packages and delivery time; see relevant case studies; request estimate.
- **Objections:** Price uncertainty; design quality risk; timeline risk.
- **Decision criteria:** Visual polish, speed to first result, credible proof (metrics), clear SLAs.
- **Primary path:** Home → Services tiers → Relevant case study → Request Estimate.

### P2. Mid‑Market Product/IT Lead (Influencer/Buyer)
- **Top tasks:** Assess technical maturity, stack fit, QA and accessibility; evaluate handover quality.
- **Objections:** Maintainability; analytics/testing rigor; SEO/performance.
- **Decision criteria:** Architecture clarity, CI checks, accessibility, SEO plan.
- **Primary path:** Home → Case studies (technical depth) → Book Intro Call.

### P3. Referral/Agency Partner (Advocate)
- **Top tasks:** Quickly show our portfolio; confirm collaboration model and timeline.
- **Primary path:** Home → Portfolio/Case studies → Contact.

---

## 4) Scope & Information Architecture
### In Scope (MVP)
- **Pages:** Home, Services (tiers), Case Studies (list & detail), About, Contact/Estimate, Thank‑You, 404, Privacy/Terms.
- **Primary CTAs:** Book Intro Call (calendar), Request Estimate (form), WhatsApp quick chat (deeplink).
- **Admin roles:** Owner, Admin for content publishing; public read‑only for all.

### Out of Scope (MVP)
- Blog, client login, payments, multi‑language, complex pricing calculators.

---

## 5) Value Proposition & Messaging
“**AI‑first studio that ships investor‑ready prototypes in 2–4 weeks.** Transparent tiers. Clear SLAs. Proven case studies.”  
Tone: confident, concise, technical‑but‑friendly; avoid hype.

---

## 6) Functional Requirements (with Acceptance Criteria)

### 6.1 Global Shell & Navigation
- **Req:** Responsive header/footer; sticky nav on mobile; clear CTA buttons.
- **AC:**
  - Shows logo + nav + primary CTA on ≥320px widths.
  - Active page highlighted; keyboard navigable (Tab/Shift+Tab).
  - Footer includes social, email, and legal links.

### 6.2 Home
- **Req:** Hero with value prop, social proof, and primary CTA; highlights services & case studies.
- **AC:**
  - Above‑the‑fold LCP element is a text block or optimized image with preload.
  - Displays top 3 service tiers with “View details” and a single dominant primary CTA.
  - Renders 2 featured case studies with metric callouts.

### 6.3 Services (Tiers)
- **Req:** Tier cards (Simple Prototype, Moderate Build, Full App) with inclusions, “from” price bands, SLAs.
- **AC:**
  - Each tier shows: target use, inclusions, delivery time, “from” price, FAQs, and “Request Estimate” CTA.
  - Optionally toggle comparison view.
  - Tier data is CMS‑driven (no hard‑coding).

### 6.4 Case Studies
- **Req:** List and detail pages with a consistent template.
- **AC (Detail):**
  - Sections: Client context, Problem, Approach (stack/models), Before/After metrics, Timeline, Screens, Testimonial, CTA.
  - Optional assets gallery with captions and alt text.
  - Schema.org `CaseStudy` data rendered.

### 6.5 Contact / Request Estimate
- **Req:** Form + calendar booking; optional WhatsApp link.
- **AC:**
  - Required fields: name, email, company (optional), project type, budget band, message.
  - Client + server validation; spam protection (honeypot + server checks + rate limiting).
  - On success: thank‑you page; email notification to owner; lead logged to CRM sink.
  - Analytics events fired: `lead_form_view`, `lead_form_submit`, `lead_form_success` with properties.

### 6.6 Search/Discoverability (Optional MVP)
- **Req:** Filter case studies by industry/tech; search by keyword.
- **AC:** Client‑side filter, debounced; no index route leaks; accessible labeling.

---

## 7) Content Model (MVP)
> Decision: use a headless CMS to enable non‑technical editing and previews. (Sanity recommended; substitutable.)

**Collections & Fields (core)**
- **ServiceTier**: id, slug, name, summary, targetUse, inclusions[], addons[], fromPriceBand, deliveryTime, faq[] (q,a), rank, isFeatured, lastUpdated.
- **CaseStudy**: id, slug, title, clientName, industry, problem, approach, stack[], models[], metricsBefore[], metricsAfter[], timeline[], images[], testimonial{quote,author,role}, featured (bool).
- **Testimonial**: id, quote, author, role, org, avatar.
- **Page** (About/Legal): id, slug, title, body.
- **SiteSettings**: hero copy, value prop, social links, WhatsApp number, calendar link, contact email.

**Preview Workflow**
- Draft → Preview URL → Review → Publish → Auto‑deploy preview/live.

---

## 8) Non‑Functional Requirements
- **Performance (mobile P75):** LCP ≤ **1.8s**, INP ≤ **200ms**, CLS ≤ **0.1** on key pages.
- **Accessibility:** WCAG **2.2 AA**. Keyboard focus visible; alt text; label‑input associations; color contrast ≥ 4.5:1.
- **Security/Privacy:** Rate limit form posts; store minimal PII; cookie consent where required.
- **Browser Support:** Evergreen desktop/mobile; graceful degradation for older Safari.
- **Reliability:** 99.9% uptime for static pages; form endpoint retries/backoff.
- **Internationalization:** Single locale (en) at launch; architecture leaves room for i18n later.

---

## 9) Analytics & Measurement Plan
**Tools:** GA4 or a privacy‑friendly alternative (e.g., Plausible).  
**Key Events & Properties**
- `tier_card_view` (tier_id), `tier_cta_click` (tier_id, cta_type)
- `case_study_view` (slug, industry), `case_study_scroll_75`
- `lead_form_view`, `lead_form_submit`, `lead_form_success` (source, tier_id?, budget_band?)
**Funnels:** Home → Services → Estimate; Home → Case Study → Estimate.  
**Dashboards:** Weekly conversion, CWV field data, sources/medium.

---

## 10) SEO Plan
- Per‑page meta (title/description), canonical, sitemap, robots.
- Structured data: `Organization`, `Product`/`Service`, `CaseStudy`, `BreadcrumbList`.
- OG/Twitter images per page type.
- Clean URLs: `/services`, `/services/[slug]`, `/case-studies/[slug]`.
- Noindex on preview/drafts; handle 404/410 correctly.

---

## 11) Risks & Assumptions
- **R1:** Content/asset readiness delays → *Mitigation:* placeholder content gates replaced by a tracked checklist.
- **R2:** CMS complexity → *Mitigation:* start with minimal schemas; add fields iteratively.
- **R3:** Performance regressions → *Mitigation:* perf budgets in CI, image/CDN strategy, script defers.
- **R4:** Lead routing gaps → *Mitigation:* test email + backup sheet; alert on failures.
- **Assumptions:** Next.js app scaffold exists; domain/DNS controlled; analytics account available.

---

## 12) Implementation Plan & Timeline
**Phase 1 (MVP shell & content model): Aug 28 – Sep 10, 2025 (2 weeks)**  
Entry: brand assets available. Exit: IA complete; CMS schemas; Home/Services/CaseStudy pages with placeholder content; basic theming; CI checks (type/lint/test).

**Phase 2 (Content & conversions): Sep 11 – Sep 24, 2025 (2 weeks)**  
Exit: Tier cards with “from” prices; 2 case studies published; Contact/Estimate flow; calendar booking; analytics events; SEO basics; accessibility pass.

**Phase 3 (Polish & launch): Sep 25 – Oct 01, 2025 (1 week)**  
Exit: Performance budget met (field/lab); a11y fixes; visual regression & smoke tests; redirects; launch checklist signed.

---

## 13) RACI (MVP)
- **Owner:** Ryan (Product/PM)  
- **Design:** Design lead (Claude‑assisted)  
- **Engineering:** Frontend devs (Claude Code assisted)  
- **Content:** Ryan + copy editor  
- **QA:** Eng + PM (tooling automation + manual)

---

## 14) Open Questions
1. Final CMS choice accepted? (Sanity vs alternative).  
2. CRM destination for leads? (Email + Sheet, Pipedrive, HubSpot).  
3. Any industries to prioritize for case studies?  
4. WhatsApp quick chat number & hours for auto‑reply?

---

## 15) Definition of Done (Launch)
- All ACs pass; CWV budgets met on mobile P75; accessibility checks pass; tracking verified; lead routing observed in live test; SEO verifies (sitemap, structured data); rollback plan documented.
