import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Settings, Power, Shield, AlertTriangle, Zap, StopCircle } from 'lucide-react';

interface AIControlPanelProps {
  aiEnabled: boolean;
  autoBlock: boolean;
  suspiciousThreshold: number;
  blockedThreshold: number;
  transactionFrequency: number;
  realTimeMonitoring: boolean;
  alertSensitivity: number;
  onAIToggle: (enabled: boolean) => void;
  onAutoBlockToggle: (enabled: boolean) => void;
  onSuspiciousThresholdChange: (value: number) => void;
  onBlockedThresholdChange: (value: number) => void;
  onTransactionFrequencyChange: (value: number) => void;
  onRealTimeToggle: (enabled: boolean) => void;
  onAlertSensitivityChange: (value: number) => void;
  onEmergencyStop: () => void;
}

export function AIControlPanel({
  aiEnabled,
  autoBlock,
  suspiciousThreshold,
  blockedThreshold,
  transactionFrequency,
  realTimeMonitoring,
  alertSensitivity,
  onAIToggle,
  onAutoBlockToggle,
  onSuspiciousThresholdChange,
  onBlockedThresholdChange,
  onTransactionFrequencyChange,
  onRealTimeToggle,
  onAlertSensitivityChange,
  onEmergencyStop
}: AIControlPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-blue-600" />
            <span>AI Control Panel</span>
          </div>
          <Badge 
            variant={aiEnabled ? "default" : "secondary"}
            className={aiEnabled ? "bg-green-100 text-green-800 border-green-200" : ""}
          >
            <div className={`w-2 h-2 rounded-full mr-2 ${aiEnabled ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            {aiEnabled ? 'Active' : 'Inactive'}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Emergency Stop */}
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <Button 
            onClick={onEmergencyStop}
            variant="destructive"
            className="w-full"
            size="lg"
          >
            <StopCircle className="h-5 w-5 mr-2" />
            Emergency Stop All AI Operations
          </Button>
          <p className="text-xs text-red-600 mt-2 text-center">
            Immediately halt all AI processing and require manual review
          </p>
        </div>

        <Separator />

        {/* Core AI Controls */}
        <div className="space-y-4">
          <h4 className="flex items-center space-x-2">
            <Power className="h-4 w-4" />
            <span>Core System Controls</span>
          </h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">AI Detection System</p>
                <p className="text-sm text-muted-foreground">Enable/disable AI fraud detection</p>
              </div>
              <Switch 
                checked={aiEnabled}
                onCheckedChange={onAIToggle}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto-Block Transactions</p>
                <p className="text-sm text-muted-foreground">Automatically block high-risk transactions</p>
              </div>
              <Switch 
                checked={autoBlock}
                onCheckedChange={onAutoBlockToggle}
                disabled={!aiEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Real-time Monitoring</p>
                <p className="text-sm text-muted-foreground">Live transaction stream updates</p>
              </div>
              <Switch 
                checked={realTimeMonitoring}
                onCheckedChange={onRealTimeToggle}
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Risk Thresholds */}
        <div className="space-y-4">
          <h4 className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Risk Thresholds</span>
          </h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">Suspicious Flag Threshold</label>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  {suspiciousThreshold}
                </Badge>
              </div>
              <Slider
                value={[suspiciousThreshold]}
                onValueChange={(value) => onSuspiciousThresholdChange(value[0])}
                max={100}
                min={0}
                step={5}
                disabled={!aiEnabled}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Transactions above this risk score will be flagged for review
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">Auto-Block Threshold</label>
                <Badge variant="destructive">
                  {blockedThreshold}
                </Badge>
              </div>
              <Slider
                value={[blockedThreshold]}
                onValueChange={(value) => onBlockedThresholdChange(value[0])}
                max={100}
                min={suspiciousThreshold}
                step={5}
                disabled={!aiEnabled || !autoBlock}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Transactions above this risk score will be automatically blocked
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* System Behavior */}
        <div className="space-y-4">
          <h4 className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4" />
            <span>System Behavior</span>
          </h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">Alert Sensitivity</label>
                <Badge variant="outline">
                  {alertSensitivity === 100 ? 'Maximum' : 
                   alertSensitivity >= 75 ? 'High' :
                   alertSensitivity >= 50 ? 'Medium' :
                   alertSensitivity >= 25 ? 'Low' : 'Minimal'}
                </Badge>
              </div>
              <Slider
                value={[alertSensitivity]}
                onValueChange={(value) => onAlertSensitivityChange(value[0])}
                max={100}
                min={10}
                step={10}
                disabled={!aiEnabled}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Controls how aggressively the system generates alerts
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">Transaction Simulation Speed</label>
                <Badge variant="outline">
                  {transactionFrequency === 1 ? 'Very Slow' :
                   transactionFrequency === 2 ? 'Slow' :
                   transactionFrequency === 3 ? 'Normal' :
                   transactionFrequency === 4 ? 'Fast' : 'Very Fast'}
                </Badge>
              </div>
              <Slider
                value={[transactionFrequency]}
                onValueChange={(value) => onTransactionFrequencyChange(value[0])}
                max={5}
                min={1}
                step={1}
                disabled={!realTimeMonitoring}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Controls the frequency of simulated incoming transactions
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Quick Actions */}
        <div className="space-y-3">
          <h4 className="flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>Quick Actions</span>
          </h4>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                onSuspiciousThresholdChange(60);
                onBlockedThresholdChange(80);
              }}
              disabled={!aiEnabled}
            >
              Balanced Mode
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                onSuspiciousThresholdChange(40);
                onBlockedThresholdChange(70);
              }}
              disabled={!aiEnabled}
            >
              Strict Mode
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                onSuspiciousThresholdChange(75);
                onBlockedThresholdChange(90);
              }}
              disabled={!aiEnabled}
            >
              Permissive Mode
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                onSuspiciousThresholdChange(50);
                onBlockedThresholdChange(85);
                onAlertSensitivityChange(75);
              }}
              disabled={!aiEnabled}
            >
              Reset Defaults
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}