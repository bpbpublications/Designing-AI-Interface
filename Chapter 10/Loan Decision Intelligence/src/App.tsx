import { useState } from 'react';
import { LoanDecisionSummary } from './components/LoanDecisionSummary';
import { WhatIfSimulator } from './components/WhatIfSimulator';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { FileText, Target, BarChart3 } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'summary' | 'simulator'>('summary');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Loan Decision Intelligence
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                AI-powered loan analysis and scenario planning
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant={currentView === 'summary' ? 'default' : 'outline'}
                onClick={() => setCurrentView('summary')}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Decision Summary
              </Button>
              <Button 
                variant={currentView === 'simulator' ? 'default' : 'outline'}
                onClick={() => setCurrentView('simulator')}
                className="flex items-center gap-2"
              >
                <Target className="w-4 h-4" />
                What-If Simulator
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-4">
        {currentView === 'summary' ? <LoanDecisionSummary /> : <WhatIfSimulator />}
      </div>

      {/* Footer */}
      <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t mt-12">
        <div className="w-full px-4 py-4">
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>Powered by CreditRisk AI v5.2</span>
            </div>
            <div>
              Last updated: October 3, 2025 • Processing time: 1.2s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}