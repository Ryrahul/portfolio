"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full group"
      role="listitem"
    >
      <motion.div variants={hoverVariants} className="h-full">
        <Card className="bg-zinc-900/80 border-zinc-800 h-full overflow-hidden card-hover group-hover:border-zinc-600 transition-colors duration-300">
          <CardContent className="p-6 relative z-10 h-full flex flex-col min-h-[280px]">
            {/* Header with title and icon */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-all duration-300 flex-1 pr-3">
                {title}
              </h3>

              <div
                className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                aria-hidden="true"
              >
                <Github className="w-5 h-5 text-zinc-400 group-hover:text-white" />
              </div>
            </div>

            {/* Description - Takes up available space */}
            <div className="flex-1 flex flex-col">
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300 flex-1">
                {description}
              </p>
            </div>

            {/* CTA Link - Always at bottom */}
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full text-zinc-400 hover:text-white hover:bg-zinc-800 p-3 text-sm transition-all duration-300 border border-zinc-800 group-hover:border-zinc-600 rounded-md flex items-center justify-between"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Project</span>
              <ArrowUpRight
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </motion.a>
          </CardContent>
        </Card>
      </motion.div>
    </motion.article>
  );
}
