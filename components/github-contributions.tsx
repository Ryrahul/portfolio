"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { Activity } from "react-github-calendar";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => (
    <div className="h-[130px] w-full bg-zinc-100 animate-pulse" />
  ),
});

export default function GitHubContributions() {
  const [totalCount, setTotalCount] = useState(0);

  const processContributions = useCallback((contributions: Activity[]) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);
      setTotalCount(total);
    }, 0);
    return contributions.slice(91, 365);
  }, []);

  return (
    <div className="w-full">
      <GitHubCalendar
        username="subediaakash"
        transformData={processContributions}
        totalCount={totalCount}
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
