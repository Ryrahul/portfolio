"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const blogMeta = {
  title: "Evolution Takes Time",
  author: "Aakash Subedi",
  date: "2026-02-01",
  readTime: "5 min read",
  tags: ["Reflection", "Growth", "Life"],
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function LifeOfAPie() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      {/* Header */}
      <header className="w-full max-w-3xl px-4 sm:px-6 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blogs</span>
          </Link>
        </motion.div>
      </header>

      {/* Article Content */}
      <article className="w-full max-w-3xl px-4 sm:px-6 py-12 mx-auto">
        {/* Title Section */}
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {blogMeta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {blogMeta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blogMeta.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={blogMeta.date}>
                {new Date(blogMeta.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blogMeta.readTime}</span>
            </div>
          </div>

          <div className="section-divider !mx-0" aria-hidden="true" />
        </motion.header>

        {/* Blog Content */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <section className="space-y-6 text-zinc-300 leading-relaxed">
            {/* Introduction */}
            <p className="text-xl text-zinc-200 font-medium">
              For a long time, I never truly understood why people seemed to be
              in such a hurry. As a college student, time felt infinite. I
              believed I could always pause, delay decisions, and figure things
              out later. But as life slowly shifted, so did my understanding.
              Looking back now, I realize that growth doesn’t happen overnight.
              It builds quietly through discomfort, routine, and moments you
              barely notice while living them.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              The Moment of Realisation
            </h2>

            <p>
              I began 2026 by moving out of my hostel and into a small room in a
              city I barely knew , Bangalore. It was more than a physical
              relocation; it was a mental reset. Familiar faces, habits, and
              safety nets disappeared overnight. That absence forced me to
              adapt, to observe more, and to accept change instead of resisting
              it. Slowly, I started understanding that evolution happens through
              everyday experiences, not dramatic turning points.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              The Change in Routine
            </h2>

            <p>
              I used to be someone who needed countless alarms just to wake up.
              Now, without effort, I find myself awake before sunrise — because
              responsibility demands it. The same person who never cooked or
              cleaned now handles chores instinctively. Somewhere along the way,
              hesitation faded. I stopped overthinking outcomes and started
              acting first. Failures no longer scare me; stagnation does. In
              connecting these dots, I’ve come to believe that growth is life’s
              way of teaching us maturity, quietly, but firmly.
            </p>

            <blockquote className="border-l-4 border-zinc-500 pl-6 my-8 text-zinc-400 italic">
              "Evolution takes time. Sometimes it takes comfort away before it
              gives clarity. What matters is honoring the lessons that change
              leaves behind."
            </blockquote>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              What's Next
            </h2>

            <p>
              There are moments when I feel uncertain about what to learn next
              or where to focus my energy. But joining a new company has exposed
              me to perspectives I never had before. I’m encouraged to
              experiment, break things, and rebuild them better. The environment
              — especially my team and leadership pushes me to step outside my
              comfort zone. Over the coming months, my goal is simple:
              strengthen my core engineering foundations and learn by doing.
              Even on days when work drains me, the opportunity to learn
              something new pulls me back the very next morning.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Lessons Time Taught Me
            </h2>

            <p>
              What this phase of life has taught me isn’t just about skills or
              discipline it’s about patience. Growth isn’t loud. It shows up
              when routines change, when responsibility becomes natural, and
              when you stop waiting for confidence to act. Time doesn’t rush,
              but it never waits either. Showing up every day, even unsure, is
              how evolution quietly takes shape.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Stay Calm When Things Are Uncertain
            </h2>

            <p>
              As I look back, I feel a sense of calm amidst the uncertainty.
              It’s easy to get lost in the chaos of change, but I’ve learned to
              trust the process. Each challenge is an opportunity for growth,
              and with time, the path forward becomes clearer.
            </p>

            <p className="text-zinc-400 mt-8 text-center italic">
              May these dots connect in unexpected ways, guiding us toward
              clarity and purpose and may it work for all the readers out there.
            </p>
          </section>
        </motion.div>

        <motion.footer
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-zinc-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              Thanks for reading! Feel free to share your thoughts.
            </p>
            <Link
              href="/blogs"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              ← Back to all posts
            </Link>
          </div>
        </motion.footer>
      </article>

      <footer className="w-full border-t border-zinc-800 mt-auto bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              © {new Date().getFullYear()} Aakash Subedi
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
