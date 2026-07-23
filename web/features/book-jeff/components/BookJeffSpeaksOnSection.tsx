import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

const THEMES = [
  "Ownership as Economic Infrastructure",
  "Building Trust in African Real Estate Markets",
  "Technology as the Engine of Accessible Ownership",
  "Designing Communities That Create Generational Wealth",
  "Leadership, Systems Thinking, and Institutional Growth",
  "The Future of Property Ownership Across Africa",
] as const;

export function BookJeffSpeaksOnSection() {
  return (
    <SectionWrapper id="speaks-on" className="bg-[#FFF] py-0!">
      <div className="relative w-full">
        <div className="relative min-h-[100svh] w-full sm:min-h-screen">
          <Image
            src="/assets/speaks-on.png"
            alt="Jeffrey speaking at a conference"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
            quality={100}
          />

          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 12%, rgba(0, 0, 0, 0.92) 100%)",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 px-4 pb-10 pt-32 sm:px-6 sm:pb-16 sm:pt-40 md:px-8 md:pb-20 lg:px-10 lg:pb-28">
            <div className="mx-auto max-w-[1320px] px-1 sm:px-4 md:px-6 lg:px-8">
              <div className="text-left!">
                <h2
                  className="text-left! text-[28px] font-bold leading-[120%] tracking-[-0.02em] text-white sm:text-[36px] md:text-[40px] lg:text-[44px]"
                  style={{ fontFamily: "var(--font-agrandir)" }}
                >
                  Themes Jeffrey Speaks On
                </h2>

                <div className="mt-5 space-y-2.5 sm:mt-10 sm:space-y-4 md:mt-12 md:space-y-5">
                  {THEMES.map((theme) => (
                    <div key={theme} className="flex items-start gap-2 sm:gap-3">
                      <Image
                        src="/assets/arrow-right.svg"
                        alt=""
                        aria-hidden
                        width={18}
                        height={18}
                        className="mt-1 h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]"
                      />
                      <span
                        className="text-left text-[15px] font-medium leading-[145%] text-white sm:text-[18px] md:text-[19px] lg:text-[20px]"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        {theme}
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
