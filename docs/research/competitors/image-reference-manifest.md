# Image Reference Manifest

**COPYRIGHT — READ FIRST**

Every image recorded here is **third-party copyrighted material**, catalogued for
private design analysis only.

- `copyright_status`: `third-party-reference-only` (all entries)
- `allowed_in_production`: **`false`** (all entries)
- **Competitor images copied into `public/images/`: 0**
- **Competitor images hotlinked in the demo: 0**
- **Competitor images committed: 0**

Temporary analysis copies live at `/tmp/ananthula-competitor-research/` and are
disposable. These references informed **composition, lighting, wardrobe and crop
observations only**. Every Ananthula asset is original generated work.

Machine-readable twin: `image-reference-manifest.json` (14 schema-complete
records). This document is the readable summary of the ~59 images catalogued
across the four sites, focusing on the 14 that carry design lessons.

---

## Format observations across all four sites

| Site | Desktop hero ratio | Mobile hero ratio | Separate mobile art | Alt text on campaign art |
|---|---|---|---|---|
| SISM | 2:1 (1400×700 served) | 2:3 (800×1200) | Yes — 6 pairs | **`alt=""` on all 12** |
| CSM | 3:1 / 2.9:1 (2160×720, 2560×883) | 1:1.467 (750×1100) | Yes — 5 pairs | **`alt=""` on all 10** |
| RSB | 2:1 (3840×1920) | 2:3 (3840×5760) | Yes — 6 pairs | **`alt=""` on all** |
| CB | 1.13:1 (871×774 PNG) | none | No | **`alt="Premium Diamond Necklace"`** |

`inference` — **Three of four author genuinely separate mobile art and none of
them writes alt text.** The craft habit is worth copying; the accessibility
failure is universal and is free ground for us. Ananthula already has both:
`mobilePosition` per slot, and real alt text in `src/data/media.ts`.

Product-card ratios are inconsistent within the same rails on three of the four
sites (SISM: 1200×1524, 880×1184, 787×1000, 768×1024, 785×1000, 2011×2560;
RSB: four different CSS ratios). `inference` — one card ratio per grid is a
cheap, visible quality signal.

---

## The 14 catalogued references

### South India Shopping Mall

**1. `web-banner-01-…webp` — Kilo Sale hero** · 2:1 · *anti-pattern*
Woman hard-left, extruded 3-D gold "KILO SALE", `UPTO 66% OFF`, zero negative
space, flat cut-out lighting on a pure gradient. Mobile twin is a genuine
re-layout (logo top-right, headline restacked vertically).
**Avoid:** every word rasterised with empty alt; no breathing room anywhere.

**2. `silk-saree-banner-11-…webp` — Silk hero** · 2:1 · *validates our Pattu approach*
Two women in green-and-gold and purple-and-gold Kanchipurams, **pallu fanned
across the floor so the border is the hero, not the face**. Built courtyard set,
brass lamps, marigold. Vignetted dark-green left third holds the type.
**Take:** the pallu-fanning device; type gets its own empty third.

**3. `couples-banner-…webp` — Wedding couple hero** · 2:1 · *composition reference*
Couple tightly framed in the left third, right half deliberately empty with
hairline rules. Cleanest information hierarchy in the whole study.
**Take:** one subject block, one type block. **Avoid:** painted-canvas mandapam.

**4. `ethnic-wear-56-…webp` — Men's ethnic hero** · 2:1 · *menswear reference*
Two models flanking a pale-pink arch, generous centre negative space, soft warm
key. The most brand-grade frame on that site.
**Take:** menswear given real production value. **Avoid:** Nehru-jacket North-Indian default.

**5. `weddings-banner-1-…webp` — Wedding Mahotsav** · 2:1 · *campaign naming*
The one genuinely South Indian groom styling found anywhere: **cream silk kurta
with angavastram**. Named campaign with no page behind it.
**Take:** naming a season. **Avoid:** palace composite; celebrity re-use.

### The Chennai Shopping Mall

**6. `CSM-Jahnavi-2560x883-1.jpg` — Bridal swing hero** · 2.9:1 · *strongest bridal frame found*
Flower-garlanded swing, full temple jewellery set, colonnade, lily pond, swans.
Subject right third, logo in left negative space. Mobile variant is a **different
composition** — waist-up, jewellery and brocade legible at thumb size, logo removed.
**Take:** the mobile-prioritises-product-legibility principle.
**Avoid:** jewellery out-competing the weave; neoclassical colonnade.

