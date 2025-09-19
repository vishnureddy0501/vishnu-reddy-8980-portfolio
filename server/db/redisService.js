import { getRedisClient } from "./redis.js";

/**
 * Cache keys:
 *  - session:meta:<session_id> => JSON meta
 *  - session:history:<session_id> => JSON array of recent messages (list)
 */

const HISTORY_KEY = (session_id) => `session:history:${session_id}`;
const META_KEY = (session_id) => `session:meta:${session_id}`;

export async function cacheSessionMeta(session_id, meta) {
  try {
    const client = getRedisClient();
    await client.set(META_KEY(session_id), JSON.stringify(meta), { EX: 60 * 60 * 24 }); // 24h
  } catch (e) {
    console.warn("redis meta cache failed", e);
  }
}

export async function getCachedHistory(session_id) {
  try {
    const client = getRedisClient();
    const raw = await client.get(HISTORY_KEY(session_id));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.warn("redis getCachedHistory failed", e);
    return null;
  }
}

/**
 * Append to cached history (keeps last N messages)
 */
const MAX_CACHED = 30;
export async function cacheHistoryAppend(session_id, messageOrArray) {
  try {
    const client = getRedisClient();
    let existing = [];
    const raw = await client.get(HISTORY_KEY(session_id));
    if (raw) existing = JSON.parse(raw);
    const toAppend = Array.isArray(messageOrArray) ? messageOrArray : [messageOrArray];
    existing = existing.concat(toAppend).slice(-MAX_CACHED);
    await client.set(HISTORY_KEY(session_id), JSON.stringify(existing), { EX: 60 * 60 * 24 });
  } catch (e) {
    console.warn("redis cacheHistoryAppend failed", e);
  }
}
