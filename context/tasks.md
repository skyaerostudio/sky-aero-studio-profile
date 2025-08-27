# SkyAero Studio — Tasks for Claude Code (To‑Do)

> **Goal:** Ship the MVP in **≤ 5 working weeks** using **≤ 15 prompts** by batching related edits and using unified diffs.

## Phase 1 — Shell, Content Model, Pages (Prompts 1–5)
- [ ] **Set up project**: Next.js App Router + TypeScript + Tailwind; ESLint/Prettier; CI (type/lint/test).
- [ ] **Global layout**: Header, Footer, theme tokens (spacing/typography/colors), responsive grid.
- [ ] **CMS integration**: Configure headless CMS (Sanity recommended) with schemas:
  - ServiceTier, CaseStudy, Testimonial, Page, SiteSettings (per PRD §7).
- [ ] **Pages scaffold**: Home, Services, Case Studies (list/detail), About, Contact/Estimate, Thank‑You, 404.
- [ ] **Routing & slugs**: `/services/[slug]`, `/case-studies/[slug]`; dynamic fetch; preview mode.
- [ ] **Seed content**: 3 tiers, 2 case studies (placeholders), 1 testimonial, site settings.

**Acceptance:** Pages render from CMS; lighthouse baseline passes; type/lint clean.

## Phase 2 — Content, Conversions, Analytics (Prompts 6–10)
- [ ] **Services (tiers)**: Tier cards show inclusions, delivery time, “from” price, FAQ, CTA; optional comparison view.
- [ ] **Case studies**: Detail template with Problem, Approach (stack/models), Before/After metrics, Screens, Testimonial, CTA. Schema.org markup.
- [ ] **Contact/Estimate**: Form (name, email, company?, project type, budget band, message) with client+server validation, spam protection (honeypot + rate limit).
- [ ] **Calendar booking**: Add “Book Intro Call” (external link/iframe) and CTA placements across pages.
- [ ] **WhatsApp quick chat**: Deep link from SiteSettings.
- [ ] **Analytics**: GA4 or Plausible events per PRD §9; funnel verification.

**Acceptance:** Events visible in analytics; leads delivered to email + backup sheet/CRM sink; thank‑you flow works.

## Phase 3 — QA, Perf, Accessibility, SEO, Launch (Prompts 11–15)
- [ ] **Playwright MCP**: Enable; write smoke + visual regression tests (Home, Services, Case Study, Contact).
- [ ] **Accessibility**: Axe checks; fix WCAG 2.2 AA issues (focus, labels, contrast).
- [ ] **Performance**: Meet budgets (LCP ≤1.8s, INP ≤200ms, CLS ≤0.1 on key pages); optimize images and JS.
- [ ] **SEO**: Meta, sitemap, robots, canonical; structured data (Organization, Service, CaseStudy, Breadcrumb).
- [ ] **Content polish**: Replace placeholders; verify copy tone; update OG images.
- [ ] **Launch checklist**: 404/redirects; env vars; uptime check; rollback plan; owner alert on form failures.

**Acceptance:** All checks green; CWV budgets met on mobile P75; tracking verified; leads tested end‑to‑end.

---

## Prompting Tips for Claude Code
- Use **unified diffs** for multi‑file edits; batch related changes.
- Tag files in prompts to keep tokens lean.
- When adding features, include **tests** and **AC references** from the PRD.
- After content changes, **update Playwright baselines** intentionally.
