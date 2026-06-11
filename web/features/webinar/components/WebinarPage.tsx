import { WebinarAbout } from "@/features/webinar/components/WebinarAbout";
import { WebinarFooter } from "@/features/webinar/components/WebinarFooter";
import { WebinarHero } from "@/features/webinar/components/WebinarHero";
import { WebinarNavbar } from "@/features/webinar/components/WebinarNavbar";
import { WebinarPropertyGap } from "@/features/webinar/components/WebinarPropertyGap";
import { WebinarRegisterCTA } from "@/features/webinar/components/WebinarRegisterCTA";
import { WebinarTestimonials } from "@/features/webinar/components/WebinarTestimonials";

export function WebinarPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white">
      <WebinarNavbar />
      <main>
        <WebinarHero />
        <WebinarAbout />
        <WebinarPropertyGap />
        <WebinarTestimonials />
        <WebinarRegisterCTA />
      </main>
      <WebinarFooter />
    </div>
  );
}
