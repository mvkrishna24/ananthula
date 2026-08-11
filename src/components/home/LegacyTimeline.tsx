"use client";

import { useEffect, useRef } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EditorialLink } from "@/components/ui/EditorialLink";
import { timeline } from "@/data/timeline";

/**
 * SECTION 13 — The Warangal Story: the homepage's heritage coda.
 *
 * Deliberately the LAST chapter before FinalCTA, not the second screen:
 * fashion and commerce speak first, then the house closes with the city it
 * belongs to. A vertical zari thread draws itself down the timeline as the
 * visitor scrolls (GSAP scrub) and hands into FinalCTA's vertical thread —
 * one closing movement that ends on "The legacy continues."
 *
 * Coda energy, not opener energy: reflective copy, the same era plates, and
 * a bottom margin trimmed so the final statement arrives as its resolution.
 */
export function LegacyTimeline() {
  const threadRef = useRef<SVGLineElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const line = threadRef.current;
    const section = sectionRef.current;
    if (!line || !section) return;

    const { gsap, ScrollTrigger } = getGsap();
    const tween = gsap.fromTo(
      line,
      { attr: { y2: 0 } },
      {
        attr: { y2: 100 },
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 65%",
          scrub: 0.6,
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="legacy-heading"
      className="relative bg-rice pb-10 pt-24 md:pb-14 md:pt-36"
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <Eyebrow className="text-wine">A Warangal Story</Eyebrow>
        <h2
          id="legacy-heading"
          data-reveal
          className="font-display mt-5 max-w-[9em] text-[clamp(2.4rem,5.6vw,5.6rem)]"
        >
          Woven through <em className="text-wine">generations.</em>
        </h2>
        <p data-reveal className="measure mt-6 text-muted">
          A house of silk grows with the people around it. Since 1951, this
          one has grown with Warangal — its weddings, its festivals, its
          families.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1680px] px-5 sm:px-8 md:mt-24 lg:px-12">
        {/* the zari thread */}
        <svg
          aria-hidden
          className="absolute left-8 top-0 hidden h-full w-px overflow-visible md:left-1/2 md:block"
          viewBox="0 0 1 100"
          preserveAspectRatio="none"
        >
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100"
            stroke="var(--ak-line)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <line
            ref={threadRef}
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100"
            stroke="var(--ak-zari)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol className="space-y-20 md:space-y-32">
          {timeline.map((moment, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={moment.marker}
                className={`relative grid items-center gap-8 md:grid-cols-2 md:gap-20 ${
                  flip ? "" : ""
                }`}
              >
                {/* node on the thread */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-zari bg-rice md:block"
                />
                <div
                  data-reveal
                  className={`${flip ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}`}
                >
                  <p className="font-display text-[clamp(2.9rem,6.2vw,7.2rem)] leading-none tracking-tight text-sand">
                    {moment.marker === "1951" ? (
                      <span className="text-wine">{moment.marker}</span>
                    ) : (
                      moment.marker
                    )}
                  </p>
                  <h3 className="font-display mt-3 text-[clamp(1.5rem,2.6vw,2.2rem)]">
                    {moment.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-[30em] text-[0.98rem] text-muted ${
                      flip ? "" : "md:ml-auto"
                    }`}
                  >
                    {moment.body}
                  </p>
                </div>

                <div
                  data-reveal="mask"
                  className={`${flip ? "md:order-1 md:pr-12" : "md:pl-12"}`}
                >
                  {/* archival plate — museum-style frame awaiting family photographs */}
                  <figure className="border border-ink/12 bg-ivory p-3 shadow-[0_18px_50px_-30px_rgba(17,17,15,0.35)] sm:p-4">
                    <MediaSlot
                      slot={moment.media}
                      idSuffix={`tl${i}`}
                      className="aspect-[4/3] w-full"
                      sizes="(min-width: 768px) 44vw, 92vw"
                    />
                    <figcaption className="eyebrow mt-3 !text-[0.58rem] !tracking-[0.18em] text-muted">
                      Plate {String(i + 1).padStart(2, "0")} ·{" "}
                      {moment.archiveLabel}
                    </figcaption>
                  </figure>
                </div>
              </li>
            );
          })}
        </ol>

        {/* centred at every width — the coda funnels into FinalCTA's
            centred thread and closing statement directly below */}
        <div data-reveal className="mt-16 text-center md:mt-24">
          <EditorialLink href="/legacy" className="text-wine">
            Read the Full Story
          </EditorialLink>
        </div>
      </div>
    </section>
  );
}
