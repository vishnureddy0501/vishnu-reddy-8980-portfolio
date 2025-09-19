"use client";
import { useState, useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";
import GlowCard from "../helper/glow-card";
import { useChatSession } from "../../contexts/chatContext";
import MessageList from "./MessageList";
import InputBox from "./InputBox";

export default function ChatWidget() {
  const { sessionId } = useChatSession();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! Ask me anything about Vishnu's profile." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const toggleChat = () => setOpen(!open);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || !sessionId) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const payload = { message: input, sessionId };
      const url = process.env.NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
      const response = await fetch(`${url}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      let assistantText = "";
      setMessages((prev) => [...prev, { role: "assistant", text: "" }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));

        for (const line of lines) {
          const data = line.replace("data: ", "").trim();
          if (data === "[DONE]") break;

          try {
            const token = JSON.parse(data); // backend sends stringified chunks
            assistantText += token;

            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: "assistant", text: assistantText };
              return updated;
            });
          } catch (err) {
            console.error("JSON parse error", err, data);
          }
        }
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setMessages((prev) => [...prev, { role: "assistant", text: "Error contacting server." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#8433ff] via-[#8f43ff] to-[#16f2b3] shadow-xl text-white flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        💬
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 z-50">
          <GlowCard className="flex flex-col h-full shadow-2xl bg-[#1a1443] border border-[#25213b] rounded-2xl overflow-hidden">
            <div className="h-[500px] flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-3 border-b border-[#25213b]">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  Vishnu's Profile Chat
                </h3>
                <button onClick={toggleChat} className="text-gray-400 hover:text-white">
                  <FiX size={18} />
                </button>
              </div>

              {/* Messages */}
              <MessageList messages={messages} loading={loading} />
              <div ref={messagesEndRef} />

              {/* Input */}
              <InputBox input={input} setInput={setInput} onSend={sendMessage} loading={loading} />
            </div>
          </GlowCard>
        </div>
      )}
    </>
  );
}
