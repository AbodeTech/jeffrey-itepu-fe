import Image from "next/image";
import { foundationHero } from "../data/foundation-content";
import { CtaLink } from "@/components/CtaLink";

/**
 * Light hero in the same language as Book Jeff: copy left, a tall capsule portrait
 * right with two small circular photos orbiting it.
 */
export function FoundationHeroSection() {
  const { title, paragraphs, cta, imageSrc, imageAlt, insetImages } = foundationHero;

  return (
    <section className="relative isolate overflow-hidden bg-[#F6F7FB]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 78% 38%, rgba(5,170,255,0.12) 0%, rgba(246,247,251,0) 70%), radial-gradient(ellipse 55% 45% at 30% 20%, rgba(255,255,255,0.95) 0%, rgba(246,247,251,0) 70%)",
        }}
      />

      <div className="mx-auto grid max-w-[1320px] min-w-0 items-center gap-14 px-4 pb-20 pt-28 sm:px-6 md:pb-24 md:pt-32 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="min-w-0 text-left">
          <h1
            className="foundation-rise text-left! text-[clamp(2.5rem,5.6vw,4.75rem)]! font-bold leading-[106%]! tracking-[-0.03em]! text-[#233A4A]"
            style={{ fontFamily: "var(--font-agrandir)", textWrap: "balance" }}
          >
            {title}
          </h1>

          <div className="mt-8 max-w-[56ch] space-y-5">
            {paragraphs.map((text, i) => (
              <p
                key={text}
                className="foundation-rise text-left text-[16px]! leading-[175%]! text-[#505153] sm:text-[17px]! lg:text-[18px]!"
                style={{ fontFamily: "var(--font-delight)", animationDelay: `${120 + i * 90}ms` }}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="foundation-rise mt-10" style={{ animationDelay: "320ms" }}>
            <CtaLink cta={cta} />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[min(100%,440px)] lg:mx-0 lg:ml-auto">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[220px] opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(35,58,74,0.14) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              maskImage: "linear-gradient(135deg, transparent 20%, #000 100%)",
              WebkitMaskImage: "linear-gradient(135deg, transparent 20%, #000 100%)",
            }}
          />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[999px] shadow-[0_40px_80px_-28px_rgba(15,36,51,0.35)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="foundation-hero-image object-cover object-[center_28%]"
              sizes="(max-width: 1023px) 80vw, 440px"
            />
          </div>

          <div className="absolute -left-3 top-[9%] h-24 w-24 overflow-hidden rounded-full border-[5px] border-[#F6F7FB] shadow-[0_18px_36px_-14px_rgba(15,36,51,0.45)] sm:-left-8 sm:h-32 sm:w-32">
            <Image
              src={insetImages[0].src}
              alt={insetImages[0].alt}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="absolute -right-3 bottom-[12%] h-28 w-28 overflow-hidden rounded-full border-[5px] border-[#F6F7FB] shadow-[0_18px_36px_-14px_rgba(15,36,51,0.45)] sm:-right-8 sm:h-36 sm:w-36">
            <Image
              src={insetImages[1].src}
              alt={insetImages[1].alt}
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes foundation-rise {
          from { opacity: 0; transform: translateY(18px); }
        }
        .foundation-rise {
          animation: foundation-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes foundation-hero-ken {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }
        .foundation-hero-image {
          transform: scale(1.08);
          animation: foundation-hero-ken 28s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .foundation-rise { animation: none; }
          .foundation-hero-image {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
