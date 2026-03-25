import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
};

export function Heading({ as = "h2", className, ...props }: HeadingProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "[font-family:var(--font-agrandir)] font-bold leading-[116%] tracking-[-0.02em] text-center text-[#233A4A]",
        as === "h1" && "text-4xl leading-[1.05] md:text-6xl",
        as === "h2" && "text-3xl leading-tight md:text-5xl",
        as === "h3" && "text-2xl leading-tight md:text-3xl",
        as === "h4" && "text-xl leading-tight md:text-2xl",
        className
      )}
      {...props}
    />
  );
}
