import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { TrendingUp, Shield, Leaf, Clock, DollarSign } from 'lucide-react';

interface PortfolioAllocation {
  name: string;
  percentage: number;
  color: string;
  description: string;
}

interface PortfolioRecommendation {
  title: string;
  expectedReturn: string;
  volatility: string;
  allocations: PortfolioAllocation[];
  sustainabilityScore: number;
  description: string;
}

export function FinanceAdvisor() {
  const [riskTolerance, setRiskTolerance] = useState([50]);
  const [timeHorizon, setTimeHorizon] = useState([10]);
  const [sustainabilityPreference, setSustainabilityPreference] = useState([30]);
  const [currentRecommendation, setCurrentRecommendation] = useState<PortfolioRecommendation | null>(null);

  const generatePortfolioRecommendation = (): PortfolioRecommendation => {
    const risk = riskTolerance[0];
    const time = timeHorizon[0];
    const sustainability = sustainabilityPreference[0];

    // Conservative portfolio (low risk)
    if (risk < 30) {
      return {
        title: "Conservative Growth Portfolio",
        expectedReturn: "5-7%",
        volatility: "Low (8-12%)",
        description: "A stable portfolio focused on capital preservation with modest growth potential.",
        sustainabilityScore: Math.min(sustainability + 20, 95),
        allocations: [
          { name: "Government Bonds", percentage: 40, color: "#3b82f6", description: "Safe, stable returns" },
          { name: "Corporate Bonds", percentage: 25, color: "#06b6d4", description: "Higher yield bonds" },
          { name: "Large Cap Stocks", percentage: 20, color: "#10b981", description: "Established companies" },
          { name: sustainability > 50 ? "ESG Funds" : "REITs", percentage: 10, color: "#f59e0b", description: sustainability > 50 ? "Sustainable investments" : "Real estate exposure" },
          { name: "Cash/Money Market", percentage: 5, color: "#6b7280", description: "Liquidity buffer" }
        ]
      };
    }
    
    // Moderate portfolio (medium risk)
    if (risk < 70) {
      return {
        title: "Balanced Growth Portfolio",
        expectedReturn: "7-10%",
        volatility: "Moderate (12-18%)",
        description: "A diversified mix of stocks and bonds for steady long-term growth.",
        sustainabilityScore: Math.min(sustainability + 10, 90),
        allocations: [
          { name: "Large Cap Stocks", percentage: 35, color: "#10b981", description: "Stable growth companies" },
          { name: "Mid Cap Stocks", percentage: 15, color: "#059669", description: "Growth potential" },
          { name: "International Stocks", percentage: 20, color: "#3b82f6", description: "Global diversification" },
          { name: sustainability > 50 ? "ESG Funds" : "Corporate Bonds", percentage: 20, color: sustainability > 50 ? "#22c55e" : "#06b6d4", description: sustainability > 50 ? "Sustainable investments" : "Fixed income" },
          { name: "REITs", percentage: 10, color: "#f59e0b", description: "Real estate exposure" }
        ]
      };
    }

    // Aggressive portfolio (high risk)
    return {
      title: "Aggressive Growth Portfolio",
      expectedReturn: "10-15%",
      volatility: "High (18-25%)",
      description: "A growth-focused portfolio for investors seeking maximum long-term returns.",
      sustainabilityScore: sustainability < 30 ? 40 : Math.min(sustainability + 5, 85),
      allocations: [
        { name: "Large Cap Growth", percentage: 30, color: "#10b981", description: "High-growth companies" },
        { name: "Small Cap Stocks", percentage: 20, color: "#059669", description: "High growth potential" },
        { name: "Technology Stocks", percentage: 20, color: "#8b5cf6", description: "Innovation leaders" },
        { name: "International Emerging", percentage: 15, color: "#3b82f6", description: "Emerging markets" },
        { name: sustainability > 50 ? "ESG Growth" : "Commodities", percentage: 10, color: sustainability > 50 ? "#22c55e" : "#f59e0b", description: sustainability > 50 ? "Sustainable growth" : "Inflation hedge" },
        { name: "Cash", percentage: 5, color: "#6b7280", description: "Opportunity fund" }
      ]
    };
  };

  useEffect(() => {
    setCurrentRecommendation(generatePortfolioRecommendation());
  }, [riskTolerance, timeHorizon, sustainabilityPreference]);

  const handleReset = () => {
    setRiskTolerance([50]);
    setTimeHorizon([10]);
    setSustainabilityPreference([30]);
  };

  const getRiskLabel = (value: number) => {
    if (value < 30) return "Conservative";
    if (value < 70) return "Moderate";
    return "Aggressive";
  };

  const getTimeHorizonLabel = (value: number) => {
    if (value < 5) return "Short-term";
    if (value < 15) return "Medium-term";
    return "Long-term";
  };

  const getSustainabilityLabel = (value: number) => {
    if (value < 30) return "Traditional";
    if (value < 70) return "Conscious";
    return "ESG Focused";
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold flex items-center justify-center gap-2">
          <TrendingUp className="w-8 h-8 text-primary" />
          AI Finance Advisor
        </h1>
        <p className="text-muted-foreground">
          Personalized investment portfolios based on your preferences
        </p>
      </div>

      <Card className="p-6 border-2 border-dashed border-border">
        {currentRecommendation && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Portfolio Recommendation:</h2>
              <Badge variant="secondary">{currentRecommendation.title}</Badge>
            </div>
            
            <p className="text-muted-foreground">
              {currentRecommendation.description}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Expected Return</p>
                  <p className="font-semibold">{currentRecommendation.expectedReturn}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Risk Level</p>
                  <p className="font-semibold">{currentRecommendation.volatility}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Sustainability Score</p>
                  <p className="font-semibold">{currentRecommendation.sustainabilityScore}/100</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Asset Allocation:</h3>
              <div className="space-y-2">
                {currentRecommendation.allocations.map((allocation, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: allocation.color }}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{allocation.name}</span>
                        <span className="font-semibold">{allocation.percentage}%</span>
                      </div>
                      <Progress 
                        value={allocation.percentage} 
                        className="h-2 mt-1"
                        style={{ backgroundColor: `${allocation.color}20` }}
                      />
                      <p className="text-xs text-muted-foreground mt-1">{allocation.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <div className="space-y-6">
          <h3 className="font-semibold">Investment Preferences:</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-medium flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Risk Tolerance:
                </label>
                <Badge variant="outline">{getRiskLabel(riskTolerance[0])}</Badge>
              </div>
              <Slider
                value={riskTolerance}
                onValueChange={setRiskTolerance}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Conservative</span>
                <span>Moderate</span>
                <span>Aggressive</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Time Horizon:
                </label>
                <Badge variant="outline">{timeHorizon[0]} years ({getTimeHorizonLabel(timeHorizon[0])})</Badge>
              </div>
              <Slider
                value={timeHorizon}
                onValueChange={setTimeHorizon}
                max={30}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1 year</span>
                <span>15 years</span>
                <span>30+ years</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-medium flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Sustainability Preference:
                </label>
                <Badge variant="outline">{getSustainabilityLabel(sustainabilityPreference[0])}</Badge>
              </div>
              <Slider
                value={sustainabilityPreference}
                onValueChange={setSustainabilityPreference}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Traditional</span>
                <span>Conscious</span>
                <span>ESG Focused</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex gap-3">
        <Button 
          onClick={() => setCurrentRecommendation(generatePortfolioRecommendation())}
          className="flex-1"
        >
          Generate New Portfolio
        </Button>
        <Button 
          variant="outline" 
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}