import Image from "next/image";

export function AboutMainSection() {
  return (
    <section className="mx-auto w-full max-w-[1372px] bg-white px-3 py-12 sm:px-5 md:px-8 lg:px-10 lg:py-16"
    style={{
      backgroundImage:
        "radial-gradient(circle at 1px 1px, rgba(35,58,74,0.10) 1px, transparent 1px)",
      backgroundSize: "18px 18px",
    }}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
        {/* Left text block */}
        <div
          className=""
        >
          <div
            className="absolute inset-0 pointer-events-none"
          
          />

          <div className="relative z-10 w-full max-w-[520px] text-left md:mx-auto md:text-center lg:mx-0 lg:text-left">
            <p className="text-[15px] leading-[192%] text-[#505153] sm:text-[16px] md:text-[18px]">
              <span className="font-normal">Jeffrey Itepu</span> is an
              entrepreneur, business leader, and Co-Founder &amp; CEO of Abode, a
              pioneering social community leveraging technology to expand access
              to property ownership across Africa.
            </p>

            <p className="mt-6 text-[15px] leading-[192%] text-[#505153] sm:text-[16px] md:text-[18px]">
              <span className="ml-2 md:ml-0 lg:ml-2">
                With over a decade of experience in real estate, business
                development, and community building, he has led the growth of
                ventures focused on creating sustainable pathways to ownership
                and long-term wealth creation.
              </span>
            </p>

            <p className="mt-6 text-[15px] leading-[192%] text-[#505153] sm:text-[16px] md:text-[18px]">
              <span className="ml-2 md:ml-0 lg:ml-2">
                For Jeffrey, democratizing real estate ownership is more than a
                business objective. It is a commitment to building systems that
                empower individuals, strengthen communities, and create
                opportunities that endure across generations.
              </span>
            </p>
          </div>
        </div>

        {/* Right image frame */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px] bg-white">
            <Image
              src="/about/about-main-section.png"
              alt="Jeffery Itepu presenting in a meeting with Abode branding on screen"
              width={620}
              height={775}
              unoptimized
              priority
              className="block h-auto w-full"
              style={{ height: "auto", backgroundColor: "white" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
