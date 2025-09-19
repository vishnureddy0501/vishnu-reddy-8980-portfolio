import Message from "../models/Message.js";

/**
 * Save a single message (user or assistant).
 */
export async function saveMessage({ session_id, role, content, timestamp }) {
  const msg = new Message({ session_id, role, content, timestamp: timestamp || new Date() });
  return msg.save();
}

/**
 * Fetch messages for a session (sorted oldest -> newest).
 * Return array of { role, content, timestamp }
 */
export async function fetchMessagesBySession(session_id, limit = 100) {
  const docs = await Message.find({ session_id }).sort({ timestamp: 1 }).limit(limit).lean();
  return docs.map(d => ({ role: d.role, content: d.content, timestamp: d.timestamp }));
}
