/**
 * Central brand facts. Every claim shown in the UI comes from here so the
 * owner can confirm or correct a single file before production.
 *
 * Status legend:
 *  - "supplied"  — provided in the project brief; confirm before production
 *  - "demo"      — demo copy written for the pitch; owner to approve
 */

export const brand = {
  name: "Ananthula Kedari",
  fullName: "Ananthula Kedari Family Shopping Mall",
  since: "1951",
  city: "Warangal",
  region: "Telangana, India",
  heroLine: "Dressing Generations Since 1951.",
  pillars: ["Pattu", "Wedding", "Women", "Men", "Kids"] as const,
  /** Supplied for the project — confirm before production. */
  phone: "+91 88975 76699",
  phoneHref: "tel:+918897576699",
  /** WhatsApp availability to be confirmed by owner (see docs/CONTENT_TO_VERIFY.md). */
  whatsappHref:
    "https://wa.me/918897576699?text=" +
    encodeURIComponent(
      "Hello Ananthula Kedari, I would like help with your collections.",
    ),
  whatsappWeddingHref:
    "https://wa.me/918897576699?text=" +
    encodeURIComponent(
      "Hello Ananthula Kedari, I’m planning wedding shopping and would like help with your collections.",
    ),
  address:
    "8-11 12, Jayaprakash Narayan Road, Chowrasta, Sherpura, Warangal, Telangana 506002",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Ananthula Kedari Family Shopping Mall, Jayaprakash Narayan Road, Chowrasta, Warangal, Telangana 506002",
    ),
  /** Supplied for the project — re-verify at presentation time. */
  googleRating: "4.6",
  instagramHandle: "@ananthula_online",
} as const;

export type Brand = typeof brand;
