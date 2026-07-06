import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, countryCode, message, services } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json(
        { message: "Please select at least one service." },
        { status: 400 }
      );
    }

    const transporter = createTransporter();
    const serviceList = Array.isArray(services) && services.length
      ? services.join(", ")
      : "Not specified";
    const phoneDisplay = phone ? `${countryCode} ${phone}` : "Not provided";

    // 1. Notify the agency
    await transporter.sendMail({
      from: `"Devskarnel Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#0a4a42;margin-bottom:16px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#555;width:120px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#555;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#555;"><strong>Phone</strong></td><td style="padding:8px 0;">${phoneDisplay}</td></tr>
            <tr><td style="padding:8px 0;color:#555;"><strong>Services</strong></td><td style="padding:8px 0;">${serviceList}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#fff;border-radius:6px;border:1px solid #e0e0e0;">
            <strong style="color:#555;">Message:</strong>
            <p style="margin-top:8px;white-space:pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // 2. Send confirmation to the person who filled the form
    await transporter.sendMail({
      from: `"Devskarnel" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your message, ${name}!`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#010504;border-radius:8px;color:#ffffff;">
          <h2 style="color:#2de8b0;margin-bottom:8px;">Thanks for reaching out!</h2>
          <p style="color:#aaa;margin-bottom:24px;">Hi ${name}, we've received your enquiry and will get back to you within <strong style="color:#fff;">24 hours</strong>.</p>

          <div style="background:#0d1a17;border:1px solid #1a3a30;border-radius:8px;padding:20px;margin-bottom:24px;">
            <p style="margin:0 0 8px;color:#666;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Your message</p>
            <p style="margin:0;white-space:pre-wrap;color:#ccc;">${message}</p>
          </div>

          ${Array.isArray(services) && services.length ? `
          <div style="background:#0d1a17;border:1px solid #1a3a30;border-radius:8px;padding:20px;margin-bottom:24px;">
            <p style="margin:0 0 8px;color:#666;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Services selected</p>
            <p style="margin:0;color:#2de8b0;">${serviceList}</p>
          </div>` : ""}

          <p style="color:#555;font-size:13px;margin-top:24px;border-top:1px solid #1a3a30;padding-top:16px;">
            This is an automated confirmation. Please do not reply to this email.<br/>
            — The Devskarnel Team
          </p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent! Check your inbox for a confirmation." }, { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ message: "Failed to send message. Please try again." }, { status: 500 });
  }
}
