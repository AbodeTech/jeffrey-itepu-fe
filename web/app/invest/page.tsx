import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { InvestHeroSection } from "@/features/invest/components/InvestHeroSection";
import { InvestOwnershipAfricaSection } from "@/features/invest/components/InvestOwnershipAfricaSection";

export default function InvestPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <Navbar />
      <main>
        <InvestHeroSection />
        <InvestOwnershipAfricaSection />
      </main>
      <Footer />
    </div>
  );
}
