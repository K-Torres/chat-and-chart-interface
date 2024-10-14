import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { useChatContext } from "@/context/chat/useChatContext";
import { zIndex } from "lib/zIndexes";
import ChatHeader from "./Header";
import ChatInput from "./Input";
import LoadingState from "./LoadingState";
import Message from "./Message";

const Chat: React.FC = () => {
  const { messages, loading, error, sendMessage, isChatOpen, toggleChat } =
    useChatContext();
  const [input, setInput] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        height: isFullscreen ? "100vh" : "auto",
        transition: "all 0.5s ease",
        transform: isFullscreen ? "scale(1)" : "scale(0.98)",
        zIndex: isFullscreen ? zIndex.expandedChat : zIndex.chat,
      }}
    >
      {isChatOpen ? (
        <Paper
          elevation={3}
          sx={{
            width: isFullscreen ? "100%" : { xs: "30vw", lg: "25vw", xl: "22vw" },
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.5s ease",
            transform: isFullscreen ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <ChatHeader
            isFullscreen={isFullscreen}
            toggleFullscreen={toggleFullscreen}
            onClose={toggleChat}
          />

          <Box p={2} sx={{ overflowY: "auto", flexGrow: 1 }}>
            {messages.map((msg, index) => (
              <Message
                key={index}
                user={msg.user}
                message={msg.message}
                timestamp={msg.timestamp}
              />
            ))}
            {loading && <LoadingState />}
            {error && (
              <Box mb={2}>
                <Message user="API" message={error} timestamp="" />
              </Box>
            )}
          </Box>

          <ChatInput
            input={input}
            setInput={setInput}
            loading={loading}
            handleSubmit={handleSubmit}
          />
        </Paper>
      ) : (
        <Button
          onClick={toggleChat}
          sx={{
            marginRight: "3%",
          }}
        >
          <img
            src="/icons/logo.svg"
            alt="Chat Logo"
            style={{
              borderRadius: "50%",
              boxShadow:
                "0px 2px 8px 0px rgba(0, 0, 0, 0.36), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)",
              cursor: "pointer",
              width: "56px",
              height: "56px",
            }}
          />
        </Button>
      )}
    </Box>
  );
};

export default Chat;
