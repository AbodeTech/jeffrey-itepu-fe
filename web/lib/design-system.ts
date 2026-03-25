export const ds = {
  colors: {
    background: "#F6F7FB",
    surface: "#FFFFFF",
    textPrimary: "#233A4A",
    textSecondary: "#6C7881",
    accent: "#2CB5F8",
    accentDark: "#1C9BE0",
    border: "#E6ECF2",
    softLavender: "#F1EFF8",
    navy: "#031734",
  },
  spacing: {
    sectionYMobile: "py-14",
    sectionYDesktop: "lg:py-20",
    container: "max-w-[1200px] px-4 sm:px-6 lg:px-8",
  },
  radii: {
    card: "rounded-2xl",
    button: "rounded-full",
  },
  typography: {
    heading:
      "[font-family:var(--font-agrandir)] font-bold leading-[116%] tracking-[-0.02em] text-center text-[#233A4A]",
    body: "[font-family:var(--font-delight)] text-[18px] leading-[192%] font-normal tracking-[0] text-[#6C7881]",
    accentScript: "text-[#F08A4B] italic",
  },
  motion: {
    sectionReveal: {
      hidden: { opacity: 0, y: 40 },
      show: { opacity: 1, y: 0 },
    },
    cardReveal: {
      hidden: { opacity: 0, y: 20, scale: 0.98 },
      show: { opacity: 1, y: 0, scale: 1 },
    },
  },
} as const;
