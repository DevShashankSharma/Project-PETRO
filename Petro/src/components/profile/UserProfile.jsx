import { BadgeCheck, Star, Briefcase, Clock10, CheckCircle2, AlertCircle, Award } from "lucide-react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function OfficerProfileCard() {
    return (
        <div className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] dark:from-[#18181b] dark:via-[#23272f] dark:to-[#1e293b] rounded-3xl shadow-2xl max-w-xl mx-auto p-8 border border-blue-100 dark:border-blue-900 transition-all duration-300">
            {/* Top section: avatar, name, stats */}
            <div className="flex flex-col items-center gap-3">
                {/* Avatar with circular progress */}
                <div className="relative group">
                    <div style={{ width: 120, height: 120 }}>
                        <CircularProgressbarWithChildren
                            value={96}
                            maxValue={100}
                            styles={buildStyles({
                                pathColor: "url(#profileGradient)",
                                trailColor: "#e0e0e0",
                                strokeLinecap: "round",
                            })}
                        >
                            <svg style={{ height: 0 }}>
                                <defs>
                                    <linearGradient id="profileGradient" gradientTransform="rotate(90)">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#10b981" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <img
                                src="https://randomuser.me/api/portraits/women/1.jpg"
                                alt="Alice Johnson"
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                            />
                        </CircularProgressbarWithChildren>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full p-1 border-2 border-white shadow-lg animate-bounce">
                        <BadgeCheck size={20} />
                    </span>
                </div>
                {/* Name and handle */}
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                        Alice Johnson
                        <Award className="w-5 h-5 text-amber-400" />
                    </span>
                    <span className="text-sm text-blue-500 dark:text-blue-300">@alice_j</span>
                </div>
                {/* Bio */}
                <p className="text-center text-base text-gray-700 dark:text-gray-300 mt-1 mb-2 italic">
                    15 years in service • Leading with honor • Committed to safety and justice.
                </p>
                {/* Stats row */}
                <div className="flex items-center justify-center gap-8 w-full mt-2">
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-blue-700 dark:text-blue-200">300</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Cases</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-green-700 dark:text-green-200">265</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Solved</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-amber-600 dark:text-amber-300">2</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Awards</span>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-6" />
            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-gray-700 dark:text-gray-200">Chief of Police</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-gray-700 dark:text-gray-200">Badge A-1023</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock10 className="w-4 h-4 text-purple-500" />
                    <span className="font-medium text-gray-700 dark:text-gray-200">15 yrs Service</span>
                </div>
                <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-gray-700 dark:text-gray-200">4.8/5 Rating</span>
                </div>
            </div>
            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-6" />
            {/* Highlights */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-200">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span>
                        <span className="font-bold text-red-600 dark:text-red-400">35</span> Pending Cases
                    </span>
                </div>
                <div className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-200">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <span>
                        <span className="font-bold text-orange-600 dark:text-orange-400">22</span> High-Risk Ops
                    </span>
                </div>
            </div>
        </div>
    );
}
