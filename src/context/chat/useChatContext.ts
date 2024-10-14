// src/context/useChatContext.ts
import { useContext } from "react";
import { ChatContext } from "./ChatContext"; // Adjust the import based on your file structure
import { ChatContextType } from "./ChatContext"; // Import the ChatContextType interface

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
