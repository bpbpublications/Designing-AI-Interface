import { useState } from 'react';
import { InvoiceViewer } from './components/InvoiceViewer';
import { ExtractedFields } from './components/ExtractedFields';
import { AgentChatHuddle } from './components/AgentChatHuddle';
import { mockInvoice, mockChatMessages, mockAgents } from './data/mockData';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { FileText, Brain, MessageSquare, Settings } from 'lucide-react';

export default function App() {
  const [selectedInvoice] = useState(mockInvoice);

  const pendingReviewCount = selectedInvoice.extractedFields.filter(f => f.needsReview).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold">Invoice Processing AI</h1>
            </div>
            <Badge variant="outline" className="text-xs">
              v2.1.0
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>Processing: {selectedInvoice.filename}</span>
            </div>
            {pendingReviewCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {pendingReviewCount} fields need review
              </Badge>
            )}
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-12 gap-4 p-6 h-[calc(100vh-80px)]">
        {/* Invoice Viewer - Left Column */}
        <div className="col-span-4">
          <InvoiceViewer invoice={selectedInvoice} />
        </div>

        {/* Extracted Fields - Center Column */}
        <div className="col-span-4">
          <ExtractedFields fields={selectedInvoice.extractedFields} />
        </div>

        {/* Agent Chat Huddle - Right Column */}
        <div className="col-span-4">
          <AgentChatHuddle messages={mockChatMessages} agents={mockAgents} />
        </div>
      </main>

      {/* Status Bar */}
      <footer className="border-t bg-muted/30 px-6 py-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Status: Processing invoice data</span>
            <span>•</span>
            <span>Confidence: 89.2% average</span>
            <span>•</span>
            <span>3 agents active</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Last activity: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}