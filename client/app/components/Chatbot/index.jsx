"use client";
import { useState, useRef, useEffect } from "react";
import GlowCard from "../helper/glow-card";
import { FiSend, FiX } from "react-icons/fi";
import { marked } from "marked";
import DOMPurify from "dompurify";
import axios from "axios";

export default function ChatWidget() {
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

  const displayMarked = (data) => {
   return DOMPurify.sanitize(marked.parse(data));
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
        message: input,
        history: messages.map((m) => ({ role: m.role, content: m.text })), // full history
      });
    
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
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
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-[#1a1443]">
                {messages.map((msg, idx) => (
                    <div
                    key={idx}
                    className={`p-2 rounded-xl max-w-[85%] break-words ${msg.role === "user"
                      ? "self-end bg-gradient-to-br from-[#8433ff] via-[#8f43ff] to-[#16f2b3] text-white"
                      : "self-start bg-[#25213b] text-gray-300"
                      }`}
                      dangerouslySetInnerHTML={{ __html: displayMarked(msg.text) }}
                  />
                ))}

                {loading && (
                  <div className="flex gap-2 items-center self-start mt-1">
                    <span className="w-2 h-2 bg-[#8f43ff] rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-[#16f2b3] rounded-full animate-bounce delay-200"></span>
                    <span className="w-2 h-2 bg-[#8433ff] rounded-full animate-bounce delay-400"></span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={sendMessage} className="flex gap-2 p-3 border-t border-[#25213b]">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#1a1443] border border-[#25213b] rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-br from-[#8433ff] via-[#8f43ff] to-[#16f2b3] p-2 rounded-xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
                >
                  <FiSend className="text-white" size={18} />
                </button>
              </form>
            </div>
          </GlowCard>
        </div>
      )}
    </>
  );
}
