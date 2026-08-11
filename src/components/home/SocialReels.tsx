import { MediaSlot } from "@/components/media/MediaSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brand } from "@/data/brand";
import type { MediaSlotName } from "@/data/media";

/**
 * SECTION 12 — Social / Reels.
 * A 9:16 reel strip — intentional frames, not an embed widget. Frames use
 * textile artwork until the store's own reels are supplied.
 */
export function SocialReels() {
  const frames: { media: MediaSlotName; label: string }[] = [
    { media: "reel01", label: "Bridal pattu unfolding" },
    { media: "reel02", label: "The festive edit" },
    { media: "reel03", label: "Wedding-morning silks" },
    { media: "reel04", label: "Colours at the counter" },
    { media: "reel05", label: "Soft silk drape check" },
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
              {brand.instagramHandle}
            </Eyebrow>
            <h2
              id="social-heading"
              data-reveal
              className="font-display mt-5 text-[clamp(2.4rem,5vw,4.8rem)]"
            >
              From the store, <em className="text-zari-bright">in colour.</em>
            </h2>
          </div>
        </div>
      </div>

      <div className="rail mt-12 gap-5 px-5 pb-3 scroll-pl-5 sm:px-8 sm:scroll-pl-8 lg:px-12 lg:scroll-pl-12">
        {frames.map((frame, i) => (
          <figure key={frame.label} className="w-[220px] sm:w-[250px]">
            <div className="relative overflow-hidden">
              {/* No play affordance until real reels exist — a play button
                  over artwork promises video the demo cannot deliver. */}
              <MediaSlot
                slot={frame.media}
                idSuffix={`sr${i}`}
                className="aspect-[9/16] w-full"
                scrim={0.25}
                sizes="250px"
              />
            </div>
            <figcaption className="eyebrow mt-3 !text-[0.56rem] text-ivory/60">
              {frame.label}
            </figcaption>
          </figure>
        ))}
      </div>

    </section>
  );
}
