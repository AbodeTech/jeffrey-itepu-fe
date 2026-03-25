import Image from "next/image";

import { AboutHeroPrimary } from "./AboutHeroPrimary";
import { AboutHeroPortrait } from "./AboutHeroPortrait";

export function AboutHeroSection() {
  return (
    <section className="bg-[#FFF] px-3 pb-10 pt-0 sm:px-5 md:px-8 lg:px-10 lg:pb-14">
      <div className="mx-auto max-w-[1372px]">
        <div className="relative min-h-[min(100svh,820px)] overflow-hidden rounded-[24px] sm:rounded-[28px] md:min-h-[min(100svh,760px)] md:rounded-[32px] lg:min-h-[min(100svh,920px)] lg:rounded-[36px]">
          <div className="absolute inset-0">
            <Image
              src="/assets/about-bg.svg"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1400px) 100vw, 1372px"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(180, 180, 180, 0.45) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(180, 180, 180, 0.45) 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 75%)",
            }}
          />

          {/* Folder content: portrait is first in DOM (full-bleed, low z); primary content stacks above */}
          <div className="relative z-10 flex min-h-[min(100svh,820px)] flex-col md:min-h-[min(100svh,760px)] lg:min-h-[min(100svh,920px)]">
            <AboutHeroPortrait variant="fullBleed" />
            <AboutHeroPrimary
              betweenCopyAndPartners={<AboutHeroPortrait variant="stacked" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
