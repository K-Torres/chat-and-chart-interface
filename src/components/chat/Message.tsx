import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface MessageProps {
  user: string;
  message: string;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ user, message, timestamp }) => {
  const isUser = user === "You";
  const userName = user === "API" ? "Pharus" : "You";

  return (
    <Box mb={2} textAlign="start">
      <Box display="flex" alignItems="end" gap="8px">
        {user === "API" && (
          <Avatar sx={{ bgcolor: "transparent" }} src="/icons/logo.svg" />
        )}
        <Box
          sx={{
            padding: 1,
            borderRadius: 2,
            backgroundColor: isUser ? "#5A8CFE" : "#F4F4F4",
            color: isUser ? "white" : "black",
            width: "100%",
            maxWidth: "100%",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          <Typography variant="body1">{message}</Typography>
        </Box>
        {isUser && (
          <Avatar sx={{ bgcolor: "transparent" }} src="/icons/avatar.svg" />
        )}
      </Box>
      <Typography
        variant="caption"
        color="textSecondary"
        sx={{ marginX: "50px" }}
      >
        {userName} {timestamp}
      </Typography>
    </Box>
  );
};

export default Message;
