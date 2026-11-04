import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Plus } from "lucide-react";

export function AIBrainstormingCanvas() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <h3 className="mb-3">Brainstorm: Marketing Ideas</h3>
          
          <div className="space-y-2 text-sm">
            <div>• "AI for Everyone" campaign</div>
            <div>• "Future Ready" slogans</div>
            <div>• "Unlock Productivity"</div>
          </div>
          
          <div className="mt-4">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Plus className="w-3 h-3" />
              Add More Ideas
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}