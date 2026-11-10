/**
 * Mentorship page copy — taken word for word from the "Jeff Website- Revamp" doc
 * (Mentorship page, sections 1–4). Do not paraphrase.
 * Image paths and CTA destinations are not part of the doc and can be swapped freely.
 */

import type { Cta } from "@/components/CtaLink";

/** A paragraph is a list of parts; `{ strong }` parts are set in bold. */
export type Part = string | { strong: string };
export type Paragraph = Part[];

/** TODO: replace with the Substack publication URL; this is the latest published post. */
const SUBSTACK_URL = "https://substack.com/home/post/p-206428357";

/** 1 · Real Estate University */
export const mentorshipUniversity = {
  title: "Building People. Building Systems. Creating Opportunity.",
  paragraphs: [
    ["Real estate is more than land and buildings. It is knowledge, people, and the systems that make lasting ownership possible."],
    [
      "Through his real estate university, Jeffrey Itepu shares practical knowledge, mentors emerging professionals, and helps people understand the opportunities within the real estate industry. His approach goes beyond teaching. He invests in people, supports promising businesses, and helps turn ideas into systems that can grow.",
    ],
    [
      "Jeff believes that when you empower a person with the right knowledge, support, and opportunities, you give them the tools to transform their world.",
    ],
    [
      {
        strong:
          "Because the goal isn't just to build successful real estate professionals. It's to build people who can build something meaningful.",
      },
    ],
  ] satisfies Paragraph[],
  cta: {
    label: "Explore the Real Estate University",
    href: "https://realestate-university.vercel.app/",
    external: true,
  } satisfies Cta,
  imageSrc: "/assets/reu.png",
  imageAlt: "Jeffrey Itepu seated at the Real Estate University set",
} as const;

/** 2 · Mentorship and close-door training */
export const mentorshipTraining = {
  title: "The Best Investment Is in People.",
  paragraphs: [
    ["Behind every thriving business is someone who had to learn, grow, make decisions, and figure things out."],
    [
      "Jeffrey believes in creating room for that growth. Through focused training sessions, mentorship, and practical conversations, he works with people to strengthen their thinking, develop their skills, and build the capacity to lead.",
    ],
    [
      "His philosophy is simple: ",
      { strong: "build people who can build systems, and build systems that can outlast individuals." },
    ],
    [
      "Because when people grow, their businesses can grow. And when businesses grow on strong foundations, their impact can reach far beyond themselves.",
    ],
  ] satisfies Paragraph[],
  imageSrc: "/images/landing/AUG_9330.png",
  imageAlt: "Participants taking notes during a training session",
} as const;

/** 3 · Invite Jeff to speak */
export const mentorshipSpeak = {
  title: "Ideas That Build People, Businesses and Better Systems.",
  paragraphs: [
    [
      "Jeffrey Itepu speaks on ownership, wealth creation, leadership, entrepreneurship, and the systems needed to create lasting impact.",
    ],
    [
      "Drawing from his experience in real estate and business building, he challenges audiences to think beyond immediate success and consider how knowledge, innovation, and intentional leadership can create opportunities for others.",
    ],
    ["Whether it's a keynote, leadership conversation, or industry event, Jeff brings a perspective centred on building for the long term."],
  ] satisfies Paragraph[],
  cta: { label: "Invite Jeff to Speak", href: "/book-jeff" } satisfies Cta,
  imageSrc: "/assets/book-jeff.png",
  imageAlt: "Jeffrey Itepu speaking on stage",
} as const;

/** 4 · Join Jeff on Substack */
export const mentorshipSubstack = {
  title: "Better Questions. Bigger Ideas. A Different Way to Build.",
  paragraphs: [
    ["What does it really take to build wealth, grow a business, develop people, and create something that lasts?"],
    [
      "Jeffrey shares his thoughts on these questions through essays and reflections on ownership, leadership, real estate, and the systems that shape our lives and businesses.",
    ],
    [
      "Join his Substack for ideas that challenge conventional thinking, practical lessons from the journey, and perspectives to help you think more intentionally about what you're building.",
    ],
  ] satisfies Paragraph[],
  cta: { label: "Read Jeff's Notes on Substack", href: SUBSTACK_URL, external: true } satisfies Cta,
} as const;
