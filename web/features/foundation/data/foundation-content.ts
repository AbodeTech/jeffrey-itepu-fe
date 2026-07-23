/**
 * THESIS: Foundation is a long-horizon ownership story told as paired fields —
 * photo and conviction — not a carousel of claims or a card grid of pillars.
 * OWN-WORLD: Cool Paper / Surface / Mist tonal bands; Agrandir display + Delight
 * body; Jeff Sky / Link Blue CTAs; full-bleed real photography, no sticker chrome.
 * STORY: Visitor feels generational ownership intent, then can contact or join.
 * FIRST VIEWPORT: Edge-to-edge hero photo, brand "Foundation" dominant, one line,
 * one CTA bottom-left on desktop / centered on mobile.
 * FORM: Tonal field pairings (seed 340d8735 · candidate 5); brief-pinned alternating
 * image/copy rhythm with surface-tone alternation.
 */

export type FoundationStoryBand = {
  id: string;
  titleLines: [string, string];
  body: string;
  imageSrc: string;
  imageAlt: string;
  /** image on the left (true) or right (false) at md+ */
  imageFirst: boolean;
  surface: "surface" | "cool-paper" | "mist";
};

/** Temporary copy — replace when Foundation content is ready. Do not treat as final claims. */
export const foundationHero = {
  brand: "Foundation",
  support:
    "A long-horizon commitment to ownership systems that outlast a single transaction.",
  ctaLabel: "Start a Conversation",
  ctaHref: "/contact",
  imageSrc: "/images/landing/AUG_9626.png",
  imageAlt: "Jeffrey Itepu in a setting that reflects community and place",
} as const;

export const foundationStoryBands: FoundationStoryBand[] = [
  {
    id: "invest-future",
    titleLines: ["Invest in Your Future.", "Build for Generations."],
    body:
      "Placeholder: this band will describe how Foundation frames ownership as patient capital — structure, trust, and access designed to compound across families and markets. Final copy pending.",
    imageSrc: "/images/landing/AUG_9651.png",
    imageAlt: "Scene representing long-term ownership and community",
    imageFirst: true,
    surface: "surface",
  },
  {
    id: "systems-endure",
    titleLines: ["Systems That Endure.", "Communities That Grow."],
    body:
      "Placeholder: this band will explain how Abode-linked systems and disciplined participation turn opportunity into organised pathways — not one-off inspiration. Final copy pending.",
    imageSrc: "/images/landing/AUG_9803.png",
    imageAlt: "People and place connected through shared opportunity",
    imageFirst: false,
    surface: "cool-paper",
  },
  {
    id: "africa-horizon",
    titleLines: ["Africa's Horizon.", "Ownership With Intent."],
    body:
      "Placeholder: this band will situate Foundation in Africa’s ownership future — institutions, innovation, and trusted frameworks that unlock participation at scale. Final copy pending.",
    imageSrc: "/images/landing/AUG_9543.png",
    imageAlt: "Landscape and people that evoke Africa’s ownership horizon",
    imageFirst: true,
    surface: "mist",
  },
];

/** Temporary copy — replace when Foundation content is ready. */
export const foundationHorizonLedger = {
  titleLines: ["What We Hold.", "What We Pass On."] as [string, string],
  body:
    "Placeholder: this closing layout will name the Foundation's stewardship — the values, systems, and relationships meant to outlive any single deal. Final copy pending.",
  ctaLabel: "Talk With the Team",
  ctaHref: "/contact",
  photos: [
    {
      src: "/images/landing/AUG_9914.png",
      alt: "Community and place in Jeffrey's ownership work",
    },
    {
      src: "/images/landing/AUG_0178.png",
      alt: "People gathered in a setting of trust and opportunity",
    },
    {
      src: "/images/landing/AUG_9563.png",
      alt: "A moment of leadership and long-term vision",
    },
  ],
} as const;
