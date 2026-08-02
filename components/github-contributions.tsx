"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => (
    <div className="h-[130px] w-full bg-zinc-100 animate-pulse" />
  ),
});

export default function GitHubContributions() {
  return (
    <div className="w-full">
      <GitHubCalendar
        username="Ryrahul"
        hideColorLegend={false}
        hideTotalCount={false}
        colorScheme="light"
        fontSize={12}
        blockSize={11}
        labels={{
          totalCount: "{{count}} contributions in the last year",
        }}
      />
    </div>
  );
}
