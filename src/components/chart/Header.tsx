import { Box, Button, Typography } from "@mui/material";

const ChartHeader: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={5}
    >
      <Box>
        <Typography variant="h6" sx={{ opacity: 0.5 }}>
          August 2024
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          Dashboard
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F4F4F4",
          borderRadius: "8px",
          padding: "10px",
          gap: "8px",
          border: "1px solid #EDEEF0",
          textTransform: "none",
        }}
      >
        <img
          src={"/icons/settings.svg"}
          alt="Settings Icon"
          width="24"
          height="24"
        />
        <Typography variant="h6" sx={{ color: "#000", fontSize: "1rem" }}>
          Settings
        </Typography>
      </Button>
    </Box>
  );
};

export default ChartHeader;
