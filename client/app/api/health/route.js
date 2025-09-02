export async function GET() {
	return new Response(
		JSON.stringify({ status: "ok", service: "frontend" }),
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
		}
	);
}
