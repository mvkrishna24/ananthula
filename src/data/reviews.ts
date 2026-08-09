/**
 * Trust content — summarised from public review themes.
 * No fabricated names or quotes; themes only, per the creative brief.
 */

export type ReviewTheme = {
  title: string;
  body: string;
};

export const reviewThemes: ReviewTheme[] = [
  {
    title: "Variety across family fashion",
    body: "Customers consistently mention the depth of choice — sarees, pattu, ladies' wear, menswear and kids' wear under one roof.",
  },
  {
    title: "Reasonable pricing, seasonal value",
    body: "Fair prices and festival-time value come up again and again in public reviews.",
  },
  {
    title: "Helpful staff, easy store experience",
    body: "Patient, knowledgeable service — the kind that keeps families returning for decades.",
  },
];

/** Supplied for the project — re-verify at presentation time. */
export const googleRating = "4.6";
