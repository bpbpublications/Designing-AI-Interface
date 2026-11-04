import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import { 
  Pill, 
  Shield, 
  AlertTriangle, 
  Clock, 
  Target,
  CheckCircle,
  Info,
  Thermometer,
  Heart,
  Brain
} from 'lucide-react';

interface Treatment {
  category: string;
  name: string;
  effectiveness: number;
  evidence: string;
  dosage?: string;
  duration?: string;
  sideEffects: string[];
  contraindications: string[];
  reasoning: string[];
  alternatives: string[];
}

const treatments: Treatment[] = [
  {
    category: 'Primary Treatment',
    name: 'Rest and Supportive Care',
    effectiveness: 85,
    evidence: 'Strong evidence from multiple RCTs',
    duration: '7-10 days',
    sideEffects: ['None significant'],
    contraindications: ['None'],
    reasoning: [
      'Viral infections are self-limiting and resolve with immune system response',
      'Rest allows energy redirection to immune function',
      'Most effective approach for viral URI with low complication risk',
      'Prevents secondary bacterial infections through immune support'
    ],
    alternatives: ['Gradual activity increase', 'Modified work schedule']
  },
  {
    category: 'Symptom Management',
    name: 'Acetaminophen for Fever/Pain',
    effectiveness: 70,
    evidence: 'Moderate evidence, symptom relief focused',
    dosage: '650mg every 6 hours as needed',
    duration: 'As needed, not to exceed 7 days',
    sideEffects: ['Liver toxicity (rare at therapeutic doses)', 'Allergic reactions (rare)'],
    contraindications: ['Liver disease', 'Alcohol use disorder', 'Allergy to acetaminophen'],
    reasoning: [
      'Reduces fever through hypothalamic action, improving comfort',
      'Pain relief allows better rest and recovery',
      'Safer profile than NSAIDs for viral infections',
      'Does not suppress immune response like some alternatives'
    ],
    alternatives: ['Ibuprofen (if no contraindications)', 'Cold compresses', 'Hydration for fever']
  },
  {
    category: 'Preventive Measures',
    name: 'Increased Fluid Intake',
    effectiveness: 60,
    evidence: 'Good evidence for symptom reduction',
    dosage: '8-10 glasses of water daily',
    duration: 'Throughout illness and recovery',
    sideEffects: ['Frequent urination', 'Electrolyte imbalance (if excessive)'],
    contraindications: ['Heart failure', 'Kidney disease'],
    reasoning: [
      'Maintains mucous membrane moisture for immune barrier function',
      'Prevents dehydration from fever and reduced oral intake',
      'Helps thin secretions for easier clearance',
      'Supports overall metabolic function during illness'
    ],
    alternatives: ['Warm liquids', 'Electrolyte solutions', 'Herbal teas']
  }
];

export function TreatmentRecommendations() {
  return (
    <Card className="shadow-sm border-0 bg-card">
      <CardHeader className="space-y-3">
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Evidence-Based Treatment Plan
        </CardTitle>
        
        <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
          <Shield className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700 dark:text-green-300">
            <strong>Personalized Recommendations:</strong> Each treatment option includes effectiveness ratings, scientific evidence, detailed reasoning, and safety considerations based on your specific symptoms and medical profile.
          </AlertDescription>
        </Alert>
      </CardHeader>

      <CardContent className="space-y-8">
        {treatments.map((treatment, index) => (
          <div key={index} className="space-y-6">
            {/* Treatment Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Badge variant="outline" className="mb-1">
                    {treatment.category}
                  </Badge>
                  <h3 className="font-semibold text-lg">{treatment.name}</h3>
                  <p className="text-sm text-muted-foreground">{treatment.evidence}</p>
                </div>
                
                <div className="text-right space-y-1">
                  <div className="text-2xl font-semibold text-green-600">{treatment.effectiveness}%</div>
                  <div className="text-xs text-muted-foreground">Effectiveness</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Treatment Effectiveness</span>
                  <span>{treatment.effectiveness}%</span>
                </div>
                <Progress value={treatment.effectiveness} className="h-2" />
              </div>
            </div>

            {/* Treatment Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                {/* Dosage & Duration */}
                {(treatment.dosage || treatment.duration) && (
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Pill className="w-4 h-4 text-primary" />
                      Dosage & Duration
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {treatment.dosage && (
                        <p><strong>Dosage:</strong> {treatment.dosage}</p>
                      )}
                      {treatment.duration && (
                        <p><strong>Duration:</strong> {treatment.duration}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Clinical Reasoning */}
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    Clinical Reasoning
                  </h4>
                  <ul className="space-y-2">
                    {treatment.reasoning.map((reason, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Alternatives */}
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Alternative Options
                  </h4>
                  <ul className="space-y-1">
                    {treatment.alternatives.map((alt, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full flex-shrink-0" />
                        {alt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                {/* Side Effects */}
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2 text-amber-700 dark:text-amber-400">
                    <AlertTriangle className="w-4 h-4" />
                    Potential Side Effects
                  </h4>
                  <ul className="space-y-1">
                    {treatment.sideEffects.map((effect, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Info className="w-3 h-3 text-amber-600 flex-shrink-0" />
                        {effect}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contraindications */}
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2 text-red-700 dark:text-red-400">
                    <Shield className="w-4 h-4" />
                    Contraindications
                  </h4>
                  <ul className="space-y-1">
                    {treatment.contraindications.map((contra, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <AlertTriangle className="w-3 h-3 text-red-600 flex-shrink-0" />
                        {contra}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="sm" className="gap-2">
                <CheckCircle className="w-4 h-4" />
                Add to Treatment Plan
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Info className="w-4 h-4" />
                More Information
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Clock className="w-4 h-4" />
                Set Reminder
              </Button>
            </div>

            {index < treatments.length - 1 && <Separator className="my-8" />}
          </div>
        ))}

        {/* Medical Disclaimer */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 mt-8">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-700 dark:text-red-300">
            <strong>Important Medical Disclaimer:</strong> These recommendations are for informational purposes only and do not constitute medical advice. Always consult with a qualified healthcare provider before starting any treatment. Seek immediate medical attention if symptoms worsen or if you experience difficulty breathing, chest pain, or high fever.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}