# Source Log

All crawling performed **9 August 2026**, desktop Chrome user-agent, ~2s between
requests, no authentication, no CAPTCHA bypass, no proxy/stealth evasion.
No `/account`, `/cart`, `/checkout`, `/admin` or filtered/sorted collection URLs
were requested on any domain.

Websites change. Re-verify before relying on any observation below.

---

## South India Shopping Mall

**Crawled:** 2026-08-09
**Robots checked:** Yes — `https://www.southindiaeshop.com/robots.txt`, HTTP 200.
Shopify boilerplate: `User-agent: * / Allow: /` for public product, collection,
page, blog and policy HTML. Disallows `/account`, `/cart*`, `/checkout*`,
`/admin`, and filtered/sorted collection URLs. All respected.

**Pages reviewed (10, all HTTP 200):**
`/` · `/collections.json?limit=250` · `/collections/women` · `/collections/men` ·
`/collections/silk-sarees` · `/collections/kids` · `/collections/pattu-silk-saree` ·
`/blogs/posts` · `/pages/about-us` · `/pages/our-stores`

**Important sections:** 6-slide dual-format hero; `GREAT BUYS ON A BUDGET`
category grid; `FRESH ADDITIONS`; countdown deal block; blog rail
(`INSIGHT & INSPIRATION`); 9 testimonials; 39-branch store locator (twice);
8-reel social wall.

**Image references captured:** 18 (7 downloaded for visual analysis).

**Notes:** No blocking, no rate limiting, fully server-rendered. Hero images all
carry `alt=""` — every campaign word is rasterised. A live homepage countdown
rendered `00:00:00:00` with "This offer has expired" in the DOM at crawl time.
87-product "Wedding Pattu Sarees" collection exists but is linked from nowhere.
Blog's newest festival post is Ugadi **2025** while the site footer reads 2026.

---

## The Chennai Shopping Mall

**Crawled:** 2026-08-09
**Robots checked:** Yes — HTTP 200, identical Shopify policy to above. Respected.
`smartplan.thechennaishoppingmall.com/.../payment` deliberately **not** fetched
(payment path).

**Pages reviewed (13, all HTTP 200):**
`/` · `/collections.json?limit=250` · `/sitemap.xml` + `/sitemap_pages_1.xml` ·
`/pages/about-us` · `/pages/contact-us` · `/collections/women-all` ·
`/collections/men-all` · `/collections/kids-all` · `/collections/sarees-collection` ·
`/collections/wedding-collection-special-sarees` ·
`/collections/buy-1-get-1-free-sarees` · `/products.json?limit=250` · `/pages/reviews`

**Important sections:** 5-slide dual-format hero (non-clickable); `Latest
Collection`; Instafeed; `Buy 1 Get 1 Free` block; YouTube subscribe card.

**Image references captured:** 15 (8 downloaded).

**Notes:** Operator entity **Marri Retail Private Limited**. WOMEN / MEN / KIDS
nav items are `href="#"` with no submenu markup. 190 collections but only **80
live products**, 77 of them sarees — Women, Men, Kids and Wedding all render
"This collection is empty". Four homepage section shells render empty; the
announcement bar and trust-icon row are configured with no blocks. Judge.me
uninstalled, leaving an empty `/pages/reviews`. `/pages/about-us` contains only a
gold-rate widget — no about content. No store locator anywhere.

---

## RS Brothers

**Crawled:** 2026-08-09
**Robots checked:** Yes — HTTP 200, identical Shopify policy. Respected.

**Pages reviewed (10):**
`/` (200) · `/collections.json?limit=250` (200) · `/pages/store-locator` (200) ·
`/collections/sarees` (200) · `/collections/silk-sarees` (200) ·
`/collections/kids` (200) · `/collections/women` (200) · `/collections/men` (200) ·
`/pages/about` (**404**) · `/pages/about-us` (200, empty shell)

**Important sections:** 6-slide dual-format hero; `New Releases` carousel;
women's 4-tile grid; `Explore the Look` hotspot collage; `#rsbrothersindia`
gallery; 18-store locator.

**Image references captured:** 12 (7 downloaded).

**Notes:** Theme "Be Yours" v8.7.0. Legal entity **RSB Retail India Limited**.
`New Releases` = 3,597 products = the entire catalogue. **No sale collection
exists** despite an "Upto 70% OFF" hero — and that hero has no link. Store
locator config has empty `address1`/`address2` and 0,0 coordinates. Both About
pages are dead. Warangal is one of their 18 store locations — direct local
overlap with Ananthula.

---

## Chandana Brothers

**Crawled:** 2026-08-09
**Robots checked:** Yes — `/robots.txt` returns **HTTP 404** (no restrictions
declared). Homepage returns 200. Crawled conservatively; no cart/account/admin
paths exist on the site.

**Pages reviewed:**
`/` (200) · `/store.html` (200) · `/style.css` (200) · `/sitemap.xml` (**404**) ·
`/about.html`, `/mens-wear.html`, `/womens-wear.html`, `/kids-wear.html`,
`/products.html`, `/pattu-sarees.html`, `/new-arrivals.html`, `/index.php`
(**all 404**)

**Important sections:** single-scroll homepage — hero, 6-card Categories,
text-only Our Story, 16-tile Exclusive Collections, New Arrivals slider,
6 store cards, 4-video grid.

**Image references captured:** 14 (6 downloaded).

**Notes:** **Not a platform site** — hand-coded static HTML/CSS with GSAP; no
cart, no prices, no PDPs, no search. The whole site is 2 real pages. Category
tiles are rehosted Unsplash stock (filenames still carry Unsplash photo IDs).
Product images are fossils of a dead CMS with April 2023 timestamps — the "New
Arrivals" slider is ~3 years stale. Hero family image carries
`alt="Premium Diamond Necklace"`. Entire funnel is one WhatsApp number.

---

## Local research artifacts (outside the repo)

```
/tmp/ananthula-competitor-research/
  southindiaeshop/      10 HTML/JSON captures, 7 images
  chennaishoppingmall/  13 captures, 8 images
  rsbrothers/           10 captures, 7 images
  chandanabrothers/     3 captures, 6 images
```

Disposable. **Nothing from these folders may enter `public/images/`.**
