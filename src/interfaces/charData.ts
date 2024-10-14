export interface ChartData {
  legend: {
    top: string;
    data: string[];
  };
  xAxis: {
    data: string[];
  }[];
  series: {
    name: string;
    type: string;
    data: {
      value: number;
    }[];
  }[];
  yAxis: {
    name: string;
  }[];
}
