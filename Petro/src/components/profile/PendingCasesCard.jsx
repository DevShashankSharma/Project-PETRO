import { AlertTriangle, Clock4, FileWarning } from "lucide-react";
import { useState } from "react";

const allCases = [
    { id: "PC-1001", title: "Unauthorized Entry", priority: "High", reportedAt: "10:30 AM" },
    { id: "PC-1002", title: "Vandalism", priority: "Medium", reportedAt: "Yesterday" },
    { id: "PC-1003", title: "Noise Complaint", priority: "Low", reportedAt: "2 Days Ago" },
    { id: "PC-1004", title: "Vehicle Theft", priority: "High", reportedAt: "Today, 8:15 AM" },
    { id: "PC-1005", title: "Missing Person", priority: "High", reportedAt: "3 Days Ago" },
    { id: "PC-1006", title: "Power Theft", priority: "Medium", reportedAt: "Yesterday" },
    { id: "PC-1007", title: "ATM Tampering", priority: "High", reportedAt: "Today, 9:00 AM" },
    { id: "PC-1008", title: "Traffic Violation", priority: "Low", reportedAt: "4 Days Ago" },
    { id: "PC-1009", title: "Domestic Dispute", priority: "Medium", reportedAt: "Today, 7:40 AM" },
    { id: "PC-1010", title: "Public Disturbance", priority: "Low", reportedAt: "5 Days Ago" },
];

export default function PendingCasesCardWithList() {
    const [visibleCount, setVisibleCount] = useState(5);
    const visibleCases = allCases.slice(0, visibleCount);

    const showMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, allCases.length));
    };

    return (
        <div className="bg-[#0f172a] bg-opacity-90 shadow-xl rounded-2xl border border-yellow-600/20 relative overflow-hidden backdrop-blur-md py-4">
            <div className="flex items-center justify-between mb-4 px-4">
                <h2 className="text-xl font-extrabold text-yellow-800 dark:text-yellow-100 flex items-center gap-2 tracking-tight">
                    <AlertTriangle className="text-yellow-500 dark:text-yellow-300 w-6 h-6 animate-pulse" />
                    Pending Cases
                </h2>
                <span className="text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full shadow border border-yellow-200 dark:border-yellow-800">
                    {allCases.length} Total
                </span>
            </div>
            <div className="max-h-72 overflow-y-auto pr-1 light-scrollbar  px-4">
                <ul className="space-y-3">
                    {visibleCases.map((c) => (
                        <li
                            key={c.id}
                            className={`flex items-start gap-3 p-3 rounded-2xl border shadow-sm hover:scale-[.98] hover:shadow-lg transition-transform duration-200
                                    ${c.priority === "High"
                                    ? "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700"
                                    : c.priority === "Medium"
                                        ? "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700"
                                        : "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700"
                                }`
                            }
                        >
                            <div className={`p-2 rounded-full shadow-lg flex items-center justify-center
                                    ${c.priority === "High"
                                    ? "bg-red-500"
                                    : c.priority === "Medium"
                                        ? "bg-yellow-400"
                                        : "bg-green-400"
                                }`}>
                                <FileWarning className="w-5 h-5 text-white drop-shadow" />
                            </div>
                            <div className="flex-1">
                                <div className="text-base font-bold text-yellow-900 dark:text-yellow-100 truncate flex items-center gap-2">
                                    {c.title}
                                    {c.priority === "High" && (
                                        <span className="ml-1 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/40 text-xs text-red-700 dark:text-red-300 font-semibold animate-pulse">High</span>
                                    )}
                                    {c.priority === "Medium" && (
                                        <span className="ml-1 px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-xs text-yellow-700 dark:text-yellow-300 font-semibold">Medium</span>
                                    )}
                                    {c.priority === "Low" && (
                                        <span className="ml-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-xs text-green-700 dark:text-green-300 font-semibold">Low</span>
                                    )}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-yellow-300">{c.id}</div>
                                <div className="text-xs text-gray-400 dark:text-yellow-400 mt-1 flex flex-wrap gap-2">
                                    <span>
                                        <Clock4 className="inline w-4 h-4 mr-1 align-text-bottom" />
                                        {c.reportedAt}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {visibleCount < allCases.length && (
                    <div className="text-center mt-4 mb-2">
                        <button
                            onClick={showMore}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-500 text-white font-bold shadow-lg hover:bg-yellow-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 active:scale-95"
                        >
                            <span>Show More</span>
                            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
