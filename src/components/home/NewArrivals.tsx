import Link from "next/link";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EditorialLink } from "@/components/ui/EditorialLink";
import { arrivals } from "@/data/arrivals";

/**
 * SECTION 08 — New Arrivals.
 * Editorial discovery: one hero tile plus a numbered rail. No price grid.
 */
export function NewArrivals() {
  const [hero, ...rest] = arrivals;

  return (
    <section
      aria-labelledby="arrivals-heading"
      className="bg-rice py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-wine">Just Arrived</Eyebrow>
            <h2
              id="arrivals-heading"
              data-reveal
              className="font-display mt-5 max-w-[11em] text-[clamp(2.4rem,5.4vw,5.4rem)]"
            >
              New stories in silk, colour and{" "}
              <em className="text-wine">celebration.</em>
            </h2>
          </div>
          <div data-reveal>
            <EditorialLink href="/new-arrivals" className="text-wine">
              View All Arrivals
            </EditorialLink>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-[1.6fr_1fr]">
          {/* hero tile */}
          <Link href={hero.href} data-reveal className="group relative block overflow-hidden">
            <TextilePanel
              textile={hero.textile}
              idSuffix="na-hero"
              className="h-[420px] w-full transition-transform duration-[1300ms] ease-[var(--ease-editorial)] group-hover:scale-[1.03] lg:h-full lg:min-h-[560px]"
              scrim={0.4}
              ariaLabel={`${hero.title} — generative silk artwork`}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-7 text-ivory md:p-10">
              <p className="eyebrow !text-[0.6rem] text-zari-bright">
                {hero.index} · {hero.note}
              </p>
              <h3 className="font-display mt-3 text-[clamp(2.2rem,4vw,4rem)]">
                {hero.title}
              </h3>
            </div>
          </Link>

          {/* supporting tiles */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 xl:grid-cols-2">
            {rest.map((item, i) => (
              <Link
                key={item.index}
                href={item.href}
                data-reveal
                className="group block"
                style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
              >
                <div className="relative overflow-hidden">
                  <TextilePanel
                    textile={item.textile}
                    idSuffix={`na${i}`}
                    className="aspect-[4/5] w-full transition-transform duration-[1200ms] ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
                    ariaLabel={`${item.title} — generative silk artwork`}
                  />
                  <p className="font-display absolute right-3 top-3 text-3xl text-ivory/40">
                    {item.index}
                  </p>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <span className="eyebrow !text-[0.55rem] text-muted">
                    {item.note}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
