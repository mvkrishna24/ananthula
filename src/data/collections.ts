import type { TextileName } from "@/data/textiles";
import type { MediaSlotName } from "@/data/media";

/** All merchandising content is DEMO_CONTENT — owner confirms before production. */

export type Collection = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  textile: TextileName;
  /** Photography slot (falls back to the textile artwork when absent). */
  media: MediaSlotName;
  href: string;
  status: "confirmed" | "demo";
};

export const pattuChapters: Collection[] = [
  {
    slug: "kanchipuram-pattu",
    media: "pattuKanchipuram",
    title: "Kanchi Pattu",
    eyebrow: "01 · The Signature",
    description:
      "The saree ceremonies are measured against — heavy silk, temple borders, zari that holds light.",
    textile: "arakkuBridal",
    href: "/collections/pattu",
    status: "demo",
  },
  {
    slug: "pure-pattu",
    media: "pattuPure",
    title: "Pure Pattu",
    eyebrow: "02 · The Tradition",
    description:
      "Pure silk woven for pujas, functions and the days families dress with intention.",
    textile: "kanchiEmerald",
    href: "/collections/pattu",
    status: "demo",
  },
  {
    slug: "bridal-pattu",
    media: "pattuBridal",
    title: "Bridal Pattu",
    eyebrow: "03 · The Heirloom",
    description:
      "Chosen once, kept forever. The saree that will be photographed for fifty years.",
    textile: "winePallu",
    href: "/collections/wedding",
    status: "demo",
  },
  {
    slug: "soft-silk",
    media: "pattuSoftSilk",
    title: "Soft Silk",
    eyebrow: "04 · The Everyday Grace",
    description:
      "Lighter drapes for receptions, festivals and evenings that ask for ease.",
    textile: "onionPink",
    href: "/collections/pattu",
    status: "demo",
  },
  {
    slug: "designer-fancy",
    media: "pattuDesigner",
    title: "Designer & Fancy",
    eyebrow: "05 · The New Wave",
    description:
      "Contemporary weaves and colours for the generation writing its own occasions.",
    textile: "peacockNight",
    href: "/collections/pattu",
    status: "demo",
  },
];

export const familyWorlds: Collection[] = [
  {
    slug: "women",
    media: "womenEditorial",
    title: "Women",
    eyebrow: "Timeless. Festive. Contemporary.",
    description:
      "Sarees, ethnic wear, dresses and festive looks — from everyday elegance to the centre of the celebration.",
    textile: "onionPink",
    href: "/collections/women",
    status: "demo",
  },
  {
    slug: "men",
    media: "menEditorial",
    title: "Men",
    eyebrow: "Tradition, tailored forward.",
    description:
      "Ethnic, wedding and occasion wear cut with quiet confidence.",
    textile: "inkRawSilk",
    href: "/collections/men",
    status: "demo",
  },
  {
    slug: "kids",
    media: "kidsEditorial",
    title: "Kids",
    eyebrow: "Little celebrations. Big memories.",
    description:
      "Festive and traditional wear for the youngest members of the family album.",
    textile: "sandalRose",
    href: "/collections/kids",
    status: "demo",
  },
];

export type CollectionPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  textile: TextileName;
  /** Photography slot for the page hero. */
  heroMedia: MediaSlotName;
  chapters: { title: string; note: string; textile: TextileName }[];
};

export const collectionPages: Record<string, CollectionPage> = {
  pattu: {
    slug: "pattu",
    heroMedia: "pattuMacro",
    title: "Silk that becomes memory.",
    eyebrow: "The Pattu Legacy",
    intro:
      "Silk sits at the centre of every South Indian celebration — and at the centre of this house since 1951. These are the weaves Warangal comes to us for.",
    textile: "winePallu",
    chapters: [
      {
        title: "Kanchi / Kanchipuram Pattu",
        note: "Temple borders · heavy zari",
        textile: "arakkuBridal",
      },
      {
        title: "Pure Pattu",
        note: "Ceremony · tradition",
        textile: "kanchiEmerald",
      },
      {
        title: "Bridal Pattu",
        note: "The heirloom weave",
        textile: "winePallu",
      },
      { title: "Soft Silk", note: "Light drape · festive", textile: "onionPink" },
      {
        title: "Designer & Fancy",
        note: "Contemporary colourways",
        textile: "peacockNight",
      },
    ],
  },
  wedding: {
    slug: "wedding",
    heroMedia: "weddingCouple",
    title: "For the day every generation remembers.",
    eyebrow: "The Wedding Edit",
    intro:
      "One roof for the bride, the groom and everyone standing beside them. Wedding shopping at Ananthula Kedari has been a family ritual for generations.",
    textile: "arakkuBridal",
    chapters: [
      {
        title: "The Bride",
        note: "Bridal pattu · silk · occasion",
        textile: "arakkuBridal",
      },
      {
        title: "The Groom",
        note: "Ethnic · wedding · occasion",
        textile: "inkRawSilk",
      },
      {
        title: "The Family",
        note: "Women · men · kids, coordinated",
        textile: "ivoryTissue",
      },
    ],
  },
  women: {
    slug: "women",
    heroMedia: "womenEditorial",
    title: "Timeless. Festive. Contemporary.",
    eyebrow: "Women",
    intro:
      "Sarees, ethnic wear, ladies' dresses and festive looks — a full wardrobe for every occasion on the family calendar.",
    textile: "onionPink",
    chapters: [
      { title: "Sarees", note: "Pattu · soft silk · fancy", textile: "winePallu" },
      { title: "Ethnic Wear", note: "Everyday to occasion", textile: "kanchiEmerald" },
      { title: "Festive Wear", note: "Season colourways", textile: "turmericFestive" },
      { title: "Wedding Wear", note: "The celebration wardrobe", textile: "arakkuBridal" },
    ],
  },
  men: {
    slug: "men",
    heroMedia: "menEditorial",
    title: "Tradition, tailored forward.",
    eyebrow: "Men",
    intro:
      "From wedding-day silk to festive ethnic wear — menswear with the same seriousness the house gives its sarees.",
    textile: "inkRawSilk",
    chapters: [
      { title: "Ethnic Wear", note: "Kurta · dhoti · classic", textile: "ivoryTissue" },
      { title: "Wedding Wear", note: "The groom's chapter", textile: "inkRawSilk" },
      { title: "Occasion Wear", note: "Receptions · functions", textile: "indigoNight" },
      { title: "Festive Wear", note: "Season edits", textile: "turmericFestive" },
    ],
  },
  kids: {
    slug: "kids",
    heroMedia: "kidsEditorial",
    title: "Little celebrations. Big memories.",
    eyebrow: "Kids",
    intro:
      "Girls' and boys' festive and traditional wear — because the family album belongs to them too.",
    textile: "sandalRose",
    chapters: [
      { title: "Girls", note: "Pattu pavadai · festive", textile: "onionPink" },
      { title: "Boys", note: "Kurta · dhoti sets", textile: "indigoNight" },
      { title: "Festive", note: "Season collections", textile: "turmericFestive" },
      { title: "Wedding / Occasion", note: "Coordinated looks", textile: "ivoryTissue" },
    ],
  },
};
