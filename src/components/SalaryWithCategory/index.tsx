import { JobData } from "../../mock";
import UIChart from "../ui/Chart";

export default function SalaryWithCategoryChart() {
  const jobCategories = [
    ...new Set(JobData.map((entry) => entry.job_category)),
  ];
  const averageSalaries = jobCategories.map((category) => {
    const categorySalaries = JobData.filter(
      (entry) => entry.job_category === category
    ).map((entry) => entry.salary_in_usd);

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
