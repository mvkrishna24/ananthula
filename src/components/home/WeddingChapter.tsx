import Link from "next/link";
import type { CSSProperties } from "react";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brand } from "@/data/brand";
import { collectionPages } from "@/data/collections";
import { media } from "@/data/media";
import { getAvailableMedia } from "@/lib/mediaInventory";

/**
 * SECTION 05 — The Wedding Chapter.
 *
 * This is the only chapter on the homepage that BEGINS INSIDE ITS PHOTOGRAPH.
 * Pattu and Family both open with an eyebrow + heading on the ground; a third
 * repetition would make the site read as one template cycling rather than a
 * magazine turning pages. Deleting the opener is the differentiator, and it is
 * affordable here because the frame was shot for it.
 *
 * Measured against the delivered file (2752×1536) before the type was placed:
 *   · x 0–22%  (plaster)      max luminance 0.0371 → 10.5:1 vs ivory
 *   · x 22–40% (dark recess)  max luminance 0.0303 → 11.4:1 vs ivory
 *   · x 40–53% (wood door)    max luminance 0.0436 →  9.8:1 vs ivory
 * The desktop type window (source x≈8.6–51.5%) is therefore 9.8:1 worst-pixel
 * against ivory and 4.8:1 against zari-bright — both AA — and the bride never
 * begins before x 55%. Two rules follow and are not negotiable: plain zari
 * (#a58a57, 3.4:1) never touches the photograph, and the opacity floor for
 * text on the photograph is ivory/70 (5.6:1).
 *
 * Four beats, one falling left-anchored column:
 *   1 THE PLATE   the photograph, bleeding off the left edge, type inside it
 *   2 THE REGISTER bride · groom · family at equal weight, vertical hairlines
 *   3 THE BORDER  the same file re-aimed at the cloth — no face, no words
 *   4 THE CODA    the promise, left-aligned, closing on WhatsApp
 *
 * Missing photography is handled by SUBTRACTION, decided at server render and
 * resolved PER ASSET: an absent file emits no MediaSlot at all, rather than a
 * textile panel wearing a person's accessible name. The asset workflow is
 * sequential (bride → groom → family), so the gates are independent — the groom
 * appears the day he lands whether or not the family has been shot.
 *
 * Each person owns a beat with its own native geometry, and the asymmetry is
 * the art direction, not an accident:
 *   BRIDE  16:9 — the full-bleed anchor, bleeding off the left edge
 *   GROOM  4:5  — a portrait beat bleeding off the RIGHT edge, mirroring her
 *   FAMILY 3:2  — full-bleed landscape, breadth to close the human story
 * The family frame is never allowed to narrow into a portrait card: it renders
 * 3:2 at every breakpoint, because it carries several people and the
 * relationship between them is the content.
 *
 * States A (bride only), B (bride+groom) and C (all three) each render as a
 * complete chapter; adding an asset inserts a whole beat rather than reflowing
 * an existing one, so there is no layout jump inside any beat.
 */

/** Mirrors anchorId() in app/collections/[slug]/page.tsx so the deep links resolve. */
const anchorId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Dissolves the plate's left edge into the wine ground. Its job is
 *  dissolution, not legibility — the type already clears 9.8:1 unaided. */
const FEATHER =
  "linear-gradient(to right, rgba(53,16,26,0.94) 0%, rgba(53,16,26,0.78) 10%, rgba(53,16,26,0.42) 26%, rgba(53,16,26,0.14) 42%, rgba(53,16,26,0) 58%)";

/** Mirrored for the groom beat, which bleeds off the right edge instead. */
const FEATHER_RIGHT =
  "linear-gradient(to left, rgba(53,16,26,0.94) 0%, rgba(53,16,26,0.78) 10%, rgba(53,16,26,0.42) 26%, rgba(53,16,26,0.14) 42%, rgba(53,16,26,0) 58%)";

