import {
    MapPin,
    CalendarDays,
    Briefcase,
    ShieldCheck,
    FileText,
    BadgeCheck,
    Phone,
    Mail,
    Star,
    ClipboardList,
    User
} from "lucide-react";

// Example officer image (replace with real image or dynamic source)
const officerImg = "https://randomuser.me/api/portraits/men/32.jpg";
const registeredByImg = "https://randomuser.me/api/portraits/men/45.jpg";

const caseDetails = {
    id: "C-10239",
    title: "ATM Robbery at Central Plaza",
    registeredOn: "2025-06-01",
    registeredBy: {
        name: "Inspector Rajesh Verma",
        badge: "R-2001",
        contact: "+91 99887 66554",
        email: "rajesh.verma@jaipurpolice.gov.in"
    },
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

const CaseIntroComponent = () => {
    return (
        <div>
            <section className="rounded-3xl border border-blue-200 dark:border-blue-900 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-900/80 dark:to-blue-950 p-8 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none rounded-3xl border-4 border-transparent" style={{
                    background: "linear-gradient(120deg, #38bdf8 0%, #6366f1 100%)",
                    maskImage: "linear-gradient(#fff 0 0)",
                    WebkitMaskImage: "linear-gradient(#fff 0 0)",
                    opacity: 0.10,
                    zIndex: 0
                }} />
                <div className="relative z-10">
                    {/* Title and Priority */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            <BadgeCheck className="w-10 h-10 text-blue-500 drop-shadow" />
                            <div>
                                <h1 className="text-3xl font-black text-gray-800 dark:text-white tracking-tight">
                                    {caseDetails.title}
                                </h1>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                        ${caseDetails.priority === "High"
                                            ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700"
                                            : "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700"
                                        }`}>
                                        {caseDetails.priority} Priority
                                    </span>
                                    <span className="px-2 py-1 rounded-full bg-yellow-500 text-white text-xs font-medium ml-2">
                                        {caseDetails.currentStatus}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <ClipboardList size={16} />
                                <span className="font-semibold">Department:</span> {caseDetails.department}
                            </div>
                            <div className="flex items-center gap-2">
                                <FileText size={16} />
                                <span className="font-semibold">Case ID:</span> {caseDetails.id}
                            </div>
                        </div>
                    </div>
                    {/* Case Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <span className="flex items-center gap-1">
                            <Briefcase size={16} /> <span className="font-semibold">Type:</span> {caseDetails.type}
                        </span>
                        <span className="flex items-center gap-1">
                            <CalendarDays size={16} /> <span className="font-semibold">Registered:</span> {caseDetails.registeredOn}
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin size={16} /> {caseDetails.location}
                        </span>
                    </div>
                    {/* Registered By User */}
                    <div className="flex items-center gap-4 mb-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800 shadow-sm">
                        <img
                            src={registeredByImg}
                            alt="Registered By"
                            className="w-12 h-12 rounded-full border-2 border-blue-300 shadow"
                        />
                        <div className="flex flex-col">
                            <span className="font-semibold text-blue-800 dark:text-blue-200 flex items-center gap-1">
                                <User className="w-4 h-4" />
                                Registered By: {caseDetails.registeredBy.name}
                                <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                    Badge: {caseDetails.registeredBy.badge}
                                </span>
                            </span>
                            <span className="flex items-center gap-2 text-xs mt-1 text-blue-700 dark:text-blue-200">
                                <Phone className="w-4 h-4" /> {caseDetails.registeredBy.contact}
                                <Mail className="w-4 h-4 ml-2" /> {caseDetails.registeredBy.email}
                            </span>
                        </div>
                    </div>
                    {/* Officer Info */}
                    <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4">
                        <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-gray-800/60 rounded-2xl p-3 shadow">
                            <img
                                src={officerImg}
                                alt="Officer"
                                className="w-12 h-12 rounded-full border-2 border-blue-400 shadow"
                            />
                            <div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                                    <span className="font-semibold">Assigned Officer:</span> {caseDetails.officer}
                                    <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                                        Badge: {caseDetails.officerBadge}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <Star className="w-4 h-4 text-yellow-500" /> <span>{caseDetails.officerRating}/5</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs mt-1 text-blue-700 dark:text-blue-200">
                                    <Phone className="w-4 h-4" /> {caseDetails.officerContact}
                                    <Mail className="w-4 h-4 ml-2" /> {caseDetails.officerEmail}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseIntroComponent
