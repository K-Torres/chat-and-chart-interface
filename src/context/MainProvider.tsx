import React from "react";
import { ChartProvider } from "./chart/ChartContext";
import { ChatProvider } from "./chat/ChatContext";

const CombinedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ChartProvider>
      <ChatProvider>{children}</ChatProvider>
    </ChartProvider>
  );
};

export default CombinedProvider;
