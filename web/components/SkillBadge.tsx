import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  children: string;
  className?: string;
};

export function SkillBadge({ children, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[#CFE5F4] bg-white px-4 py-2 text-xs font-medium text-[#2A4A5E] md:text-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
