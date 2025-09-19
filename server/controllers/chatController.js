import { v4 as uuidv4 } from "uuid";
import { saveSession, updateSessionStatus } from "../services/sessionService.js";
import { saveMessage, fetchMessagesBySession } from "../services/messageService.js";
import { getCachedHistory, cacheHistoryAppend, cacheSessionMeta } from "../db/redisService.js";
import { streamCompletion } from "../services/openrouterService.js";
import profileData from "../profileContext.js"

const SYSTEM_PROMPT_TEMPLATE = (profileContext) => `
You are a helpful assistant with access ONLY to the provided PROFILE_CONTEXT (below).
You must answer strictly using only the facts in PROFILE_CONTEXT.
- If the user asks something not contained in PROFILE_CONTEXT, reply: "I don't have that information in the provided profile. I can only answer questions about the profile's content."
- Do NOT invent, extrapolate, or add external facts.
- Keep answers concise and point to the relevant lines when helpful.
PROFILE_CONTEXT:
${profileContext}
`;

/**
 * Optional endpoint to explicitly start a session.
 */
export async function handleChatStart(req, res) {
  try {
    const { user_id = "anonymous" } = req.body;
    const session_id = uuidv4();
    await saveSession({ session_id, user_id, status: "active", created_at: new Date() });
    // cache session meta
    await cacheSessionMeta(session_id, { user_id, created_at: new Date().toISOString() });
    return res.json({ session_id, status: "active" });
  } catch (err) {
    console.error("start session error", err);
    return res.status(500).json({ error: "start failed" });
  }
}

/**
 * Main SSE endpoint that streams model tokens back to client.
 * Expected body: { session_id, message }
 */
export async function handleChatStream(req, res) {
  try {
    const { session_id: providedSessionId, message } = req.body;
    const profileContext = JSON.stringify(profileData);
    if (!message) return res.status(400).json({ error: "Missing message" });

    // get or create session_id
    const session_id = providedSessionId || uuidv4();

    // fetch history (try redis first, fallback to mongo)
    let history = await getCachedHistory(session_id);
    if (!history) {
      history = await fetchMessagesBySession(session_id); // returns array of { role, content, timestamp }
      // cache history (only recent messages for quick access)
      if (history && history.length) {
        // store minimal representation
        await cacheHistoryAppend(session_id, history.map(m => ({ role: m.role, content: m.content, timestamp: m.timestamp })));
      }
    }

    // Save the user message immediately to DB and cache
    const userMsg = {
      session_id,
      role: "user",
      content: message,
      timestamp: new Date().toISOString(),
    };
    await saveMessage(userMsg);
    await cacheHistoryAppend(session_id, userMsg);

    // Build messages array for the model
    const systemPrompt = SYSTEM_PROMPT_TEMPLATE(profileContext);
    const modelMessages = [
      { role: "system", content: systemPrompt },
      ...(Array.isArray(history) ? history.map(h => ({ role: h.role, content: h.content })) : []),
      { role: "user", content: message },
    ];

    // Setup SSE response
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Stream from OpenRouter, write incremental deltas to SSE, and accumulate reply
    let assistantBuffer = "";

    const onDelta = async (delta) => {
      // delta is string content chunk
      assistantBuffer += delta;
      // send to client as SSE data event
      res.write(`data: ${JSON.stringify(delta)}\n\n`);
      // Optionally update a partial cache (not persisted fully until end)
    };

    const onDone = async () => {
      // send end event
      res.write(`event: end\ndata: [DONE]\n\n`);
      // persist assistant message to DB and cache
      const assistantMsg = {
        session_id,
        role: "assistant",
        content: assistantBuffer,
        timestamp: new Date().toISOString(),
      };
      await saveMessage(assistantMsg);
      await cacheHistoryAppend(session_id, assistantMsg);
      res.end();
    };

    const onError = async (err) => {
      console.error("stream error", err);
      // notify client of error
      res.write(`event: error\ndata: ${JSON.stringify({ error: "stream_error" })}\n\n`);
      res.end();
    };

    // Kick off streaming call to OpenRouter
    await streamCompletion({
      messages: modelMessages,
      onDelta,
      onDone,
      onError,
    });

  } catch (err) {
    console.error("chat stream error", err);
    // be careful: SSE already might be open
    try {
      if (!res.headersSent) {
        return res.status(500).json({ error: "Streaming failed" });
      } else {
        res.write(`event: error\ndata: ${JSON.stringify({ error: "server_error" })}\n\n`);
        res.end();
      }
    } catch (e) {
      console.error("failed to respond after error", e);
    }
  }
}

/**
 * Close session
 * body: { session_id }
 */
export async function handleChatClose(req, res) {
  try {
    const { session_id } = req.body;
    if (!session_id) return res.status(400).json({ error: "missing session_id" });
    await updateSessionStatus(session_id, "closed");
    return res.json({ status: "success", message: "session closed successfully" });
  } catch (err) {
    console.error("close session error", err);
    return res.status(500).json({ error: "close failed" });
  }
}
