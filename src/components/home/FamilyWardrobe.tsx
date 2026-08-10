import Link from "next/link";
import type { CSSProperties } from "react";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { collectionPages, familyWorlds } from "@/data/collections";

/**
 * SECTION 04 — The Family Wardrobe.
 *
 * One locked campaign photograph carries the chapter emotionally; a quiet
 * archive index carries the commerce. After the dark, material Pattu
 * chapter this opens into daylight — ivory ground, warm plaster, people.
 *
 * Art direction is built around the real frame rather than against it:
 *   · ≥1024px renders the photograph at its native ratio, so nothing is
 *     cropped — grandmother, child, mother and father all held, and the
 *     quiet plaster on the left kept intact
 *   · below 1024px a 3:2 landscape crop (never a portrait crop) keeps all
 *     four people instead of trading the father away for image height
 *   · no type sits on the photograph: the left plaster is a mottled
 *     tree-shadow field measuring 0.9–1.7:1 at worst against both ink and
 *     ivory, so the headline lives on the ivory ground where contrast is
 *     dependable and the plaster stays a place for the eye to rest
 *
 * The child is turned away in this accepted frame and the father stands a
 * step apart behind a timber column. Neither is disguised — the index below
 * carries KIDS and MEN explicitly, which is the honest division of labour:
 * the photograph states the relationship, the index states the categories.
 */

/**
 * Category signals come from the real collection taxonomy, so this can never
 * drift into inventory the house has not confirmed. Wedding chapters are
 * filtered out deliberately: they are real departments, but this chapter must
 * stay domestic and leave the wedding register to the chapter that follows.
 * Filtering by title rather than by index means a reordering of the data can
 * never slip a bridal word back into the family index.
 */
const signalFor = (slug: string) =>
  (collectionPages[slug]?.chapters ?? [])
    .filter((chapter) => !/wedding/i.test(chapter.title))
    .slice(0, 3)
    .map((chapter) => chapter.title.replace(/ Wear$/, ""))
    .join(" · ");

export function FamilyWardrobe() {
  return (
    <section
      aria-labelledby="family-heading"
      className="relative overflow-hidden bg-ivory pb-24 pt-24 md:pb-32 md:pt-32"
    >
      {/* chapter opening — restrained; the photograph states the meaning */}
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <Eyebrow className="text-wine">The Family Wardrobe</Eyebrow>
        <h2
          id="family-heading"
          data-reveal
          className="font-display mt-5 text-[clamp(2.4rem,5.4vw,5.2rem)] leading-[1.06]"
        >
          {/* the em is block-level so the line always breaks between the two
              sentences — a measure-based wrap orphaned "Every" onto line one
              at every breakpoint and split the phrase the copy was built on */}
          One house.{" "}
          <em className="block text-wine">Every generation.</em>
        </h2>
      </div>

      {/* the family anchor — full-bleed, architectural, uncropped on desktop.
          Uses a plain data-reveal (fade + settle) rather than the house's
          data-reveal="mask" uncover; switching it is a one-word change now
          that the mask reveal works again. */}
      <div
        data-reveal
        className="relative mt-12 aspect-[3/2] w-full md:mt-16 lg:aspect-[2752/1536]"
      >
        <MediaSlot
          slot="familyCelebration"
          idSuffix="fam"
          className="h-full w-full"
          sizes="100vw"
        />
      </div>

      {/* the house index — archive rows, not cards */}
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <ol className="mt-14 border-t border-ink/12 md:mt-20">
          {familyWorlds.map((world, i) => (
            <li key={world.slug} className="border-b border-ink/12">
              <Link
                href={world.href}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.08}s` } as CSSProperties}
                className="group relative grid min-h-[64px] grid-cols-[auto_1fr] items-baseline gap-x-5 py-6 pr-9 transition-colors duration-300 ease-[var(--ease-editorial)] hover:text-wine focus-visible:text-wine md:grid-cols-[auto_1fr_auto] md:gap-x-10 md:py-9 md:pr-14"
              >
                <span className="eyebrow !text-[0.62rem] text-wine/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] leading-none">
                  {world.title}
                </h3>
                <span className="eyebrow col-start-2 mt-3 !text-[0.58rem] text-ink/65 md:col-start-3 md:row-start-1 md:mt-0 md:text-right">
                  {signalFor(world.slug)}
                </span>
                <span
                  aria-hidden
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-xl transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-2 group-focus-visible:translate-x-2"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
