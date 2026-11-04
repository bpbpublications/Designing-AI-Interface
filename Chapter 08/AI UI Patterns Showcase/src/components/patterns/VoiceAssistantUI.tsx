import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Mic, Check, X } from "lucide-react";

export function VoiceAssistantUI() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-3">
            <Mic className="w-4 h-4 text-blue-500" />
            <span className="text-sm">Listening...</span>
          </div>
          
          <div className="text-sm mb-4">
            <div className="mb-2">
              <span className="font-medium">AI:</span> "Setting a reminder for tomorrow at 9 AM."
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" className="flex items-center gap-1">
              <Check className="w-3 h-3" />
              Confirm
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <X className="w-3 h-3" />
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}