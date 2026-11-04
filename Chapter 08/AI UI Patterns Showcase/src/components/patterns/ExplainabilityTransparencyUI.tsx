import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function ExplainabilityTransparencyUI() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-3">
            <span className="font-medium">Decision:</span> Loan Approved
          </div>
          
          <div className="mb-3">
            <span className="font-medium">Reasons:</span>
          </div>
          
          <div className="space-y-2 text-sm mb-4">
            <div className="flex items-center gap-2">
              <span>• Credit Score: 720</span>
              <Badge variant="secondary" className="text-xs">High</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span>• Income Stability:</span>
              <Badge variant="secondary" className="text-xs">Strong</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span>• Risk Level:</span>
              <Badge variant="secondary" className="text-xs">Low</Badge>
            </div>
          </div>
          
          <Button size="sm" variant="outline">
            View More Details
          </Button>
        </div>
      </div>
    </Card>
  );
}