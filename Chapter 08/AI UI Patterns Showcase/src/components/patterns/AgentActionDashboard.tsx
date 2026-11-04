import { Card } from "../ui/card";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

export function AgentActionDashboard() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <h3 className="mb-3">Agent Tasks Status</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Sent 5 follow-up emails</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Generated 3 reports</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>Drafting proposal</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}