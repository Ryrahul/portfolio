"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// Blog posts data - add new blogs here
const blogPosts = [
  {
    slug: "evolution-takes-time",
    title: "Evolution Takes Time",
    excerpt:
      "Exploring the journey of growth and the importance of patience in the face of challenges.",
    date: "2026-02-01",
    readTime: "5 min read",
    tags: ["Growth", "Patience", "Journey"],
  },
  {
    slug: "my-2025-session",
    title: "My 2025 Session",
    excerpt:
      "Reflecting on a transformative year — from physical transformation to landing my first stipend, and the lessons about consistency and belief that shaped my journey.",
    date: "2025-12-27",
    readTime: "4 min read",
    tags: ["Reflection", "Growth", "Life"],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      {/* Header */}
      <header className="w-full max-w-4xl px-4 sm:px-6 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </header>

      {/* Content */}
      <div className="w-full max-w-4xl px-4 sm:px-6 py-16 mx-auto space-y-12">
        {/* Page Title */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Blog
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Thoughts, learnings, and stories from my journey as a developer.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="section-divider"
            aria-hidden="true"
          />
        </motion.section>

        {/* Blog Posts Grid */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <Link href={`/blogs/${post.slug}`}>
                <Card className="bg-zinc-900/80 border-zinc-800 card-hover group cursor-pointer hover:border-zinc-600 transition-colors duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-zinc-100 transition-all duration-300">
                          {post.title}
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2 text-zinc-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-zinc-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        {/* Empty State (if no blogs) */}
        {blogPosts.length === 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center py-16"
          >
            <p className="text-zinc-500 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>

      {/* Footer */}
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
