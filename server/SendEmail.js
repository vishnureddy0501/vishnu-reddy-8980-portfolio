import nodemailer from "nodemailer";

export default function sendMail(receiverEmail, text, subject) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,  // Your Gmail address from .env
      pass: process.env.EMAIL_PASS,  // App password from .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: receiverEmail,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
}
