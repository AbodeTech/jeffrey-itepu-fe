/**
 * Foundation page copy — taken word for word from the "Jeff Website- Revamp" doc
 * (Foundation Page, sections 01–04). Do not paraphrase.
 * Image paths and CTA destinations are not part of the doc and can be swapped freely.
 */

export type FoundationCta = {
  label: string;
  href: string;
  /** opens in a new tab */
  external?: boolean;
};

export type FoundationStoryBand = {
  id: string;
  title: string;
  paragraphs: string[];
  cta: FoundationCta;
  imageSrc: string;
  imageAlt: string;
  /** image on the left (true) or right (false) at md+ */
  imageFirst: boolean;
  surface: "surface" | "cool-paper" | "mist";
};

/** Section 01 · Hero */
export const foundationHero = {
  title: "Leadership That Creates Opportunity.",
  paragraphs: [
    "Jeffrey Itepu believes that meaningful progress begins when people have access to the knowledge, support, and opportunities they need to thrive.",
    "From community initiatives to youth development and rehabilitation programmes, his work reflects a belief that leadership should create opportunities beyond business and build a lasting impact in people's lives.",
  ],
  cta: { label: "Explore His Impact", href: "#community-impact" },
  imageSrc: "/images/landing/AUG_9388.png",
  imageAlt: "A young woman celebrating with her cap in a green gown",
  insetImages: [
    { src: "/images/landing/AUG_9410.png", alt: "Three young women smiling for a photo together" },
    { src: "/images/landing/AUG_9543.png", alt: "A crowd celebrating together" },
  ],
} as const;

/** Section 02 · Community Impact */
export const foundationCommunityImpact = {
  title: "Opportunity Begins With People.",
  intro:
    "Sustainable communities are built when people have the resources, guidance, and support to move forward. Through initiatives connected to his leadership and work with partner organisations, Jeffrey has been involved in efforts focused on menstrual health education, community development, and support for girls.",
  initiatives: [
    {
      title: "Menstrual Health and Mentorship",
      body: "Jeff partnered with GIDN on an initiative supporting menstrual hygiene awareness and mentorship for female students.",
    },
    {
      title: "Community Development in Obafe",
      body: "The Adopt a Community initiative focused on community engagement and local development.",
    },
    {
      title: "Supporting Girls at the Special Correctional Centre",
      body: "An initiative focused on supporting girls through engagement and opportunities for development.",
    },
  ],
  cta: {
    label: "Read About the Initiative",
    href: "https://thesun.ng/menstrual-hygiene-gidn-partners-abode-to-mentor-female-students/",
    external: true,
  },
  imageSrc: "/images/landing/AUG_6547.png",
  imageAlt: "Young women laughing and taking a photo together",
} as const;

/** Section 03 · Building Capacity */
export const foundationBuildingCapacity: FoundationStoryBand = {
  id: "building-capacity",
  title: "Equip People to Shape Their Own Future.",
  paragraphs: [
    "Jeffrey’s approach to impact goes beyond providing immediate support. It includes helping people develop the skills, confidence, and capacity to build a different future.",
    "As Global Programmes Manager at OneAfricanChild Foundation, he managed project execution across Nigeria, Kenya, Cameroon, and Benin. His work contributed to programmes focused on education, youth development, and community empowerment.",
    "Through Enactus, he also worked on a prison rehabilitation initiative at Igbeba Prison, preparing inmates for reintegration into their communities through vocational skills, soft-skills training, and practical support.",
  ],
  cta: {
    label: "Learn More About His Work",
    href: "https://oneafricanchild.org/",
    external: true,
  },
  imageSrc: "/images/landing/AUG_9330.png",
  imageAlt: "Participants taking notes during a training session",
  imageFirst: false,
  surface: "cool-paper",
};

/** Section 04 · Legacy — the last paragraph is set apart as the closing statement */
export const foundationLegacy = {
  title: "What We Build Should Outlive Us.",
  paragraphs: [
    "For Jeffrey, leadership is not measured only by what a person achieves, but also by what others are able to achieve because of their contribution.",
    "As board chairman of Sheila Quest Foundation, he supports an organisation committed to helping children access education, essential resources, mentorship, and opportunities to reach their potential.",
    "His wider philosophy is simple: build people, strengthen systems, and create opportunities that can continue to make a difference long after a single project ends.",
  ],
  closing: [
    "An empowered person can transform their world.",
    "A community of empowered people can transform generations.",
  ],
  cta: { label: "Start a Conversation", href: "/contact" },
  photos: [
    { src: "/images/landing/AUG_9538.png", alt: "A crowd of graduates celebrating together" },
    { src: "/images/landing/AUG_8667.png", alt: "A young man adjusting his graduation cap" },
    { src: "/images/landing/AUG_9402.png", alt: "Two people taking a selfie together" },
  ],
} as const;
