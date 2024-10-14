import React from "react";
import { Box } from "@mui/material";

const LoadingDots: React.FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <img
        src="/icons/colored-dot.svg"
        alt="Loading"
        style={{
          width: 10,
          height: 10,
          animation: "bounce 0.6s infinite alternate",
        }}
      />
      <img
        src="/icons/colored-dot.svg"
        alt="Loading"
        style={{
          width: 10,
          height: 10,
          animation: "bounce 0.6s infinite alternate",
          animationDelay: "0.2s",
        }}
      />
      <img
        src="/icons/colored-dot.svg"
        alt="Loading"
        style={{
          width: 10,
          height: 10,
          animation: "bounce 0.6s infinite alternate",
          animationDelay: "0.4s",
        }}
      />
    </Box>
  );
};

export default LoadingDots;
