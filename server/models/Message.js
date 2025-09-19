import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  session_id: { type: String, required: true, index: true },
  role: { type: String, enum: ["user", "assistant", "system"], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now, index: true },
});

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
