import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export function InteractiveSimulation() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="text-sm mb-3">
          "What if AI increases prices 5%?"
        </div>
        
        <div className="border rounded-lg p-3 bg-muted/50">
          <div className="mb-3 font-medium">Predicted Outcome:</div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>Revenue: +12%</span>
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-red-500" />
              <span>Customer Loss: +3%</span>
            </div>
          </div>
        </div>
        
        <Button size="sm" variant="outline" className="w-full">
          Run Another Simulation
        </Button>
      </div>
    </Card>
  );
}