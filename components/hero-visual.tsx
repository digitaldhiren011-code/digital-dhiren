"use client";

import { motion } from "framer-motion";
import { BarChart3, Clapperboard, Layers3, PenTool, Sparkles } from "lucide-react";

export default function HeroVisual() {
  const cards = [
    { icon: PenTool, label: "Brand Kit", value: "98%" },
    { icon: Clapperboard, label: "Video Flow", value: "4K" },
    { icon: BarChart3, label: "Reach", value: "+62%" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto aspect-[4/3] w-full max-w-xl perspective-1000"
    >
      <div className="absolute inset-6 rounded-[2rem] bg-brand-primary/25 blur-3xl" />
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass gradient-border relative h-full rounded-[2rem] p-5"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-brand-accent">Creative OS</p>
            <p className="mt-1 font-heading text-xl font-extrabold">Digital Dhiren Studio</p>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-dark">
            <Sparkles size={22} />
          </div>
        </div>
        <div className="grid gap-4 py-5 sm:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 * index }}
              className="rounded-3xl border border-white/10 bg-black/25 p-4"
            >
              <card.icon className="mb-5 text-brand-accent" size={22} />
              <p className="text-xs text-zinc-400">{card.label}</p>
              <p className="font-heading text-2xl font-extrabold">{card.value}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
            <div className="mb-4 flex items-center gap-2 text-sm text-zinc-300"><Layers3 size={17} /> Campaign Layers</div>
            <div className="space-y-3">
              {[82, 64, 92].map((width, index) => (
                <div key={width} className="h-3 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-primary to-cyan-300"
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ delay: 0.35 + index * 0.15, duration: 0.8 }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-brand-accent/30 bg-brand-primary/20 p-4">
            <p className="text-xs text-zinc-300">Next launch</p>
            <p className="mt-2 font-heading text-3xl font-extrabold">12</p>
            <p className="text-xs text-zinc-400">assets ready</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
