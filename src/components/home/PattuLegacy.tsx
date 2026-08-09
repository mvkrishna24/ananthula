import Link from "next/link";
import type { CSSProperties } from "react";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pattuChapters } from "@/data/collections";

/**
 * SECTION 03 — The Pattu Legacy.
 *
 * One continuous editorial chapter — a material study in four beats:
 *   01 · THE SILK      full-bleed macro, weave and zari as truth
 *   02 · THE DRAPE     how pattu lives on a person + the house index
 *   03 · THE CRAFT     a second crop of the SAME macro (border region)
 *   04 · THE OCCASION  the bridge toward weddings and family
 *
 * Two locked campaign assets carry the whole chapter; the five weave
 * categories live on as a quiet archive index, not cards.
 */
export function PattuLegacy() {
  return (
    <section
      aria-labelledby="pattu-heading"
      className="on-dark grain relative overflow-hidden bg-charcoal text-ivory"
    >
      {/* the thread arrives from the timeline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zari/70 to-transparent"
      />

      {/* chapter opening */}
      <div className="mx-auto max-w-[1680px] px-5 pt-24 sm:px-8 md:pt-32 lg:px-12">
        <Eyebrow className="text-zari-bright">The House of Silk</Eyebrow>
        <h2
          id="pattu-heading"
          data-reveal
          className="font-display mt-5 max-w-[14em] text-[clamp(2rem,4vw,3.8rem)]"
        >
          The Pattu <em className="text-zari-bright">Legacy.</em>
        </h2>
      </div>

      {/* ---- 01 · THE SILK — full-bleed material truth ---------------- */}
      <div
        data-reveal="mask"
        className="relative mt-10 h-[68svh] min-h-[420px] w-full md:mt-14 md:h-[78svh] md:min-h-[560px]"
      >
        <MediaSlot
          slot="pattuMacro"
          idSuffix="silk"
          className="h-full w-full"
          sizes="100vw"
        />
        {/* floor + left legibility, protecting the weave elsewhere */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,8,7,0.55), rgba(10,8,7,0) 42%), linear-gradient(to right, rgba(10,8,7,0.3), rgba(10,8,7,0) 40%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-[1680px] px-5 pb-10 sm:px-8 md:pb-14 lg:px-12">
            <p
              data-reveal
              className="eyebrow !text-[0.6rem] !tracking-[0.3em] text-zari-bright/90"
            >
              01 · The Silk
            </p>
            <p
              aria-hidden
              data-reveal
              className="font-display mt-3 text-[clamp(3.2rem,8.6vw,7.8rem)] uppercase leading-none tracking-[0.04em]"
              style={{ "--reveal-delay": "0.12s" } as CSSProperties}
            >
              Pattu
            </p>
            <p
              data-reveal
              className="font-display mt-3 text-[clamp(1.1rem,1.9vw,1.65rem)] italic text-ivory/85"
              style={{ "--reveal-delay": "0.24s" } as CSSProperties}
            >
              Silk with weight.{" "}
              <span className="text-zari-bright">Zari with memory.</span>
            </p>
          </div>
        </div>
      </div>

      {/* ---- 02 · THE DRAPE — editorial split + house index ----------- */}
      <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[54fr_46fr] lg:gap-16 lg:px-12">
        <figure data-reveal="mask" className="relative">
          <MediaSlot
            slot="pattuKanchipuram"
            className="aspect-[4/5] w-full sm:aspect-[3/4] lg:h-full lg:min-h-[640px]"
            sizes="(min-width: 1024px) 54vw, 92vw"
          />
        </figure>

        <div className="flex flex-col justify-center">
          <Eyebrow className="text-zari-bright" rule={false}>
            02 · The Drape
          </Eyebrow>
          <h3
            data-reveal
            className="font-display mt-4 max-w-[13em] text-[clamp(1.8rem,3vw,2.9rem)] leading-[1.12]"
          >
            A drape carried from one generation{" "}
            <em className="text-zari-bright">to the next.</em>
          </h3>
          <p
            data-reveal
            className="mt-4 max-w-[34em] text-[0.95rem] leading-relaxed text-ivory/60"
          >
            Weight in the pleats. A border that follows every fold. This is how
            pattu lives — on people, at ceremonies, in photographs kept for
            decades.
          </p>

          {/* the house index — archive rows, not cards */}
          <ol data-reveal className="mt-10 border-t border-ivory/12">
            {pattuChapters.map((chapter, i) => (
              <li key={chapter.slug} className="border-b border-ivory/12">
                <Link
                  href={chapter.href}
                  className="group flex min-h-[52px] items-baseline gap-5 py-4 transition-colors duration-300 hover:text-zari-bright focus-visible:text-zari-bright"
                >
                  <span className="eyebrow !text-[0.6rem] text-zari-bright/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display flex-1 text-xl md:text-2xl">
                    {chapter.title}
                  </span>
                  <span className="eyebrow hidden !text-[0.55rem] text-ivory/40 sm:block">
                    {chapter.eyebrow.split("· ")[1] ?? ""}
                  </span>
                  <span
                    aria-hidden
                    className="transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-2"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ---- 03 · THE CRAFT — the same macro, re-aimed at the border -- */}
      <div
        className="relative hidden h-[38vh] min-h-[300px] w-full md:block"
        style={{ "--media-pos-override": "62% 78%" } as CSSProperties}
      >
        <MediaSlot
          slot="pattuMacro"
          idSuffix="craft"
          className="h-full w-full"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,8,7,0.62), rgba(10,8,7,0.2) 38%, rgba(10,8,7,0) 55%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12">
            <Eyebrow className="text-zari-bright" rule={false}>
              03 · The Craft
            </Eyebrow>
            <p
              data-reveal
              className="font-display mt-4 max-w-[13em] text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.15]"
            >
              A border is not decoration — it is where silk and zari{" "}
              <em className="text-zari-bright">meet.</em>
            </p>
          </div>
        </div>
      </div>

      {/* ---- 04 · THE OCCASION — the bridge ---------------------------- */}
      <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-20 text-center sm:px-8 md:pb-32 md:pt-28">
        <p
          data-reveal
          className="eyebrow !text-[0.6rem] !tracking-[0.3em] text-zari-bright/80"
        >
          04 · The Occasion
        </p>
        <p
          data-reveal
          className="font-display mx-auto mt-5 max-w-[13em] text-[clamp(2rem,4.2vw,4rem)] leading-[1.08]"
        >
          Woven for the days{" "}
          <em className="text-zari-bright">families remember.</em>
        </p>
        <div
          data-reveal
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          <Link href="/collections/pattu" className="btn-hero">
            Enter the Pattu World{" "}
            <span aria-hidden className="arrow">
              →
            </span>
          </Link>
          <Link
            href="/collections/wedding"
            className="link-underline !pb-1.5 text-ivory/80 hover:text-ivory"
          >
            Explore Wedding <span aria-hidden className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
