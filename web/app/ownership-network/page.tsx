import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  OwnershipNetworkAssociatesGallerySection,
  OwnershipNetworkFaqSection,
  OwnershipNetworkGrowthStructureSection,
  OwnershipNetworkJoinFormSection,
  OwnershipNetworkMembersExperienceSection,
  OwnershipNetworkHeroSection,
  OwnershipNetworkInsideNetworkSection,
  OwnershipNetworkTestimonialsSection,
  OwnershipNetworkWelcomesSection,
  OwnershipNetworkWhySection,
} from "@/features/ownership-network";

export default function OwnershipNetworkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFFBFC]">
      <Navbar />

      <main className="w-full overflow-x-clip pt-24 sm:pt-28 lg:pt-32">
        <OwnershipNetworkHeroSection />
        <div className="bg-white">
          <OwnershipNetworkWhySection />
          <OwnershipNetworkMembersExperienceSection />
          <OwnershipNetworkWelcomesSection />
          <OwnershipNetworkTestimonialsSection />
          <OwnershipNetworkAssociatesGallerySection />
          <OwnershipNetworkInsideNetworkSection />
          <OwnershipNetworkFaqSection />
          <OwnershipNetworkJoinFormSection />
          <OwnershipNetworkGrowthStructureSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
