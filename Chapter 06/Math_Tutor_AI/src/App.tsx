import { HeaderSection } from "./components/HeaderSection";
import { ProgressCard } from "./components/ProgressCard";
import { ActionButtons } from "./components/ActionButtons";

export default function App() {
  const handleContinue = () => {
    console.log("Continue clicked");
    // Add your continue logic here
  };

  const handleReviewHints = () => {
    console.log("Review Hints clicked");
    // Add your review hints logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20 p-4">
      <div className="max-w-2xl mx-auto pt-8 pb-12">
        <HeaderSection />
        
        <div className="space-y-6">
          <ProgressCard
            progress={80}
            exercisesLeft={2}
            badgeName="Algebra Starter"
          />
          
          <ActionButtons
            continueCount={2}
            onContinue={handleContinue}
            onReviewHints={handleReviewHints}
          />
        </div>
        
        {/* Additional premium touches */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            AI Tutor is ready to help
          </div>
        </div>
      </div>
    </div>
  );
}