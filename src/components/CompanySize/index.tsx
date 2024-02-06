import { JobData } from "../../mock";
import UIChart from "../ui/Chart";

export default function CompanySize() {
  const companySizeCounts: Record<string, number> = {};
  JobData.forEach((entry) => {
    companySizeCounts[entry.company_size] =
      (companySizeCounts[entry.company_size] || 0) + 1;
  });

  const props = {
    options: {
      labels: Object.keys(companySizeCounts),
      legend: {
        show: true,
      },
    },
    series: Object.values(companySizeCounts),
  };

  return (
    <UIChart
      options={props.options}
      series={props.series}
      type="donut"
      height={400}
    />
  );
}
