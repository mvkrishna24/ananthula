import { IntroSequence } from "@/components/home/IntroSequence";
import { Hero } from "@/components/home/Hero";
import { LegacyTimeline } from "@/components/home/LegacyTimeline";
import { PattuLegacy } from "@/components/home/PattuLegacy";
import { FamilyWardrobe } from "@/components/home/FamilyWardrobe";
import { WeddingChapter } from "@/components/home/WeddingChapter";
import { OccasionGrid } from "@/components/home/OccasionGrid";
import { FestivalCampaigns } from "@/components/home/FestivalCampaigns";
import { NewArrivals } from "@/components/home/NewArrivals";
import { OffersChapter } from "@/components/home/OffersChapter";
import { StoreExperience } from "@/components/home/StoreExperience";
import { TrustSection } from "@/components/home/TrustSection";
import { SocialReels } from "@/components/home/SocialReels";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * The Digital Weave — the thread runs from silk to city:
 * intro → hero → pattu → family → wedding → occasion → festival → arrivals →
 * offers → store → trust → social → the Warangal story → the legacy continues.
 *
 * The heritage timeline deliberately closes the page rather than opening it:
 * fashion and commerce do their work first, then the house signs off with the
 * city it belongs to. Its scroll-drawn thread hands straight into FinalCTA's
 * vertical thread — one closing movement, ending on "The legacy continues."
 */
export default function HomePage() {
  return (
    <>
      <IntroSequence />
      <Hero />
      <PattuLegacy />
      <FamilyWardrobe />
      <WeddingChapter />
      <OccasionGrid />
      <FestivalCampaigns />
      <NewArrivals />
      <OffersChapter />
      <StoreExperience />
      <TrustSection />
      <SocialReels />
      <LegacyTimeline />
      <FinalCTA />
    </>
  );
}
