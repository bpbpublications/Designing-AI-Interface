import { Button } from "./ui/button";
import { Play, Lightbulb } from "lucide-react";

interface ActionButtonsProps {
  continueCount: number;
  onContinue: () => void;
  onReviewHints: () => void;
}

export function ActionButtons({ continueCount, onContinue, onReviewHints }: ActionButtonsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Button
        onClick={onContinue}
        className="h-14 rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 group"
        size="lg"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
            <Play className="w-4 h-4" />
          </div>
          <span>Continue ({continueCount})</span>
        </div>
      </Button>
      
      <Button
        onClick={onReviewHints}
        variant="outline"
        className="h-14 rounded-xl border-2 hover:bg-accent hover:border-accent-foreground/20 shadow-md hover:shadow-lg transition-all duration-200 group"
        size="lg"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-accent rounded-lg group-hover:bg-accent-foreground/10 transition-colors">
            <Lightbulb className="w-4 h-4 text-accent-foreground" />
          </div>
          <span>Review Hints</span>
        </div>
      </Button>
    </div>
  );
}