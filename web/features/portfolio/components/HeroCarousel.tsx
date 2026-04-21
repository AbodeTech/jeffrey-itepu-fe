"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  badge: string;
};

const slides: Slide[] = [
  {
    image: "/hero/hero-1.png",
    title: "Learn to Sell. Learn to Lead.",
    subtitle: "Join Jeffrey Itepu's Master Class — free, practical, and built for results.",
    badge: "Master Class",
  },
  {
    image: "/hero/hero-2.png",
    title: "Sales Is a Skill. Master It.",
    subtitle: "A hands-on programme by Mr Jeffrey Itepu for the next generation.",
    badge: "Register Free",
  },
  {
    image: "/hero/hero-3.png",
    title: "Your Sales Edge Starts Here.",
    subtitle: "Apply in under 2 minutes — no cost, no commitment.",
    badge: "Limited Spots",
  },
];

const AUTO_PLAY_MS = 5500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative">
      <div className="relative h-[calc(100svh-60px)] min-h-[520px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].image}
            initial={{ opacity: 0.3, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.25, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].image}
              alt={slides[index].title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/20" />

        <div className="absolute inset-x-0 bottom-16 z-20 mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:bottom-20 lg:px-8">
          <span
            className="rounded-full bg-white/85 px-3 py-1 text-[10px] font-normal text-[#0093FF]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            {slides[index].badge}
          </span>
          <h1 className="mx-auto mt-4 max-w-[760px] text-4xl leading-[1.04] font-semibold tracking-[-0.02em] text-white md:text-6xl">
            {slides[index].title}
          </h1>
          <p className="mx-auto mt-3 max-w-[520px] text-sm leading-relaxed text-white/70 md:text-base">
            {slides[index].subtitle}
          </p>
          <Link
            href="/register"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#05AAFF] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#05AAFF]"
          >
            Register Now — It&apos;s Free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
        <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-2">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              aria-label={`Go to slide ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={cn(
                "cursor-pointer rounded-full transition-all",
                dotIndex === index ? "h-1.5 w-3 bg-white" : "h-1.5 w-1.5 bg-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
