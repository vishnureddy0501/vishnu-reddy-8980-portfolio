"use client";
import { marked } from "marked";
import { useEffect, useRef } from "react";
import DOMPurify from "dompurify";

export default function MessageList({ messages, loading }) {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);
  const displayMarked = (text) => DOMPurify.sanitize(marked.parse(text));

  return (
    <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-[#1a1443]">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-2 rounded-xl max-w-[85%] break-words ${
            msg.role === "user"
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
  );
}
