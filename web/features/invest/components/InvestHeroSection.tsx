"use client";

import Image from "next/image";
import Link from "next/link";

export function InvestHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9FA]">
      {/* Subtle center glow like the mock */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 48% 22%, rgba(255,255,255,0.95) 0%, rgba(246,247,251,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] lg:gap-10">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2">
              <Image
                src="/assets/golden-star.svg"
                alt=""
                aria-hidden
                width={14}
                height={14}
                className="h-[14px] w-[14px]"
              />
              <p
                className="text-[12px] leading-none text-[#7B8790]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                Your Trusted Real Estate Partner
              </p>
            </div>

            <h1
              className="mt-5 text-left! font-bold leading-[112%] tracking-[-0.03em] text-[#233A4A] text-[44px] sm:text-[56px] md:text-[68px] lg:text-[100px]"
              style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
            >
              <span className="block">Invest with</span>
              <span className="block" style={{ color: "#0093FF" }}>
                Jeffery
              </span>
            </h1>

            <p
              className="mt-6 max-w-[520px] text-left text-[14px] leading-[170%] text-[#505153] sm:text-[15px] md:text-[16px] lg:text-[18px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Through Abode and affiliated ventures, I provide structured real estate opportunities
              designed to create long-term value and responsible growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#locations"
                  className="inline-flex h-[48px] w-full max-w-[232px] items-center justify-center gap-2 rounded-[16px] bg-[#0093FF] px-6 py-3 text-[12px] font-medium text-white transition hover:bg-[#0586E3] sm:w-[232px]"
                style={{ fontFamily: "var(--font-delight)" }}
                  aria-label="See available locations"
              >
                See available locations
                  <span className="inline-flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 5V19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 14L12 19L17 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="#inspection"
                  className="inline-flex h-[48px] w-full max-w-[232px] items-center justify-center rounded-[16px] border border-[#8EC8FF] bg-white px-6 py-3 text-[12px] font-medium text-[#233A4A] transition hover:bg-[#F3F9FF] sm:w-[232px]"
                style={{ fontFamily: "var(--font-delight)" }}
                  aria-label="Schedule inspection"
              >
                Schedule inspection
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            {/* Matches design spec: 573x490 */}
            <Image
              src="/invest/photo-collage.png"
              alt="Investment highlights photo collage"
              width={573}
              height={490}
              priority
              className="mx-auto h-auto w-full max-w-[573px] object-contain"
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 42vw, 573px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

