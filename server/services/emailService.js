// services/emailService.js
import sendMail from "../utils/SendEmail.js";

export async function sendEmailHandler(req, res) {
  try {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
      return res.status(400).json({ error: "to, subject, and text are required" });
    }

    await sendMail(to, text, subject);

    return res.status(200).json({ message: "Email sent successfully ✅" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
