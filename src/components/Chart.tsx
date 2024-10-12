import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import axios from "axios";
import { Box } from "@mui/material";

const Chart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let chartInstance: echarts.ECharts | null = null;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/RamPonce7/1a59be1fe758223e5430b4e36c17ccb0/raw/8ae9067a039e456fa4f386bda33b8174c4b57458/chart.json"
        );

        const { xAxis, series } = response.data;

        if (chartRef.current) {
          chartInstance = echarts.init(chartRef.current);

          const option = {
            xAxis: {
              type: "category",
              data: xAxis[0].data,
            },
            yAxis: {
              type: "value",
            },
            series: series.map((s: any) => ({
              name: s.name,
              type: "bar",
              data: s.data.map((item: any) => item.value),
            })),
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            legend: {
              top: "bottom",
              data: series.map((s: any) => s.name),
            },
          };

          chartInstance.setOption(option);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    return () => {
      if (chartInstance) {
        chartInstance.dispose();
      }
    };
  }, []);

  return (
    <Box>
      <Box
        sx={{ height: "100vh", width: "100%", backgroundColor: "#fff" }}
        ref={chartRef}
      ></Box>
    </Box>
  );
};

export default Chart;
