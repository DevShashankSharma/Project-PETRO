import PendingCasesCard from "./PendingCasesCard";
import UserProfile from "./UserProfile";
import RatingComponent from "./RatingComponent";
import EfficiencyComponent from "./EfficiencyComponent";
import SolvedCasesCard from "./SolvedCasesCard";

export default function OfficerProfileCard() {
    return (
        <div className="relative bg-[#0f172a] bg-opacity-90 shadow-xl rounded-2xl grid grid-cols-[2fr_1fr]">
            <div className="border-r border-gray-500 m-1">
                <UserProfile />
                <div className="flex gap-4 p-8">
                    <RatingComponent />
                    <EfficiencyComponent />
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <PendingCasesCard />
                <SolvedCasesCard />
            </div>
        </div>
    );
}
