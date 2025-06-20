import { Award, CheckCircle, Shield } from "lucide-react";

const topPerformer = {
    name: "Alice Johnson",
    position: "Chief Inspector",
    rating: 96,
    badgeNo: "A-1023",
    assignment: "Downtown Division",
    solvedCases: 220,
    serviceYears: 15,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    awards: ["Medal of Valor", "Leadership Star"],
};

export default function TopPerformerCard() {
    return (
        <div className="bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-blue-950 dark:to-purple-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-xl w-full max-w-md mx-auto">
            <div className="flex items-center gap-4">
                <img
                    src={topPerformer.avatar}
                    alt={topPerformer.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md"
                />
                <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {topPerformer.name}
                    </h3>
                    <p className="text-sm text-blue-500 dark:text-blue-300">
                        {topPerformer.position}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Badge: {topPerformer.badgeNo}
                    </p>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    Solved: <strong>{topPerformer.solvedCases}</strong>
                </div>
                <div className="flex items-center gap-2">
                    <Shield className="text-indigo-500 w-4 h-4" />
                    Service: <strong>{topPerformer.serviceYears} yrs</strong>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                    <Award className="text-yellow-500 w-4 h-4" />
                    Awards:{" "}
                    {topPerformer.awards.length ? (
                        <span className="font-medium">{topPerformer.awards.join(", ")}</span>
                    ) : (
                        <span className="text-gray-400">None</span>
                    )}
                </div>
                <div className="col-span-2 text-xs text-right text-purple-500 dark:text-purple-300 font-semibold">
                    Rating: {topPerformer.rating} / 100
                </div>
            </div>
        </div>
    );
}
