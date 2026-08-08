"use client";

import Link from "next/link";
import { useState } from "react";
import { TextilePanel } from "@/components/textile/TextilePanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { campaigns } from "@/data/campaigns";

/**
 * SECTION 07 — Festival Collections.
 * A season switcher proving the site is a campaign platform: selecting a
 * festival crossfades the textile, retitles the campaign and shifts the
 * accent. Campaign data lives in data/campaigns.ts and is fully swappable.
 */
export function FestivalCampaigns() {
  const [active, setActive] = useState(0);
  const campaign = campaigns[active];

  return (
    <section
      aria-labelledby="festival-heading"
      className="bg-ivory py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-wine">Festival Collections</Eyebrow>
            <h2
              id="festival-heading"
              data-reveal
              className="font-display mt-5 text-[clamp(2.4rem,5.4vw,5.4rem)]"
            >
              Every season has a <em className="text-wine">colour.</em>
            </h2>
          </div>
        </div>

        {/* season chips */}
        <div
          data-reveal
          role="tablist"
          aria-label="Choose a season"
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {campaigns.map((c, i) => {
            const selected = i === active;
            return (
              <button
                key={c.slug}
                role="tab"
                id={`season-tab-${c.slug}`}
                aria-selected={selected}
                aria-controls="season-panel"
                onClick={() => setActive(i)}
                className={`eyebrow min-h-11 border px-5 !text-[0.62rem] transition-colors duration-300 ${
                  selected
                    ? "border-ink bg-ink text-ivory"
                    : "border-ink/20 text-ink/70 hover:border-ink/60 hover:text-ink"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        {/* campaign stage */}
        <div
          id="season-panel"
          role="tabpanel"
          aria-labelledby={`season-tab-${campaign.slug}`}
          data-reveal
          className="relative mt-8 overflow-hidden"
        >
          <div key={campaign.slug} className="campaign-fade relative">
            <TextilePanel
              textile={campaign.textile}
              idSuffix={`fc-${campaign.slug}`}
              className="h-[420px] w-full md:h-[520px]"
              scrim={0.45}
              ariaLabel={`${campaign.name} campaign — generative textile artwork`}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-7 text-ivory md:p-14">
              <p
                className="eyebrow !text-[0.62rem]"
                style={{ color: campaign.accent }}
              >
                {campaign.eyebrow}
              </p>
              <h3 className="font-display mt-3 max-w-[12em] text-[clamp(2rem,4.4vw,4rem)]">
                {campaign.title}
              </h3>
              <p className="mt-3 max-w-[32em] text-[0.95rem] text-ivory/75">
                {campaign.note}
              </p>
              <Link
                href={campaign.ctaHref}
                className="link-underline mt-7 self-start text-ivory"
              >
                {campaign.ctaLabel}{" "}
                <span aria-hidden className="arrow">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        <p className="eyebrow mt-6 !text-[0.58rem] text-muted">
          Campaigns rotate with the calendar — Sankranti to New Year, one
          platform.
        </p>
      </div>
    </section>
  );
}
