"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) {
        setSubmitError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setShowToast(true);
      setEmail("");
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="newsletter" className="bg-[#F5F5F5] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-5 lg:px-3">
        <div className="grid gap-10 lg:grid-cols-[507px_minmax(0,1fr)] lg:items-start lg:gap-[120px]">
          <div className="space-y-10">
            <h3
              className="text-left text-[36px] leading-[115%] tracking-[-0.02em] text-[#233A4A] md:text-[48px]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              <span className="block text-left font-bold">The Ownership Ledger</span>
              <span className="block text-left font-normal">with Jeffrey</span>
            </h3>

            <div className="w-full rounded-[16px] bg-[#EFEFEF] p-6 lg:h-[473px] lg:w-[507px] lg:pt-[54px] lg:pr-6 lg:pb-[54px] lg:pl-6">
              <div className="flex h-full flex-col lg:gap-10">
                <div>
                  <h4
                    className="text-[26px] font-bold leading-[120%] text-[#149BDE] md:text-[30px]"
                    style={{ fontFamily: "var(--font-agrandir)" }}
                  >
                    Subscribe to The Ownership Ledger
                  </h4>
                  <p className="mt-4 max-w-[280px] text-[16px] leading-[150%] text-[#50565D]">
                    Get insights on ownership, leadership, entrepreneurship, technology, and the
                    future of real estate in Africa.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <label className="block text-[15px] text-[#4F565E]" htmlFor="newsletter-email">
                    Email Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 h-12 w-full rounded-[12px] border border-[#E4E4E4] bg-white px-4 text-[15px] text-[#1F2933] outline-none transition focus:border-[#149BDE] lg:w-[459px]"
                  />
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className={`mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-[12px] border border-transparent text-[15px] font-semibold text-white transition lg:w-[459px] ${
                      isValid && !isSubmitting
                        ? "bg-[#0EA5E9] hover:bg-[#0B95D1]"
                        : "cursor-not-allowed bg-[#AFC4D3]"
                    }`}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                    {!isSubmitting && (
                      <Image src="/assets/mail.svg" alt="" aria-hidden width={18} height={18} />
                    )}
                  </button>
                  {submitError && (
                    <p className="mt-2 text-sm text-red-600" style={{ fontFamily: "var(--font-delight)" }}>
                      {submitError}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:pt-6">
            <p className="max-w-[620px] text-[20px] leading-[170%] text-[#424A51] md:text-[22px]">
              Practical insights on real estate, community-driven ownership, and long-term
              value creation in Africa.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
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
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-bottom duration-300">
          <div
            className="flex items-start justify-between rounded-lg px-4 pb-4 pt-6 shadow-lg"
            style={{ backgroundColor: "#F6FFF9", width: "415px" }}
          >
            <div className="flex items-start space-x-3">
              <div className="shrink-0">
                <Image src="/assets/mark.svg" alt="Success" width={24} height={24} />
              </div>
              <div className="flex-1">
                <h4
                  className="text-sm font-semibold text-gray-900"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  Subscribed
                </h4>
                <p
                  className="mt-1 text-sm text-gray-600"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  You&apos;ll get updates from The Ownership Ledger
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="shrink-0 rounded-md p-1 transition-colors hover:bg-gray-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
