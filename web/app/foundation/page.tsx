import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FoundationPage } from "@/features/foundation";

export const metadata: Metadata = {
  title: "Foundation — Jeffrey Itepu",
  description:
    "Jeffrey Itepu believes that meaningful progress begins when people have access to the knowledge, support, and opportunities they need to thrive.",
  alternates: {
    canonical: "/foundation",
  },
  openGraph: {
    title: "Foundation — Jeffrey Itepu",
    description:
      "Jeffrey Itepu believes that meaningful progress begins when people have access to the knowledge, support, and opportunities they need to thrive.",
    url: "/foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundation — Jeffrey Itepu",
    description:
      "Jeffrey Itepu believes that meaningful progress begins when people have access to the knowledge, support, and opportunities they need to thrive.",
  },
};

export default function FoundationRoutePage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <Navbar />
      <main>
        <FoundationPage />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
