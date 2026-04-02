import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

const articles = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  date: "28th Feb, 2026",
  titleLine1: "How to become a landowner in a land",
  titleLine2: "where nobody owns the land like Lagos",
  description:
    "Create superior code, compose emails, boost any kind of work within a collaborative team environment.",
}));

export function BookJeffFeaturedArticlesSection() {
  return (
    <SectionWrapper id="featured-articles" className="bg-[#F5F5F5] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-5 lg:px-3">
        <h3
          className="text-left text-[36px] leading-[115%] tracking-[-0.02em] text-[#233A4A] md:text-[48px]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          Featured Articles{" "}
          <span
            className="align-top text-[12px] font-normal leading-none text-[#9CA4AB] md:text-[13px]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            [12]
          </span>
        </h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id}>
              <div className="overflow-hidden rounded-[16px]">
                <Image
                  src="/ownership/ownership-ledger-post.png"
                  alt="Street scene artwork for featured article"
                  width={320}
                  height={256}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-5 text-[15px] text-[#7D8288]">{article.date}</p>
              <h4
                className="mt-3 text-[16px] font-bold leading-[124%] tracking-[-0.02em] text-[#233A4A]"
                style={{ fontFamily: "var(--font-agrandir)" }}
              >
                <span className="block">{article.titleLine1}</span>
                <span className="block">{article.titleLine2}</span>
              </h4>
              <p className="mt-4 text-[15px] leading-[165%] text-[#7C7C7C]">
                {article.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#E8ECEF] px-5 py-2 text-[13px] text-[#5D6770]">
            <span aria-hidden>←</span>
            <span className="text-[#129AE8]">1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>10</span>
            <span aria-hidden>→</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

