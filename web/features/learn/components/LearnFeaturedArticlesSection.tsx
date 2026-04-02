 "use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";

const articles = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  date: "28th Feb, 2026",
  titleLine1: "How to become a landowner in a land",
  titleLine2: "where nobody owns the land like Lagos",
  description:
    "Create superior code, compose emails, boost any kind of work within a collaborative team environment.",
}));

export function LearnFeaturedArticlesSection() {
  const pageSize = 6;
  const totalPages = Math.ceil(articles.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const pagedArticles = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return articles.slice(start, start + pageSize);
  }, [currentPage]);

  const visiblePages = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage, "...", totalPages];
  }, [currentPage, totalPages]);

  return (
    <SectionWrapper id="featured-articles" className="bg-[#F5F5F5] py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-5 lg:px-3">
        <div className="w-full text-left!">
          <h3
            className="w-full text-left! text-[20px] font-bold leading-[115%] tracking-[-0.02em] text-[#233A4A]"
            style={{ fontFamily: "var(--font-agrandir)" }}
          >
            <span className="inline-flex items-center gap-1">
              Featured Articles
              <span
                className="inline-flex items-center text-[12px] font-normal leading-none text-[#9CA4AB] md:text-[13px]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                [12]
              </span>
            </span>
          </h3>
        </div>

        <div className="mt-8 grid justify-items-center gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-start">
          {pagedArticles.map((article) => (
            <article key={article.id} className="w-full max-w-[360px] sm:max-w-[372px] lg:max-w-[392px]">
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src="/ownership/ownership-ledger-post.png"
                  alt="Street scene artwork for featured article"
                  width={392}
                  height={316}
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
              <p className="mt-4 text-[15px] leading-[165%] text-[#7C7C7C]">{article.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-9">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full bg-[#E8ECEF] px-3 py-2 text-[13px] text-[#5D6770] sm:gap-2 sm:px-4">
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="cursor-pointer rounded-full px-2 py-1 transition hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-50"
            >
              ←
            </button>
            {visiblePages.map((page, i) =>
              page === "..." ? (
                <span key={`dots-${i}`}>...</span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(Number(page))}
                  className={`cursor-pointer rounded-full px-2 py-1 transition hover:bg-white/70 ${Number(page) === currentPage ? "text-[#129AE8]" : ""}`}
                >
                  {page}
                </button>
              )
            )}
            <button
              type="button"
              aria-label="Next page"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="cursor-pointer rounded-full px-2 py-1 transition hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

