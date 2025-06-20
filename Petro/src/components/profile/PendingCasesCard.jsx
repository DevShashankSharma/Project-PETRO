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
        <div className="w-full max-w-md p-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 dark:from-yellow-900 dark:via-orange-900 dark:to-yellow-800 rounded-3xl shadow-2xl border border-yellow-200 dark:border-yellow-700 space-y-5 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-yellow-700 dark:text-yellow-100 flex items-center gap-2">
                    <AlertTriangle className="text-yellow-500 dark:text-yellow-300 w-5 h-5" />
                    Pending Cases
                </h2>
                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock4 className="w-4 h-4" />
                    Updated just now
                </span>
            </div>

            <div className="max-h-72 overflow-y-auto pr-1 light-scrollbar">
                <ul className="space-y-3">
                    {visibleCases.map((c) => (
                        <li
                            key={c.id}
                            className="bg-white/90 dark:bg-yellow-950/80 p-3 rounded-2xl shadow border border-yellow-100 dark:border-yellow-800 flex items-start gap-3 hover:scale-[1.02] hover:shadow-lg transition-transform"
                        >
                            <div className={`p-2 rounded-full shadow
                                ${c.priority === "High"
                                    ? "bg-gradient-to-tr from-red-500 via-yellow-400 to-yellow-300"
                                    : c.priority === "Medium"
                                        ? "bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-200"
                                        : "bg-gradient-to-tr from-green-400 via-green-200 to-green-100"
                                }`}>
                                <FileWarning className="w-5 h-5 text-white drop-shadow" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold text-gray-800 dark:text-yellow-100 truncate">{c.title}</div>
                                <div className="text-xs text-gray-500 dark:text-yellow-300">{c.id}</div>
                                <div className="text-xs text-gray-500 dark:text-yellow-400 mt-1 flex flex-wrap gap-2">
                                    <span>
                                        Priority:{" "}
                                        <span
                                            className={`font-semibold ${
                                                c.priority === "High"
                                                    ? "text-red-600 dark:text-red-400"
                                                    : c.priority === "Medium"
                                                        ? "text-yellow-600 dark:text-yellow-300"
                                                        : "text-green-600 dark:text-green-300"
                                            }`}
                                        >
                                            {c.priority}
                                        </span>
                                    </span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>
                                        Reported: <span className="font-medium">{c.reportedAt}</span>
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {visibleCount < allCases.length && (
                    <button
                        onClick={showMore}
                        className="block w-full text-center text-sm text-yellow-700 dark:text-yellow-200 font-semibold hover:underline mt-2 transition"
                    >
                        See more...
                    </button>
                )}
            </div>
        </div>
    );
}
