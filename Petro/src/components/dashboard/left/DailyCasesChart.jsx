import { useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

// Sample data
const data7Days = [
    { date: "June 1", cases: 3 },
    { date: "June 2", cases: 6 },
    { date: "June 3", cases: 4 },
    { date: "June 4", cases: 7 },
    { date: "June 5", cases: 5 },
    { date: "June 6", cases: 9 },
    { date: "June 7", cases: 6 },
];

const data1Month = Array.from({ length: 30 }, (_, i) => ({
    date: `June ${i + 1}`,
    cases: Math.floor(Math.random() * 10 + 1),
}));

const data1Year = Array.from({ length: 12 }, (_, i) => ({
    date: `Month ${i + 1}`,
    cases: Math.floor(Math.random() * 100 + 10),
}));

export default function DailyCasesChart() {
    const [range, setRange] = useState("7d");

    const getData = () => {
        switch (range) {
            case "30d": return data1Month;
            case "1y": return data1Year;
            default: return data7Days;
        }
    };

    return (
        <div className="bg-[#0f172a]/80 backdrop-blur-md rounded-2xl p-2 w-full max-w-4xl mx-auto border border-blue-600/40 m-1">
            {/* Header & Dropdown */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-blue-400 tracking-wider uppercase drop-shadow-md">
                    Daily Cases
                </h3>
                <select
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className="bg-[#1e293b] text-blue-300 border border-blue-600 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 1 Month</option>
                    <option value="1y">Last 1 Year</option>
                </select>
            </div>

            {/* Area Chart */}
            <div className="bg-[#0f172a] shadow-inner rounded-xl">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        data={getData()}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="date"
                            stroke="#94a3b8"
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#94a3b8"
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1e293b",
                                borderColor: "#3b82f6",
                                borderRadius: 8,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                            }}
                            itemStyle={{ color: "#60a5fa", fontWeight: "bold" }}
                            labelStyle={{ color: "#facc15", fontSize: 14 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="cases"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorCases)"
                            animationDuration={1000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
