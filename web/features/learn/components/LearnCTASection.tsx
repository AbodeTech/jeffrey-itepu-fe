import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";

export function LearnCTASection() {
  return (
    <SectionWrapper id="cta" className="bg-[#05AAFF] py-16!">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2
            className="text-[28px] font-bold leading-[120%] tracking-[-0.02em] text-white sm:text-[32px] md:text-[36px] lg:text-[44px]"
            style={{ fontFamily: "var(--font-agrandir)" }}
          >
            Ready to Start Learning?
          </h2>
          <p
            className="mt-4 max-w-[600px] mx-auto text-[15px] leading-[170%] text-white/90 sm:text-[16px] md:text-[17px] lg:text-[18px]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Take the first step towards mastering real estate investment. Book a personalized session with Jeffrey today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-jeff"
              className="inline-flex items-center justify-center rounded-[20px] bg-white px-6 py-3 font-semibold text-[#05AAFF] transition duration-200 hover:bg-gray-100"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Book a Session
            </Link>
            <Link
              href="#resources"
              className="inline-flex items-center justify-center rounded-[20px] border-2 border-white px-6 py-3 font-semibold text-white transition duration-200 hover:bg-white/10"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
