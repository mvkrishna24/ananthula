import type { TextileName } from "@/data/textiles";
import type { MediaSlotName } from "@/data/media";

/** New arrivals rail — DEMO_CONTENT, no invented prices. */

export type Arrival = {
  index: string;
  title: string;
  note: string;
  textile: TextileName;
  /** Lookbook photography slot (textile fallback when absent). */
  media: MediaSlotName;
  href: string;
  hero?: boolean;
};

export const arrivals: Arrival[] = [
  {
    index: "01",
    media: "arrivalKanchi",
    title: "Kanchi Pattu",
    note: "New Season",
    textile: "arakkuBridal",
    href: "/collections/pattu",
    hero: true,
  },
  {
    index: "02",
    media: "arrivalBridal",
    title: "Bridal Silks",
    note: "New Arrival",
    textile: "ivoryTissue",
    href: "/collections/wedding",
  },
  {
    index: "03",
    media: "arrivalFestive",
    title: "Festive Edit",
    note: "New Arrival",
    textile: "turmericFestive",
    href: "/new-arrivals",
  },
  {
    index: "04",
    media: "arrivalMens",
    title: "Men's Occasion",
    note: "New Arrival",
    textile: "inkRawSilk",
    href: "/collections/men",
  },
  {
    index: "05",
    media: "arrivalSoftSilk",
    title: "Soft Silk Edit",
    note: "New Arrival",
    textile: "onionPink",
    href: "/collections/women",
  },
];
