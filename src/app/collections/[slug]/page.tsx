import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaSlot } from "@/components/media/MediaSlot";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { collectionPages } from "@/data/collections";
import { brand } from "@/data/brand";

const anchorId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return Object.keys(collectionPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = collectionPages[slug];
  if (!page) return {};
  return {
    title: `${page.eyebrow} — ${brand.city}`,
    description: page.intro,
  };
}

export default async function CollectionPage({
  params,
}: PageProps<"/collections/[slug]">) {
  const { slug } = await params;
  const page = collectionPages[slug];
  if (!page) notFound();

  return (
    <>
      {/* chapter hero */}
      <section className="on-dark grain relative flex min-h-[78svh] flex-col justify-end overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0">
          <MediaSlot
            slot={page.heroMedia}
            idSuffix={`col-${page.slug}`}
            className="h-full w-full"
            scrim={0.45}
            priority
          />
        </div>
        <div className="relative mx-auto w-full max-w-[1680px] px-5 pb-20 pt-44 sm:px-8 lg:px-12">
          <Eyebrow className="text-zari-bright">{page.eyebrow}</Eyebrow>
          <h1
            data-reveal
            className="font-display mt-6 max-w-[11em] text-[clamp(2.6rem,6.4vw,6.4rem)]"
          >
            {page.title}
          </h1>
          <p data-reveal className="measure mt-6 text-ivory/70">
            {page.intro}
          </p>
        </div>
      </section>

      {/* chapters */}
      <section aria-label="Collection chapters" className="bg-rice py-20 md:py-28">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.chapters.map((chapter, i) => (
              <li
                key={chapter.title}
                id={anchorId(chapter.title)}
                data-reveal
                className="scroll-mt-28"
                style={{ "--reveal-delay": `${(i % 3) * 0.1}s` } as React.CSSProperties}
              >
                <div className="group relative overflow-hidden">
                  <TextilePanel
                    textile={chapter.textile}
                    idSuffix={`ch${i}`}
                    className="aspect-[4/5] w-full transition-transform duration-[1200ms] ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
                    scrim={0.25}
                    ariaLabel={`${chapter.title} — generative silk artwork`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-ivory">
                    <h2 className="font-display text-2xl">{chapter.title}</h2>
                    <p className="eyebrow mt-2 !text-[0.56rem] text-ivory/70">
                      {chapter.note}
                    </p>
                  </div>
                  <p className="font-display absolute right-4 top-4 text-4xl text-ivory/35">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-8 !text-[0.58rem] text-muted">
            Collection previews — the full range lives in store
          </p>
        </div>
      </section>

      {/* conversion */}
      <section className="border-t border-ink/10 bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-8">
          <p data-reveal className="font-display text-[clamp(1.8rem,3.6vw,3.2rem)]">
            Looking for a particular colour or wedding saree?
          </p>
          <p data-reveal className="mt-3 text-muted">
            Ask our store team — they&rsquo;ve been matching families with the
            right weave since 1951.
          </p>
          <div data-reveal className="mt-9 flex flex-wrap justify-center gap-5">
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial btn-editorial--solid"
            >
              Ask on WhatsApp
            </a>
            <Link href="/stores" className="btn-editorial">
              Plan a Store Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
