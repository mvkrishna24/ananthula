import Link from "next/link";
import { brand } from "@/data/brand";

/**
 * SECTION 13 — Final CTA.
 * The zari thread completes its journey: 1951 → today → the visitor's own
 * celebration.
 */
export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-heading"
      className="relative overflow-hidden bg-rice py-28 text-center md:py-40"
    >
      {/* thread completing */}
      <div
        aria-hidden
        data-reveal="line"
        className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-zari to-transparent"
        style={{ transformOrigin: "top center" }}
      />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <p data-reveal className="eyebrow text-zari">
          1951 → Today
        </p>
        <h2
          id="final-heading"
          data-reveal
          className="font-display mt-6 text-[clamp(2.8rem,7vw,7rem)]"
        >
          The legacy <em className="text-wine">continues.</em>
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-[36em] text-muted">
          Discover the collections in store. Begin your next celebration with{" "}
          {brand.name}.
        </p>
        <div
          data-reveal
          className="mt-11 flex flex-wrap items-center justify-center gap-5"
        >
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
    </section>
  );
}
