import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export function LearnFeaturedSection() {
  return (
    <SectionWrapper
      id="featured"
      className="bg-[#F5F5F5] py-10 md:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-5 lg:px-3">
        <h3
          className="w-full text-left! text-[20px] font-bold leading-[115%] tracking-[-0.02em] text-[#233A4A]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          <span className="inline-flex items-center gap-1">
            Real Estate University
            <span
              className="inline-flex items-center text-[12px] font-normal text-[#9EA6AE]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              [1]
            </span>
          </span>
        </h3>

        <div className="relative mt-4 overflow-hidden rounded-[10px] sm:mt-5 sm:rounded-[12px]">
          <Image
            src="/assets/reu-wide-hd.png"
            alt="Real Estate University featured episode"
            width={1440}
            height={702}
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 2.5rem), 1434px"
            className="block h-auto w-full"
            priority
            quality={100}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
