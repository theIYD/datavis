import SalaryWithCategoryChart from "./SalaryWithCategory";
import CategoryDistribution from "./CategoryDistribution";
import CompanySize from "./CompanySize";
import SalaryDistribution from "./SalaryDistribution";
import SalaryYearTrend from "./SalaryYearTrend";
import { Data } from "../../types";

export default function Charts({ data }: { data: Data[] }) {
  return (
    <div className="flex flex-col space-y-4 mt-6">
      <div className="flex space-x-4">
        <SalaryWithCategoryChart data={data} />
        <CategoryDistribution data={data} />
      </div>
      <div className="flex space-x-4">
        <CompanySize data={data} />
        <SalaryDistribution data={data} />
        <SalaryYearTrend data={data} />
      </div>
    </div>
  );
}
