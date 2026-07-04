import type { Metadata } from "next";
import ConsultationForm from "@/components/consultation-form";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "Book Free Consultation",
  description: "Book a free consultation with Digital Dhiren for your brand, design, video, marketing, or digital project."
};

export default function BookFreeConsultationPage() {
  return (
    <Section eyebrow="Free Consultation" title="Choose a service, date, and time slot" intro="Use this page to request a meeting and get direction before starting your project.">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-brand border border-white/10 bg-white/[0.05] p-6">
          <h2 className="font-heading text-2xl font-extrabold">What happens next?</h2>
          <div className="mt-6 grid gap-4 text-zinc-300">
            <p>1. Submit your preferred service, date, and time.</p>
            <p>2. Digital Dhiren confirms availability.</p>
            <p>3. You discuss goals, timeline, budget, and next steps.</p>
          </div>
        </div>
        <ConsultationForm />
      </div>
    </Section>
  );
}
