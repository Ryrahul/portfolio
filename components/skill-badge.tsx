"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  index: number;
  category: string;
}

// Get gradient colors based on category with enhanced styling
const getCategoryColors = (category: string) => {
  switch (category) {
    case "frontend":
      return {
        gradient: "from-blue-600/20 to-cyan-600/10",
        border: "border-blue-500/30 hover:border-blue-400/60",
        text: "text-blue-200 hover:text-blue-100",
        glow: "hover:shadow-blue-500/25",
      };
    case "backend":
      return {
        gradient: "from-purple-600/20 to-pink-600/10",
        border: "border-purple-500/30 hover:border-purple-400/60",
        text: "text-purple-200 hover:text-purple-100",
        glow: "hover:shadow-purple-500/25",
      };
    case "tools":
      return {
        gradient: "from-amber-600/20 to-orange-600/10",
        border: "border-amber-500/30 hover:border-amber-400/60",
        text: "text-amber-200 hover:text-amber-100",
        glow: "hover:shadow-amber-500/25",
      };
    case "languages":
      return {
        gradient: "from-emerald-600/20 to-green-600/10",
        border: "border-emerald-500/30 hover:border-emerald-400/60",
        text: "text-emerald-200 hover:text-emerald-100",
        glow: "hover:shadow-emerald-500/25",
      };
    default:
      return {
        gradient: "from-gray-600/20 to-gray-600/10",
        border: "border-gray-500/30 hover:border-gray-400/60",
        text: "text-gray-200 hover:text-gray-100",
        glow: "hover:shadow-gray-500/25",
      };
  }
};

export default function SkillBadge({
  skill,
  index,
  category,
}: SkillBadgeProps) {
  const colors = getCategoryColors(category);

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
        "px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r border relative overflow-hidden cursor-default backdrop-blur-sm smooth-hover",
        "hover:shadow-lg transition-all duration-300",
        colors.gradient,
        colors.border,
        colors.text,
        colors.glow
      )}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out"></div>
      </div>

      {/* Content */}
      <span className="relative z-10">{skill}</span>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-current/10"></div>
    </motion.div>
  );
}
