import { ChartKeys, useDataStore } from "../../../store";
import UIChart from "../../ui/Chart";

export default function CategoryDistribution() {
  const { categories } = useDataStore(
    (state) => state.charts[ChartKeys.CATEGORY_DISTRIBUTION]
  ) as Record<string, number>;

  const props = {
    options: {
      labels: Object.keys(categories),
    },
    series: Object.values(categories) as number[],
  };

  return <UIChart options={props.options} series={props.series} type="pie" />;
}
