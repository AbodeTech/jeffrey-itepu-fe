import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Subheading({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.08em] text-[#2CB5F8] md:text-base",
        className
      )}
      {...props}
    />
  );
}
