import { useContext } from "react";
import { ChartContext } from "./ChartContext";
import { ChartContextProps } from "./ChartContext";

export const useChartContext = (): ChartContextProps => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChartContext must be used within a ChartProvider");
  }
  return context;
};
