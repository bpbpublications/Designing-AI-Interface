import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

export function AISidebarUI() {
  return (
    <div className="max-w-2xl mx-auto flex gap-4">
      <Card className="flex-1 p-4">
        <h3 className="mb-2">Document Editor (Main Window)</h3>
        <div className="text-sm text-muted-foreground">
          Main content editing area...
        </div>
      </Card>
      
      <Card className="w-64 p-4">
        <h4 className="mb-3">AI Assistant Panel</h4>
        <div className="space-y-3">
          <div>
            <div className="text-sm font-medium mb-2">Suggested Outline:</div>
            <div className="space-y-1 text-sm">
              <div>1. Intro</div>
              <div>2. Key findings</div>
              <div>3. Recommendations</div>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline">Insert</Button>
            <Button size="sm" variant="outline">Refine</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}