import { 
    FileSearch,
    FileCheck2,
} from "lucide-react";

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

const RelatedCaseComponent = () => {
    return (
        <div>
            <section className="rounded-3xl border border-blue-200 dark:border-blue-900 shadow bg-white dark:bg-gray-900 p-6">
                <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                    <FileSearch className="w-5 h-5 text-blue-400" />
                    Related Cases
                </h2>
                <ul className="ml-2 space-y-2">
                    {caseDetails.relatedCases.map((rc) => (
                        <li key={rc.id} className="flex items-center gap-2 text-sm">
                            <FileCheck2 className="w-4 h-4 text-blue-500" />
                            <span className="font-semibold">{rc.title}</span>
                            <span className="text-xs text-gray-400 ml-2">{rc.date}</span>
                            <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs border border-blue-200 dark:border-blue-800">
                                {rc.id}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default RelatedCaseComponent
