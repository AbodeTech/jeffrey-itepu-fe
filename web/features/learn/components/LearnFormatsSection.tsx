import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export function LearnFormatsSection() {
  const formats = [
    {
      title: "One-on-One Mentoring",
      description: "Personalized guidance tailored to your specific investment goals and current portfolio.",
      features: ["Custom strategy development", "Portfolio review", "Market-specific insights", "Ongoing support"],
      image: "/assets/mentoring.png",
      cta: "Book Session"
    },
    {
      title: "Group Workshops",
      description: "Interactive learning sessions with small groups focusing on specific investment strategies.",
      features: ["Hands-on exercises", "Peer learning", "Case study analysis", "Networking opportunities"],
      image: "/assets/workshop.png",
      cta: "Join Workshop"
    },
    {
      title: "Online Courses",
      description: "Self-paced learning modules covering comprehensive real estate investment topics.",
      features: ["Video lessons", "Downloadable resources", "Quizzes & assessments", "Certificate completion"],
      image: "/assets/online-course.png",
      cta: "Start Learning"
    }
  ];

  return (
    <SectionWrapper id="formats" className="bg-[#F8FEFF] py-16!">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[28px] font-bold leading-[120%] tracking-[-0.02em] text-[#233A4A] sm:text-[32px] md:text-[36px] lg:text-[44px]"
            style={{ fontFamily: "var(--font-agrandir)" }}
          >
            Learning Formats
          </h2>
          <p
            className="mt-4 max-w-[600px] mx-auto text-[15px] leading-[170%] text-[#6C7881] sm:text-[16px] md:text-[17px] lg:text-[18px]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Choose the learning format that best fits your schedule and learning style.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[16px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={format.image}
                  alt={format.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 33vw, 400px"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3
                  className="text-xl font-semibold text-[#233A4A] mb-3"
                  style={{ fontFamily: "var(--font-agrandir)" }}
                >
                  {format.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-[#6C7881] leading-[170%] mb-4"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  {format.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  {format.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#05AAFF] mr-3 shrink-0"></div>
                      <span
                        className="text-sm text-[#233A4A]"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className="w-full rounded-[20px] bg-[#05AAFF] px-6 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  {format.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
