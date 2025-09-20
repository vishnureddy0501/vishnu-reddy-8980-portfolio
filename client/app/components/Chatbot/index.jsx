"use client";
import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import GlowCard from "../helper/glow-card";
import { useChatSession } from "../../contexts/chatContext";
import MessageList from "./MessageList";
import InputBox from "./InputBox";
import { sendChatMessage, closeChatSession } from "@/utils/api/chatApi";

export default function ChatWidget() {
  const { session_id } = useChatSession();
  const [open, setOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! Ask me anything about Vishnu's profile." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const resetChatState = () => {
    setMessages([{ role: "assistant", text: "Hi! Ask me anything about Vishnu's profile." }]);
    setInput("");
    setLoading(false);
  };

  const toggleChat = async () => {
    if (open && session_id) {
      await closeChatSession(session_id);
      resetChatState();
    }
    setOpen(!open);
  };

  useEffect(() => {
    return () => {
      if (session_id) {
        closeChatSession(session_id);
        resetChatState();
      }
    };
  }, [session_id]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || !session_id) return;
    if (isStreaming) return; // 🚫 block 2nd query
    setIsStreaming(true);

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const responseBody = await sendChatMessage(session_id, input);
      if (!responseBody) return;

      let assistantText = "";
      setMessages((prev) => [...prev, { role: "assistant", text: "" }]);

      const reader = responseBody.getReader();
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));

        for (const line of lines) {
          const data = line.replace("data: ", "").trim();
          if (data === "[DONE]") {
            setLoading(false);
            break;
          }

          try {
            const token = JSON.parse(data);
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
      setIsStreaming(false);
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
        <div className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:right-6 sm:w-96 sm:h-[500px] z-[9999]">
          <GlowCard identifier={'chat-bot-glow-card'} height={'h-[100%]'} className="flex flex-col h-[100dvh] sm:h-full w-full sm:w-full shadow-2xl bg-[#1a1443] border border-[#25213b] rounded-none sm:rounded-2xl">
            {/* Header */}
            <div className="flex flex-col h-[100%]">
              <div className="flex justify-between items-center p-3 border-b border-[#25213b]">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  Vishnu's Profile Chat
                </h3>
                <button onClick={toggleChat} className="text-gray-400 hover:text-white">
                  <FiX size={18} />
                </button>
              </div>

              {/* Messages (scrollable) */}
              <div className="flex-1 overflow-y-auto px-3 py-2">
                <MessageList messages={messages} loading={loading} />
                <div ref={messagesEndRef} />
              </div>

              {/* Input (sticky bottom) */}
              <div className="border-t border-[#25213b] bg-[#1a1443] p-2">
                <InputBox input={input} setInput={setInput} onSend={sendMessage} loading={loading} isStreaming={isStreaming}/>
              </div>
            </div>
          </GlowCard>
        </div>
      )}
    </>
  );
}
