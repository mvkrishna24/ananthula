import Link from "next/link";
import { MediaSlot } from "@/components/media/MediaSlot";

/**
 * SECTION 01 — Hero V2.
 *
 * Hierarchy: place → wordmark → statement → pillars → actions.
 * The media slot takes the owner's hero photograph (subject right-of-centre,
 * negative space left); until then the arakku silk artwork carries it. The
 * 1951 intro fades directly into this composition (html[data-intro-done]).
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

      <div className="relative mx-auto w-full max-w-[1680px] px-5 pb-24 pt-36 sm:px-8 md:pb-28 lg:px-12">
        <p
          className="hero-reveal eyebrow !tracking-[0.34em] text-zari-bright"
          style={{ "--hd": "0.05s" } as React.CSSProperties}
        >
          Warangal · Since 1951
        </p>

        <h1
          className="hero-reveal font-display mt-6 text-[clamp(3.1rem,9.5vw,8.75rem)] uppercase leading-[0.94] tracking-[0.015em]"
          style={{ "--hd": "0.2s" } as React.CSSProperties}
        >
          Ananthula
          <br />
          Kedari
        </h1>

        <p
          className="hero-reveal font-display mt-7 text-[clamp(1.35rem,2.6vw,2.3rem)] italic leading-snug text-ivory/90"
          style={{ "--hd": "0.4s" } as React.CSSProperties}
        >
          Dressing generations <span className="text-zari-bright">since 1951.</span>
        </p>

        <p
          className="hero-reveal eyebrow mt-7 !tracking-[0.3em] text-ivory/75"
          style={{ "--hd": "0.55s" } as React.CSSProperties}
        >
          Pattu · Wedding · Women · Men · Kids
        </p>

        <div
          className="hero-reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={{ "--hd": "0.7s" } as React.CSSProperties}
        >
          <Link href="/legacy" className="btn-editorial">
            Explore the Legacy
          </Link>
          <Link href="/stores" className="link-underline !pb-1.5 text-ivory/90">
            Visit Our Store <span aria-hidden className="arrow">→</span>
          </Link>
        </div>
      </div>

      {/* scroll cue — the thread continuing, clear of the border band */}
      <div
        aria-hidden
        className="hero-reveal pointer-events-none absolute bottom-[86px] right-8 hidden flex-col items-center gap-3 md:flex lg:right-12"
        style={{ "--hd": "1s" } as React.CSSProperties}
      >
        <span className="eyebrow !text-[0.56rem] !tracking-[0.3em] text-ivory/60 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="scroll-cue block h-14 w-px bg-gradient-to-b from-zari-bright/0 via-zari-bright to-zari-bright/0" />
      </div>
    </section>
  );
}
