// routes/email.js
import express from "express";
import { sendEmailHandler } from "../services/emailService.js";

const router = express.Router();

// POST /email/send
router.post("/send", sendEmailHandler);

export default router;
