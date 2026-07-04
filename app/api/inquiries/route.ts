import { NextResponse } from "next/server";
import { sendInquiryEmails } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { inquirySchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid inquiry", details: parsed.error.flatten() }, { status: 400 });
  }

  const savedInquiry = await prisma.inquiry.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      service: parsed.data.service,
      message: parsed.data.preferredDate
        ? `Preferred date: ${parsed.data.preferredDate}\n\n${parsed.data.message}`
        : parsed.data.message,
      source: parsed.data.source || "website"
    }
  }).catch((error) => {
    console.error("Inquiry database save failed", error);
    return null;
  });

  const emailSent = await sendInquiryEmails(parsed.data).catch((error) => {
    console.error("Email delivery failed", error);
    return false;
  });

  return NextResponse.json({ ok: true, inquiryId: savedInquiry?.id || null, emailSent });
}

export async function GET() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
    take: 100
  });

  return NextResponse.json(inquiries);
}
