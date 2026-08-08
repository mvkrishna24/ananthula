# Asset Sources

## Current state — 100% generative, zero third-party assets

This demo ships **no photography at all**. Every visual surface is drawn at
render time by `src/components/textile/TextilePanel.tsx` from the specs in
`src/data/textiles.ts`:

- silk base: layered CSS gradients (sheen, drape folds, corner light)
- weave: inline SVG warp/weft thread pattern
- borders: traditional Kanchipuram motifs — temple *reku* triangles,
  *kattam* checks, pallu zari stripes, rudraksha diamonds, paisley buttas
- grain: one shared data-URI SVG turbulence tile

Consequences:

- zero image network requests, zero CLS, no licensing exposure
- nothing to attribute; nothing to replace legally
- the entire art direction recolours from one file

### Why (build-environment note)

The build sandbox's network policy blocked every stock-photo CDN
(Unsplash, Pexels, Wikimedia). Rather than ship broken frames or
misrepresent stock people as Ananthula customers, the demo leans into an
original textile-art direction. The brief's curated Unsplash list (see
`ANANTHULA_KEDARI_DEMO_MASTER_BRIEF.md` §11) remains the approved source
for a photography pass when built in an unrestricted environment.

## How to add real photography

1. Save optimized AVIF/WebP files under `public/images/` with semantic
   names (`hero-bridal-pattu.avif`, `store-facade-evening.avif`, …).
2. Record source / photographer / license for each file in this document.
3. Replace the relevant `<TextilePanel …>` with `next/image` — every slot
   is a single component swap; layout, scrims and captions already exist.
4. Keep `TextilePanel` for borders, dividers and campaign backgrounds —
   it is part of the brand system, not just a fallback.
