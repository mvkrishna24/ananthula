import Link from "next/link";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { occasions } from "@/data/occasions";

/**
 * SECTION 06 — Shop by Occasion.
 * An asymmetric magazine grid — no six tiny rounded cards.
 */
export function OccasionGrid() {
  return (
    <section
      aria-labelledby="occasion-heading"
      className="bg-rice py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <Eyebrow className="text-wine">Shop by Occasion</Eyebrow>
        <h2
          id="occasion-heading"
          data-reveal
          className="font-display mt-5 max-w-[10em] text-[clamp(2.4rem,5.4vw,5.4rem)]"
        >
          Every occasion has an <em className="text-wine">outfit waiting.</em>
        </h2>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:mt-20 md:auto-rows-[200px] md:grid-cols-4 md:gap-5">
          {occasions.map((occ, i) => {
            const span =
              occ.size === "tall"
                ? "row-span-2"
                : occ.size === "wide"
                  ? "col-span-2"
                  : "";
            return (
              <Link
                key={occ.title}
                href={occ.href}
                data-reveal
                className={`group relative overflow-hidden ${span}`}
                style={{ "--reveal-delay": `${(i % 4) * 0.08}s` } as React.CSSProperties}
              >
                <TextilePanel
                  textile={occ.textile}
                  idSuffix={`oc${i}`}
                  className="h-full w-full transition-transform duration-[1200ms] ease-[var(--ease-editorial)] group-hover:scale-[1.05]"
                  scrim={0.3}
                  ariaLabel={`${occ.title} — generative textile artwork`}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-ivory md:p-6">
                  <h3 className="font-display text-xl md:text-2xl">
                    {occ.title}
                  </h3>
                  <p className="eyebrow mt-1 !text-[0.56rem] text-ivory/70">
                    {occ.note}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
