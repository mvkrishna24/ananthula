# ANANTHULA KEDARI — Campaign Image Generation Pack

Ten priority assets, one campaign. Generate (or brief a photographer with)
these in order; save each result at the **exact path**, then refresh the
site (`npm run dev`) or rebuild (`npm run build`) — every slot integrates
automatically via `src/data/media.ts`, which also holds the per-asset
`object-position` crop values to tune after inspecting real output.

**Generate first:** `hero-pattu-woman.webp` (asset 01). It is the single
most important image on the website and sets the campaign look every other
image must match.

---

## THE CAMPAIGN ART DIRECTION (prepend to every prompt)

> Premium editorial fashion campaign for a South Indian heritage family
> fashion house in Warangal, Telangana. One unified campaign look across
> all images: warm cinematic natural light with soft directional shadows,
> rich deep blacks, controlled contrast, realistic warm Indian skin tones,
> deep textile colours (arakku red, emerald, peacock, turmeric, ivory),
> muted antique gold — never bright metallic yellow. Real silk behaviour:
> visible weave, natural sheen, believable folds. Restrained, quiet
> environments — deep charcoal, warm plaster, wooden textures. Sophisticated
> magazine photography, 35–85mm lens feel, shallow-to-moderate depth of
> field, subtle film grain.
>
> AVOID (all images): Rajasthan palace clichés, North Indian royal-wedding
> styling, Bollywood poster look, oversaturated wedding-card colours, fake
> gold particles or glitter, plastic AI skin, extra fingers, warped
> jewellery, visible text, watermarks, logos, white-background ecommerce
> catalogue look, harsh flash, HDR halos, western luxury-brand styling.

---

## 01 · HERO — generate this one FIRST

**File:** `public/images/hero/hero-pattu-woman.webp`
**Aspect:** 3:2 landscape, export ≥2400×1600

**Prompt:**
[CAMPAIGN ART DIRECTION] + Graceful Indian woman in her late twenties
standing in an elegant, quiet interior, wearing an extraordinary deep
arakku-red Kanchipuram-style pattu silk saree with a broad antique-gold
zari border and subtle temple-style triangle motifs. She stands in the
RIGHT 55% of the frame, three-quarter view, calm confident expression,
minimal gold jewellery, hair in a low bun with a small string of jasmine.
The LEFT 40% of the frame is deep, softly-shadowed negative space — a dark
charcoal/warm-plaster wall falling into shadow, completely free of objects
and highlights, prepared for large typography. Light enters from the upper
right, raking across the silk so the zari border and pallu catch it.
Landscape 3:2.

**Crop notes:** manifest position `68% 30%` desktop, `74% 22%` mobile —
re-check her face and the zari border are visible at 390px wide after
generation; the left third must stay quiet under the wordmark.

---

## 02 · WEDDING — BRIDE

**File:** `public/images/wedding/wedding-bride.webp`
**Aspect:** 3:4 portrait, export ≥1400×1867

**Prompt:**
[CAMPAIGN ART DIRECTION] + Elegant South Indian bride, seated, in a rich
arakku-red bridal pattu silk saree with heavy antique-gold zari, refined
temple-style gold jewellery (necklace, jhumkas, maang tikka — restrained,
not encrusted), jasmine and a modest braid, natural realistic skin with
believable texture, eyes softly lowered or looking just past camera, calm
emotional stillness rather than a posed smile. Deep warm charcoal
background with a single warm key light from the left. Waist-up portrait,
face in the upper third of frame. Portrait 3:4.

---

## 03 · WEDDING — GROOM

**File:** `public/images/wedding/wedding-groom.webp`
**Aspect:** 3:4 portrait, export ≥1400×1867

**Prompt:**
[CAMPAIGN ART DIRECTION] + Premium South Indian groom in an ivory raw-silk
kurta with a fine antique-gold-bordered angavastram over one shoulder,
quiet confident expression, natural grooming, standing three-quarter view.
Same deep warm charcoal environment and warm left key light as the bride
portrait — the two images must read as one wedding, same evening, same
photographer. Waist-up, face in the upper third. Portrait 3:4.

---

## 04 · WEDDING — FAMILY

**File:** `public/images/wedding/family-wedding.webp`
**Aspect:** 3:4 portrait, export ≥1400×1867

**Prompt:**
[CAMPAIGN ART DIRECTION] + Multi-generational South Indian family of five
at a wedding — grandmother in a muted emerald pattu saree, parents in
festive silk, two children in traditional festive wear — gathered close,
mid-laugh and genuinely warm, natural candid expressions, believable ages
and proportions. Same deep warm interior and cinematic warm light as the
bride and groom portraits. Group fills the middle of frame with headroom.
Portrait 3:4. Avoid stiff corporate-stock posing entirely.

