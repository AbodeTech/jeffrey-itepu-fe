import Image from "next/image";
import Link from "next/link";
import { foundationHorizonLedger } from "../data/foundation-content";

/**
 * Horizon ledger — Deep Stage field with a Jeff Sky rail, oversized thesis,
 * and a staggered three-photo strip. Breaks the alternating band rhythm before
 * the shared newsletter/contact close.
 */
export function FoundationHorizonLedgerSection() {
  const { titleLines, body, ctaLabel, ctaHref, photos } = foundationHorizonLedger;
  const [lineOne, lineTwo] = titleLines;

  return (
    <section className="relative overflow-hidden bg-[#0A1322] py-16 md:py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 78% 40%, rgba(5,170,255,0.22) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-330 px-4 sm:px-6 lg:px-10">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <div className="min-w-0 border-l-[3px] border-primary pl-5 text-center sm:pl-8 lg:text-left!">
            <h2
              className="text-center! text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[108%] tracking-[-0.03em] text-white lg:text-left!"
              style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
            >
              <span className="block">{lineOne}</span>
              <span className="mt-1 block text-[#9ECFF5]">{lineTwo}</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-[48ch] text-center text-[15px] leading-[175%] text-[#C9D4E0] sm:text-[16px] md:text-[17px] lg:mx-0 lg:text-left!"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              {body}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href={ctaHref}
                className="inline-flex h-12 min-w-50 items-center justify-center rounded-2xl bg-[#0093FF] px-7 text-[14px] font-medium text-white transition hover:bg-[#0586E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0093FF]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-140 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3 sm:gap-4">
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 55vw, 28vw"
                />
              </div>
              <div className="flex flex-col gap-3 pt-8 sm:gap-4 sm:pt-12">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={photos[1].src}
                    alt={photos[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 40vw, 20vw"
                  />
                </div>
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={photos[2].src}
                    alt={photos[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 40vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
