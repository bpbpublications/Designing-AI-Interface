import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Volume2 } from "lucide-react";

export function AccessibilityFocusedAIUI() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-3">
            <Volume2 className="w-4 h-4 text-blue-500" />
            <span className="font-medium">Screen Reader Active</span>
          </div>
          
          <div className="mb-3 p-2 bg-muted/50 rounded">
            <span className="font-medium">AI:</span> "You have 3 new messages."
          </div>
          
          <div className="mb-3">
            <span className="font-medium">Options:</span>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Read Aloud
            </Button>
            <Button size="sm" variant="outline">
              Summarize
            </Button>
            <Button size="sm" variant="outline">
              Reply
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}