import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { AlertTriangle } from "lucide-react";

export function HumanInTheLoopReviewConsole() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-3">
            <span className="font-medium">AI Draft:</span> "Contract for Supplier X"
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <span className="text-sm">Requires Review</span>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Approve
            </Button>
            <Button size="sm" variant="outline">
              Edit
            </Button>
            <Button size="sm" variant="outline">
              Reject
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}