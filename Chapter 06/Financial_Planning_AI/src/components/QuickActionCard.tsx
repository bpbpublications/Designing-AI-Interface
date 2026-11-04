import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export function QuickActionCard() {
  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
            S1 • Quick Action
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
            <Check className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-900">Auto-save</span>
              <span className="text-green-600 font-semibold">₹2,000</span>
              <span className="text-gray-900">this month</span>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                Recommended
              </Badge>
              <Button 
                variant="link" 
                className="text-orange-600 hover:text-orange-700 p-0 h-auto"
              >
                [Change amount]
              </Button>
            </div>
            
            <p className="text-gray-700 bg-white/60 p-3 rounded-lg">
              You're on track to hit your 6-month buffer.
            </p>
            
            <div className="flex gap-3 pt-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white shadow-md">
                Confirm
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                Undo within 24h
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}