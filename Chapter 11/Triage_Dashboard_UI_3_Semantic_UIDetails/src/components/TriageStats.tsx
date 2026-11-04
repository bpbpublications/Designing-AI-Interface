import { AlertTriangle, AlertCircle, CheckCircle, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Patient } from "./PatientTable";

interface TriageStatsProps {
  patients: Patient[];
}

export function TriageStats({ patients }: TriageStatsProps) {
  const criticalCount = patients.filter(p => p.severity === 'critical').length;
  const urgentCount = patients.filter(p => p.severity === 'urgent').length;
  const stableCount = patients.filter(p => p.severity === 'stable').length;
  const totalCount = patients.length;

  const stats = [
    {
      title: "Critical",
      count: criticalCount,
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Urgent", 
      count: urgentCount,
      icon: AlertCircle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Stable",
      count: stableCount,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Total Patients",
      count: totalCount,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl ${stat.color}`}>{stat.count}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}