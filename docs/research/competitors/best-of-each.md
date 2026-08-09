# Best of Each — Strategic Synthesis

## South India Shopping Mall — take
**The campaign merchandising system and the store network as trust.**

A heritage regional retailer can still behave like a campaign engine: a named
seasonal moment (Aashadam, Wedding Mahotsav) running across hero, banners and
editorial simultaneously; 39 branches surfaced twice with addresses and
Directions; a "new store opened" news slot; a helpline in the top bar. Physical
scale converted into digital trust is stronger than any badge.

**Take:** campaign cadence, named seasons, store network as a primary trust layer.
**Leave:** kilo-sale gimmickry, `Sale → /collections/all`, orphaned collections,
expired countdowns, theme-demo copy.

## The Chennai Shopping Mall — take
**Promotion rhythm and dual-format campaign art.**

Their offer is encoded in the data, not just the design — BOGO lives in product
titles, in dedicated collections, and in an explicit rule on the collection page,
so banner, grid and cart can never disagree. And every hero slide ships two
separately art-directed files (2160×720 desktop, 750×1100 mobile) that are
re-laid-out rather than cropped — the mobile frames are consistently the better
frames because product legibility is prioritised at thumb size.

**Take:** offer consistency through the data layer; mobile as a different edit,
not a different crop.
**Leave:** 190 collections with 80 products, dead nav links, non-clickable heroes,
an About page replaced by a gold-rate widget, empty Reviews.

## RS Brothers — take
**Taxonomy intelligence and product-naming discipline.**

Six intent-shaped saree doors (Designer / Fancy / Silk / Work / Handloom / Half)
keep 1,620 sarees browsable the way a floor manager sorts a shop, and one rigid
title template — colour + motif + technique + fabric + garment — applied across
3,597 SKUs makes scanning work even with almost no filters. Their regional
colour vocabulary (Onion, Rama, Firozi, Windsor Wine) is genuine trade language.

**Take:** intent-shaped category doors; one naming template applied consistently.
**Leave:** "New Releases" equal to the entire catalogue; a 70%-off hero with no
sale destination and no link; an empty About page; the four-background
shop-the-look collage.

## Chandana Brothers — take
**The family-fashion message, said out loud and repeatedly.**

Four family claims in four headline positions — "Fashion for the family",
"Style for Every Generation", "Family Fashion with Elegant Looks", "timeless
family style" — plus one genuinely smart hero idea: **deliberately
non-coordinated wardrobe**, where a mother in pattu, a father in denim and two
children in Western dress say "we dress all of you, however each of you dresses"
without a word of copy.

**Take:** repeat the family claim in headline positions; the non-coordination idea.
**Leave:** everything about the execution — rehosted Unsplash category tiles, a
Kids Wear card containing a teddy bear, a text-only heritage section with no
imagery, a "New Arrivals" slider three years stale, and a hero with no third
generation despite a 50-year claim.

---

## Ananthula — add

The four things none of them has:

1. **1951, told with photographs.** Heritage storytelling is the weakest column
   across all four (mean 1.4/5); two have literally empty About pages. Our
   archive-plate timeline with real family material is uncontested.

2. **Pattu as material storytelling, not a product grid.** Only one competitor
   frame in the entire study makes the textile the subject rather than the model.
   Our four-beat silk chapter — weave, drape, craft, occasion — has no equivalent
   anywhere in the market.

3. **A family chapter that demonstrates instead of claims.** Three generations,
   one real frame, real light, real eyelines, flagship silk on more than one
   person, and Kids as first-class navigation rather than 19 orphaned SKUs.

4. **Warangal identity and quiet luxury.** All four default to celebrity
   endorsement, palace composites and price shouting. A restrained editorial
   register anchored to one city and one date is the opposite move, and it is
   the only one that can't be outspent.

---

## The synthesis target

> **South Indian retail intelligence × premium editorial brand storytelling.**

Concretely, that means Ananthula should end up with:

| From the competitors | Expressed as Ananthula |
|---|---|
| Campaign cadence (SISM) | Switchable seasonal platform — `src/data/campaigns.ts` |
| Offer in the data layer (CSM) | `src/data/offers.ts`, percentage-ready, one surface only |
| Dual-format campaign art (CSM/RSB/SISM) | `position` + `mobilePosition` per media slot |
| Intent-shaped taxonomy (RSB) | Five Pattu doors, kept deliberately narrow |
| Store network as trust (SISM) | One store, structured for many; Call / WhatsApp / Directions |
| Family claim repeated (CB) | "Dressed together." + "One house. Every generation." |
| Non-coordinated family wardrobe (CB) | The Family Anchor asset brief |
| — | **1951 heritage, photographed** |
| — | **Pattu as material study** |
| — | **A wedding chapter that actually exists** |
| — | **Kids that a customer can act on** |

## The test

The finished site should not make anyone say *"this looks like South India
Shopping Mall."*

It should make them say: *"this feels as commercially complete as the strongest
South Indian shopping brands — but the identity is unmistakably Ananthula Kedari."*
