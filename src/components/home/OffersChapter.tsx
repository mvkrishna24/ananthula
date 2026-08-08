import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { currentOffer } from "@/data/offers";

/**
 * SECTION 09 — Special Offers.
 * One refined campaign band: copy left, the commercial highlight as a large
 * editorial numeral/phrase right. Values live in data/offers.ts — the owner
 * can run "Up to 40% off" or "Festive privileges" without design damage.
 */
export function OffersChapter() {
  const offer = currentOffer;

  return (
    <section
      aria-labelledby="offers-heading"
      className="border-y border-ink/10 bg-ivory"
    >
      <div className="mx-auto grid max-w-[1680px] items-center gap-x-16 gap-y-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[1.2fr_auto_auto] lg:px-12">
        <div>
          <Eyebrow className="text-zari">{offer.eyebrow}</Eyebrow>
          <h2
            id="offers-heading"
            data-reveal
            className="font-display mt-4 max-w-[14em] text-[clamp(1.9rem,3.8vw,3.6rem)]"
          >
            {offer.title} <em className="text-wine">{offer.titleEm}</em>
          </h2>
          <p data-reveal className="measure mt-4 text-muted">
            {offer.note}
          </p>
        </div>

        {/* the commercial highlight — large but composed */}
        <div
          data-reveal
          className="border-l-2 border-zari pl-6 lg:pl-8"
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
        >
          <p className="font-display text-[clamp(2rem,3.6vw,3.2rem)] italic leading-tight text-wine">
            {offer.highlight}
          </p>
          <p className="eyebrow mt-2 !text-[0.58rem] text-muted">
            {offer.highlightNote}
          </p>
        </div>

        <div data-reveal style={{ "--reveal-delay": "0.18s" } as React.CSSProperties}>
          <Link href={offer.ctaHref} className="btn-editorial btn-editorial--solid">
            {offer.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
