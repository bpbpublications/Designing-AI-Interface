import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ThumbsUp } from "lucide-react";

export function RecommendationFeed() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <h3 className="mb-3">Recommended for You</h3>
          
          <div className="space-y-2 text-sm">
            <div>• Movie: Inception</div>
            <div>• Series: Dark</div>
            <div>• Documentary: Explained</div>
          </div>
          
          <div className="mt-4">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <ThumbsUp className="w-3 h-3" />
              More Like This
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}