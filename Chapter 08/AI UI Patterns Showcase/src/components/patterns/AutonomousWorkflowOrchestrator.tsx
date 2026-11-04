import { Card } from "../ui/card";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

export function AutonomousWorkflowOrchestrator() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <h3 className="mb-3">Workflow: Vendor Onboarding</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Step 1: Verify credentials</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Step 2: Approve budget</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Step 3: Create account</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>Step 4: Send welcome email</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}