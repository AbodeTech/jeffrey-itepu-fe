import { FoundationHeroSection } from "./FoundationHeroSection";
import { FoundationHorizonLedgerSection } from "./FoundationHorizonLedgerSection";
import { FoundationStoryBandSection } from "./FoundationStoryBandSection";
import { foundationStoryBands } from "../data/foundation-content";

export function FoundationPage() {
  return (
    <>
      <FoundationHeroSection />
      {foundationStoryBands.map((band) => (
        <FoundationStoryBandSection key={band.id} band={band} />
      ))}
      <FoundationHorizonLedgerSection />
    </>
  );
}
