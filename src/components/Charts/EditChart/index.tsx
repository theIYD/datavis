import { useNavigate, useParams } from "react-router-dom";
import Chart from "../Chart";
import { ChartData, ChartTypes, useDataStore } from "../../../store";
import Header from "../../ui/Header";
import { useState } from "react";

export default function EditChart() {
  const params = useParams();
  const navigate = useNavigate();
  const chartKey = params.id;

  const { chart, editChart } = useDataStore((state) => {
    return {
      chart: chartKey ? state.charts[chartKey] : undefined,
      editChart: state.editChart,
    };
  });
  const [chartType, setChartType] = useState<string | undefined>(
    chart?.config?.type
  );

  const handleOnChangeChartType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChartType(event.target.value);
  };

  const handleUpdateChart = () => {
    const updateChart: ChartData = {
      ...chart,
      config: {
        ...chart?.config,
        // @ts-expect-error: fix type later
        type: chartType,
      },
    };

    if (chartKey) {
      editChart(updateChart, chartKey);
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      {chartKey ? (
        <div className="flex relative top-32">
          <Chart chartKey={chartKey} mode="edit" width="100%" height={600} />
          <div className="flex flex-col w-full flex-1 ml-14 relative top-10 space-y-4">
            <h1 className="font-bold text-2xl">Edit Chart</h1>
            <input
              type="text"
              placeholder="Chart name"
              className="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="About the data"
              rows={10}
            />
            <div className="flex items-center space-x-4">
              <select
                onChange={handleOnChangeChartType}
                className="select select-bordered w-full max-w-xs"
                value={chartType}
              >
                {ChartTypes.map((chartType) => (
                  <option key={chartType}>{chartType}</option>
                ))}
              </select>
              <button
                onClick={handleUpdateChart}
                className="btn btn-neutral flex-1"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-4">Chart not found</div>
      )}
    </>
  );
}
