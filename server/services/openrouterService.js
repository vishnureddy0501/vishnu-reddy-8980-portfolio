import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.MODEL || "gpt-oss-120b";
const TEMPERATURE = parseFloat(process.env.TEMPERATURE || "0.0");
const MAX_TOKENS = parseInt(process.env.STREAM_MAX_TOKENS || "500", 10);

export async function streamCompletion({ messages, onDelta, onDone, onError }) {
  try {
    const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        stream: true,
        temperature: TEMPERATURE,
        max_tokens: MAX_TOKENS,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`OpenRouter returned ${resp.status}: ${text}`);
    }

    let buffer = "";
    for await (const chunk of resp.body) {
      buffer += chunk.toString();
      const events = buffer.split("\n\n");
      buffer = events.pop(); // keep partial
      for (const ev of events) {
        if (!ev.trim()) continue;
        if (ev.startsWith("data: ")) {
          const dataStr = ev.replace("data: ", "").trim();
          if (dataStr === "[DONE]") {
            await onDone();
            return;
          }
          try {
            const parsed = JSON.parse(dataStr);
            const delta = parsed?.choices?.[0]?.delta?.content;
            if (delta) {
              await onDelta(delta);
            }
          } catch (err) {
            console.error("parse error in openrouter stream", err);
            // ignore parse errors, continue
          }
        }
      }
    }
    // if we exit loop without seeing [DONE]
    await onDone();
  } catch (err) {
    await onError(err);
  }
}
