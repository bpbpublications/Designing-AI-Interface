import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function ConversationalChatUI() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 bg-muted/50">
          <div className="mb-2">
            <span className="text-sm font-medium">User:</span> "Summarize this report"
          </div>
          <div className="border-t pt-2 mt-2">
            <span className="text-sm font-medium">AI:</span> "Here are 3 key points..."
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Regenerate
          </Button>
          <Button variant="outline" size="sm">
            Refine
          </Button>
        </div>
      </div>
    </Card>
  );
}