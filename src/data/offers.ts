/**
 * The offers module — one refined campaign format the owner controls.
 *
 * `highlight` is the commercial hook. It renders large and elegant, so it
 * works equally as a percentage or a phrase, e.g.:
 *   highlight: "Up to 40% off"        ← once the owner confirms a number
 *   highlight: "Festive privileges"
 *   highlight: "Wedding season"
 *
 * No number is invented for the demo — swap one line to change the offer.
 */

export type Offer = {
  eyebrow: string;
  /** Headline, split so the closing words carry the wine italic emphasis. */
  title: string;
  titleEm: string;
  note: string;
  /** Large display value — percentage or campaign phrase. */
  highlight: string;
  /** Small qualifier under the highlight. */
  highlightNote: string;
  ctaLabel: string;
  ctaHref: string;
};

export const currentOffer: Offer = {
  eyebrow: "Seasonal Privileges",
  title: "A celebration worth",
  titleEm: "visiting for.",
  note: "Special festive offers run in store through the season. Ask our team what's current when you visit — or on WhatsApp.",
  highlight: "Festive privileges",
  highlightNote: "In store now · details at the counter",
  ctaLabel: "View Current Offers In Store",
  ctaHref: "/stores",
};
