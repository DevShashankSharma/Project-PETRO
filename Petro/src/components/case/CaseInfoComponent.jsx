import {
    Users,
    Camera,
    Gavel,
    AlertTriangle,
    MessageCircle,
    ClipboardList,
    User,
    Info,
    BadgeCheck,
    FileText,
    Star,
    Phone,
    Mail,
} from "lucide-react";
import { useState } from "react";

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

const CaseInfoComponent = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <section className="rounded-3xl border border-blue-200 dark:border-blue-900 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-900/80 dark:to-blue-950 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-extrabold text-gray-800 dark:text-white flex items-center gap-2 tracking-tight">
                        <Info className="w-5 h-5 text-blue-400" />
                        Case Information
                    </h2>
                    <button
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Show Less" : "Show More"}
                    </button>
                </div>
                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold">Officer:</span> {caseDetails.officer}
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs border border-blue-200 dark:border-blue-800">
                            Badge: {caseDetails.officerBadge}
                        </span>
                        <span className="ml-2 flex items-center gap-1 text-yellow-600 dark:text-yellow-300">
                            <Star className="w-4 h-4" /> {caseDetails.officerRating}/5
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{caseDetails.officerContact}</span>
                        <Mail className="w-4 h-4 ml-2" />
                        <span>{caseDetails.officerEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold">Case ID:</span> {caseDetails.id}
                    </div>
                    <div className="flex items-center gap-2">
                        <ClipboardList className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold">Department:</span> {caseDetails.department}
                    </div>
                </div>
                {expanded && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-300 font-semibold">
                                <Users className="w-4 h-4" /> Suspects
                            </div>
                            <ul className="ml-4 list-disc">
                                {caseDetails.suspects.map((s, i) => (
                                    <li key={i}>
                                        {s.name}{" "}
                                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold
                                            ${s.status === "Arrested"
                                                ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
                                                : "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300"
                                            }`
                                        }>
                                            {s.status}
                                        </span>
                                        <span className="ml-2 text-xs italic text-gray-400">{s.notes}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-green-600 dark:text-green-300 font-semibold">
                                <Camera className="w-4 h-4" /> Evidence Collected
                            </div>
                            <ul className="ml-4 list-disc">
                                {caseDetails.evidence.map((e, i) => (
                                    <li key={i}>{e}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-purple-600 dark:text-purple-300 font-semibold">
                                <User className="w-4 h-4" /> Witnesses
                            </div>
                            <ul className="ml-4 list-disc">
                                {caseDetails.witnesses.map((w, i) => (
                                    <li key={i}>{w}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-yellow-600 dark:text-yellow-300 font-semibold">
                                <Gavel className="w-4 h-4" /> Pending Actions
                            </div>
                            <ul className="ml-4 list-disc">
                                {caseDetails.pendingActions.map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-red-600 dark:text-red-300 font-semibold">
                                <AlertTriangle className="w-4 h-4" /> Case ID
                            </div>
                            <div className="ml-4">{caseDetails.id}</div>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-300 font-semibold">
                                <MessageCircle className="w-4 h-4" /> Officer Notes
                            </div>
                            <ul className="ml-4 list-disc">
                                {caseDetails.notes.map((n, i) => (
                                    <li key={i}>
                                        <span className="font-semibold">{n.author}</span> <span className="text-xs text-gray-400">({n.date})</span>: {n.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default CaseInfoComponent;
