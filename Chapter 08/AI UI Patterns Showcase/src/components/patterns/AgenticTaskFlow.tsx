import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function AgenticTaskFlow() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-3">
            <span className="text-orange-500">AI:</span> <span className="text-green-600">"Do you want me to book this flight?"</span>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="text-blue-600">
              Yes
            </Button>
            <Button size="sm" variant="outline" className="text-blue-600">
              No
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}