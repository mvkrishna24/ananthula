import type { Metadata } from "next";
import Link from "next/link";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { timeline } from "@/data/timeline";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Our Story — Since 1951",
  description:
    "The Ananthula Kedari story — a Warangal family fashion house woven through generations since 1951.",
};

export default function LegacyPage() {
  return (
    <>
      {/* chapter opening */}
      <section className="on-dark grain relative flex min-h-[72svh] flex-col justify-end overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <TextilePanel
            textile="agedLoom"
            idSuffix="legacy-hero"
            className="h-full w-full"
            scrim={0.5}
            ariaLabel="Aged loom textile — generative artwork"
          />
        </div>
        <div className="relative mx-auto w-full max-w-[1680px] px-5 pb-20 pt-44 sm:px-8 lg:px-12">
          <Eyebrow className="text-zari-bright">Our Story</Eyebrow>
          <h1 data-reveal className="font-display mt-6 text-[clamp(3.4rem,10vw,9rem)]">
            Since <em className="text-zari-bright">1951.</em>
          </h1>
          <p data-reveal className="measure mt-6 text-lg text-ivory/70">
            A business can sell clothing. A legacy becomes part of
            people&rsquo;s celebrations.
          </p>
        </div>
      </section>

      {/* the long thread */}
      <section
        aria-label="Timeline"
        className="bg-rice py-24 md:py-36"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <ol className="space-y-24 md:space-y-36">
            {timeline.map((moment, i) => (
              <li key={moment.marker} className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16">
                <div data-reveal className="md:sticky md:top-32">
                  <p className="font-display text-[clamp(3.6rem,10vw,8rem)] leading-none text-sand">
                    <span className={i === 0 ? "text-wine" : undefined}>
                      {moment.marker}
                    </span>
                  </p>
                  <h2 className="font-display mt-4 text-3xl">{moment.title}</h2>
                  <p className="mt-4 max-w-[30em] text-muted">{moment.body}</p>
                </div>
                <figure data-reveal="mask" className="border border-ink/12 bg-ivory p-4 shadow-[0_18px_50px_-30px_rgba(17,17,15,0.35)]">
                  <TextilePanel
                    textile={moment.textile}
                    idSuffix={`lg${i}`}
                    className="aspect-[4/3] w-full"
                    ariaLabel={`Textile artwork standing in for: ${moment.archiveLabel}`}
                  />
                  <figcaption className="eyebrow mt-3 !text-[0.58rem] text-muted">
                    Archive {String(i + 1).padStart(2, "0")} — {moment.archiveLabel}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>

          <div className="mt-24 border-t border-ink/10 pt-14 text-center md:mt-36">
            <p className="eyebrow text-zari">The next chapter</p>
            <p data-reveal className="font-display mx-auto mt-5 max-w-[16em] text-[clamp(1.9rem,4vw,3.6rem)]">
              The family history above will be completed with the
              family&rsquo;s own archive — photographs, milestones and the
              founder&rsquo;s story.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link href="/stores" className="btn-editorial btn-editorial--solid">
                Visit the Store
              </Link>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-wine"
              >
                Chat on WhatsApp <span aria-hidden className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
