import type { Metadata } from "next";
import Section from "@/components/section";
import ServiceCard from "@/components/service-card";
import { process, services } from "@/lib/site";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: "Graphic design, video editing, motion graphics, digital marketing, branding, content creation, UI/UX, and wedding creative services."
};

export default function ServicesPage() {
  return (
    <>
      <Section eyebrow="Services" title="Everything your brand needs to look sharp, launch fast, and sell better" intro="Pick one service or build a complete creative package around your launch, campaign, event, or monthly content plan.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div id={slugify(service.title)} key={service.title}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pricing Preview" title="Flexible packages for different project sizes">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Starter", "Single creatives, edits, and simple design needs", "From NPR 5,000"],
            ["Growth", "Monthly social, campaign assets, and brand support", "From NPR 25,000"],
            ["Premium", "Full brand identity, launch campaign, website, or production", "Custom Quote"]
          ].map(([name, text, price]) => (
            <div key={name} className="glass rounded-brand p-6">
              <h3 className="font-heading text-2xl font-extrabold">{name}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              <p className="mt-8 text-xl font-bold text-brand-accent">{price}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Workflow" title="Designed to keep momentum high">
        <div className="grid gap-4 md:grid-cols-5">
          {process.map((item, index) => (
            <div key={item} className="rounded-brand border border-white/10 bg-white/[0.04] p-5">
              <span className="text-sm font-bold text-brand-accent">0{index + 1}</span>
              <p className="mt-6 font-heading text-lg font-extrabold">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
