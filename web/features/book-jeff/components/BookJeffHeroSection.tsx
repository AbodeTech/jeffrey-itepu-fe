import Image from "next/image";
import Link from "next/link";

export function BookJeffHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9FA]">
      {/* Subtle center glow similar to invest page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 48% 22%, rgba(255,255,255,0.95) 0%, rgba(246,247,251,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 md:pb-20 md:pt-28 lg:px-10 lg:pb-24">
        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-10 lg:items-center">
          {/* Image on left */}
          <div className="min-w-0 order-2 lg:order-1">
            <Image
              src="/assets/book-jeff.png"
              alt="Jeffery Itepu - Real Estate Consultant"
              width={573}
              height={490}
              priority
              className="mx-auto h-auto w-full max-w-[573px] object-contain"
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 42vw, 573px"
            />
          </div>

          {/* Text content on right */}
          <div className="min-w-0 text-center lg:text-left order-1 lg:order-2">
            <h1
              className="mt-15 lg:mt-[-230] sm:mt-0 font-bold leading-[112%] tracking-[-0.03em] text-[#233A4A] text-[36px] sm:text-[48px] md:text-[68px] lg:text-[100px] text-center lg:text-left!"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              <span className="block">Book Jeff</span>
            </h1>

            <p
              className="mt-12 max-w-[520px] mx-auto lg:mx-0 text-center lg:text-left text-[13px] leading-[170%] text-[#505153] sm:text-[15px] md:text-[16px] lg:text-[18px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              <span className="block mb-6">Jeffrey Itepu speaks to individuals, communities, and aspiring investors on expanding access to real estate and building structured pathways to long-term ownership.</span>

              <span className="block">His sessions focus on practical participation, responsible growth, and how technology can simplify entry into property markets across Africa.</span>
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#contact-form"
                className="inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#0093FF] px-6 py-3 text-[12px] font-medium text-white transition hover:bg-[#0586E3] sm:w-auto sm:max-w-[232px]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                Invite Jeff to Speak
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
      </div>
    </section>
  );
}
