/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { name: "Jan", konsultasi: 40 },
  { name: "Feb", konsultasi: 35 },
  { name: "Mar", konsultasi: 50 },
  { name: "Apr", konsultasi: 45 },
  { name: "Mei", konsultasi: 60 },
  { name: "Jun", konsultasi: 55 },
  { name: "Jul", konsultasi: 48 },
  { name: "Agu", konsultasi: 52 },
];

const weeklyData = [
  { name: "Sen", konsultasi: 10 },
  { name: "Sel", konsultasi: 15 },
  { name: "Rab", konsultasi: 12 },
  { name: "Kam", konsultasi: 18 },
  { name: "Jum", konsultasi: 14 },
  { name: "Sab", konsultasi: 8 },
  { name: "Min", konsultasi: 5 },
];

type timeRange = "weekly" | "monthly";
export default function ActivityChart() {
  const [timeRange, setTimeRange] = useState<timeRange>("weekly");
  const data = timeRange === "weekly" ? weeklyData : monthlyData;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-sm text-emerald-600">
            {payload[0].value} konsultasi
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-64">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setTimeRange("weekly")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              timeRange === "weekly"
                ? "bg-emerald-100 text-emerald-700"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Mingguan
          </button>
          <button
            onClick={() => setTimeRange("monthly")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              timeRange === "monthly"
                ? "bg-emerald-100 text-emerald-700"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Bulanan
          </button>
        </div>

        <div className="text-sm text-gray-500">
          Total: {data.reduce((acc, curr) => acc + curr.konsultasi, 0)}{" "}
          konsultasi
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#687280" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#687280" }}
            width={30}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="konsultasi"
            fill="#10B981"
            radius={[6, 6, 0, 0]}
            barSize={timeRange === "weekly" ? 35 : 45}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
