import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface AiAssessmentProps {
  riskLevel: string;
  confidence: string;
}

export function AiAssessment({ riskLevel, confidence }: AiAssessmentProps) {
  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high risk':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      case 'medium risk':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      case 'low risk':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <Card className="shadow-md border-0 bg-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground">AI Assessment:</span>
          <Badge className={`${getRiskColor(riskLevel)} font-medium px-3 py-1`}>
            {riskLevel.toUpperCase()}
          </Badge>
          <span className="text-muted-foreground">({confidence} confidence)</span>
        </div>
      </CardContent>
    </Card>
  );
}