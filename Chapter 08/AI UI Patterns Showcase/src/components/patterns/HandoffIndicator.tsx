import { Card } from "../ui/card";

export function HandoffIndicator() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-orange-500">Mode:</span>
            <span className="text-orange-600">[Creative Drafting]</span>
            <span>→</span>
            <span className="text-orange-600">[Execution Mode]</span>
          </div>
        </div>
      </div>
    </Card>
  );
}