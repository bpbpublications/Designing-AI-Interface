import { ApplicantInfo } from "./components/applicant-info";
import { AiAssessment } from "./components/ai-assessment";
import { BiasDisclaimer } from "./components/bias-disclaimer";
import { KeyFactors } from "./components/key-factors";
import { UserOptions } from "./components/user-options";
import { CorrectionPrompt } from "./components/correction-prompt";

export default function App() {
  const applicantData = {
    applicant: "Priya Singh",
    loanType: "Small Business",
    location: "Rural District, Bihar",
    requestedAmount: "₹4,50,000"
  };

  const assessmentData = {
    riskLevel: "HIGH RISK",
    confidence: "62%"
  };

  const keyFactors = [
    "Low credit history length (2 years)",
    "Irregular income records",
    "Lack of collateral data"
  ];

  const handleViewData = () => {
    console.log("View Supporting Data clicked");
  };

  const handleProvideContext = () => {
    console.log("Provide Additional Context clicked");
  };

  const handleEscalateReview = () => {
    console.log("Escalate Review clicked");
  };

  const handleAddFamilyIncome = () => {
    console.log("Add Family Income Proof clicked");
  };

  const handleAddCommunityGuarantee = () => {
    console.log("Add Community Guarantee clicked");
  };

  const handleUploadCollateral = () => {
    console.log("Upload Collateral clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full space-y-3">
        {/* Header */}
        <div className="text-center py-2">
          <h1 className="text-xl font-medium text-gray-900">
            Loan Application Review Dashboard
          </h1>
        </div>

        {/* Top Row - Applicant Info and AI Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <ApplicantInfo {...applicantData} />
          <AiAssessment {...assessmentData} />
        </div>

        {/* Bias Disclaimer - Full Width */}
        <BiasDisclaimer 
          message="Dataset underrepresents rural applicants."
          recommendation="before final decision."
        />

        {/* Bottom Row - Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <KeyFactors factors={keyFactors} />
          <UserOptions 
            onViewData={handleViewData}
            onProvideContext={handleProvideContext}
            onEscalateReview={handleEscalateReview}
          />
          <CorrectionPrompt 
            question="Did we miss context?"
            onAddFamilyIncome={handleAddFamilyIncome}
            onAddCommunityGuarantee={handleAddCommunityGuarantee}
            onUploadCollateral={handleUploadCollateral}
          />
        </div>
      </div>
    </div>
  );
}