import { StatCardProps } from "./interface";

export default function StatCard({ text }: StatCardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-md flex-1">
      <div className="card-body flex items-center justify-center">
        <h2 className="card-title text-3xl">{text}</h2>
      </div>
    </div>
  );
}
