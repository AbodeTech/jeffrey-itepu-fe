import Image from "next/image";
import type { FoundationStoryBand } from "../data/foundation-content";

const surfaceClass: Record<FoundationStoryBand["surface"], string> = {
  surface: "bg-white",
  "cool-paper": "bg-[#F6F7FB]",
  mist: "bg-[#F7F6F8]",
};

type Props = {
  band: FoundationStoryBand;
};

export function FoundationStoryBandSection({ band }: Props) {
  const [lineOne, lineTwo] = band.titleLines;

  return (
    <section className={`${surfaceClass[band.surface]} py-16 md:py-20 lg:py-24`}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div
          className={`grid min-w-0 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 ${
            band.imageFirst ? "" : "lg:[&>*:first-child]:order-2"
          }`}
        >
          <div className="relative min-h-[280px] w-full overflow-hidden rounded-[16px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[460px]">
            <Image
              src={band.imageSrc}
              alt={band.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 92vw, 50vw"
            />
          </div>

          <div className="min-w-0 text-center lg:text-left!">
            <h2
              className="text-center! text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[112%] tracking-[-0.03em] text-[#233A4A] lg:text-left!"
              style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
            >
              <span className="block">{lineOne}</span>
              <span className="mt-1 block">{lineTwo}</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-[54ch] text-center text-[15px] leading-[175%] text-[#6C7881] sm:text-[16px] md:text-[17px] lg:mx-0 lg:text-left!"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              {band.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
