import PendingCasesCard from "./PendingCasesCard";
import UserProfile from "./UserProfile";


export default function OfficerProfileCard() {
    return (
        <div className="bg-[#101828] shadow-2xl rounded-2xl grid grid-cols-[2fr_1fr]">

            <UserProfile />
            <PendingCasesCard />

        </div>
    );
}
