import { Clock, AlertCircle, CheckCircle, Info, RefreshCw } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "alert",
      title: "Model drift detected in RiskScore v2.7",
      description: "Accuracy dropped by 15% over the last month",
      timestamp: "2 hours ago",
      status: "critical",
      icon: AlertCircle,
    },
    {
      id: 2,
      type: "training",
      title: "Model retrained successfully",
      description: "CustomerSegment v1.2 completed training with 94.2% accuracy",
      timestamp: "1 day ago",
      status: "success",
      icon: CheckCircle,
    },
    {
      id: 3,
      type: "deployment",
      title: "New model version deployed",
      description: "FraudDetection v3.1 is now live in production",
      timestamp: "2 days ago",
      status: "info",
      icon: RefreshCw,
    },
    {
      id: 4,
      type: "monitoring",
      title: "Data quality check completed",
      description: "All datasets passed validation with minor warnings",
      timestamp: "3 days ago",
      status: "warning",
      icon: Info,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "success":
        return "bg-green-100 text-green-800 border-green-200";
      case "warning":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "info":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getIconColor = (status: string) => {
    switch (status) {
      case "critical":
        return "text-red-500";
      case "success":
        return "text-green-500";
      case "warning":
        return "text-orange-500";
      case "info":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card className="p-6 shadow-lg">
      <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className={`p-2 rounded-lg bg-white shadow-sm ${getIconColor(activity.status)}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-gray-900 truncate">{activity.title}</p>
                <Badge className={`text-xs ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                {activity.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}