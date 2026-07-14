import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, Brush, Film, MapPin, Megaphone, PackageCheck, TrendingUp, WandSparkles } from "lucide-react";
import Section from "@/components/section";
import { portfolioItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nepal-focused agency portfolio across graphic design, video, motion, branding, and marketing."
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
      title="Nepali market case studies for cafes, colleges, boutiques, travel, real estate, and events"
      intro="Realistic agency-style showcases built around local business goals: launch awareness, better social media presence, stronger trust, and clearer customer action."
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

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item, index) => {
          const Icon = categoryIcons[item.category] || Brush;

          return (
            <div
              key={`${item.title}-${index}`}
              className="group overflow-hidden rounded-brand border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-glow"
            >
              <div className={`h-72 bg-gradient-to-br ${item.gradient} p-5`}>
                <div className="flex h-full flex-col justify-between rounded-[20px] border border-white/25 bg-black/25 p-5 backdrop-blur-sm">
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
                    <h3 className="mt-1 font-heading text-2xl font-extrabold leading-tight">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-white">Agency Showcase</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-zinc-500">
                      <MapPin size={14} className="text-brand-accent" />
                      {item.location}
                    </p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-accent/25 bg-brand-primary/10 text-brand-accent transition group-hover:bg-brand-primary/25">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
                    <PackageCheck size={14} />
                    Deliverables
                  </p>
                  <p className="text-sm leading-6 text-zinc-300">{item.deliverables}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                    <TrendingUp size={14} />
                    Outcome
                  </p>
                  <p className="text-sm leading-6 text-zinc-300">{item.result}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
