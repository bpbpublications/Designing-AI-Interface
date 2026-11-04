import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export function ThinkItThroughCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
            S2 • Think It Through
          </Badge>
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 h-auto"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 mr-1" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-1" />
            )}
            View details
          </Button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent>
          <Card className="bg-white shadow-md border border-gray-200">
            <CardHeader className="bg-gray-50 border-b">
              <h3 className="text-gray-800 font-semibold">12-Month Projection</h3>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">• Expected balance:</span>
                  <span className="text-green-600 font-semibold">₹1.24L</span>
                  <span className="text-gray-500">(±₹7k, 80% conf.)</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">• Trade-offs:</span>
                  <span className="text-gray-800">reduces leisure budget by</span>
                  <span className="text-red-600 font-semibold">~₹500/mo</span>
                </div>
                
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-gray-600">• Alternatives:</span>
                  <span className="text-gray-800">Save</span>
                  <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                    ₹1,500
                  </Button>
                  <span className="text-gray-400">/</span>
                  <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                    ₹2,500
                  </Button>
                  <span className="text-gray-400">/</span>
                  <Button variant="outline" size="sm" className="h-6 px-2 text-xs text-blue-600">
                    Custom
                  </Button>
                </div>
                
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-600">• Why recommended?</span>
                    <span className="text-gray-800">
                      Based on last 90 days spending + emergency target
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      )}
    </Card>
  );
}