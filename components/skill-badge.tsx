"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  index: number;
  category: string;
}

export default function SkillBadge({
  skill,
  index,
  category,
}: SkillBadgeProps) {
  const badgeVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.05 * index,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      y: -4,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium border relative overflow-hidden cursor-default smooth-hover",
        "hover:shadow-lg transition-all duration-300",
        "bg-zinc-900 border-zinc-700 text-zinc-300",
        "hover:bg-zinc-800 hover:border-zinc-500 hover:text-white"
      )}
    >
      <span className="relative z-10">{skill}</span>
    </motion.div>
  );
}
