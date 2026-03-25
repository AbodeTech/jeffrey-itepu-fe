import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const partnerLogos = [
  { src: "/assets/charisma.svg", alt: "Charisma University", width: 40, height: 40 },
  { src: "/assets/cim.svg", alt: "CIM — The Chartered Institute of Marketing", width: 59, height: 40 },
  { src: "/assets/pau.svg", alt: "Pan-Atlantic University", width: 97, height: 40 },
  { src: "/assets/miva.svg", alt: "Miva Open University", width: 97, height: 40 },
] as const;

const ABOUT_TAGLINE = "Faith • Real Estate • Believer";

function TaglineMarquee() {
  const labelClass =
    "shrink-0 whitespace-nowrap pr-6 text-left text-[10px] font-normal uppercase tracking-[0.2em] text-[#9A9DA0] sm:text-[11px]";

  return (
    <>
      <p className="sr-only">{ABOUT_TAGLINE}</p>
      <div
        className="max-w-[min(100%,160px)] overflow-hidden sm:max-w-[180px] md:max-w-[220px] lg:max-w-[240px]"
        aria-hidden
      >
        <div className="about-hero-marquee-track" style={{ fontFamily: "var(--font-delight)" }}>
          <span className={labelClass}>{ABOUT_TAGLINE}</span>
          <span className={labelClass}>{ABOUT_TAGLINE}</span>
        </div>
      </div>
    </>
  );
}

function AboutHeroCopy() {
  return (
    <div className="flex min-h-0 flex-1 flex-col px-5 pb-6 pt-16 sm:px-8 md:px-10 md:pb-8 md:pt-18 lg:px-14 lg:pb-8 lg:pt-14 lg:pr-[min(38vw,420px)] xl:px-20 xl:pr-[min(44vw,760px)] 2xl:pr-[min(46vw,920px)]">
      <div className="min-w-0 w-full max-w-full pt-24 sm:pt-28 md:max-w-[min(100%,520px)] lg:max-w-[640px]">
        <TaglineMarquee />
        <h1
          className="mt-4 text-left! text-[clamp(2.25rem,calc(6vw+0.75rem),10.25rem)] font-bold leading-[116%] tracking-[-0.03em] md:text-[clamp(2.85rem,calc(7vw+1rem),7.5rem)] lg:text-[clamp(3.25rem,calc(8vw+0.5rem),9rem)] xl:text-[164px]"
          style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
        >
          <span className="block w-full text-left! text-[#0F2433]">Jeffery</span>
          <span
            className="mt-1 block w-full text-left!"
            style={{ color: "var(--color-primary, #0093FF)" }}
          >
            Itepu
          </span>
        </h1>
        <p
          className="mt-5 max-w-[520px] text-left text-[15px] leading-[170%] text-[#5C646B] sm:text-[16px] md:text-[17px]"
          style={{ fontFamily: "var(--font-delight)" }}
        >
          Founder, operator, and public voice on accessible property ownership and long-term wealth
          creation.
        </p>
      </div>
    </div>
  );
}

function AboutHeroPartnerBar() {
  return (
    <div className="relative z-30 mt-auto w-full min-w-0 px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
      <div className="flex flex-nowrap items-center justify-start gap-x-4 py-6 sm:gap-x-5 lg:gap-x-6 max-lg:min-w-0 max-lg:overflow-x-auto max-lg:pb-2 max-lg:[-ms-overflow-style:none] max-lg:[scrollbar-width:none] max-lg:[&::-webkit-scrollbar]:hidden">
        <span className="inline-flex shrink-0 items-center gap-x-3 sm:gap-x-4 md:gap-x-5">
          {partnerLogos.map((logo) => (
            <span
              key={logo.src}
              className="inline-flex shrink-0 items-center justify-center [&_img]:block"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto opacity-90 sm:h-9 md:h-10"
              />
            </span>
          ))}
        </span>
        <Link
          href="#about-continue"
          className="inline-flex shrink-0 cursor-pointer items-center justify-center transition-opacity hover:opacity-80 [&_img]:block"
          aria-label="Scroll to learn more"
        >
          <Image
            src="/assets/scroll.svg"
            alt="Scroll to learn more"
            width={200}
            height={200}
            className="h-[88px] w-[88px] sm:h-[96px] sm:w-[96px] md:h-[104px] md:w-[104px] lg:h-[112px] lg:w-[112px]"
          />
        </Link>
      </div>
    </div>
  );
}

/**
 * Tagline, headline, body, partner icons, and scroll — layout stays stable; portrait is layered separately.
 * Pass the stacked (mobile) portrait as `betweenCopyAndPartners` so it sits between copy and the icon row on small screens.
 */
export function AboutHeroPrimary({ betweenCopyAndPartners }: { betweenCopyAndPartners: ReactNode }) {
  return (
    <div className="relative z-20 flex min-h-0 flex-1 flex-col">
      <AboutHeroCopy />
      {betweenCopyAndPartners}
      <AboutHeroPartnerBar />
    </div>
  );
}
