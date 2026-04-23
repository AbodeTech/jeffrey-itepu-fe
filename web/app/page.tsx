import type { Metadata } from "next";
import { PortfolioPage } from "@/features/portfolio";

export const metadata: Metadata = {
  title: "Jeffrey Itepu — Real Estate Visionary & Co-Founder of Abode",
  description:
    "Jeffrey Itepu is a visionary leader and Co-Founder & CEO of Abode, pioneering social community leveraging technology to democratise real estate ownership in Africa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jeffrey Itepu — Real Estate Visionary & Co-Founder of Abode",
    description:
      "Jeffrey Itepu is a visionary leader and Co-Founder & CEO of Abode, pioneering social community leveraging technology to democratise real estate ownership in Africa.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeffrey Itepu — Real Estate Visionary & Co-Founder of Abode",
    description:
      "Jeffrey Itepu is a visionary leader and Co-Founder & CEO of Abode, pioneering social community leveraging technology to democratise real estate ownership in Africa.",
  },
};

export default function HomePage() {
  return <PortfolioPage />;
}
