"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const baseTestimonials: readonly TestimonialItem[] = [
  {
    quote: "Before joining, I had interest but no structure. The training gave me clarity and direction",
    name: "Ayodeji Ojo",
    role: "Sales Associate",
    avatar: "/assets/ownership-testimonial-avatar-1.svg",
  },
  {
    quote: "The system is organized. If you execute properly, the results follow",
    name: "Ayodeji Ojo",
    role: "Sales Associate",
    avatar: "/assets/ownership-testimonial-avatar-2.svg",
  },
] as const;

const DOT_COUNT = 9;

export function OwnershipNetworkTestimonialsSection() {
  const testimonials = useMemo(
    () =>
      Array.from({ length: DOT_COUNT }, (_, index) => {
        const source = baseTestimonials[index % baseTestimonials.length];
        return { ...source };
      }),
    []
  );

  const [activeIndex, setActiveIndex] = useState(1);

  const activeItem = testimonials[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#F7F6F8] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[1000px] rounded-[10px] bg-[#FFF] px-6 pb-10 pt-12 sm:min-h-[540px] sm:px-10 sm:pb-12 sm:pt-14">
          <div className="mx-auto flex min-h-[108px] max-w-[620px] items-start justify-center sm:min-h-[152px]">
            <p
              className="text-center text-[30px] font-medium leading-[112%] tracking-[-0.02em] text-[#2C4456] sm:text-[34px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              {activeItem.quote}
            </p>
          </div>

          <div className="mt-14 flex flex-col items-center">
            <Image src={activeItem.avatar} alt={activeItem.name} width={68} height={68} className="h-[68px] w-[68px]" />
            <p
              className="mt-4 text-center text-[35px] font-medium leading-[108%] tracking-[-0.03em] text-[#4B535D]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              {activeItem.name}
            </p>
            <p
              className="mt-1 text-center text-[18px] leading-[120%] text-[#90939A]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              {activeItem.role}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-3 flex h-[58px] w-full max-w-[1000px] items-center justify-between rounded-[10px] bg-[#FFF] px-2 sm:px-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="inline-flex h-[44px] w-[44px] cursor-pointer items-center justify-center"
          >
            <Image src="/assets/ownership-testimonial-arrow-left.svg" alt="" aria-hidden width={44} height={44} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-[6px] w-[6px] rounded-full transition ${
                  index === activeIndex ? "bg-[#05AAFF]" : "bg-[#D4D5DA]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="inline-flex h-[44px] w-[44px] cursor-pointer items-center justify-center"
          >
            <Image src="/assets/ownership-testimonial-arrow-right.svg" alt="" aria-hidden width={44} height={44} />
          </button>
        </div>
      </div>
    </section>
  );
}
