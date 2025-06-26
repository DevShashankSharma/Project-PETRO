import { useState } from "react";
import PropTypes from "prop-types";
import {
    User, Mail, Phone, Lock, CreditCard, Eye, EyeOff, KeyRound, 
} from "lucide-react";

const CitizenSignupForm = ({ onSubmit }) => {
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

            {/* Aadhar Number */}
            <div className="relative">
                <CreditCard className="absolute left-3 top-3 text-gray-400" />
                <input type="text" maxLength="12" required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Aadhar Number</label>
            </div>

            {/* Phone */}
            <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" />
                <input type="tel" required placeholder=" " className="peer w-full border pl-10 py-2 rounded-lg" />
                <label className="absolute left-10 top-2 text-sm text-gray-400">Phone Number</label>
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

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-medium">
                <KeyRound className="w-5 h-5" />
                Sign Up as Citizen
            </button>
        </form>
    );
};
CitizenSignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default CitizenSignupForm;
