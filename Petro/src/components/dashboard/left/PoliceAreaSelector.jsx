import { useState } from "react";

const adarshNagarCases = {
    "Adarsh Nagar": 28,
    "Raja Park": 35,
    "Moti Doongri Road": 22,
    "Barkat Nagar": 18,
    "Nehrunagar": 12,
    "Tilak Nagar": 26,
    "Govind Marg": 19,
    "Shanti Path": 14,
    "Ghat Gate": 31,
    "Jawahar Nagar": 21,
    "Sanganeri Gate": 29,
    "Neelkanth Colony": 10,
    "Seth Ji Ka Kund": 9,
    "Krishna Colony": 11,
    "Kachchi Basti": 24,
    "Trimurti Circle": 16,
    "Kailash Puri": 7,
    "Siddharth Nagar (partial)": 13,
    "Moti Doongri (partial)": 17,
    "Transport Nagar (partial)": 15,
};

export default function PoliceAreaSelector() {
    const [selectedArea, setSelectedArea] = useState("");

    const totalCases = Object.values(adarshNagarCases).reduce((acc, val) => acc + val, 0);

    return (
        <div className="max-w-md mx-auto bg-[#1e293b] shadow-lg p-2 text-white">
            <h2 className="text-xl font-bold text-center mb-4 text-purple-500 uppercase">
                Adarsh Nagar Police Areas
            </h2>

            <select
                className="w-full bg-[#101828] text-white p-3 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
            >
                <option value="" disabled>
                    -- Select Area --
                </option>
                <option value="All">All Areas — {totalCases} Total Cases</option>
                {Object.entries(adarshNagarCases).map(([area, cases]) => (
                    <option key={area} value={area}>
                        {area} — {cases} Cases
                    </option>
                ))}
            </select>

            {/* {selectedArea && (
                <div className="mt-6 p-4 bg-[#101828] border-l-4 border-purple-600 rounded">
                    {selectedArea === "All" ? (
                        <p className="text-sm text-purple-300">
                            <strong>All Areas Selected</strong>
                            <br />
                            <strong>Total Cases:</strong> {totalCases}
                        </p>
                    ) : (
                        <p className="text-sm text-purple-300">
                            <strong>Selected Area:</strong> {selectedArea}
                            <br />
                            <strong>Total Cases:</strong> {adarshNagarCases[selectedArea]}
                        </p>
                    )}
                </div>
            )} */}
        </div>
    );
}
