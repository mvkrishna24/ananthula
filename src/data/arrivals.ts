import type { TextileName } from "@/data/textiles";

/** New arrivals rail — DEMO_CONTENT, no invented prices. */

export type Arrival = {
  index: string;
  title: string;
  note: string;
  textile: TextileName;
  href: string;
  hero?: boolean;
};

export const arrivals: Arrival[] = [
  {
    index: "01",
    title: "Kanchi Pattu",
    note: "New Season",
    textile: "arakkuBridal",
    href: "/collections/pattu",
    hero: true,
  },
  {
    index: "02",
    title: "Bridal Silks",
    note: "New Arrival",
    textile: "ivoryTissue",
    href: "/collections/wedding",
  },
  {
    index: "03",
    title: "Festive Edit",
    note: "New Arrival",
    textile: "turmericFestive",
    href: "/new-arrivals",
  },
  {
    index: "04",
    title: "Men's Occasion",
    note: "New Arrival",
    textile: "inkRawSilk",
    href: "/collections/men",
  },
  {
    index: "05",
    title: "Soft Silk Edit",
    note: "New Arrival",
    textile: "onionPink",
    href: "/collections/women",
  },
];
