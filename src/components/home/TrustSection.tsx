import { Eyebrow } from "@/components/ui/Eyebrow";
import { reviewThemes, googleRating } from "@/data/reviews";

/**
 * SECTION 11 — Customer Trust.
 * Public review themes only — no fabricated names or quotes.
 */
export function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-ivory py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-wine">Trust, Across Generations</Eyebrow>
            <h2
              id="trust-heading"
              data-reveal
              className="font-display mt-5 text-[clamp(2.4rem,5vw,4.8rem)]"
            >
              What Warangal <em className="text-wine">says.</em>
            </h2>
          </div>
          <p data-reveal className="flex items-baseline gap-3">
            <span className="font-display text-5xl text-wine">
              {googleRating}
            </span>
            <span className="eyebrow !text-[0.6rem] text-muted">
              ★ Google rating*
            </span>
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
          {reviewThemes.map((theme, i) => (
            <li
              key={theme.title}
              data-reveal
              className="bg-ivory p-8 md:p-10"
              style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <span className="font-display text-4xl text-sand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-xl md:text-2xl">
                {theme.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">
                {theme.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[0.72rem] text-muted/80">
          *Public rating as supplied for this project — verified at
          presentation time.
        </p>
      </div>
    </section>
  );
}
