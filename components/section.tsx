import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mb-10 max-w-3xl">
        {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">{eyebrow}</p> : null}
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{title}</h2>
        {intro ? <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
