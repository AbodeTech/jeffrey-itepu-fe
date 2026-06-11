"use client";

import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@/lib/analytics";
import { MASTER_CLASS_EVENT_DATE } from "@/lib/event";
import { registerCtaBandSrc } from "@/lib/landing-images";

function formatTicketDate(date: string): string {
  const match = date.match(/(\d+)/);
  const day = match ? match[1].padStart(2, "0") : "12";
  const monthMatch = date.match(
    /january|february|march|april|may|june|july|august|september|october|november|december/i
  );
  const monthMap: Record<string, string> = {
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
  };
  const month = monthMatch ? monthMap[monthMatch[0].toLowerCase()] ?? "06" : "06";
  return `${day}.${month}`;
}

const ticketDate = formatTicketDate(MASTER_CLASS_EVENT_DATE);

export function WebinarRegisterCTA() {
  return (
    <section id="register" className="relative overflow-hidden">
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src={registerCtaBandSrc}
          alt="Abode Academy graduates with certificates at certification ceremony"
          fill
          className="object-cover object-[center_14%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      <div className="flex flex-col items-center bg-primary px-6 py-20 text-center lg:px-12 lg:py-28">
        <div className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-sans text-sm text-abode-black">Cohort 5 · Concluded</span>
        </div>

        <h2 className="mt-8 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          <span className="block">Watch out for</span>
          <span className="block">the next</span>
          <span className="block">Abode Academy.</span>
        </h2>

        <p className="mt-6 max-w-md font-sans text-lg text-white/80">
          Cohort 5 was incredible. Cohort 6 is coming — be the first to know when registration
          opens.
        </p>

        <Link
          href="/register"
          onClick={() => Analytics.ctaClick("cta_section")}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-sans text-base font-semibold text-primary transition-transform hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 1v4M14 1v4M2 8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Register now
        </Link>

        <div className="mt-12 flex items-center justify-center">
          <div className="relative h-[180px] w-[280px] -rotate-6 rounded-2xl bg-abode-white p-5 shadow-2xl md:h-[220px] md:w-[350px]">
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-display)] text-sm font-bold text-abode-black">
                ABODE WEBINAR
              </span>
              <span className="font-sans text-xs text-abode-black/50">FREE</span>
            </div>
            <div className="mt-4 font-sans text-xs text-abode-black/40">DATE</div>
            <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-abode-black md:text-3xl">
              {ticketDate}
            </div>
            <div className="mt-2 flex gap-6">
              <div>
                <div className="font-sans text-xs text-abode-black/40">ROW</div>
                <div className="font-[family-name:var(--font-display)] text-lg font-bold text-abode-black">
                  16
                </div>
              </div>
              <div>
                <div className="font-sans text-xs text-abode-black/40">SEAT</div>
                <div className="font-[family-name:var(--font-display)] text-lg font-bold text-abode-black">
                  24
                </div>
              </div>
            </div>
          </div>
          <div className="relative -ml-16 h-[180px] w-[200px] rotate-3 rounded-2xl bg-abode-black p-5 shadow-2xl md:-ml-20 md:h-[220px] md:w-[250px]">
            <div className="font-[family-name:var(--font-display)] text-xs font-bold tracking-wider text-abode-white">
              ABODE WEBINAR
            </div>
            <div className="mt-1 font-sans text-xs text-abode-white/40">{ticketDate}</div>
            <div className="mt-1 font-sans text-xs text-abode-white/40">LAGOS</div>
            <div className="mt-4">
              <div className="font-sans text-xs text-abode-white/40">GATE</div>
              <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-abode-white">
                02
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="grid h-14 w-14 grid-cols-5 grid-rows-5 gap-px md:h-16 md:w-16">
                {[1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1].map(
                  (filled, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${filled ? "bg-abode-white" : "bg-transparent"}`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
