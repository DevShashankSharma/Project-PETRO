import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import { TrendingUp } from "lucide-react";
import PropTypes from "prop-types";

// Hardcoded rating history data (date and rating)
const ratingHistoryData = [
    { date: "2024-01", rating: 600 },
    { date: "2024-02", rating: 650 },
    { date: "2024-03", rating: 630 }, // Degraded
    { date: "2024-04", rating: 700 },
    { date: "2024-05", rating: 720 },
    { date: "2024-06", rating: 710 }, // Degraded
    { date: "2024-07", rating: 750 },
    { date: "2024-08", rating: 800 }
];

// Custom Tooltip for modern look
function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        // Show if rating increased or decreased
        const idx = ratingHistoryData.findIndex(d => d.date === label);
        let change = "";
        if (idx > 0) {
            const diff = payload[0].value - ratingHistoryData[idx - 1].rating;
            if (diff > 0) change = <span className="text-green-600 dark:text-green-400 ml-2">▲ +{diff}</span>;
            else if (diff < 0) change = <span className="text-red-600 dark:text-red-400 ml-2">▼ {diff}</span>;
        }
        return (
            <div className="rounded-xl shadow-lg border border-purple-200 dark:border-purple-700 bg-white/90 dark:bg-gray-900/90 px-4 py-2">
                <div className="font-bold text-purple-700 dark:text-purple-300">{label}</div>
                <div className="text-sm text-gray-700 dark:text-gray-200 flex items-center">
                    Rating: <span className="font-semibold ml-1">{payload[0].value}</span>
                    {change}
                </div>
            </div>
        );
    }
    return null;
}

// Add prop-types validation
CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number
    })),
    label: PropTypes.string
};

export default function OfficerRatingHistory() {
    return (
        <div className="relative bg-[#0f172a] bg-opacity-90 border border-blue-600/20 rounded-2xl shadow-xl p-2 max-w-md w-full mx-auto mt-2 backdrop-blur-md">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 tracking-tight">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                    Rating Change Over Time
                </h2>
                <span className="text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full shadow border border-purple-200 dark:border-purple-800">
                    Monthly Performance
                </span>
            </div>
            <div className="w-full h-80 bg-white/70 dark:bg-gray-900/60 rounded-2xl shadow-inner p-4 border border-gray-100 dark:border-gray-700 backdrop-blur">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ratingHistoryData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="4 4" strokeOpacity={0.12} />
                        <XAxis dataKey="date" tick={{ fontWeight: 700, fill: "#7c3aed", fontSize: 13 }} axisLine={false} tickLine={false} />
                        <YAxis domain={['auto', 'auto']} tick={{ fill: "#059669", fontWeight: 700, fontSize: 13 }} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            iconType="circle"
                            wrapperStyle={{
                                paddingTop: 8,
                                fontWeight: 600,
                                color: "#7c3aed"
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="rating"
                            stroke="#8b5cf6"
                            fill="url(#colorRating)"
                            fillOpacity={1}
                            strokeWidth={4}
                            activeDot={{ r: 8, fill: "#a78bfa", stroke: "#fff", strokeWidth: 3 }}
                            dot={{ r: 5, fill: "#8b5cf6", stroke: "#fff", strokeWidth: 2 }}
                            isAnimationActive={true}
                            animationDuration={1200}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
