import type { TextileName } from "@/data/textiles";

/**
 * THE IMAGE MANIFEST — the single swap point for real photography.
 *
 * Drop a file at the listed path under /public and the composition updates
 * on refresh — no component changes. Until a file exists, the slot renders
 * its textile artwork fallback (see components/media/MediaSlot.tsx), so a
 * missing image can never break the site.
 *
 * `aspect` is the shooting/export guidance for each slot, not a constraint —
 * every slot letterboxes via object-cover.
 */

export type MediaSlotSpec = {
  /** Public path the owner's file must use. */
  src: string;
  alt: string;
  /** Graceful fallback artwork while the photo is absent. */
  textile: TextileName;
  /** Recommended aspect / export size for the asset pass. */
  aspect: string;
  /**
   * Per-asset art direction: CSS object-position for the photograph
   * (desktop ≥1024px — see the .media-photo media query in globals.css).
   * Tune here after inspecting the real image — a global "center" for
   * every photo is not acceptable.
   */
  position?: string;
  /** Mobile (<1024px) object-position override, for a different crop. */
  mobilePosition?: string;
};

export const media = {
  /* ---- 01 · HERO ------------------------------------------------ */
  heroMain: {
    src: "/images/hero/hero-pattu-woman.webp",
    alt: "Editorial portrait — woman in a rich Kanchipuram-style pattu saree with antique gold zari",
    textile: "arakkuBridal",
    aspect: "3:2 landscape · ≥2400×1600 · subject right-of-centre, negative space left",
    // Measured against the delivered 16:9 frame (face ≈61% x, bright doorway
    // at the far right): anchoring the window left crops the doorway and
    // pushes the subject clear of the wordmark's right edge.
    position: "0% 30%",
    // <1024px shows a narrow slice — centre it on her face and the pallu border
    mobilePosition: "63% 30%",
  },

  /* ---- 02 · HERITAGE ARCHIVE ------------------------------------ */
  archiveBeginning: {
    src: "/images/heritage/archive-1951-store.webp",
    alt: "Archival photograph — the original Ananthula Kedari store",
    textile: "agedLoom",
    aspect: "4:3 · ≥1600×1200 · scanned archival print",
  },
  archiveGenerations: {
    src: "/images/heritage/archive-generations-family.webp",
    alt: "Archival photograph — the founding family across generations",
    textile: "winePallu",
    aspect: "4:3 · ≥1600×1200",
  },
  archiveWarangal: {
    src: "/images/heritage/archive-warangal-years.webp",
    alt: "Warangal through the years — street or storefront photograph",
    textile: "indigoNight",
    aspect: "4:3 · ≥1600×1200",
  },
  archiveToday: {
    src: "/images/heritage/archive-today-storefront.webp",
    alt: "The Ananthula Kedari Family Shopping Mall storefront today",
    textile: "peacockNight",
    aspect: "4:3 · ≥1600×1200",
  },

  /* ---- 03 · PATTU CHAPTERS -------------------------------------- */
  pattuKanchipuram: {
    src: "/images/pattu/pattu-kanchipuram.webp",
    alt: "Arakku pattu saree draped on a woman — pleats, pallu and antique-gold zari border",
    textile: "arakkuBridal",
    aspect: "3:4 portrait · ≥1200×1600 · drape on body, textile dominant",
    position: "50% 35%",  // keep the resting hand and waist tension in frame
    mobilePosition: "50% 30%",
  },
  pattuPure: {
    src: "/images/pattu/pattu-pure.webp",
    alt: "Pure pattu silk — folded stack or drape detail",
    textile: "kanchiEmerald",
    aspect: "3:4 portrait · ≥1200×1600",
  },
  pattuBridal: {
    src: "/images/pattu/bridal-red-pattu.webp",
    alt: "Bridal pattu — rich red silk with heavy gold zari",
    textile: "winePallu",
    aspect: "3:4 portrait · ≥1200×1600",
  },
  pattuSoftSilk: {
    src: "/images/pattu/pattu-soft-silk.webp",
    alt: "Soft silk saree — light drape in festive colours",
    textile: "onionPink",
    aspect: "3:4 portrait · ≥1200×1600",
  },
  pattuDesigner: {
    src: "/images/pattu/pattu-designer.webp",
    alt: "Designer and fancy saree — contemporary colourway",
    textile: "peacockNight",
    aspect: "3:4 portrait · ≥1200×1600",
  },
  pattuMacro: {
    src: "/images/pattu/kanchi-silk-macro.webp",
    alt: "Extreme macro of pattu silk weave and antique-gold zari border",
    textile: "winePallu",
    aspect: "16:9 wide · ≥2400×1350 · homepage Pattu opening + craft detail crop",
    position: "50% 50%",
    mobilePosition: "48% 50%",  // narrow slice: centre fold + border transition
  },

  /* ---- 04–06 · FAMILY WORLDS ------------------------------------ */
  familyCelebration: {
    src: "/images/family/family-celebration.webp",
    alt: "Three-generation family in festive South Indian clothing gathered around a child",
    textile: "turmericFestive",
    aspect: "16:9 wide · 2752×1536 · homepage family anchor",
    // Measured against the delivered frame: the family cluster occupies
    // x≈42–92%, the quiet plaster x≈5–31%. Desktop (≥1024px) renders the
    // native ratio, so this centre value crops nothing at all.
    position: "50% 50%",
    // Below 1024px the frame becomes 3:2 — a landscape crop, never a
    // portrait one. 72% keeps x≈11–96%: all four people held, the blurred
    // dark foreground pillar dropped, ~20% of the plaster retained. Measured
    // against 62%, which left the father only ~6px from the right edge and
    // made him read as barely included rather than deliberately framed.
    mobilePosition: "72% 50%",
  },
  womenEditorial: {
    src: "/images/women/women-festive.webp",
    alt: "Editorial portrait — woman in festive South Indian ethnic wear",
    textile: "onionPink",
    aspect: "3:4 portrait · ≥1400×1867",
    position: "50% 25%",
    mobilePosition: "50% 22%",
  },
  menEditorial: {
    src: "/images/men/men-ethnic.webp",
    alt: "Editorial portrait — man in premium South Indian ethnic wear",
    textile: "inkRawSilk",
    aspect: "3:4 portrait · ≥1400×1867",
    position: "50% 25%",
    mobilePosition: "50% 22%",
  },
  kidsEditorial: {
    src: "/images/kids/kids-festive.webp",
    alt: "Children in festive traditional wear, natural and joyful",
    textile: "sandalRose",
    aspect: "3:4 portrait · ≥1400×1867",
    position: "50% 30%",  // allow movement; keep faces above centre
  },

  /* ---- 07 · WEDDING --------------------------------------------- */
  weddingBride: {
    src: "/images/wedding/wedding-bride.webp",
    alt: "South Indian bride in an arakku pattu saree with antique-gold zari and jasmine",
    textile: "arakkuBridal",
    aspect: "16:9 wide · 2752×1536 · wedding chapter anchor",
    // Delivered frame: bride x≈55–92%, pallu border x≈62–88%, and a very dark
    // left third measuring 10.1:1 worst case against ivory — reserved for the
    // chapter's typography. The source is already 16:9, so a 16:9 anchor crops
    // nothing and these values are inert there; they are tuned for the portrait
    // containers that do crop horizontally (full height is always retained).
    position: "80% 50%",
    mobilePosition: "75% 50%",
  },
  weddingGroom: {
    src: "/images/wedding/wedding-groom.webp",
    alt: "South Indian groom in wedding silk and ethnic wear",
    textile: "inkRawSilk",
    aspect: "3:4 portrait · ≥1400×1867",
    position: "50% 24%",
    mobilePosition: "50% 22%",
  },
  weddingFamily: {
    src: "/images/wedding/family-wedding.webp",
    alt: "Family gathered in coordinated wedding wear",
    textile: "ivoryTissue",
    aspect: "3:4 portrait · ≥1400×1867",
    position: "50% 32%",  // group centred; keep heads clear of the top crop
  },
  weddingCouple: {
    src: "/images/wedding/wedding-couple.webp",
    alt: "Bride and groom together in traditional wedding attire",
    textile: "arakkuBridal",
    aspect: "16:9 wide · ≥2400×1350 · wedding-page hero",
    position: "50% 28%",
    mobilePosition: "55% 25%",
  },

  /* ---- 08 · FESTIVALS (one per campaign) ------------------------ */
  festivalSankranti: {
    src: "/images/festivals/festival-sankranti.webp",
    alt: "Sankranti campaign — harvest festival colours and silk",
    textile: "turmericFestive",
    aspect: "2:1 wide · ≥2400×1200",
  },
  festivalUgadi: {
    src: "/images/festivals/festival-ugadi.webp",
    alt: "Ugadi campaign — new year greens and fresh weaves",
    textile: "kanchiEmerald",
    aspect: "2:1 wide · ≥2400×1200",
  },
  festivalWeddingSeason: {
    src: "/images/festivals/festival-wedding-season.webp",
    alt: "Wedding season campaign — muhurtham silks",
    textile: "arakkuBridal",
    aspect: "2:1 wide · ≥2400×1200",
  },
  festivalDasara: {
    src: "/images/festivals/festival-dasara.webp",
    alt: "Dasara campaign — nine nights of colour",
    textile: "peacockNight",
    aspect: "2:1 wide · ≥2400×1200",
  },
  festivalDiwali: {
    src: "/images/festivals/festival-diwali.webp",
    alt: "Diwali campaign — silk that carries the lamplight",
    textile: "winePallu",
    aspect: "2:1 wide · ≥2400×1200",
  },
  festivalEid: {
    src: "/images/festivals/festival-eid.webp",
    alt: "Eid campaign — elegant ethnic wear for the gathering",
    textile: "indigoNight",
    aspect: "2:1 wide · ≥2400×1200",
  },

  /* ---- 09 · NEW ARRIVALS ---------------------------------------- */
  arrivalKanchi: {
    src: "/images/arrivals/arrival-kanchi-pattu.webp",
    alt: "New season Kanchi pattu — lookbook image",
    textile: "arakkuBridal",
    aspect: "4:3 · ≥1600×1200 (hero tile)",
  },
  arrivalBridal: {
    src: "/images/arrivals/arrival-bridal-silks.webp",
    alt: "New bridal silks — lookbook image",
    textile: "ivoryTissue",
    aspect: "4:5 portrait · ≥1200×1500",
  },
  arrivalFestive: {
    src: "/images/arrivals/arrival-festive-edit.webp",
    alt: "Festive edit — new arrival lookbook image",
    textile: "turmericFestive",
    aspect: "4:5 portrait · ≥1200×1500",
  },
  arrivalMens: {
    src: "/images/arrivals/arrival-mens-occasion.webp",
    alt: "Men's occasion wear — new arrival lookbook image",
    textile: "inkRawSilk",
    aspect: "4:5 portrait · ≥1200×1500",
  },
  arrivalSoftSilk: {
    src: "/images/arrivals/arrival-soft-silk.webp",
    alt: "Soft silk edit — new arrival lookbook image",
    textile: "onionPink",
    aspect: "4:5 portrait · ≥1200×1500",
  },

  /* ---- 10 · STORE ------------------------------------------------ */
  storeInterior: {
    src: "/images/stores/store-interior.webp",
    alt: "Inside the JPN Road showroom — saree counters and browsing",
    textile: "winePallu",
    aspect: "3:4 portrait · ≥1200×1600",
    position: "50% 45%",  // shelf depth mid-frame, warm light above
  },
  storeCounter: {
    src: "/images/stores/store-counter.webp",
    alt: "Staff presenting pattu sarees at the counter",
    textile: "kanchiEmerald",
    aspect: "3:4 portrait · ≥1200×1600",
  },
  storeFacade: {
    src: "/images/stores/store-facade.webp",
    alt: "Ananthula Kedari Family Shopping Mall facade on JPN Road",
    textile: "winePallu",
    aspect: "16:9 wide · ≥2400×1350 · stores-page hero",
    position: "50% 40%",
  },

  /* ---- 11 · SOCIAL REELS ---------------------------------------- */
  reel01: {
    src: "/images/social/reel-01.webp",
    alt: "Reel — bridal pattu unfolding at the counter",
    textile: "arakkuBridal",
    aspect: "9:16 · 1080×1920",
  },
  reel02: {
    src: "/images/social/reel-02.webp",
    alt: "Reel — this week's festive edit",
    textile: "turmericFestive",
    aspect: "9:16 · 1080×1920",
  },
  reel03: {
    src: "/images/social/reel-03.webp",
    alt: "Reel — wedding-morning silks",
    textile: "ivoryTissue",
    aspect: "9:16 · 1080×1920",
  },
  reel04: {
    src: "/images/social/reel-04.webp",
    alt: "Reel — new colours at the counter",
    textile: "peacockNight",
    aspect: "9:16 · 1080×1920",
  },
  reel05: {
    src: "/images/social/reel-05.webp",
    alt: "Reel — soft silk drape check",
    textile: "onionPink",
    aspect: "9:16 · 1080×1920",
  },

  /* ---- HERITAGE PAGE HERO --------------------------------------- */
  heritageLoom: {
    src: "/images/heritage/heritage-loom.webp",
    alt: "Handloom detail — warp threads and shuttle",
    textile: "agedLoom",
    aspect: "16:9 wide · ≥2400×1350 · legacy-page hero",
    position: "50% 50%",
  },
} as const satisfies Record<string, MediaSlotSpec>;

export type MediaSlotName = keyof typeof media;
