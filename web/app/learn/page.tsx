import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { 
  LearnHeroSection,
  LearnFeaturedSection, 
  LearnResourcesSection, 
  LearnFormatsSection, 
  LearnTestimonialsSection, 
  LearnCTASection 
} from "@/features/learn";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";

export default function LearnPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <Navbar />
      <main>
        <LearnHeroSection />
        <LearnFeaturedSection />
        <LearnResourcesSection />
        <LearnFormatsSection />
        <LearnTestimonialsSection />
        <LearnCTASection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
