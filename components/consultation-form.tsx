"use client";

import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/lib/site";

export default function ConsultationForm() {
  const [nextUrl, setNextUrl] = useState("");
  const inputClass = "rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm outline-none transition placeholder:text-zinc-500 focus:border-brand-accent";

  useEffect(() => {
    setNextUrl(`${window.location.origin}/book-free-consultation?submitted=true`);
  }, []);

  return (
    <form
      action="https://formsubmit.co/digitaldhiren011@gmail.com"
      method="POST"
      className="glass rounded-brand p-5 sm:p-7"
    >
      <input type="hidden" name="_subject" value="New Digital Dhiren Free Consultation Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="source" value="free-consultation" />
      {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required minLength={2} className={inputClass} placeholder="Name" />
        <input name="email" required type="email" className={inputClass} placeholder="Email" />
        <input name="phone" className={inputClass} placeholder="Phone / WhatsApp" />
        <input name="preferred_date" required type="date" className={inputClass} />
        <select name="service" required className={inputClass}>
          {services.map((service) => (
            <option key={service.title} className="bg-brand-dark" value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        required
        minLength={10}
        className="mt-5 min-h-28 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm outline-none transition placeholder:text-zinc-500 focus:border-brand-accent"
        placeholder="What would you like to discuss?"
      />
      <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-zinc-950 transition hover:bg-brand-accent">
        Submit Form <CalendarCheck size={17} />
      </button>
      <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-zinc-300">
        Consultation details will be sent to digitaldhiren011@gmail.com.
      </p>
    </form>
  );
}
