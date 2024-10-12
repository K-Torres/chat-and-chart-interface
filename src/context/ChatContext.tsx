import { createContext, useState, ReactNode } from "react";

interface Message {
  user: string;
  message: string;
  timestamp: string;
}

interface ChatContextProps {
  messages: Message[];
  addMessage: (user: string, message: string) => void;
}

export const ChatContext = createContext<ChatContextProps | undefined>(
  undefined
);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (user: string, message: string) => {
    const timestamp = new Date().toISOString();
    setMessages([...messages, { user, message, timestamp }]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
