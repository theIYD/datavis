import StatCard from "../ui/StatCard";

export default function Stats() {
  const sampleData = ["420k", "50,000", "78"];
  return (
    <div className="flex space-x-4 w-full mt-4">
      {sampleData.map((stat) => (
        <StatCard text={stat} />
      ))}
    </div>
  );
}
