import { ChartKeys, useDataStore } from "../../../store";
import UIChart from "../../ui/Chart";

export default function SalaryYearTrend() {
  const { salaries } = useDataStore(
    (state) => state.charts[ChartKeys.SALARY_TREND]
  ) as { salaries: number[] };

  const trendChartOptions = {
    xaxis: {
      categories: Object.keys(salaries),
      title: {
        text: "Year",
      },
    },
    yaxis: {
      title: {
        text: "Total Salary",
      },
    },
  };

  const trendChartSeries = [
    {
      name: "Total Salary",
      data: Object.values(salaries),
    },
  ];

  return (
    <UIChart
      options={trendChartOptions}
      series={trendChartSeries}
      type="line"
      // height={350}
    />
  );
}
