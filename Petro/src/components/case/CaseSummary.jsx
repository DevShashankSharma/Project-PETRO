import {
    CheckCircle,
    Circle,
} from "lucide-react";
// Removed ArrowRight (was unused)

const caseDetails = {
    id: "C-10239",
    title: "ATM Robbery at Central Plaza",
    registeredOn: "2025-06-01",
    location: "Central Plaza, Jaipur",
    currentStatus: "Under Investigation",
    type: "Robbery",
    officer: "Alice Johnson",
    officerBadge: "A-1023",
    officerContact: "+91 98765 43210",
    officerEmail: "alice.johnson@jaipurpolice.gov.in",
    officerRating: 4.8,
    department: "Jaipur City Police",
    priority: "High",
    suspects: [
        { name: "Ravi Sharma", status: "Arrested", notes: "Confessed during interrogation" },
        { name: "Unknown Male", status: "Identified", notes: "Seen in CCTV footage" }
    ],
    evidence: [
        "CCTV footage",
        "Fingerprint scans",
        "Cash bundle recovered",
        "Witness statements",
        "Vehicle registration logs"
    ],
    witnesses: [
        "Ramesh Gupta (Shopkeeper)",
        "Sunita Devi (Security Guard)",
        "Ajay Singh (Bystander)"
    ],
    pendingActions: [
        "Court trial scheduled",
        "Forensic report awaited",
        "Suspect 2 to be apprehended"
    ],
    timeline: [
        { stage: "Case Registered", date: "2025-06-01", desc: "FIR lodged at Jaipur City Police Station" },
        { stage: "Initial Investigation Started", date: "2025-06-02", desc: "Team assigned, area cordoned" },
        { stage: "Evidence Collected", date: "2025-06-04", desc: "CCTV, fingerprints, cash bundle" },
        { stage: "Suspect Identified", date: "2025-06-06", desc: "Suspect recognized from footage" },
        { stage: "Arrest Made", date: "2025-06-08", desc: "Ravi Sharma arrested" },
        { stage: "Case Solved", date: "2025-06-10", desc: "Major evidence submitted to court" },
    ],
    relatedCases: [
        { id: "C-10198", title: "ATM Skimming Attempt", date: "2025-05-15" },
        { id: "C-10145", title: "Bank Burglary", date: "2025-04-20" }
    ],
    notes: [
        { author: "Alice Johnson", date: "2025-06-02", text: "Area sealed, initial suspects listed." },
        { author: "Alice Johnson", date: "2025-06-04", text: "Evidence sent to forensics." },
        { author: "Alice Johnson", date: "2025-06-08", text: "Suspect confessed, awaiting trial." }
    ]
};

const getStatusColor = (idx, current) => {
    if (idx < current) return "bg-green-500 border-green-500 text-white";
    if (idx === current) return "bg-blue-600 border-blue-600 text-white animate-pulse";
    return "bg-gray-200 border-gray-300 text-gray-400";
};

const getLineColor = (idx, current) => {
    if (idx < current) return "bg-green-500";
    if (idx === current) return "bg-blue-600";
    return "bg-gray-300";
};

const getCurrentStep = () => {
    // Find the latest completed step (simulate with currentStatus)
    // Removed statusMap (was unused)
    if (caseDetails.currentStatus === "Under Investigation") return 3;
    if (caseDetails.currentStatus === "Case Solved") return 5;
    return 0;
};

const CaseSummary = () => {
    const currentStep = getCurrentStep();

    return (
        <div>
            <section className="rounded-3xl border border-blue-200 dark:border-blue-900 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-900/80 dark:to-blue-950 p-6">
                <h2 className="text-xl font-extrabold mb-8 text-gray-800 dark:text-white flex items-center gap-3 tracking-tight">
                    <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                    Case Progress
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-2 py-6">
                    {caseDetails.timeline.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center relative w-full">
                            {/* Step Icon */}
                            <div className={`flex flex-col items-center z-10`}>
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold text-lg shadow-md ${getStatusColor(idx, currentStep)}`}
                                >
                                    {idx < currentStep ? (
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    ) : idx === currentStep ? (
                                        <Circle className="w-6 h-6 text-white" />
                                    ) : (
                                        <Circle className="w-6 h-6 text-gray-400" />
                                    )}
                                </div>
                                <div className="mt-2 text-center">
                                    <div className={`text-sm font-semibold ${idx === currentStep ? "text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-200"}`}>
                                        {step.stage}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{step.date}</div>
                                </div>
                                <div className="text-xs text-blue-500 dark:text-blue-300 italic mt-1">{step.desc}</div>
                            </div>
                            {/* Connector Line */}
                            {idx !== caseDetails.timeline.length - 1 && (
                                <div className="hidden md:block absolute top-5 right-[-50%] w-full h-1">
                                    <div className={`h-1 w-full rounded-full ${getLineColor(idx, currentStep)}`}></div>
                                </div>
                            )}
                            {/* Mobile vertical line */}
                            {idx !== caseDetails.timeline.length - 1 && (
                                <div className="md:hidden w-1 h-8 bg-gray-300 mx-auto my-2 rounded-full"></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CaseSummary;
