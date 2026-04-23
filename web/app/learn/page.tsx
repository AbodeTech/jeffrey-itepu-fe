import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { 
  LearnHeroSection,
  LearnFeaturedSection, 
  // LearnFeaturedArticlesSection
} from "@/features/learn";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Learn Real Estate — Jeffrey Itepu",
  description:
    "Learn real estate investment strategies, ownership principles, and market insights from Jeffrey Itepu. Free resources and educational content.",
  alternates: {
    canonical: "/learn",
  },
  openGraph: {
    title: "Learn Real Estate — Jeffrey Itepu",
    description:
      "Learn real estate investment strategies, ownership principles, and market insights from Jeffrey Itepu. Free resources and educational content.",
    url: "/learn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Real Estate — Jeffrey Itepu",
    description:
      "Learn real estate investment strategies, ownership principles, and market insights from Jeffrey Itepu. Free resources and educational content.",
  },
};

export default function LearnPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <Navbar />
      <main>
        <LearnHeroSection />
        <LearnFeaturedSection />
        {/* <LearnFeaturedArticlesSection /> */}
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
