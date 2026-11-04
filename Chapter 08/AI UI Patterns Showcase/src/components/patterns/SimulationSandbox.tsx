import { Card } from "../ui/card";

export function SimulationSandbox() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-3">
            <span className="font-medium">Preview Run:</span>
          </div>
          
          <div className="space-y-2 text-sm mb-3">
            <div>
              <span className="text-purple-600">Step 1:</span> Draft order
            </div>
            <div>
              <span className="text-purple-600">Step 2:</span> Estimate cost
            </div>
          </div>
          
          <div className="text-muted-foreground text-sm">
            (no real action yet)
          </div>
        </div>
      </div>
    </Card>
  );
}