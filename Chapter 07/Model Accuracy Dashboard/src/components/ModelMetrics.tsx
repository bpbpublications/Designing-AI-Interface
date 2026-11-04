import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";
import { Card } from "./ui/card";

export function ModelMetrics() {
  const metrics = [
    {
      title: "Model Accuracy",
      value: "85.2%",
      change: "-15%",
      trend: "down",
      icon: Target,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Prediction Confidence",
      value: "92.1%",
      change: "+2.3%",
      trend: "up",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Data Quality Score",
      value: "88.7%",
      change: "-3.1%",
      trend: "down",
      icon: TrendingDown,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Training Efficiency",
      value: "96.4%",
      change: "+5.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-semibold ${metric.color}`}>
              {metric.trend === "up" ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {metric.change}
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.title}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}