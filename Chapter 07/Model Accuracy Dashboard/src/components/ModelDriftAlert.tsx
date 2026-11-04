import { AlertTriangle, Clock, GitBranch } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ModelDriftAlert() {
  return (
    <Card className="p-6 border border-red-200 bg-red-50 shadow-lg">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
        </div>
        <div className="flex-1">
          <h3 className="text-red-800 font-semibold mb-2">Model Drift Detected</h3>
          <p className="text-red-700 mb-1">
            Model accuracy has declined <span className="font-semibold text-red-800">by 15%</span> in the last month.
          </p>
          <p className="text-red-600 text-sm">
            <span className="font-semibold">Possible Impact:</span> Predictions may be less reliable <span className="font-semibold">on</span> recent data.
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-4">
        <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white shadow-md">
          Review Flagged Cases
        </Button>
        <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100 shadow-md">
          Retrain Model Now
        </Button>
        <Button variant="ghost" className="text-red-600 hover:bg-red-100">
          Snooze Alert
        </Button>
      </div>
      
      <div className="border-t border-red-200 pt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="text-red-600">
            <span className="font-semibold text-purple-600">Model Info:</span> Last retrained: <span className="font-semibold text-orange-600">2024-12-10</span>
          </span>
        </div>
        <div className="text-red-600">
          <span className="font-semibold text-purple-600">Version:</span> RiskScore v2.7
        </div>
      </div>
    </Card>
  );
}