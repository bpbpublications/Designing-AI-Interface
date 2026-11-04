import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Cpu, Database, Network, Shield } from 'lucide-react';

interface SystemStatusProps {
  aiEnabled?: boolean;
  autoBlock?: boolean;
  realTimeMonitoring?: boolean;
}

export function SystemStatus({ aiEnabled = true, autoBlock = true, realTimeMonitoring = true }: SystemStatusProps) {
  const systemMetrics = [
    {
      name: 'AI Model Performance',
      value: aiEnabled ? 97 : 0,
      status: aiEnabled ? 'optimal' : 'disabled',
      icon: Cpu
    },
    {
      name: 'Database Health',
      value: 99,
      status: 'optimal',
      icon: Database
    },
    {
      name: 'Network Latency',
      value: realTimeMonitoring ? 85 : 40,
      status: realTimeMonitoring ? 'good' : 'reduced',
      icon: Network
    },
    {
      name: 'Security Score',
      value: aiEnabled && autoBlock ? 100 : aiEnabled ? 85 : 60,
      status: aiEnabled && autoBlock ? 'optimal' : aiEnabled ? 'good' : 'manual',
      icon: Shield
    }
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      optimal: <Badge className="bg-green-100 text-green-800 border-green-200">Optimal</Badge>,
      good: <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Good</Badge>,
      warning: <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Warning</Badge>,
      critical: <Badge variant="destructive">Critical</Badge>,
      disabled: <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Disabled</Badge>,
      reduced: <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Reduced</Badge>,
      manual: <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Manual</Badge>
    };
    return badges[status as keyof typeof badges] || badges.good;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <span>System Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{metric.name}</span>
                </div>
                {getStatusBadge(metric.status)}
              </div>
              
              <div className="flex items-center space-x-2">
                <Progress value={metric.value} className="flex-1" />
                <span className="text-sm text-muted-foreground w-12 text-right">
                  {metric.value}%
                </span>
              </div>
            </div>
          ))}
          
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Last Updated:</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-muted-foreground">Uptime:</span>
              <span>99.98%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}