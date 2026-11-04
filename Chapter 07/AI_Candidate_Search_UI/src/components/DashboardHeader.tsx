import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { 
  Search, 
  Filter, 
  SortDesc, 
  Download,
  Plus,
  Bell,
  Settings
} from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold">Candidate Search</h1>
            <p className="text-muted-foreground">
              AI-powered candidate matching for Software Engineer position
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Search
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search candidates by name, skills, or experience..." 
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
            <Badge variant="secondary" className="ml-1">3</Badge>
          </Button>
          <Button variant="outline" className="gap-2">
            <SortDesc className="h-4 w-4" />
            Sort by Match
          </Button>
        </div>

        {/* Active Search Summary */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium text-blue-800">
                Found 1,247 candidates matching your criteria
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-700">
              <span>Top match: 92%</span>
              <span>•</span>
              <span>Average: 67%</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-blue-600">Active filters:</span>
            <Badge variant="outline" className="text-xs bg-white">Python</Badge>
            <Badge variant="outline" className="text-xs bg-white">Machine Learning</Badge>
            <Badge variant="outline" className="text-xs bg-white">5+ years</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}