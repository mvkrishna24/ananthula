import Link from "next/link";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { familyWorlds } from "@/data/collections";

/**
 * SECTION 04 — The Family Wardrobe.
 * Desktop: three tall editorial panels that expand on hover/focus (pure CSS
 * flex-grow, keyboard-friendly via focus-within). Mobile: stacked full-width
 * panels. No hover-only information — labels are always visible.
 */
export function FamilyWardrobe() {
  return (
    <section
      aria-labelledby="family-heading"
      className="bg-ivory py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <Eyebrow className="text-wine">The Family Wardrobe</Eyebrow>
        <h2
          id="family-heading"
          data-reveal
          className="font-display mt-5 text-[clamp(2.6rem,6vw,6rem)]"
        >
          Dressed <em className="text-wine">together.</em>
        </h2>
        <p data-reveal className="measure mt-5 text-muted">
          One roof for every generation in the photograph — women, men and the
          little ones stealing the frame.
        </p>
      </div>

      <div
        data-reveal
        className="mx-auto mt-14 flex max-w-[1680px] flex-col gap-4 px-5 sm:px-8 md:mt-20 lg:h-[72vh] lg:min-h-[520px] lg:flex-row lg:px-12"
      >
        {familyWorlds.map((world, i) => (
          <Link
            key={world.slug}
            href={world.href}
            className="group relative flex-1 overflow-hidden transition-[flex-grow] duration-700 ease-[var(--ease-editorial)] hover:flex-[1.9] focus-visible:flex-[1.9] lg:flex-[1]"
          >
            <MediaSlot
              slot={world.media}
              idSuffix={`fw${i}`}
              className="h-full min-h-[380px] w-full transition-transform duration-[1400ms] ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
              scrim={0.35}
              sizes="(min-width: 1024px) 40vw, 92vw"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-7 pb-10 text-ivory lg:p-10 lg:pb-12">
              <p className="eyebrow !text-[0.6rem] text-zari-bright/90">
                {world.eyebrow}
              </p>
              <h3 className="font-display mt-3 text-[clamp(2.2rem,3.6vw,3.8rem)]">
                {world.title}
              </h3>
              <p className="mt-3 max-w-[24em] text-[0.88rem] leading-relaxed text-ivory/70">
                {world.description}
              </p>
              <p className="link-underline mt-5 self-start text-ivory">
                Explore {world.title}{" "}
                <span aria-hidden className="arrow">
                  →
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
