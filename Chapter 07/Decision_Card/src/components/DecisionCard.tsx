import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Eye, Users, MessageCircle } from "lucide-react";

interface DecisionCardProps {
  patientInfo: string;
  studyType: string;
  aiAssessment: string;
  confidence: number;
  confidenceLabel: string;
  onViewDetails?: () => void;
  onAskHumanReview?: () => void;
  onFeedback?: () => void;
}

export function DecisionCard({
  patientInfo,
  studyType,
  aiAssessment,
  confidence,
  confidenceLabel,
  onViewDetails,
  onAskHumanReview,
  onFeedback,
}: DecisionCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-700 text-lg">{patientInfo} • {studyType}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* AI Assessment */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 text-base">AI Assessment:</span>
            <span className="text-red-600 text-base font-medium">{aiAssessment}</span>
            <span className="text-gray-500 text-base">(Suggested)</span>
          </div>
          <Badge 
            variant="outline" 
            className="bg-amber-50 text-amber-700 border-amber-200 px-3 py-1 rounded-md"
          >
            Label: {confidenceLabel}
          </Badge>
        </div>

        {/* Confidence */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-base">Confidence:</span>
            <span className="text-gray-800 text-base font-medium">{confidence}%</span>
          </div>
          <div className="w-full">
            <Progress 
              value={confidence} 
              className="h-3 bg-gray-200 rounded-full"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-base">Actions:</span>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={onViewDetails}
                className="flex items-center space-x-2 px-4 py-2 border-amber-200 text-amber-700 hover:bg-amber-50 rounded-md shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </Button>
              <Button
                variant="outline"
                onClick={onAskHumanReview}
                className="flex items-center space-x-2 px-4 py-2 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-md shadow-sm"
              >
                <Users className="w-4 h-4" />
                <span>Ask Human Review</span>
              </Button>
              <Button
                variant="outline"
                onClick={onFeedback}
                className="flex items-center space-x-2 px-4 py-2 border-green-200 text-green-700 hover:bg-green-50 rounded-md shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Feedback</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}