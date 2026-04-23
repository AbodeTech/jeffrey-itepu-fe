import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Book Jeff to Speak — Jeffrey Itepu",
  description:
    "Invite Jeffrey Itepu to speak at your conference, workshop, or event. Sessions on real estate investment, ownership, and technology in African markets.",
  alternates: {
    canonical: "/book-jeff",
  },
  openGraph: {
    title: "Book Jeff to Speak — Jeffrey Itepu",
    description:
      "Invite Jeffrey Itepu to speak at your conference, workshop, or event. Sessions on real estate investment, ownership, and technology in African markets.",
    url: "/book-jeff",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Jeff to Speak — Jeffrey Itepu",
    description:
      "Invite Jeffrey Itepu to speak at your conference, workshop, or event. Sessions on real estate investment, ownership, and technology in African markets.",
  },
};

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
