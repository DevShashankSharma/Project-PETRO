import { useState } from "react";
import PropTypes from "prop-types";
import { UserCheck, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const roles = [
    {
        key: "citizen",
        label: "Citizen",
        icon: <UserCheck className="w-9 h-9" />,
        desc: "For general users to access citizen services.",
        color: "from-blue-400 to-blue-600",
        border: "border-blue-500",
        bg: "bg-blue-50",
        ring: "ring-blue-300"
    },
    {
        key: "administrative",
        label: "Administrative",
        icon: <ShieldCheck className="w-9 h-9" />,
        desc: "For police officers and authorized personnel.",
        color: "from-purple-400 to-purple-600",
        border: "border-purple-500",
        bg: "bg-purple-50",
        ring: "ring-purple-300"
    }
];

const UserTypeSelector = ({ setUserType }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (type) => {
        setSelected(type);
        setUserType(type);
    };

    return (
        <div className="text-center">
            <div className="flex flex-col items-center gap-2">
                <Sparkles className="w-8 h-8 text-blue-400 animate-bounce mb-1" />
                <h3 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                    Who are you?
                </h3>
                <p className="text-gray-500 text-base max-w-md mx-auto">
                    Select your role to personalize your experience and unlock tailored features.
                </p>
            </div>
            <div className="flex justify-center gap-10 mt-8 flex-wrap">
                {roles.map((role) => {
                    const isSelected = selected === role.key;
                    return (
                        <button
                            key={role.key}
                            type="button"
                            onClick={() => handleSelect(role.key)}
                            className={`
                                group relative flex flex-col items-center px-12 py-10 rounded-3xl border-2 shadow-xl transition-all duration-300
                                ${isSelected
                                    ? `${role.bg} ${role.border} scale-105 ring-4 ${role.ring} font-bold shadow-2xl`
                                    : "bg-white border-gray-200 hover:scale-105 hover:shadow-lg"}
                                focus:outline-none
                                ${isSelected ? "z-10" : ""}
                            `}
                            aria-pressed={isSelected}
                        >
                            {/* Animated Glow */}
                            {isSelected && (
                                <span className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-200/40 to-purple-200/40 blur-lg animate-pulse z-0"></span>
                            )}
                            {/* Icon */}
                            <span
                                className={`
                                    flex items-center justify-center mb-4 rounded-full p-5 z-10
                                    bg-gradient-to-br ${role.color} text-white shadow-lg
                                    ${isSelected ? "scale-110 ring-4 ring-white" : ""}
                                    transition-all
                                `}
                            >
                                {role.icon}
                            </span>
                            {/* Label */}
                            <span className={`text-2xl font-semibold tracking-wide z-10 ${isSelected ? "text-blue-900" : "text-gray-700"}`}>
                                {role.label}
                            </span>
                            {/* Description */}
                            <span className={`text-sm mt-3 z-10 ${isSelected ? "text-blue-700" : "text-gray-500"}`}>
                                {role.desc}
                            </span>
                            {/* Selected Badge */}
                            {isSelected && (
                                <span className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg flex items-center gap-1 animate-fade-in">
                                    <CheckCircle2 className="w-4 h-4" /> Selected
                                </span>
                            )}
                            {/* Animated border effect */}
                            <span
                                className={`absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300
                                    ${isSelected ? "ring-4 ring-blue-300/60" : "ring-0"}
                                `}
                            />
                        </button>
                    );
                })}
            </div>
            {/* Next Button */}
            <div className="mt-10 flex flex-col items-center gap-2">
                <span className="text-xs text-gray-400 mt-2">
                    Your selection helps us provide a better experience.
                </span>
                <span className="text-xs text-blue-400 animate-pulse">
                    Secure &amp; personalized access
                </span>
            </div>
        </div>
    );
};

UserTypeSelector.propTypes = {
    setUserType: PropTypes.func.isRequired,
};

export default UserTypeSelector;
