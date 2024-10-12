import { createContext, ReactNode, useState } from "react";

interface ChartContextProps {
  chartData: any;
  setChartData: (data: any) => void;
}

export const ChartContext = createContext<ChartContextProps | undefined>(
  undefined
);

export const ChartProvider = ({ children }: { children: ReactNode }) => {
  const [chartData, setChartData] = useState<any>([]);

  return (
    <ChartContext.Provider value={{ chartData, setChartData }}>
      {children}
    </ChartContext.Provider>
  );
};
