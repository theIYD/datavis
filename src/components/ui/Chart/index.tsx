import Chart, { Props } from "react-apexcharts";

export default function UIChart(props: React.PropsWithChildren<Props>) {
  return (
    <div className="border border-solid border-gray-200 rounded-lg p-2 h-fit">
      <Chart {...props} />
    </div>
  );
}
