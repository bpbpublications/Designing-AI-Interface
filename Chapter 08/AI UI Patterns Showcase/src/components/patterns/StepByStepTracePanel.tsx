import { Card } from "../ui/card";

export function StepByStepTracePanel() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3 font-mono">
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-orange-500">[1]</span>
              <span>Check inventory</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">[2]</span>
              <span>Place <span className="text-green-600">order</span></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">[3]</span>
              <span>Generate <span className="font-medium">invoice</span></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">[4]</span>
              <span>Notify <span className="underline">user</span></span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}