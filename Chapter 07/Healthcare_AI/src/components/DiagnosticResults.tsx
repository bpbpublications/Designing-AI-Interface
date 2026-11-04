import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Separator } from './ui/separator';
import { 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  TrendingUp, 
  Clock,
  Stethoscope,
  FileText,
  ExternalLink
} from 'lucide-react';

interface DiagnosticResult {
  condition: string;
  probability: number;
  confidence: 'High' | 'Medium' | 'Low';
  severity: 'Low' | 'Moderate' | 'High' | 'Emergency';
  reasoning: string[];
  supportingFactors: string[];
  contradictingFactors: string[];
  nextSteps: string[];
  urgency: string;
}

const mockResults: DiagnosticResult[] = [
  {
    condition: 'Viral Upper Respiratory Infection',
    probability: 78,
    confidence: 'High',
    severity: 'Low',
    reasoning: [
      'Symptom cluster matches typical viral URI pattern (cough, fatigue, mild fever)',
      'Duration of 3 days aligns with viral onset timeline',
      'No bacterial indicators present (no purulent discharge, high fever)',
      'Seasonal prevalence supports viral etiology (current flu season)',
    ],
    supportingFactors: [
      'Gradual onset over 2-3 days',
      'Low-grade fever (100.2°F)',
      'Dry cough without blood',
      'General malaise and fatigue',
      'No shortness of breath at rest'
    ],
    contradictingFactors: [
      'Absence of sore throat (present in 60% of viral URI)',
      'No nasal congestion reported'
    ],
    nextSteps: [
      'Rest and increase fluid intake',
      'Over-the-counter symptom management',
      'Monitor temperature and symptoms',
      'Return if symptoms worsen or persist >10 days'
    ],
    urgency: 'Routine care within 1-2 weeks if symptoms persist'
  },
  {
    condition: 'Pneumonia',
    probability: 15,
    confidence: 'Medium',
    severity: 'Moderate',
    reasoning: [
      'Cough and fatigue present but missing key pneumonia indicators',
      'No chest pain or significant dyspnea reported',
      'Fever present but not high-grade typical of bacterial pneumonia',
      'Age and health status reduce pneumonia risk probability'
    ],
    supportingFactors: [
      'Cough (present in 95% of pneumonia cases)',
      'Fatigue and malaise',
      'Fever present'
    ],
    contradictingFactors: [
      'No chest pain (present in 70% of cases)',
      'No shortness of breath',
      'No productive sputum',
      'No recent travel or sick contacts',
      'No underlying respiratory conditions'
    ],
    nextSteps: [
      'Consider chest X-ray if symptoms worsen',
      'Monitor for development of chest pain or breathing difficulties',
      'Seek immediate care if difficulty breathing develops'
    ],
    urgency: 'Urgent care if breathing difficulties develop'
  }
];

export function DiagnosticResults() {
  return (
    <div className="space-y-6">
      <Card className="shadow-sm border-0 bg-card">
        <CardHeader className="space-y-3">
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            AI Diagnostic Analysis
          </CardTitle>
          
          <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-700 dark:text-blue-300">
              <strong>Analysis Complete:</strong> Results based on symptom pattern recognition, medical literature review, and statistical modeling. Each diagnosis includes detailed reasoning and confidence levels.
            </AlertDescription>
          </Alert>
        </CardHeader>

        <CardContent className="space-y-8">
          {mockResults.map((result, index) => (
            <div key={index} className="space-y-6">
              {/* Main Result Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{result.condition}</h3>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={result.confidence === 'High' ? 'default' : result.confidence === 'Medium' ? 'secondary' : 'outline'}
                        className="gap-1"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {result.confidence} Confidence
                      </Badge>
                      <Badge 
                        variant={result.severity === 'Emergency' ? 'destructive' : result.severity === 'High' ? 'destructive' : 'secondary'}
                        className="gap-1"
                      >
                        <AlertTriangle className="w-3 h-3" />
                        {result.severity} Severity
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-1">
                    <div className="text-2xl font-semibold text-primary">{result.probability}%</div>
                    <div className="text-xs text-muted-foreground">Match Probability</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Diagnostic Confidence</span>
                    <span>{result.probability}%</span>
                  </div>
                  <Progress value={result.probability} className="h-2" />
                </div>
              </div>

              {/* Detailed Reasoning */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      AI Reasoning Process
                    </h4>
                    <ul className="space-y-2">
                      {result.reasoning.map((reason, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2 text-green-700 dark:text-green-400">
                      <TrendingUp className="w-4 h-4" />
                      Supporting Evidence
                    </h4>
                    <ul className="space-y-1">
                      {result.supportingFactors.map((factor, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                      <Info className="w-4 h-4" />
                      Contradicting Factors
                    </h4>
                    <ul className="space-y-1">
                      {result.contradictingFactors.map((factor, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <AlertTriangle className="w-3 h-3 text-amber-600 flex-shrink-0" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Recommended Actions
                    </h4>
                    <ul className="space-y-1">
                      {result.nextSteps.map((step, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              <div className="p-4 bg-muted/30 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <h4 className="font-medium">Timeline & Urgency</h4>
                </div>
                <p className="text-sm text-muted-foreground">{result.urgency}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button className="gap-2">
                  <Stethoscope className="w-4 h-4" />
                  Find Healthcare Provider
                </Button>
                <Button variant="outline" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Download Analysis
                </Button>
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Learn More
                </Button>
              </div>

              {index < mockResults.length - 1 && <Separator className="my-8" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}