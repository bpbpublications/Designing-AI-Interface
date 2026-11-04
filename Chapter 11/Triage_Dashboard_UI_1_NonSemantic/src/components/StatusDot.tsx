import { SeverityLevel } from "./SeverityIndicator";

interface StatusDotProps {
  level: SeverityLevel;
}

export function StatusDot({ level }: StatusDotProps) {
  const getColorClass = (level: SeverityLevel) => {
    switch (level) {
      case "critical":
        return "bg-red-500";
      case "urgent":
        return "bg-yellow-500";
      case "stable":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`w-3 h-3 rounded-full ${getColorClass(level)}`}></div>
  );
}