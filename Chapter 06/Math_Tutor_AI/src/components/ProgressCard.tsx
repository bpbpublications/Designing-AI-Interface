import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { BookOpen, Award } from "lucide-react";

interface ProgressCardProps {
  progress: number;
  exercisesLeft: number;
  badgeName: string;
}

export function ProgressCard({ progress, exercisesLeft, badgeName }: ProgressCardProps) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-xl">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-muted-foreground mb-1">Today's Lesson Progress</h2>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="font-medium text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>
        
        <div className="flex items-start gap-3 p-4 bg-accent/30 rounded-xl border border-accent">
          <div className="p-1.5 bg-green-100 rounded-lg mt-0.5">
            <Award className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground">
              <span className="font-medium text-primary">{exercisesLeft} exercises left</span> to unlock{" "}
              <Badge variant="secondary" className="mx-1 bg-green-100 text-green-700 hover:bg-green-100">
                {badgeName}
              </Badge>
              badge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}