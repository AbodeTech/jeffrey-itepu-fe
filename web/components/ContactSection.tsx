"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { SectionWrapper } from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";

const DEFAULT_EMAIL = "hello@jeffitepu.com";

type ContactSectionProps = {
  id?: string;
  email?: string;
  className?: string;
};

export function ContactSection({
  id = "contact",
  email = DEFAULT_EMAIL,
  className,
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timeoutId = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timeoutId);
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <SectionWrapper id={id} className={cn("bg-[#FFF] py-12 sm:py-16 md:py-16 lg:py-20", className)}>
      <div className="mx-auto max-w-[1440px] min-w-0 px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="relative overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,#009DFF_0%,#C5E7FF_100%)] px-5 text-white sm:rounded-[20px] sm:px-8 md:px-12 md:py-10 lg:px-16 lg:pb-0 lg:pt-12 xl:px-20">
          <div className="grid min-w-0 items-start gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:gap-6">
            <div className="flex min-w-0 flex-col items-start justify-start pt-8 sm:pt-10 lg:pt-10">
              <h3
                className="text-left! text-[22px] font-bold leading-[132%] text-white sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[45px]"
                style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
              >
                For collaborations, partnerships, <br /> or speaking engagements, get in touch.
              </h3>
              <div className="mt-8 flex w-full min-w-0 max-w-[690px] items-center justify-between gap-3 border-b border-white/70 pb-4 sm:mt-10">
                <p className="min-w-0 wrap-break-word text-[20px] leading-tight text-white/90 sm:text-[24px] md:text-[32px] lg:text-[38px] xl:text-[42px]">
                  {email}
                </p>
                <button
                  type="button"
                  aria-label="Copy email address"
                  onClick={handleCopyEmail}
                  className="shrink-0 cursor-pointer"
                >
                  <Image src="/assets/copy.svg" alt="" aria-hidden width={32} height={32} />
                </button>
              </div>
              <p className="mt-3 min-h-5 text-[14px] text-white/90">{copied ? "Copied!" : ""}</p>
            </div>
            <div className="relative mx-auto mt-4 h-[240px] w-[200px] self-end sm:h-[280px] sm:w-[240px] md:mt-6 md:h-[320px] md:w-[280px] lg:mx-0 lg:mt-0 lg:h-[400px] lg:w-[min(340px,32vw)] xl:h-[410px]">
              <Image
                src="/assets/contact-jeffery.png"
                alt="Jeffery portrait"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 240px, 340px"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
