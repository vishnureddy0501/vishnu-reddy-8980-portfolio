import mongoose from "mongoose";
import Session from "../models/Session.js";
import Message from "../models/Message.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

export const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

export { Session, Message };
