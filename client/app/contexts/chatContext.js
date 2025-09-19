"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [session_id, setSessionId] = useState(null);

  useEffect(() => {
    const initSession = async () => {
      try {
        const url = process.env.NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
        const res = await fetch(`${url}/chat/start`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.session_id) setSessionId(data.session_id);
      } catch (err) {
        console.error("Session init failed", err);
      }
    };

    if (!session_id) initSession();
  }, [session_id]);

  return (
    <ChatContext.Provider value={{ session_id, setSessionId }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatSession() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChatSession must be used inside ChatProvider");
  return ctx;
}
