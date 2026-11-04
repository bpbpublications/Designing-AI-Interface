import { Brain, Database, Zap, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ModelOverview() {
  const models = [
    {
      name: "RiskScore",
      version: "v2.7",
      status: "drift_detected",
      accuracy: "85.2%",
      lastTrained: "2024-12-10",
      description: "Credit risk assessment model",
      icon: Shield,
    },
    {
      name: "CustomerSegment",
      version: "v1.2",
      status: "healthy",
      accuracy: "94.2%",
      lastTrained: "2024-12-20",
      description: "Customer segmentation and targeting",
      icon: Database,
    },
    {
      name: "FraudDetection",
      version: "v3.1",
      status: "healthy",
      accuracy: "96.8%",
      lastTrained: "2024-12-18",
      description: "Real-time fraud detection system",
      icon: Zap,
    },
    {
      name: "RecommendationEngine",
      version: "v2.3",
      status: "training",
      accuracy: "88.9%",
      lastTrained: "2024-12-15",
      description: "Product recommendation system",
      icon: Brain,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Healthy</Badge>;
      case "drift_detected":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Drift Detected</Badge>;
      case "training":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Training</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Unknown</Badge>;
    }
  };

  return (
    <Card className="p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900">Model Overview</h3>
        <Button variant="outline" className="shadow-md">
          Manage Models
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {models.map((model, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <model.icon className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900">{model.name}</h4>
                  <span className="text-sm text-gray-500">{model.version}</span>
                  {getStatusBadge(model.status)}
                </div>
                <p className="text-sm text-gray-600 mb-2">{model.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Accuracy</p>
                <p className="font-semibold text-gray-900">{model.accuracy}</p>
              </div>
              <div>
                <p className="text-gray-500">Last Trained</p>
                <p className="font-semibold text-gray-900">{model.lastTrained}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}