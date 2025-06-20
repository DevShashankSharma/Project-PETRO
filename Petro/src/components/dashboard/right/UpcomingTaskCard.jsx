import { useEffect, useState } from "react";
import { CalendarClock, User } from "lucide-react";

const task = {
    title: "City Surveillance Review",
    deadline: new Date().getTime() + 1000 * 60 * 60 * 5 + 1000 * 60 * 32, // 5 hours 32 mins from now
    description: "Conduct final review of CCTV footage from Zone 4 before the report submission.",
    priority: "High",
    assignedTo: "Inspector Clara Lee",
};

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export default function UpcomingTaskCard() {
    const [remaining, setRemaining] = useState(task.deadline - new Date().getTime());

    useEffect(() => {
        const timer = setInterval(() => {
            const diff = task.deadline - new Date().getTime();
            setRemaining(diff > 0 ? diff : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gradient-to-br from-white via-yellow-50 to-red-100 dark:from-gray-900 dark:via-yellow-900 dark:to-red-900 p-2 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full mx-auto transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                    <CalendarClock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    Upcoming Task
                </h3>
                <span className="text-xs sm:text-sm px-3 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 font-semibold rounded-full shadow-sm tracking-wide uppercase">
                    {task.priority}
                </span>
            </div>

            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
                {task.title}
            </h4>
            {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{task.description}</p> */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{task.assignedTo}</span>
                </span>
                <span className="text-purple-600 dark:text-purple-300 font-mono flex items-center gap-1">
                    ⏳ <span>{formatTime(remaining)}</span>
                </span>
            </div>
        </div>
    );
}
