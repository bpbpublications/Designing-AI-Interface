import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

interface MetricsCardsProps {
  metrics: {
    totalTransactions: number;
    flaggedCount: number;
    approvedOverrides: number;
    averageRiskScore: number;
  };
}

export function MetricsCards({ metrics }: MetricsCardsProps) {
  const cards = [
    {
      title: 'Total Transactions',
      value: metrics.totalTransactions.toLocaleString(),
      icon: Activity,
      trend: '+12% from yesterday',
      color: 'text-blue-600'
    },
    {
      title: 'Flagged Transactions',
      value: metrics.flaggedCount.toString(),
      icon: AlertTriangle,
      trend: `${((metrics.flaggedCount / metrics.totalTransactions) * 100).toFixed(1)}% of total`,
      color: 'text-orange-600'
    },
    {
      title: 'Approved Overrides',
      value: metrics.approvedOverrides.toString(),
      icon: CheckCircle,
      trend: 'Last 24 hours',
      color: 'text-green-600'
    },
    {
      title: 'Average Risk Score',
      value: metrics.averageRiskScore.toFixed(1),
      icon: TrendingUp,
      trend: '-3.2% from yesterday',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className={`h-4 w-4 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{card.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}