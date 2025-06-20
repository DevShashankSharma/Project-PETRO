import { useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Briefcase, CheckCircle } from "lucide-react";

const data7Days = [
    { date: "June 1", total: 3, solved: 2 },
    { date: "June 2", total: 6, solved: 5 },
    { date: "June 3", total: 4, solved: 3 },
    { date: "June 4", total: 7, solved: 6 },
    { date: "June 5", total: 5, solved: 4 },
    { date: "June 6", total: 9, solved: 7 },
    { date: "June 7", total: 6, solved: 5 },
];

const data1Month = Array.from({ length: 30 }, (_, i) => ({
    date: `June ${i + 1}`,
    total: Math.floor(Math.random() * 10 + 1),
    solved: Math.floor(Math.random() * 8 + 1),
}));

const data1Year = Array.from({ length: 12 }, (_, i) => ({
    date: `Month ${i + 1}`,
    total: Math.floor(Math.random() * 100 + 10),
    solved: Math.floor(Math.random() * 80 + 10),
}));

function getData(range) {
    if (range === "7d") return data7Days;
    if (range === "1m") return data1Month;
    if (range === "1y") return data1Year;
    return data7Days;
}

const rangeOptions = [
    { value: "7d", label: "Last 7 Days" },
    { value: "1m", label: "Last 30 Days" },
    { value: "1y", label: "Last 12 Months" },
];

export default function CaseEfficiency() {
    const [range, setRange] = useState("7d");
    const data = getData(range);

    const totalCases = data.reduce((sum, item) => sum + item.total, 0);
    const solvedCases = data.reduce((sum, item) => sum + item.solved, 0);
    const efficiency = totalCases ? ((solvedCases / totalCases) * 100).toFixed(1) : 0;

    return (
        <div className="bg-[#0f172a]/80 backdrop-blur-md rounded-2xl p-2 w-full max-w-4xl mx-auto border border-blue-600/40 m-1">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-blue-400 tracking-wider uppercase drop-shadow-md">
                    <span role="img" aria-label="chart">📊</span> Efficiency
                </h2>
                <select
                    className="text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full shadow outline-none"
                    value={range}
                    onChange={e => setRange(e.target.value)}
                >
                    {rangeOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Total Cases Card - Small */}
                <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-400/20 to-blue-200/60 dark:from-blue-800/40 dark:to-blue-900/60 shadow flex flex-col items-center gap-1 border border-blue-100 dark:border-blue-900 w-28 mx-auto">
                    <div className="bg-blue-600 dark:bg-blue-700 text-white p-2 rounded-full shadow mb-1">
                        <Briefcase size={18} />
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                        Total
                    </div>
                    <div className="text-xl font-extrabold text-blue-800 dark:text-blue-200 tracking-tight">
                        {totalCases}
                    </div>
                </div>

                {/* Solved Cases Card - Small */}
                <div className="p-3 rounded-xl bg-gradient-to-tr from-green-400/20 to-green-200/60 dark:from-green-800/40 dark:to-green-900/60 shadow flex flex-col items-center gap-1 border border-green-100 dark:border-green-900 w-28 mx-auto">
                    <div className="bg-green-600 dark:bg-green-700 text-white p-2 rounded-full shadow mb-1">
                        <CheckCircle size={18} />
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                        Solved
                    </div>
                    <div className="text-xl font-extrabold text-green-800 dark:text-green-200 tracking-tight">
                        {solvedCases}
                    </div>
                </div>

                {/* Circular Efficiency */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <div style={{ width: 90, height: 90 }} className="bg-white/60 dark:bg-gray-900/60 rounded-full shadow-inner p-1">
                        <CircularProgressbar
                            value={efficiency}
                            text={`${efficiency}%`}
                            styles={buildStyles({
                                textColor: "#6b7280",
                                pathColor: "#8b5cf6",
                                trailColor: "#e5e7eb",
                                textSize: "16px",
                                pathTransitionDuration: 0.5,
                            })}
                        />
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                        Efficiency
                    </div>
                </div>
            </div>

            {/* Area Chart */}
            <div className="bg-[#0f172a] shadow-inner rounded-xl mt-2">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorSolved" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
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
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey="total"
                            name="Total Cases"
                            stroke="#3b82f6"
                            fillOpacity={1}
                            fill="url(#colorTotal)"
                            strokeWidth={3}
                            animationDuration={1000}
                        />
                        <Area
                            type="monotone"
                            dataKey="solved"
                            name="Solved Cases"
                            stroke="#10b981"
                            fillOpacity={1}
                            fill="url(#colorSolved)"
                            strokeWidth={3}
                            animationDuration={1000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
