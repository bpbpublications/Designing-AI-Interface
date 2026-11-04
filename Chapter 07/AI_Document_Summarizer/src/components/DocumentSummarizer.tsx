import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { ThumbsUp, ThumbsDown, AlertTriangle, Info } from "lucide-react";
import { useState } from "react";

export function DocumentSummarizer() {
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);
  const [feedbackReasons, setFeedbackReasons] = useState<string[]>([]);

  const handleFeedbackReasonChange = (reason: string, checked: boolean) => {
    if (checked) {
      setFeedbackReasons([...feedbackReasons, reason]);
    } else {
      setFeedbackReasons(feedbackReasons.filter(r => r !== reason));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl text-foreground mb-2">AI Document Summarizer</h1>
        <div className="w-full h-px bg-border"></div>
      </div>

      {/* Disclaimer Card */}
      <Alert className="border-purple-200 bg-purple-50 shadow-sm">
        <Info className="h-4 w-4 text-purple-600" />
        <AlertDescription className="text-foreground">
          <span className="inline-flex items-center gap-1">
            <span>⚠️ Disclaimer: This </span>
            <span className="text-purple-600 font-medium">summary</span>
            <span> was AI-</span>
            <span className="text-purple-600 font-medium">generated</span>
            <span> and may contain errors.</span>
          </span>
          <br />
          <span>Please verify </span>
          <span className="text-purple-600 font-medium">before</span>
          <span> making final decisions.</span>
        </AlertDescription>
      </Alert>

      {/* Document Title Card */}
      <Card className="shadow-md border-0 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            Document Title: Annual Financial Report 
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
              2024
            </Badge>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Summary Card */}
      <Card className="shadow-md border-0 bg-card">
        <CardHeader>
          <CardTitle className="text-purple-600">Summary:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-l-purple-500">
            <p className="text-foreground italic">
              "The company reported a 12% growth in revenue, driven by regional sales..."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Warning Card */}
      <Alert className="border-orange-200 bg-orange-50 shadow-sm">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-foreground">
          <div className="space-y-2">
            <div>
              <span>⚠️ Warning: Low confidence detected </span>
              <span className="text-purple-600 font-medium">in</span>
              <span> sections related </span>
              <span className="text-purple-600 font-medium">to</span>
              <span> '</span>
              <span className="text-green-600 font-medium">Tax Compliance</span>
              <span>'.</span>
            </div>
            <div>
              <span>Manual review recommended </span>
              <span className="text-purple-600 font-medium">before</span>
              <span> using this information.</span>
            </div>
          </div>
        </AlertDescription>
      </Alert>

      {/* Feedback Card */}
      <Card className="shadow-md border-0 bg-card">
        <CardHeader>
          <CardTitle>Feedback: Was this <span className="text-purple-600">summary</span> helpful?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Feedback Buttons */}
          <div className="flex gap-4">
            <Button
              variant={feedback === 'yes' ? 'default' : 'outline'}
              onClick={() => setFeedback('yes')}
              className="flex items-center gap-2"
            >
              <ThumbsUp className="h-4 w-4" />
              Yes
            </Button>
            <Button
              variant={feedback === 'no' ? 'default' : 'outline'}
              onClick={() => setFeedback('no')}
              className="flex items-center gap-2"
            >
              <ThumbsDown className="h-4 w-4" />
              No
            </Button>
          </div>

          {/* Conditional Feedback Form */}
          {feedback === 'no' && (
            <div className="mt-6 p-4 bg-muted/30 rounded-lg space-y-4 border">
              <div className="text-purple-600 font-medium">If No, tell us why:</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Inaccurate',
                  'Too Vague',
                  'Irrelevant',
                  'Other'
                ].map((reason) => (
                  <div key={reason} className="flex items-center space-x-2">
                    <Checkbox
                      id={reason}
                      checked={feedbackReasons.includes(reason)}
                      onCheckedChange={(checked) => 
                        handleFeedbackReasonChange(reason, checked as boolean)
                      }
                    />
                    <label htmlFor={reason} className="text-sm text-foreground">
                      {reason}
                    </label>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4">
                Submit Feedback
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}