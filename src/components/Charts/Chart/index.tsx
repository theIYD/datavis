import { useDataStore } from "../../../store";
import UIChart from "../../ui/Chart";

export default function Chart({ chartKey }: { chartKey: string }) {
  const chart = useDataStore((state) => {
    const chart = state.charts[chartKey];
    return chart;
  });

  const config = chart.config;

  return (
    <UIChart
      options={config?.options}
      series={config?.series as ApexAxisChartSeries}
      type={config?.type}
    />
  );
}
