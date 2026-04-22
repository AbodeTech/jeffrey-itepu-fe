"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export function NewsletterSection() {
  return (
    <SectionWrapper id="newsletter" className="bg-[#F5F5F5] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-5 lg:px-3">
        <div className="grid gap-10 lg:grid-cols-[507px_minmax(0,1fr)] lg:items-start lg:gap-[120px]">
          <div className="space-y-10">
            <h3
              className="text-left text-[36px] leading-[115%] tracking-[-0.02em] text-[#233A4A] md:text-[48px]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              <span className="block text-left font-bold">The Ownership Ledge</span>
              <span className="block text-left font-normal">with Jeffery</span>
            </h3>

            <div className="w-full rounded-[16px] bg-[#EFEFEF] p-6 lg:h-[473px] lg:w-[507px] lg:pt-[54px] lg:pr-6 lg:pb-[54px] lg:pl-6">
              <div className="flex h-full flex-col lg:gap-10">
                <div>
                  <h4
                    className="text-[26px] font-bold leading-[120%] text-[#149BDE] md:text-[30px]"
                    style={{ fontFamily: "var(--font-agrandir)" }}
                  >
                    Subscribe to my newsletter
                  </h4>
                  <p className="mt-4 max-w-[280px] text-[16px] leading-[150%] text-[#50565D]">
                    Get all the happenings and how to scale up in your real estate career with
                    nuggets and deals.
                  </p>
                </div>
                <div>
                  <label className="block text-[15px] text-[#4F565E]" htmlFor="newsletter-email">
                    Email Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    className="mt-2 h-12 w-full rounded-[12px] border border-[#E4E4E4] bg-white px-4 text-[15px] text-[#1F2933] outline-none transition focus:border-[#149BDE] lg:w-[459px]"
                  />
                  <button
                    type="button"
                    className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-[12px] border border-transparent bg-[#0EA5E9] text-[15px] font-semibold text-white transition hover:bg-[#0B95D1] lg:w-[459px]"
                  >
                    Subscribe
                    <Image src="/assets/mail.svg" alt="" aria-hidden width={18} height={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:pt-6">
            <p className="max-w-[620px] text-[20px] leading-[170%] text-[#424A51] md:text-[22px]">
              Practical insights on real estate, community-driven ownership, and long-term
              value creation in Africa.
            </p>

            {/* <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2].map((card) => (
                <article key={card}>
                  <div className="overflow-hidden rounded-[16px]">
                    <Image
                      src="/ownership/ownership-ledger-post.png"
                      alt="Street scene artwork for newsletter post"
                      width={320}
                      height={256}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <p className="mt-5 text-[15px] text-[#7D8288]">28th Feb, 2026</p>
                  <h4
                    className="mt-3 text-[16px] font-bold leading-[124%] tracking-[-0.02em] text-[#233A4A]"
                    style={{ fontFamily: "var(--font-agrandir)" }}
                  >
                    <span className="block">How to become a landowner in a land</span>
                    <span className="block">where nobody owns the land like Lagos</span>
                  </h4>
                  <p className="mt-4 text-[15px] leading-[165%] text-[#7C7C7C]">
                    Create superior code, compose emails, boost any kind of work within a
                    collaborative team environment.
                  </p>
                </article>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
