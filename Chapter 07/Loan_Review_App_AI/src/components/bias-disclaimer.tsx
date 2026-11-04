import { Card, CardContent } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { AlertTriangle } from "lucide-react";

interface BiasDisclaimerProps {
  message: string;
  recommendation: string;
}

export function BiasDisclaimer({ message, recommendation }: BiasDisclaimerProps) {
  return (
    <Card className="shadow-md border-0 bg-white">
      <CardContent className="p-6">
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <span className="font-medium">Bias Disclaimer:</span> {message}
            <br />
            Manual review recommended <span className="text-purple-600 font-medium">before</span> final decision.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}