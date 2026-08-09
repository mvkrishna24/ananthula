# Section Inventory

Homepage block patterns across the four sites, verified 2026-08-09.
No cell is filled by assumption.

## Pattern matrix

| Pattern | SISM | CSM | RSB | CB | Ananthula use |
|---|---|---|---|---|---|
| Cinematic / banner hero | Yes (6 slides) | Yes (5 slides) | Yes (6 slides) | Yes (static) | **Locked** — single editorial frame, not a carousel |
| Separate mobile hero art | Yes (6 pairs) | Yes (5 pairs) | Yes (6 pairs) | No | **Already have** — `mobilePosition` per slot |
| Hero links to a destination | Partial (4/6) | **No (0/5)** | Partial (4/6) | n/a | Yes — every CTA resolves |
| Women entry in nav | Yes | Dead `href="#"` | Yes | Unclickable tile | Yes — real route |
| Men entry in nav | Yes | Dead `href="#"` | Yes | Unclickable tile | Yes — real route |
| Kids entry in nav | **No** | Dead `href="#"` | **No (footer only)** | Unclickable tile | **Yes — first-class** |
| Pattu / Silk destination | Orphaned (87 items, unlinked) | Empty collections | **None** | 200px thumbnail | **Locked** — full editorial chapter |
| Wedding storytelling | Banner + named campaign, no page | Photography only, empty collections | Imagery only, no collection | 3 mentions in body copy | **Dedicated chapter** |
| New arrivals | Rail (but "new" = all 3,573) | `Latest Collection` | "New Releases" = all 3,597 | 12 items from Apr 2023 | Curated, genuinely dated |
| Sale / offers | `Sale → /collections/all` | Strong, coherent BOGO system | **No sale collection** | None | One refined campaign band |
| Festival / seasonal | Aashadam live + blog | Aadi live, other shells empty | Aashadam Kg Sale | None | Switchable campaign platform |
| Category tile grid | Yes (10 tiles) | No | Yes (4 tiles) | Yes (6 + 16 tiles) | Occasion grid (asymmetric) |
| Store locator | Yes (39, twice) | **No** | Yes (18) | Yes (6) | Yes (1, structured for more) |
| Trust / heritage block | About page prose | **Empty About** | **Empty About** | Text-only, no imagery | **Locked** — photographed archive |
| Testimonials / reviews | 9 named quotes | Empty `<h1>Reviews</h1>` | None rendered | None | Review *themes*, no fake quotes |
| Blog / inspiration | Yes (12 posts, stale) | No | No | No | Optional, later |
| Social / video wall | 8 autoplay reels | Instafeed + YouTube card | 4 UGC tiles | 4 autoplay MP4s | Reel strip (frames pending) |
| Gold-rate ticker | Yes | Yes (as About page) | Yes | No | **No** — not our business |
| Celebrity endorsement | Yes (×2 banners) | Yes (3 of 5 slides) | Yes (couple) | No | **No** — heritage is our proof |
| WhatsApp conversion | Yes | Chat widget | No | **Entire funnel** | Yes — persistent mobile bar |
| Countdown / urgency | Yes (**expired at crawl**) | None | None | None | **No** |

---

## Full homepage section orders (`source-derived`)

### South India Shopping Mall — 23 blocks
1. Utility bar (helpline, Gold Scheme, live gold/silver rate ticker)
2. Header + mega-menu
3. Hero slideshow (6 slides, dual-format, type baked into image)
4. Promotional bar (Women/Men tiles, "New Store Opened", video tile)
5. Category tile grid — `GREAT BUYS ON A BUDGET` (10 tiles)
6. Product rail — `FRESH ADDITIONS for Women`
7. Product rail — `Discover Stylish Products`
8. Three-box editorial grid — `EXCLUSIVE FINDS`
9. Product rail — `CHILL OUT DEALS for Men`
10. Countdown deal block — `Limited-time Savings on Hot Items`
11. Marquee strip — saree categories
12. Marquee strip — menswear categories
13. Image-with-text — `Fashion Pieces Designed for Every Occasion`
14. Scroll-revealed text block
15. Shop-the-look banner
16. Blog rail — `INSIGHT & INSPIRATION`
17. Testimonials — `HAPPY CUSTOMERS` (9)
18. Two-up banners — celebrity + `Wedding Mahotsav`
19. `OUR STORES` heading
20. Store locator (39 branches + map)
21. Social video wall — `STAY CONNECTED WITH STYLE` (8 reels)
22. Footer
23. Global store drawer + mobile dock

### The Chennai Shopping Mall — 5 real blocks
1. Announcement bar — **renders empty**
2. Popups section — **renders empty**
3. Header (utility bar, 5 nav items, 3 of them dead)
4. Hero slideshow (5 slides, dual-format, **none clickable**)
5. Empty custom section
6. `Latest Collection` (8 products)
7. Instafeed
8. `Buy 1 Get 1 Free` (8 products)
9. Empty custom section
10. Promo card — `Subscribe to Our Youtube Channel`
11. Empty custom section
12. Trust-icon row — **renders empty**
13. Footer

### RS Brothers — 16 blocks
1. Announcement bar (gold/silver ticker ↔ `NEW10` coupon)
2. Header + mega-menus
3. Slideshow (6 slides, dual-format)
4. `New Releases` carousel
5. Images-with-text — `Elevate Your Style` (4 tiles)
6. `Sarees` carousel
7. Men's apparel carousel
8. Kurti carousel
9. Image-with-text — `Jeans Days`
10. `Explore the Look` hotspot collage
11. Rich text — `Express yourself with #rsbrothersindia`
12. UGC gallery (4 tiles)
13. Rich text — `Our Stores`
14. Store locator (18)
15. Footer
16. Mobile dock

### Chandana Brothers — 10 blocks
1. Top bar (welcome + socials)
2. Header (4 anchors + WhatsApp CTA)
3. Hero — family image + "Fashion *for the family*"
4. `Categories` (6 unclickable cards)
5. `Our Story – 50+ Years of Trust & Tradition` (**text only, no imagery**)
6. `Our Exclusive Collections` (16 unclickable tiles)
7. `New Arrivals` slider (12 sarees, April 2023)
8. `CB Store Locations` (6 cards)
9. `Family Fashion with Elegant Looks` (4 autoplay videos) — **the family payoff, at position 9 of 10**
10. Footer

---

## Structural lessons (`inference`)

1. **Everyone front-loads campaign, then category, then product, then store, then social.** Ananthula's order (intro → hero → heritage → pattu → family → wedding → occasion → festival → arrivals → offers → store → trust → social → close) already matches the commercial logic while adding the heritage spine none of them have.

2. **Store discovery placement is consistent** — all three sites that have it put the locator low, just above social/footer. Ananthula does the same. Correct.

3. **Nobody sequences family as a chapter.** It is either three nav items (SISM, RSB), three dead links (CSM), or a hero claim with no module (CB). A composed Family chapter is a genuine structural differentiator, not just a prettier version of the same block.

4. **The empty-shell failure mode is the most common defect across all four** — empty announcement bars, empty trust rows, empty About pages, empty collections, expired countdowns, three-year-old "New Arrivals". `inference`: every module Ananthula ships must be full on day one, or not ship.
