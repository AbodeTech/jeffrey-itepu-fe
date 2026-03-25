"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Body } from "@/components/ui/Body";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-2xl border border-[#E5EBF1] bg-white"
    >
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-base font-semibold text-[#233A4A]">{title}</h3>
        <Body className="text-xs md:text-sm">{description}</Body>
      </div>
    </motion.article>
  );
}
