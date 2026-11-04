import React, { useState } from 'react';
import { X, Target, TrendingUp, AlertTriangle, Lightbulb, RotateCcw, PlayCircle, BarChart3 } from 'lucide-react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export function WhatIfSimulator() {
  const [income, setIncome] = useState([2050]);
  const [dti, setDti] = useState([48]);
  const [savings, setSavings] = useState([1.8]);
  const [selectedScenario, setSelectedScenario] = useState('current');

  const scenarios = {
    A: { income: 2600, dti: 38, savings: 3, approval: 82, impact: 'High', color: 'bg-green-500' },
    B: { income: 2400, dti: 34, savings: 2, approval: 79, impact: 'Medium-High', color: 'bg-yellow-500' },
    C: { income: 2200, dti: 36, savings: 3, approval: 73, impact: 'Medium', color: 'bg-orange-500' }
  };

  const calculateApproval = () => {
    let score = 40;
    if (income[0] > 2500) score += 25;
    else if (income[0] > 2200) score += 15;
    else if (income[0] > 1800) score += 5;

    if (dti[0] < 35) score += 25;
    else if (dti[0] < 40) score += 15;
    else if (dti[0] < 45) score += 5;

    if (savings[0] >= 3) score += 10;
    else if (savings[0] >= 2) score += 5;

    return Math.min(95, Math.max(15, score));
  };

  const currentApproval = calculateApproval();

  const getApprovalStatus = (approval: number) => {
    if (approval >= 80) return { status: 'APPROVED', color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', borderColor: 'border-green-200' };
    if (approval >= 60) return { status: 'LIKELY', color: 'text-yellow-600', bgColor: 'bg-yellow-50 dark:bg-yellow-950/20', borderColor: 'border-yellow-200' };
    return { status: 'DENIED', color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-950/20', borderColor: 'border-red-200' };
  };

  const currentStatus = getApprovalStatus(currentApproval);

  const applyScenario = (scenarioKey: string) => {
    if (scenarioKey === 'current') {
      setIncome([2050]);
      setDti([48]);
      setSavings([1.8]);
    } else {
      const scenario = scenarios[scenarioKey as keyof typeof scenarios];
      setIncome([scenario.income]);
      setDti([scenario.dti]);
      setSavings([scenario.savings]);
    }
    setSelectedScenario(scenarioKey);
  };

  return (
    <div className="w-full px-4 space-y-3">
      {/* Header */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="w-5 h-5 text-blue-500" />
                Loan Application Simulator
              </CardTitle>
              <CardDescription className="mt-1 text-sm">
                Explore how changes to your financial profile could affect loan approval
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground mb-1">Current Decision</div>
              <Badge variant="destructive" className="text-sm px-2 py-1">
                DENIED
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Goal:</span>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
              Identify specific changes that could lead to loan approval and understand their impact
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid xl:grid-cols-6 lg:grid-cols-4 gap-3">
        {/* Controls Section */}
        <div className="xl:col-span-4 lg:col-span-3 space-y-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="w-4 h-4 text-purple-500" />
                Financial Parameters
              </CardTitle>
              <CardDescription className="text-xs">
                Adjust values to see real-time impact on approval likelihood
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              {/* Income Control */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-semibold">Average Monthly Income</h4>
                    <p className="text-xs text-muted-foreground">Last 6 months</p>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    ${income[0].toLocaleString()}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <Slider
                    value={income}
                    onValueChange={setIncome}
                    max={3000}
                    min={1800}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$1,800</span>
                    <span>Current: $2,050</span>
                    <span>$3,000</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Badge variant={income[0] < 2000 ? "default" : "outline"} className="text-xs">&lt;$2,000</Badge>
                  <Badge variant={income[0] >= 2000 && income[0] <= 2500 ? "default" : "outline"} className="text-xs">$2,000–$2,500</Badge>
                  <Badge variant={income[0] > 2500 ? "default" : "outline"} className="text-xs">$2,500+</Badge>
                </div>
              </div>

              <Separator />

              {/* DTI Control */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-semibold">Debt-to-Income Ratio</h4>
                    <p className="text-xs text-muted-foreground">Monthly debt payments ÷ gross income</p>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    {dti[0]}%
                  </Badge>
                </div>
                <div className="space-y-1">
                  <Slider
                    value={dti}
                    onValueChange={setDti}
                    max={60}
                    min={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>20%</span>
                    <span>Current: 48%</span>
                    <span>60%</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Badge variant={dti[0] <= 35 ? "default" : "outline"} className="text-xs">Low (&lt;35%)</Badge>
                  <Badge variant={dti[0] > 35 && dti[0] <= 45 ? "default" : "outline"} className="text-xs">Medium (35–45%)</Badge>
                  <Badge variant={dti[0] > 45 ? "default" : "outline"} className="text-xs">High (&gt;45%)</Badge>
                </div>
              </div>

              <Separator />

              {/* Savings Control */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-semibold">Emergency Savings</h4>
                    <p className="text-xs text-muted-foreground">Months of expenses covered</p>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    {savings[0].toFixed(1)}m
                  </Badge>
                </div>
                <div className="space-y-1">
                  <Slider
                    value={savings}
                    onValueChange={setSavings}
                    max={6}
                    min={0}
                    step={0.2}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0m</span>
                    <span>Current: 1.8m</span>
                    <span>6m</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Badge variant={savings[0] >= 2 ? "default" : "outline"} className="text-xs">≥2m</Badge>
                  <Badge variant={savings[0] >= 3 ? "default" : "outline"} className="text-xs">≥3m</Badge>
                  <Badge variant={savings[0] >= 4 ? "default" : "outline"} className="text-xs">≥4m</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Scenarios */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <PlayCircle className="w-4 h-4 text-green-500" />
                Quick Scenarios
              </CardTitle>
              <CardDescription className="text-xs">
                Apply pre-configured scenarios to see their impact
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid gap-2">
                <Button 
                  variant={selectedScenario === 'current' ? 'default' : 'outline'} 
                  onClick={() => applyScenario('current')}
                  className="justify-start h-8 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Current Situation
                  </div>
                </Button>
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <Button 
                    key={key}
                    variant={selectedScenario === key ? 'default' : 'outline'} 
                    onClick={() => applyScenario(key)}
                    className="justify-between h-8 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${scenario.color} rounded-full`}></div>
                      Scenario {key}
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                      {scenario.approval}%
                    </Badge>
                  </Button>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 h-7 text-xs">
                  <RotateCcw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
                <Button size="sm" variant="outline" className="flex-1 h-7 text-xs">
                  Compare All
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="xl:col-span-2 lg:col-span-1 space-y-3">
          {/* Current Prediction */}
          <Card className={`border-l-4 ${currentStatus.borderColor} ${currentStatus.bgColor}`}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className={`w-4 h-4 ${currentStatus.color}`} />
                Prediction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <div className="text-center">
                <div className={`text-xl font-bold ${currentStatus.color}`}>
                  {currentApproval}%
                </div>
                <Badge variant={currentApproval >= 80 ? "default" : currentApproval >= 60 ? "secondary" : "destructive"} className="mt-1 text-xs">
                  {currentStatus.status}
                </Badge>
              </div>
              <Progress value={currentApproval} className="h-2" />
              <div className="text-xs text-center text-muted-foreground">
                Approval Likelihood
              </div>
            </CardContent>
          </Card>

          {/* Impact Analysis */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                Impact Analysis
              </CardTitle>
              <CardDescription className="text-xs">
                Changes from current situation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs">Income stability</span>
                  <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                    +12%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">DTI influence</span>
                  <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                    +10%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Savings buffer</span>
                  <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                    +6%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Credit history</span>
                  <Badge variant="outline" className="text-gray-600 border-gray-600 text-xs">
                    ±0%
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Lightbulb className="w-4 h-4 text-blue-500" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <span className="text-xs font-semibold text-blue-900 dark:text-blue-100">Priority Actions:</span>
                  <ul className="mt-1 space-y-0.5 text-xs text-blue-800 dark:text-blue-200">
                    <li>• Stabilize monthly income</li>
                    <li>• Reduce DTI below 35%</li>
                    <li>• Build 3+ months emergency fund</li>
                  </ul>
                </div>
                <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <span className="text-xs font-semibold text-green-900 dark:text-green-100">Timeline:</span>
                  <p className="mt-1 text-xs text-green-800 dark:text-green-200">
                    Reapply in 6 months after implementing changes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detailed Scenarios Comparison */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Scenario Comparison</CardTitle>
          <CardDescription className="text-xs">
            Detailed breakdown of all scenarios and their approval likelihood
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid lg:grid-cols-3 gap-3">
            {Object.entries(scenarios).map(([key, scenario]) => (
              <div key={key} className="p-3 border rounded-lg space-y-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${scenario.color} rounded-full`}></div>
                      <h4 className="text-sm font-semibold">Scenario {key}</h4>
                      <Badge variant="outline" className={scenario.impact === 'High' ? 'text-green-600 border-green-600 text-xs' : 'text-yellow-600 border-yellow-600 text-xs'}>
                        {scenario.impact}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Income ${scenario.income.toLocaleString()} • DTI {scenario.dti}% • Savings {scenario.savings}m
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{scenario.approval}%</div>
                    <div className="text-xs text-muted-foreground">approval</div>
                  </div>
                </div>
                <Progress value={scenario.approval} className="h-1.5" />
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => applyScenario(key)}
                  className="w-full h-7 text-xs"
                >
                  Apply This Scenario
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Guardrails & Compliance */}
      <div className="grid lg:grid-cols-2 gap-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm pt-0">
            <div className="p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
              <span className="text-xs font-semibold text-yellow-900 dark:text-yellow-100">Realism Check:</span>
              <p className="text-xs text-yellow-800 dark:text-yellow-200 mt-1">
                All changes must be supported by documented evidence
              </p>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <span className="text-xs font-semibold text-blue-900 dark:text-blue-100">Evidence Required:</span>
              <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
                Upload proof for income or savings changes before reapplying
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Export & Share</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <Button variant="outline" className="w-full justify-between h-8 text-xs">
              Export Scenario Report
              <BarChart3 className="w-3 h-3" />
            </Button>
            <Button variant="outline" className="w-full justify-between h-8 text-xs">
              Share with Advisor
              <TrendingUp className="w-3 h-3" />
            </Button>
            <div className="text-xs text-muted-foreground pt-1">
              Decision ID: LOAN-2025-10-02-0074 • Model: CreditRisk v5.2
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}