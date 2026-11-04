import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Users, 
  Search, 
  Calendar, 
  FileText, 
  Settings, 
  BarChart3,
  Filter,
  Bell,
  User
} from "lucide-react";

export function DashboardSidebar() {
  const menuItems = [
    { icon: Search, label: "Find Candidates", count: 1247, active: true },
    { icon: Users, label: "My Candidates", count: 23 },
    { icon: Calendar, label: "Interviews", count: 8 },
    { icon: FileText, label: "Job Postings", count: 5 },
    { icon: BarChart3, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold">TalentAI</h2>
            <p className="text-xs text-muted-foreground">Recruitment Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className="w-full justify-start gap-3 h-10"
          >
            <item.icon className="h-4 w-4" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.count && (
              <Badge variant="secondary" className="text-xs">
                {item.count}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Filters Card */}
      <div className="p-4">
        <Card className="bg-gray-50/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="font-medium text-sm">Active Filters</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Experience</span>
                <Badge variant="outline" className="text-xs">5+ years</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Skills</span>
                <Badge variant="outline" className="text-xs">Python, ML</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Location</span>
                <Badge variant="outline" className="text-xs">Remote</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3 text-xs">
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Profile */}
      <div className="absolute bottom-4 left-4 right-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Sarah Chen</p>
                <p className="text-xs text-muted-foreground">HR Manager</p>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}