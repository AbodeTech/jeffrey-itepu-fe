import Image from "next/image";

import { SectionWrapper } from "@/components/SectionWrapper";

const investPillars = [
  {
    title: "Reliable Investments",
    description: "Carefully organized opportunities positioned for sustainable participation.",
    icon: "/assets/security-validation.svg",
  },
  {
    title: "Transparent Transactions",
    description: "Clear processes, defined documentation, and honest engagement.",
    icon: "/assets/secured-network.svg",
  },
  {
    title: "Expert Guidance",
    description: "Support at every stage — from inquiry to inspection and beyond.",
    icon: "/assets/agreement-02.svg",
  },
];

export function InvestOwnershipAfricaSection() {
  return (
    <SectionWrapper id="invest-ownership-africa" className="bg-white py-0! pb-0! overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-0">
        <div className="relative min-w-0 bg-white px-4 pt-0 sm:px-5 md:px-8 lg:px-[72px]">
          <div className="mx-auto mb-8 flex max-w-[1440px] items-end gap-6 md:mb-16 md:gap-8 lg:mb-20">
            <Image
              src="/assets/blurry-upward.svg"
              alt=""
              aria-hidden
              width={160}
              height={188}
              className="pointer-events-none absolute -left-4 top-[260px] hidden opacity-90 lg:left-[-8px] lg:block"
            />

            <div className="w-full min-w-0 pl-0 md:pl-4 lg:pl-12 xl:pl-[168px]">
              <div className="mb-8 max-w-full space-y-5 md:mb-16 md:space-y-7 lg:mb-20 lg:max-w-[800px]">
                <p className="mb-4 text-left text-[12px] font-normal leading-[185%] text-[#3C3C3C] md:mb-7 md:text-[13px]">
                  I work at the intersection of real estate, technology, and community, focused
                  on how property ownership can become more accessible, trusted, and scalable
                  across African markets.
                </p>
                <p className="text-left text-[12px] font-normal leading-[185%] text-[#3C3C3C] md:text-[13px]">
                  My work centres on building not just assets, but the systems, structures, and
                  relationships that support sustainable ownership over time. My work spans
                  three connected areas:
                </p>
              </div>

              <div className="mb-8 grid grid-cols-1 items-start gap-x-6 gap-y-6 sm:grid-cols-2 md:mb-16 md:gap-x-8 md:gap-y-8 lg:mb-20 lg:grid-cols-3 lg:gap-x-10">
                {investPillars.map((pillar) => (
                  <div key={pillar.title} className="min-w-0 max-w-full space-y-3">
                    <Image src={pillar.icon} alt={pillar.title} width={26} height={26} />
                    <h6
                      className="text-left text-[18px] font-bold text-[#0093FF]"
                      style={{ fontFamily: "var(--font-delight)" }}
                    >
                      {pillar.title}
                    </h6>
                    <p className="max-w-full text-left text-[14px] font-normal leading-[170%] text-[#505153] md:max-w-xl lg:max-w-none">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </SectionWrapper>
  );
}

