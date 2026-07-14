import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import ButtonLink from "@/components/button-link";
import HeroVisual from "@/components/hero-visual";
import Reveal from "@/components/reveal";
import Section from "@/components/section";
import ServiceCard from "@/components/service-card";
import { benefits, brand, faqs, portfolioItems, process, services, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-12 sm:items-center sm:px-6 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1fr_0.92fr] lg:gap-12 lg:px-8 lg:py-16">
        <Reveal>
          <p className="mb-5 inline-flex rounded-full border border-brand-accent/30 bg-brand-primary/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
            Nepal Focused Creative Agency
          </p>
          <h1 className="max-w-xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            Creative Agency for Nepal-Grown Brands
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
            Branding, social media design, reels, ads, and digital campaigns for cafes, colleges, boutiques, travel businesses, events, and local service brands.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ButtonLink href="/portfolio">View Portfolio</ButtonLink>
            <ButtonLink href={brand.whatsapp} variant="ghost" icon={<MessageCircle size={17} />}>Contact on WhatsApp</ButtonLink>
          </div>
        </Reveal>
        <div className="hidden lg:block">
          <HeroVisual />
        </div>
      </section>

      <Section eyebrow="Services" title="Creative services built for brand growth" intro="From first impression to full launch, Digital Dhiren covers the visual and digital work your business needs.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Featured Work"
        title="Showcase built around real Nepali business needs"
        intro="A quick look at campaign systems, social content, and video work shaped for Kathmandu, Lalitpur, Pokhara, and nearby markets."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-brand border border-white/10 bg-white/[0.04]">
              <div className={`h-56 bg-gradient-to-br ${item.gradient} p-5`}>
                <div className="flex h-full flex-col justify-between rounded-[20px] border border-white/30 bg-black/20 p-5 backdrop-blur-sm">
                  <span className="w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-bold">{item.category}</span>
                  <div>
                    <p className="text-sm text-white/75">{item.tag}</p>
                    <h3 className="font-heading text-2xl font-extrabold">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-3 p-5 text-sm text-zinc-300">
                <p className="font-bold text-white">{item.location}</p>
                <p className="leading-6 text-zinc-400">{item.deliverables}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span>View agency showcase</span>
                  <ArrowRight className="transition group-hover:translate-x-1" size={17} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Benefits" title="A polished creative partner without the agency maze">
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="glass flex gap-4 rounded-brand p-5">
              <CheckCircle2 className="mt-1 shrink-0 text-brand-accent" size={22} />
              <p className="leading-7 text-zinc-300">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="A clear path from idea to launch">
        <div className="grid gap-4 md:grid-cols-5">
          {process.map((step, index) => (
            <div key={step} className="rounded-brand border border-white/10 bg-white/[0.05] p-5">
              <span className="text-sm font-bold text-brand-accent">0{index + 1}</span>
              <p className="mt-8 font-heading text-lg font-extrabold">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by founders, creators, and growing teams">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass rounded-brand p-6">
              <p className="leading-8 text-zinc-300">"{item.quote}"</p>
              <p className="mt-6 font-bold text-white">{item.name}</p>
              <p className="text-sm text-zinc-500">{item.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Questions before we start">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-brand border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-heading text-lg font-extrabold">{faq.q}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="gradient-border rounded-[2rem]">
          <div className="glass rounded-[2rem] p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-extrabold sm:text-5xl">Ready to build a stronger brand?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Book a free consultation and get a clear direction for your design, video, marketing, or digital project.</p>
            <div className="mt-7 flex justify-center">
              <ButtonLink href="/book-free-consultation">Book Free Consultation</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
