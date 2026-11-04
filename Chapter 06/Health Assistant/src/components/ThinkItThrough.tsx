import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ThinkItThrough() {
  return (
    <Card className="p-6 mb-6 bg-card shadow-lg border-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-secondary/80 rounded-lg text-sm text-secondary-foreground/80">
            S2 • Think It Through
          </span>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 rounded-lg">
          See guidance
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </Card>
  );
}