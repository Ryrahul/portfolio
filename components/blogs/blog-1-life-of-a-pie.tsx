"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const blogMeta = {
  title: "My 2025 Session",
  author: "Aakash Subedi",
  date: "2025-12-27",
  readTime: "4 min read",
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
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-black to-zinc-900">
      {/* Header */}
      <header className="w-full max-w-3xl px-4 sm:px-6 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-300"
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
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blogMeta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
              {blogMeta.title}
            </span>
          </h1>

          {/* Meta Info */}
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

          {/* Divider */}
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
              The year 2025 was an amazing year for me : a year where I got to
              learn new things, understand people better, explore technology,
              and most importantly, learn valuable lessons about when to engage
              with others and when to step back.
            </p>

            {/* Physical Transformation */}
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              The Physical Transformation
            </h2>

            <p>
              At the start of the year, I was focused on fixing my physique. It
              was dull, clumsy, and carrying extra weight. This year, I managed
              to gain muscle and shed the fat. But more than the physical
              change, this journey made me stronger , both mentally and
              physically.
            </p>

            {/* First Stipend */}
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              The First Stipend
            </h2>

            <p>
              This was also the year I received my first stipend  ₹10,000.
              There was no going back since then. Right now, I'm working with a
              Japanese-based startup, and I know it took me a lot to understand
              and discover my worth.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-6 my-8 text-zinc-400 italic">
              "The job is not the end, but a start : a starting phase that will
              help me become an engineer who doesn't just write code, but writes
              code that scales."
            </blockquote>

            {/* Looking Ahead */}
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Looking Ahead to 2026
            </h2>

            <p>
              There are still thousands of things to learn, but I'm confident in
              myself. I'm pretty sure I'll be able to make things work on my
              side. My target for 2026 is to become a better problem solver. I
              plan to restart DSA and also study Theory of Computation, which I
              skipped during my college days since it wasn't part of my
              curriculum.
            </p>

            {/* Lessons Learned */}
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              The Lessons I Carry Forward
            </h2>

            <p>
              This year taught me that <strong>consistency</strong> and{" "}
              <strong>belief</strong> always lead to a better path. I was
              consistent in building things, and I believed it would take me
              somewhere good.
            </p>

            {/* Gratitude */}
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Gratitude
            </h2>

            <p>
              At the end of this year, I'd like to remember everyone who helped
              me hold the pillars of hope and taught me new things. Your
              support, guidance, and belief in me made all the difference.
            </p>

            <p className="text-zinc-400 mt-8 text-center italic">
              Here's to 2026 : a year of growth, learning, and becoming the
              engineer I aspire to be. 🚀
            </p>
          </section>
        </motion.div>

        {/* Article Footer */}
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
              className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300"
            >
              ← Back to all posts
            </Link>
          </div>
        </motion.footer>
      </article>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-800/50 mt-auto bg-zinc-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="text-zinc-400 hover:text-purple-400 transition-colors duration-300"
            >
              © {new Date().getFullYear()} Aakash Subedi
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
