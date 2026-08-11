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
  /**
   * Visible plate caption. Must stay truthful over the silk artwork that
   * fills the plate today AND over the family photograph that may replace
   * it — so it names the era, never a photograph that does not exist.
   */
  archiveLabel: string;
  verified: boolean;
};

export const timeline: TimelineMoment[] = [
  {
    marker: "1951",
    title: "The Beginning",
    body: "A Warangal story begins — a trusted destination for sarees and textiles, built one customer at a time.",
    media: "archiveBeginning",
    archiveLabel: "the beginning · Warangal, 1951",
    verified: false,
  },
  {
    marker: "Generations",
    title: "Of Trust",
    body: "Daughters shop where their mothers shopped. Wedding trousseaus, festival wardrobes, first sarees — the store becomes part of the family calendar.",
    media: "archiveGenerations",
    archiveLabel: "generations of trust",
    verified: false,
  },
  {
    marker: "Warangal",
    title: "Through the Years",
    body: "The city grows around the store — and the store grows with the city, dressing its festivals, functions and weddings.",
    media: "archiveWarangal",
    archiveLabel: "Warangal through the years",
    verified: false,
  },
  {
    marker: "Today",
    // Not "The Legacy Continues" — the section now sits directly above
    // FinalCTA, whose closing line is exactly that. The coda's last plate
    // states the fact; FinalCTA delivers the line.
    title: "A Family Fashion Destination",
    body: "Pattu, wedding, women's, men's and kids' collections under one roof on JPN Road — and a legacy ready for its digital chapter.",
    media: "archiveToday",
    archiveLabel: "the house today",
    verified: false,
  },
];
