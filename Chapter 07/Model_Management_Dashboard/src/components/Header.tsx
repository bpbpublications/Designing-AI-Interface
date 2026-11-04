import { Brain, Settings, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-sm">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">AgenticAI</h1>
                <p className="text-sm text-gray-500">Model Management Dashboard</p>
              </div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
              Production
            </Badge>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}