import type { Metadata } from "next";
import { Award, Eye, Rocket, Target } from "lucide-react";
import Section from "@/components/section";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Digital Dhiren, a premium creative and digital service studio in Lalitpur, Kathmandu."
};

export default function AboutPage() {
  const timeline = ["Started with design and editing craft", "Expanded into brand and marketing systems", "Built conversion-focused digital services", "Serving businesses with end-to-end creative production"];

  return (
    <>
      <Section eyebrow="About" title="A creative partner for brands that want to look premium and move faster" intro="Digital Dhiren blends design taste, production discipline, and digital strategy into one focused studio experience.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[2rem] p-6">
            <div className="grid aspect-[4/5] place-items-center rounded-[1.5rem] bg-gradient-to-br from-brand-primary via-fuchsia-500 to-cyan-300">
              <div className="rounded-full border border-white/40 bg-black/20 px-8 py-6 text-center backdrop-blur-md">
                <p className="font-heading text-6xl font-extrabold">DD</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em]">Creative Director</p>
              </div>
            </div>
          </div>
          <div className="grid content-center gap-5">
            <h2 className="font-heading text-3xl font-extrabold">My Story</h2>
            <p className="leading-8 text-zinc-300">The studio was built around a simple belief: good creative work should be beautiful, useful, and easy for clients to act on. Every project is shaped around clarity, speed, and a premium finish.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-brand border border-white/10 bg-white/[0.05] p-5">
                  <p className="font-heading text-3xl font-extrabold text-brand-accent">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Experience" title="Timeline">
        <div className="grid gap-4">
          {timeline.map((item, index) => (
            <div key={item} className="glass flex gap-5 rounded-brand p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-primary/25 font-bold text-brand-accent">{index + 1}</span>
              <p className="self-center text-zinc-300">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Direction" title="Mission, vision, skills, and team">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, title: "Mission", text: "Help brands communicate with premium visuals and practical digital systems." },
            { icon: Eye, title: "Vision", text: "Become a trusted creative partner for ambitious businesses across Nepal and beyond." },
            { icon: Rocket, title: "Skills", text: "Design, video, motion, branding, UI/UX, marketing, and content production." },
            { icon: Award, title: "Team", text: "A lean creative network led by Digital Dhiren with specialist collaborators when needed." }
          ].map((item) => (
            <div key={item.title} className="rounded-brand border border-white/10 bg-white/[0.05] p-6">
              <item.icon className="text-brand-accent" size={26} />
              <h3 className="mt-6 font-heading text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
