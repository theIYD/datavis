import { ChartProps } from "../../types";
import UIChart from "../ui/Chart";

export default function SalaryWithCategoryChart({ data }: ChartProps) {
  const jobCategories = [...new Set(data.map((entry) => entry.job_category))];
  const averageSalaries = jobCategories.map((category) => {
    const categorySalaries = data
      .filter((entry) => entry.job_category === category)
      .map((entry) => entry.salary_in_usd);

    const averageSalary =
      categorySalaries.reduce((acc, salary) => acc + salary, 0) /
      categorySalaries.length;
    return Math.floor(averageSalary);
  });

  const props = {
    options: {
      xaxis: {
        categories: jobCategories,
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Avg Salary",
        data: averageSalaries,
      },
    ],
  };

  return (
    <UIChart
      options={props.options}
      series={props.series}
      type="bar"
      width={400}
      height={300}
    />
  );
}
