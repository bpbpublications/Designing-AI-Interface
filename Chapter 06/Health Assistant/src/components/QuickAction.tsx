import { Pill } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function QuickAction() {
  return (
    <Card className="p-6 mb-6 bg-card shadow-lg border-0">
      <div className="flex items-center gap-2 mb-4">
        <span className="px-2 py-1 bg-secondary/80 rounded-lg text-sm text-secondary-foreground/80">
          S1 • Quick Action
        </span>
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg">
          <Pill className="w-4 h-4 text-orange-600" />
        </div>
        <span className="text-orange-600">Time for Metformin 500 mg</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Button variant="default" size="sm" className="rounded-lg shadow-sm">
          Mark Taken
        </Button>
        <Button variant="outline" size="sm" className="rounded-lg shadow-sm">
          Snooze 15m
        </Button>
        <Button variant="outline" size="sm" className="rounded-lg shadow-sm">
          I don't have it
        </Button>
      </div>

      <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <p className="text-sm text-blue-700">
          <span className="font-medium">Tip:</span> A short walk afterwards improves uptake
        </p>
      </div>
    </Card>
  );
}