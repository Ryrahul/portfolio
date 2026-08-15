/**
 * The most recent public push, from the GitHub events API.
 *
 * The contribution grid below shows the shape of a year; this shows a pulse —
 * that the person you are reading about was working on something this week.
 *
 * A server component on purpose. The relative time is formatted once, on the
 * server, and never recomputed in the browser, so there is no server/client
 * clock disagreement to cause a hydration mismatch. ISR keeps it honest: the
 * page revalidates every 15 minutes, which also keeps the unauthenticated
 * GitHub rate limit (60/hour) irrelevant.
 *
 * Renders nothing at all if GitHub is unreachable or rate-limited — a portfolio
 * should not show an error box because a third party had a bad minute.
 */

const USERNAME = "Ryrahul";
const REVALIDATE_SECONDS = 900;

interface PushEvent {
  type: string;
  created_at: string;
  repo: { name: string };
  payload?: { commits?: { message: string }[] };
}

function timeAgo(iso: string): string {
  const seconds = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 90) return "just now";
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.round(days / 30);
  return `${months}mo ago`;
}

async function fetchLatestPush(): Promise<PushEvent | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/events/public?per_page=30`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );
    if (!res.ok) return null;

    const events: PushEvent[] = await res.json();
    return events.find((event) => event.type === "PushEvent") ?? null;
  } catch {
    return null;
  }
}

export default async function LatestPush() {
  const push = await fetchLatestPush();
  if (!push) return null;

  const repo = push.repo.name.split("/")[1] ?? push.repo.name;
  const commits = push.payload?.commits ?? [];
  // Events list commits oldest-first, so the last one is the tip of the push.
  const message = commits.at(-1)?.message.split("\n")[0];

  return (
    <p className="mb-3 text-zinc-500">
      Last push :{" "}
      <a
        href={`https://github.com/${push.repo.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-700"
      >
        {repo}
      </a>
      {message && (
        <>
          {" "}
          — <span className="text-zinc-600">{message.slice(0, 72)}</span>
        </>
      )}{" "}
      · {timeAgo(push.created_at)}
    </p>
  );
}
