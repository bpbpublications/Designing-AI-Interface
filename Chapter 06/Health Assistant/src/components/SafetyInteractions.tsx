import { TrendingUp, Clock, AlertTriangle, Info } from "lucide-react";
import { Card } from "./ui/card";

export function SafetyInteractions() {
  return (
    <Card className="p-6 mb-6 bg-card shadow-lg border-0">
      <h3 className="mb-6 text-muted-foreground">Safety & Interactions</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Last dose:</span>
            <span className="font-medium">7:45 AM</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm">A1C trend:</span>
            <span className="font-medium text-green-600">improving</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-green-600" />
          <span className="text-sm">Interactions:</span>
          <span className="font-medium text-green-600">None detected with current meds</span>
        </div>

        <div className="flex items-start gap-3">
          <Info className="w-4 h-4 text-orange-600 mt-0.5" />
          <div className="flex-1">
            <span className="text-sm">Missed doses this week:</span>
            <span className="font-medium ml-1">1</span>
            <span className="text-orange-600 ml-2">→ Suggested plan to get back on track</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Info className="w-4 h-4 text-muted-foreground mt-0.5" />
          <div className="flex-1">
            <span className="text-sm font-medium">Why shown?</span>
            <span className="text-muted-foreground ml-1">Morning readings were high for 3 days</span>
          </div>
        </div>
      </div>
    </Card>
  );
}