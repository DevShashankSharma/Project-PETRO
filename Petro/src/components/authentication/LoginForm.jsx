import { Mail, Lock, Eye, EyeOff, LogIn, Info } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className="space-y-7 text-gray-700 relative z-10">
            {/* Email */}
            <div className="relative group">
                <Mail className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-xl pl-10 py-3 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    autoComplete="username"
                />
                <label className="absolute left-10 top-2 text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                    Email
                </label>
                <span className="absolute right-3 top-3 text-gray-300" title="Enter your registered email">
                    <Info size={16} />
                </span>
            </div>

            {/* Password */}
            <div className="relative group">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-xl pl-10 py-3 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                    autoComplete="current-password"
                />
                <label className="absolute left-10 top-2 text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                    Password
                </label>
                <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-blue-500 transition"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <span className="absolute right-10 top-3 text-gray-300" title="Password is case sensitive">
                    <Info size={16} />
                </span>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="accent-blue-600" />
                    Remember me
                </label>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                    Forgot password?
                </a>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center font-semibold text-lg gap-2"
            >
                <LogIn className="w-5 h-5" />
                Log In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-3 text-gray-400 text-sm">or</span>
                <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
                <button className="flex items-center w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
                    <img src="/images/google.png" alt="Google" className="w-6 h-6 mr-3" />
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition">
                        Continue with Google
                    </span>
                </button>
                <button className="flex items-center w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
                    <LogIn className="text-gray-700 w-6 h-6 mr-3" />
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition">
                        Continue with X
                    </span>
                </button>
            </div>

            {/* Help & Security */}
            <div className="text-center text-xs text-gray-400 mt-4">
                <a href="#" className="text-blue-600 hover:underline">
                    Need help logging in?
                </a>
                <div className="mt-2">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                        href="https://policies.google.com/privacy"
                        className="text-blue-600 hover:underline"
                    >
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://policies.google.com/terms"
                        className="text-blue-600 hover:underline"
                    >
                        Terms of Service
                    </a>{" "}
                    apply.
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
