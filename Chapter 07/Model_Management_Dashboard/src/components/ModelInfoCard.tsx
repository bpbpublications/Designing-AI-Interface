import { Card, CardContent, CardHeader } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronDown, ChevronRight, AlertTriangle, TrendingUp, FileText, Bell } from "lucide-react";
import { useState } from "react";

export function ModelInfoCard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors rounded-t-lg">
            <div className="flex items-center gap-3">
              {isOpen ? (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              )}
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-gray-900">Model Info</h2>
               
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="space-y-6 pt-0">
            {/* Model Basic Info */}
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Model</p>
                  <p className="font-semibold text-gray-900">MedVision-Xray-CLS v3.2</p>
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  Active
                </Badge>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 mb-2">Training Data</p>
                <p className="text-gray-900">
                  <span className="font-semibold text-blue-600">1.8M</span> de-identified X-rays 
                  <span className="text-gray-500"> (2018-2024)</span>, 
                  <span className="font-semibold text-emerald-600"> 12</span> countries
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 mb-2">Last Retrained</p>
                <p className="font-semibold text-gray-900">2025-01-17</p>
              </div>
            </div>

            {/* Validation Metrics */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" />
                Validation Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-gray-600">AUC</p>
                  <p className="text-2xl font-bold text-blue-600">0.94</p>
                  <p className="text-xs text-gray-500">multi-site</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-gray-600">Sensitivity</p>
                  <p className="text-2xl font-bold text-emerald-600">0.88</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-sm text-gray-600">Specificity</p>
                  <p className="text-2xl font-bold text-purple-600">0.91</p>
                </div>
              </div>
            </div>

            {/* Known Limitations */}
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Known Limitations
              </h3>
              <p className="text-gray-700">
                Underrepresents pediatric cases; portable X-rays noisier
              </p>
            </div>

            {/* Drift Status */}
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">Drift Status</h3>
                </div>
                <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
                  Alert
                </Badge>
              </div>
              
              <p className="text-gray-700 mb-4">
                Slight distribution shift detected last <span className="font-semibold">30 days</span>
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-50 border-gray-300 shadow-sm"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View Drift Report
                </Button>
                <Button 
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 shadow-sm"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notify Admin
                </Button>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}