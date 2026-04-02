import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

export function OwnershipNetworkGrowthStructureSection() {
  return (
    <section className="w-full overflow-hidden bg-[#F7F6F8] pb-0 pt-14 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-[1320px] px-4 text-center sm:px-6 lg:px-10">
        <h2
          className="text-[38px] font-bold leading-[106%] tracking-[-0.03em] text-[#233A4A] sm:text-[48px] lg:text-[58px]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          <span className="block">Your Growth Begins With</span>
          <span className={`${caveat.className} mt-1 block text-[50px] leading-none text-[#FF4F01] sm:text-[58px] lg:text-[64px]`}>
            Structure
          </span>
        </h2>

        <p
          className="mx-auto mt-3 max-w-[460px] text-[11px] leading-[155%] text-[#6A6D74] sm:mt-4 sm:max-w-[520px] lg:max-w-[590px] sm:text-[14px]"
          style={{ fontFamily: "var(--font-delight)" }}
        >
          The Ownership Network is open to individuals ready to participate seriously in real estate.
        </p>
      </div>

      <div className="relative left-1/2 mt-2 w-screen -translate-x-1/2 overflow-hidden">
        <article className="relative h-[184px] w-screen sm:h-[248px] lg:h-[320px]">
          <Image
            src="/assets/growth.png"
            alt="Ownership network growth collage"
            fill
            className="object-contain object-bottom -translate-y-5 scale-[1.32] sm:-translate-y-7 lg:-translate-y-9"
            sizes="100vw"
            priority
          />
        </article>
      </div>
    </section>
  );
}
