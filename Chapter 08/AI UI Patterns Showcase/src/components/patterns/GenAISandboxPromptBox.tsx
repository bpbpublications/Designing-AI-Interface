import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function GenAISandboxPromptBox() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-3">
            <span className="font-medium">Prompt:</span> <span className="text-green-600">"Write a short poem about rain."</span>
          </div>
          
          <Button size="sm" variant="outline" className="text-blue-600">
            Generate Draft
          </Button>
        </div>
      </div>
    </Card>
  );
}