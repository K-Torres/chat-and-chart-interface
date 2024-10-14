import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  OutlinedInput,
} from "@mui/material";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  loading,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", width: "100%" }}>
      <Box width={"90%"} margin="auto" paddingBottom={2}>
        <FormControl
          sx={{ paddingTop: "8px", borderTop: "1px solid rgba(0, 0, 0, 0.16)" }}
          fullWidth
          variant="outlined"
        >
          <OutlinedInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            size="small"
            disabled={loading}
            endAdornment={
              loading ? (
                <CircularProgress size={24} sx={{ margin: 1 }} />
              ) : (
                <Button
                  type="submit"
                  sx={{
                    padding: 0,
                    minWidth: "auto",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <Box
                    component="img"
                    src="/icons/arrow-up.svg"
                    sx={{ width: 24, height: 24 }}
                  />
                </Button>
              )
            }
            sx={{
              backgroundColor: "transparent",
              borderRadius: "8px",
              marginY: "12px",
              position: "relative",
              zIndex: 1,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                borderRadius: "8px",
                padding: "1px",
                background: "linear-gradient(to bottom, #CC72FF, #5153CB)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              },
            }}
          />
        </FormControl>
      </Box>
    </form>
  );
};

export default ChatInput;
