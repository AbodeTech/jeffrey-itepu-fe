import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const welcomeItems = [
  "Licensed realtors",
  "Entry-level professionals ready to learn",
  "Students and growth minded individuals",
  "9-5 professionals seeking additional structured income",
  "Entrepreneurs expanding into real estate",
] as const;

export function OwnershipNetworkWelcomesSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-18 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="border-b border-[#E7E4EC] pb-2">
          <p className={`${caveat.className} text-[30px] leading-none text-[#FF4F01]`}>
            This network welcomes:
          </p>
        </div>

        <div className="mt-8 grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <h3
            className="justify-self-center max-w-[500px] text-center text-[36px] font-bold leading-[108%] tracking-[-0.03em] text-[#233A4A] sm:text-[44px] md:text-[48px] lg:text-[52px] lg:justify-self-start lg:text-left!"
            style={{ fontFamily: "var(--font-agrandir)" }}
          >
            A Career That Can Fit Your Life
          </h3>

          <ul className="mx-auto w-full max-w-[370px] space-y-5 sm:max-w-[430px] sm:space-y-6 md:max-w-[540px] lg:mx-0 lg:max-w-[520px]">
            {welcomeItems.map((item) => (
              <li key={item} className="flex items-start gap-5 sm:gap-8 lg:gap-[40px]">
                <span
                  aria-hidden
                  className="mt-2.5 h-[8px] w-[8px] shrink-0 rounded-full bg-[#ACADB0] sm:mt-3"
                />
                <span
                  className="text-left text-[20px] font-medium leading-[118%] tracking-[-0.01em] text-[#A7A8AE] sm:text-[24px] md:text-[27px] lg:text-[30px]"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <p
            className="w-full max-w-[680px] rounded-[16px] border border-[#ECE9F2] bg-white px-4 py-3.5 text-center text-[11px] leading-[155%] tracking-[0.01em] text-[#5C5D66] shadow-[0_6px_16px_rgba(14,15,37,0.06)] sm:max-w-[760px] sm:rounded-[18px] sm:px-5 sm:text-[12px] md:px-6 lg:max-w-none lg:rounded-full lg:px-8 xl:whitespace-nowrap"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Many members begin part-time and grow steadily through consistent performance.
            If you are serious about growth, there is room for you.
          </p>
        </div>
      </div>
    </section>
  );
}
