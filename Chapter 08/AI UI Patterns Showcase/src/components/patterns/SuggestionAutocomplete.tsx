import { Card } from "../ui/card";
import { Input } from "../ui/input";

export function SuggestionAutocomplete() {
  return (
    <Card className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <div className="mb-3">
            <span className="text-blue-600">User:</span> Please send me the docu...
          </div>
          
          <div className="text-sm space-y-1">
            <span className="font-medium text-blue-600">AI:</span>
            <div className="flex flex-wrap gap-2 text-muted-foreground">
              <span className="bg-muted px-2 py-1 rounded text-xs">[document]</span>
              <span className="bg-muted px-2 py-1 rounded text-xs">[documentation]</span>
              <span className="bg-muted px-2 py-1 rounded text-xs">[documentary]</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}