import { ArrowUpRight } from "lucide-react";

export default function StatCard({ title, value, icon, change, changeType }) {
  const IconComponent = icon;
  const isPositive = changeType === "positive";

  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-400">{title}</span>
        {IconComponent && <IconComponent className="text-gray-500" size={22} />}
      </div>
      <p className="text-3xl font-semibold text-white">{value}</p>
      {change && (
        <div className="flex items-center text-xs mt-2">
          <ArrowUpRight
            className={`mr-1 ${isPositive ? "text-green-400" : "text-red-400 rotate-90"}`}
            size={14}
          />
          <span className={`${isPositive ? "text-green-400" : "text-red-400"}`}>
            {change}
          </span>
          <span className="text-gray-500 ml-1">vs last month</span>
        </div>
      )}
    </div>
  );
}
