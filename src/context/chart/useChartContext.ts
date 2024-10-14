// src/context/useChartContext.ts
import { useContext } from "react";
import { ChartContext } from "./ChartContext"; // Adjust the import based on your file structure
import { ChartContextProps } from "./ChartContext"; // Import the ChartContextProps type

export const useChartContext = (): ChartContextProps => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChartContext must be used within a ChartProvider");
  }
  return context;
};
