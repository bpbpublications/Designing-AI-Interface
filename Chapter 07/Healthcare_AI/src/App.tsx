import { HealthHeader } from './components/HealthHeader';
import { SymptomChecker } from './components/SymptomChecker';
import { DiagnosticResults } from './components/DiagnosticResults';
import { TreatmentRecommendations } from './components/TreatmentRecommendations';
import { HealthInsights } from './components/HealthInsights';
import { Alert, AlertDescription } from './components/ui/alert';
import { Heart, Shield, Brain } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HealthHeader />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight">
              AI-Powered Health Analysis
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get detailed medical insights with transparent AI reasoning. Every diagnosis includes 
              comprehensive explanations, evidence analysis, and clear treatment rationales.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border">
              <Brain className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Transparent AI Reasoning</h3>
                <p className="text-sm text-muted-foreground">Every recommendation includes detailed explanations</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border">
              <Shield className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Evidence-Based Analysis</h3>
                <p className="text-sm text-muted-foreground">Backed by medical literature and data</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border">
              <Heart className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium">Personalized Care</h3>
                <p className="text-sm text-muted-foreground">Tailored to your health profile and history</p>
              </div>
            </div>
          </div>
        </section>

        {/* Symptom Input */}
        <SymptomChecker />

        {/* Diagnostic Results */}
        <DiagnosticResults />

        {/* Treatment Recommendations */}
        <TreatmentRecommendations />

        {/* Health Insights */}
        <HealthInsights />

        {/* Important Medical Disclaimer */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20">
          <Shield className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-700 dark:text-red-300">
            <strong>Medical Disclaimer:</strong> This AI system provides educational information and preliminary analysis only. 
            It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of 
            qualified healthcare providers with any questions about medical conditions. In case of emergency, call 911 immediately.
          </AlertDescription>
        </Alert>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">
                © 2024 HealthAI. Transparent medical AI with detailed reasoning.
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-colors">Medical Disclaimer</button>
              <button className="hover:text-foreground transition-colors">Privacy Policy</button>
              <button className="hover:text-foreground transition-colors">Terms of Service</button>
              <button className="hover:text-foreground transition-colors">Clinical Support</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}