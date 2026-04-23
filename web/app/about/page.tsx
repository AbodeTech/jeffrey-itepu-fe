import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutDualImageSection, AboutFocusSection, AboutHeroSection, AboutMainSection } from "@/features/about";

export const metadata: Metadata = {
  title: "About — Jeffrey Itepu",
  description:
    "Learn about Jeffrey Itepu's journey as a visionary leader in real estate, technology, and community building across Africa.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Jeffrey Itepu",
    description:
      "Learn about Jeffrey Itepu's journey as a visionary leader in real estate, technology, and community building across Africa.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Jeffrey Itepu",
    description:
      "Learn about Jeffrey Itepu's journey as a visionary leader in real estate, technology, and community building across Africa.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#FFF]">
      <Navbar />
      <main>
        <AboutHeroSection />
        <div id="about-continue" className="min-h-px" aria-hidden />
        <AboutMainSection />
        <AboutFocusSection />
        <AboutDualImageSection />
        <ContactSection className="bg-[#FCFBFC]" />
      </main>
      <Footer />
    </div>
  );
}
