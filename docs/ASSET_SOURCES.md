# Asset Sources

## Current state — 100% generative, zero third-party assets

This demo ships **no photography at all**. Every visual surface is drawn at
render time by `src/components/textile/TextilePanel.tsx` from the specs in
`src/data/textiles.ts`:

- silk base: layered CSS gradients (sheen, drape folds, corner light)
- weave: inline SVG warp/weft thread pattern
- borders: South Indian textile-inspired geometry — temple-style *reku*
  triangles, *kattam*-style checks, pallu-style zari stripes, rudraksha
  diamonds, paisley buttas (heritage-inspired; not verified reproductions
  of any specific historical weave)
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

## How to add real photography — drop-in, zero code

Every photographic surface is a `MediaSlot` (see
`src/components/media/MediaSlot.tsx`) driven by the manifest in
`src/data/media.ts`. Each manifest entry lists the exact `/public` path,
alt text, recommended aspect/export size and the textile artwork used as
its fallback.

1. Export the photo as WebP at the listed size.
2. Save it at the exact path listed in `src/data/media.ts`
   (e.g. `public/images/hero/hero-pattu-woman.webp`).
3. Refresh — the slot cross-fades from textile artwork to the photograph.
   Missing files can never break a composition; the textile remains.
4. Record source / photographer / license for each file in this document.

`TextilePanel` remains part of the brand system (borders, dividers,
occasion tiles, fallbacks) — not just a placeholder.
