import axios from "axios";
import { TENANT_API_BASE_URL, GITHUB_USERCONTENT_API_BASE_URL } from "./config";
import { ChartData } from "../interfaces/charData";

export const getRandomText = async (): Promise<string> => {
  try {
    const response = await axios.get(
      `${TENANT_API_BASE_URL}/response_generator`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching random text from API:", error);
    throw new Error("Failed to fetch random text from API.");
  }
};

export const getChartData = async (): Promise<ChartData> => {
  try {
    const response = await axios.get(
      `${GITHUB_USERCONTENT_API_BASE_URL}/RamPonce7/1a59be1fe758223e5430b4e36c17ccb0/raw/8ae9067a039e456fa4f386bda33b8174c4b57458/chart.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching chart data from API:", error);
    throw new Error("Failed to fetch chart data from API.");
  }
};
