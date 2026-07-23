"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/assets/reu-wide-hd.png",
    alt: "Jeffrey speaking at Wealth Festival",
    caption: "Wealth Festival'25 Talk",
  },
  {
    src: "/about/about-overlay.png",
    alt: "Jeffrey speaking on stage",
    caption: "Leadership Platform",
  },
  {
    src: "/about/about-main.png",
    alt: "Jeffrey presenting",
    caption: "Community Session",
  },
] as const;

const AUTO_PLAY_MS = 5000;

export function BookJeffPastEngagementsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <SectionWrapper id="past-engagements" className="bg-[#FFF] py-12! sm:py-16!">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-8">
          <div className="w-full md:w-2/5 lg:w-3/5">
            <div className="text-left!">
              <h2
                className="text-left! text-[26px] font-bold leading-[120%] tracking-[-0.02em] text-[#233A4A] sm:text-[32px] md:text-[36px] lg:text-[48px]"
                style={{ fontFamily: "var(--font-agrandir)" }}
              >
                Conversations That Have Shaped Industries.
              </h2>

              <p
                className="mt-4 max-w-[530px] text-left! text-[14px] leading-[170%] text-[#6C7881] sm:text-[16px] md:max-w-[480px] md:text-[17px] lg:max-w-[530px] lg:text-[18px]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                Jeffrey has shared the stage with founders, investors, executives, industry
                professionals, and emerging leaders across conferences, leadership forums, and
                investment communities.
              </p>
              <p
                className="mt-4 max-w-[530px] text-left! text-[14px] leading-[170%] text-[#6C7881] sm:text-[16px] md:max-w-[480px] md:text-[17px] lg:max-w-[530px] lg:text-[18px]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                Each engagement reflects a commitment to advancing conversations around ownership,
                innovation, and Africa&apos;s next generation of economic opportunity.
              </p>
            </div>
          </div>

          <div className="w-full md:w-3/5 lg:w-2/5">
            <div
              className="relative h-[280px] w-full overflow-hidden rounded-[12px] sm:h-[350px] md:h-[400px] lg:h-[520px]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setPaused(false);
                }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[index].src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[index].src}
                    alt={slides[index].alt}
                    fill
                    className="rounded-[12px] object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                    priority={index === 0}
                    quality={100}
                  />
                </motion.div>
              </AnimatePresence>

              <div
                aria-hidden
                className="absolute inset-0 rounded-[12px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 52.26%, rgba(0, 0, 0, 0.3) 77.51%, #000000 100%)",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 rounded-[12px] p-3 sm:p-4 md:p-5 lg:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <Image
                      src="/assets/play-circle.svg"
                      alt=""
                      aria-hidden
                      width={20}
                      height={20}
                      className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                    />
                    <p
                      aria-live="polite"
                      className="truncate text-[12px] font-medium text-white sm:text-[14px] md:text-[15px] lg:text-[16px]"
                      style={{ fontFamily: "var(--font-delight)" }}
                    >
                      {slides[index].caption}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous engagement"
                      onClick={goPrev}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path
                          d="M10 3L5 8l5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Next engagement"
                      onClick={goNext}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2" role="tablist" aria-label="Engagement slides">
                  {slides.map((slide, dotIndex) => (
                    <button
                      key={slide.src}
                      type="button"
                      role="tab"
                      aria-selected={dotIndex === index}
                      aria-label={`Go to engagement ${dotIndex + 1}`}
                      onClick={() => setIndex(dotIndex)}
                      className={cn(
                        "flex h-8 items-center justify-center rounded-full px-1 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                      )}
                    >
                      <span
                        className={cn(
                          "rounded-full transition-all",
                          dotIndex === index ? "h-1.5 w-3 bg-white" : "h-1.5 w-1.5 bg-white/60",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
