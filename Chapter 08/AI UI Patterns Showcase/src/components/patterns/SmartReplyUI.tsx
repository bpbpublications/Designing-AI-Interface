import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function SmartReplyUI() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 bg-muted/50">
          <div className="mb-3">
            <span className="font-medium">Email Draft:</span>
          </div>
          <p className="text-sm mb-3">"Thanks for your quick update, I will"</p>
          
          <div className="space-y-2">
            <div className="text-sm font-medium">Suggestions:</div>
            <div className="space-y-1">
              <Button variant="outline" size="sm" className="w-full justify-start h-auto p-2">
                follow up tomorrow
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start h-auto p-2">
                get back to you soon
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start h-auto p-2">
                share the document today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}