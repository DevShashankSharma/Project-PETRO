import { CheckCircle } from "lucide-react";
import { useState } from "react";

// Dummy hardcoded solved cases
const allSolvedCases = [
    { id: 1, title: "Robbery at Main Street", officer: "Alice Johnson", date: "2025-06-01" },
    { id: 2, title: "Cyber Fraud Case", officer: "Bob Smith", date: "2025-06-02" },
    { id: 3, title: "Kidnapping Investigation", officer: "Clara Lee", date: "2025-06-03" },
    { id: 4, title: "Narcotics Bust", officer: "Daniel Ray", date: "2025-06-04" },
    { id: 5, title: "ATM Theft", officer: "Eva Singh", date: "2025-06-05" },
    { id: 6, title: "Missing Person Found", officer: "George Khan", date: "2025-06-06" },
    { id: 7, title: "Forgery Crackdown", officer: "Harpreet Kaur", date: "2025-06-07" },
    { id: 8, title: "Bribery Ring Busted", officer: "Imran Ali", date: "2025-06-08" },
    { id: 9, title: "Bank Robbery", officer: "Jaya Rao", date: "2025-06-09" },
    { id: 10, title: "Vehicle Theft Solved", officer: "Kunal Das", date: "2025-06-10" },
];

// Helper to get initials from officer name
function getInitials(name) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
}

export default function SolvedCasesList() {
    const [visibleCount, setVisibleCount] = useState(5);

    const showMore = () => {
        setVisibleCount((prev) => Math.min(prev + 5, allSolvedCases.length));
    };

    const visibleCases = allSolvedCases.slice(0, visibleCount);

    return (
        <div className="w-full max-w-md p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden backdrop-blur-lg">
            {/* Gradient border effect */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl border-4 border-transparent" style={{
                background: "linear-gradient(120deg, #34d399 0%, #6366f1 100%)",
                maskImage: "linear-gradient(#fff 0 0)",
                WebkitMaskImage: "linear-gradient(#fff 0 0)",
                opacity: 0.13,
                zIndex: 0
            }} />
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 tracking-tight">
                        <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                        Solved Cases
                    </h2>
                    <span className="text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full shadow border border-green-200 dark:border-green-800">
                        {allSolvedCases.length} Total
                    </span>
                </div>

                <ul className="space-y-3 max-h-72 overflow-y-auto pr-1">
                    {visibleCases.map((caseItem) => (
                        <li
                            key={caseItem.id}
                            className="flex items-center gap-3 bg-gradient-to-r from-green-50/80 via-white/80 to-green-100/60 dark:from-green-900/30 dark:via-gray-900/60 dark:to-green-900/10 p-3 rounded-xl border border-green-100 dark:border-green-700 shadow-sm transition hover:scale-[1.025] hover:shadow-lg duration-200"
                        >
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center font-bold text-green-700 dark:text-green-200 text-lg shadow">
                                {getInitials(caseItem.officer)}
                            </span>
                            <div className="flex-1">
                                <p className="text-base font-semibold text-green-900 dark:text-green-200 flex items-center gap-1">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-1 animate-bounce" />
                                    {caseItem.title}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                    Officer: <span className="font-medium">{caseItem.officer}</span>
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-500">
                                    Date: {caseItem.date}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                {visibleCount < allSolvedCases.length && (
                    <div className="text-center mt-5">
                        <button
                            onClick={showMore}
                            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
