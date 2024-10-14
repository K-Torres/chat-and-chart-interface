import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import LoadingDots from "./LoadingDots";

const LoadingState: React.FC = () => (
  <Box mb={2} textAlign={"left"}>
    <Box display="flex" alignItems="end" gap="8px">
      <Avatar sx={{ bgcolor: "transparent" }} src="/icons/logo.svg" />
      <Box
        sx={{
          padding: 2,
          borderRadius: 2,
          backgroundColor: "#F4F4F4",
          color: "black",
          textAlign: "left",
          maxWidth: "100%",
        }}
      >
        <LoadingDots />
      </Box>
    </Box>
    <Typography
      variant="caption"
      color="textSecondary"
      sx={{ marginX: "50px" }}
    >
      <strong> Pharus </strong>Just now
    </Typography>
  </Box>
);

export default LoadingState;
