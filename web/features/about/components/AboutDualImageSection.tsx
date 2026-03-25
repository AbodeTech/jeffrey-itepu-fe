import Image from "next/image";

const copy = {
  title: "Professional Journey",
  paragraphs: [
    "I previously spearheaded the expansion of Pertinence Properties Limited and launched ventures such as Homify.ng and Realvest.ng, strengthening operational growth and participation within the property ecosystem.",
    "In 2022, I co-founded Abode to lower barriers to ownership and organise real estate participation around structure, trust, and long-term value creation.",
    "I hold a Master's Degree in Marketing from Pan-Atlantic University, professional certifications from the Chartered Institute of Marketing (CIM), UK, and a degree in Economics, bringing strategic discipline and market insight to my work across the real estate sector.",
  ],
} as const;

/**
 * Professional Journey: dual overlapping images (left) and narrative (right), matching the about design.
 */
export function AboutDualImageSection() {
  return (
    <section className="border-y border-[#ECECEC] bg-[#FCFBFC]">
      <div className="mx-auto max-w-[1180px] min-w-0 px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="grid min-w-0 items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-x-8 md:gap-y-10 lg:grid-cols-[minmax(0,460px)_1fr] lg:gap-x-12 lg:gap-y-12 xl:grid-cols-[minmax(0,500px)_1fr] xl:gap-x-14">
          <div className="relative mx-auto h-[260px] w-full max-w-[min(100%,500px)] min-w-0 sm:h-[280px] sm:max-w-[460px] md:mx-0 md:h-[300px] md:max-w-none lg:h-[320px] xl:h-[340px]">
            <div className="absolute right-0 top-0 h-[200px] w-[min(72%,250px)] overflow-hidden rounded-xl sm:h-[230px] sm:w-[250px] md:h-[240px] md:w-[270px] lg:h-[250px] lg:w-[290px]">
              <Image
                src="/about/about-main.png"
                alt="Jeffrey presenting in the office beside a screen showing Abode branding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 72vw, 290px"
              />
            </div>
            <div className="absolute bottom-0 left-[8%] z-20 h-[140px] w-[140px] overflow-hidden rounded-xl sm:left-[44px] sm:h-[172px] sm:w-[172px] md:h-[188px] md:w-[188px] lg:h-[198px] lg:w-[198px]">
              <Image
                src="/about/about-overlay.png"
                alt="Jeffrey speaking on stage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 198px"
              />
            </div>
          </div>

          <div className="min-w-0 text-left md:min-w-0">
            <h2
              className="text-left! text-[22px] font-bold leading-[118%] tracking-[-0.02em] text-[#233A4A] sm:text-[26px] md:text-[28px] lg:text-[30px]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              {copy.title}
            </h2>
            <div className="mt-6 space-y-6 sm:mt-8">
              {copy.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[192%] text-[#505153] sm:text-[16px] md:text-[17px]"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
