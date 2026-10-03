import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const user = process.env.CONTACT_EMAIL_USER;
    const pass = process.env.CONTACT_EMAIL_PASS;
    const to = process.env.CONTACT_EMAIL_TO ?? "moizali2577@gmail.com";

    if (!user || !pass) {
      console.error("Missing CONTACT_EMAIL_USER or CONTACT_EMAIL_PASS env vars.");
      return NextResponse.json(
        { error: "Email transport is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeBudget = escapeHtml(budget);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const html = `
      <h2>New Portfolio Inquiry</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${company ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ""}
      ${budget ? `<p><strong>Budget:</strong> ${safeBudget}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? "N/A"}\nBudget: ${
        budget ?? "N/A"
      }\n\nMessage:\n${message}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

