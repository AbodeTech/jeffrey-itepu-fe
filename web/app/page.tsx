import type { Metadata } from "next";
import { PortfolioPage } from "@/features/portfolio";

export const metadata: Metadata = {
  title: "Jeffrey Itepu — Entrepreneur & Co-Founder of Abode",
  description:
    "Jeffrey Itepu is an entrepreneur, business leader, and Co-Founder & CEO of Abode, a pioneering social community leveraging technology to expand access to property ownership across Africa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jeffrey Itepu — Entrepreneur & Co-Founder of Abode",
    description:
      "Jeffrey Itepu is an entrepreneur, business leader, and Co-Founder & CEO of Abode, a pioneering social community leveraging technology to expand access to property ownership across Africa.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeffrey Itepu — Entrepreneur & Co-Founder of Abode",
    description:
      "Jeffrey Itepu is an entrepreneur, business leader, and Co-Founder & CEO of Abode, a pioneering social community leveraging technology to expand access to property ownership across Africa.",
  },
};

export default function HomePage() {
  return <PortfolioPage />;
}
