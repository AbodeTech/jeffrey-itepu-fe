import type { Metadata } from "next";
import { WebinarPage } from "@/features/webinar";
import { heroBannerSrc } from "@/lib/landing-images";
import { MASTER_CLASS_EVENT_DATE } from "@/lib/event";

export const metadata: Metadata = {
  title: "Abode Webinar | Advanced Realtor Certification Program",
  description:
    "Learn the strategy to earn more consistently in 2026 through real estate. Registration is free.",
  alternates: {
    canonical: "/webinar",
  },
  openGraph: {
    title: "Abode Webinar | Free Real Estate Sales Training",
    description: `Join Jeffrey Itepu for a free real estate masterclass on ${MASTER_CLASS_EVENT_DATE}. Registration is free.`,
    url: "/webinar",
    type: "website",
    images: [
      {
        url: heroBannerSrc,
        width: 1200,
        height: 630,
        alt: "Abode Webinar — Free Real Estate Sales Training with Jeffrey Itepu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abode Webinar | Free Real Estate Sales Training",
    description: `Join Jeffrey Itepu on ${MASTER_CLASS_EVENT_DATE} for a free real estate masterclass.`,
    images: [heroBannerSrc],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Abode Webinar",
  url: "https://jeffreyitepu.com/webinar",
  description:
    "Abode Webinar provides free property investment education through practical workshops and expert-led sessions.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <WebinarPage />
    </>
  );
}
