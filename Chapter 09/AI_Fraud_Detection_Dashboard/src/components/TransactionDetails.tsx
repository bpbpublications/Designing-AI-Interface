import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { CheckCircle, XCircle, MapPin, Clock, CreditCard, AlertTriangle, User } from 'lucide-react';
import { Transaction } from '../App';

interface TransactionDetailsProps {
  transaction: Transaction | null;
  isOpen: boolean;
  onClose: () => void;
  onOverride: (transactionId: string, action: 'approve' | 'deny') => void;
}

export function TransactionDetails({ transaction, isOpen, onClose, onOverride }: TransactionDetailsProps) {
  if (!transaction) return null;

  const riskFactors = [
    { factor: 'Unusual Amount', present: transaction.amount > 5000, severity: 'high' },
    { factor: 'Off-hours Transaction', present: new Date(transaction.timestamp).getHours() < 6 || new Date(transaction.timestamp).getHours() > 22, severity: 'medium' },
    { factor: 'New Location', present: transaction.riskScore > 70, severity: 'high' },
    { factor: 'Velocity Check', present: transaction.riskScore > 60, severity: 'medium' },
    { factor: 'Pattern Anomaly', present: transaction.riskScore > 80, severity: 'high' }
  ];

  const presentRiskFactors = riskFactors.filter(rf => rf.present);

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Transaction Details
            <Badge variant={transaction.aiFlag === 'blocked' ? 'destructive' : transaction.aiFlag === 'suspicious' ? 'secondary' : 'outline'}>
              {transaction.aiFlag === 'blocked' ? 'Blocked' : transaction.aiFlag === 'suspicious' ? 'Flagged' : 'Safe'}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Transaction Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Transaction ID</label>
              <p className="font-mono text-sm">{transaction.id}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Account ID</label>
              <p className="font-mono text-sm">{transaction.accountId}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Amount</label>
              <p className="text-lg font-semibold">${transaction.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Type</label>
              <p className="capitalize">{transaction.type}</p>
            </div>
          </div>

          <Separator />

          {/* Risk Assessment */}
          <div>
            <h3 className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <span>AI Risk Assessment</span>
            </h3>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Risk Score</span>
                  <span className={`font-semibold ${
                    transaction.riskScore > 80 ? 'text-red-600' :
                    transaction.riskScore > 60 ? 'text-orange-600' :
                    'text-green-600'
                  }`}>
                    {transaction.riskScore.toFixed(1)}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      transaction.riskScore > 80 ? 'bg-red-500' :
                      transaction.riskScore > 60 ? 'bg-orange-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${Math.min(transaction.riskScore, 100)}%` }}
                  ></div>
                </div>
              </div>

              {presentRiskFactors.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Detected Risk Factors:</p>
                  <div className="space-y-1">
                    {presentRiskFactors.map((rf, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Badge variant={rf.severity === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                          {rf.severity === 'high' ? 'HIGH' : 'MED'}
                        </Badge>
                        <span className="text-sm">{rf.factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Transaction Context */}
          <div>
            <h3 className="flex items-center space-x-2 mb-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Transaction Context</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Location</label>
                <p>{transaction.location}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Timestamp</label>
                <p>{transaction.timestamp.toLocaleString()}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Description</label>
                <p>{transaction.description}</p>
              </div>
              {transaction.merchantName && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Merchant</label>
                  <p>{transaction.merchantName}</p>
                </div>
              )}
            </div>
          </div>

          {/* Override Status */}
          {(transaction.overrideStatus || transaction.complianceOfficer) && (
            <>
              <Separator />
              <div>
                <h3 className="flex items-center space-x-2 mb-3">
                  <User className="h-5 w-5 text-purple-600" />
                  <span>Compliance Review</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {transaction.overrideStatus && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Override Status</label>
                      <div className="flex items-center space-x-2">
                        {transaction.overrideStatus === 'approved' && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {transaction.overrideStatus === 'denied' && <XCircle className="h-4 w-4 text-red-600" />}
                        {transaction.overrideStatus === 'pending' && <Clock className="h-4 w-4 text-blue-600" />}
                        <span className="capitalize">{transaction.overrideStatus}</span>
                      </div>
                    </div>
                  )}
                  {transaction.complianceOfficer && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Reviewed By</label>
                      <p>{transaction.complianceOfficer}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Action Buttons */}
          {(transaction.aiFlag === 'suspicious' || transaction.aiFlag === 'blocked') && !transaction.overrideStatus && (
            <>
              <Separator />
              <div className="flex space-x-3">
                <Button 
                  onClick={() => onOverride(transaction.id, 'approve')}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve Transaction
                </Button>
                <Button 
                  variant="destructive"
                  onClick={() => onOverride(transaction.id, 'deny')}
                  className="flex-1"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Deny Transaction
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}