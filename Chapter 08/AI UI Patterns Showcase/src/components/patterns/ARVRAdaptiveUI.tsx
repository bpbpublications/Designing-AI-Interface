import { Card } from "../ui/card";
import { Eye, Sun, BarChart3 } from "lucide-react";

export function ARVRAdaptiveUI() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="mb-3 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="font-medium">VR Classroom</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Sun className="w-3 h-3" />
              <span>AI Adjusts Lighting → Dimmer</span>
            </div>
            
            <div className="flex items-center gap-2">
              <BarChart3 className="w-3 h-3" />
              <span>AI Adds Visual Aid → Floating Graph</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}