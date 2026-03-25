import Image from "next/image";

type AboutHeroPortraitProps = {
  /** When true, portrait is in normal flow (mobile / small screens). */
  variant: "stacked" | "fullBleed";
};

/**
 * Portrait only. Does not participate in flex layout when variant is fullBleed
 * (absolutely positioned, full height of the folder card content area on lg+).
 */
export function AboutHeroPortrait({ variant }: AboutHeroPortraitProps) {
  if (variant === "stacked") {
    return (
      <div className="relative z-10 mx-auto aspect-3/4 w-full max-w-[min(92vw,440px)] px-5 pb-8 sm:max-w-[min(92vw,500px)] sm:pb-10 md:max-w-[min(88vw,460px)] md:pb-10 lg:hidden">
        <div className="relative h-full min-h-[260px] w-full sm:min-h-[300px]">
          <Image
            src="/about/about-hero-portrait.png"
            alt="Jeffery Itepu"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 1023px) 92vw, 560px"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute top-7 bottom-0 right-0 z-1 hidden w-[min(52vw,820px)] lg:block xl:top-8 xl:w-[min(54vw,900px)] 2xl:w-[min(54vw,1000px)]"
      aria-hidden
    >
      <div className="relative h-full w-full">
        <Image
          src="/about/about-hero-portrait.png"
          alt=""
          fill
          className="object-contain object-bottom-right"
          sizes="(min-width: 1024px) 58vw, 0"
          priority
        />
      </div>
    </div>
  );
}
