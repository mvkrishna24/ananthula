import Link from "next/link";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { brand } from "@/data/brand";

/**
 * Full-viewport hero. The arakku bridal silk is drawn generatively (see
 * TextilePanel) and drifts very slowly; typography reveals in sequence once
 * the 1951 intro hands over (html[data-intro-done]).
 */
export function Hero() {
  return (
    <section className="on-dark relative flex min-h-svh flex-col justify-end overflow-hidden bg-[#0c0b09] text-ivory">
      <div className="hero-drift absolute inset-0">
        <TextilePanel
          textile="arakkuBridal"
          className="h-full w-full"
          idSuffix="hero"
          scrim={0.42}
          ariaLabel="Deep arakku red Kanchipuram silk with a gold temple border — generative textile artwork"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1680px] px-5 pb-24 pt-40 sm:px-8 md:pb-28 lg:px-12">
        <p
          className="hero-reveal eyebrow text-zari-bright"
          style={{ "--hd": "0.05s" } as React.CSSProperties}
        >
          {brand.name} · Since {brand.since}
        </p>

        <h1
          className="hero-reveal font-display mt-6 max-w-[11em] text-[clamp(2.9rem,7.6vw,7.5rem)] leading-[1.02]"
          style={{ "--hd": "0.22s" } as React.CSSProperties}
        >
          Dressing Generations
          <br />
          <em className="text-zari-bright">Since 1951.</em>
        </h1>

        <p
          className="hero-reveal eyebrow mt-8 !tracking-[0.3em] text-ivory/80"
          style={{ "--hd": "0.4s" } as React.CSSProperties}
        >
          Pattu · Wedding · Women · Men · Kids
        </p>

        <div
          className="hero-reveal mt-10 flex flex-wrap items-center gap-4"
          style={{ "--hd": "0.55s" } as React.CSSProperties}
        >
          <Link href="/legacy" className="btn-editorial">
            Explore the Legacy
          </Link>
          <Link
            href="/stores"
            className="link-underline !pb-1.5 text-ivory/90"
          >
            Visit Our Store <span aria-hidden className="arrow">→</span>
          </Link>
        </div>
      </div>

    </section>
  );
}
