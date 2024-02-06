import Chart from "./Chart";
import { ChartKeys } from "../../store";
import { useNavigate } from "react-router-dom";

export default function Charts() {
  const navigate = useNavigate();

  const handleOnChartClick = (chartKey: ChartKeys) => {
    console.log("hello", chartKey);
    navigate(`/chart/${chartKey}`);
  };

  return (
    <div className="flex flex-col space-y-4 mt-6">
      <div className="flex space-x-4">
        <Chart
          onClick={() => handleOnChartClick(ChartKeys.SALARY_WITH_CATEGORY)}
          chartKey={ChartKeys.SALARY_WITH_CATEGORY}
          mode="view"
        />
        <Chart
          onClick={() => handleOnChartClick(ChartKeys.CATEGORY_DISTRIBUTION)}
          chartKey={ChartKeys.CATEGORY_DISTRIBUTION}
          mode="view"
        />
      </div>
      <div className="flex space-x-4">
        <Chart
          onClick={() => handleOnChartClick(ChartKeys.COMPANY_SIZE)}
          chartKey={ChartKeys.COMPANY_SIZE}
          mode="view"
        />
        <Chart
          onClick={() => handleOnChartClick(ChartKeys.SALARY_DISTRIBUTION)}
          chartKey={ChartKeys.SALARY_DISTRIBUTION}
          mode="view"
        />
        <Chart
          onClick={() => handleOnChartClick(ChartKeys.SALARY_TREND)}
          chartKey={ChartKeys.SALARY_TREND}
          mode="view"
        />
      </div>
    </div>
  );
}
