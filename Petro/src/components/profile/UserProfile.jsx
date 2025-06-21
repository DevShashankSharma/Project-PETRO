import { BadgeCheck, Star, Briefcase, Clock10, CheckCircle2, AlertCircle, Award } from "lucide-react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import CountUp from "react-countup";
import "react-circular-progressbar/dist/styles.css";

export default function OfficerProfileCard() {
    return (
        <div className="relative bg-[#0f172a] mx-2 border-b border-gray-700">
            <div className="relative flex flex-col md:flex-row gap-8 w-full p-8 items-center justify-evenly z-10">
                {/* Avatar with animated circular progress */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative group">
                        <div className="bg-gradient-to-br from-indigo-500 via-green-400 to-emerald-400 p-1 rounded-full shadow-xl transition-transform group-hover:scale-105 duration-300" style={{ width: 132, height: 132 }}>
                            <CircularProgressbarWithChildren
                                value={96}
                                maxValue={100}
                                styles={buildStyles({
                                    pathColor: "url(#profileGradient)",
                                    trailColor: "#e0e0e0",
                                    strokeLinecap: "round",
                                    transition: "stroke-dashoffset 1s ease 0s"
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
                                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                        <span className="absolute bottom-3 right-3 bg-blue-600 text-white rounded-full p-1.5 border-2 border-white shadow-lg animate-bounce">
                            <BadgeCheck size={22} />
                        </span>
                    </div>
                    {/* Name and handle */}
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
                            Alice Johnson
                            <Award className="w-6 h-6 text-amber-400 drop-shadow" />
                        </span>
                        <span className="text-base text-blue-500 dark:text-blue-300 font-mono tracking-wide">@alice_j</span>
                        {/* Award badge */}
                        <span className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-semibold shadow-sm border border-amber-200 dark:border-amber-800">
                            <Award className="w-4 h-4" />
                            Medal of Valor
                        </span>
                    </div>
                    {/* Bio */}
                    <div className="flex flex-col text-base text-gray-700 dark:text-gray-300 mt-1 mb-2 italic  ">
                        <span>• 15 years in service</span>
                        <span>• Leading with honor</span>
                        <span>• Committed to safety and justice.</span>
                    </div>
                </div>
                {/* Stats and details */}
                <div className="flex flex-col items-center md:items-start w-full max-w-md">
                    {/* Stats row */}
                    <div className="flex items-center justify-center gap-8 w-full mt-2">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-blue-700 dark:text-blue-200">
                                <CountUp end={300} duration={1.2} />
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cases</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-green-700 dark:text-green-200">
                                <CountUp end={265} duration={1.2} />
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Solved</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-amber-600 dark:text-amber-300">
                                <CountUp end={2} duration={1.2} />
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Awards</span>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-6 w-full" />
                    {/* Details grid */}
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4 w-full">
                        <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-blue-500" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">Chief of Police</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">Badge A-1023</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock10 className="w-4 h-4 text-purple-500" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">15 yrs Service</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">4.8/5 Rating</span>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-6 w-full" />
                    {/* Highlights */}
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-center gap-3 text-base text-gray-700 dark:text-gray-200">
                            <AlertCircle className="w-5 h-5 text-red-500" />
                            <span>
                                <span className="font-bold text-red-600 dark:text-red-400"><CountUp end={35} duration={1.2} /></span> Pending Cases
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-base text-gray-700 dark:text-gray-200">
                            <AlertCircle className="w-5 h-5 text-orange-500" />
                            <span>
                                <span className="font-bold text-orange-600 dark:text-orange-400"><CountUp end={22} duration={1.2} /></span> High-Risk Ops
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
