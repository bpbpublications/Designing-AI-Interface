import { useState, useEffect } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { TransactionMonitor } from './components/TransactionMonitor';
import { AlertPanel } from './components/AlertPanel';
import { MetricsCards } from './components/MetricsCards';
import { SystemStatus } from './components/SystemStatus';
import { TransactionDetails } from './components/TransactionDetails';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  type: 'transfer' | 'withdrawal' | 'deposit' | 'payment';
  description: string;
  timestamp: Date;
  riskScore: number;
  aiFlag: 'safe' | 'suspicious' | 'blocked';
  location: string;
  merchantName?: string;
  overrideStatus?: 'pending' | 'approved' | 'denied';
  complianceOfficer?: string;
}

// Mock data generator
const generateMockTransaction = (): Transaction => {
  const types: Transaction['type'][] = ['transfer', 'withdrawal', 'deposit', 'payment'];
  const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA'];
  const merchants = ['Amazon', 'Walmart', 'Target', 'Best Buy', 'Home Depot', 'Costco'];
  
  const amount = Math.random() * 10000 + 100;
  const riskScore = Math.random() * 100;
  const type = types[Math.floor(Math.random() * types.length)];
  
  let aiFlag: Transaction['aiFlag'] = 'safe';
  if (riskScore > 80) aiFlag = 'blocked';
  else if (riskScore > 60) aiFlag = 'suspicious';

  return {
    id: `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    accountId: `ACC-${Math.random().toString(36).substr(2, 8)}`,
    amount,
    type,
    description: type === 'payment' ? `Payment to ${merchants[Math.floor(Math.random() * merchants.length)]}` : `${type.charAt(0).toUpperCase()}${type.slice(1)} transaction`,
    timestamp: new Date(),
    riskScore,
    aiFlag,
    location: locations[Math.floor(Math.random() * locations.length)],
    merchantName: type === 'payment' ? merchants[Math.floor(Math.random() * merchants.length)] : undefined
  };
};

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Initialize with some mock transactions
  useEffect(() => {
    const initialTransactions = Array.from({ length: 15 }, generateMockTransaction);
    setTransactions(initialTransactions);
  }, []);

  // Simulate real-time transaction stream
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance of new transaction every 3 seconds
        const newTransaction = generateMockTransaction();
        setTransactions(prev => [newTransaction, ...prev.slice(0, 49)]); // Keep last 50 transactions
        
        if (newTransaction.aiFlag === 'blocked') {
          toast.error(`Transaction ${newTransaction.id} blocked by AI - High risk detected`);
        } else if (newTransaction.aiFlag === 'suspicious') {
          toast.warning(`Transaction ${newTransaction.id} flagged for review`);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleOverride = (transactionId: string, action: 'approve' | 'deny') => {
    setTransactions(prev => prev.map(tx => 
      tx.id === transactionId 
        ? { 
            ...tx, 
            overrideStatus: action === 'approve' ? 'approved' : 'denied',
            complianceOfficer: 'Sarah Johnson',
            aiFlag: action === 'approve' ? 'safe' : 'blocked'
          }
        : tx
    ));
    
    toast.success(`Transaction ${transactionId} ${action}d by compliance officer`);
  };

  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsDetailsOpen(true);
  };

  const flaggedTransactions = transactions.filter(tx => 
    tx.aiFlag === 'suspicious' || tx.aiFlag === 'blocked'
  );

  const metrics = {
    totalTransactions: transactions.length,
    flaggedCount: flaggedTransactions.length,
    approvedOverrides: transactions.filter(tx => tx.overrideStatus === 'approved').length,
    averageRiskScore: transactions.reduce((sum, tx) => sum + tx.riskScore, 0) / transactions.length || 0
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="flex">
        <div className="flex-1 p-6 space-y-6">
          <MetricsCards metrics={metrics} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TransactionMonitor 
                transactions={transactions}
                onOverride={handleOverride}
                onViewDetails={handleViewDetails}
              />
            </div>
            
            <div className="space-y-6">
              <AlertPanel flaggedTransactions={flaggedTransactions} />
              <SystemStatus />
            </div>
          </div>
        </div>
      </div>

      <TransactionDetails 
        transaction={selectedTransaction}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onOverride={handleOverride}
      />

      <Toaster />
    </div>
  );
}