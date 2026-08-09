# Competitor Intelligence — South Indian Family Fashion Retail

Research package for **Ananthula Kedari Family Shopping Mall** (Warangal, since 1951).
Crawled **9 August 2026**. Branch `claude/ananthula-kedari-demo-wdh1nu`.

## Purpose

Extract retail intelligence — category architecture, campaign cadence, promotion
mechanics, family positioning — from four leading South Indian textile retailers,
and convert it into **original** direction for Ananthula's unbuilt chapters
(Family Wardrobe, Wedding, Festivals, New Arrivals, Offers, Store).

This is adaptation intelligence, **not** a template to clone. Hero, Heritage and
Pattu are locked and were not evaluated for change.

## Sites studied

| Site | Domain | Platform | Live products | Primary value to us |
|---|---|---|---|---|
| South India Shopping Mall | southindiaeshop.com | Shopify | 3,573 | Campaign merchandising, store network |
| The Chennai Shopping Mall | thechennaishoppingmall.com | Shopify | 80 | Promotion rhythm, mobile art direction |
| RS Brothers | rsbrothers.net | Shopify | 3,597 | Taxonomy + product-naming vocabulary |
| Chandana Brothers | chandanabrothers.com | Static HTML | 0 (brochure) | Family-fashion positioning language |

## Files

| File | Contents |
|---|---|
| `source-log.md` | What was crawled, when, robots/access notes |
| `competitor-matrix.md` | 15-dimension 0–5 scoring, all four sites, with evidence |
| `section-inventory.md` | Homepage block matrix + full homepage section orders |
| `content-patterns.md` | Headings, category names, CTA and promo language observations |
| `campaign-system.md` | Proposed Ananthula campaign data architecture |
| `wedding-reference.md` | Bride / groom / family findings for the Wedding chapter |
| `image-reference-manifest.md` | Human-readable image reference notes |
| `image-reference-manifest.json` | Machine-readable image references (schema-complete) |
| `original-asset-prompts.md` | Original Ananthula asset briefs derived from the lessons |
| `best-of-each.md` | Strategic synthesis — what to take from whom |

## Copyright rule (non-negotiable)

Every competitor image in this package is **`third-party-reference-only`** with
`allowed_in_production: false`. No competitor asset was copied into
`public/images/`, hotlinked, or committed. Temporary analysis copies live outside
the repo at `/tmp/ananthula-competitor-research/` and are disposable.

Competitor imagery informed **composition, lighting, wardrobe and crop
observations only**. Every Ananthula asset is generated original work.

## Provenance tags

Claims in this package carry one of four labels; they are never mixed:

- **`source-derived`** — observed directly on a competitor site on 2026-08-09
- **`inference`** — a design/commercial judgement drawn from observations
- **`ananthula-verified`** — confirmed Ananthula fact
- **`demo-concept`** — invented for the demo, not owner-approved

## Headline finding

All four competitors **claim** family fashion. None **demonstrates** it.

- South India Shopping Mall: 19 kids products, no Kids nav entry, no child in any campaign image
- Chennai Shopping Mall: ~45 kids collections, all empty, no child in any hero
- RS Brothers: "THE COMPLETE FAMILY SHOPPING DESTINATION" — 19 kids SKUs, Kids absent from nav
- Chandana Brothers: says "family" four times in headings; hero family has no grandparent, Kids Wear tile is a teddy bear

Three of the four also have **no wedding destination at all**, and three have
**no heritage story** (two have literally empty About pages).

Ananthula's opening is therefore unusually clean: an authentically photographed
multi-generation family, a real wedding chapter, and a 1951 heritage story are
each uncontested by the category leaders.
