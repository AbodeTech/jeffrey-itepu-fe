import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";

export function BookJeffClosingCtaSection() {
  return (
    <SectionWrapper id="closing-cta" className="bg-[#0A1322] py-16! md:py-20! lg:py-24!">
      <div className="mx-auto max-w-[820px] px-4 text-center sm:px-6 lg:px-10">
        <h2
          className="text-[32px] font-bold leading-[110%] tracking-[-0.03em] text-white sm:text-[40px] md:text-[48px] lg:text-[52px]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          The Right Conversation Can Shape the Future.
        </h2>
        <p
          className="mx-auto mt-6 max-w-[54ch] text-[15px] leading-[170%] text-[#C9D4E0] sm:text-[16px] md:text-[18px]"
          style={{ fontFamily: "var(--font-delight)" }}
        >
          If your audience is exploring leadership, ownership, innovation, or the future of
          Africa&apos;s economic development, invite Jeffrey to contribute ideas that inspire action
          and create lasting impact.
        </p>
        <Link
          href="#contact-form"
          className="mt-10 inline-flex h-[52px] w-full max-w-[340px] items-center justify-center rounded-[16px] bg-[#0093FF] px-8 text-[15px] font-medium text-white shadow-[0_10px_30px_rgba(0,147,255,0.28)] transition hover:bg-[#0586E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0093FF] sm:w-auto"
          style={{ fontFamily: "var(--font-delight)" }}
        >
          Request a Speaking Engagement
        </Link>
      </div>
    </SectionWrapper>
  );
}
