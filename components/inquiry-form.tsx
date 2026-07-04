"use client";

import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/lib/site";

export default function InquiryForm({ source = "contact" }: { source?: string }) {
  const [nextUrl, setNextUrl] = useState("");
  const inputClass = "w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-brand-accent";

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact?submitted=true`);
  }, []);

  return (
    <form
      action="https://formsubmit.co/digitaldhiren011@gmail.com"
      method="POST"
      className="glass rounded-brand p-5 sm:p-7"
    >
      <input type="hidden" name="_subject" value="New Digital Dhiren Website Inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="source" value={source} />
      {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-zinc-300">
          Name
          <input required minLength={2} name="name" className={inputClass} placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          Email
          <input required type="email" name="email" className={inputClass} placeholder="you@example.com" />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          Phone
          <input name="phone" className={inputClass} placeholder="+977 ..." />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          Service
          <select required name="service" className={inputClass}>
            {services.map((service) => (
              <option key={service.title} className="bg-brand-dark" value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm text-zinc-300 sm:col-span-2">
          Message
          <textarea required minLength={10} name="message" className={`${inputClass} min-h-32 resize-none`} placeholder="Tell us about your project" />
        </label>
      </div>
      <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-zinc-950 transition hover:bg-brand-accent">
        Submit Form <Send size={17} />
      </button>
      <p className="mt-4 text-sm text-zinc-400">
        Form details will be sent to digitaldhiren011@gmail.com.
      </p>
    </form>
  );
}
