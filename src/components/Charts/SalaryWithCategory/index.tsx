import { ChartKeys, useDataStore } from "../../../store";
import UIChart from "../../ui/Chart";

export default function SalaryWithCategoryChart() {
  const { categories, salaries } = useDataStore(
    (state) => state.charts[ChartKeys.SALARY_WITH_CATEGORY]
  ) as { categories: string[]; salaries: number[] };

  const props = {
    options: {
      xaxis: {
        categories: categories,
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Avg Salary",
        data: salaries,
      },
    ],
  };

  return <UIChart options={props.options} series={props.series} type="bar" />;
}
