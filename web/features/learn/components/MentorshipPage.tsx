import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import {
  mentorshipSpeak,
  mentorshipSubstack,
  mentorshipTraining,
  mentorshipUniversity,
} from "../data/mentorship-content";
import { MentorshipParagraphs } from "./MentorshipParagraphs";

/**
 * Mentorship page — photo-led (chosen from the design options). Large photography carries each section and the copy sits in a card
 * that overlaps the photo's edge. A framed banner opens the page; the stage photo closes it.
 */

const h2 =
  "text-left! text-[clamp(2rem,3.6vw,3.25rem)]! font-bold leading-[110%]! tracking-[-0.03em]!";
const h2Font = { fontFamily: "var(--font-agrandir)", textWrap: "balance" } as const;

export function MentorshipPage() {
  const u = mentorshipUniversity;
  const t = mentorshipTraining;
  const s = mentorshipSpeak;
  const b = mentorshipSubstack;

  return (
    <div className="bg-[#F6F7FB]">
      {/* 1 — framed banner; the nav sits on the light strip above it */}
      <section className="px-3 pt-20 sm:px-5">
        <div className="relative mx-auto min-h-[64svh] max-w-[1400px] overflow-hidden rounded-[28px] md:min-h-[72svh]">
          <Image
            src="/assets/reu-wide-hd.png"
            alt={u.imageAlt}
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,36,51,0) 30%, rgba(15,36,51,0.82) 70%, rgba(15,36,51,1) 92%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
            <h1
              className="max-w-[16ch] text-left! text-[clamp(2.5rem,6.2vw,5.5rem)]! font-bold leading-[102%]! tracking-[-0.035em]! text-white"
              style={h2Font}
            >
              {u.title}
            </h1>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1320px] min-w-0 gap-10 px-1 py-14 sm:px-4 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 lg:px-6">
          <div className="max-w-[56ch] space-y-5">
            <MentorshipParagraphs
              paragraphs={u.paragraphs.slice(0, 2)}
              className="text-[#505153]"
              strongClassName="text-[#233A4A]"
            />
          </div>
          <div className="max-w-[56ch] space-y-5">
            <MentorshipParagraphs
              paragraphs={u.paragraphs.slice(2)}
              className="text-[#505153]"
              strongClassName="text-[#233A4A]"
            />
            <div className="pt-4">
              <CtaLink cta={u.cta} />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — full-width photo, copy card overlapping its lower-right edge */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] md:aspect-[16/9] md:w-[78%]">
              <Image
                src={t.imageSrc}
                alt={t.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 767px) 92vw, 1000px"
              />
            </div>
            <div className="relative -mt-12 rounded-[24px] bg-[#0F2433] p-7 shadow-[0_40px_80px_-30px_rgba(15,36,51,0.6)] sm:p-10 md:absolute md:bottom-[-48px] md:right-0 md:mt-0 md:w-[46%] md:p-10 lg:p-12">
              <h2 className={`${h2} text-white`} style={h2Font}>
                {t.title}
              </h2>
              <div className="mt-5 space-y-4">
                <MentorshipParagraphs
                  paragraphs={t.paragraphs}
                  className="text-[#C3D1DE]"
                  strongClassName="text-white"
                  sizeClassName="text-[15px]! leading-[172%]! sm:text-[16px]!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — the stage photo; copy overlays it from md up, sits on a dark panel below it on phones */}
      <section className="relative mt-24 overflow-hidden md:mt-40 md:min-h-[88svh]">
        <div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:aspect-auto">
          <Image
            src="/assets/speaks-on.png"
            alt={s.imageAlt}
            fill
            className="object-cover object-[78%_top]"
            sizes="100vw"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,36,51,0.92) 0%, rgba(15,36,51,0.7) 42%, rgba(15,36,51,0.05) 78%), linear-gradient(180deg, rgba(15,36,51,0) 55%, rgba(15,36,51,0.7) 100%)",
          }}
        />
        <div className="relative bg-[#0F2433] md:min-h-[88svh] md:bg-transparent">
          <div className="mx-auto flex max-w-[1320px] px-4 py-14 sm:px-6 md:min-h-[88svh] md:items-center lg:px-10">
            <div className="max-w-[560px]">
              <h2 className={`${h2} text-white`} style={h2Font}>
                {s.title}
              </h2>
              <div className="mt-6 space-y-5">
                <MentorshipParagraphs
                  paragraphs={s.paragraphs}
                  className="text-[#DCE6EF]"
                  strongClassName="text-white"
                />
              </div>
              <div className="mt-8">
                <CtaLink cta={s.cta} variant="inverse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — light, typographic close */}
      <section className="bg-[#EAF3FB] py-20 md:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] min-w-0 gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-20 lg:px-10">
          <h2
            className={`${h2} text-[clamp(2.25rem,4.8vw,4.25rem)]! text-[#233A4A]`}
            style={h2Font}
          >
            {b.title}
          </h2>
          <div className="max-w-[54ch] space-y-5">
            <MentorshipParagraphs
              paragraphs={b.paragraphs}
              className="text-[#44515C]"
              strongClassName="text-[#233A4A]"
            />
            <div className="pt-4">
              <CtaLink cta={b.cta} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
