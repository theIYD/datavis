import { StatCardProps } from "./interface";

export default function StatCard({ text, subtext }: StatCardProps) {
  return (
    <div className="card w-100 shadow-md flex-1 bg-orange-300">
      <div className="card-body flex items-center justify-center">
        <h2 className="card-title text-3xl text-orange-600 font-extrabold">
          {text}
        </h2>
        <p className="text-orange-600 font-semibold">{subtext}</p>
      </div>
    </div>
  );
}
