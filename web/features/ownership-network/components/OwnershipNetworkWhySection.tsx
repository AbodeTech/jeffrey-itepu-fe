import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

export function OwnershipNetworkWhySection() {
  return (
    <section className="relative mt-16 w-full overflow-hidden py-12 md:mt-20 md:py-16 lg:mt-24 lg:py-25">
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden md:block">
        <Image
          src="/assets/bg.svg"
          alt=""
          aria-hidden
          width={642}
          height={777}
          className="absolute right-[-150px] top-1/2 h-auto w-[620px] -translate-y-1/2 opacity-95 lg:right-[-70px] lg:w-[660px] xl:right-0"
        />
      </div>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-12">
          <div className="w-full justify-self-start text-left">
            <h2
              className="w-full text-left! text-[42px] font-bold leading-[108%] tracking-[-0.03em] text-[#233A4A] sm:text-[52px] md:text-[60px]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              <span className="block">Why this network</span>
              <span className={`${caveat.className} mt-1 block text-[#FF4F01]`}>exist</span>
            </h2>

            <div
              className="mt-6 space-y-6 text-[16px] leading-[165%] text-[#505153] sm:text-[17px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              <p>Real estate participation should not be chaotic or confusing.</p>
              <p>
                The Ownership Network was built to provide clarity, coordination, and
                performance-based growth within the property ecosystem.
              </p>
              <p>
                Members operate within defined systems, receive structured guidance, and grow
                through measurable execution.
              </p>
              <p>This is organized opportunity.</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
            <Image
              src="/assets/founder.png"
              alt="Founder Jeffery Itepu"
              width={559}
              height={658}
              className="relative z-10 mx-auto h-auto w-full max-w-[460px] lg:max-w-[500px]"
              sizes="(max-width: 640px) 84vw, (max-width: 1024px) 48vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
