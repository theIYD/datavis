import { JobData } from "../../mock";
import UIChart from "../ui/Chart";

export default function CategoryDistribution() {
  const jobCounts: Record<string, number> = {};
  JobData.forEach((entry) => {
    jobCounts[entry.job_category] = (jobCounts[entry.job_category] || 0) + 1;
  });

  const props = {
    options: {
      labels: Object.keys(jobCounts),
    },
    series: Object.values(jobCounts) as number[],
  };

  return (
    <UIChart
      options={props.options}
      series={props.series}
      type="pie"
      width={450}
    />
  );
}
