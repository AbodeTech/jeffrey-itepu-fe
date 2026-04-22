import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

export function LearnTestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Property Investor",
      company: "Chen Properties",
      content: "Jeffrey's mentoring transformed my approach to real estate investment. His frameworks helped me build a diversified portfolio that consistently outperforms the market.",
      avatar: "/assets/sarah-avatar.png",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Real Estate Developer",
      company: "Urban Development Group",
      content: "The workshop provided actionable insights that I immediately applied to my development projects. The case studies were particularly valuable for understanding market dynamics.",
      avatar: "/assets/michael-avatar.png",
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "Investment Analyst",
      company: "Metropolitan Real Estate",
      content: "Jeffrey's online courses gave me the foundation I needed to transition into real estate investment. The comprehensive curriculum and practical examples made complex concepts easy to understand.",
      avatar: "/assets/amanda-avatar.png",
      rating: 5
    }
  ];

  return (
    <SectionWrapper id="testimonials" className="bg-[#FFF] py-16!">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[28px] font-bold leading-[120%] tracking-[-0.02em] text-[#233A4A] sm:text-[32px] md:text-[36px] lg:text-[44px]"
            style={{ fontFamily: "var(--font-agrandir)" }}
          >
            Success Stories
          </h2>
          <p
            className="mt-4 max-w-[600px] mx-auto text-[15px] leading-[170%] text-[#6C7881] sm:text-[16px] md:text-[17px] lg:text-[18px]"
            style={{ fontFamily: "var(--font-delight)" }}
          >
            Hear from professionals who have transformed their real estate careers with Jeffrey&apos;s guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[16px] shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src="/assets/star.svg"
                    alt="Star"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote
                className="text-sm text-[#233A4A] leading-[170%] mb-6"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                {testimonial.content}
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-[#233A4A]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-xs text-[#6C7881]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
