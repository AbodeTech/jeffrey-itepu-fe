import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ContactPageDetailsSection } from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact — Jeffrey Itepu",
  description:
    "Get in touch with Jeffrey Itepu for partnerships, media inquiries, speaking engagements, or general questions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Jeffrey Itepu",
    description:
      "Get in touch with Jeffrey Itepu for partnerships, media inquiries, speaking engagements, or general questions.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Jeffrey Itepu",
    description:
      "Get in touch with Jeffrey Itepu for partnerships, media inquiries, speaking engagements, or general questions.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <div className="bg-[#FFFBFC]">
        <Navbar />
        <main className="w-full pt-24 sm:pt-28 lg:pt-32">
          <section className="w-full pb-12 pt-6 sm:pb-16 sm:pt-8 lg:pb-24 lg:pt-12">
            <div className="mx-auto max-w-[1320px] px-4 text-left sm:px-6 lg:px-10">
              <h1
                className="max-w-[720px] text-left! text-[44px] font-bold leading-[102%] tracking-[-0.03em] text-[#233A4A] sm:text-[60px] lg:text-[82px]"
                style={{
                  fontFamily: "var(--font-agrandir)",
                  textAlign: "left",
                }}
              >
                Get in touch
                <br />
                with Jeffery
              </h1>
              <p
                className="mt-4 max-w-[640px] text-left! text-[18px] leading-[165%] text-[#505153] sm:mt-5 sm:text-[20px]"
                style={{ fontFamily: "var(--font-delight)", textAlign: "left" }}
              >
                For partnerships, media inquiries, or general questions, use the
                details below.
              </p>
            </div>
          </section>
        </main>
      </div>
      <ContactPageDetailsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
