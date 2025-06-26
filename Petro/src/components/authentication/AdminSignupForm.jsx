import { useState } from "react";
import {
    User, Mail, Lock, Eye, EyeOff, KeyRound, BadgeCheck, ShieldCheck, Building2
} from "lucide-react";
import PropTypes from "prop-types";

const AdminSignupForm = ({ onSubmit }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form className="space-y-5 text-gray-700" onSubmit={onSubmit}>
            {/* Full Name */}
            <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" />
                <input type="text" required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Full Name</label>
            </div>

            {/* Badge ID */}
            <div className="relative">
                <BadgeCheck className="absolute left-3 top-3 text-gray-400" />
                <input type="text" required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Badge ID</label>
            </div>

            {/* Department */}
            <div className="relative">
                <Building2 className="absolute left-3 top-3 text-gray-400" />
                <input type="text" required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Department (e.g. Police, Municipal)</label>
            </div>

            {/* Station Name */}
            <div className="relative">
                <ShieldCheck className="absolute left-3 top-3 text-gray-400" />
                <input type="text" required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Station/Office Name</label>
            </div>

            {/* Email */}
            <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" />
                <input type="email" required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Email</label>
            </div>

            {/* Password */}
            <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <input type={showPassword ? "text" : "password"} required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Password</label>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <input type={showConfirmPassword ? "text" : "password"} required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Confirm Password</label>
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-3 text-gray-400">
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-medium">
                <KeyRound className="w-5 h-5" />
                Sign Up as Admin
            </button>
        </form>
    );
};
AdminSignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default AdminSignupForm;
