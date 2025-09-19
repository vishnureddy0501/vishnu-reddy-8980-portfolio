import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.js";
import emailRoutes from "./routes/email.js";
import { connectMongo } from "./db/mongo.js";
import { createRedisClient } from "./db/redis.js";

dotenv.config();

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cors({
        origin: process.env.NODE_ENV === "development" ? process.env.FRONTEND_DEV_URL : process.env.FRONTEND_PROD_URL,
        methods: ["GET", "POST", "PUT", "DELETE"]
    })
);
app.use(cookieParser());

// Health check route
app.get("/", (req, res) => {
    res.status(200).send({ message: "Server is running 🚀" });
});

// Routes
app.use("/chat", chatRoutes);
app.use("/email", emailRoutes);

// Health
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

// Catch-all route
app.use("*", (req, res) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 8500;

(async function start() {
  try {
    await connectMongo();
    await createRedisClient();
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
})();
