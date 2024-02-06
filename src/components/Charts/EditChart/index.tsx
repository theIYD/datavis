import { useParams } from "react-router-dom";
import Chart from "../Chart";

export default function EditChart() {
  const params = useParams();
  const chartKey = params.id;

  return chartKey ? (
    <div className="flex">
      <Chart chartKey={chartKey} mode="edit" />
    </div>
  ) : (
    <div className="text-center mt-4">Chart not found</div>
  );
}
