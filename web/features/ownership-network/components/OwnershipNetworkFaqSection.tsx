"use client";

import { useState } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const faqItems = [
  {
    question: "Do I need experience?",
    answer:
      "No. The network is structured for both beginners and experienced professionals. You will follow clear onboarding and support systems.",
  },
  {
    question: "Can I participate alongside a 9-5 job?",
    answer:
      "Yes. Many associates begin part-time and grow with measurable routines designed to fit around existing work commitments.",
  },
  {
    question: "How do earnings work?",
    answer:
      "Earnings are tied to defined opportunities and verified execution, with performance tracked inside the network structure.",
  },
  {
    question: "Is training included?",
    answer:
      "Yes. Training is a core part of the network and covers positioning, communication, process flow, and execution standards.",
  },
  {
    question: "How are rewards earned?",
    answer:
      "Rewards are based on practical outcomes and accountability. Consistent performance unlocks increasing opportunities.",
  },
] as const;

export function OwnershipNetworkFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-12">
          <div className="w-full justify-self-start text-left!">
            <h2
              className="w-full text-left! text-[56px] font-bold leading-[104%] tracking-[-0.03em] text-[#233A4A] sm:text-[64px] lg:text-[68px]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              <span className="block text-left! lg:whitespace-nowrap">Frequently Asked</span>
              <span className={`${caveat.className} mt-1 block text-left! text-[#FF4F01]`}>Questions</span>
            </h2>

            <p
              className="mt-4 max-w-[430px] text-left! text-[20px] leading-[150%] text-[#505153] sm:text-[22px] lg:text-[32px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Answers to common questions about joining and operating within the ownership network.
            </p>
          </div>

          <div>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article key={item.question} className="border-b border-[#E2E3E8] py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[18px] leading-[130%] text-[#505153]" style={{ fontFamily: "var(--font-delight)" }}>
                      {item.question}
                    </span>

                    <Image
                      src="/assets/ownership-faq-plus.svg"
                      alt=""
                      aria-hidden
                      width={24}
                      height={24}
                      className={`mt-0.5 h-6 w-6 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                      isOpen ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className="pr-8 pt-3 text-[16px] leading-[165%] text-[#6A6C73] sm:text-[17px] lg:text-[20px]"
                      style={{ fontFamily: "var(--font-delight)" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
