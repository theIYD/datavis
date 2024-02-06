import { Props } from "react-apexcharts";
import { useDataStore } from "../../../store";
import UIChart from "../../ui/Chart";

export default function Chart({
  chartKey,
  onClick,
  mode,
  ...restProps
}:
  | {
      chartKey: string;
      onClick?: React.MouseEventHandler;
      mode: "edit" | "view";
    }
  | Props) {
  const chart = useDataStore((state) => {
    const chart = state.charts[chartKey];
    return chart;
  });

  console.log("chart in edit", chart);

  const config = chart.config;
  const ChartComponent = (
    <UIChart
      options={config?.options}
      series={config?.series as ApexAxisChartSeries}
      type={config?.type}
      {...restProps}
    />
  );

  return mode === "view" ? (
    <div
      onClick={onClick}
      className="flex-1 cursor-pointer rounded-lg border border-solid border-gray-200 p-2 h-fit ease-in transition hover:shadow-md"
    >
      {ChartComponent}
    </div>
  ) : (
    <div className="flex-1">{ChartComponent}</div>
  );
}
