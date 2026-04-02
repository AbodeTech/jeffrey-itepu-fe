import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

export function OwnershipNetworkHeroSection() {
  return (
    <section className="w-full bg-[#FFFBFC] text-center">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <h1
          className="text-[44px] font-bold leading-[102%] tracking-[-0.03em] text-[#233A4A] sm:text-[60px] md:text-[78px]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          <span className="block">Build Your Career</span>
          <span className={`${caveat.className} mt-1 block text-[#FF4F01] sm:mt-2 md:mt-3`}>
            in Real Estate
          </span>
        </h1>

        <div className="mx-auto mt-4 max-w-[1073px] sm:mt-5">
          <Image
            src="/assets/career-hero.png"
            alt="Ownership Network collage of community members"
            width={1073}
            height={370}
            priority
            className="h-auto w-full"
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1280px) calc(100vw - 3rem), 1073px"
          />
        </div>

        <p
          className="mx-auto max-w-[760px] text-[15px] leading-[170%] text-[#505153] sm:text-[17px]"
          style={{ fontFamily: "var(--font-delight)" }}
        >
          The Ownership Network is a structured community designed to train, develop, and reward real
          estate professionals. Whether you work a 9-5, run a business, or are starting fresh, it
          provides a clear pathway to grow responsibly within defined systems.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/ownership-network"
            className="inline-flex h-[48px] items-center justify-center gap-2 rounded-[16px] bg-[#05AAFF] px-6 text-[14px] font-medium text-white transition hover:bg-[#0499E5]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Join the Ownership Network
            <span aria-hidden>↓</span>
          </Link>
          <Link
            href="/book-jeff"
            className="inline-flex h-[48px] items-center justify-center rounded-[16px] border border-[#8EC8FF] bg-transparent px-8 text-[14px] font-medium text-[#233A4A] transition hover:bg-[#F3F9FF]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            See who can join
          </Link>
        </div>
      </div>
    </section>
  );
}
