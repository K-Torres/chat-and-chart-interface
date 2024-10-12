import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Button,
  Fab,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

interface Message {
  user: string;
  message: string;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg: string) => {
    const userMessage = {
      user: "You",
      message: msg,
      timestamp: new Date().toLocaleString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await axios.get(
        "https://tenant-api-448160755331.us-central1.run.app/response_generator"
      );

      const generatedMessage = {
        user: "API",
        message: response.data.data,
        timestamp: response.data.timestamp,
      };

      setMessages((prev) => [...prev, generatedMessage]);
    } catch (error) {
      console.error("Error fetching response from API:", error);
    } finally {
      setLoading(false);
    }
  };

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
        right: 0,
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {isOpen ? (
        <Paper
          elevation={3}
          sx={{
            width: 300,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            p={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            boxShadow={3}
          >
            <IconButton>
              <AddIcon />
              <Typography variant="h6">New chat</Typography>
            </IconButton>

            <Box display="flex" alignItems="center">
              <IconButton>
                <MoreVertIcon />
              </IconButton>
              <IconButton onClick={() => setIsOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          <Box p={2} sx={{ overflowY: "auto", flexGrow: 1 }}>
            {messages.map((msg, index) => (
              <Box
                key={index}
                mb={2}
                textAlign={msg.user === "You" ? "right" : "left"}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: msg.user === "You" ? "row-reverse" : "row",
                    alignItems: "flex-end",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: msg.user === "You" ? "blue" : "gray",
                      ml: msg.user === "You" ? 1 : 0,
                      mr: msg.user !== "You" ? 1 : 0,
                    }}
                  >
                    {msg.user[0]}
                  </Avatar>

                  <Box
                    sx={{
                      maxWidth: "70%",
                      padding: 1,
                      borderRadius: 2,
                      backgroundColor:
                        msg.user === "You" ? "blue" : "lightgray",
                      color: msg.user === "You" ? "white" : "black",
                    }}
                  >
                    <Typography variant="body1">{msg.message}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {msg.timestamp}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}

            {loading && (
              <Box mb={2} textAlign={"left"}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "gray",
                      ml: 0,
                      mr: 0,
                    }}
                  >
                    P
                  </Avatar>

                  <Box
                    sx={{
                      maxWidth: "70%",
                      padding: 1,
                      borderRadius: 2,
                      backgroundColor: "lightgray",
                      color: "black",
                    }}
                  >
                    <Typography variant="body1">{". . ."}</Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          <form
            onSubmit={handleSubmit}
            style={{ padding: "10px", display: "flex" }}
          >
            <TextField
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              size="small"
              variant="outlined"
              sx={{ marginRight: 1 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </form>
        </Paper>
      ) : (
        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
          onClick={() => setIsOpen(true)}
        >
          <ChatBubbleOutlineIcon />
        </Fab>
      )}
    </Box>
  );
};

export default Chat;
