import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Trash2 } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { services, blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admin Dashboard"
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const inquiries = await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" }, take: 50 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-accent">Admin</p>
        <h1 className="mt-3 font-heading text-4xl font-extrabold">Dashboard</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <div className="glass rounded-brand p-6">
          <p className="text-sm text-zinc-400">Inquiries</p>
          <p className="mt-2 font-heading text-4xl font-extrabold">{inquiries.length}</p>
        </div>
        <div className="glass rounded-brand p-6">
          <p className="text-sm text-zinc-400">Services</p>
          <p className="mt-2 font-heading text-4xl font-extrabold">{services.length}</p>
        </div>
        <div className="glass rounded-brand p-6">
          <p className="text-sm text-zinc-400">Blog Drafts</p>
          <p className="mt-2 font-heading text-4xl font-extrabold">{blogPosts.length}</p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-brand border border-white/10">
        <div className="border-b border-white/10 bg-white/[0.05] p-5 font-heading text-xl font-extrabold">Recent Inquiries</div>
        <div className="divide-y divide-white/10">
          {inquiries.length ? inquiries.map((inquiry) => (
            <div key={inquiry.id} className="grid gap-3 p-5 lg:grid-cols-[1fr_1fr_1fr_auto]">
              <div>
                <p className="font-bold text-white">{inquiry.name}</p>
                <p className="text-sm text-zinc-500">{inquiry.email}</p>
              </div>
              <p className="text-sm text-zinc-300">{inquiry.service}</p>
              <p className="text-sm text-zinc-400">{inquiry.message}</p>
              <form action={async () => {
                "use server";
                await prisma.inquiry.delete({ where: { id: inquiry.id } });
              }}>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-red-300" aria-label="Delete inquiry">
                  <Trash2 size={16} />
                </button>
              </form>
            </div>
          )) : <p className="p-5 text-zinc-400">No inquiries yet.</p>}
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="glass rounded-brand p-6">
          <h2 className="font-heading text-2xl font-extrabold">Manage Blogs</h2>
          <p className="mt-3 text-zinc-400">CMS-ready structure is in place through the BlogPost Prisma model. Connect your editor or build CRUD forms here.</p>
        </div>
        <div className="glass rounded-brand p-6">
          <h2 className="font-heading text-2xl font-extrabold">Update Services</h2>
          <p className="mt-3 text-zinc-400">Services are currently seeded in code and mirrored by the Service Prisma model for future admin editing.</p>
        </div>
      </div>
    </section>
  );
}
