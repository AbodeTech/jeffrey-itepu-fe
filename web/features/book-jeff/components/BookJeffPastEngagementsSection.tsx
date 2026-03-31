import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export function BookJeffPastEngagementsSection() {
  return (
    <SectionWrapper id="past-engagements" className="bg-[#FFF] py-16!">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Side by side layout on large screens */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-16 md:items-center lg:gap-3">
          {/* Word Section */}
          <div className="w-full md:w-2/5 lg:w-3/5">
            <div className="">
              <h2
                className="text-[28px] font-bold leading-[120%] tracking-[-0.02em] text-[#233A4A] sm:text-[32px] md:text-[36px] lg:text-[48px] text-left!"
                style={{ fontFamily: "var(--font-agrandir)" }}
              >
                Past Engagements
              </h2>

              <p
                className="mt-4 max-w-[530px] text-left! text-[15px] leading-[170%] text-[#6C7881] sm:text-[16px] md:max-w-[400px] lg:max-w-[530px] md:text-[17px] lg:text-[18px]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                Jeffrey has spoken at industry forums, investment communities,
                and leadership platforms, sharing practical insights on property
                participation and long-term value creation. View selected speaking
                engagements:
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 lg:w-2/5">
            <div className="relative h-[300px] w-full sm:h-[350px] md:h-[400px] lg:h-[550px] overflow-hidden rounded-[12px]">
              <Image
                src="/assets/reu.png"
                alt="Jeffery's past speaking engagements"
                fill
                className="object-cover rounded-[12px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 400px"
                priority
                quality={95}
              />
              
              {/* Bottom gradient overlay */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-full rounded-[12px]"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 52.26%, rgba(0, 0, 0, 0.3) 77.51%, #000000 100%)"
                }}
              />
              
              {/* Text and play button at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 rounded-[12px]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Image
                    src="/assets/play-circle.svg"
                    alt="Play"
                    width={20}
                    height={20}
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                  />
                  <p
                    className="text-[12px] font-medium text-white sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    Wealth Festival'25 Talk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
