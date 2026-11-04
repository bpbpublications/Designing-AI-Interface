import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Activity, AlertCircle, CheckCircle, Clock } from "lucide-react";

export function StatsOverview() {
  const stats = [
    {
      title: "Active Models",
      value: "12",
      change: "+2 this month",
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Model Health",
      value: "94%",
      change: "Excellent",
      icon: CheckCircle,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Drift Alerts",
      value: "3",
      change: "Needs attention",
      icon: AlertCircle,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      title: "Avg Response Time",
      value: "120ms",
      change: "↓ 15ms from last week",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className={`shadow-sm hover:shadow-md transition-shadow border-0 ${stat.bgColor} ${stat.borderColor} border`}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500">
                  {stat.change}
                </p>
              </div>
              <div className={`p-2 rounded-lg bg-white shadow-sm`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}