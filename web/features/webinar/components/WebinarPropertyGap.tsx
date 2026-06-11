"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span
      ref={ref}
      className="font-[family-name:var(--font-display)] text-[12vw] font-bold leading-none text-primary md:text-[5vw]"
    >
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function WebinarPropertyGap() {
  return (
    <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-slate-100 pb-16">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-slate-400">
            Commissions earned
          </p>
          <AnimatedNumber target={600} prefix="₦" suffix="M+" />
          <p className="mt-4 max-w-sm font-sans text-base leading-relaxed text-slate-600">
            paid out to Abode-trained realtors since the programme launched.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12 sm:flex-row sm:gap-0 sm:divide-x sm:divide-slate-100">
          <div className="flex flex-col gap-2 sm:pr-16">
            <AnimatedNumber target={2} suffix=" WKS" />
            <p className="max-w-xs font-sans text-sm leading-relaxed text-slate-500">
              average time to first sale for Abode associates after graduating.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:pl-16">
            <AnimatedNumber target={707} suffix="+" />
            <p className="max-w-xs font-sans text-sm leading-relaxed text-slate-500">
              certified graduates across 4 cohorts and counting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
