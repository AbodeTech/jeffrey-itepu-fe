"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Analytics } from "@/lib/analytics";
import { getHeroPortraitSrc } from "@/lib/domain-targeting";
import { MASTER_CLASS_EVENT_DATE } from "@/lib/event";

const tickerItems = [
  "Real Estate Fundamentals",
  "Lead Generation & Conversion",
  "Legal & Compliance",
  "Wealth Through Property",
  "Sales Psychology",
  "Market Intelligence",
];

const avatars = [
  { initials: "SB", bg: "bg-blue-100", text: "text-primary" },
  { initials: "AK", bg: "bg-blue-100", text: "text-blue-600" },
  { initials: "FO", bg: "bg-emerald-100", text: "text-emerald-700" },
  { initials: "TM", bg: "bg-violet-100", text: "text-violet-600" },
];

const EVENT_TIME = "8:00 PM WAT";
const SPEAKER_NAME = "Mr Jeffrey Itepu";

export function WebinarHero() {
  const heroPortraitSrc = getHeroPortraitSrc();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="relative h-[45vh] w-full overflow-hidden lg:hidden">
          <Image
            src={heroPortraitSrc}
            alt={SPEAKER_NAME}
            fill
            className="object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        <motion.div
          className="relative flex flex-1 flex-col justify-start overflow-hidden px-6 pb-16 pt-8 lg:justify-center lg:px-12 lg:py-32 lg:pt-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative z-10">
            <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-primary">
                Registration is free
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-slate-600">
                Webinar
              </span>
            </motion.div>

            <motion.h1
              className="flex flex-col items-start text-left font-[family-name:var(--font-display)]"
              variants={itemVariants}
            >
              <span className="block text-left text-[17vw] font-bold leading-[0.85] tracking-tighter text-abode-black md:text-[13vw] lg:text-[8.5vw]">
                REAL ESTATE
              </span>
              <span className="block text-left text-[17vw] font-bold leading-[0.85] tracking-tighter text-primary md:text-[13vw] lg:text-[8.5vw]">
                MASTERCLASS
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-left font-[family-name:var(--font-display)] text-xl text-abode-black md:text-2xl"
            >
              Join {SPEAKER_NAME} in Raising the Next Generation of Sales Professionals
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((a, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white font-[family-name:var(--font-display)] text-[9px] font-bold ${a.bg} ${a.text}`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <span className="font-sans text-sm text-slate-500">2,400+ registered</span>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <Link
                href="/register"
                onClick={() => Analytics.ctaClick("hero")}
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:bg-[#0499E5]"
              >
                Register Free
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6 sm:gap-0 sm:divide-x sm:divide-slate-200"
            >
              <div className="flex flex-col gap-1 sm:pr-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Date
                </span>
                <span className="font-mono text-base font-medium text-abode-black">
                  {MASTER_CLASS_EVENT_DATE}
                </span>
              </div>
              <div className="flex flex-col gap-1 sm:px-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Time
                </span>
                <span className="font-mono text-base font-medium text-abode-black">{EVENT_TIME}</span>
              </div>
              <div className="flex flex-col gap-1 sm:pl-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Format
                </span>
                <span className="font-mono text-base font-medium text-abode-black">
                  Virtual Sessions
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden w-[420px] shrink-0 lg:block xl:w-[500px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative h-full min-h-screen overflow-hidden">
            <Image
              src={heroPortraitSrc}
              alt={`${SPEAKER_NAME} portrait`}
              fill
              className="object-cover object-top"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"
              style={{ backgroundImage: "linear-gradient(to right, white 0%, transparent 30%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
          </div>
        </motion.div>
      </div>

      <div className="overflow-hidden border-b border-t border-slate-100 py-3">
        <div className="flex whitespace-nowrap" style={{ animation: "ticker 28s linear infinite" }}>
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 shrink-0 font-sans text-[10px] uppercase tracking-[0.18em] text-slate-400"
            >
              {item}
              <span className="ml-6 text-primary">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
