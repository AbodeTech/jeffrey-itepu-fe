import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Body({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "[font-family:var(--font-delight)] text-[18px] leading-[192%] font-normal tracking-[0] text-[#6C7881]",
        className
      )}
      {...props}
    />
  );
}
