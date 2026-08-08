"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EditorialLink } from "@/components/ui/EditorialLink";
import { pattuChapters } from "@/data/collections";

/**
 * SECTION 03 — The Pattu Legacy.
 * A dark silk chapter with a native horizontal rail (scroll-snap, no
 * hijacking): each weave is a large tactile panel, numbered like plates in a
 * textile archive. Arrow buttons give keyboard/desktop control.
 */
export function PattuLegacy() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const panel = rail.querySelector<HTMLElement>("[data-panel]");
    const step = panel ? panel.offsetWidth + 24 : rail.clientWidth * 0.7;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section
      aria-labelledby="pattu-heading"
      className="on-dark grain relative overflow-hidden bg-charcoal py-24 text-ivory md:py-36"
    >
      {/* the thread arrives from the timeline and becomes a saree border */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zari/70 to-transparent"
      />

      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow className="text-zari-bright">The House of Silk</Eyebrow>
            <h2
              id="pattu-heading"
              data-reveal
              className="font-display mt-5 text-[clamp(2.6rem,6vw,6rem)]"
            >
              The Pattu <em className="text-zari-bright">Legacy.</em>
            </h2>
            <p data-reveal className="measure mt-5 text-ivory/65">
              Silk for ceremonies, celebrations and memories that outlive the
              moment.
            </p>
          </div>
          <div
            data-reveal
            className="hidden items-center gap-3 md:flex"
            role="group"
            aria-label="Browse pattu chapters"
          >
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous weave"
              className="flex h-12 w-12 items-center justify-center border border-ivory/25 transition-colors hover:border-zari-bright hover:text-zari-bright"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next weave"
              className="flex h-12 w-12 items-center justify-center border border-ivory/25 transition-colors hover:border-zari-bright hover:text-zari-bright"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        className="rail mt-14 gap-6 px-5 pb-4 scroll-pl-5 sm:px-8 sm:scroll-pl-8 md:mt-20 lg:px-12 lg:scroll-pl-12"
        aria-label="Pattu collection chapters"
      >
        {pattuChapters.map((chapter, i) => (
          <article
            key={chapter.slug}
            data-panel
            className="group w-[82vw] max-w-[520px] sm:w-[60vw] lg:w-[44vw] xl:w-[560px]"
          >
            <Link href={chapter.href} className="block">
              <div className="relative overflow-hidden">
                <TextilePanel
                  textile={chapter.textile}
                  idSuffix={`p${i}`}
                  className="aspect-[3/4] w-full transition-transform duration-[1200ms] ease-[var(--ease-editorial)] group-hover:scale-[1.03]"
                  ariaLabel={`${chapter.title} — generative silk artwork`}
                />
                {/* light sweep on hover — the silk responds */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1100ms] ease-[var(--ease-fabric)] group-hover:translate-x-[120%]"
                />
                <p className="font-display absolute right-4 top-4 text-5xl text-ivory/35">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl md:text-3xl">
                  {chapter.title}
                </h3>
                <span className="eyebrow !text-[0.58rem] text-zari-bright/80">
                  {chapter.eyebrow}
                </span>
              </div>
              <p className="mt-2 max-w-[30em] text-[0.92rem] leading-relaxed text-ivory/55">
                {chapter.description}
              </p>
            </Link>
          </article>
        ))}
        {/* end card */}
        <div className="flex w-[70vw] max-w-[420px] items-center justify-center border border-ivory/12">
          <div className="p-10 text-center">
            <p className="font-display text-3xl">
              Every weave, <em className="text-zari-bright">in store.</em>
            </p>
            <EditorialLink
              href="/collections/pattu"
              className="mt-6 text-zari-bright"
            >
              Enter the Pattu World
            </EditorialLink>
          </div>
        </div>
      </div>

      <p className="eyebrow mt-8 px-5 !text-[0.6rem] text-ivory/40 sm:px-8 md:hidden lg:px-12">
        Swipe to browse →
      </p>
    </section>
  );
}
