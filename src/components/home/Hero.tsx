import Link from "next/link";
import { MediaSlot } from "@/components/media/MediaSlot";

/**
 * SECTION 01 — Hero (final art direction).
 *
 * Editorial split: brand narrative lives in the left ~42% of the frame,
 * the locked campaign photograph carries the right — no visible seam, the
 * image flows underneath the type. Reveal choreography lands the full
 * story in ~2s after the 1951 intro hands over. A hairline zari thread
 * (the Digital Weave) draws down toward the slim heritage band that
 * transitions into the Legacy chapter.
 */
export function Hero() {
  return (
    <section className="on-dark relative flex min-h-svh flex-col justify-end overflow-hidden bg-[#0c0b09] text-ivory">
      <div className="hero-drift absolute inset-0">
        <MediaSlot
          slot="heroMain"
          className="h-full w-full"
          priority
          sizes="100vw"
        />
      </div>
      {/* legibility: left column + floor, keeping the right of frame open */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,8,7,0.62), rgba(10,8,7,0.28) 42%, rgba(10,8,7,0) 68%), linear-gradient(to top, rgba(10,8,7,0.72), rgba(10,8,7,0) 46%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1680px] px-5 pb-12 pt-32 sm:px-8 md:pb-16 lg:px-12">
        <p
          className="hero-reveal eyebrow !text-[0.66rem] !tracking-[0.34em] text-zari-bright"
          style={{ "--hd": "0.15s" } as React.CSSProperties}
        >
          Warangal · Since 1951
        </p>

        <h1
          className="hero-reveal font-display mt-5 text-[clamp(2.4rem,7.4vw,6.9rem)] uppercase leading-[0.96] tracking-[0.02em]"
          style={{ "--hd": "0.35s" } as React.CSSProperties}
        >
          Ananthula
          <br />
          Kedari
        </h1>

        <p
          className="hero-reveal font-display mt-5 text-[clamp(1.2rem,2.3vw,2.05rem)] italic leading-snug text-ivory/90 md:mt-6"
          style={{ "--hd": "0.65s" } as React.CSSProperties}
        >
          Dressing generations{" "}
          <span className="text-zari-bright">since 1951.</span>
        </p>

        <p
          className="hero-reveal eyebrow mt-5 !text-[0.58rem] !tracking-[0.28em] text-ivory/60 md:mt-6 md:!text-[0.64rem] md:!tracking-[0.34em]"
          style={{ "--hd": "0.85s" } as React.CSSProperties}
        >
          Pattu&ensp;·&ensp;Wedding&ensp;·&ensp;Women&ensp;·&ensp;Men&ensp;·&ensp;Kids
        </p>

        <div
          className="hero-reveal mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-9"
          style={{ "--hd": "1.05s" } as React.CSSProperties}
        >
          <Link href="/collections/pattu" className="btn-hero">
            Explore Collections{" "}
            <span aria-hidden className="arrow">
              →
            </span>
          </Link>
          <Link
            href="/stores"
            className="link-underline !pb-1.5 text-ivory/80 hover:text-ivory"
          >
            Visit Our Store <span aria-hidden className="arrow">→</span>
          </Link>
        </div>

      </div>

      {/* scroll cue — quiet, right side, above the band */}
      <div
        aria-hidden
        className="hero-reveal pointer-events-none absolute bottom-14 right-8 hidden flex-col items-center gap-3 md:flex lg:right-12"
        style={{ "--hd": "1.5s" } as React.CSSProperties}
      >
        <span className="eyebrow !text-[0.52rem] !tracking-[0.3em] text-ivory/45 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="scroll-cue block h-12 w-px bg-gradient-to-b from-zari-bright/0 via-zari-bright/70 to-zari-bright/0" />
      </div>

      {/* slim heritage band — the weave carrying the eye into the Legacy chapter */}
      <div
        aria-hidden
        className="relative h-6 w-full border-t border-zari/25 bg-wine-deep/95 md:h-7"
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.32]"
          preserveAspectRatio="none"
          role="presentation"
        >
          <defs>
            <pattern
              id="hero-band"
              width="22"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 20 L11 5 L22 20 Z" fill="var(--ak-zari)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-band)" />
        </svg>
      </div>
    </section>
  );
}
