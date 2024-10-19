import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Define your email sending function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { fullName, email, contactNo, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can change this to your preferred email service (e.g., SMTP)
      auth: {
        user: "techtitan002@gmail.com", // Your email address
        pass: "martlxlvmemluxhy", // Your email password or app-specific password
      },
    });

    try {
      // Send the email using the transporter
      await transporter.sendMail({
        from: "techtitan002@gmail.com", // Sender's email
        to: email, // Recipient email (your contact email)
        subject: `${subject} - Contact Form Inquiry`,
        html: `
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact No:</strong> ${contactNo}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
