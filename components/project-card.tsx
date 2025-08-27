"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  index: number;
  repoUrl: string;
}

export default function ProjectCard({
  title,
  description,
  index,
  repoUrl,
}: ProjectCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.1 * index,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full group"
    >
      <motion.div variants={hoverVariants} className="h-full">
        <Card className="bg-zinc-900/60 border-zinc-800/50 h-full overflow-hidden backdrop-blur-sm card-hover">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </div>

          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

          <CardContent className="p-6 relative z-10 h-full flex flex-col min-h-[280px]">
            {/* Header with title and icon */}
            <div className="flex items-start justify-between mb-4">
              <motion.h3
                className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 flex-1 pr-3"
                whileHover={{ scale: 1.02 }}
              >
                {title}
              </motion.h3>

              <motion.div
                className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="w-5 h-5 text-zinc-400 group-hover:text-purple-400" />
              </motion.div>
            </div>

            {/* Description - Takes up available space */}
            <div className="flex-1 flex flex-col">
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors duration-300 flex-1">
                {description}
              </p>
            </div>

            {/* CTA Button - Always at bottom */}
            <motion.div
              className="mt-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="ghost"
                  className="w-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 p-3 text-sm group-hover:bg-gradient-to-r group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-300 justify-between border border-transparent group-hover:border-purple-500/20"
                >
                  <span>View Project</span>
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </a>
            </motion.div>
          </CardContent>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
