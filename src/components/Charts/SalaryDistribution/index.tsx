import { ChartProps } from "../../../types";
import UIChart from "../../ui/Chart";

export default function SalaryDistribution({ data }: ChartProps) {
  const countryStats: Record<
    string,
    { totalSalary: number; employeeCount: number }
  > = {};
  data.forEach((entry) => {
    const country = entry.employee_residence;
    countryStats[country] = countryStats[country] || {
      totalSalary: 0,
      employeeCount: 0,
    };
    countryStats[country].totalSalary += entry.salary_in_usd;
    countryStats[country].employeeCount += 1;
  });

  const averageSalariesByCountry: Record<string, number> = {};
  Object.keys(countryStats).forEach((country) => {
    averageSalariesByCountry[country] = Math.round(
      countryStats[country].totalSalary / countryStats[country].employeeCount
    );
  });

  const props = {
    options: {
      xaxis: {
        categories: Object.keys(averageSalariesByCountry),
        title: {
          text: "Country",
        },
      },
      yaxis: {
        title: {
          text: "Average Salary",
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Average Salary",
        data: Object.values(averageSalariesByCountry),
      },
    ],
  };
  return (
    <UIChart
      options={props.options}
      series={props.series}
      type="bar"
      // height={350}
      // width={600}
    />
  );
}
