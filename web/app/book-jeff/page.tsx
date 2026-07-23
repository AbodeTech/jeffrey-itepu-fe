import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  BookJeffClosingCtaSection,
  BookJeffContactSection,
  BookJeffHeroSection,
  BookJeffPastEngagementsSection,
  BookJeffSpeakingPhilosophySection,
  BookJeffSpeaksOnSection,
} from "@/features/book-jeff";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Book Jeff to Speak — Jeffrey Itepu",
  description:
    "Jeffrey Itepu delivers keynotes and strategic sessions on ownership, leadership, technology, and Africa's economic future. Request speaking availability.",
  alternates: {
    canonical: "/book-jeff",
  },
  openGraph: {
    title: "Book Jeff to Speak — Jeffrey Itepu",
    description:
      "Jeffrey Itepu delivers keynotes and strategic sessions on ownership, leadership, technology, and Africa's economic future. Request speaking availability.",
    url: "/book-jeff",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Jeff to Speak — Jeffrey Itepu",
    description:
      "Jeffrey Itepu delivers keynotes and strategic sessions on ownership, leadership, technology, and Africa's economic future. Request speaking availability.",
  },
};

export default function BookJeffPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <Navbar />
      <main>
        <BookJeffHeroSection />
        <BookJeffSpeakingPhilosophySection />
        <BookJeffSpeaksOnSection />
        <BookJeffPastEngagementsSection />
        <BookJeffContactSection />
        <BookJeffClosingCtaSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
