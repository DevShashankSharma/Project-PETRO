import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ShieldCheck, Medal, Activity, Award, MapPin, BadgeCheck, Users } from "lucide-react";
import UpcomingTaskCard from "./UpcomingTaskCard";
import HighAlertCard from "./HighAlertCard";

const PoliceOfficerProfileDetails = {
    name: "Officer John Doe",
    handle: "@johnTheBrave",
    rank: "Sergeant",
    department: "City Police Department",
    badgeNumber: "12345",
    currentLocation: "123 Main Street, Metropolis",
    imageUrl:
        "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg",
    rating: 85,
    achievements: [
        "🏅 Bravery Medal - 2022",
        "🏆 Best Officer Award - 2023",
        "🎖️ 5 Years of Service",
    ],
    currentDuty: "🚓 On patrol in Sector 12 - Robbery Surveillance",
};

const PoliceOfficerProfile = () => {
    return (
        <div className="bg-gradient-to-br from-[#101828] via-[#1e293b] to-[#0f172a] backdrop-blur-lg shadow-2xl p-6 w-full overflow-y-auto h-[650px] light-scrollbar sm:max-w-md border-l-2 border-blue-700/40 relative rounded-3xl flex flex-col items-center gap-5 transition-all duration-300">
            {/* Badge Icon */}
            <div className="absolute top-4 left-4 text-blue-500 drop-shadow-lg animate-bounce">
                <ShieldCheck size={32} />
            </div>

            {/* Profile Image and Rating */}
            <div style={{ width: 150, height: 150 }} className="relative mx-auto mb-2">
                <svg style={{ height: 0 }}>
                    <defs>
                        <linearGradient id="gradientColor" gradientTransform="rotate(90)">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
                <CircularProgressbarWithChildren
                    value={PoliceOfficerProfileDetails.rating}
                    maxValue={100}
                    styles={buildStyles({
                        pathColor: "url(#gradientColor)",
                        trailColor: "#e0e0e0",
                        strokeLinecap: "round",
                    })}
                >
                    <img
                        src={PoliceOfficerProfileDetails.imageUrl}
                        alt="Police Officer"
                        className="rounded-full w-[80%] object-cover border-4 border-white shadow-xl"
                    />
                </CircularProgressbarWithChildren>
                <div className="absolute -top-3 -right-3 bg-gradient-to-tr from-blue-600 to-green-400 text-white text-xs px-3 py-1 rounded-full shadow-lg font-bold tracking-wide border-2 border-white animate-pulse">
                    {PoliceOfficerProfileDetails.rating}%
                </div>
            </div>

            {/* Name, Handle, Rank */}
            <div className="flex flex-col items-center gap-1">
                <h2 className="text-2xl font-extrabold text-[#22c55e] tracking-tight flex items-center gap-2">
                    {PoliceOfficerProfileDetails.name}
                    <BadgeCheck className="text-blue-400" size={20} />
                </h2>
                <p className="text-sm text-[#6dcefe] mb-1">{PoliceOfficerProfileDetails.handle}</p>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-900/60 text-blue-200 text-xs rounded-full font-semibold shadow">
                    <Award size={14} /> {PoliceOfficerProfileDetails.rank}
                </span>
            </div>

            {/* Basic Info */}
            <div className="mt-2 text-xs text-white/90 space-y-1 text-left w-full px-2 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-300">Badge:</span>
                    <span className="tracking-widest">{PoliceOfficerProfileDetails.badgeNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-pink-400" />
                    <span>{PoliceOfficerProfileDetails.currentLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users size={14} className="text-green-400" />
                    <span>{PoliceOfficerProfileDetails.department}</span>
                </div>
            </div>

            {/* High Alert Section */}
            <HighAlertCard />

            {/* Upcoming Task Section */}
            <UpcomingTaskCard />

            {/* Achievements Section */}
            <div className="mt-3 bg-gradient-to-tr from-yellow-50/80 via-white/80 to-yellow-100/80 dark:from-yellow-900/40 dark:via-gray-900/40 dark:to-yellow-900/40 rounded-xl p-4 text-left shadow-inner border border-yellow-200 dark:border-yellow-700 w-full">
                <h3 className="flex items-center gap-2 text-base font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                    <Medal className="text-yellow-500" size={20} /> Achievements
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    {PoliceOfficerProfileDetails.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Current Duty Section */}
            <div className="bg-gradient-to-tr from-blue-100/80 via-white/80 to-blue-50/80 dark:from-blue-900/40 dark:via-gray-900/40 dark:to-blue-900/40 rounded-xl p-4 text-left shadow-inner border border-blue-200 dark:border-blue-700 w-full">
                <h3 className="flex items-center gap-2 text-base font-semibold text-blue-800 dark:text-blue-200 mb-1">
                    <Activity size={20} /> Current Duty
                </h3>
                <p className="text-sm text-blue-900 dark:text-blue-100">{PoliceOfficerProfileDetails.currentDuty}</p>
            </div>
        </div>
    );
};

export default PoliceOfficerProfile;
