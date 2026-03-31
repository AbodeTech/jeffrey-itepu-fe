import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export function LearnResourcesSection() {
  const resources = [
    {
      title: "Investment Frameworks",
      description: "Proven strategies for property investment and portfolio diversification",
      icon: "/assets/framework-icon.svg",
      category: "Strategy"
    },
    {
      title: "Market Analysis",
      description: "Deep insights into market trends and property valuation techniques",
      icon: "/assets/analysis-icon.svg",
      category: "Research"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful property investments and developments",
      icon: "/assets/case-study-icon.svg",
      category: "Examples"
    },
    {
      title: "Networking Guide",
      description: "Building valuable connections in the real estate industry",
      icon: "/assets/network-icon.svg",
      category: "Community"
    },
    {
      title: "Risk Management",
      description: "Identifying and mitigating risks in property investments",
      icon: "/assets/risk-icon.svg",
      category: "Safety"
    },
    {
      title: "Exit Strategies",
      description: "Planning optimal exit timing and methods for maximum returns",
      icon: "/assets/exit-icon.svg",
      category: "Planning"
    }
  ];

  return (
    <SectionWrapper id="resources" className="bg-[#FFF] py-16!">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[28px] font-bold leading-[120%] tracking-[-0.02em] text-[#233A4A] sm:text-[32px] md:text-[36px] lg:text-[44px]"
            style={{ fontFamily: "var(--font-agrandir)" }}
          >
            Learning Resources
          </h2>
          <p
            className="mt-4 max-w-[600px] mx-auto text-[15px] leading-[170%] text-[#6C7881] sm:text-[16px] md:text-[17px] lg:text-[18px]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Comprehensive resources covering all aspects of real estate investment and property development.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[16px] shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#F6FFF9] flex items-center justify-center mb-4">
                <Image
                  src={resource.icon}
                  alt={resource.title}
                  width={24}
                  height={24}
                />
              </div>

              {/* Category */}
              <div className="mb-2">
                <span
                  className="text-xs font-medium text-[#05AAFF] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  {resource.category}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold text-[#233A4A] mb-3"
                style={{ fontFamily: "var(--font-agrandir)" }}
              >
                {resource.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-[#6C7881] leading-[170%]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
