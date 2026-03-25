import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Caption({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("text-xs leading-5 text-[#8A98A3] md:text-sm", className)}
      {...props}
    />
  );
}
