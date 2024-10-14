import React, { createContext, useState } from "react";
import { getRandomText } from "@/services/api";

export interface Message {
  user: string;
  message: string;
  timestamp: string;
}

export interface ChatContextType {
  messages: Message[];
  loading: boolean;
  error: string | null;
  isChatOpen: boolean;
  sendMessage: (msg: string) => void;
  toggleChat: () => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

const createMessage = (user: string, message: string): Message => ({
  user,
  message,
  timestamp: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
});

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isChatOpen, setIsOpen] = useState(false);

  const sendMessage = async (msg: string) => {
    const userMessage = createMessage("You", msg);
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const apiMessage = await getRandomText();
      const generatedMessage = createMessage("API", apiMessage);
      setMessages((prev) => [...prev, generatedMessage]);
    } catch {
      setError("An error occurred while generating the message.");
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ChatContext.Provider
      value={{ messages, loading, error, sendMessage, isChatOpen, toggleChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};
