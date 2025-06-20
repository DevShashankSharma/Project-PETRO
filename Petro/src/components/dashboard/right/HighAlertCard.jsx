import { AlertTriangle, MapPin, Clock } from "lucide-react";

const alert = {
    title: "High Alert: Unrest at Jawahar Circle",
    location: "Jawahar Circle, Jaipur",
    timestamp: "2025-06-17T10:45:00Z",
    status: "Critical",
    type: "Public Disturbance",
    description:
        "Large crowd gathering reported with possible riot-like situation. Immediate response unit required at location. Media attention expected.",
};

export default function HighAlertCard() {
    const timeSince = (dateStr) => {
        const now = new Date();
        const time = new Date(dateStr);
        const diff = Math.floor((now - time) / 1000);
        const mins = Math.floor(diff / 60);
        const hrs = Math.floor(mins / 60);
        if (hrs > 0) return `${hrs}h ${mins % 60}m ago`;
        return `${mins} min ago`;
    };

    return (
        <div className="bg-gradient-to-br from-red-100 via-orange-50 to-yellow-50 dark:from-red-900 dark:via-yellow-900 dark:to-orange-900 p-6 rounded-2xl shadow-2xl border border-red-300 dark:border-red-700 max-w-2xl mx-auto w-full">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 animate-pulse" />
                    HIGH ALERT
                </h3>
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-100 shadow-sm">
                    {alert.status}
                </span>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{alert.title}</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{alert.description}</p>

            <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 dark:text-gray-400 mt-2 gap-2">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>{alert.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    <span>{timeSince(alert.timestamp)}</span>
                </div>
            </div>
        </div>
    );
}
