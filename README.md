# Ananthula Kedari — Digital Flagship Demo

**Dressing Generations Since 1951.** A client-pitch demo for the Ananthula
Kedari Family Shopping Mall, Warangal — built as one continuous editorial
experience ("The Digital Weave") rather than an ecommerce template.

## Stack

- Next.js (App Router) · React · TypeScript strict
- Tailwind CSS 4
- GSAP + ScrollTrigger (choreographed moments) · Lenis (desktop smoothing,
  performance/motion-gated) · CSS for micro-interactions
- Zero image assets: every visual surface is generative silk/textile artwork
  (`src/components/textile/TextilePanel.tsx`) — see `docs/ASSET_SOURCES.md`

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

```
src/data/        all copy, taxonomy, campaigns, store facts — the only files
                 the owner needs to edit (see docs/CONTENT_TO_VERIFY.md)
src/components/  home/ (14 homepage chapters) · layout/ · textile/ · motion/ · ui/
src/app/         / /legacy /collections/[slug] /new-arrivals /stores
docs/            ASSET_SOURCES.md · CONTENT_TO_VERIFY.md
scripts/         visual QA (Playwright screenshots)
```

## Demo honesty rules

No fabricated founders, milestones, prices, review quotes or awards. All
demo-written copy is flagged in `docs/CONTENT_TO_VERIFY.md` for owner
sign-off before production.
