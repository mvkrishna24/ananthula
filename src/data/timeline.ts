import type { TextileName } from "@/data/textiles";

/**
 * Heritage timeline — DEMO — OWNER TO CONFIRM.
 * Only "1951" is a supplied public brand signal. Everything else is
 * deliberately era-neutral language until the family provides real milestones.
 */

export type TimelineMoment = {
  marker: string;
  title: string;
  body: string;
  textile: TextileName;
  archiveLabel: string;
  verified: boolean;
};

export const timeline: TimelineMoment[] = [
  {
    marker: "1951",
    title: "The Beginning",
    body: "A Warangal story begins — a trusted destination for sarees and textiles, built one customer at a time.",
    textile: "agedLoom",
    archiveLabel: "original store photograph, from the family collection",
    verified: false,
  },
  {
    marker: "Generations",
    title: "Trust Becomes Tradition",
    body: "Daughters shop where their mothers shopped. Wedding trousseaus, festival wardrobes, first sarees — the store becomes part of the family calendar.",
    textile: "winePallu",
    archiveLabel: "family & founders photograph, to be supplied",
    verified: false,
  },
  {
    marker: "Today",
    title: "A Family Fashion Destination",
    body: "Pattu, wedding, women's, men's and kids' collections under one roof on JPN Road — and a legacy ready for its digital chapter.",
    textile: "peacockNight",
    archiveLabel: "current storefront photograph, to be supplied",
    verified: false,
  },
];
