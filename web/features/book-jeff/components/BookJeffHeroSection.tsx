import Image from "next/image";
import Link from "next/link";

export function BookJeffHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F7FB]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 48% 22%, rgba(255,255,255,0.95) 0%, rgba(246,247,251,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 md:pb-20 md:pt-28 lg:px-8 xl:px-10 xl:pb-24">
        {/*
          Stack through lg (1024): desktop type + 600px image column was crushing the copy.
          Side-by-side from xl (1280) where both columns can breathe.
        */}
        <div className="grid min-w-0 items-center gap-10 sm:gap-12 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-12 2xl:gap-14">
          <div className="order-2 min-w-0 xl:order-1">
            <Image
              src="/assets/book-jeff.png"
              alt="Jeffrey Itepu"
              width={573}
              height={490}
              priority
              className="mx-auto h-auto w-full max-w-[min(100%,420px)] object-contain sm:max-w-[480px] md:max-w-[520px] xl:mx-0 xl:max-w-[560px] 2xl:max-w-[573px]"
              sizes="(max-width: 1279px) min(92vw, 520px), (max-width: 1536px) 42vw, 573px"
            />
          </div>

          <div className="order-1 min-w-0 text-center xl:order-2 xl:text-left!">
            <h1
              className="text-center! font-bold leading-[110%] tracking-[-0.03em] text-[#233A4A] text-[clamp(2.25rem,6.5vw+0.5rem,3.75rem)] md:text-[clamp(3rem,5vw+1rem,4.25rem)] xl:text-left! xl:text-[clamp(3.75rem,4.5vw+1rem,5.5rem)] 2xl:text-[clamp(4.5rem,5vw,6rem)]"
              style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
            >
              Book Jeff
            </h1>

            <p
              className="mx-auto mt-5 max-w-[36ch] text-center text-[clamp(1.125rem,1.5vw+0.75rem,1.5rem)] font-bold leading-[130%] tracking-[-0.02em] text-[#233A4A] sm:max-w-[28ch] md:mt-6 md:text-[clamp(1.25rem,1.2vw+0.85rem,1.75rem)] xl:mx-0 xl:max-w-[22ch] xl:text-left! xl:text-[clamp(1.5rem,1.5vw+0.75rem,2rem)]"
              style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
            >
              Ideas That Change How People Think About Ownership.
            </p>

            <p
              className="mx-auto mt-5 max-w-[52ch] text-center text-[15px] leading-[170%] text-[#505153] sm:mt-6 sm:text-[16px] md:text-[17px] xl:mx-0 xl:text-left! xl:text-[18px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Jeffrey Itepu delivers keynotes, executive conversations, and strategic sessions that
              challenge conventional thinking about ownership, leadership, technology, and
              Africa&apos;s economic future.
            </p>

            <p
              className="mx-auto mt-4 max-w-[52ch] text-center text-[15px] leading-[170%] text-[#505153] sm:text-[16px] md:text-[17px] xl:mx-0 xl:text-left! xl:text-[18px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Rather than speaking about property alone, Jeffrey explores how trusted systems,
              innovation, and institutions can unlock opportunity for millions across the continent.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center xl:justify-start">
              <Link
                href="#contact-form"
                className="inline-flex h-12 w-full max-w-[320px] items-center justify-center gap-2 rounded-[16px] bg-[#0093FF] px-6 py-3 text-[13px] font-medium text-white transition hover:bg-[#0586E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0093FF] sm:w-auto sm:max-w-none sm:min-w-[220px]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                Invite Jeff to Speak
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
