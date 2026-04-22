import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export function BookJeffSpeaksOnSection() {
  return (
    <SectionWrapper id="speaks-on" className="bg-[#FFF] py-0!">
      <div className="relative w-full">
        {/* Full viewport height background image */}
        <div className="relative h-screen w-full">
          <Image
            src="/assets/speaks-on.png"
            alt="Jeffery speaking at a conference"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />

          {/* Bottom overlay gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 h-screen"
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.95) 100%)"
            }}
          />

          {/* Content positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-16 sm:px-6 sm:pb-20 md:px-8 md:pb-24 lg:px-10 lg:pb-32">
            <div className="mx-auto max-w-[1320px] px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="text-left!">
                <h2
                  className="text-[32px] font-bold leading-[120%] tracking-[-0.02em] text-white sm:text-[36px] md:text-[40px] lg:text-[44px] text-left!"
                  style={{ fontFamily: "var(--font-agrandir)" }}
                >
                  What He Speaks On
                </h2>

                <p
                  className="mt-3 max-w-[600px] text-left text-[18px] leading-[170%] text-white sm:text-[19px] md:text-[20px]"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  Each session is designed to simplify complex ideas and provide clear
                  direction for those seeking structured entry into real estate.
                </p>

                <div className="mt-4 sm:mt-24 space-y-2 sm:space-y-6">
                  {[
                    "How to Participate in Real Estate Without Traditional Barriers",
                    "Building Wealth Through Structured Property Ownership",
                    "Understanding Real Estate Systems in Nigeria",
                    "Community-Driven Growth & Long-Term Value",
                    "Technology & Access in Modern Property Markets",
                  ].map((topic, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <Image
                        src="/assets/arrow-right.svg"
                        alt=""
                        aria-hidden
                        width={18}
                        height={18}
                        className="shrink-0 mt-1"
                      />
                      <span
                        className="text-[18px] font-medium text-white sm:text-[19px] md:text-[20px]"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
