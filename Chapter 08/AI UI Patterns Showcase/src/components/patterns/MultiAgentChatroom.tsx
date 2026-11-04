import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function MultiAgentChatroom() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-2">
            <span className="font-medium">User:</span> "Explain climate change."
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="border-l-2 border-blue-200 pl-2">
              <Badge variant="secondary" className="text-xs mb-1">ScienceBot</Badge>
              <div>"Focus on CO2 levels."</div>
            </div>
            
            <div className="border-l-2 border-green-200 pl-2">
              <Badge variant="secondary" className="text-xs mb-1">HistoryBot</Badge>
              <div>"Show timeline events."</div>
            </div>
            
            <div className="border-l-2 border-purple-200 pl-2">
              <Badge variant="secondary" className="text-xs mb-1">PolicyBot</Badge>
              <div>"Suggest regulations."</div>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Quadrant 3: Assistive + System-Centric
          <br />
          (Assistive, but embedded in workflows/systems)
        </div>
      </div>
    </Card>
  );
}