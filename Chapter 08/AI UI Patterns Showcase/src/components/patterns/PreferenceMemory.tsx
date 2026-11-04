import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function PreferenceMemory() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-3">
            <span className="font-medium">AI:</span> "Shall I rewrite in your usual 'Formal & Concise' style?"
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="default">
              Yes
            </Button>
            <Button size="sm" variant="outline">
              No, Change Style
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}