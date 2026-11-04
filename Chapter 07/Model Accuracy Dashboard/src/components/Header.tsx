import { Bell, Search, User, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <h2 className="font-semibold text-gray-900">Dashboard</h2>
        <div className="flex-1 max-w-md ml-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search models, alerts, or data..." 
              className="pl-10 bg-gray-50 border-gray-200 shadow-sm"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="relative p-2 hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
            3
          </Badge>
        </Button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">Sarah Chen</p>
            <p className="text-xs text-gray-500">ML Engineer</p>
          </div>
          <Button variant="ghost" className="p-2 hover:bg-gray-100">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-blue-600" />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600 ml-1" />
          </Button>
        </div>
      </div>
    </header>
  );
}