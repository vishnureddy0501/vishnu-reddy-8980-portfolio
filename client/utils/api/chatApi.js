export async function sendChatMessage(session_id, message) {
	if (!message.trim() || !session_id) return null;
  
	const payload = { message, session_id };
	const url =
	  process.env.NODE_ENV === "development"
		? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
		: process.env.NEXT_PUBLIC_PROD_BACKEND_URL;
  
	const response = await fetch(`${url}/chat`, {
	  method: "POST",
	  headers: { "Content-Type": "application/json" },
	  body: JSON.stringify(payload),
	});
  
	if (!response.ok) throw new Error("Network response was not ok");
	return response.body;
  }
  
  export async function closeChatSession(session_id) {
	if (!session_id) return;
	const url =
	  process.env.NODE_ENV === "development"
		? process.env.NEXT_PUBLIC_DEV_BACKEND_URL
		: process.env.NEXT_PUBLIC_PROD_BACKEND_URL;
  
	try {
	  await fetch(`${url}/chat/close`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ session_id }),
	  });
	} catch (error) {
	  console.error("Error closing session:", error);
	}
  }
  