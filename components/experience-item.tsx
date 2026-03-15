"use client";

import { motion } from "framer-motion";
import { Calendar, Building, Briefcase } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  details: string[];
  index: number;
  isLatest?: boolean;
}

export default function ExperienceItem({
  title,
  company,
  period,
  details,
  index,
  isLatest = false,
}: ExperienceItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 * index }}
      className="relative group"
    >
      {/* Timeline connector line */}
      <div className="absolute left-[19px] top-12 bottom-0 w-px bg-gradient-to-b from-zinc-700 to-transparent hidden md:block" />

      <div className="flex gap-5">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center pt-1">
          <div
            className={`relative z-10 h-10 w-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
              isLatest
                ? "border-white bg-white/10 group-hover:bg-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "border-zinc-600 bg-zinc-900 group-hover:border-zinc-400 group-hover:bg-zinc-800"
            }`}
          >
            <Briefcase
              className={`h-4 w-4 ${isLatest ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"} transition-colors duration-300`}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Card */}
        <div
          className={`flex-1 rounded-xl p-5 md:p-6 border transition-all duration-300 ${
            isLatest
              ? "bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800/80 border-zinc-700/80 hover:border-zinc-500/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
              : "bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700/80 hover:bg-zinc-900/60"
          }`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                  {title}
                </h3>
                {isLatest && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                    Current
                  </span>
                )}
              </div>
              <p className="text-zinc-400 text-sm flex items-center gap-1.5">
                <Building
                  className="h-3.5 w-3.5 text-zinc-500"
                  aria-hidden="true"
                />
                <span>{company}</span>
              </p>
            </div>
            <p className="text-zinc-500 text-xs font-medium flex items-center gap-1.5 bg-zinc-800/50 px-3 py-1.5 rounded-full w-fit shrink-0">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              <time>{period}</time>
            </p>
          </div>

          {/* Details */}
          <ul className="space-y-2.5" role="list">
            {details.map((detail, i) => (
              <li
                key={i}
                className="relative pl-5 text-sm text-zinc-400 leading-relaxed before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-600 group-hover:text-zinc-300 transition-colors duration-300"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
