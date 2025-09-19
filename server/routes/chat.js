import express from "express";
import { handleChatStart, handleChatStream, handleChatClose } from "../controllers/chatController.js";

const router = express.Router();

// Start session (optional if frontend wants explicit start)
router.post("/start", handleChatStart);

// Main streaming chat endpoint (SSE)
router.post("/", handleChatStream);

// Close session
router.post("/close", handleChatClose);

export default router;
