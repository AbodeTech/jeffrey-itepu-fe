import Image from "next/image";

const insideNetworkCards = [
  {
    image: "/assets/reu.png",
    title: "Wealth Festival'25 Talk",
    alt: "Associate sharing experience at Wealth Festival",
  },
  {
    image: "/assets/reu.png",
    title: "Wealth Festival'25 Talk",
    alt: "Associate sharing growth journey in network",
  },
  {
    image: "/assets/reu.png",
    title: "Wealth Festival'25 Talk",
    alt: "Associate sharing network execution story",
  },
] as const;

export function OwnershipNetworkInsideNetworkSection() {
  return (
    <section className="w-full bg-[#F7F6F8] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-4 text-center sm:px-6 lg:px-10 lg:text-left">
        <h2
          className="text-center text-[46px] font-bold leading-[106%] tracking-[-0.03em] text-[#233A4A] sm:text-[58px] lg:text-left! lg:text-[68px]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          Inside the Network
        </h2>

        <p
          className="mt-4 max-w-[620px] text-center text-[20px] leading-[150%] text-[#505153] sm:mx-auto sm:text-[22px] lg:mx-0 lg:text-left! lg:text-[32px]"
          style={{ fontFamily: "var(--font-delight)" }}
        >
          Hear directly from associates sharing their experiences, growth, and journey within the network.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max snap-x snap-mandatory gap-4 lg:max-w-[1320px]">
          {insideNetworkCards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="relative h-[340px] w-[82vw] max-w-[282px] shrink-0 snap-start overflow-hidden rounded-[12px] sm:h-[420px] sm:w-[340px] sm:max-w-none md:h-[440px] md:w-[360px] lg:h-[460px] lg:w-[406px]"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 406px"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0) 52.26%, rgba(0,0,0,0.3) 77.51%, #000000 100%)",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/assets/play-circle.svg"
                    alt="Play"
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0"
                  />
                  <p
                    className="text-[12px] font-medium text-white sm:text-[14px] md:text-[15px]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
