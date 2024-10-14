import { useContext } from "react";
import { ChatContext } from "./ChatContext";
import { ChatContextType } from "./ChatContext";

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
