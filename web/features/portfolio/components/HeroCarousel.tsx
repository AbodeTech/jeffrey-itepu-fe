"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = {
  image: string;
  title: string;
  badge: string;
};

const slides: Slide[] = [
  {
    image: "/hero/hero-1.png",
    title: "Building Systems That Expand Ownership",
    badge: "Jeffrey Itepu is",
  },
  {
    image: "/hero/hero-2.png",
    title: "Developing People. Strengthening Communities.",
    badge: "Jeffrey Itepu is",
  },
  {
    image: "/hero/hero-3.png",
    title: "Leading With Structure and Discipline",
    badge: "Jeffrey Itepu is",
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
