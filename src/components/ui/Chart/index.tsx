import Chart, { Props } from "react-apexcharts";

export default function UIChart(props: React.PropsWithChildren<Props>) {
  return <Chart {...props} />;
}
