"use client";

import { ExternalLink, MapPin } from "lucide-react";
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

export default function CompanyHoverCard({
  company,
  companyInfo,
}: {
  company: string;
  companyInfo: CompanyInfo;
}) {
  const initials = company
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span className="underline underline-offset-2 decoration-zinc-400 hover:decoration-zinc-900 transition-colors cursor-default">
          {company}
        </span>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="start"
        className="w-72 p-0 overflow-hidden bg-white border-zinc-200 shadow-md"
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-zinc-100">
          <div className="h-10 w-10 rounded border border-zinc-200 bg-zinc-50 flex items-center justify-center shrink-0 font-mono text-sm font-bold text-zinc-600">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-zinc-900 truncate">{company}</p>
            <p className="text-xs text-zinc-500 truncate">{companyInfo.industry}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 space-y-2.5">
          <p className="text-xs text-zinc-600 leading-relaxed">
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
            className="inline-flex items-center gap-1.5 text-xs text-[#0a66c2] hover:opacity-80 transition-opacity no-underline"
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
  );
}
