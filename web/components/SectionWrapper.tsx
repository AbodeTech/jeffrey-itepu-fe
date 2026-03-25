"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { HTMLAttributes, RefObject } from "react";
import { cn } from "@/lib/utils";
import { ds } from "@/lib/design-system";

type SectionWrapperProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
};

export function SectionWrapper({
  as = "section",
  className,
  children,
  ...props
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const Tag = as;

  return (
    <motion.div
      ref={ref as RefObject<HTMLDivElement>}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={ds.motion.sectionReveal}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Tag
        className={cn(
          "w-full",
          ds.spacing.sectionYMobile,
          ds.spacing.sectionYDesktop,
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
