import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Ownership Network — Jeffrey Itepu",
  description:
    "Join the Abode Ownership Network. Connect with fellow investors, access exclusive deals, and build wealth through real estate ownership.",
  alternates: {
    canonical: "/ownership-network",
  },
  openGraph: {
    title: "Ownership Network — Jeffrey Itepu",
    description:
      "Join the Abode Ownership Network. Connect with fellow investors, access exclusive deals, and build wealth through real estate ownership.",
    url: "/ownership-network",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ownership Network — Jeffrey Itepu",
    description:
      "Join the Abode Ownership Network. Connect with fellow investors, access exclusive deals, and build wealth through real estate ownership.",
  },
};

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
