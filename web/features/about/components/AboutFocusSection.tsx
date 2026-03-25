import Image from "next/image";

type FocusItem = {
  iconSrc: string;
  iconAlt: string;
  title: string;
};

const focusItems: FocusItem[] = [
  {
    iconSrc: "/assets/laptop-performance.svg",
    iconAlt: "Developing technology-enabled ownership models",
    title: "Developing technology-enabled ownership models",
  },
  {
    iconSrc: "/assets/building.svg",
    iconAlt: "Scaling real estate platforms through strategic growth",
    title: "Scaling real estate platforms through strategic growth",
  },
  {
    iconSrc: "/assets/user-multiple.svg",
    iconAlt: "Building communities organised around shared value",
    title: "Building communities organised around shared value",
  },
  {
    iconSrc: "/assets/nano-technology.svg",
    iconAlt: "Strengthening operational discipline within property systems",
    title: "Strengthening operational discipline within property systems",
  },
];

export function AboutFocusSection() {
  const stackedShadow =
    "0px 9px 19px 0px #00000008, 0px 34px 34px 0px #00000008, 0px 77px 46px 0px #00000005, 0px 138px 55px 0px #00000000, 0px 215px 60px 0px #00000000";
  const mainShadow =
    "0px 24px 60px 0px #00000014, 0px 10px 30px 0px #0000000C, 0px 2px 10px 0px #00000008";

  return (
    <section className="relative min-h-[560px] overflow-visible bg-[#FFF]">
      {/* Background artwork */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about-focus-bg.svg"
          alt=""
          fill
          className="object-cover object-bottom"
          priority
          sizes="(max-width: 1024px) 100vw, 1372px"
        />
      </div>

      <div className="relative mx-auto max-w-[1372px] min-w-0 px-3 pb-11 pt-16 sm:px-5 sm:pb-12 sm:pt-20 md:px-8 md:pb-14 md:pt-20 lg:px-10 lg:pb-14 lg:pt-24">
        {/* Stacked paper/card depth effect */}
        <div className="relative mx-auto w-full min-w-0 max-w-[min(100%,900px)] overflow-visible">
          {/* Furthest layer (lowest) — narrowest */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 bottom-0 z-0 mx-auto w-[calc(100%-44px)] max-w-full translate-y-[14px] rounded-[14px] border border-[#E8E8E8]/70 bg-white sm:w-[calc(100%-52px)] sm:translate-y-[28px] md:w-[calc(100%-64px)] md:translate-y-[32px]"
            style={{ boxShadow: stackedShadow }}
          />
          {/* Middle layer */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 bottom-0 z-0 mx-auto w-[calc(100%-22px)] max-w-full translate-y-[10px] rounded-[14px] border border-[#E8E8E8]/80 bg-white sm:w-[calc(100%-28px)] sm:translate-y-[14px] md:w-[calc(100%-36px)] md:translate-y-[16px]"
            style={{ boxShadow: stackedShadow }}
          />

          {/* Main top card */}
          <div
            className="relative z-10 rounded-[14px] border border-[#E8E8E8]/90 bg-white px-5 pb-7 pt-10 sm:px-8 sm:pt-12 md:px-10 md:pt-12 lg:px-12 xl:px-16 2xl:px-[120px]"
            style={{ boxShadow: mainShadow }}
          >
            <h2
              className="text-left! text-[24px] font-bold leading-[1.15] text-[#233a4a] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[36px]"
              style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
            >
              <span className="block">I build and lead real estate ventures</span>
              <span className="block">centred on access, structure, and</span>
              <span className="block">scalability.</span>
            </h2>

            <p
              className="mt-6 text-left text-[13px] font-normal text-[#505153] sm:text-[14px] md:text-[15px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              My focus includes:
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-8 md:gap-x-10 md:gap-y-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
              {focusItems.map((item) => (
                <div key={item.title} className="flex min-w-0 flex-col gap-3">
                  <div className="h-[22px] w-[28px]">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={28}
                      height={28}
                      className="h-full w-full"
                      priority
                    />
                  </div>
                  <p
                    className="text-left text-[14px] leading-[1.35] text-[#505153] sm:text-[15px] md:text-[16px]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-end pr-2">
              <p
                className="text-[32px] font-normal tracking-[0] text-[rgb(0,147,255)]"
                style={{
                  fontFamily: "var(--font-photograph-signature)",
                  fontSize: "28px",
                  letterSpacing: "0px",
                  lineHeight: 1,
                }}
              >
                Jeffrey Itepu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

