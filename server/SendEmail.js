import nodemailer from "nodemailer";

export default function send_mail(receiverEmail, text, subject) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gujjulavishnuvardhanreddy8179@gmail.com",
      pass: "akzw gbio ymdv mgvy",
    },
  });
  const mailOptions = {
    from: "gujjulavishnuvardhanreddy8179@gmail.com",
    to: receiverEmail,
    subject: subject,
    text: text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent successfully");
    }
  });
}
