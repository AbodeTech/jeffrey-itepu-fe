"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  "/images/landing/AUG_8717.png",
  "/images/landing/AUG_9563.png",
  "/images/landing/AUG_8759.png",
  "/images/landing/AUG_8333.png",
  "/images/landing/AUG_0178.png",
];

export function WebinarAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="overflow-hidden bg-white px-6 py-24 lg:px-12 lg:py-32">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 w-fit rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
            About
          </span>
        </motion.div>

        <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="flex flex-col items-start text-left font-[family-name:var(--font-display)]">
              <motion.span
                variants={itemVariants}
                className="block text-left text-6xl font-bold leading-[1.05] tracking-tighter text-abode-black md:text-7xl lg:text-[7vw] lg:leading-[0.9]"
              >
                Learn.
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="block text-left text-6xl font-bold leading-[1.05] tracking-tighter text-primary md:text-7xl lg:text-[7vw] lg:leading-[0.9]"
              >
                Grow.
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="block text-left text-6xl font-bold leading-[1.05] tracking-tighter text-slate-800 md:text-7xl lg:text-[7vw] lg:leading-[0.9]"
              >
                Build Wealth.
              </motion.span>
            </h2>
          </div>

          <motion.div variants={itemVariants} className="space-y-6 pb-2 lg:w-5/12">
            <p className="font-sans text-xl font-light leading-relaxed text-slate-700">
              At Abode, we believe sales is more than persuasion — it is leadership, influence,
              value creation, and wealth building. Abode Webinar was created to raise a new
              generation of sales professionals who are skilled, ethical, financially intelligent,
              and wealth-driven but value-focused.
            </p>
            <p className="font-sans text-xl font-light leading-relaxed text-slate-600">
              Abode Webinar is our biggest edition yet. One day. Real knowledge. Zero pressure. Walk
              away knowing exactly how to build wealth through real estate — starting from where you
              are right now.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center sm:mt-32">
          <div className="mb-10 flex justify-center -space-x-4 px-4 py-10 sm:-space-x-8 md:-space-x-12">
            {images.map((src, index) => {
              const transforms = [
                "-rotate-12 translate-y-8 sm:translate-y-12",
                "-rotate-6 translate-y-3 sm:translate-y-5",
                "rotate-0 z-10",
                "rotate-6 translate-y-3 sm:translate-y-5",
                "rotate-12 translate-y-8 sm:translate-y-12",
              ];
              const zIndexes = ["z-[5]", "z-[6]", "z-[7]", "z-[6]", "z-[5]"];

              return (
                <motion.div
                  key={src}
                  variants={itemVariants}
                  className={`relative ${zIndexes[index]} ${transforms[index]} h-40 w-28 overflow-hidden rounded-2xl transition-all duration-500 hover:z-50! hover:-translate-y-12 hover:scale-110 hover:rotate-0 sm:h-56 sm:w-40 md:h-72 md:w-52`}
                >
                  <Image
                    src={src}
                    alt={`Abode Webinar Participant ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.p
            variants={itemVariants}
            className="max-w-[250px] text-center font-sans text-xs leading-relaxed text-slate-500 sm:max-w-none sm:text-sm"
          >
            Join us. Build something that lasts.{" "}
            <span className="relative inline-block font-medium italic text-abode-black after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary/40">
              wealth.
            </span>
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8">
            <Link
              href="/register"
              className="inline-flex items-center rounded-full bg-primary px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:bg-[#0499E5]"
            >
              Register Free
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
