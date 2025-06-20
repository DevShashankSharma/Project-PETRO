import LeftDashboard from './left/LeftDashboard'; 
import UserProfile from './right/UserProfile';

export default function AdvancedProblemsBarChart() {
    return (
        <div className="bg-[#101828] shadow-2xl rounded-2xl">

            <div className="grid grid-cols-[4fr_1fr] justify-between items-between"> 
                <LeftDashboard />
                <UserProfile />
            </div>

        </div>
    );
}
