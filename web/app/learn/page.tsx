import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { 
  LearnHeroSection,
  LearnFeaturedSection, 
  LearnFeaturedArticlesSection
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
        <LearnFeaturedArticlesSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
