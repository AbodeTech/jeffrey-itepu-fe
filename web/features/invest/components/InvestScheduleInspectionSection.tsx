import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";

export function InvestScheduleInspectionSection() {
  return (
    <SectionWrapper
      id="inspection"
      className="bg-[#F8FEFF] py-12! md:py-16! lg:py-20!"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-14 lg:gap-20">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-[20px]">
              <Image
                src="/assets/handshake.png"
                alt="Two men shaking hands on a property site"
                width={580}
                height={480}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 580px"
              />
            </div>
          </div>

          {/* Text content — left-aligned */}
          <div className="w-full md:w-1/2">
            <h2
              className="text-left! text-[24px] font-bold leading-[120%] tracking-[-0.02em] text-[#0093FF] sm:text-[30px] md:text-[36px] lg:text-[40px]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              Schedule an Inspection
            </h2>

            <p
              className="mt-4 max-w-[460px] text-[14px] leading-[170%] text-[#6C7881] md:text-[15px] lg:text-[16px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Interested in learning more? Book a private inspection or schedule
            </p>

            <Link
              href="/book-jeff"
              className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#0093FF] px-6 text-[14px] font-medium text-white transition hover:bg-[#0586E3] sm:max-w-[320px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Schedule an Inspection
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
