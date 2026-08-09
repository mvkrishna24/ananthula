import type { MediaSlotName } from "@/data/media";

/**
 * Heritage timeline — DEMO — OWNER TO CONFIRM.
 * Only "1951" is a supplied public brand signal. Everything else is
 * deliberately era-neutral language until the family provides real
 * milestones. Each moment carries an archive media slot (see data/media.ts).
 */

export type TimelineMoment = {
  marker: string;
  title: string;
  body: string;
  media: MediaSlotName;
  archiveLabel: string;
  verified: boolean;
};

export const timeline: TimelineMoment[] = [
  {
    marker: "1951",
    title: "The Beginning",
    body: "A Warangal story begins — a trusted destination for sarees and textiles, built one customer at a time.",
    media: "archiveBeginning",
    archiveLabel: "original store photograph, from the family collection",
    verified: false,
  },
  {
    marker: "Generations",
    title: "Of Trust",
    body: "Daughters shop where their mothers shopped. Wedding trousseaus, festival wardrobes, first sarees — the store becomes part of the family calendar.",
    media: "archiveGenerations",
    archiveLabel: "family & founders photograph, to be supplied",
    verified: false,
  },
  {
    marker: "Warangal",
    title: "Through the Years",
    body: "The city grows around the store — and the store grows with the city, dressing its festivals, functions and weddings.",
    media: "archiveWarangal",
    archiveLabel: "Warangal street & storefront photograph, to be supplied",
    verified: false,
  },
  {
    marker: "Today",
    title: "The Legacy Continues",
    body: "Pattu, wedding, women's, men's and kids' collections under one roof on JPN Road — and a legacy ready for its digital chapter.",
    media: "archiveToday",
    archiveLabel: "current storefront photograph, to be supplied",
    verified: false,
  },
];
