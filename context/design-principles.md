# SkyAero Studio — Design Principles (S‑Tier UI)

## Brand & Voice
- **Promise:** “AI‑first studio that ships investor‑ready prototypes in 2–4 weeks.”
- **Tone:** crisp, expert, optimistic; avoid buzzword soup.
- **Copy rules:** short headlines (≤8 words), benefit‑led subheads, one CTA per section.

## Visual System
- **Layout:** 12‑column fluid grid; 8px spacing scale; generous white space.
- **Typography:** Modern sans (e.g., Inter). Headings: 800/700; body: 400/500; line‑length 60–80ch.
- **Color:** Neutral base with a single bold accent for CTAs; ensure WCAG 2.2 AA contrast.
- **Imagery:** Real product UI, annotated; avoid generic stock. Prefer real metrics callouts.

## Components (baseline)
- Header (sticky on mobile), Footer, Section header, Tier card, Metric pill, Testimonial, Case study card, CTA button (primary/secondary), Input + validation states, Toast/Alert, Empty state.
- **States:** default, hover, focus, disabled, loading, error/success — all explicitly designed.

## Motion & Micro‑interactions
- Use motion to communicate hierarchy (200–300ms, ease‑out). Avoid parallax heavy effects.
- Subtle hover lifts on cards (shadow/scale ≤ 1.02). Reduce motion for users with `prefers-reduced-motion`.

## Accessibility
- WCAG 2.2 AA; focus rings visible; skip‑to‑content; labels and descriptions for inputs; landmark roles; test with keyboard and screen reader.

## Performance
- Above‑the‑fold text first; hero images responsive, lazy‑loaded below the fold; prefetch critical routes.
- Icon sets as SVG; avoid heavy third‑party scripts; ship only what’s used.

## Page‑Type Guidelines
### Home (Hero)
- Headline: outcome + time (“AI prototypes in 2–4 weeks”). Subhead with proof (metrics/testimonials). One dominant CTA.
### Services (Tiers)
- 3 cards: **Simple Prototype**, **Moderate Build**, **Full App**. Each shows: target use, inclusions (5–8 bullets), delivery time, “from” price, FAQ, CTA.
### Case Study
- Narrative: Problem → Approach → Before/After metrics → Screens → Testimonial → CTA.
- Metric callouts (big numbers) above the fold; include exact baseline/after numbers.

## Content Style
- Use specific nouns (stack, models, datasets). Replace adjectives with proof and numbers.
- Case study “before/after” must include period and measurement units.

---

## Playwright MCP — How to Use (Claude Code)
> Goal: lock in **visual quality** and **UX flows** via automated checks while you iterate quickly.

1) **Enable Playwright MCP in Claude Code**
- In Claude Code settings, add the **Playwright MCP server** (per official docs).
- Confirm availability via the MCP panel: you should see Playwright tools listed.

2) **Scaffold tests**
- Create a `tests/e2e/` folder with scenarios for **Home**, **Services (tiers)**, **Case Study**, and **Contact/Estimate**.
- Add smoke tests: page loads, nav works, key CTAs visible and clickable, form validates.

3) **Visual Regression (baseline)**
- Capture baseline screenshots for: Home hero, Services tier grid, Case study header + metrics, Contact form.
- Compare on each run; fail on diffs above a small threshold. Keep baselines under version control.

4) **Accessibility & Perf checks**
- Add an a11y scan (axe) for key pages; report violations.
- Add basic performance assertions (e.g., max total JS size, image weight for hero).

5) **Key example (pseudo)**
```ts
// tests/e2e/home.spec.ts
test('home renders hero + primary CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /AI.*2–4 weeks/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /Book Intro/i })).toBeVisible();
  // visual baseline
  expect(await page.screenshot()).toMatchSnapshot('home-hero.png');
});
```

6) **CI Integration**
- Run tests on PR; upload diffs as artifacts; require green checks before merge.
- Keep thresholds strict but reasonable; update baselines only after intentional design changes.

> If MCP isn’t available in your environment, fall back to standard Playwright CLI with the same test suite.
