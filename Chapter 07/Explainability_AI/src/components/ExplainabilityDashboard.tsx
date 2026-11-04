import { ChevronDown, ChevronRight, Copy, Eye, GitCompare } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

interface InfluencingFactor {
  id: number;
  description: string;
  highlight: string;
  score?: number;
}

interface Alternative {
  name: string;
  percentage: number;
}

export function ExplainabilityDashboard() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const influencingFactors: InfluencingFactor[] = [
    {
      id: 1,
      description: "Patchy opacities",
      highlight: "in lower lobes (pattern similarity score: 0.82)",
      score: 0.82
    },
    {
      id: 2,
      description: "Elevated CRP",
      highlight: "in labs (historical co-occurrence)",
    },
    {
      id: 3,
      description: "Reported fever + cough",
      highlight: "in intake notes",
    }
  ];

  const alternatives: Alternative[] = [
    { name: "Viral Bronchitis", percentage: 18 },
    { name: "Atelectasis", percentage: 4 }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Collapsible open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <Card className="shadow-lg border-0 bg-gradient-to-r from-slate-50 to-gray-50">
          <CardContent className="p-6">
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-2 w-full text-left group hover:opacity-80 transition-opacity">
                {isDetailsOpen ? (
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                )}
                <h2 className="text-slate-800">
                  Details: Why this{" "}
                  <span className="text-purple-600 font-medium">result</span>?{" "}
                  <span className="text-slate-500"></span>
                </h2>
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-6 space-y-8">
              {/* Top Influencing Factors */}
              <div>
                <h3 className="text-slate-800 mb-4">Top Influencing Factors</h3>
                <div className="space-y-3">
                  {influencingFactors.map((factor) => (
                    <div key={factor.id} className="flex items-start gap-3">
                      <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300 min-w-6 h-6 rounded-full flex items-center justify-center p-0">
                        {factor.id}
                      </Badge>
                      <div className="flex-1">
                        <span className="text-slate-700">{factor.description} </span>
                        <span className="text-purple-600">{factor.highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Counterfactuals */}
              <Card className="shadow-md border border-slate-200 bg-white">
                <CardContent className="p-5">
                  <h3 className="text-slate-800 mb-3">Counterfactuals</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    <span className="text-slate-700">
                      If CRP were normal, confidence would{" "}
                      <span className="text-purple-600">drop to ~63%</span>
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Alternatives */}
              <Card className="shadow-md border border-slate-200 bg-white">
                <CardContent className="p-5">
                  <h3 className="text-slate-800 mb-4">Alternatives (ranked)</h3>
                  <div className="flex flex-wrap gap-4">
                    {alternatives.map((alt, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                        <span className="text-slate-700">{alt.name}</span>
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                          {alt.percentage}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Controls */}
              <Card className="shadow-md border border-slate-200 bg-white">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-800">Controls:</span>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="gap-2 shadow-sm">
                        <Eye className="w-4 h-4" />
                        See Example Images
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 shadow-sm">
                        <GitCompare className="w-4 h-4" />
                        Compare with Prior X-ray
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 shadow-sm text-purple-600 border-purple-200 hover:bg-purple-50">
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </CardContent>
        </Card>
      </Collapsible>
    </div>
  );
}