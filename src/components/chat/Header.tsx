import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

interface ChatHeaderProps {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  isFullscreen,
  toggleFullscreen,
  onClose,
}) => {
  return (
    <Box
      p={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow={3}
    >
      <IconButton
        sx={{
          borderRadius: "8px",
          gap: "8px",
          border: "1px solid #EDEEF0",
          boxShadow: "0px 4px 4px 0px #0000000A",
        }}
      >
        <AddIcon />
        <Typography variant="h6" fontSize=".9rem">
          New chat
        </Typography>
      </IconButton>
      <Box display="flex" alignItems="center">
        <IconButton onClick={toggleFullscreen}>
          {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatHeader;
