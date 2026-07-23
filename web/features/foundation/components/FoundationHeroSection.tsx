import Image from "next/image";
import Link from "next/link";
import { foundationHero } from "../data/foundation-content";

export function FoundationHeroSection() {
  const { brand, support, ctaLabel, ctaHref, imageSrc, imageAlt } = foundationHero;

  return (
    <section className="relative isolate min-h-[min(92svh,920px)] w-full overflow-hidden bg-[#0A1322]">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="foundation-hero-image object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-[#0A1322]/92 via-[#0A1322]/45 to-[#0A1322]/25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-[#0A1322]/55 via-transparent to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(92svh,920px)] max-w-[1320px] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 md:pb-24 lg:px-10 lg:pb-28">
        <div className="max-w-[720px] text-center lg:text-left!">
          <h1
            className="text-center! text-[clamp(3rem,8vw,6rem)] font-bold leading-[100%] tracking-[-0.04em] text-white lg:text-left!"
            style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
          >
            {brand}
          </h1>
          <p
            className="mx-auto mt-5 max-w-[42ch] text-center text-[15px] leading-[165%] text-[#D7E0EA] sm:mt-6 sm:text-[17px] md:text-[18px] lg:mx-0 lg:text-left!"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            {support}
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href={ctaHref}
              className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-2xl bg-[#0093FF] px-7 text-[14px] font-medium text-white transition hover:bg-[#0586E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0093FF]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes foundation-hero-ken {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }
        .foundation-hero-image {
          transform: scale(1.08);
          animation: foundation-hero-ken 28s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .foundation-hero-image {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
