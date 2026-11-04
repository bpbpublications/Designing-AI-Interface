import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface UserOptionsProps {
  onViewData: () => void;
  onProvideContext: () => void;
  onEscalateReview: () => void;
}

export function UserOptions({ onViewData, onProvideContext, onEscalateReview }: UserOptionsProps) {
  return (
    <Card className="shadow-md border-0 bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-purple-600">User Options:</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-3">
          <Button 
            variant="outline" 
            onClick={onViewData}
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            [ View Supporting Data ]
          </Button>
          <Button 
            variant="outline" 
            onClick={onProvideContext}
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            [ Provide Additional Context ]
          </Button>
          <Button 
            variant="outline" 
            onClick={onEscalateReview}
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            [ Escalate Review ]
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}