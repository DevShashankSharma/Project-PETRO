import AreaMap from './AreaMap';
import DailyCasesChart from './DailyCasesChart';
import PoliceAreaSelector from './PoliceAreaSelector';
import TopIssuesCard from './TopIssuesCard';
// import TopPerformer from './TopPerformer.jsx';
import InfoCard from './InfoCard.jsx';
import OfficerStats from './OfficersStats.jsx';
import TopPerformerCard from './TopPerformerCard.jsx';

const LeftDashboard = () => {
    return (
        <div className="flex flex-col h-full pl-2">
            <div className="grid grid-cols-[2fr_1fr]">

                {/* Left Panel: Map + Top Performer */}
                <div className="flex flex-col pt-1 space-y-4 overflow-hidden">
                    <AreaMap />
                    {/* <TopPerformer /> */}
                </div>

                {/* Right Panel: Selector + Charts + Issues */}
                <div className="flex flex-col pt-1 pr-2 space-y-4 overflow-y-auto h-[650px] light-scrollbar">

                    {/* Sticky Police Selector */}
                    <div className="sticky top-0 z-10 shadow-md rounded-md">
                        <PoliceAreaSelector />
                    </div>

                    {/* Scrollable Panels */}
                    <DailyCasesChart />
                    <TopIssuesCard />
                    <InfoCard />
                    <OfficerStats />
                    <TopPerformerCard />
                </div>

            </div>
        </div>
    );
};

export default LeftDashboard;
