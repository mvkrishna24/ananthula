import type { TextileName } from "@/data/textiles";

/** Shop-by-occasion grid — DEMO_CONTENT. */

export type Occasion = {
  title: string;
  note: string;
  textile: TextileName;
  href: string;
  /** magazine-grid sizing hint */
  size: "tall" | "wide" | "standard";
};

export const occasions: Occasion[] = [
  {
    title: "Wedding",
    note: "The full trousseau",
    textile: "arakkuBridal",
    href: "/collections/wedding",
    size: "tall",
  },
  {
    title: "Engagement",
    note: "The first ceremony",
    textile: "onionPink",
    href: "/collections/wedding",
    size: "standard",
  },
  {
    title: "Festival",
    note: "Season colourways",
    textile: "turmericFestive",
    href: "/collections/pattu",
    size: "standard",
  },
  {
    title: "Everyday Elegance",
    note: "Soft silk · ethnic",
    textile: "indigoNight",
    href: "/collections/women",
    size: "standard",
  },
  {
    title: "Family Celebration",
    note: "Everyone, coordinated",
    textile: "ivoryTissue",
    href: "/collections/kids",
    size: "wide",
  },
  {
    title: "Traditional Occasion",
    note: "Puja · function · rite",
    textile: "kanchiEmerald",
    href: "/collections/pattu",
    size: "standard",
  },
];
