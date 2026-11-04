import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { RefreshCw } from "lucide-react";

export function GenerativeEditorUI() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-2">
            <span className="font-medium">Title:</span> Marketing Slogan
          </div>
          
          <div className="mb-3 p-2 bg-muted/50 rounded">
            <span className="font-medium">Draft:</span> "Unlock tomorrow today"
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <RefreshCw className="w-3 h-3" />
              Regenerate
            </Button>
            <Button variant="outline" size="sm">
              Tone: Casual
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}