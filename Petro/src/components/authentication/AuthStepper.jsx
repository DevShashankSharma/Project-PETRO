import { useState } from "react";
import UserTypeSelector from "./UserTypeSelector";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import SelectAuthType from "./SelectAuthType";

const
    AuthStepper = () => {
        const [step, setStep] = useState(1);
        const [userType, setUserType] = useState("");
        const [action, setAction] = useState(""); // "login" or "signup"
        const [selectedAction, setSelectedAction] = useState(""); // for visual feedback

        const nextStep = () => setStep((prev) => prev + 1);
        const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

        const handleUserTypeSelect = (type) => {
            setUserType(type);
        };

        const handleActionSelect = (type) => {
            setAction(type);
            setSelectedAction(type);
        };  

        const steps = [
            { label: "Select Role" },
            { label: "Choose Action" },
            { label: "Authenticate" }
        ];

        return (
            <div className="bg-gradient-to-br from-[#101828] via-[#181f3a] to-[#1e293b] shadow-2xl rounded-2xl relative p-0 border border-gray-800  h-fit">
                {/* Modern Decorative Gradients */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-purple-400/20 rounded-full blur-3xl z-0"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-purple-400/30 to-blue-400/20 rounded-full blur-3xl z-0"></div>
                <Sparkles className="absolute top-8 right-8 text-purple-300 opacity-60 w-12 h-12 animate-pulse z-0" />
                <Sparkles className="absolute bottom-8 left-8 text-blue-300 opacity-60 w-10 h-10 animate-pulse z-0" />

                {/* Card Content */}
                <div className="  z-10 px-2 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12">
                    {/* Advanced Stepper Progress */}
                    <div className="mb-10">
                        <div className="flex items-center justify-between mb-6  ">
                            {steps.map((s, i) => {
                                const isActive = step === i + 1;
                                const isCompleted = step > i + 1;
                                return (
                                    <div key={s.label} className="flex-1 flex flex-col items-center min-w-[90px] relative">
                                        <div className={`flex items-center justify-center rounded-full border-2 font-bold text-lg shadow transition-all duration-300
                                            w-12 h-12 sm:w-14 sm:h-14
                                            ${isActive
                                                ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white border-blue-500 shadow-2xl scale-110 ring-4 ring-purple-200"
                                                : isCompleted
                                                    ? "bg-green-400 text-white border-green-400 shadow-md"
                                                    : "bg-gray-900 text-gray-400 border-gray-700"}
                                        `}>
                                            {isCompleted ? <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" /> : i + 1}
                                        </div>
                                        <span className={`mt-2 text-xs sm:text-base font-semibold tracking-wide transition-all duration-200 ${isActive ? "text-blue-300" : isCompleted ? "text-green-400" : "text-gray-500"}`}>{s.label}</span>
                                        {/* Connector line */}
                                        {i < steps.length - 1 && (
                                            <div className="absolute top-6 sm:top-7 right-0 left-full flex items-center justify-center">
                                                <div className={`h-1 w-16 sm:w-28 md:w-36 rounded-full transition-all duration-300
                                                    ${isCompleted
                                                        ? "bg-gradient-to-r from-green-400 to-blue-400"
                                                        : isActive
                                                            ? "bg-gradient-to-r from-blue-400 to-purple-400"
                                                            : "bg-gray-700"}
                                                `}></div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {/* Linear Animated Progress Bar */}
                        <div className="w-full h-2 bg-gray-800 rounded-full relative overflow-hidden mt-2">
                            <div
                                className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                                style={{
                                    width: `${((step - 1) / (steps.length - 1)) * 100}%`
                                }}
                            />
                        </div>
                    </div>

                    {/* Step Content */}
                    <div>
                        {step === 1 && (
                            <>
                                <UserTypeSelector setUserType={handleUserTypeSelect} />
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <SelectAuthType 
                                    handleActionSelect={handleActionSelect}
                                    selectedAction={selectedAction}
                                />
                            </>
                        )}

                        {step === 3 && (
                            <div className="animate-fade-in">
                                <div className="rounded-2xl bg-white/90 shadow-lg p-6 sm:p-8">
                                    {action === "login" ? (
                                        <LoginForm userType={userType} />
                                    ) : (
                                        <SignupForm userType={userType} />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between mt-10 gap-4">
                        <button
                            onClick={prevStep}
                            disabled={step === 1}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gray-800 text-gray-400 shadow hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                        >
                            <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                        <button
                            onClick={nextStep}
                            disabled={!userType}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg z-10`}
                        >
                            Next <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

export default AuthStepper;
