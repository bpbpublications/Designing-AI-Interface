import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Transaction } from '../App';

interface TransactionMonitorProps {
  transactions: Transaction[];
  onOverride: (transactionId: string, action: 'approve' | 'deny') => void;
  onViewDetails: (transaction: Transaction) => void;
}

export function TransactionMonitor({ transactions, onOverride, onViewDetails }: TransactionMonitorProps) {
  const getRiskBadge = (riskScore: number, aiFlag: Transaction['aiFlag']) => {
    if (aiFlag === 'blocked') {
      return <Badge variant="destructive">Blocked</Badge>;
    }
    if (aiFlag === 'suspicious') {
      return <Badge variant="secondary" className="bg-orange-100 text-orange-800">Suspicious</Badge>;
    }
    if (riskScore < 30) {
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Low Risk</Badge>;
    }
    if (riskScore < 60) {
      return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Medium Risk</Badge>;
    }
    return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">High Risk</Badge>;
  };

  const getOverrideStatusBadge = (status?: Transaction['overrideStatus']) => {
    if (!status) return null;
    
    const badges = {
      pending: <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>,
      approved: <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>,
      denied: <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Denied</Badge>
    };
    
    return badges[status];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Real-time Transaction Monitor
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Account</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>AI Assessment</TableHead>
                <TableHead>Override Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.slice(0, 10).map((transaction) => (
                <TableRow key={transaction.id} className={transaction.aiFlag === 'blocked' ? 'bg-red-50' : transaction.aiFlag === 'suspicious' ? 'bg-orange-50' : ''}>
                  <TableCell className="font-mono text-sm">{transaction.id.slice(-8)}</TableCell>
                  <TableCell className="font-mono text-sm">{transaction.accountId.slice(-6)}</TableCell>
                  <TableCell>${transaction.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  <TableCell className="capitalize">{transaction.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{transaction.riskScore.toFixed(1)}</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            transaction.riskScore < 30 ? 'bg-green-500' :
                            transaction.riskScore < 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${Math.min(transaction.riskScore, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getRiskBadge(transaction.riskScore, transaction.aiFlag)}</TableCell>
                  <TableCell>{getOverrideStatusBadge(transaction.overrideStatus)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => onViewDetails(transaction)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {(transaction.aiFlag === 'suspicious' || transaction.aiFlag === 'blocked') && !transaction.overrideStatus && (
                        <>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => onOverride(transaction.id, 'approve')}
                            className="text-green-600 border-green-200 hover:bg-green-50"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => onOverride(transaction.id, 'deny')}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}