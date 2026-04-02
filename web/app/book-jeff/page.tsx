import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  BookJeffContactSection,
  BookJeffHeroSection,
  BookJeffPastEngagementsSection,
  BookJeffSpeaksOnSection,
} from "@/features/book-jeff";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";

export default function BookJeffPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <Navbar />
      <main>
        <BookJeffHeroSection />
        <BookJeffSpeaksOnSection />
        <BookJeffPastEngagementsSection />
        <BookJeffContactSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
