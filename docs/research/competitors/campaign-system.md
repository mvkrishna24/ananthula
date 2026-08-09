# Campaign System Architecture

Architecture research only. **No CMS or commerce engine is proposed for the
current demo.** This documents how competitors run campaigns and what Ananthula's
data layer would need to match that flexibility in production.

---

## How competitors run campaigns (`source-derived`)

| Mechanism | SISM | CSM | RSB | CB |
|---|---|---|---|---|
| Named seasonal campaign | Aashadam Kilo Sale · Wedding Mahotsav | Aadi KG Sale · Aadi Golden Offer | Aashadam Challenge Kg Sale | — |
| Discount unit | Rupee-off badge (`Rs. 2,158.00 OFF`) | Percent flag (`Save 50%`) + BOGO | Percent badge (`–30%`) | — |
| Crossed price | Yes | Yes | Yes (grids only) | — |
| BOGO | — | **Core mechanic**, in titles + ~70 collections | — | — |
| Price-anchor collections | `Fancy Sarees - Under 4995` | `Sarees under ₹999/-` | — | — |
| Weight selling | `KILO SALE`, ₹4000/kg | `1700 KG Sale` | `Kg Sale` | — |
| Coupon code | — | — | `NEW10` in announcement bar | — |
| Countdown | Yes (**expired at crawl**) | — | — | — |
| Dedicated sale destination | **Fake** (`Sale → /collections/all`) | Yes (real BOGO collection) | **None** | — |
| Campaign shells for future seasons | — | Yes (Diwali/Navratri/Ramadan, all empty) | — | — |

### The three failure modes to design against (`inference`)

1. **Promise without a destination.** RSB advertises "Upto 70% OFF" on an unlinked hero with no sale collection in the entire taxonomy. CSM's 69%-off hero is likewise not a link. → *Every campaign object must carry a resolvable `href`, and the build should fail loudly if it doesn't.*
2. **Label without curation.** "Sale" pointing at all 3,573 products; "New Releases" equal to the full catalogue. → *A campaign must reference a bounded set, never "everything".*
3. **Shell without content.** Empty Diwali/Navratri/Ramadan collections; an expired countdown still rendering; a "New Arrivals" slider three years stale. → *A campaign needs an explicit active window and must disappear cleanly when it closes.*

---

## Proposed Ananthula campaign model

Extends the shape in the brief with the three guards above. **Architecture only —
not implemented.**

```ts
type Campaign = {
  id: string
  title: string
  eyebrow?: string
  description?: string

  /** Media manifest slot key — inherits textile fallback + per-breakpoint crop. */
  imageSlot: MediaSlotName
  /** Optional direct overrides if a campaign ships its own art. */
  desktopImage?: string
  mobileImage?: string

  /** REQUIRED and must resolve. No campaign without a destination. */
  href: string

  /** Active window. Absent = always on. Past endAt = campaign self-retires. */
  startAt?: string   // ISO date
  endAt?: string     // ISO date

  /** Commercial hook — phrase OR percentage, never invented without owner sign-off. */
  badge?: string          // e.g. "Festive privileges" | "Up to 40% off"
  badgeNote?: string      // e.g. "In store now · details at the counter"

  theme?: "light" | "dark" | "wine" | "festival"
  priority: number
  enabled: boolean

  /** Provenance guard — demo copy can never silently become a live claim. */
  status: "demo-concept" | "owner-approved"
}
```

### Design notes

- **`imageSlot` rather than a raw URL** — reuses the existing `MediaSlot`
  architecture, so every campaign inherits the textile fallback and the
  per-breakpoint crop values. A campaign whose photography hasn't arrived
  degrades to silk artwork instead of a broken frame. None of the four
  competitors has any fallback state.
- **`status`** has no competitor equivalent and exists because of our own
  honesty rules — a `demo-concept` campaign should be visually flagged in
  internal builds and must never ship as an owner claim.
- **`endAt`** directly answers SISM's expired countdown and CSM's empty seasonal
  shells: an expired campaign returns nothing rather than rendering zeros.
- **No BOGO / kilo / countdown primitives.** `inference` — these are value-retail
  mechanics that would undercut the editorial position. If the owner runs them
  in store, they belong in the offer band's copy, not in the design system.

### What already exists in the repo

`ananthula-verified` — the demo already implements a reduced version:

- `src/data/campaigns.ts` — six switchable seasonal campaigns (Sankranti, Ugadi, Wedding Season, Dasara, Diwali, Eid), each with `slug`, `eyebrow`, `title`, `note`, `media`, `accent`, `ctaLabel`, `ctaHref`
- `src/data/offers.ts` — one refined offer with `highlight` / `highlightNote`, percentage-ready without inventing a number
- `src/data/media.ts` — the slot layer the model above would reference

The gap to production is `startAt`/`endAt`, `priority`/`enabled`, and `status`.

### Telangana calendar opportunity

`inference` — all three Shopify competitors anchor to **Aadi / Ashada masam**.
None of the four uses **Bathukamma** or **Bonalu**, which are specifically
Telangana festivals and directly relevant to Warangal. Ananthula's campaign array
should carry them; that is a regional moment the Andhra-centric chains are
leaving open.

`demo-concept` — proposed additions, owner to confirm which the store actually
merchandises: Bathukamma, Bonalu, Varalakshmi Vratam, plus a store-anniversary
moment tied to 1951.
