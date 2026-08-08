import { TextilePanel } from "@/components/textile/TextilePanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brand } from "@/data/brand";
import type { TextileName } from "@/data/textiles";

/**
 * SECTION 12 — Social / Reels.
 * A 9:16 reel strip — intentional frames, not an embed widget. Frames use
 * textile artwork until the store's own reels are supplied.
 */
export function SocialReels() {
  const frames: { textile: TextileName; label: string }[] = [
    { textile: "arakkuBridal", label: "Bridal pattu unfolding" },
    { textile: "turmericFestive", label: "Festive edit, this week" },
    { textile: "ivoryTissue", label: "Wedding-morning silks" },
    { textile: "peacockNight", label: "New colours at the counter" },
    { textile: "onionPink", label: "Soft silk drape check" },
  ];

  return (
    <section
      aria-labelledby="social-heading"
      className="on-dark grain overflow-hidden bg-charcoal py-24 text-ivory md:py-32"
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-zari-bright">
              {brand.instagramHandle} — to be verified
            </Eyebrow>
            <h2
              id="social-heading"
              data-reveal
              className="font-display mt-5 text-[clamp(2.4rem,5vw,4.8rem)]"
            >
              From the store, <em className="text-zari-bright">right now.</em>
            </h2>
          </div>
        </div>
      </div>

      <div className="rail mt-12 gap-5 px-5 pb-3 scroll-pl-5 sm:px-8 sm:scroll-pl-8 lg:px-12 lg:scroll-pl-12">
        {frames.map((frame, i) => (
          <figure key={frame.label} className="w-[220px] sm:w-[250px]">
            <div className="relative overflow-hidden">
              <TextilePanel
                textile={frame.textile}
                idSuffix={`sr${i}`}
                className="aspect-[9/16] w-full"
                scrim={0.25}
                ariaLabel={`${frame.label} — reel frame placeholder`}
              />
              {/* play affordance */}
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/50 bg-ink/30 pl-0.5 text-sm backdrop-blur-sm">
                  ▶
                </span>
              </span>
            </div>
            <figcaption className="eyebrow mt-3 !text-[0.56rem] text-ivory/60">
              {frame.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="eyebrow mt-8 px-5 !text-[0.58rem] text-ivory/40 sm:px-8 lg:px-12">
        Reel frames — replaced by the store&rsquo;s own videos before launch
      </p>
    </section>
  );
}
