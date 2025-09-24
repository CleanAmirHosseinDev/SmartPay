import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SalesChart({ data }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
      <h3 className="text-lg font-semibold text-white mb-4">Sales Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
          <XAxis dataKey="date" stroke="#A0AEC0" fontSize={12} />
          <YAxis stroke="#A0AEC0" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip
            cursor={{ fill: 'rgba(113, 128, 150, 0.1)' }}
            contentStyle={{
              backgroundColor: "#1A202C",
              borderColor: "#4A5568",
              color: "#FFFFFF",
            }}
          />
          <Legend wrapperStyle={{ fontSize: '14px' }} />
          <Bar dataKey="sales" fill="#38B2AC" name="Sales (USD)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
