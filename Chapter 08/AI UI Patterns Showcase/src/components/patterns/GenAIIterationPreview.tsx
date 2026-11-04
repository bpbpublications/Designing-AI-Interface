import { Card } from "../ui/card";

export function GenAIIterationPreview() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-3 flex gap-2">
            <span>Draft 1</span>
            <span>|</span>
            <span>Draft 2</span>
            <span>|</span>
            <span>Draft 3</span>
          </div>
          
          <div>
            <span className="text-purple-600">User</span> picks: <span className="font-medium">Draft 2</span>
          </div>
        </div>
      </div>
    </Card>
  );
}