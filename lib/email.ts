import nodemailer from "nodemailer";
import { Resend } from "resend";
import type { InquiryInput } from "@/lib/validators";

export async function sendInquiryEmails(data: InquiryInput) {
  const toEmail = "digitaldhiren011@gmail.com";
  const subject = `New Digital Dhiren form submission from ${data.name}`;
  const text = [
    "New Digital Dhiren Inquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Service: ${data.service}`,
    `Preferred date: ${data.preferredDate || "Not provided"}`,
    `Source: ${data.source || "website"}`,
    "",
    "Message:",
    data.message
  ].join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#18181B">
      <h2>New Digital Dhiren Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Preferred date:</strong> ${data.preferredDate || "Not provided"}</p>
      <p><strong>Source:</strong> ${data.source || "website"}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    </div>
  `;

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Digital Dhiren <onboarding@resend.dev>",
      to: [toEmail],
      subject,
      text,
      html
    });
    return true;
  }

  const smtpHost = process.env.SMTP_HOST || (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD ? "smtp.gmail.com" : "");
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const smtpPort = Number(process.env.SMTP_PORT || 587);

  if (smtpHost && smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || `"Digital Dhiren Website" <${smtpUser}>`,
      to: toEmail,
      replyTo: data.email,
      subject,
      text,
      html
    });
    return true;
  }

  console.warn("Inquiry email skipped: configure RESEND_API_KEY or SMTP/Gmail environment variables.");
  return false;
}
