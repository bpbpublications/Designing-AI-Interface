import { Button } from "./ui/button";
import { BarChart3, FileText, Download } from "lucide-react";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button 
        variant="outline" 
        className="bg-white shadow-md border-gray-200 hover:bg-gray-50 text-gray-700"
      >
        <BarChart3 className="w-4 h-4 mr-2" />
        Compare plans
      </Button>
      
      <Button 
        variant="outline" 
        className="bg-white shadow-md border-gray-200 hover:bg-gray-50 text-gray-700"
      >
        <FileText className="w-4 h-4 mr-2" />
        See assumptions
      </Button>
      
      <Button 
        variant="outline" 
        className="bg-white shadow-md border-gray-200 hover:bg-gray-50 text-gray-700"
      >
        <Download className="w-4 h-4 mr-2" />
        Export CSV
      </Button>
    </div>
  );
}