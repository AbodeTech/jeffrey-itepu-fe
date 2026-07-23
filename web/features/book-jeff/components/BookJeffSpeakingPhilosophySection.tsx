import { SectionWrapper } from "@/components/SectionWrapper";

export function BookJeffSpeakingPhilosophySection() {
  return (
    <SectionWrapper id="speaking-philosophy" className="bg-white py-14! md:py-16!">
      <div className="mx-auto max-w-[1100px] px-4 text-left! sm:px-6 lg:px-10">
        <h2
          className="mb-6 max-w-[18ch] text-left! text-[28px] font-bold leading-[112%] tracking-[-0.03em] text-[#233A4A] sm:text-[36px] md:text-[44px] lg:text-[48px]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          Speaking That Moves Conversations Forward.
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <p
            className="text-[15px] leading-[170%] text-[#6C7881] sm:text-[16px] md:text-[17px]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Every audience leaves with more than inspiration. They leave with practical frameworks,
            clearer thinking, and actionable insights that connect ownership, innovation, and
            long-term value creation.
          </p>
          <p
            className="text-[15px] leading-[170%] text-[#6C7881] sm:text-[16px] md:text-[17px]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Whether addressing founders, investors, policymakers, or emerging professionals,
            Jeffrey&apos;s sessions are designed to spark meaningful conversations that continue long
            after the event ends.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
