"use client";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { Activity } from "react-github-calendar";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => (
    <div className="h-[159px] w-full bg-zinc-900/30 rounded-lg animate-pulse" />
  ),
});

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);

  const processContributions = useCallback((contributions: Activity[]) => {
    // Hack to calculate total count after rendering
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      {/* Container to prevent horizontal overflow and center content */}
      <div className="w-full overflow-x-auto flex justify-center">
        <div className="flex justify-center items-center">
          <style jsx global>{`
            /* Override the react-github-calendar styles for responsiveness */
            .react-calendar-graph {
              margin: 0 auto;
              display: block;
            }

            .react-calendar-graph .ContributionCalendar-grid {
              overflow-x: visible;
            }

            /* Ensure the calendar fits on mobile */
            @media (max-width: 640px) {
              .react-calendar-graph {
                font-size: 10px;
                transform: scale(0.8);
                transform-origin: center center;
              }
            }

            /* Tablet view adjustments */
            @media (max-width: 768px) and (min-width: 641px) {
              .react-calendar-graph {
                transform: scale(0.9);
                transform-origin: center center;
              }
            }

            /* Desktop view - ensure centering */
            @media (min-width: 769px) {
              .react-calendar-graph {
                transform-origin: center center;
              }
            }

            /* Hide scrollbar but keep functionality */
            .react-calendar-graph
              .ContributionCalendar-grid::-webkit-scrollbar {
              display: none;
            }

            .react-calendar-graph .ContributionCalendar-grid {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <GitHubCalendar
            username="subediaakash"
            transformData={processContributions}
            totalCount={totalCount}
            hideColorLegend={false}
            hideTotalCount={false}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GithubCalender;
