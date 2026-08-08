/**
 * The generative textile library.
 *
 * Every visual surface in the demo is drawn from these specs — layered silk
 * gradients, woven grain and traditional Kanchipuram motifs (temple reku,
 * kattam checks, pallu stripes, rudraksha diamonds) rendered as inline SVG.
 *
 * When client photography arrives, each slot in `media.ts` swaps from a
 * textile spec to an image source without touching any component.
 */

export type MotifKind =
  | "temple"
  | "checks"
  | "stripes"
  | "rudraksha"
  | "paisley"
  | "none";

export type TextileSpec = {
  /** Unique id — namespaces the SVG pattern defs. */
  id: string;
  /** Silk base colours, dark → light. */
  silk: [string, string, string];
  /** Zari (metallic thread) colour for motifs and weave. */
  zari: string;
  /** Traditional motif drawn on the border band. */
  motif: MotifKind;
  /** Which edge carries the border band. */
  border?: "bottom" | "top" | "left" | "right";
  /** Angle of the silk sheen, degrees. */
  sheenAngle?: number;
  /** 0–1 opacity of the woven-thread layer. */
  weaveStrength?: number;
};

export const textiles = {
  /** Deep arakku red — the classic bridal Kanchipuram. */
  arakkuBridal: {
    id: "arakku",
    silk: ["#2e0d16", "#571b2a", "#7d2c3c"],
    zari: "#c9a96a",
    motif: "temple",
    border: "bottom",
    sheenAngle: 128,
    weaveStrength: 0.5,
  },
  /** Emerald green pattu with gold kattam checks. */
  kanchiEmerald: {
    id: "emerald",
    silk: ["#0d2b1e", "#1d4a34", "#2f6547"],
    zari: "#c3a76d",
    motif: "checks",
    border: "bottom",
    sheenAngle: 115,
    weaveStrength: 0.45,
  },
  /** Midnight peacock blue-green — MS blue territory. */
  peacockNight: {
    id: "peacock",
    silk: ["#0a2226", "#14454a", "#1f6169"],
    zari: "#b99a5e",
    motif: "rudraksha",
    border: "bottom",
    sheenAngle: 140,
    weaveStrength: 0.5,
  },
  /** Turmeric & marigold — festival warmth. */
  turmericFestive: {
    id: "turmeric",
    silk: ["#7a4d12", "#b27c24", "#d9a94e"],
    zari: "#4a1722",
    motif: "temple",
    border: "bottom",
    sheenAngle: 120,
    weaveStrength: 0.4,
  },
  /** Ivory–gold tissue silk, bridal morning. */
  ivoryTissue: {
    id: "ivory",
    silk: ["#cbb98f", "#e8dcc0", "#f6efdd"],
    zari: "#a58a57",
    motif: "checks",
    border: "bottom",
    sheenAngle: 105,
    weaveStrength: 0.55,
  },
  /** Charcoal & zari — the groom's raw-silk world. */
  inkRawSilk: {
    id: "inkraw",
    silk: ["#121210", "#22211d", "#38352e"],
    zari: "#a58a57",
    motif: "stripes",
    border: "bottom",
    sheenAngle: 150,
    weaveStrength: 0.6,
  },
  /** Onion-pink soft silk — women's festive. */
  onionPink: {
    id: "onion",
    silk: ["#6d3038", "#985053", "#bf7973"],
    zari: "#d8c290",
    motif: "paisley",
    border: "bottom",
    sheenAngle: 118,
    weaveStrength: 0.42,
  },
  /** Indigo night silk with fine stripes. */
  indigoNight: {
    id: "indigo",
    silk: ["#131a30", "#22304f", "#3a4d74"],
    zari: "#b99a5e",
    motif: "stripes",
    border: "bottom",
    sheenAngle: 135,
    weaveStrength: 0.5,
  },
  /** Sandalwood & rose — kids' celebration. */
  sandalRose: {
    id: "sandal",
    silk: ["#8a5a33", "#b8834f", "#d9a878"],
    zari: "#5a1d2b",
    motif: "rudraksha",
    border: "bottom",
    sheenAngle: 112,
    weaveStrength: 0.4,
  },
  /** Aged loom — sepia heritage frames. */
  agedLoom: {
    id: "loom",
    silk: ["#3a3227", "#5c5140", "#7d6f58"],
    zari: "#a58a57",
    motif: "none",
    sheenAngle: 100,
    weaveStrength: 0.8,
  },
  /** Wine pallu with heavy zari stripes — the pattu signature. */
  winePallu: {
    id: "winepallu",
    silk: ["#35101a", "#4a1722", "#6b2433"],
    zari: "#c3a76d",
    motif: "stripes",
    border: "bottom",
    sheenAngle: 125,
    weaveStrength: 0.5,
  },
} as const satisfies Record<string, TextileSpec>;

export type TextileName = keyof typeof textiles;
