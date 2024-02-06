import { ChartProps } from "../../types";
import UIChart from "../ui/Chart";

export default function SalaryYearTrend({ data }: ChartProps) {
  const salaryTrendData = data.reduce<Record<number, number>>((acc, entry) => {
    const year = entry.work_year;
    acc[year] = Math.round((acc[year] || 0) + entry.salary_in_usd);
    return acc;
  }, {});

  const trendChartOptions = {
    xaxis: {
      categories: Object.keys(salaryTrendData),
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
      data: Object.values(salaryTrendData),
    },
  ];

  return (
    <UIChart
      options={trendChartOptions}
      series={trendChartSeries}
      type="line"
      height={350}
    />
  );
}
