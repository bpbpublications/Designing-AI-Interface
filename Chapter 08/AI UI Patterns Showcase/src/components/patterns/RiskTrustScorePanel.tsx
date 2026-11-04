import { Card } from "../ui/card";
import { Progress } from "../ui/progress";

export function RiskTrustScorePanel() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-3">
            <span className="font-medium">Trust Score: 78% (Moderate)</span>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="text-sm mb-1">Data freshness: High</div>
              <Progress value={90} className="h-2" />
            </div>
            
            <div>
              <div className="text-sm mb-1">Bias risk: Medium</div>
              <Progress value={60} className="h-2" />
            </div>
            
            <div>
              <div className="text-sm mb-1">Confidence: Strong</div>
              <Progress value={85} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}