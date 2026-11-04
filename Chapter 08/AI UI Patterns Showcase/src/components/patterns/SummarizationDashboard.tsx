import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Download, Share } from "lucide-react";

export function SummarizationDashboard() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <h3 className="mb-3">Meeting Summary</h3>
          
          <div className="space-y-2 text-sm">
            <div>• 12 attendees</div>
            <div>• 3 key decisions</div>
            <div>• 2 follow-up actions</div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Download className="w-3 h-3" />
              Export Notes
            </Button>
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Share className="w-3 h-3" />
              Share Email
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}