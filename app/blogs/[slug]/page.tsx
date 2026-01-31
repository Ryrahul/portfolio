import { notFound } from "next/navigation";
import LifeOfAPie from "@/components/blogs/blog-1-life-of-a-pie";
import EvolutionTakesTime from "@/components/blogs/blog-2-evolution-takes-time";

// Define all available blog posts
const blogComponents: Record<string, React.ComponentType> = {
  "my-2025-session": LifeOfAPie,
  "evolution-takes-time": EvolutionTakesTime,
};

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const BlogComponent = blogComponents[slug];

  if (!BlogComponent) {
    notFound();
  }

  return <BlogComponent />;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogComponents).map((slug) => ({
    slug,
  }));
}