**7. `aadisale-chennai-shoppingmall.jpg` — Aadi KG Sale** · 3:1 · *anti-pattern*
Model holding a **balance scale**, sarees on one pan, a 1 KG weight on the other.
Telugu offer copy, state footprint, zero negative space, not clickable.
**Take (principle only):** one instantly-legible mechanic beats a percentage.
**Avoid:** the value-retail register entirely.

**8. `2160x720_Vijayadevara.jpg` — Brand mood hero** · 3:1 · *negative-space reference*
Man in royal-blue silk kurta holding a gold kalash; **left half intentionally
empty bokeh with nothing placed in it**. Softest, most premium light on that site.
No copy, no offer, no logo, no link.
**Take:** a pure brand frame can hold a slot in a commercial carousel; the empty-half
composition is exactly what Ananthula's hero already does — *and we actually use the space.*

### RS Brothers

**9. `saree-banner-01-…webp` — Saree hero** · 2:1 · *lighting reference*
Mustard-yellow Kanchi silk with deep teal contrast border, temple archway,
marigold torans, brass diyas. **Visible cast shadows on plaster** — the most
photographic asset on that site.
**Take:** warm directional side key with real shadow; contrast-border colourways are memorable.

**10. `men-banner-4-…webp` — Groom hero** · 2.13:1 · *strongest groom frame found*
Two ivory tone-on-tone sherwanis, no turban, no garland; Mughal-arch panelling,
brass lanterns; pair left, 40% of frame for copy.
**Take:** ivory groom palette separates cleanly from bridal arakku; restraint.
**Avoid:** sherwani + Mughal arch — the North Indian default we must not inherit.

**11. `lehenga-banner-…webp` + `lehenga-mobile-…webp`** · 2:1 / 2:3 · *mobile method reference*
The clearest proof of true re-art-direction in the study: **the mobile asset drops
one of the two models entirely** rather than cropping the pair.
**Take:** mobile is a different edit, not a different crop.

### Chandana Brothers

**12. `banner.png` — Family hero** · 1.13:1 · **primary Family Wardrobe reference**
Family of four in a connected hand-holding chain; **deliberately non-coordinated
wardrobe** — mother in emerald Kanjeevaram pattu, father in denim, son in a neon
hoodie, daughter in a Western floral dress. Both parents carry branded bags.
**Take:** the non-coordination idea — one frame that says "we dress all of you,
however each of you dresses", with no copy. Best strategic idea in the study.
**Avoid, in detail:** reads as composited/AI — hard cut edges with no cast shadow,
no ground perspective, eyelines landing on nothing, four identical simultaneous
smiles, logo artwork flat on the bag folds. **No grandparent**, despite the brand
claiming "50+ Years" and "Style for Every Generation". Only one of four wears the
flagship category. Alt text reads `"Premium Diamond Necklace"`.

**13. `ethnic-wear-boys-clothing.webp` — Kids Kurta** · 3:4, rendered 200px · *anti-pattern*
Single boy, centred, symmetrical, arms straight down, closed-mouth smile to lens.
A garment record with a child as mannequin; everything interesting is behind him.
The backdrop is **pixel-identical** to `pattu-sets.webp` — same synthetic set,
human swapped.
**Avoid:** a lone centred child reads as inventory, not family.

**14. `photo-1622290291468-….jpeg` — "Kids Wear" category tile** · 4:3 · *anti-pattern*
A Western nursery flat-lay: blank white infant tee, teddy bear, pompom beanie,
toy camera, alphabet blocks, on candy pink. **No child. No Indian product.**
Filename is a verbatim Unsplash photo ID, rehosted.
**Avoid:** this is the credibility collapse we win against. Six of their category
tiles are rehosted Unsplash stock.

---

## What this means for Ananthula's asset plan

`inference`, carried into `original-asset-prompts.md`:

1. **The family anchor is the highest-value original asset available.** The only
   true family image in the entire competitive set is synthetic, has no third
   generation, and puts the flagship product on one person out of four.
2. **Real environment and real shadow are the differentiator.** Two of four rely
   on cut-outs on gradients; one rehosts Unsplash. A genuinely lit frame in a
   real courtyard beats all of them.
3. **Kids is wide open.** Not one credible child image exists across four sites.
4. **Our existing craft already exceeds theirs** on alt text, fallback states,
   single card ratio, and campaign-copy-as-live-text. Those are quiet wins worth
   keeping.
