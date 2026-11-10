import Link from "next/link";

export type Cta = {
  label: string;
  href: string;
  /** opens in a new tab */
  external?: boolean;
};

const base =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-[16px] px-6 text-[14px]! font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-w-[220px]";

const variants = {
  solid:
    "bg-[#0093FF] text-white shadow-[0_10px_24px_-8px_rgba(0,147,255,0.55)] hover:bg-[#0586E3] focus-visible:outline-[#0093FF]",
  /** for coloured or dark surfaces */
  inverse:
    "bg-white text-[#0F2433] shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)] hover:bg-[#EAF3FB] focus-visible:outline-white",
} as const;

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M7 17L17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CtaLink({ cta, variant = "solid" }: { cta: Cta; variant?: keyof typeof variants }) {
  const className = `${base} ${variants[variant]}`;
  const style = { fontFamily: "var(--font-delight)" };

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {cta.label}
        <Arrow />
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className} style={style}>
      {cta.label}
      <Arrow />
    </Link>
  );
}
