import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export function LearnFeaturedSection() {
  return (
    <SectionWrapper id="featured" className="bg-[#FFF] py-16!">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Full width image section */}
        <div className="relative w-full h-[502px] overflow-hidden rounded-[12px]">
          <Image
            src="/assets/reu.png"
            alt="Featured learning content"
            fill
            className="object-cover rounded-[12px]"
            sizes="100vw"
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
                Introduction to Real Estate Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
