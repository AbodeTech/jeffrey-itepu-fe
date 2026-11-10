import { FoundationCommunityImpactSection } from "./FoundationCommunityImpactSection";
import { FoundationHeroSection } from "./FoundationHeroSection";
import { FoundationLegacySection } from "./FoundationLegacySection";
import { FoundationStoryBandSection } from "./FoundationStoryBandSection";
import { foundationBuildingCapacity } from "../data/foundation-content";

export function FoundationPage() {
  return (
    <div className="selection:bg-[#05AAFF]/25 selection:text-[#0F2433]">
      <FoundationHeroSection />
      <FoundationCommunityImpactSection />
      <FoundationStoryBandSection band={foundationBuildingCapacity} />
      <FoundationLegacySection />
    </div>
  );
}
