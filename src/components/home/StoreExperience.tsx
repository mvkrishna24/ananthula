import { MediaSlot } from "@/components/media/MediaSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { stores } from "@/data/stores";

/**
 * SECTION 10 — Store Experience.
 * The website's real job: sending Warangal into the store. Address, phone,
 * and the three actions that matter, beside a counter-and-silk composition.
 */
export function StoreExperience() {
  const store = stores[0];

  return (
    <section
      aria-labelledby="store-heading"
      className="bg-rice py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-[1680px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <Eyebrow className="text-wine">Visit Warangal&rsquo;s Own</Eyebrow>
          <h2
            id="store-heading"
            data-reveal
            className="font-display mt-5 max-w-[10em] text-[clamp(2.4rem,5.2vw,5rem)]"
          >
            More than a <em className="text-wine">store visit.</em>
          </h2>
          <p data-reveal className="measure mt-5 text-muted">
            Discover pattu, wedding, women&rsquo;s, men&rsquo;s and kids&rsquo;
            collections in the heart of Warangal — silk shown by hand, at the
            counter, the way it should be.
          </p>

          <address data-reveal className="mt-8 border-l-2 border-zari pl-5 not-italic">
            <p className="font-display text-xl">{store.name}</p>
            {store.addressLines.map((line) => (
              <p key={line} className="text-[0.95rem] text-muted">
                {line}
              </p>
            ))}
            <p className="mt-2 text-[0.95rem]">
              <a href={store.phoneHref} className="underline-offset-4 hover:underline">
                {store.phone}
              </a>
            </p>
            <p className="eyebrow mt-2 !text-[0.58rem] text-muted">
              {store.hoursNote}
            </p>
          </address>

          <div data-reveal className="mt-9 flex flex-wrap gap-4">
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
        </div>

        {/* the showroom — interior and counter photography slots */}
        <div data-reveal="mask" className="relative">
          <div className="grid grid-cols-2 gap-4">
            <MediaSlot
              slot="storeInterior"
              idSuffix="st1"
              className="aspect-[3/4] w-full"
              sizes="(min-width: 1024px) 24vw, 45vw"
            />
            <MediaSlot
              slot="storeCounter"
              idSuffix="st2"
              className="mt-10 aspect-[3/4] w-full"
              sizes="(min-width: 1024px) 24vw, 45vw"
            />
          </div>
          <p className="eyebrow mt-4 !text-[0.56rem] text-muted">
            Wine pattu · emerald pattu — the counter&rsquo;s first colours
          </p>
        </div>
      </div>
    </section>
  );
}
