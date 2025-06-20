import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    CartesianGrid,
    LabelList,
} from "recharts";

const issueData = [
    { name: "Theft & Burglary", count: 48 },
    { name: "Drug Possession", count: 35 },
    { name: "Traffic Violations", count: 29 },
];

const barColors = ["#facc15", "#c084fc", "#fb7185"];

export default function TopIssuesChart() {
    return (
        <div className="relative bg-[#0f172a] bg-opacity-90 border border-blue-600/20 rounded-2xl shadow-xl p-2 max-w-md w-full mx-auto mt-2 backdrop-blur-md">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl border border-blue-500/30 pointer-events-none  " />

            <h3 className="  text-lg font-bold text-blue-400 mb-6 tracking-wide uppercase drop-shadow-md">
                Top Issues
            </h3>

            <ResponsiveContainer width="100%" height={150}>
                <BarChart
                    data={issueData}
                    layout="vertical"
                    margin={{ top: 0, right: 0, left: 0, bottom: 5 }}
                >
                    <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
                    <XAxis
                        type="number"
                        stroke="#64748b"
                        axisLine={false}
                        tickLine={false}
                        fontSize={10}
                    />
                    <YAxis
                        dataKey="name"
                        type="category"
                        stroke="#94a3b8"
                        tick={{ fontSize: 12, fill: "#f1f5f9", fontWeight: 500 }}
                        width={100}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        cursor={{ fill: "rgba(96,165,250,0.1)", radius: 6 }}
                        contentStyle={{
                            backgroundColor: "#1e293b",
                            border: "1px solid #60a5fa",
                            borderRadius: 12,
                            color: "#f8fafc",
                            fontSize: "14px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                        }}
                        itemStyle={{
                            fontWeight: "bold",
                            color: "#facc15",
                        }}
                        labelStyle={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#38bdf8",
                            marginBottom: "8px",
                        }}
                    />
                    <Bar dataKey="count" radius={[0, 10, 10, 0]} barSize={28}>
                        {issueData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={barColors[index]}
                                className="transition-all duration-300 hover:fill-[#3b82f6]"
                            />
                        ))}
                        <LabelList
                            dataKey="count"
                            position="right"
                            style={{
                                fill: "#e2e8f0",
                                fontSize: 14,
                                fontWeight: 600,
                            }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
