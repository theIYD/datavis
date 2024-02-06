import { ColumnDef } from "@tanstack/react-table";
import { Data } from "../types";

export const useColumns = (): ColumnDef<Data>[] => [
  {
    accessorKey: "work_year",
    header: "Year",
  },
  {
    accessorKey: "job_title",
    cell: (info) => info.getValue(),
    header: () => <span>Title</span>,
  },
  {
    accessorKey: "job_category",
    cell: (info) => info.getValue(),
    header: () => <span>Category</span>,
  },
  {
    accessorKey: "salary_currency",
    cell: (info) => info.getValue(),
    header: () => <span>Currency</span>,
  },
  {
    accessorKey: "salary",
    cell: (info) => info.getValue(),
    header: () => <span>Salary</span>,
  },
  {
    accessorKey: "salary_in_usd",
    cell: (info) => info.getValue(),
    header: () => <span>Salary(USD)</span>,
  },
  {
    accessorKey: "employee_residence",
    cell: (info) => info.getValue(),
    header: () => <span>Residence</span>,
  },
  {
    accessorKey: "experience_level",
    cell: (info) => info.getValue(),
    header: () => <span>Experience Level</span>,
  },
  {
    accessorKey: "employment_type",
    cell: (info) => info.getValue(),
    header: () => <span>Employment Type</span>,
  },
  {
    accessorKey: "work_setting",
    cell: (info) => info.getValue(),
    header: () => <span>Work Setting</span>,
  },
  {
    accessorKey: "company_location",
    cell: (info) => info.getValue(),
    header: () => <span>Company Location</span>,
  },
  {
    accessorKey: "company_size",
    cell: (info) => info.getValue(),
    header: () => <span>Company Size</span>,
  },
];
