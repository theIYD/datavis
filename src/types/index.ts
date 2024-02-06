export type Data = {
  work_year: number;
  job_title: string;
  job_category: string;
  salary_currency: string;
  salary: number;
  salary_in_usd: number;
  employee_residence: string;
  experience_level: string;
  employment_type: string;
  work_setting: string;
  company_location: string;
  company_size: string;
};

export type ChartProps = {
  data: Data[];
};
