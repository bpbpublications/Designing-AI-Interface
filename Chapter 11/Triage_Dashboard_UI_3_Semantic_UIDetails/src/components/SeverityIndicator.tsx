import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

export type SeverityLevel = "critical" | "urgent" | "stable";

interface SeverityIndicatorProps {
  level: SeverityLevel;
}

export function SeverityIndicator({ level }: SeverityIndicatorProps) {
  const config = {
    critical: {
      color: "bg-red-500",
      icon: AlertTriangle,
      label: "Critical"
    },
    urgent: {
      color: "bg-yellow-500", 
      icon: AlertCircle,
      label: "Urgent"
    },
    stable: {
      color: "bg-green-500",
      icon: CheckCircle,
      label: "Stable"
    }
  };

  const { color, icon: Icon, label } = config[level];

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <Icon className={`w-4 h-4 ${level === 'critical' ? 'text-red-600' : level === 'urgent' ? 'text-yellow-600' : 'text-green-600'}`} />
      <span className="text-sm">{label}</span>
    </div>
  );
}