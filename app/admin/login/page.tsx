"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AdminLoginPage() {
  const [error, setError] = useState("");

  return (
    <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-md place-items-center px-4">
      <form
        className="glass w-full rounded-brand p-7"
        onSubmit={async (event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          const result = await signIn("credentials", {
            email: form.get("email"),
            password: form.get("password"),
            redirect: false,
            callbackUrl: "/admin"
          });

          if (result?.ok) {
            window.location.href = "/admin";
          } else {
            setError("Invalid admin login.");
          }
        }}
      >
        <h1 className="font-heading text-3xl font-extrabold">Admin Login</h1>
        <input name="email" type="email" required className="mt-6 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm outline-none focus:border-brand-accent" placeholder="Email" />
        <input name="password" type="password" required className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm outline-none focus:border-brand-accent" placeholder="Password" />
        <button className="mt-5 min-h-12 w-full rounded-full bg-white px-6 text-sm font-bold text-zinc-950 hover:bg-brand-accent">Sign In</button>
        {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
      </form>
    </section>
  );
}
