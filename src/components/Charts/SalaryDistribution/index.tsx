import { ChartKeys, useDataStore } from "../../../store";
import UIChart from "../../ui/Chart";

export default function SalaryDistribution() {
  const { salaries } = useDataStore(
    (state) => state.charts[ChartKeys.SALARY_DISTRIBUTION]
  ) as Record<string, number>;

  const props = {
    options: {
      xaxis: {
        categories: Object.keys(salaries),
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
        data: Object.values(salaries),
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
