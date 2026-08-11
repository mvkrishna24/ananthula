import type { Metadata } from "next";
import Link from "next/link";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { arrivals } from "@/data/arrivals";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "New Arrivals",
  description:
    "New stories in silk, colour and celebration — the latest arrivals at Ananthula Kedari, Warangal.",
};

export default function NewArrivalsPage() {
  return (
    <>
      <section className="bg-rice pb-16 pt-44 md:pb-24">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
          <Eyebrow className="text-wine">The Current Edit</Eyebrow>
          <h1
            data-reveal
            className="font-display mt-6 max-w-[11em] text-[clamp(2.8rem,7vw,7rem)]"
          >
            New stories in silk, colour and{" "}
            <em className="text-wine">celebration.</em>
          </h1>
        </div>
      </section>

      <section aria-label="New arrivals" className="bg-rice pb-24 md:pb-36">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
          <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {arrivals.map((item, i) => (
              <li
                key={item.index}
                data-reveal
                className={i % 3 === 1 ? "lg:translate-y-12" : ""}
                style={{ "--reveal-delay": `${(i % 3) * 0.08}s` } as React.CSSProperties}
              >
                <Link href={item.href} className="group block">
                  <div className="relative overflow-hidden">
                    <TextilePanel
                      textile={item.textile}
                      idSuffix={`nap${i}`}
                      className="aspect-[3/4] w-full transition-transform duration-[1200ms] ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
                      ariaLabel={`${item.title} — generative silk artwork`}
                    />
                    <p className="font-display absolute right-4 top-4 text-4xl text-ivory/40">
                      {item.index}
                    </p>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <h2 className="font-display text-2xl">{item.title}</h2>
                    <span className="eyebrow !text-[0.56rem] text-muted">
                      {item.note}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-24 border-t border-ink/10 pt-14 text-center">
            <p data-reveal className="font-display text-[clamp(1.8rem,3.4vw,3rem)]">
              The edit changes with the season.
            </p>
            <p data-reveal className="mt-3 text-muted">
              Follow the store, or ask on WhatsApp what&rsquo;s currently at
              the counter.
            </p>
            <div data-reveal className="mt-9 flex justify-center">
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial btn-editorial--solid"
              >
                Ask What&rsquo;s New
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
