import nodemailer from "nodemailer";
import { newLeadEmailTemplate } from "@/emails/email";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const lead = req.body.record;
    console.log("Received new lead notification:", lead);

    if (!lead) {
      return res.status(400).json({ message: "No lead data provided" });
    }

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.NOTIFICATION_EMAIL,
      subject: "New Lead Notification",
      html: newLeadEmailTemplate(lead),
    });
    console.log("Email sent successfully:", info);

    return res
      .status(200)
      .json({ message: "Email notification sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ message: "Error sending email notification" });
  }
}
