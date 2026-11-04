import { Card } from "../ui/card";
import { Play } from "lucide-react";

export function ReplayMode() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-3 flex items-center gap-2">
            <Play className="w-4 h-4" />
            <span>Replay Agent Actions</span>
          </div>
          
          <div className="flex gap-2 text-sm">
            <span className="text-purple-600">Step 1</span>
            <span>→</span>
            <span className="text-purple-600">Step 2</span>
            <span>→</span>
            <span className="text-purple-600">Step 3</span>
          </div>
        </div>
      </div>
    </Card>
  );
}