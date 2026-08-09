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
 * The Digital Weave — one continuous thread from 1951 to today:
 * intro → hero → legacy → pattu → family → wedding → occasion → festival →
 * arrivals → offers → store → trust → social → the legacy continues.
 */
export default function HomePage() {
  return (
    <>
      <IntroSequence />
      <Hero />
      <LegacyTimeline />
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
      <FinalCTA />
    </>
  );
}
