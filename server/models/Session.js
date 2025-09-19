import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  session_id: { type: String, unique: true, required: true, index: true },
  user_id: { type: String },
  status: { type: String, enum: ["active", "closed"], default: "active" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  meta: { type: mongoose.Schema.Types.Mixed },
});

SessionSchema.pre("save", function (next) {
  this.updated_at = new Date();
  next();
});

export default mongoose.models.Session || mongoose.model("Session", SessionSchema);
