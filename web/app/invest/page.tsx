import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  InvestAvailableLocationsSection,
  InvestHeroSection,
  InvestOwnershipAfricaSection,
  InvestScheduleInspectionSection,
} from "@/features/invest";
import { ContactSection } from "@/components/ContactSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Invest in Real Estate — Jeffrey Itepu",
  description:
    "Explore real estate investment opportunities with Abode. Build wealth through property ownership in thriving African markets.",
  alternates: {
    canonical: "/invest",
  },
  openGraph: {
    title: "Invest in Real Estate — Jeffrey Itepu",
    description:
      "Explore real estate investment opportunities with Abode. Build wealth through property ownership in thriving African markets.",
    url: "/invest",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest in Real Estate — Jeffrey Itepu",
    description:
      "Explore real estate investment opportunities with Abode. Build wealth through property ownership in thriving African markets.",
  },
};

export default function InvestPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <Navbar />
      <main>
        <InvestHeroSection />
        <InvestOwnershipAfricaSection />
        <InvestAvailableLocationsSection />
        <InvestScheduleInspectionSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
