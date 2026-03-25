"use client";

import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "@/features/portfolio/components/HeroCarousel";
import { portfolioContent } from "@/features/portfolio/data/portfolio-content";

export function PortfolioPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F6F7FB]">
      <Navbar />
      <main>
        <HeroCarousel />

        <SectionWrapper id="about" className="bg-white py-0">
          <div className="mx-auto max-w-[1180px] px-0">
            <div className="border-y border-[#ECECEC] bg-white px-4 pt-8 sm:px-5 md:px-6 lg:px-6">
              <div className="grid min-w-0 items-center gap-8 md:gap-10 lg:grid-cols-[1fr_minmax(0,430px)]">
                <div className="min-w-0 space-y-6 text-left md:text-center lg:text-left">
                  <p className="max-w-full text-[12px] leading-6 text-[#3D3D3D] sm:max-w-[520px] md:mx-auto md:text-[13px] lg:mx-0">
                    Jeffrey Itepu is a visionary leader and Co-Founder & CEO of{" "}
                    <Image
                      src="/assets/abode-logo.svg"
                      alt="Abode logo"
                      width={54}
                      height={13}
                      className="mx-1 inline-block align-middle"
                    />{" "}
                    a pioneering social community leveraging technology to democratise real estate
                    ownership in Africa, with a proven track record of developing thriving startups
                    and leading business expansion in the industry.
                  </p>
                  <p className="max-w-full text-[12px] leading-6 text-[#3D3D3D] sm:max-w-[520px] md:mx-auto md:text-[13px] lg:mx-0">
                    {portfolioContent.about.paragraphs[1]}
                  </p>
                </div>

                <div className="relative mx-auto h-[260px] w-full max-w-[min(100%,500px)] min-w-0 sm:h-[300px] md:h-[320px] lg:h-[340px]">
                  <div className="absolute right-0 top-0 h-[200px] w-[min(72%,250px)] overflow-hidden rounded-[8px] sm:h-[230px] sm:w-[250px] md:h-[240px] md:w-[270px] lg:h-[250px] lg:w-[290px]">
                    <Image
                      src="/about/about-main.png"
                      alt="Jeffrey presenting at a desk"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-[8%] z-20 h-[140px] w-[140px] overflow-hidden rounded-[8px] sm:left-[44px] sm:h-[172px] sm:w-[172px] md:h-[188px] md:w-[188px] lg:h-[198px] lg:w-[198px]">
                    <Image
                      src="/about/about-overlay.png"
                      alt="Jeffrey speaking on stage"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-dashed border-[#DBDBDB] pt-8 md:pt-10">
                <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-end lg:justify-between">
                  <div className="w-full pb-1 lg:max-w-[min(100%,480px)]">
                    <h6
                      className="text-left text-[26px] font-bold leading-[118%] tracking-[-0.02em] text-[#233A4A] sm:text-[30px] md:text-[34px] lg:text-[38px]"
                      style={{ fontFamily: "var(--font-agrandir)" }}
                    >
                      Measured progress over time.
                    </h6>
                    <p className="mt-3 max-w-full text-left text-[11px] leading-[150%] text-[#5D5D5D] sm:max-w-[420px] md:text-[12px]">
                      Experience built through consistent execution, partnerships, and long-term
                      focus.
                    </p>
                  </div>

                  <div className="grid w-full min-w-0 max-w-full gap-6 sm:max-w-[500px] sm:gap-8 lg:ml-auto">
                    {portfolioContent.about.stats.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-start border-b border-dashed border-[#E2E2E2] pb-5 last:border-b-0"
                      >
                        <h4
                          className="block w-full text-left text-[40px] text-[#129AE8] sm:text-[48px] md:text-[56px] lg:text-[64px]"
                          style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
                        >
                          {item.value}
                        </h4>
                        <p className="mt-1 block w-full text-left text-[11px] leading-[140%] text-[#6A6A6A] md:text-[12px]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="ownership-africa" className="bg-white py-0">
          <div className="mx-auto max-w-[1320px] px-0">
            <div className="relative min-w-0 bg-white px-4 pt-0 sm:px-5 md:px-8 lg:px-[72px]">
              <div className="mx-auto mb-12 flex max-w-[1440px] items-end gap-6 md:mb-16 md:gap-8 lg:mb-20">
                <Image
                  src="/assets/blurry-upward.svg"
                  alt=""
                  aria-hidden
                  width={160}
                  height={188}
                  className="pointer-events-none absolute -left-4 top-[260px] hidden opacity-90 lg:left-[-8px] lg:block"
                />

                <div className="w-full min-w-0 pl-0 md:pl-4 lg:pl-12 xl:pl-[168px]">
                  <div className="mb-12 max-w-full space-y-6 md:mb-16 md:space-y-7 lg:mb-20 lg:max-w-[800px]">
                    <p className="mb-4 text-left text-[11px] font-normal leading-[185%] text-[#3C3C3C] md:mb-7 md:text-[12px]">
                      I work at the intersection of real estate, technology, and community, focused
                      on how property ownership can become more accessible, trusted, and scalable
                      across African markets.
                    </p>
                    <p className="text-left text-[11px] font-normal leading-[185%] text-[#3C3C3C] md:text-[12px]">
                      My work centres on building not just assets, but the systems, structures, and
                      relationships that support sustainable ownership over time. My work spans
                      three connected areas:
                    </p>
                  </div>

                  <div className="mb-12 grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-2 md:mb-16 md:gap-x-8 lg:mb-20 lg:grid-cols-3 lg:gap-x-10">
                    {portfolioContent.ownership.pillars.map((pillar) => (
                      <div key={pillar.title} className="min-w-0 max-w-full space-y-3">
                        <Image src={pillar.icon} alt={pillar.title} width={26} height={26} />
                        <h6
                          className="text-left text-[12px] font-bold text-[#0F2433]"
                          style={{ fontFamily: "var(--font-agrandir)" }}
                        >
                          {pillar.title}
                        </h6>
                        <p className="max-w-full text-left text-[10px] font-normal leading-[170%] text-[#56616B] md:max-w-xl lg:max-w-none">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-[805px] px-1 text-center md:mt-14 lg:mt-16">
                <h3
                  className="text-[28px] font-bold leading-[116%] tracking-[-0.02em] text-[#233A4A] sm:text-[32px] md:text-[38px] lg:text-[42px]"
                  style={{ fontFamily: "var(--font-agrandir)" }}
                >
                  {portfolioContent.ownership.heading}
                </h3>
                <p className="mx-auto mt-4 max-w-full text-[11px] leading-[180%] text-[#555F68] md:max-w-[805px] md:text-[12px]">
                  {portfolioContent.ownership.description}
                </p>
              </div>

              <div className="mx-auto mt-8 grid max-w-[1000px] gap-4 sm:mt-10 md:grid-cols-2">
                <article className="rounded-[4px] border border-[#E5E8EC] bg-white p-5">
                  <Image
                    src={portfolioContent.ownership.cards[0].logo}
                    alt="Abode"
                    width={70}
                    height={16}
                  />
                  <p className="mt-4 text-left text-[10px] leading-[170%] text-[#4E5862]">
                    {portfolioContent.ownership.cards[0].subtitle}
                  </p>
                  <p className="mt-3 text-left text-[10px] text-[#7B838B]">
                    {portfolioContent.ownership.cards[0].location}
                  </p>
                </article>

                <article className="rounded-[4px] border border-[#E5E8EC] bg-white p-5">
                  <h6
                    className="text-left text-[12px] font-bold text-[#0F2433]"
                    style={{ fontFamily: "var(--font-agrandir)" }}
                  >
                    {portfolioContent.ownership.cards[1].title}
                  </h6>
                  <p className="mt-4 text-left text-[10px] leading-[170%] text-[#4E5862]">
                    {portfolioContent.ownership.cards[1].subtitle}
                  </p>
                  <p className="mt-3 text-left text-[10px] text-[#7B838B]">
                    {portfolioContent.ownership.cards[1].location}
                  </p>
                </article>
              </div>

              <div className="mx-auto mt-8 flex max-w-[420px] flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
                <Image src="/assets/the-guardian.svg" alt="The Guardian" width={152} height={32} />
                <Image src="/assets/vanguard.svg" alt="Vanguard" width={148} height={32} />
                <Image src="/assets/the-sun.svg" alt="The Sun" width={50} height={32} />
              </div>
            </div>
          </div>
        </SectionWrapper>



        <SectionWrapper id="ownership-ledger" className="relative overflow-hidden bg-[#EAF3FB] py-12 md:py-16 lg:py-20">
          <Image
            src="/assets/blurry-downward.svg"
            alt=""
            aria-hidden
            width={228}
            height={236}
            className="pointer-events-none absolute right-0 bottom-0 hidden opacity-90 lg:block"
          />
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-8">
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:items-start lg:grid-cols-[minmax(0,510px)_1fr] lg:items-center lg:gap-12">
              <div className="relative mx-auto w-full max-w-[510px] min-w-0 md:mx-0">
                <div className="">
                  <div className="overflow-hidden rounded-[12px] border border-dashed border-[#E1E1E1]">
                    <Image
                      src="/ownership/ownership-ledger.png"
                      alt="Community members with Abode placards"
                      width={509}
                      height={513}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex min-w-0 max-w-full flex-col items-start justify-start md:max-w-[600px] lg:max-w-[600px]">
                <h3
                  className="w-full max-w-full text-left text-[26px] font-bold leading-[112%] tracking-[-0.02em] text-[#233A4A] sm:text-[30px] md:text-[32px] lg:text-[34px]"
                  style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
                >
                  <span className="block w-full text-left">Invest in Your Future;</span>
                  <span className="block w-full text-left">Join the Abode Community.</span>
                </h3>
                <p className="mt-4 max-w-full text-[11px] leading-[180%] text-[#505B63] sm:mt-5 sm:max-w-[480px] md:text-[12px]">
                  At Abode, we believe that real estate ownership should be accessible to everyone.
                  Our community offers a unique opportunity to build wealth, foster lifelong
                  partnerships, and invest in supportive networks. At Abode, we are what we say we
                  are.
                </p>
                <Button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#23A8EA] px-8 py-2.5 text-[11px] text-white hover:bg-[#1C97D5]">
                  Invest with Abode
                  <Image src="/assets/arrow-up.svg" alt="" aria-hidden width={11} height={11} />
                </Button>
              </div>

            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="newsletter" className="bg-[#F5F5F5] py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-5 lg:px-3">
            <div className="grid gap-10 lg:grid-cols-[507px_minmax(0,1fr)] lg:items-start lg:gap-[120px]">
              <div className="space-y-10">
                <h3
                  className="text-left text-[36px] leading-[115%] tracking-[-0.02em] text-[#233A4A] md:text-[48px]"
                  style={{ fontFamily: "var(--font-agrandir)" }}
                >
                  <span className="block text-left font-bold">The Ownership Ledge</span>
                  <span className="block text-left font-normal">with Jeffery</span>
                </h3>

                <div className="w-full rounded-[16px] bg-[#EFEFEF] p-6 lg:h-[473px] lg:w-[507px] lg:pt-[54px] lg:pr-6 lg:pb-[54px] lg:pl-6">
                  <div className="flex h-full flex-col lg:gap-10">
                    <div>
                      <h4
                        className="text-[26px] font-bold leading-[120%] text-[#149BDE] md:text-[30px]"
                        style={{ fontFamily: "var(--font-agrandir)" }}
                      >
                        Subscribe to my newsletter
                      </h4>
                      <p className="mt-4 max-w-[280px] text-[16px] leading-[150%] text-[#50565D]">
                        Get all the happenings and how to scale up in your real estate career with
                        nuggets and deals.
                      </p>
                    </div>
                    <div>
                      <label className="block text-[15px] text-[#4F565E]" htmlFor="newsletter-email">
                        Email Address
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        className="mt-2 h-12 w-full rounded-[12px] border border-[#E4E4E4] bg-white px-4 text-[15px] text-[#1F2933] outline-none transition focus:border-[#149BDE] lg:w-[459px]"
                      />
                      <button
                        type="button"
                        className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-[12px] border border-transparent bg-[#0EA5E9] text-[15px] font-semibold text-white transition hover:bg-[#0B95D1] lg:w-[459px]"
                      >
                        Subscribe
                        <Image src="/assets/mail.svg" alt="" aria-hidden width={18} height={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:pt-6">
                <p className="max-w-[620px] text-[20px] leading-[170%] text-[#424A51] md:text-[22px]">
                  Practical insights on real estate, community-driven ownership, and long-term
                  value creation in Africa.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  {[1, 2].map((card) => (
                    <article key={card}>
                      <div className="overflow-hidden rounded-[16px]">
                        <Image
                          src="/ownership/ownership-ledger-post.png"
                          alt="Street scene artwork for newsletter post"
                          width={320}
                          height={256}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <p className="mt-5 text-[15px] text-[#7D8288]">28th Feb, 2026</p>
                      <h4
                        className="mt-3 text-[16px] font-bold leading-[124%] tracking-[-0.02em] text-[#233A4A]"
                        style={{ fontFamily: "var(--font-agrandir)" }}
                      >
                        <span className="block">How to become a landowner in a land</span>
                        <span className="block">where nobody owns the land like Lagos</span>
                      </h4>
                      <p className="mt-4 text-[15px] leading-[165%] text-[#7C7C7C]">
                        Create superior code, compose emails, boost any kind of work within a
                        collaborative team environment.
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
