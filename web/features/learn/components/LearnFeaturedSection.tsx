"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";

const VIDEO_SRC = "/videos/reu005.mp4";
const POSTER_SRC = "/videos/reu005-poster.jpg";

export function LearnFeaturedSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    void video.play();
  };

  return (
    <SectionWrapper
      id="featured"
      className="bg-[#F5F5F5] py-10 md:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-5 lg:px-3">
        <h3
          className="w-full text-left! text-[20px] font-bold leading-[115%] tracking-[-0.02em] text-[#233A4A]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          <span className="inline-flex items-center gap-1">
            Real Estate University
            <span
              className="inline-flex items-center text-[12px] font-normal text-[#9EA6AE]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              [1]
            </span>
          </span>
        </h3>

        <div className="relative mt-4 overflow-hidden rounded-[10px] bg-[#111] sm:mt-5 sm:rounded-[12px]">
          <video
            ref={videoRef}
            className="block aspect-video h-auto w-full object-cover"
            poster={POSTER_SRC}
            controls={started}
            preload="none"
            playsInline
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {!started && (
            <button
              type="button"
              onClick={startPlayback}
              aria-label="Play Real Estate University episode"
              className="absolute inset-0 cursor-pointer"
            >
              <Image
                src={POSTER_SRC}
                alt="Real Estate University featured episode"
                width={1440}
                height={702}
                sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 2.5rem), 1434px"
                className="h-full w-full object-cover"
                priority
              />
              <span className="absolute inset-0 bg-black/20" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 sm:h-20 sm:w-20">
                <Image src="/assets/play-circle.svg" alt="" aria-hidden width={48} height={48} />
              </span>
            </button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
