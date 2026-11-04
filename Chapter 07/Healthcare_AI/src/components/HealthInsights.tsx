import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  AlertCircle,
  BookOpen,
  Activity,
  Brain,
  BarChart3,
  Clock,
  Shield
} from 'lucide-react';

const insights = [
  {
    title: 'Seasonal Health Pattern Analysis',
    type: 'Epidemiological Data',
    confidence: 92,
    icon: TrendingUp,
    summary: 'Current respiratory infection rates are 40% above seasonal average in your region',
    details: [
      'Regional viral surveillance shows increased rhinovirus and influenza activity',
      'Your symptoms align with 89% of cases reported in the past 2 weeks',
      'Peak season typically lasts 6-8 weeks, currently in week 3',
      'Recovery time averages 7-10 days for your age group and health profile'
    ],
    reasoning: 'Based on CDC surveillance data, local hospital reports, and regional symptom tracking from our user network',
    actionable: 'Consider extra preventive measures for the next 3-5 weeks',
    image: 'https://images.unsplash.com/photo-1659019479789-4dd5dbdc2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RldGhvc2NvcGUlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1ODQ2MTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Risk Factor Assessment',
    type: 'Personalized Analysis',
    confidence: 87,
    icon: Shield,
    summary: 'Your personal risk factors suggest faster than average recovery',
    details: [
      'Age group (25-35) shows 85% recovery within 7 days',
      'No chronic conditions present - reduces complication risk by 60%',
      'Regular exercise history improves immune response effectiveness',
      'No medication interactions identified with recommended treatments'
    ],
    reasoning: 'Analysis based on your health profile, lifestyle factors, and comparison with similar demographic outcomes',
    actionable: 'Maintain current health habits and follow standard recovery protocols',
    image: 'https://images.unsplash.com/photo-1631217872822-1c2546d6b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjb25zdWx0YXRpb24lMjBtZWRpY2FsfGVufDF8fHx8MTc1ODM4MzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const preventiveMeasures = [
  {
    title: 'Evidence-Based Prevention',
    effectiveness: 78,
    timeframe: 'Immediate',
    measures: [
      'Hand hygiene (20-second wash) - 45% risk reduction',
      'Avoid touching face - 23% risk reduction', 
      'Maintain 6ft distance from symptomatic individuals - 35% reduction',
      'Adequate sleep (7-9 hours) - 30% immune system boost'
    ]
  }
];

export function HealthInsights() {
  return (
    <div className="space-y-6">
      {insights.map((insight, index) => (
        <Card key={index} className="shadow-sm border-0 bg-card">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <insight.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                  <Badge variant="secondary" className="mt-1">{insight.type}</Badge>
                </div>
              </div>
              
              <div className="text-right space-y-1">
                <div className="text-lg font-semibold text-primary">{insight.confidence}%</div>
                <div className="text-xs text-muted-foreground">Confidence</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Data Confidence Level</span>
                <span>{insight.confidence}%</span>
              </div>
              <Progress value={insight.confidence} className="h-2" />
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Image */}
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted/30">
                  <ImageWithFallback 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Key Finding</h4>
                  <p className="text-muted-foreground">{insight.summary}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    Detailed Analysis
                  </h4>
                  <ul className="space-y-2">
                    {insight.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    Data Sources & Methodology
                  </h4>
                  <p className="text-sm text-muted-foreground">{insight.reasoning}</p>
                </div>

                <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-700 dark:text-blue-300">
                    <strong>Actionable Insight:</strong> {insight.actionable}
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="sm" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Learn More
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Activity className="w-4 h-4" />
                Track Progress
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Users className="w-4 h-4" />
                Community Data
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Prevention Recommendations */}
      <Card className="shadow-sm border-0 bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Evidence-Based Prevention Strategies
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {preventiveMeasures.map((measure, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{measure.title}</h4>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="gap-1">
                    <Clock className="w-3 h-3" />
                    {measure.timeframe}
                  </Badge>
                  <span className="text-sm font-medium text-green-600">{measure.effectiveness}% effective</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Prevention Effectiveness</span>
                  <span>{measure.effectiveness}%</span>
                </div>
                <Progress value={measure.effectiveness} className="h-2" />
              </div>

              <ul className="space-y-2">
                {measure.measures.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}