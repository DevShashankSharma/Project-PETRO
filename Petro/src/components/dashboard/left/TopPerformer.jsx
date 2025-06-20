import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopPerformer() {
    const topPerformers = [
        {
            id: 1,
            name: "Alice Johnson",
            position: "Chief of Police",
            rating: 95,
            img: "https://randomuser.me/api/portraits/women/1.jpg",
            change: "up",
            badgeNo: "A-1023",
            yearsOfService: 15,
            assignment: "Downtown Division",
            casesSolved: 220,
            awards: ["Medal of Valor", "Community Hero Award"],
        },
        {
            id: 2,
            name: "Bob Smith",
            position: "Deputy Chief",
            rating: 89,
            img: "https://randomuser.me/api/portraits/men/2.jpg",
            change: "down",
            badgeNo: "B-2045",
            yearsOfService: 12,
            assignment: "West Precinct",
            casesSolved: 180,
            awards: ["Leadership Award"],
        },
        {
            id: 3,
            name: "Clara Lee",
            position: "Sergeant",
            rating: 92,
            img: "https://randomuser.me/api/portraits/women/3.jpg",
            change: "up",
            badgeNo: "C-3098",
            yearsOfService: 9,
            assignment: "North Division",
            casesSolved: 140,
            awards: [],
        },
        {
            id: 4,
            name: "Daniel Adams",
            position: "Detective",
            rating: 88,
            img: "https://randomuser.me/api/portraits/men/4.jpg",
            change: "up",
            badgeNo: "D-4102",
            yearsOfService: 11,
            assignment: "South Zone",
            casesSolved: 175,
            awards: ["Bravery Medal"],
        },
        {
            id: 5,
            name: "Ella Brown",
            position: "Lieutenant",
            rating: 90,
            img: "https://randomuser.me/api/portraits/women/5.jpg",
            change: "down",
            badgeNo: "E-5896",
            yearsOfService: 7,
            assignment: "East Division",
            casesSolved: 160,
            awards: ["Best Strategist"],
        },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-6 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">🌟 Top Performers</h2>
                <Link
                    to="/all-performers"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 border border-blue-500 px-3 py-1 rounded-full transition-all hover:bg-blue-50 dark:hover:bg-blue-800/30"
                >
                    See All
                </Link>
            </div>

            <div className="space-y-4 max-h-[450px] overflow-auto pr-2">
                {topPerformers.map((officer, index) => (
                    <div
                        key={officer.id}
                        className="flex items-center bg-white/80 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm px-4 py-3 gap-4 backdrop-blur-md hover:shadow-md transition-all"
                    >
                        <div className="text-xl font-bold text-gray-400 w-6">{index + 1}</div>

                        <img
                            src={officer.img}
                            alt={officer.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                        />

                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 dark:text-white">{officer.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{officer.position}</div>
                            <div className="text-xs text-blue-600 dark:text-blue-300">
                                Badge: {officer.badgeNo} • {officer.yearsOfService} yrs
                            </div>
                            {/* <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                {officer.assignment} • {officer.casesSolved} cases •{" "}
                                {officer.awards.length ? officer.awards.join(", ") : "No Awards"}
                            </div> */}
                        </div>

                        <div className="flex flex-col items-end">
                            <span className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full">
                                {officer.rating}
                            </span>
                            <div className="flex items-center gap-1 mt-1">
                                <span
                                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${officer.change === "up"
                                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                                        }`}
                                >
                                    {officer.change === "up" ? "Upgraded" : "Downgraded"}
                                </span>
                                {officer.change === "up" ? (
                                    <ArrowUpRight className="w-4 h-4 text-green-500 dark:text-green-300" />
                                ) : (
                                    <ArrowDownRight className="w-4 h-4 text-red-500 dark:text-red-300" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
