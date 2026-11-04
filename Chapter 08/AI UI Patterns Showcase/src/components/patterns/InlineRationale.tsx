import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function InlineRationale() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-3">
            <span className="font-medium">AI Suggestion:</span> 
            <span className="text-green-600"> "Use eco-friendly packaging."</span>
          </div>
          
          <div className="text-sm">
            <Badge variant="secondary" className="mb-2">Reason:</Badge>
            <p className="text-muted-foreground">
              "Detected keywords: sustainability, green"
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}