import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import Chart from "./components/Chart";
import { Container, Box } from "@mui/material";
import { ChartProvider } from "./context/ChartContext";
import { ChatProvider } from "./context/ChatContext";

const App: React.FC = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ width: "100%", height: "100vh" }}
      >
        <ChartProvider>
          <Box flex={1}>
            <Chart />
          </Box>
        </ChartProvider>
        <ChatProvider>
          <Chat />
        </ChatProvider>
      </Box>
    </Container>
  );
};

export default App;
