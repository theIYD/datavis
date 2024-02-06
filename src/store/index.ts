import { create } from "zustand";
import { JobData as data } from "../mock";

type Store = {
  charts: Record<string, object>;
  chartKeys: string[];
  saveChart: (chart: object, key: string) => void;
  saveCharts: (charts: Record<string, object>) => void;
};

export enum ChartKeys {
  SALARY_WITH_CATEGORY = "salaryWithCategory",
  CATEGORY_DISTRIBUTION = "categoryDistribution",
  COMPANY_SIZE = "companySize",
  SALARY_DISTRIBUTION = "salaryDistribution",
  SALARY_TREND = "salaryYearTrend",
}

export const useDataStore = create<Store>((set) => {
  const salaryWithCategoryData = defaultSalaryWithCategoryData();
  const categoryDistributionData = defaultCategoryDistributionData();
  const companySize = defaultCompanySizeData();
  const salaryDistribution = defaultSalaryDistributionData();
  const salaryTrendData = defaultSalaryTrendData();

  return {
    charts: {
      salaryWithCategory: {
        categories: salaryWithCategoryData.jobCategories,
        salaries: salaryWithCategoryData.averageSalaries,
      },
      categoryDistribution: {
        categories: categoryDistributionData,
      },
      companySize: {
        size: companySize,
      },
      salaryDistribution: {
        salaries: salaryDistribution,
      },
      salaryYearTrend: {
        salaries: salaryTrendData,
      },
    },
    chartKeys: [
      "salaryWithCategory",
      "categoryDistribution",
      "companySize",
      "salaryDistribution",
      "salaryYearTrend",
    ],
    saveChart: (chart: object, key: string) => {
      set((state) => ({
        ...state,
        charts: {
          ...state.charts,
          [key]: chart,
        },
        chartKeys: [...state.chartKeys, key],
      }));
    },
    saveCharts: (charts: Record<string, object>) => {
      set((state) => ({
        ...state,
        charts,
      }));
    },
  };
});

function defaultSalaryWithCategoryData() {
  const jobCategories = [...new Set(data.map((entry) => entry.job_category))];
  const averageSalaries = jobCategories.map((category) => {
    const categorySalaries = data
      .filter((entry) => entry.job_category === category)
      .map((entry) => entry.salary_in_usd);

    const averageSalary =
      categorySalaries.reduce((acc, salary) => acc + salary, 0) /
      categorySalaries.length;
    return Math.floor(averageSalary);
  });

  return { jobCategories, averageSalaries };
}

function defaultCategoryDistributionData() {
  const jobCounts: Record<string, number> = {};
  data.forEach((entry) => {
    jobCounts[entry.job_category] = (jobCounts[entry.job_category] || 0) + 1;
  });

  return jobCounts;
}

function defaultCompanySizeData() {
  const companySizeCounts: Record<string, number> = {};
  data.forEach((entry) => {
    companySizeCounts[entry.company_size] =
      (companySizeCounts[entry.company_size] || 0) + 1;
  });

  return companySizeCounts;
}

function defaultSalaryDistributionData() {
  const countryStats: Record<
    string,
    { totalSalary: number; employeeCount: number }
  > = {};
  data.forEach((entry) => {
    const country = entry.employee_residence;
    countryStats[country] = countryStats[country] || {
      totalSalary: 0,
      employeeCount: 0,
    };
    countryStats[country].totalSalary += entry.salary_in_usd;
    countryStats[country].employeeCount += 1;
  });

  const averageSalariesByCountry: Record<string, number> = {};
  Object.keys(countryStats).forEach((country) => {
    averageSalariesByCountry[country] = Math.round(
      countryStats[country].totalSalary / countryStats[country].employeeCount
    );
  });

  return averageSalariesByCountry;
}

function defaultSalaryTrendData() {
  const salaryTrendData = data.reduce<Record<number, number>>((acc, entry) => {
    const year = entry.work_year;
    acc[year] = Math.round((acc[year] || 0) + entry.salary_in_usd);
    return acc;
  }, {});

  return salaryTrendData;
}
