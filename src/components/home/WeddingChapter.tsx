import Link from "next/link";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { brand } from "@/data/brand";

/**
 * SECTION 05 — The Wedding Chapter.
 * The palette deepens into wine and antique gold. Copy leads with emotion;
 * three panels move bride → groom → family; the section closes on the
 * commercial promise and a working WhatsApp path.
 */
export function WeddingChapter() {
  const panels = [
    { title: "For the Bride", note: "Bridal pattu · silk · heirloom", textile: "arakkuBridal" as const },
    { title: "For the Groom", note: "Silk · ethnic · occasion", textile: "inkRawSilk" as const },
    { title: "For the Family", note: "Everyone in the photograph", textile: "ivoryTissue" as const },
  ];

  return (
    <section
      aria-labelledby="wedding-heading"
      className="on-dark grain relative overflow-hidden bg-wine-deep py-28 text-ivory md:py-40"
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

      <div className="relative mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <p data-reveal className="font-display text-[clamp(1.3rem,2.4vw,2rem)] italic text-ivory/60">
          Some clothes are purchased.
        </p>
        <h2
          id="wedding-heading"
          data-reveal
          className="font-display mt-4 max-w-[13em] text-[clamp(2.4rem,5.8vw,5.8rem)] leading-[1.05]"
          style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
        >
          Some become part of a{" "}
          <em className="text-zari-bright">family&rsquo;s history.</em>
        </h2>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3">
          {panels.map((panel, i) => (
            <Link
              key={panel.title}
              href="/collections/wedding"
              data-reveal
              className={`group block ${i === 1 ? "md:translate-y-10" : ""}`}
              style={{ "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties}
            >
              <div className="relative overflow-hidden">
                <TextilePanel
                  textile={panel.textile}
                  idSuffix={`wd${i}`}
                  className="aspect-[3/4] w-full transition-transform duration-[1300ms] ease-[var(--ease-editorial)] group-hover:scale-[1.035]"
                  ariaLabel={`${panel.title} — generative silk artwork`}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/8 to-transparent transition-transform duration-[1200ms] ease-[var(--ease-fabric)] group-hover:translate-x-[130%]"
                />
              </div>
              <h3 className="font-display mt-5 text-2xl md:text-[1.7rem]">
                {panel.title}
              </h3>
              <p className="eyebrow mt-2 !text-[0.58rem] text-zari-bright/80">
                {panel.note}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-20 border-t border-ivory/12 pt-14 md:mt-28 md:pt-16">
          <p
            data-reveal
            className="font-display mx-auto max-w-[14em] text-center text-[clamp(2rem,4.6vw,4.4rem)] leading-[1.1]"
          >
            One wedding. One family.{" "}
            <em className="text-zari-bright">One destination.</em>
          </p>
          <div
            data-reveal
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
          >
            <Link href="/collections/wedding" className="btn-editorial">
              Explore Wedding
            </Link>
            <a
              href={brand.whatsappWeddingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-zari-bright"
            >
              Plan on WhatsApp <span aria-hidden className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
