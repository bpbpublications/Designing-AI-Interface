import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Clock } from "lucide-react";

export function GovernanceComplianceUI() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-3 border-b pb-2">
            <span className="font-medium">Audit Log</span>
          </div>
          
          <div className="space-y-1 text-sm mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>10:01 AM — AI booked ticket</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>10:05 AM — AI flagged expense</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>10:07 AM — User approved report</span>
            </div>
          </div>
          
          <Button size="sm" variant="outline" className="w-full">
            Export Log
          </Button>
        </div>
      </div>
    </Card>
  );
}