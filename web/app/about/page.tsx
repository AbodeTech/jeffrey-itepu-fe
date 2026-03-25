import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutHeroSection } from "@/features/about/components/AboutHeroSection";
import { AboutMainSection } from "@/features/about/components/AboutMainSection";
import { AboutFocusSection } from "@/features/about/components/AboutFocusSection";
import { AboutDualImageSection } from "@/features/about/components/AboutDualImageSection";

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
