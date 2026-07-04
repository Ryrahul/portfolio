import Link from "next/link";

const blogMeta = {
  title: "Evolution Takes Time",
  author: "Rahul Raj Yadav",
  date: "2026-02-01",
  readTime: "5 min read",
  tags: ["Reflection", "Growth", "Life"],
};

export default function EvolutionTakesTime() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
      {/* Back link */}
      <div className="mb-8">
        <Link href="/blogs" className="text-zinc-500 hover:text-zinc-900">
          &larr; back to blog
        </Link>
      </div>

      {/* Title */}
      <header className="mb-8">
        <h1 className="text-lg font-medium mb-2">{blogMeta.title}</h1>
        <p className="text-zinc-400 text-sm">
          {new Date(blogMeta.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          &middot; {blogMeta.readTime}
        </p>
        <div className="flex gap-2 mt-2 text-sm text-zinc-500">
          {blogMeta.tags.map((tag) => (
            <span key={tag}>#{tag.toLowerCase()}</span>
          ))}
        </div>
      </header>

      {/* Content */}
      <article className="space-y-5 leading-relaxed">
        <p>
          For a long time, I never truly understood why people seemed to be in
          such a hurry. As a college student, time felt infinite. I believed I
          could always pause, delay decisions, and figure things out later. But
          as life slowly shifted, so did my understanding. Looking back now, I
          realize that growth doesn&apos;t happen overnight. It builds quietly
          through discomfort, routine, and moments you barely notice while living
          them.
        </p>

        <h2 className="font-medium mt-8">The Moment of Realisation</h2>
        <p>
          I began 2026 by moving out of my hostel and into a small room in a
          city I barely knew - Bangalore. It was more than a physical
          relocation; it was a mental reset. Familiar faces, habits, and safety
          nets disappeared overnight. That absence forced me to adapt, to
          observe more, and to accept change instead of resisting it. Slowly, I
          started understanding that evolution happens through everyday
          experiences, not dramatic turning points.
        </p>

        <h2 className="font-medium mt-8">The Change in Routine</h2>
        <p>
          I used to be someone who needed countless alarms just to wake up. Now,
          without effort, I find myself awake before sunrise - because
          responsibility demands it. The same person who never cooked or cleaned
          now handles chores instinctively. Somewhere along the way, hesitation
          faded. I stopped overthinking outcomes and started acting first.
          Failures no longer scare me; stagnation does. In connecting these dots,
          I&apos;ve come to believe that growth is life&apos;s way of teaching us
          maturity, quietly, but firmly.
        </p>

        <blockquote className="border-l-2 border-zinc-300 pl-4 text-zinc-500 italic my-6">
          &ldquo;Evolution takes time. Sometimes it takes comfort away before it
          gives clarity. What matters is honoring the lessons that change leaves
          behind.&rdquo;
        </blockquote>

        <h2 className="font-medium mt-8">What&apos;s Next</h2>
        <p>
          There are moments when I feel uncertain about what to learn next or
          where to focus my energy. But joining a new company has exposed me to
          perspectives I never had before. I&apos;m encouraged to experiment,
          break things, and rebuild them better. The environment - especially my
          team and leadership - pushes me to step outside my comfort zone. Over
          the coming months, my goal is simple: strengthen my core engineering
          foundations and learn by doing. Even on days when work drains me, the
          opportunity to learn something new pulls me back the very next morning.
        </p>

        <h2 className="font-medium mt-8">Lessons Time Taught Me</h2>
        <p>
          What this phase of life has taught me isn&apos;t just about skills or
          discipline - it&apos;s about patience. Growth isn&apos;t loud. It shows
          up when routines change, when responsibility becomes natural, and when
          you stop waiting for confidence to act. Time doesn&apos;t rush, but it
          never waits either. Showing up every day, even unsure, is how
          evolution quietly takes shape.
        </p>

        <h2 className="font-medium mt-8">Stay Calm When Things Are Uncertain</h2>
        <p>
          As I look back, I feel a sense of calm amidst the uncertainty.
          It&apos;s easy to get lost in the chaos of change, but I&apos;ve
          learned to trust the process. Each challenge is an opportunity for
          growth, and with time, the path forward becomes clearer.
        </p>

        <p className="text-zinc-500 mt-8 text-center italic">
          May these dots connect in unexpected ways, guiding us toward clarity
          and purpose.
        </p>
      </article>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-zinc-200 flex justify-between text-sm text-zinc-500">
        <p>Thanks for reading.</p>
        <Link href="/blogs" className="hover:text-zinc-900">
          &larr; all posts
        </Link>
      </footer>

      <div className="mt-8">
        <span className="cursor-blink" />
      </div>
    </main>
  );
}
