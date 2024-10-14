import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";

interface RevenueDetailsProps {
  totalRevenue: number | null;
  loading: boolean;
  error: string | null;
}

const RevenueDetails: React.FC<RevenueDetailsProps> = ({
  totalRevenue,
  loading,
  error,
}) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" marginBottom={1}>
        Revenue
      </Typography>
      <Paper
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          mb: 3,
          borderRadius: 3,
        }}
        elevation={1}
      >
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        ) : (
          <>
            <Typography variant="h6" fontWeight="400" marginBottom={3}>
              E-Commerce Revenue
            </Typography>
            <Typography variant="h3" fontWeight="bold">
              ${totalRevenue?.toLocaleString() || 0}
            </Typography>
            <Button
              variant="outlined"
              color="error"
              sx={{
                mt: 1,
                borderRadius: 5,
                borderColor: "#E13737",
                gap: ".5rem",
              }}
            >
              <Box
                component="img"
                src="/icons/red-arrow-down.svg"
                alt="Settings"
              />{" "}
              -36.3%
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default RevenueDetails;
