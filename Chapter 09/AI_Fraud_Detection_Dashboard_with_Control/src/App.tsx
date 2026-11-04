import { useState, useEffect } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { TransactionMonitor } from './components/TransactionMonitor';
import { AlertPanel } from './components/AlertPanel';
import { MetricsCards } from './components/MetricsCards';
import { SystemStatus } from './components/SystemStatus';
import { TransactionDetails } from './components/TransactionDetails';
import { AIControlPanel } from './components/AIControlPanel';
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
const generateMockTransaction = (suspiciousThreshold: number, blockedThreshold: number, autoBlock: boolean, aiEnabled: boolean): Transaction => {
  const types: Transaction['type'][] = ['transfer', 'withdrawal', 'deposit', 'payment'];
  const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA'];
  const merchants = ['Amazon', 'Walmart', 'Target', 'Best Buy', 'Home Depot', 'Costco'];
  
  const amount = Math.random() * 10000 + 100;
  const riskScore = Math.random() * 100;
  const type = types[Math.floor(Math.random() * types.length)];
  
  let aiFlag: Transaction['aiFlag'] = 'safe';
  
  if (aiEnabled) {
    if (autoBlock && riskScore >= blockedThreshold) {
      aiFlag = 'blocked';
    } else if (riskScore >= suspiciousThreshold) {
      aiFlag = 'suspicious';
    }
  }

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
  
  // AI Control Panel States
  const [aiEnabled, setAiEnabled] = useState(true);
  const [autoBlock, setAutoBlock] = useState(true);
  const [suspiciousThreshold, setSuspiciousThreshold] = useState(60);
  const [blockedThreshold, setBlockedThreshold] = useState(80);
  const [transactionFrequency, setTransactionFrequency] = useState(3);
  const [realTimeMonitoring, setRealTimeMonitoring] = useState(true);
  const [alertSensitivity, setAlertSensitivity] = useState(75);

  // Initialize with some mock transactions
  useEffect(() => {
    const initialTransactions = Array.from({ length: 15 }, () => 
      generateMockTransaction(suspiciousThreshold, blockedThreshold, autoBlock, aiEnabled)
    );
    setTransactions(initialTransactions);
  }, []);

  // Simulate real-time transaction stream
  useEffect(() => {
    if (!realTimeMonitoring) return;
    
    const baseInterval = 6000; // Base 6 seconds
    const intervalTime = baseInterval / transactionFrequency;
    const chanceThreshold = 0.3 + (transactionFrequency * 0.1); // Higher frequency = higher chance
    
    const interval = setInterval(() => {
      if (Math.random() < chanceThreshold) {
        const newTransaction = generateMockTransaction(suspiciousThreshold, blockedThreshold, autoBlock, aiEnabled);
        setTransactions(prev => [newTransaction, ...prev.slice(0, 49)]); // Keep last 50 transactions
        
        if (aiEnabled && alertSensitivity >= 25) {
          if (newTransaction.aiFlag === 'blocked') {
            toast.error(`Transaction ${newTransaction.id} blocked by AI - High risk detected`);
          } else if (newTransaction.aiFlag === 'suspicious' && alertSensitivity >= 50) {
            toast.warning(`Transaction ${newTransaction.id} flagged for review`);
          }
        }
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [realTimeMonitoring, transactionFrequency, suspiciousThreshold, blockedThreshold, autoBlock, aiEnabled, alertSensitivity]);

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

  const handleEmergencyStop = () => {
    setAiEnabled(false);
    setAutoBlock(false);
    setRealTimeMonitoring(false);
    
    // Mark all blocked transactions as requiring manual review
    setTransactions(prev => prev.map(tx => 
      tx.aiFlag === 'blocked' 
        ? { ...tx, aiFlag: 'suspicious', overrideStatus: 'pending' as const }
        : tx
    ));
    
    toast.error('EMERGENCY STOP ACTIVATED - All AI operations halted. Manual review required for all flagged transactions.');
  };

  const handleAIToggle = (enabled: boolean) => {
    setAiEnabled(enabled);
    if (!enabled) {
      setAutoBlock(false);
      toast.warning('AI Detection System disabled - All transactions will require manual review');
    } else {
      toast.success('AI Detection System enabled');
    }
  };

  const handleAutoBlockToggle = (enabled: boolean) => {
    setAutoBlock(enabled);
    if (enabled && aiEnabled) {
      toast.success('Auto-blocking enabled for high-risk transactions');
    } else {
      toast.warning('Auto-blocking disabled - High-risk transactions will be flagged only');
    }
  };

  const handleThresholdChange = (type: 'suspicious' | 'blocked', value: number) => {
    if (type === 'suspicious') {
      setSuspiciousThreshold(value);
      if (value >= blockedThreshold) {
        setBlockedThreshold(Math.min(value + 10, 100));
      }
    } else {
      setBlockedThreshold(value);
      if (value <= suspiciousThreshold) {
        setSuspiciousThreshold(Math.max(value - 10, 0));
      }
    }
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
      <DashboardHeader aiEnabled={aiEnabled} />
      
      <div className="flex">
        <div className="flex-1 p-6 space-y-6">
          <MetricsCards metrics={metrics} />
          
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="xl:col-span-2">
              <TransactionMonitor 
                transactions={transactions}
                onOverride={handleOverride}
                onViewDetails={handleViewDetails}
              />
            </div>
            
            <div className="space-y-6">
              <AlertPanel flaggedTransactions={flaggedTransactions} />
              <SystemStatus 
                aiEnabled={aiEnabled}
                autoBlock={autoBlock}
                realTimeMonitoring={realTimeMonitoring}
              />
            </div>
            
            <div>
              <AIControlPanel
                aiEnabled={aiEnabled}
                autoBlock={autoBlock}
                suspiciousThreshold={suspiciousThreshold}
                blockedThreshold={blockedThreshold}
                transactionFrequency={transactionFrequency}
                realTimeMonitoring={realTimeMonitoring}
                alertSensitivity={alertSensitivity}
                onAIToggle={handleAIToggle}
                onAutoBlockToggle={handleAutoBlockToggle}
                onSuspiciousThresholdChange={(value) => handleThresholdChange('suspicious', value)}
                onBlockedThresholdChange={(value) => handleThresholdChange('blocked', value)}
                onTransactionFrequencyChange={setTransactionFrequency}
                onRealTimeToggle={setRealTimeMonitoring}
                onAlertSensitivityChange={setAlertSensitivity}
                onEmergencyStop={handleEmergencyStop}
              />
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