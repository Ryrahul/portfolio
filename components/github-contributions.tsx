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
            /* Month labels — uses fill: currentColor, so set color */
            .react-activity-calendar__legend-month {
              color: #e4e4e7 !important; /* zinc-200 */
            }
            .react-activity-calendar__legend-month text {
              fill: #e4e4e7 !important; /* zinc-200 */
              font-weight: 500;
            }

            /* Weekday labels */
            .react-activity-calendar__legend-weekday {
              color: #a1a1aa !important; /* zinc-400 */
            }
            .react-activity-calendar__legend-weekday text {
              fill: #a1a1aa !important; /* zinc-400 */
            }

            /* Footer text (contribution count, Less/More) */
            .react-activity-calendar__footer {
              color: #a1a1aa !important; /* zinc-400 */
            }
            .react-activity-calendar__count {
              color: #d4d4d8 !important; /* zinc-300 */
            }
            .react-activity-calendar__legend-colors {
              color: #a1a1aa !important; /* zinc-400 */
            }

            /* Hide scrollbar but keep functionality */
            .react-activity-calendar__scroll-container::-webkit-scrollbar {
              display: none;
            }
            .react-activity-calendar__scroll-container {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }

            /* Mobile scaling */
            @media (max-width: 640px) {
              .react-activity-calendar {
                transform: scale(0.8);
                transform-origin: center center;
              }
            }
            @media (max-width: 768px) and (min-width: 641px) {
              .react-activity-calendar {
                transform: scale(0.9);
                transform-origin: center center;
              }
            }
          `}</style>
          <GitHubCalendar
            username="subediaakash"
            transformData={processContributions}
            totalCount={totalCount}
            hideColorLegend={false}
            hideTotalCount={false}
            colorScheme="dark"
            theme={{
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GithubCalender;
