import { Card } from "../ui/card";

export function TransparentStatusIndicator() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-red-500">AI Status:</span>
            <span className="text-orange-600">[Thinking...]</span>
            <span className="text-muted-foreground">Estimated Time: 12s</span>
          </div>
        </div>
      </div>
    </Card>
  );
}