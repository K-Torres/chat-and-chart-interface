// src/context/ChartContext.tsx
import React, { createContext, ReactNode, useState } from "react";
import { ChartData } from "@/interfaces/charData";
import { getChartData } from "@/services/api";

export interface ChartContextProps {
  chartData: ChartData | null;
  totalRevenue: number | null;
  loading: boolean;
  error: string | null;
  fetchChartData: () => void;
}

export const ChartContext = createContext<ChartContextProps | undefined>(
  undefined
);

export const ChartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [totalRevenue, setTotalRevenue] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateTotalRevenue = (data: ChartData | null): number => {
    if (!data || !data.series) return 0;

    return data.series.reduce(
      (sum: number, s: { data: { value: number }[] }) => {
        return (
          sum +
          s.data.reduce(
            (subSum: number, item: { value: number }) => subSum + item.value,
            0
          )
        );
      },
      0
    );
  };

  const fetchChartData = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getChartData();
      setChartData(data);
      setTotalRevenue(calculateTotalRevenue(data));
    } catch (err) {
      console.error("Failed to fetch chart data:", err);
      setError("Failed to fetch chart data.");
      setTotalRevenue(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChartContext.Provider
      value={{ chartData, totalRevenue, loading, error, fetchChartData }}
    >
      {children}
    </ChartContext.Provider>
  );
};
