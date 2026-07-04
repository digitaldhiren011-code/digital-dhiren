import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, Brush, Film, Megaphone, WandSparkles } from "lucide-react";
import Section from "@/components/section";
import { portfolioItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Featured creative work across graphic design, video, motion, branding, and marketing."
};

const categories = [
  { label: "Graphic", icon: Brush },
  { label: "Video", icon: Film },
  { label: "Motion", icon: WandSparkles },
  { label: "Branding", icon: BadgeCheck },
  { label: "Marketing", icon: Megaphone }
];

const categoryIcons = Object.fromEntries(categories.map((category) => [category.label, category.icon]));

export default function PortfolioPage() {
  return (
    <Section
      eyebrow="Portfolio"
      title="Selected work across design, video, motion, branding, and marketing"
      intro="A premium masonry-style gallery with hover previews, case study cues, and before/after presentation blocks."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <span
            key={category.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-brand-accent/60 hover:bg-brand-primary/20 hover:text-white"
          >
            <category.icon size={15} className="text-brand-accent" />
            {category.label}
          </span>
        ))}
      </div>

      <div className="masonry">
        {[...portfolioItems, ...portfolioItems.slice(0, 3)].map((item, index) => {
          const Icon = categoryIcons[item.category] || Brush;

          return (
            <div
              key={`${item.title}-${index}`}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-brand border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-glow"
            >
              <div className={`${index % 3 === 0 ? "h-80" : "h-64"} bg-gradient-to-br ${item.gradient} p-5`}>
                <div className="flex h-full flex-col justify-between rounded-[20px] border border-white/25 bg-black/20 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                      <Icon size={13} />
                      {item.category}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md transition group-hover:scale-105">
                      <Icon size={19} />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-white/75">{item.tag}</p>
                    <h3 className="font-heading text-2xl font-extrabold">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="font-bold text-white">Case Study</p>
                  <p className="text-sm text-zinc-500">Before / After - Hover Preview</p>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-accent/25 bg-brand-primary/10 text-brand-accent transition group-hover:bg-brand-primary/25">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
