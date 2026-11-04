import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function InlineAgentHelpers() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-medium">Invoice Form:</span>
          </div>
          <div className="text-sm">Amount: $10,000</div>
        </div>
        
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-sm">
            <span className="font-medium">AI Alert:</span> "Unusual value — 10x higher than average vendor rate"
          </AlertDescription>
        </Alert>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Review</Button>
          <Button size="sm" variant="outline">Proceed Anyway</Button>
        </div>
      </div>
    </Card>
  );
}