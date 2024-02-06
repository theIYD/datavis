import SalaryWithCategoryChart from "./SalaryWithCategory";
import CategoryDistribution from "./CategoryDistribution";
import CompanySize from "./CompanySize";
import SalaryDistribution from "./SalaryDistribution";
import SalaryYearTrend from "./SalaryYearTrend";

export default function Charts() {
  return (
    <div className="flex flex-col space-y-4 mt-6">
      <div className="flex space-x-4">
        <SalaryWithCategoryChart />
        <CategoryDistribution />
      </div>
      <div className="flex space-x-4">
        <CompanySize />
        <SalaryDistribution />
        <SalaryYearTrend />
      </div>
    </div>
  );
}
