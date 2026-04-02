import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutDualImageSection, AboutFocusSection, AboutHeroSection, AboutMainSection } from "@/features/about";

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
