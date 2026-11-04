import { 
  Brain, 
  BarChart3, 
  AlertTriangle, 
  Settings, 
  Database, 
  Activity,
  Shield,
  Users,
  FileText,
  HelpCircle
} from "lucide-react";
import { Button } from "./ui/button";

export function Sidebar() {
  const navigationItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Brain, label: "Models", active: false },
    { icon: AlertTriangle, label: "Alerts", active: false },
    { icon: Activity, label: "Monitoring", active: false },
    { icon: Database, label: "Data Sources", active: false },
    { icon: Shield, label: "Security", active: false },
    { icon: Users, label: "Team", active: false },
    { icon: FileText, label: "Reports", active: false },
    { icon: Settings, label: "Settings", active: false },
    { icon: HelpCircle, label: "Help", active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 shadow-sm h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Brain className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">AgenticAI</h1>
            <p className="text-xs text-gray-500">v2.1.0</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start gap-3 shadow-none ${
                item.active 
                  ? "bg-blue-50 text-blue-700 hover:bg-blue-100" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-900">System Status</span>
          </div>
          <p className="text-xs text-blue-700">All systems operational</p>
        </div>
      </div>
    </div>
  );
}