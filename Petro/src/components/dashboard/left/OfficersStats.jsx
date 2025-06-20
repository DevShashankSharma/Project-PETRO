import { Users, ShieldCheck } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const totalOfficers = 120;
const activeOfficers = 87;
const inactiveOfficers = totalOfficers - activeOfficers;

const data = [
    { name: "Active", value: activeOfficers },
    { name: "Inactive", value: inactiveOfficers },
];

const COLORS = ["#10b981", "#6366f1"];

export default function OfficerStatsModern() {
    return (
        <div className="relative bg-[#0f172a] bg-opacity-90 border border-blue-600/20 rounded-2xl shadow-xl p-2 max-w-md w-full mx-auto mt-2 backdrop-blur-md">
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-200 flex items-center gap-2 mb-2">
                <Users size={20} className="inline-block" /> Officers Overview
            </h3>
            <div className="w-full flex flex-col items-center justify-center gap-6">
                {/* Stats Cards */}
                <div className="flex gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-tr from-indigo-400/20 to-indigo-200/60 dark:from-indigo-800/40 dark:to-indigo-900/60 shadow flex flex-col items-center gap-1 border border-indigo-100 dark:border-indigo-900 w-28">
                        <div className="bg-indigo-600 dark:bg-indigo-700 text-white p-2 rounded-full shadow mb-1">
                            <Users size={18} />
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                            Total
                        </div>
                        <div className="text-xl font-extrabold text-indigo-800 dark:text-indigo-200 tracking-tight">
                            {totalOfficers}
                        </div>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-tr from-emerald-400/20 to-emerald-200/60 dark:from-emerald-800/40 dark:to-emerald-900/60 shadow flex flex-col items-center gap-1 border border-emerald-100 dark:border-emerald-900 w-28">
                        <div className="bg-emerald-600 dark:bg-emerald-700 text-white p-2 rounded-full shadow mb-1">
                            <ShieldCheck size={18} />
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                            Active
                        </div>
                        <div className="text-xl font-extrabold text-emerald-800 dark:text-emerald-200 tracking-tight">
                            {activeOfficers}
                        </div>
                    </div>
                </div>
                {/* Pie Chart */}
                <div className="w-full h-52 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={45}
                                outerRadius={70}
                                paddingAngle={3}
                                dataKey="value"
                                label={({ name, percent }) =>
                                    `${name}: ${(percent * 100).toFixed(0)}%`
                                }
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    borderRadius: 8,
                                    border: "1px solid #e5e7eb",
                                    color: "#22223b",
                                }}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                
            </div>
        </div>
    );
}
