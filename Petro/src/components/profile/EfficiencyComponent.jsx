import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Bolt } from "lucide-react";

export default function UserEfficiency() {
    const totalCases = 240;
    const solvedCases = 190;
    const efficiency = ((solvedCases / totalCases) * 100).toFixed(1);

    return (
        <div className="max-w-sm w-full bg-white/70 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-green-200 dark:border-green-800 p-6 mt-2 relative overflow-hidden backdrop-blur-lg">
            {/* Animated gradient border */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl border-4 border-transparent" style={{
                background: "linear-gradient(120deg, #10b981 0%, #6366f1 100%)",
                maskImage: "linear-gradient(#fff 0 0)",
                WebkitMaskImage: "linear-gradient(#fff 0 0)",
                opacity: 0.13,
                zIndex: 0
            }} />
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center gap-2 tracking-tight">
                        <Bolt className="w-6 h-6 text-yellow-400 animate-pulse" />
                        Efficiency
                    </h2>
                    <span className="text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full shadow border border-green-200 dark:border-green-800">
                        Monthly Stats
                    </span>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <div style={{ width: 130, height: 130 }} className="relative">
                        <CircularProgressbarWithChildren
                            value={efficiency}
                            maxValue={100}
                            strokeWidth={12}
                            styles={buildStyles({
                                pathColor: "url(#efficiencyGradient)",
                                trailColor: "#e5e7eb",
                                textColor: "#10b981",
                                textSize: "18px",
                                strokeLinecap: "round",
                                transition: "stroke-dashoffset 1s ease 0s"
                            })}
                        >
                            <svg style={{ height: 0 }}>
                                <defs>
                                    <linearGradient id="efficiencyGradient" gradientTransform="rotate(90)">
                                        <stop offset="0%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="#6366f1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-3xl font-black text-green-600 dark:text-green-400 drop-shadow">{efficiency}%</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-1">Efficiency</span>
                            </div>
                        </CircularProgressbarWithChildren>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                            boxShadow: "0 0 32px 8px #10b98144, 0 0 0 2px #6366f1"
                        }} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-2">
                    <div className="bg-green-50 dark:bg-green-900/40 rounded-xl p-3 shadow flex flex-col items-center">
                        <span className="text-lg font-bold text-green-700 dark:text-green-300">{solvedCases}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-300">Solved</span>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/40 rounded-xl p-3 shadow flex flex-col items-center">
                        <span className="text-lg font-bold text-red-600 dark:text-red-400">{totalCases - solvedCases}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-300">Pending</span>
                    </div>
                </div>
                <p className="text-xs mt-2 text-gray-400 dark:text-gray-500 italic text-center">
                    Out of <span className="font-semibold">{totalCases}</span> total cases
                </p>
            </div>
        </div>
    );
}
