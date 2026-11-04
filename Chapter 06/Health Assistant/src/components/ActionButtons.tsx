import { Phone, Settings, Download } from "lucide-react";
import { Button } from "./ui/button";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" className="flex-1 min-w-[160px] rounded-lg shadow-sm">
        <Phone className="w-4 h-4 mr-2" />
        Contact clinician
      </Button>
      <Button variant="outline" className="flex-1 min-w-[160px] rounded-lg shadow-sm">
        <Settings className="w-4 h-4 mr-2" />
        Adjust schedule
      </Button>
      <Button variant="outline" className="flex-1 min-w-[160px] rounded-lg shadow-sm">
        <Download className="w-4 h-4 mr-2" />
        Download weekly report
      </Button>
    </div>
  );
}