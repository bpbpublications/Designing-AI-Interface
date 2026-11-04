import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function ContentPreviewRefinement() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-3">
            <span className="font-medium">AI Draft v1:</span> 
            <span className="text-green-600"> "Your order will arrive tomorrow."</span>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="text-blue-600">
              Regenerate
            </Button>
            <Button size="sm" variant="outline">
              Refine
            </Button>
            <Button size="sm" variant="outline">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}