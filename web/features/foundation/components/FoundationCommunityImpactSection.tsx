import Image from "next/image";
import { foundationCommunityImpact } from "../data/foundation-content";
import { CtaLink } from "@/components/CtaLink";

export function FoundationCommunityImpactSection() {
  const { title, intro, initiatives, cta, imageSrc, imageAlt } = foundationCommunityImpact;

  return (
    <section
      id="community-impact"
      className="scroll-mt-16 bg-white py-20 md:py-28 lg:py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(35,58,74,0.08) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid min-w-0 items-start gap-12 md:gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28 lg:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[999px_999px_28px_28px] shadow-[0_32px_64px_-28px_rgba(15,36,51,0.35)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 80vw, 460px"
              />
            </div>
          </div>

          <div className="min-w-0 text-left">
            <h2
              className="text-left! text-[clamp(2rem,3.8vw,3.25rem)]! font-bold leading-[112%]! tracking-[-0.03em]! text-[#233A4A]"
              style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
            >
              {title}
            </h2>
            <p
              className="mt-6 max-w-[60ch] text-left text-[16px]! leading-[178%]! text-[#505153] sm:text-[17px]! lg:text-[18px]!"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              {intro}
            </p>

            <ul className="mt-12 divide-y divide-[#DDE3E9] border-y border-[#DDE3E9]">
              {initiatives.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-2 py-7 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-10"
                >
                  <h3
                    className="text-left! text-[19px]! font-bold leading-[130%]! tracking-[-0.01em]! text-[#233A4A] md:text-[21px]!"
                    style={{ fontFamily: "var(--font-agrandir)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-left text-[15px]! leading-[175%]! text-[#5F6B75] sm:text-[16px]!"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CtaLink cta={cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
