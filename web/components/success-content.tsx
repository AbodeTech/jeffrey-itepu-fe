"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Analytics } from "@/lib/analytics"

export function SuccessContent() {
  useEffect(() => {
    Analytics.successPageView()
  }, [])

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center">
      {/* Animated check */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#05AAFF]/10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-[#05AAFF]"
        >
          <path
            d="M10 20L17 27L30 13"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className="font-[family-name:var(--font-agrandir)] text-3xl font-bold tracking-tight text-[#233a4a] md:text-5xl">
        Registration received.
      </h1>

      <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-[#4E545B]">
        {"Your registration has been submitted. We'll reach out within 24–48 hours."}
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#05AAFF] px-8 py-3 font-sans text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Back to home
        </Link>
      </div>

      {/* Contact info */}
      <div className="mt-8 flex flex-col items-center gap-1">
        <p className="font-sans text-xs text-[#B1B1B1]">Have a question? Reach us at</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:Jeffofficeadmin@gmail.com"
            className="font-sans text-sm text-[#505153] transition-colors hover:text-[#05AAFF]"
          >
            Jeffofficeadmin@gmail.com
          </a>
        </div>
      </div>

      {/* Social sharing suggestion */}
      <div className="mt-16 rounded-xl border border-[#E0EAF1] bg-white px-8 py-6">
        <p className="font-sans text-xs uppercase tracking-widest text-[#B1B1B1]">
          Spread the word
        </p>
        <p className="mt-2 font-sans text-sm text-[#505153]">
          {"Know someone who'd benefit? Share with them."}
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="https://twitter.com/intent/tweet?text=I%20just%20registered%20with%20Jeffrey%20Itepu%20%E2%80%94%20real%20estate%20community%20in%20Lagos!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Analytics.shareClicked()}
            className="font-sans text-sm text-[#505153] transition-colors hover:text-[#05AAFF]"
          >
            Twitter (X)
          </a>
          <span className="text-[#E0EAF1]">|</span>
          <a
            href="https://wa.me/?text=I%20just%20registered%20with%20Jeffrey%20Itepu%20%E2%80%94%20real%20estate%20community%20in%20Lagos!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Analytics.shareClicked()}
            className="font-sans text-sm text-[#505153] transition-colors hover:text-[#05AAFF]"
          >
            WhatsApp
          </a>
          <span className="text-[#E0EAF1]">|</span>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://jeffreyitepu.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Analytics.shareClicked()}
            className="font-sans text-sm text-[#505153] transition-colors hover:text-[#05AAFF]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  )
}
