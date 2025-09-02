import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import sendMail from "./SendEmail.js";

dotenv.config();

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Health check route
app.get("/", (req, res) => {
    res.status(200).send({ message: "Server is running 🚀" });
});

// Email route
app.post("/send-email", async (req, res) => {
    try {
        const { to, subject, text } = req.body;

        if (!to || !subject || !text) {
            return res
                .status(400)
                .json({ error: "to, subject, and text are required" });
        }

        await sendMail(to, text, subject);

        return res.status(200).json({ message: "Email sent successfully ✅" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
    }
});

app.get("/api/health", (req, res) => res.send("Server running ✅"));

// Catch-all route
app.use("*", (req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 8500;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
