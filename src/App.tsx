import MainProvider from "./context/MainProvider";
import { Box, Container } from "@mui/material";
import React from "react";
import Chart from "./components/chart/Chart";
import Chat from "./components/chat/ChatContainer";

const App: React.FC = () => {
  return (
    <Container>
      <Box display="flex" sx={{ width: "100%", height: "100vh" }}>
        <MainProvider>
          <Box flex={3}>
            <Chart />
          </Box>
          <Chat />
        </MainProvider>
      </Box>
    </Container>
  );
};

export default App;
