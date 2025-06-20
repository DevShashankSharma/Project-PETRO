import { useState } from "react";
import { LogIn, KeyRound, Mail, Lock, Phone, User, CreditCard } from "lucide-react";

const AuthPage = () => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-96">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    {isSignup ? "Create an Account" : "Welcome Back"}
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    {isSignup ? "Sign up to get started" : "Login to your account"}
                </p>

                {/* Social Login Buttons */}
                <div className="space-y-3">
                    <button className="flex items-center w-full bg-gray-100 border rounded-lg py-2 px-4 hover:bg-gray-200 transition">
                        <img src="/images/google.png" alt="Google" className="w-6 h-6 mr-3" />
                        <span className="text-gray-700">Continue with Google</span>
                    </button>
                    <button className="flex items-center w-full bg-gray-100 border rounded-lg py-2 px-4 hover:bg-gray-200 transition">
                        <LogIn className="text-gray-700 w-6 h-6 mr-3" />
                        <span className="text-gray-700">Continue with X</span>
                    </button>
                </div>

                <div className="flex items-center my-4">
                    <div className="flex-1 border-t"></div>
                    <span className="px-3 text-gray-500">Or</span>
                    <div className="flex-1 border-t"></div>
                </div>

                {/* Login / Signup Form */}
                <form className="space-y-4 text-gray-400">
                    {isSignup && (
                        <>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="relative">
                                <CreditCard className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Aadhar Number"
                                    maxLength="12"
                                    className="w-full border rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="relative">
                                <Phone className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </>
                    )}

                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {isSignup && (
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full border rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center justify-center"
                    >
                        {isSignup ? <KeyRound className="w-5 h-5 mr-2" /> : <LogIn className="w-5 h-5 mr-2" />}
                        {isSignup ? "Sign Up" : "Log In"}
                    </button>
                </form>

                {/* Forgot Password (Only for Login) */}
                {!isSignup && (
                    <div className="text-right mt-2">
                        <a href="#" className="text-blue-600 hover:underline text-sm">
                            Forgot password?
                        </a>
                    </div>
                )}

                {/* Terms & Privacy (Only for Signup) */}
                {isSignup && (
                    <div className="text-center text-gray-500 text-sm mt-4">
                        By signing up, you agree to our{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </a>.
                    </div>
                )}

                {/* Already Have an Account? */}
                <div className="text-center text-sm text-gray-500 mt-4">
                    {isSignup ? (
                        <>
                            Already have an account?{" "}
                            <button onClick={() => setIsSignup(false)} className="text-blue-600 hover:underline">
                                Log in
                            </button>
                        </>
                    ) : (
                        <>
                            Don&apos;t have an account?{" "}
                            <button onClick={() => setIsSignup(true)} className="text-blue-600 hover:underline">
                                Sign up
                            </button>
                        </>
                    )}
                </div>

                {/* Get Help */}
                <div className="text-center text-sm text-gray-500 mt-2">
                    <a href="#" className="text-blue-600 hover:underline">
                        Get Help
                    </a>
                </div>

                {/* Google reCAPTCHA */}
                <div className="text-center text-xs text-gray-400 mt-3">
                    This site is protected by reCAPTCHA Enterprise and the Google{" "}
                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">
                        Terms of Service
                    </a>{" "}
                    apply.
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