---

## 05 · PATTU RAIL — KANCHIPURAM CHAPTER

**File:** `public/images/pattu/pattu-kanchipuram.webp`
**Aspect:** 3:4 portrait, export ≥1200×1600

**Prompt:**
[CAMPAIGN ART DIRECTION] + The textile is the hero: deep arakku-red
Kanchipuram-style pattu silk draped in tall sculptural folds, broad
antique-gold zari border with temple-style triangles running diagonally
through frame, a woman's hands with simple gold bangles gently lifting one
fold, raking warm light revealing weave texture and the metallic thread.
Dark neutral ground. No face. Portrait 3:4, border detail in the middle
of frame.

---

## 06 · PATTU COLLECTION HERO — SILK MACRO

**File:** `public/images/pattu/kanchi-silk-macro.webp`
**Aspect:** 16:9 landscape, export ≥2400×1350

**Prompt:**
[CAMPAIGN ART DIRECTION] + Extreme macro photograph of premium South
Indian pattu silk: individual warp and weft threads visible, deep wine
body meeting a muted antique-gold zari border, gentle hills and valleys
of fabric, soft raking light travelling across the weave from the left,
museum-grade textile photography, shallow depth of field with the border
in crisp focus. Dark neutral background at the edges. Landscape 16:9.
No hands, no glitter, no CGI sheen.

---

## 07 · WOMEN

**File:** `public/images/women/women-festive.webp`
**Aspect:** 3:4 portrait, export ≥1400×1867

**Prompt:**
[CAMPAIGN ART DIRECTION] + Contemporary South Indian woman in her
thirties in an onion-pink soft-silk saree with a slim gold border, modern
blouse, minimal jewellery, relaxed confident stance with slight movement
in the pallu, warm natural window light, quiet warm-plaster interior.
Editorial grace — tradition styled for today, not a catalogue pose.
Waist-up or three-quarter, face upper third. Portrait 3:4.

---

## 08 · MEN

**File:** `public/images/men/men-ethnic.webp`
**Aspect:** 3:4 portrait, export ≥1400×1867

**Prompt:**
[CAMPAIGN ART DIRECTION] + South Indian man in his thirties in a
charcoal-black raw-silk kurta with subtle woven texture and a fine
antique-gold-edged stole, arms relaxed, direct calm gaze, deep charcoal
background with a single warm rim light tracing the silk. Sophisticated
menswear editorial — celebration tailoring, unmistakably Indian, no
western suit. Waist-up, face upper third. Portrait 3:4.

---

## 09 · KIDS

**File:** `public/images/kids/kids-festive.webp`
**Aspect:** 3:4 portrait, export ≥1400×1867

**Prompt:**
[CAMPAIGN ART DIRECTION] + Two South Indian children — a girl (~7) in a
sandalwood-and-rose pattu pavadai and a boy (~5) in an ivory kurta with a
small gold-bordered dhoti — caught mid-laugh in genuine play, slight
motion in fabric, warm festive interior softly out of focus behind them
with a few warm lamp glows. Natural joyful energy, believable child
proportions, premium editorial finish — never pageant styling or
catalogue posing. Portrait 3:4, faces above centre.

---

## 10 · STORE INTERIOR

**File:** `public/images/stores/store-interior.webp`
**Aspect:** 3:4 portrait, export ≥1200×1600

**Prompt:**
[CAMPAIGN ART DIRECTION] + Premium South Indian silk-saree showroom
interior: tall wooden shelves stacked with neatly folded pattu sarees in
deep reds, emeralds, peacock blues and turmeric golds, one saree partially
unfolded across a counter in the foreground catching warm light, soft
tungsten-warm illumination, strong perspective depth down the shelf line,
immaculate merchandising. Optional: a shop associate's hands presenting
fabric. Portrait 3:4. Aspirational, warm, inviting — the customer should
want to walk in.

---

## AFTER GENERATION — THE INTEGRATION CHECKLIST

1. Export as WebP (quality ~80) at the listed size; save to the exact path.
2. Refresh dev (or `npm run build` for production) — slots pick up files
   automatically.
3. **Art-direct each crop:** view desktop + mobile, then adjust that
   slot's `position` / `mobilePosition` in `src/data/media.ts`. Check:
   faces never cropped, zari/borders visible, text never on a face,
   hero left-third quiet.
4. Cohesion pass: all ten side by side — same warmth, same blacks, same
   world. Regenerate any outlier.
5. Note each image's origin in `docs/ASSET_SOURCES.md` (AI concept imagery
   must be replaced by real Ananthula photography before production, and
   must never be presented as archival/historical fact — the heritage
   archive slots take ONLY genuine family material).
