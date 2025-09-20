"use client";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import GlowCard from "../helper/glow-card";
import { useChatSession } from "../../contexts/chatContext";
import MessageList from "./MessageList";
import InputBox from "./InputBox";
import { sendChatMessage, closeChatSession } from "@/utils/api/chatApi";

export default function ChatWidget() {
  const { session_id } = useChatSession();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! Ask me anything about Vishnu's profile." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);


  const resetChatState = () => {
    setMessages([{ role: "assistant", text: "Hi! Ask me anything about Vishnu's profile." }]);
    setInput("");
    setLoading(false);
  };

  // Close session when popup closes
  const toggleChat = async () => {
    if (open && session_id) {
      await closeChatSession(session_id);
      resetChatState(); // reset after closing
    }
    setOpen(!open);
  };

  // Close session when component unmounts
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
          if (data === "[DONE]") break;

          try {
            const token = JSON.parse(data);
            assistantText += token;

            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                role: "assistant",
                text: assistantText,
              };
              return updated;
            });
          } catch (err) {
            console.error("JSON parse error", err, data);
          }
        }
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Error contacting server." },
      ]);
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
        <div className="fixed top-0 left-0 sm:bottom-20 sm:right-6 sm:top-[unset] sm:left-[unset] z-[9999]">
          <GlowCard className="flex flex-col h-full shadow-2xl bg-[#1a1443] border border-[#25213b] rounded-2xl overflow-hidden">
            <div className="h-screen sm:h-[500px] w-[98vw] sm:w-96 flex flex-col">
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

              {/* Input */}
              <InputBox input={input} setInput={setInput} onSend={sendMessage} loading={loading} />
            </div>
          </GlowCard>
        </div>
      )}
    </>
  );
}
