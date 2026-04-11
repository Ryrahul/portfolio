import Link from "next/link";

const blogMeta = {
  title: "My 2025 Session",
  author: "Aakash Subedi",
  date: "2025-12-27",
  readTime: "4 min read",
  tags: ["Reflection", "Growth", "Life"],
};

export default function MyTwentyFiveSession() {
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
          The year 2025 was an amazing year for me : a year where I got to learn
          new things, understand people better, explore technology, and most
          importantly, learn valuable lessons about when to engage with others
          and when to step back.
        </p>

        <h2 className="font-medium mt-8">The Physical Transformation</h2>
        <p>
          At the start of the year, I was focused on fixing my physique. It was
          dull, clumsy, and carrying extra weight. This year, I managed to gain
          muscle and shed the fat. But more than the physical change, this
          journey made me stronger, both mentally and physically.
        </p>

        <h2 className="font-medium mt-8">The First Stipend</h2>
        <p>
          This was also the year I received my first stipend - &#8377;10,000.
          There was no going back since then. Right now, I&apos;m working with a
          Japanese-based startup, and I know it took me a lot to understand and
          discover my worth.
        </p>

        <blockquote className="border-l-2 border-zinc-300 pl-4 text-zinc-500 italic my-6">
          &ldquo;The job is not the end, but a start : a starting phase that
          will help me become an engineer who doesn&apos;t just write code, but
          writes code that scales.&rdquo;
        </blockquote>

        <h2 className="font-medium mt-8">Looking Ahead to 2026</h2>
        <p>
          There are still thousands of things to learn, but I&apos;m confident
          in myself. I&apos;m pretty sure I&apos;ll be able to make things work
          on my side. My target for 2026 is to become a better problem solver. I
          plan to restart DSA and also study Theory of Computation, which I
          skipped during my college days since it wasn&apos;t part of my
          curriculum.
        </p>

        <h2 className="font-medium mt-8">The Lessons I Carry Forward</h2>
        <p>
          This year taught me that consistency and belief always lead to a better
          path. I was consistent in building things, and I believed it would take
          me somewhere good.
        </p>

        <h2 className="font-medium mt-8">Gratitude</h2>
        <p>
          At the end of this year, I&apos;d like to remember everyone who helped
          me hold the pillars of hope and taught me new things. Your support,
          guidance, and belief in me made all the difference.
        </p>

        <p className="text-zinc-500 mt-8 text-center italic">
          Here&apos;s to 2026 : a year of growth, learning, and becoming the
          engineer I aspire to be.
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
