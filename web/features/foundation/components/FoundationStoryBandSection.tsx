import Image from "next/image";
import type { FoundationStoryBand } from "../data/foundation-content";
import { CtaLink } from "@/components/CtaLink";

const surfaceClass: Record<FoundationStoryBand["surface"], string> = {
  surface: "bg-white",
  "cool-paper": "bg-[#F6F7FB]",
  mist: "bg-[#F7F6F8]",
};

type Props = {
  band: FoundationStoryBand;
};

export function FoundationStoryBandSection({ band }: Props) {
  return (
    <section className={`${surfaceClass[band.surface]} py-20 md:py-28 lg:py-32`}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div
          className={`grid min-w-0 items-center gap-12 md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 ${
            band.imageFirst ? "" : "lg:[&>*:first-child]:order-2"
          }`}
        >
          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[24px] border border-dashed border-[#B9C6D1] sm:translate-x-5 sm:translate-y-5"
            />
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[24px] shadow-[0_32px_64px_-30px_rgba(15,36,51,0.4)]">
              <Image
                src={band.imageSrc}
                alt={band.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 92vw, 600px"
              />
            </div>
          </div>

          <div className="min-w-0 text-left">
            <h2
              className="text-left! text-[clamp(2rem,3.8vw,3.25rem)]! font-bold leading-[112%]! tracking-[-0.03em]! text-[#233A4A]"
              style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
            >
              {band.title}
            </h2>
            <div className="mt-6 max-w-[58ch] space-y-5">
              {band.paragraphs.map((text) => (
                <p
                  key={text}
                  className="text-left text-[16px]! leading-[178%]! text-[#505153] sm:text-[17px]! lg:text-[18px]!"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <CtaLink cta={band.cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
