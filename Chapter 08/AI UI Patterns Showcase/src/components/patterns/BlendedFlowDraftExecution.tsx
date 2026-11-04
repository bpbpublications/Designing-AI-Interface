import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function BlendedFlowDraftExecution() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-3">
            <span className="font-medium">AI Draft Email:</span>
          </div>
          
          <div className="mb-3 text-green-600">
            "Hello team, our meeting is at 3PM."
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="text-blue-600">
              Edit Draft
            </Button>
            <Button size="sm" variant="outline">
              Schedule Send
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}