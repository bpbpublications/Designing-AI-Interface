import { Card } from "../ui/card";

export function SafeToFailDefault() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="mb-2">
            <span className="text-blue-600">Action:</span> <span className="text-green-600">"Schedule meeting"</span>
          </div>
          
          <div>
            <span className="text-blue-600">Mode:</span> <span className="text-orange-600">[Draft Calendar Entry]</span> <span className="text-muted-foreground">(not yet sent)</span>
          </div>
        </div>
      </div>
    </Card>
  );
}