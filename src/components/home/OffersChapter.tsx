import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * SECTION 09 — Special Offers.
 * Promotions treated as seasonal privileges — visible, never shouting.
 * No invented percentages, no countdowns.
 */
export function OffersChapter() {
  return (
    <section
      aria-labelledby="offers-heading"
      className="border-y border-ink/10 bg-ivory"
    >
      <div className="mx-auto grid max-w-[1680px] items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_auto] md:py-24 lg:px-12">
        <div>
          <Eyebrow className="text-zari">Seasonal Privileges</Eyebrow>
          <h2
            id="offers-heading"
            data-reveal
            className="font-display mt-4 max-w-[14em] text-[clamp(1.9rem,3.8vw,3.6rem)]"
          >
            A celebration worth <em className="text-wine">visiting for.</em>
          </h2>
          <p data-reveal className="measure mt-4 text-muted">
            Special in-store festive offers, curated with the season. Ask our
            team what&rsquo;s current when you visit — or on WhatsApp.
          </p>
        </div>
        <div data-reveal>
          <Link href="/stores" className="btn-editorial btn-editorial--solid">
            View Current Offers In Store
          </Link>
        </div>
      </div>
    </section>
  );
}
