import { Box, Paper, Typography } from "@mui/material";
import { useChartContext } from "@/context/chart/useChartContext";
import { useChatContext } from "@/context/chat/useChatContext";
import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { mapTimeToMonth } from "../../lib/dateUtils";
import { zIndex } from "../../lib/zIndexes";
import ChartHeader from "./Header";
import RevenueDetails from "./RevenueDetails";

const Chart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { chartData, loading, error, totalRevenue, fetchChartData } =
    useChartContext();
  const { isChatOpen } = useChatContext();

  useEffect(() => {
    fetchChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let chartInstance: echarts.ECharts | null = null;

    if (chartData && chartRef.current) {
      chartInstance = echarts.init(chartRef.current);
      const xAxisData = chartData.xAxis[0].data.map(mapTimeToMonth);

      const option = {
        grid: { left: "2%", right: "2%", containLabel: true },
        xAxis: { type: "category", data: xAxisData },
        yAxis: { type: "value", name: "Total" },
        series: chartData.series.map((s, index) => ({
          name: s.name === "ecomm_sales" ? "E-commerce" : "Wholesale",
          type: "bar",
          data: s.data.map((item) => ({
            value: item.value,
            itemStyle: {
              color: index === 0 ? "#5A8CFE" : "#CC72E9",
              borderRadius: [5, 5, 0, 0],
            },
          })),
          barCategoryGap: "70%",
          barGap: "0%",
        })),
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        legend: {
          top: "bottom",
          data: chartData.series.map((s, index) => ({
            name: s.name === "ecomm_sales" ? "E-commerce" : "Wholesale",
            itemStyle: { color: index === 0 ? "#5A8CFE" : "#CC72E9" },
          })),
        },
      };

      chartInstance.setOption(option);
      if (isChatOpen) chartInstance.resize();
    }

    return () => chartInstance?.dispose();
  }, [chartData, isChatOpen]);

  return (
    <Box
      sx={{
        position: "relative",
        padding: 2,
        width: isChatOpen
          ? { xs: "65vw", lg: "71vw", xl: "75vw" }
          : { xs: "90vw", xl: "95vw" },
        zIndex: isChatOpen ? zIndex.chart : zIndex.default,
        justifyContent: "space-around",
      }}
    >
      <ChartHeader />
      <RevenueDetails
        totalRevenue={totalRevenue}
        loading={loading}
        error={error}
      />
      <Paper sx={{ backgroundColor: "#fff", borderRadius: 3 }} elevation={1}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt={2}
          ml={6}
          mr={5}
        >
          <Typography variant="h6" color="#000">
            Revenues
          </Typography>
          <Box
            component="img"
            src="/icons/gray-logo.svg"
            alt="Settings"
            sx={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              padding: "8px",
              background: "#F4F4F4",
            }}
          />
        </Box>
        <Box
          sx={{ zIndex: 1, height: "60vh", width: "100%", paddingBottom: 4 }}
          ref={chartRef}
        />
      </Paper>
    </Box>
  );
};

export default Chart;
