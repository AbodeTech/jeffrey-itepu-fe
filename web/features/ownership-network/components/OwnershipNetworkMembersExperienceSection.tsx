import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const memberExperienceItems = [
  {
    title: "Structured Training",
    description:
      "Learn documentation, client positioning, disciplined sales processes, and long-term strategy.",
    image: "/assets/structured-training.png",
    imageAlt: "Ownership network training audience",
  },
  {
    title: "Performance-Based Rewards",
    description:
      "Members are recognized and rewarded based on measurable performance.",
    image: "/assets/pbr.png",
    imageAlt: "Member receiving performance reward",
  },
  {
    title: "Global Exposure",
    description:
      "Top-performing members have traveled to destinations such as Qatar and Rwanda as part of structured recognition initiatives.",
    image: "/assets/global-exposure.png",
    imageAlt: "Global exposure moment in Qatar",
  },
  {
    title: "Access to Organized Opportunities",
    description:
      "Operate within coordinated property platforms aligned with defined systems.",
    image: "/assets/aoo.png",
    imageAlt: "Members holding ownership signs",
  },
  {
    title: "Community Support",
    description:
      "Work within a network that values accountability, clarity, and growth.",
    image: "/assets/community-support.png",
    imageAlt: "Community group photo",
  },
] as const;

export function OwnershipNetworkMembersExperienceSection() {
  return (
    <section className="w-full bg-[#F8F7FF] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <header className="text-center lg:text-left">
          <h2
            className="w-full text-center text-[40px] font-bold leading-[106%] tracking-[-0.03em] text-[#233A4A] sm:text-[48px] md:text-[58px] lg:text-left"
            style={{ fontFamily: "var(--font-agrandir)" }}
          >
            <span className="block">What Members</span>
            <span className={`${caveat.className} mt-1 block text-[#FF4F01]`}>Experience</span>
          </h2>
        </header>

        <div className="mx-auto mt-10 flex max-w-[1260px] flex-col gap-12 md:mt-14 md:gap-16">
          {memberExperienceItems.map((item, idx) => {
            const reverse = idx % 2 === 1;

            return (
              <article
                key={item.title}
                className={`relative grid items-center gap-6 lg:gap-10 ${
                  reverse
                    ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)]"
                    : "lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)]"
                }`}
              >
                <div className="relative mx-auto w-full max-w-[540px]">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF9160]/10" />
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={664}
                    height={664}
                    className="relative z-10 h-auto w-full rounded-[15px]"
                    sizes="(max-width: 1024px) 92vw, 540px"
                  />
                </div>

                <div className="w-full justify-self-center self-center text-center lg:justify-self-start lg:text-left!">
                  <h3
                    className="w-full text-center text-[22px] font-bold leading-[118%] tracking-[-0.02em] text-[#233A4A] sm:text-[24px] lg:text-left!"
                    style={{ fontFamily: "var(--font-agrandir)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mx-auto mt-3 max-w-[430px] text-center text-[14px] leading-[165%] text-[#505153] sm:text-[15px] lg:mx-0 lg:text-left"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
