// client/pages/api/health.js
export default function handler(req, res) {
	res.status(200).json({ status: "ok", service: "frontend" });
}
