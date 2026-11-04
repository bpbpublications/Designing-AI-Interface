import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X, CheckCircle, AlertTriangle, Info, FileText, Users, Shield, ExternalLink } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export function LoanDecisionSummary() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const factors = [
    { name: 'Income stability', percentage: 40, color: 'bg-orange-500' },
    { name: 'Debt-to-income ratio', percentage: 30, color: 'bg-red-500' },
    { name: 'Credit history', percentage: 20, color: 'bg-yellow-500' },
    { name: 'Savings buffer', percentage: 10, color: 'bg-blue-500' }
  ];

  const scenarios = [
    { name: 'Scenario A', details: 'Income $2,600, DTI 38%, Reserves 3m', approval: 82, impact: 'High' },
    { name: 'Scenario B', details: 'Income $2,400, DTI 34%, Reserves 2m', approval: 79, impact: 'Medium-High' },
    { name: 'Scenario C', details: 'Income $2,200, DTI 36%, Reserves 3m', approval: 73, impact: 'Medium' }
  ];

  return (
    <div className="w-full px-4 space-y-3">
      {/* Header Card */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                <X className="w-5 h-5 text-red-500" />
                Loan Application Decision
              </CardTitle>
              <CardDescription className="mt-1 text-sm">
                Application ID: LOAN-2025-10-02-0074 • Processed: Oct 2, 2025 at 14:22:33 IST
              </CardDescription>
            </div>
            <div className="text-right">
              <Badge variant="destructive" className="text-sm px-2 py-1">
                DENIED
              </Badge>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">Confidence:</span>
                <Progress value={74} className="w-16 h-1.5" />
                <span className="text-sm font-semibold">74%</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="p-3 bg-muted/30 rounded-lg">
            <p className="text-sm">
              <span className="font-semibold text-primary">Primary reason:</span> 
              <span className="ml-2">Unstable income records combined with high debt-to-income ratio exceed risk thresholds</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-3">
        {/* Decision Factors */}
        <Card>
          <Collapsible open={expandedSections.why} onOpenChange={() => toggleSection('why')}>
            <CardHeader className="pb-2">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Decision Factors
                    {expandedSections.why && <Badge variant="outline" className="text-xs">Expanded</Badge>}
                  </CardTitle>
                  {expandedSections.why ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CardDescription className="text-xs">
                Factors that influenced the loan decision, ranked by impact
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              {factors.map((factor, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{factor.name}</span>
                    <Badge variant="outline" className="text-xs">{factor.percentage}%</Badge>
                  </div>
                  <Progress value={factor.percentage} className="h-1.5" />
                </div>
              ))}
              
              <CollapsibleContent className="space-y-3 mt-3">
                <Separator />
                <div className="grid gap-2">
                  <div className="p-3 border rounded-lg space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Income Stability (40%)</span>
                    </div>
                    <div className="ml-4 space-y-0.5 text-xs text-muted-foreground">
                      <p>• Income volatility (24 months): <span className="text-orange-600 font-medium">High</span></p>
                      <p>• Income gaps detected: <span className="text-orange-600 font-medium">2 gaps &ge;30 days</span></p>
                    </div>
                  </div>
                  
                  <div className="p-3 border rounded-lg space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Debt-to-Income Ratio (30%)</span>
                    </div>
                    <div className="ml-4 space-y-0.5 text-xs text-muted-foreground">
                      <p>• Current DTI: <span className="text-red-600 font-medium">48%</span> (threshold: &le;36%)</p>
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Credit History (20%)</span>
                    </div>
                    <div className="ml-4 space-y-0.5 text-xs text-muted-foreground">
                      <p>• Late payments (12 months): <span className="text-yellow-600 font-medium">2 instances</span></p>
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Savings Buffer (10%)</span>
                    </div>
                    <div className="ml-4 space-y-0.5 text-xs text-muted-foreground">
                      <p>• Liquid reserves: <span className="text-blue-600 font-medium">1.8 months</span> (recommended: &ge;3 months)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </CardContent>
          </Collapsible>
        </Card>

        {/* Technical Details */}
        <Card>
          <Collapsible open={expandedSections.process} onOpenChange={() => toggleSection('process')}>
            <CardHeader className="pb-2">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Info className="w-4 h-4 text-blue-500" />
                    Technical Details
                    {expandedSections.process && <Badge variant="outline" className="text-xs">Expanded</Badge>}
                  </CardTitle>
                  {expandedSections.process ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CardDescription className="text-xs">
                Model information and decision logic trace
              </CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="space-y-3 pt-0">
                <div className="grid gap-3">
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-semibold">Model Version:</span>
                      <p className="text-xs text-muted-foreground">CreditRisk v5.2 (2025-09-14)</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Method:</span>
                      <p className="text-xs text-muted-foreground">Gradient-boosted ensemble with rule constraints</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-semibold">Feature Group Weights:</span>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Income signals</span>
                        <span className="font-mono">0.42</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Liability signals</span>
                        <span className="font-mono">0.33</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Credit behavior</span>
                        <span className="font-mono">0.18</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Asset buffers</span>
                        <span className="font-mono">0.07</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <span className="text-sm font-semibold">Decision Rule Hit:</span>
                  <p className="text-xs mt-1">"DTI &gt; 45% → review/deny unless reserves ≥3 months"</p>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        {/* Path to Approval */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Path to Approval
            </CardTitle>
            <CardDescription className="text-xs">
              Hypothetical scenarios that could lead to loan approval
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="space-y-2">
              <div className="p-3 border rounded-lg">
                <p className="text-xs">
                  <span className="font-semibold">If income &gt; $2,500</span>
                  <span className="ml-2">→ Approval: </span>
                  <Badge variant="outline" className="text-green-600 border-green-600 text-xs">82%</Badge>
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-xs">
                  <span className="font-semibold">If DTI &lt; 35%</span>
                  <span className="ml-2">→ Approval: </span>
                  <Badge variant="outline" className="text-green-600 border-green-600 text-xs">79%</Badge>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scenario Analysis */}
        <Card>
          <Collapsible open={expandedSections.impact} onOpenChange={() => toggleSection('impact')}>
            <CardHeader className="pb-2">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <FileText className="w-4 h-4 text-purple-500" />
                    Scenario Impact
                    {expandedSections.impact && <Badge variant="outline" className="text-xs">Expanded</Badge>}
                  </CardTitle>
                  {expandedSections.impact ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CardDescription className="text-xs">
                Detailed analysis of alternative financial scenarios
              </CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="space-y-2 pt-0">
                {scenarios.map((scenario, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-semibold">{scenario.name}</h4>
                        <p className="text-xs text-muted-foreground">{scenario.details}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                          {scenario.approval}%
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-0.5">{scenario.impact}</p>
                      </div>
                    </div>
                    <Progress value={scenario.approval} className="h-1.5" />
                  </div>
                ))}
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        {/* Recommendations */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100">Immediate Actions</h4>
                <ul className="mt-1 space-y-0.5 text-xs text-blue-800 dark:text-blue-200">
                  <li>• Upload latest 6 months of bank statements</li>
                  <li>• Provide documentation for any income gaps</li>
                </ul>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <h4 className="text-sm font-semibold text-green-900 dark:text-green-100">Timeline</h4>
                <p className="mt-1 text-xs text-green-800 dark:text-green-200">
                  Reapply after 6 months or when income stabilizes and DTI improves
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sources */}
        <Card>
          <Collapsible open={expandedSections.data} onOpenChange={() => toggleSection('data')}>
            <CardHeader className="pb-2">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <FileText className="w-4 h-4 text-gray-500" />
                    Data Sources
                    {expandedSections.data && <Badge variant="outline" className="text-xs">Expanded</Badge>}
                  </CardTitle>
                  {expandedSections.data ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Data Quality</span>
                  <Badge variant="outline" className="text-green-600 border-green-600 text-xs">92% High</Badge>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Analysis Period</span>
                  <span className="text-muted-foreground">24 months</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Verification</span>
                  <span className="text-muted-foreground">Employer payroll feed</span>
                </div>
              </div>
              
              <CollapsibleContent className="mt-3 space-y-2">
                <Separator />
                <div className="space-y-1 text-xs">
                  <div><span className="font-semibold">Sources:</span> Bank statements (24 mo), payroll feed, credit bureau</div>
                  <div><span className="font-semibold">Completeness:</span> No missing months in last 12</div>
                  <div><span className="font-semibold">Compliance:</span> Sensitive attributes excluded (gender, race, religion)</div>
                </div>
              </CollapsibleContent>
            </CardContent>
          </Collapsible>
        </Card>

        {/* Accountability */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="w-4 h-4 text-green-500" />
              Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs">Bias Check</span>
                <Badge variant="outline" className="text-green-600 border-green-600 text-xs">PASSED</Badge>
              </div>
              <div className="space-y-1">
                <Button variant="outline" size="sm" className="w-full justify-between text-xs h-8">
                  Export Report
                  <ExternalLink className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-between text-xs h-8">
                  View Audit Log
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Role Views */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Users className="w-4 h-4 text-gray-500" />
              Role Views
            </CardTitle>
            <CardDescription className="text-xs">
              Access different perspectives based on your role
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-xs">Customer</Button>
              <Button variant="outline" size="sm" className="text-xs">Officer</Button>
              <Button variant="outline" size="sm" className="text-xs">Regulator</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}