export function WeddingChapter() {
  const wedding = collectionPages.wedding;
  const inventory = getAvailableMedia();
  // Independent gates — the workflow locks one asset at a time.
  const hasGroom = inventory.includes(media.weddingGroom.src);
  const hasFamily = inventory.includes(media.weddingFamily.src);

  return (
    <section
      id="wedding"
      aria-labelledby="wedding-heading"
      className="on-dark grain relative overflow-hidden bg-wine-deep pt-20 text-ivory md:pt-28"
    >
      {/* deep silk atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 70% 0%, rgba(125,44,60,0.35), transparent 60%), radial-gradient(100% 70% at 15% 100%, rgba(165,138,87,0.12), transparent 55%)",
        }}
      />

      <div className="relative">
        {/* ---- 1 · THE PLATE ------------------------------------------ */}
        <div className="relative mx-auto w-full max-w-[1680px]">
          {/* the chapter names itself inside the photograph */}
          <div className="px-5 sm:px-8 lg:absolute lg:bottom-[52%] lg:left-0 lg:z-10 lg:w-[48%] lg:px-12">
            <Eyebrow className="text-zari-bright">{wedding.eyebrow}</Eyebrow>
            <p
              data-reveal
              style={{ "--reveal-delay": "0.10s" } as CSSProperties}
              className="font-display mt-4 text-[clamp(1.1rem,1.8vw,1.7rem)] italic text-ivory/70"
            >
              Some clothes are purchased.
            </p>
          </div>

          {/* three-sided plate: bleeds left off-screen, stops on the content
              line right. calc uses underscores so Tailwind emits real spaces —
              calc(50%-50vw) without them is invalid CSS and silently dies. */}
          <figure
            data-reveal="mask"
            className="relative mt-6 ml-[calc(50%_-_50vw)] mr-5 aspect-[4/5] [--media-pos-override:86%_50%] sm:mr-8 sm:aspect-[3/2] sm:[--media-pos-override:78%_50%] lg:mt-0 lg:mr-12 lg:aspect-[16/10] lg:[--media-pos-override:80%_50%] 2xl:aspect-[2/1] 2xl:[--media-pos-override:50%_50%]"
          >
            <MediaSlot
              slot="weddingBride"
              idSuffix="wedplate"
              className="h-full w-full"
              sizes="100vw"
            />
            {/* desktop only — below lg the visible window is the bride herself,
                and the feather would wine-wash her */}
            <div
              aria-hidden
              className="absolute inset-0 hidden lg:block"
              style={{ background: FEATHER }}
            />
          </figure>

          <div className="mt-7 px-5 sm:px-8 lg:absolute lg:left-0 lg:top-[48%] lg:z-10 lg:mt-0 lg:w-[48%] lg:px-12">
            <h2
              id="wedding-heading"
              data-reveal
              style={{ "--reveal-delay": "0.22s" } as CSSProperties}
              className="font-display max-w-[11em] text-[clamp(2.2rem,5.8vw,5.2rem)] leading-[1.04]"
            >
              Some become part of a{" "}
              <em className="text-zari-bright">family&rsquo;s history.</em>
            </h2>
          </div>
        </div>

        {/* ---- 2 · THE REGISTER --------------------------------------- */}
        <div className="relative mx-auto max-w-[1680px] px-5 pb-14 pt-14 sm:px-8 md:pb-20 md:pt-20 lg:px-12">
          {/* the thread descending out of the plate, on the site grid line */}
          <span
            aria-hidden
            className="absolute inset-y-0 left-5 hidden w-px bg-gradient-to-b from-zari/55 via-zari/28 to-transparent sm:left-8 sm:block lg:left-12"
          />

          <ul className="grid grid-cols-1 divide-y divide-ivory/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-ivory/15">
            {wedding.chapters.map((chapter, i) => (
              <li key={chapter.title}>
                <Link
                  href={`/collections/wedding#${anchorId(chapter.title)}`}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 0.08}s` } as CSSProperties}
                  // Typography only, permanently. Each person's photograph gets
                  // its own beat at its own native ratio; putting a portrait in
                  // here would force all three into one column shape and turn
                  // the register into the three-portrait grid this chapter
                  // exists to avoid.
                  className="group flex min-h-[104px] flex-col py-8 sm:py-9 sm:pl-8 sm:pr-6 lg:py-10 lg:pl-10"
                >
                  <h3 className="font-display text-[clamp(1.7rem,2.6vw,2.6rem)] leading-[1.06] transition-colors duration-300 ease-[var(--ease-editorial)] group-hover:text-zari-bright group-focus-visible:text-zari-bright">
                    {chapter.title}
                  </h3>
                  <span className="eyebrow mt-3 !text-[0.58rem] text-ivory/65">
                    {chapter.note}
                  </span>
                  <span
                    aria-hidden
                    className="mt-5 h-px w-10 origin-left scale-x-0 bg-zari-bright transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- 2b · THE GROOM (appears the day the file lands) --------- */}
        {/* 4:5 portrait-native, mirroring the bride's plate: she bleeds off the
            left edge, he bleeds off the right. Held to ~44% of the container so
            a 1.25 ratio cannot tower — real authority, not a full screen of
            man. Full-width 4:5 below lg. */}
        {hasGroom && (
          <div className="relative mx-auto w-full max-w-[1680px] pb-14 md:pb-20">
            <figure
              data-reveal="mask"
              className="relative ml-5 aspect-[4/5] sm:ml-8 lg:ml-auto lg:mr-[calc(50%_-_50vw)] lg:w-[44%]"
            >
              <MediaSlot
                slot="weddingGroom"
                idSuffix="wedgroom"
                className="h-full w-full"
                sizes="(min-width: 1024px) 46vw, 92vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 hidden lg:block"
                style={{ background: FEATHER_RIGHT }}
              />
            </figure>
          </div>
        )}

        {/* ---- 3 · THE BORDER ----------------------------------------- */}
        {/* the same file, re-aimed at the cloth — pallu, zari and her hands at
            the shoulder, no face. Silent by design; after the register names
            the three, the cloth answers without words.
            The y-value MUST be set per breakpoint: the visible slice of the
            source shrinks as the band widens, so one y that lands on cloth at
            desktop slides up into her face on a phone — a second, worse
            portrait one beat after the plate.
            Her chin bottoms out at y≈30% (measured: lit facial skin ends there;
            everything below is neck, hands and arms). Every breakpoint is
            therefore held to a window starting ≥34%.
            The band is RATIO-driven at lg, not viewport-height driven: a vh
            height with a min-height clamp inverts on short or narrow windows —
            at 1024×640 the clamp made the band 280px tall, dropping the ratio
            to 3.66:1 and pulling the window start back to y 24%, i.e. her chin
            and mouth. A fixed 5:1 gives the same window at every lg width.
            Verified windows: base y34.3–90.3%, sm y36.4–81.2%, lg y35.3–71.1%. */}
        <figure className="relative">
          <div
            data-reveal
            className="relative aspect-[16/5] w-full [--media-pos-override:50%_78%] sm:aspect-[4/1] sm:[--media-pos-override:50%_66%] lg:aspect-[5/1] lg:[--media-pos-override:50%_55%]"
          >
            <MediaSlot
              slot="weddingBride"
              idSuffix="wedborder"
              className="h-full w-full"
              sizes="100vw"
            />
          </div>
          <figcaption
            data-reveal
            style={{ "--reveal-delay": "0.12s" } as CSSProperties}
            className="eyebrow mx-auto mt-4 max-w-[1680px] px-5 text-right !text-[0.56rem] text-ivory/65 sm:px-8 lg:px-12"
          >
            Arakku pattu · antique-gold zari
          </figcaption>
        </figure>

        {/* ---- 3b · THE FAMILY (appears the day the file lands) -------- */}
        {/* 3:2 landscape at EVERY breakpoint — never narrowed into a portrait
            card. Several people, so breadth is the content: full-bleed, no
            scrim, no type, closing the human story before the promise. */}
        {hasFamily && (
          <figure
            data-reveal="mask"
            className="relative mt-14 aspect-[3/2] w-full md:mt-20"
          >
            <MediaSlot
              slot="weddingFamily"
              idSuffix="wedfamily"
              className="h-full w-full"
              sizes="100vw"
            />
          </figure>
        )}

        {/* ---- 4 · THE CODA ------------------------------------------- */}
        <div className="mx-auto max-w-[1680px] px-5 pb-28 pt-16 sm:px-8 md:pb-36 md:pt-24 lg:px-12">
          {/* the vertical thread turning horizontal, handing off to Occasions */}
          <div
            data-reveal="line"
            className="h-px w-full bg-gradient-to-r from-zari/60 via-zari/25 to-transparent"
          />

          <p className="font-display mt-12 text-[clamp(1.9rem,3.6vw,3.6rem)] leading-[1.08]">
            <span
              data-reveal
              style={{ "--reveal-delay": "0.05s" } as CSSProperties}
              className="block"
            >
              One wedding.
            </span>
            <span
              data-reveal
              style={{ "--reveal-delay": "0.14s" } as CSSProperties}
              className="block"
            >
              One family.
            </span>
            <span
              data-reveal
              style={{ "--reveal-delay": "0.23s" } as CSSProperties}
              className="block"
            >
              <em className="text-zari-bright">One destination.</em>
            </span>
          </p>

          {/* Editorial, not a service promise. The previous line ("we will
              point you to the right weaves before you travel") described a
              consultation the house has not confirmed it offers — a factual
              claim has no place on a client-facing page just because a note
              exists in CONTENT_TO_VERIFY.md. This says something true of
              weddings rather than something unverified about the business. */}
          <p
            data-reveal
            style={{ "--reveal-delay": "0.32s" } as CSSProperties}
            className="mt-7 max-w-[30em] text-[0.95rem] leading-relaxed text-ivory/70"
          >
            The cloth is chosen once. The photographs are looked at for fifty
            years.
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "0.40s" } as CSSProperties}
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {/* The master internal CTA is primary: the collection must not be
                reachable only through a chat app. WhatsApp stays as the second,
                quieter action. */}
            <Link href="/collections/wedding" className="btn-hero">
              Explore Wedding{" "}
              <span aria-hidden className="arrow">
                →
              </span>
            </Link>
            {/* min-h alone would detach the underline to the bottom of the
                padding box; ::after is pulled back under the text */}
            <a
              href={brand.whatsappWeddingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline min-h-[44px] pt-3 !pb-3 text-ivory/85 [&::after]:bottom-3 hover:text-ivory"
            >
              Wedding enquiry on WhatsApp{" "}
              <span aria-hidden className="arrow">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
