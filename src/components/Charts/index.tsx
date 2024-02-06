import Chart from "./Chart";
import { ChartKeys } from "../../store";

export default function Charts() {
  return (
    <div className="flex flex-col space-y-4 mt-6">
      <div className="flex space-x-4">
        <Chart chartKey={ChartKeys.SALARY_WITH_CATEGORY} />
        <Chart chartKey={ChartKeys.CATEGORY_DISTRIBUTION} />
      </div>
      <div className="flex space-x-4">
        <Chart chartKey={ChartKeys.COMPANY_SIZE} />
        <Chart chartKey={ChartKeys.SALARY_DISTRIBUTION} />
        <Chart chartKey={ChartKeys.SALARY_TREND} />
      </div>
    </div>
  );
}
