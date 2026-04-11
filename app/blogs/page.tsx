import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog",
  description: "Thoughts, learnings, and stories from my journey.",
};

export default function BlogsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
      {/* Back link */}
      <div className="mb-8">
        <Link href="/" className="text-zinc-500 hover:text-zinc-900">
          &larr; back
        </Link>
      </div>

      <h1 className="text-base font-medium mb-8">Blog</h1>

      {/* Blog list */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="block no-underline group"
            >
              <h2 className="font-medium underline decoration-zinc-400 group-hover:decoration-zinc-900">
                {post.title}
              </h2>
              <p className="text-zinc-500 mt-1">{post.excerpt}</p>
              <p className="text-zinc-400 text-sm mt-1">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                &middot; {post.readTime}
              </p>
            </Link>
          </article>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <p className="text-zinc-500">No blog posts yet. Check back soon.</p>
      )}

      {/* Cursor */}
      <div className="mt-12">
        <span className="cursor-blink" />
      </div>
    </main>
  );
}
