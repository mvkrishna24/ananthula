import type { TextileName } from "@/data/textiles";

/**
 * Seasonal campaign platform — swap or reorder these objects to re-skin the
 * festival section for any season. DEMO_CONTENT: copy pending owner approval.
 */

export type SeasonalCampaign = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  note: string;
  textile: TextileName;
  accent: string;
  ctaLabel: string;
  ctaHref: string;
};

export const campaigns: SeasonalCampaign[] = [
  {
    slug: "sankranti",
    name: "Sankranti",
    eyebrow: "The Harvest Festival",
    title: "Colours of the first harvest.",
    note: "Turmeric yellows, leaf greens and fresh silk for the year's first celebration.",
    textile: "turmericFestive",
    accent: "#d9a94e",
    ctaLabel: "Explore the Sankranti Edit",
    ctaHref: "/collections/pattu",
  },
  {
    slug: "ugadi",
    name: "Ugadi",
    eyebrow: "The New Year",
    title: "A new year, worn beautifully.",
    note: "Fresh weaves and auspicious colours for Telugu new year gatherings.",
    textile: "kanchiEmerald",
    accent: "#2f6547",
    ctaLabel: "Explore the Ugadi Edit",
    ctaHref: "/collections/women",
  },
  {
    slug: "wedding-season",
    name: "Wedding Season",
    eyebrow: "Muhurtham Days",
    title: "The season of good dates.",
    note: "Bridal pattu, groom's silk and family looks for the muhurtham calendar.",
    textile: "arakkuBridal",
    accent: "#7d2c3c",
    ctaLabel: "Explore Wedding",
    ctaHref: "/collections/wedding",
  },
  {
    slug: "dasara",
    name: "Dasara",
    eyebrow: "Nine Nights",
    title: "Nine nights, nine colours.",
    note: "A wardrobe for every evening of Navaratri, from puja to procession.",
    textile: "peacockNight",
    accent: "#1f6169",
    ctaLabel: "Explore the Dasara Edit",
    ctaHref: "/collections/women",
  },
  {
    slug: "diwali",
    name: "Diwali",
    eyebrow: "Festival of Lights",
    title: "Silk that carries the lamplight.",
    note: "Rich zari and deep colours for the brightest nights of the year.",
    textile: "winePallu",
    accent: "#c3a76d",
    ctaLabel: "Explore the Diwali Edit",
    ctaHref: "/collections/pattu",
  },
  {
    slug: "eid",
    name: "Eid",
    eyebrow: "The Celebration",
    title: "Grace for the gathering.",
    note: "Elegant ethnic wear for the whole family's Eid table.",
    textile: "indigoNight",
    accent: "#3a4d74",
    ctaLabel: "Explore the Eid Edit",
    ctaHref: "/collections/men",
  },
];
