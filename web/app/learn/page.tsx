import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { MentorshipPage } from "@/features/learn";

export const metadata: Metadata = {
  title: "Mentorship — Jeffrey Itepu",
  description:
    "Real estate is more than land and buildings. It is knowledge, people, and the systems that make lasting ownership possible.",
  alternates: {
    canonical: "/learn",
  },
  openGraph: {
    title: "Mentorship — Jeffrey Itepu",
    description:
      "Real estate is more than land and buildings. It is knowledge, people, and the systems that make lasting ownership possible.",
    url: "/learn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentorship — Jeffrey Itepu",
    description:
      "Real estate is more than land and buildings. It is knowledge, people, and the systems that make lasting ownership possible.",
  },
};

export default function LearnPage() {
  return (
    <div className="min-w-0 overflow-x-clip bg-[#F6F7FB] selection:bg-primary/25 selection:text-[#0F2433]">
      <Navbar />
      <main>
        <MentorshipPage />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
