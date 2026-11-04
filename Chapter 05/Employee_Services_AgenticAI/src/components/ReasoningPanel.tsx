import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Brain, ArrowRight, CheckCircle } from "lucide-react";

interface ReasoningStep {
  id: string;
  step: string;
  reasoning: string;
  status: 'pending' | 'active' | 'complete';
  context?: string[];
}

interface ReasoningPanelProps {
  steps: ReasoningStep[];
  currentThought?: string;
}

export function ReasoningPanel({ steps, currentThought }: ReasoningPanelProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-500" />
          AI Reasoning Process
        </CardTitle>
        {currentThought && (
          <div className="text-sm text-muted-foreground bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border-l-4 border-purple-500">
            <p className="font-medium text-purple-700 dark:text-purple-300">Current Thought:</p>
            <p className="mt-1">{currentThought}</p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-3 top-8 w-0.5 h-8 bg-muted"></div>
                )}
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 ${
                    step.status === 'complete' ? 'bg-green-500 border-green-500 text-white' :
                    step.status === 'active' ? 'bg-blue-500 border-blue-500 text-white' :
                    'bg-muted border-muted-foreground/30 text-muted-foreground'
                  }`}>
                    {step.status === 'complete' ? <CheckCircle className="w-3 h-3" /> : index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{step.step}</p>
                      <Badge variant={step.status === 'active' ? 'default' : step.status === 'complete' ? 'secondary' : 'outline'} className="text-xs">
                        {step.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{step.reasoning}</p>
                    {step.context && step.context.length > 0 && (
                      <div className="space-y-1">
                        {step.context.map((ctx, ctxIndex) => (
                          <div key={ctxIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <ArrowRight className="w-3 h-3" />
                            <span>{ctx}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}