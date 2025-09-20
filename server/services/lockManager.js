import { getRedisClient } from "../db/redis.js";
import Session from "../models/Session.js"; // your mongoose model

/**
 * Acquire lock for a session
 */
export async function acquireLock(sessionId) {
  const redisKey = `chat:lock:${sessionId}`;

  try {
    const redis = getRedisClient();

    // 1️⃣ Try Redis first
    const success = await redis.set(redisKey, "locked", { NX: true, EX: 30 }); 
    if (success) {
      return { acquired: true, via: "redis" };
    }
    return { acquired: false, via: "redis" };

  } catch (err) {
    console.error("⚠ Redis unavailable, falling back to Mongo lock:", err);

    // 2️⃣ Fallback to Mongo
    const res = await Session.updateOne(
      { session_id: sessionId, lock: { $ne: true } },
      { $set: { lock: true, lockExpireAt: new Date(Date.now() + 30_000) } }
    );

    if (res.modifiedCount > 0) {
      return { acquired: true, via: "mongo" };
    }
    return { acquired: false, via: "mongo" };
  }
}

/**
 * Release lock after processing
 */
export async function releaseLock(sessionId) {
  const redisKey = `chat:lock:${sessionId}`;

  try {
    const redis = getRedisClient();
    await redis.del(redisKey);
  } catch (err) {
    console.error("⚠ Redis unavailable, cleaning up Mongo lock:", err);

    await Session.updateOne(
      { session_id: sessionId },
      { $unset: { lock: "", lockExpireAt: "" } }
    );
  }
}

/**
 * Force unlock expired Mongo locks (cleanup job)
 */
export async function forceUnlockExpired() {
  await Session.updateMany(
    { lock: true, lockExpireAt: { $lt: new Date() } },
    { $unset: { lock: "", lockExpireAt: "" } }
  );
}
