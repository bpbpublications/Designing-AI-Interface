import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { AlertTriangle, Clock } from 'lucide-react';
import { Transaction } from '../App';

interface AlertPanelProps {
  flaggedTransactions: Transaction[];
}

export function AlertPanel({ flaggedTransactions }: AlertPanelProps) {
  const priorityTransactions = flaggedTransactions
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-orange-600" />
          <span>Priority Alerts</span>
          <Badge variant="destructive">{flaggedTransactions.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {priorityTransactions.length === 0 ? (
            <p className="text-sm text-muted-foreground">No priority alerts at this time</p>
          ) : (
            priorityTransactions.map((transaction) => (
              <div key={transaction.id} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">{transaction.id.slice(-8)}</span>
                  <Badge variant={transaction.aiFlag === 'blocked' ? 'destructive' : 'secondary'}>
                    {transaction.aiFlag === 'blocked' ? 'Blocked' : 'Suspicious'}
                  </Badge>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium">${transaction.amount.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Risk Score:</span>
                  <span className={`font-medium ${
                    transaction.riskScore > 80 ? 'text-red-600' : 
                    transaction.riskScore > 60 ? 'text-orange-600' : 'text-green-600'
                  }`}>
                    {transaction.riskScore.toFixed(1)}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-right">{transaction.location}</span>
                </div>
                
                <div className="flex items-center text-xs text-muted-foreground mt-2">
                  <Clock className="h-3 w-3 mr-1" />
                  {transaction.timestamp.toLocaleTimeString()}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}