import { ChartKeys, useDataStore } from "../../../store";
import UIChart from "../../ui/Chart";

export default function CompanySize() {
  const { size } = useDataStore(
    (state) => state.charts[ChartKeys.COMPANY_SIZE]
  ) as Record<string, number>;

  const props = {
    options: {
      labels: Object.keys(size),
      legend: {
        show: true,
      },
    },
    series: Object.values(size),
  };

  return (
    <UIChart
      options={props.options}
      series={props.series}
      type="donut"
      height={310}
    />
  );
}
