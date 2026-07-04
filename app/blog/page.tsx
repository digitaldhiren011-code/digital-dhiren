import type { Metadata } from "next";
import { Search, Share2 } from "lucide-react";
import Section from "@/components/section";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Creative, branding, video editing, and digital marketing insights from Digital Dhiren."
};

export default function BlogPage() {
  return (
    <>
      <Section eyebrow="Blog" title="Ideas for sharper brands and better content">
        <div className="glass mb-8 flex items-center gap-3 rounded-full px-5 py-3">
          <Search size={18} className="text-zinc-500" />
          <input className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500" placeholder="Search articles" />
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-brand border border-white/10 bg-white/[0.05]">
            <div className="h-72 bg-gradient-to-br from-brand-primary via-fuchsia-500 to-cyan-300 p-6">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">Featured Article</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-brand-accent">Branding • 7 min read</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold">The premium brand checklist before your next launch</h2>
              <p className="mt-4 leading-8 text-zinc-400">A clear article template with cover, table of contents, author details, and share-ready structure.</p>
            </div>
          </article>
          <div className="grid gap-5">
            {blogPosts.map((post) => (
              <article key={post.title} className="glass rounded-brand p-6">
                <p className="text-sm text-brand-accent">{post.category} • {post.minutes}</p>
                <h3 className="mt-3 font-heading text-2xl font-extrabold">{post.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 text-sm text-zinc-400">
                  <span>Author: Digital Dhiren</span>
                  <Share2 size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
