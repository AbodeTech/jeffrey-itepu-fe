import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BookJeffHeroSection } from "@/features/book-jeff/components/BookJeffHeroSection";
import { BookJeffSpeaksOnSection } from "@/features/book-jeff/components/BookJeffSpeaksOnSection";
import { BookJeffPastEngagementsSection } from "@/features/book-jeff/components/BookJeffPastEngagementsSection";
import { BookJeffContactSection } from "@/features/book-jeff/components/BookJeffContactSection";
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
