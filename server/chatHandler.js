import dotenv from "dotenv";
import fetch from "node-fetch"; // we use fetch for OpenRouter
import { PROFILE_CONTEXT } from "./profileContext.js";

dotenv.config();

const MODEL = process.env.MODEL || "gpt-oss-120b";
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// --- System prompt ---
const SYSTEM_PROMPT = `
You are a helpful assistant with access ONLY to the provided PROFILE_CONTEXT (below).
You must answer strictly using only the facts in PROFILE_CONTEXT.
- If the user asks something not contained in PROFILE_CONTEXT, reply: "I don't have that information in the provided profile. I can only answer questions about the profile's content."
- Do NOT invent, extrapolate, or add external facts.
- Keep answers concise and point to the relevant lines when helpful.
PROFILE_CONTEXT:
${PROFILE_CONTEXT}
`;

export async function handleChat(req, res) {
	try {
		const { message, history } = req.body;
		if (!message) return res.status(400).json({ error: "Missing message" });

		const messages = [
			{ role: "system", content: SYSTEM_PROMPT },
			...(Array.isArray(history) ? history : []),
			{ role: "user", content: message },
		];

		// OpenRouter API call
		const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${OPENROUTER_API_KEY}`,
			},
			body: JSON.stringify({
				model: MODEL,
				messages,
				temperature: 0.0,
				max_tokens: 500
			}),
		});

		const data = await response.json();
		const assistantReply = data?.choices?.[0]?.message?.content ?? "";

		res.json({ reply: assistantReply });
	} catch (err) {
		console.error("OpenRouter error", err);
		res.status(500).json({ error: "OpenRouter request failed" });
	}
}
