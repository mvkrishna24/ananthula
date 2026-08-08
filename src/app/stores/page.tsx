import type { Metadata } from "next";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { stores } from "@/data/stores";

export const metadata: Metadata = {
  title: "Stores — Warangal",
  description:
    "Visit Ananthula Kedari Family Shopping Mall on JPN Road, Chowrasta, Warangal — pattu, wedding, women's, men's and kids' collections since 1951.",
};

export default function StoresPage() {
  const store = stores[0];

  return (
    <>
      <section className="on-dark grain relative flex min-h-[62svh] flex-col justify-end overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <MediaSlot
            slot="storeFacade"
            idSuffix="stores-hero"
            className="h-full w-full"
            scrim={0.5}
            priority
          />
        </div>
        <div className="relative mx-auto w-full max-w-[1680px] px-5 pb-16 pt-44 sm:px-8 lg:px-12">
          <Eyebrow className="text-zari-bright">Visit Us</Eyebrow>
          <h1 data-reveal className="font-display mt-6 text-[clamp(2.8rem,7vw,6.6rem)]">
            In the heart of <em className="text-zari-bright">Warangal.</em>
          </h1>
        </div>
      </section>

      <section aria-label="Store details" className="bg-rice py-20 md:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-12">
          <div>
            <h2 data-reveal className="font-display text-3xl md:text-4xl">
              {store.name}
            </h2>
            <address data-reveal className="mt-6 border-l-2 border-zari pl-5 text-lg not-italic leading-relaxed text-muted">
              {store.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p data-reveal className="mt-5 text-lg">
              <a href={store.phoneHref} className="underline-offset-4 hover:underline">
                {store.phone}
              </a>
            </p>
            <p data-reveal className="eyebrow mt-3 !text-[0.6rem] text-muted">
              {store.hoursNote}
            </p>

            <div data-reveal className="mt-10 flex flex-wrap gap-4">
              <a
                href={store.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial btn-editorial--solid"
              >
                Get Directions
              </a>
              <a href={store.phoneHref} className="btn-editorial">
                Call Store
              </a>
              <a
                href={store.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial"
              >
                WhatsApp
              </a>
            </div>

            <ul data-reveal className="mt-12 grid gap-3 border-t border-ink/10 pt-8 text-[0.95rem] text-muted sm:grid-cols-2">
              <li>· Pattu &amp; saree counters</li>
              <li>· Wedding wardrobe, one roof</li>
              <li>· Women&rsquo;s, men&rsquo;s &amp; kids&rsquo; floors</li>
              <li>· Festival &amp; season edits</li>
            </ul>
          </div>

          <div data-reveal="mask">
            <div className="grid grid-cols-2 gap-4">
              <MediaSlot
                slot="storeInterior"
                idSuffix="sp1"
                className="aspect-[3/4] w-full"
                sizes="(min-width: 1024px) 24vw, 45vw"
              />
              <MediaSlot
                slot="storeCounter"
                idSuffix="sp2"
                className="mt-10 aspect-[3/4] w-full"
                sizes="(min-width: 1024px) 24vw, 45vw"
              />
            </div>
            <p className="eyebrow mt-4 !text-[0.56rem] text-muted">
              Storefront &amp; interior photography — to be supplied by the
              owner
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Future branches" className="border-t border-ink/10 bg-ivory py-16">
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-8">
          <p className="eyebrow text-zari">Built for growth</p>
          <p data-reveal className="font-display mx-auto mt-4 max-w-[18em] text-[clamp(1.5rem,2.8vw,2.4rem)]">
            This page is structured for multiple branches — as the house
            grows, so does the map.
          </p>
        </div>
      </section>
    </>
  );
}
