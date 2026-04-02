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
