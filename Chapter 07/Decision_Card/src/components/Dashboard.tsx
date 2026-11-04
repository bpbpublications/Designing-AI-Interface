import { DecisionCard } from "./DecisionCard";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Activity, Clock, CheckCircle } from "lucide-react";

export function Dashboard() {
  const handleViewDetails = () => {
    console.log("View details clicked");
  };

  const handleAskHumanReview = () => {
    console.log("Ask human review clicked");
  };

  const handleFeedback = () => {
    console.log("Feedback clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-semibold text-gray-800">AgenticAI Medical Assistant</h1>
          </div>
          <p className="text-gray-600 text-lg">AI-powered medical image analysis and decision support</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-white shadow-md border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Cases Today</p>
                <p className="text-2xl font-semibold text-gray-800">147</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-md border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Accuracy</p>
                <p className="text-2xl font-semibold text-gray-800">94.2%</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-md border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg. Time</p>
                <p className="text-2xl font-semibold text-gray-800">2.3s</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-md border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">AI Confidence</p>
                <p className="text-2xl font-semibold text-gray-800">87.5%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Decision Card */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Current Analysis</h2>
            <Badge className="bg-green-100 text-green-700 border-green-200">
              Active Case
            </Badge>
          </div>
          
          <DecisionCard
            patientInfo="Patient Triage"
            studyType="Chest X-ray"
            aiAssessment="PNEUMONIA"
            confidence={78}
            confidenceLabel="HIGH CONFIDENCE"
            onViewDetails={handleViewDetails}
            onAskHumanReview={handleAskHumanReview}
            onFeedback={handleFeedback}
          />
        </div>

        {/* Recent Cases */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white shadow-md border border-gray-200 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">Patient #12847</h3>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">CT Scan</Badge>
                </div>
                <p className="text-sm text-gray-600">Assessment: Normal findings</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Confidence: 92%</span>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-md border border-gray-200 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">Patient #12846</h3>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">MRI</Badge>
                </div>
                <p className="text-sm text-gray-600">Assessment: Requires review</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Confidence: 67%</span>
                  <span className="text-sm text-amber-600">Under Review</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}