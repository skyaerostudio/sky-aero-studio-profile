# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for **SkyAero Studio** - an AI-first studio that ships investor-ready prototypes in 2-4 weeks. The project is a public-facing portfolio and lead-generation website designed to convert visitors into qualified leads through clear service tiers and proven case studies.

## Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build production bundle (with Turbopack)
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture & Stack

- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono (via `next/font/google`)
- **Build Tool**: Turbopack (enabled in dev and build)
- **Linting**: ESLint with Next.js recommended configs
- **Path Aliases**: `@/*` maps to `./src/*`

## Project Structure

```
src/app/              # Next.js App Router pages
├── layout.tsx        # Root layout with fonts and global styles
├── page.tsx          # Home page (currently Next.js starter template)
├── globals.css       # Global Tailwind CSS styles
└── favicon.ico

context/              # Project documentation and requirements
├── design-principles.md  # S-tier UI design system and guidelines
├── prd.md               # Product Requirements Document
└── tasks.md             # Development task breakdown and prompting tips

public/               # Static assets
├── *.svg            # Icons and logos
```

## Content Model & CMS Integration

The project is designed to use a headless CMS (Sanity recommended) with these content types:

- **ServiceTier**: Service packages with inclusions, pricing, delivery times
- **CaseStudy**: Client projects with before/after metrics, testimonials  
- **Testimonial**: Client quotes and attribution
- **Page**: Static pages (About, Legal)
- **SiteSettings**: Global site configuration

## Key Features to Implement

### Pages & Routes
- `/` - Home with hero, services overview, featured case studies
- `/services` - Service tier comparison with pricing
- `/services/[slug]` - Individual service details
- `/case-studies` - Case study listing  
- `/case-studies/[slug]` - Individual case studies
- `/contact` - Lead capture form and calendar booking
- `/about`, `/privacy`, `/terms` - Static pages

### Conversion Features
- **Lead Forms**: Name, email, company, project type, budget, message
- **Calendar Booking**: "Book Intro Call" CTA integration
- **WhatsApp Quick Chat**: Deep link for instant contact
- **Multi-tier Services**: Simple Prototype, Moderate Build, Full App

### Analytics & Tracking
- GA4 or privacy-friendly alternative (Plausible)
- Conversion funnel tracking
- Lead attribution and routing

## Performance & Quality Standards

### Core Web Vitals Targets (Mobile P75)
- **LCP**: ≤ 1.8s
- **INP**: ≤ 200ms  
- **CLS**: ≤ 0.1

### Accessibility
- WCAG 2.2 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus management and visible focus rings

### SEO Requirements
- Meta tags and Open Graph data
- Structured data (Organization, Service, CaseStudy)
- XML sitemap and robots.txt
- Clean URL structure

## Testing Strategy

### Playwright MCP Integration
The design principles document specifically mentions using Playwright MCP for:
- Visual regression testing with baseline screenshots
- Smoke tests for key user flows
- Accessibility scanning with axe
- Performance assertions

### Test Coverage
- Home hero and primary CTAs
- Service tier grid and interactions  
- Case study detail pages
- Contact form validation and submission
- Mobile responsiveness

## Development Workflow

### Phase-based Approach
1. **Phase 1**: Shell, content model, page scaffolding (2 weeks)
2. **Phase 2**: Content integration, conversions, analytics (2 weeks)  
3. **Phase 3**: QA, performance optimization, launch prep (1 week)

### Code Quality
- TypeScript strict mode enabled
- ESLint with Next.js recommended rules
- Component-driven architecture following existing patterns
- Responsive design with mobile-first approach

## Content Guidelines

### Brand Voice
- Promise: "AI-first studio that ships investor-ready prototypes in 2-4 weeks"
- Tone: Crisp, expert, optimistic; avoid buzzword soup
- Copy: Short headlines (≤8 words), benefit-led subheads, one CTA per section

### Visual System  
- 12-column fluid grid with 8px spacing scale
- Modern sans typography (Inter recommended)
- Neutral base with single bold accent for CTAs
- WCAG 2.2 AA contrast compliance

## Important Context Files

- `context/design-principles.md` - Complete design system and UI guidelines
- `context/prd.md` - Detailed product requirements and acceptance criteria
- `context/tasks.md` - Development task breakdown and prompting strategies

## Lead Generation Focus

This is fundamentally a lead generation website. Every feature should optimize for:
- Clear value proposition communication
- Frictionless contact and booking flows  
- Social proof through case studies and testimonials
- Trust signals and credibility indicators