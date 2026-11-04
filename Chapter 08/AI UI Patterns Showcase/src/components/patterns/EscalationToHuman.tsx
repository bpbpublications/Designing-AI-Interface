import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function EscalationToHuman() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-3">
            <span className="text-green-600">AI:</span> <span className="text-green-600">"Unusual transaction detected."</span>
          </div>
          
          <Button size="sm" variant="outline" className="text-blue-600">
            Escalate to Compliance Officer
          </Button>
        </div>
      </div>
    </Card>
  );
}