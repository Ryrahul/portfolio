"use client";

import { motion } from "framer-motion";
import { Calendar, Building } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  details: string[];
  index: number;
}

export default function ExperienceItem({
  title,
  company,
  period,
  details,
  index,
}: ExperienceItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative"
    >
      <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800/50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-zinc-400 text-sm flex items-center gap-1">
              <Building className="h-3 w-3" aria-hidden="true" />
              <span>{company}</span>
            </p>
          </div>
          <p className="text-zinc-500 text-sm mt-1 md:mt-0 flex items-center gap-1">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            <time>{period}</time>
          </p>
        </div>

        <ul className="space-y-1.5 text-zinc-300 text-sm" role="list">
          {details.map((detail, i) => (
            <li
              key={i}
              className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:h-1 before:w-1 before:rounded-full before:bg-zinc-500"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
