
export function LearnHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9FA]">
      {/* Subtle center glow similar to other pages */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 48% 22%, rgba(255,255,255,0.95) 0%, rgba(246,247,251,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 md:pb-20 md:pt-28 lg:px-10 lg:pt-40 lg:pb-24">
        <div className="text-left!">
          <h1
            className="text-[32px] font-bold leading-[120%] tracking-[-0.02em] text-[#233A4A] sm:text-[36px] md:text-[40px] lg:text-[100px] text-left!"
            style={{ fontFamily: "var(--font-agrandir)" }}
          >
            Learn the Systems <br />
            Behind Ownership
          </h1>

          <p
            className="mt-6 max-w-[645px] text-[15px] leading-[170%] text-[#6C7881] sm:text-[16px] md:text-[17px] lg:text-[18px] text-left!"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Articles, videos, and practical insights on navigating real estate participation with discipline and long-term perspective.
          </p>
        </div>
      </div>
    </section>
  );
}
