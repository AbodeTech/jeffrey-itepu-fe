import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { InvestHeroSection } from "@/features/invest/components/InvestHeroSection";
import { InvestOwnershipAfricaSection } from "@/features/invest/components/InvestOwnershipAfricaSection";
import { InvestAvailableLocationsSection } from "@/features/invest/components/InvestAvailableLocationsSection";
import { InvestScheduleInspectionSection } from "@/features/invest/components/InvestScheduleInspectionSection";
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
