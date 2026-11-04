import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, AlertTriangle, Info } from 'lucide-react';

const commonSymptoms = [
  'Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Chest pain',
  'Shortness of breath', 'Dizziness', 'Joint pain', 'Abdominal pain'
];

export function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [symptomDescription, setSymptomDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [severity, setSeverity] = useState('');

  const addSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const removeSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
  };

  return (
    <Card className="shadow-sm border-0 bg-card">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" />
          AI Symptom Analysis
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Describe your symptoms for AI-powered preliminary assessment with detailed reasoning
        </p>
        
        <div className="flex items-center gap-2 mt-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <p className="text-xs text-amber-700 dark:text-amber-300">
            Not a substitute for professional medical advice. Seek immediate care for emergencies.
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Common Symptoms */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Select common symptoms:</label>
          <div className="flex flex-wrap gap-2">
            {commonSymptoms.map((symptom) => (
              <Badge
                key={symptom}
                variant={selectedSymptoms.includes(symptom) ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/90 transition-colors"
                onClick={() => selectedSymptoms.includes(symptom) ? removeSymptom(symptom) : addSymptom(symptom)}
              >
                {symptom}
              </Badge>
            ))}
          </div>
        </div>

        {/* Selected Symptoms */}
        {selectedSymptoms.length > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Selected symptoms:</label>
            <div className="flex flex-wrap gap-2">
              {selectedSymptoms.map((symptom) => (
                <Badge key={symptom} variant="default" className="gap-1">
                  {symptom}
                  <button onClick={() => removeSymptom(symptom)} className="ml-1 hover:bg-primary-foreground/20 rounded">
                    ×
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Detailed description:</label>
          <Textarea
            placeholder="Describe your symptoms in detail, including when they started, what makes them better or worse, and any associated symptoms..."
            value={symptomDescription}
            onChange={(e) => setSymptomDescription(e.target.value)}
            className="min-h-[100px] bg-input-background border-0 shadow-sm"
          />
        </div>

        {/* Duration and Severity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Duration:</label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="bg-input-background border-0 shadow-sm">
                <SelectValue placeholder="How long have you had symptoms?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hours">Less than 24 hours</SelectItem>
                <SelectItem value="1-3days">1-3 days</SelectItem>
                <SelectItem value="1week">About a week</SelectItem>
                <SelectItem value="weeks">Several weeks</SelectItem>
                <SelectItem value="months">Months</SelectItem>
                <SelectItem value="chronic">Ongoing/Chronic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Severity:</label>
            <Select value={severity} onValueChange={setSeverity}>
              <SelectTrigger className="bg-input-background border-0 shadow-sm">
                <SelectValue placeholder="Rate severity 1-10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mild">Mild (1-3)</SelectItem>
                <SelectItem value="moderate">Moderate (4-6)</SelectItem>
                <SelectItem value="severe">Severe (7-8)</SelectItem>
                <SelectItem value="emergency">Emergency (9-10)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Analyze Button */}
        <Button 
          className="w-full shadow-sm" 
          disabled={selectedSymptoms.length === 0 && !symptomDescription.trim()}
        >
          <Search className="w-4 h-4 mr-2" />
          Analyze Symptoms with AI Reasoning
        </Button>

        {/* Info */}
        <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
            <p><strong>How our AI works:</strong></p>
            <p>• Analyzes symptom patterns against medical literature</p>
            <p>• Provides probability scores with detailed reasoning</p>
            <p>• Shows decision trees and risk factors considered</p>
            <p>• Recommends next steps with clear explanations</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}