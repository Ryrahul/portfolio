"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  skill: string
  index: number
  category: string
}

// Get gradient colors based on category
const getCategoryColors = (category: string) => {
  switch (category) {
    case "frontend":
      return "from-blue-600/20 to-cyan-600/10 border-blue-500/30 hover:border-blue-400/50 text-blue-300"
    case "backend":
      return "from-purple-600/20 to-pink-600/10 border-purple-500/30 hover:border-purple-400/50 text-purple-300"
    case "tools":
      return "from-amber-600/20 to-orange-600/10 border-amber-500/30 hover:border-amber-400/50 text-amber-300"
    case "languages":
      return "from-emerald-600/20 to-green-600/10 border-emerald-500/30 hover:border-emerald-400/50 text-emerald-300"
    default:
      return "from-gray-600/20 to-gray-600/10 border-gray-500/30 hover:border-gray-400/50 text-gray-300"
  }
}

export default function SkillBadge({ skill, index, category }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.03 * index }}
      whileHover={{ y: -2, scale: 1.03 }}
      className={cn(
        "px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r border",
        getCategoryColors(category),
      )}
    >
      {skill}
    </motion.div>
  )
}
