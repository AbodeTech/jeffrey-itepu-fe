"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "icon";

/** Motion overrides several DOM handlers (drag gestures, animation callbacks). */
type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
> & {
  variant?: Variant;
};

const variantMap: Record<Variant, string> = {
  primary:
    "h-12 w-[293px] rounded-2xl bg-[#2CB5F8] px-6 py-3 text-white hover:bg-[#1C9BE0] shadow-[0_10px_30px_rgba(44,181,248,0.35)]",
  secondary: "bg-[#233A4A] text-white hover:bg-[#1a2c39]",
  outline: "border border-[#E0EAF1] bg-white text-[#233A4A] hover:bg-[#F7FAFC]",
  icon: "h-10 w-10 rounded-full bg-white/15 text-white hover:bg-white/25",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium transition",
        variantMap[variant],
        className
      )}
      {...props}
    >
      {children}
      {variant === "primary" ? (
        <Image src="/assets/arrow-up.svg" alt="" aria-hidden width={8} height={8} />
      ) : null}
    </motion.button>
  );
}
