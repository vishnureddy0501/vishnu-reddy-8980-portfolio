import Session from "../models/Session.js";

export async function saveSession(data) {
  const session = new Session(data);
  return session.save();
}

export async function updateSessionStatus(session_id, status) {
  return Session.findOneAndUpdate({ session_id }, { status, updated_at: new Date() }, { new: true });
}

export async function getSession(session_id) {
  return Session.findOne({ session_id });
}
