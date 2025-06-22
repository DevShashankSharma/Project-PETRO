import CaseChatBox from "./CaseChatBox";
import CaseInfoComponent from "./CaseInfoComponent";
import CaseIntroComponent from "./CaseIntroComponent";
import CaseSummary from "./CaseSummary";
import RelatedCases from "./RelatedCaseComponent";

export default function CasePage() {

    return (
        <div className="grid grid-cols-[2fr_1fr] gap-4 p-4">
            <div className="flex flex-col gap-4">
                <CaseIntroComponent />
                <CaseSummary />
                <CaseInfoComponent />
                <RelatedCases />
            </div>
            <div>
                <CaseChatBox />
            </div>
        </div>
    );
}
