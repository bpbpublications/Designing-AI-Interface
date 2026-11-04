import { Card } from "../ui/card";

export function DualViewPanel() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-green-600">Left:</span> AI Suggestions
            </div>
            <div>
              <span className="text-green-600">Right:</span> Approved Actions
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}