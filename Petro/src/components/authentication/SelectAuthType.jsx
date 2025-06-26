import { Sparkles, LogIn, UserPlus } from "lucide-react";
import PropTypes from "prop-types";

const SelectAuthType = ({ handleActionSelect, selectedAction }) => {
    return (
        <div className="text-center space-y-10">
            <h3 className="text-2xl font-bold text-gray-700 flex items-center justify-center gap-2">
                <Sparkles className="text-purple-400 w-6 h-6 animate-bounce" />
                What do you want to do?
            </h3>
            <div className="flex justify-center gap-10">
                {/* Login Option */}
                <button
                    onClick={() => handleActionSelect("login")}
                    className={`group flex flex-col items-center px-10 py-7 rounded-2xl shadow-lg border-2 transition-all duration-200 relative overflow-hidden
                        ${selectedAction === "login"
                            ? "bg-blue-500 text-white border-blue-600 scale-105 ring-4 ring-blue-200"
                            : "bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-400 hover:scale-105"}
                    `}
                    style={{ zIndex: selectedAction === "login" ? 10 : 1 }}
                >
                    <span className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-60 transition">
                        <Sparkles className={`w-12 h-12 ${selectedAction === "login" ? "text-white animate-spin" : "text-blue-300 animate-spin-slow"}`} />
                    </span>
                    <LogIn className="w-10 h-10 mb-2" />
                    <span className="font-semibold text-xl">Log In</span>
                    <span className="text-xs text-gray-200 mt-1 group-hover:text-white transition">
                        Already have an account? Access your dashboard.
                    </span>
                    {selectedAction === "login" && (
                        <span className="absolute bottom-2 right-4 bg-white/80 text-blue-700 rounded-full px-3 py-0.5 text-xs font-bold shadow">
                            Selected
                        </span>
                    )}
                </button>
                {/* Signup Option */}
                <button
                    onClick={() => handleActionSelect("signup")}
                    className={`group flex flex-col items-center px-10 py-7 rounded-2xl shadow-lg border-2 transition-all duration-200 relative overflow-hidden
                        ${selectedAction === "signup"
                            ? "bg-purple-500 text-white border-purple-600 scale-105 ring-4 ring-purple-200"
                            : "bg-purple-100 hover:bg-purple-200 text-purple-700 border-purple-400 hover:scale-105"}
                    `}
                    style={{ zIndex: selectedAction === "signup" ? 10 : 1 }}
                >
                    <span className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-60 transition">
                        <Sparkles className={`w-12 h-12 ${selectedAction === "signup" ? "text-white animate-spin" : "text-purple-300 animate-spin-slow"}`} />
                    </span>
                    <UserPlus className="w-10 h-10 mb-2" />
                    <span className="font-semibold text-xl">Sign Up</span>
                    <span className="text-xs text-gray-200 mt-1 group-hover:text-white transition">
                        New here? Create a new account to get started.
                    </span>
                    {selectedAction === "signup" && (
                        <span className="absolute bottom-2 right-4 bg-white/80 text-purple-700 rounded-full px-3 py-0.5 text-xs font-bold shadow">
                            Selected
                        </span>
                    )}
                </button>
            </div>
        </div>
    );;
};;
SelectAuthType.propTypes = {
    prevStep: PropTypes.func.isRequired,
    handleActionSelect: PropTypes.func.isRequired,
    selectedAction: PropTypes.string
};

export default SelectAuthType;;
