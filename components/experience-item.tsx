"use client";

import { motion } from "framer-motion";
import { Calendar, Building, Briefcase, MapPin, ExternalLink } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface CompanyInfo {
  description: string;
  location: string;
  industry: string;
  linkedinUrl: string;
}

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  details: string[];
  index: number;
  isLatest?: boolean;
  companyInfo?: CompanyInfo;
}

export default function ExperienceItem({
  title,
  company,
  period,
  details,
  index,
  isLatest = false,
  companyInfo,
}: ExperienceItemProps) {
  const initials = company
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

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

              {/* Company with hover card */}
              <p className="text-zinc-400 text-sm flex items-center gap-1.5">
                <Building className="h-3.5 w-3.5 text-zinc-500 shrink-0" aria-hidden="true" />
                {companyInfo ? (
                  <HoverCard openDelay={200} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <span className="cursor-pointer underline underline-offset-2 decoration-zinc-600 hover:decoration-zinc-400 hover:text-zinc-200 transition-colors">
                        {company}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side="top"
                      align="start"
                      className="w-72 bg-zinc-900 border-zinc-700 text-white p-0 overflow-hidden"
                    >
                      {/* Card header */}
                      <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                        <div className="h-11 w-11 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-zinc-300 font-mono">
                            {initials}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white truncate">{company}</p>
                          <p className="text-xs text-zinc-500 truncate">{companyInfo.industry}</p>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-4 space-y-3">
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {companyInfo.description}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span>{companyInfo.location}</span>
                        </div>
                        <a
                          href={companyInfo.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-[#0a66c2] hover:text-[#0a66c2]/80 transition-colors no-underline mt-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current shrink-0">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          View on LinkedIn
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <span>{company}</span>
                )}
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
