import Image from "next/image";
import { foundationLegacy } from "../data/foundation-content";
import { CtaLink } from "@/components/CtaLink";

/**
 * Legacy — the page's one dark band, in the site's ink (#0F2433). Copy and a staggered
 * photo strip on top; the closing paragraph is set large as the page's final statement.
 */
export function FoundationLegacySection() {
  const { title, paragraphs, closing, cta, photos } = foundationLegacy;

  return (
    <section className="relative overflow-hidden bg-[#0F2433] py-20 md:py-28 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 20%, rgba(5,170,255,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid min-w-0 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div className="min-w-0 text-left">
            <h2
              className="text-left! text-[clamp(2rem,3.8vw,3.25rem)]! font-bold leading-[112%]! tracking-[-0.03em]! text-white"
              style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
            >
              {title}
            </h2>
            <div className="mt-6 max-w-[56ch] space-y-5">
              {paragraphs.map((text) => (
                <p
                  key={text}
                  className="text-left text-[16px]! leading-[178%]! text-[#C3D1DE] sm:text-[17px]! lg:text-[18px]!"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:ml-auto">
            <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 sm:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 55vw, 320px"
                />
              </div>
              <div className="flex flex-col gap-3 pt-10 sm:gap-4 sm:pt-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={photos[1].src}
                    alt={photos[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 40vw, 240px"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={photos[2].src}
                    alt={photos[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 40vw, 240px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-14 md:mt-20 md:pt-16">
          <p
            className="max-w-[34ch] text-left text-[clamp(1.75rem,3.4vw,2.75rem)]! leading-[122%]! tracking-[-0.025em]! text-white"
            style={{ fontFamily: "var(--font-agrandir)", fontWeight: 700, textWrap: "balance" }}
          >
            <span className="block">{closing[0]}</span>
            <span className="block text-[#7FD0FF]">{closing[1]}</span>
          </p>
          <div className="mt-10">
            <CtaLink cta={cta} />
          </div>
        </div>
      </div>
    </section>
  );
}
