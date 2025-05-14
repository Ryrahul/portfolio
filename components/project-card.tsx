"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="bg-zinc-900/50 border-zinc-800 h-full overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardContent className="p-4 relative z-10">
          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-zinc-300 text-sm">{description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 relative z-10">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-black p-0 text-sm group-hover:translate-x-1 transition-transform px-1"
            >
              View Project <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
