"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";

type LocationData = {
  name: string;
  address: string;
  acres: string;
  images: string[];
};

const locations: LocationData[] = [
  {
    name: "WoodGate City",
    address: "Ikorodu – Shagamu Expressway",
    acres: "300 Acres Available",
    images: [
      "/invest/location.jpg",
      "/invest/location.jpg",
      "/invest/location.jpg",
      "/invest/location.jpg",
    ],
  },
  {
    name: "The Arena Estate",
    address: "Ikorodu – Shagamu Expressway",
    acres: "300 Acres Available",
    images: [
      "/invest/location.jpg",
      "/invest/location.jpg",
      "/invest/location.jpg",
      "/invest/location.jpg",
    ],
  },
  {
    name: "Rockville Estate",
    address: "Ikorodu – Shagamu Expressway",
    acres: "300 Acres Available",
    images: [
      "/invest/location.jpg",
      "/invest/location.jpg",
      "/invest/location.jpg",
      "/invest/location.jpg",
    ],
  },
];

function LocationCard({ location }: { location: LocationData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="flex w-full md:w-[612px] shrink-0 flex-col gap-[8px] rounded-[32px] border border-[#E8ECEF] bg-[#F6F7FB] p-[16px]">
      {/* Image carousel */}
      <div>
        <div className="relative overflow-hidden rounded-[16px]">
          <div className="relative aspect-29/17 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={location.images[activeIndex]}
                  alt={`${location.name} – image ${activeIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 580px"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-[6px]">
            {location.images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`block h-[8px] w-[8px] cursor-pointer rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-[#2D3436] scale-110"
                    : "bg-white/50 border border-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-1">
        <h3
          className="text-[17px] font-bold leading-[130%] text-[#233A4A]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          {location.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5">
          <Image
            src="/invest/location.svg"
            alt=""
            aria-hidden
            width={14}
            height={14}
            className="shrink-0"
          />
          <p
            className="text-[12px] leading-[150%] text-[#6C7881]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            {location.address}{" "}
            <span className="mx-0.5 text-[#9CA8B1]">&bull;</span>{" "}
            {location.acres}
          </p>
        </div>

        <button
          type="button"
          className="mt-5 flex h-[46px] w-full cursor-pointer items-center justify-center rounded-[14px] border border-[#8EC8FF] bg-transparent text-[13px] font-medium text-[#233A4A] transition hover:bg-[#F3F9FF]"
          style={{ fontFamily: "var(--font-delight)" }}
        >
          View on Abode
        </button>
      </div>
    </article>
  );
}

export function InvestAvailableLocationsSection() {
  return (
    <SectionWrapper
      id="locations"
      className="bg-[#FFF] pt-0! pb-6! md:pb-8! lg:pb-10!"
    >
      {/* Header */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <h2
          className="text-center text-[26px] font-bold leading-[116%] tracking-[-0.02em] text-[#233A4A] sm:text-[32px] md:text-[40px]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          Available Locations
        </h2>
        <p
          className="mx-auto mt-3 max-w-[460px] text-center text-[14px] leading-[170%] text-[#6C7881] md:text-[15px]"
          style={{ fontFamily: "var(--font-delight)" }}
        >
          Investment opportunities have included developments in:
        </p>
      </div>

      {/* Stacked on mobile, horizontal slider on md+ */}
      <div className="mt-8 flex flex-col gap-4 px-4 sm:mt-10 sm:px-6 md:flex-row md:gap-6 md:overflow-x-auto md:px-0 md:pl-6 lg:pl-[max(2.5rem,calc((100%-1440px)/2+2.5rem))] pb-4 md:[-ms-overflow-style:none] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden">
        {locations.map((location) => (
          <LocationCard key={location.name} location={location} />
        ))}
        {/* Right spacer for slider mode (md+) */}
        <div className="hidden md:block shrink-0 w-6 lg:w-10" aria-hidden />
      </div>
    </SectionWrapper>
  );
}
