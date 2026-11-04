import { useState } from "react";
import { ChatInterface } from "./components/ChatInterface";
import { AgentStatus } from "./components/AgentStatus";
import { ReasoningPanel } from "./components/ReasoningPanel";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { Brain, Users, Settings, MessageSquare } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  status: 'idle' | 'running' | 'complete' | 'error';
  description: string;
  progress?: number;
}

interface ReasoningStep {
  id: string;
  step: string;
  reasoning: string;
  status: 'pending' | 'active' | 'complete';
  context?: string[];
}

export default function App() {
  const [activeAgents, setActiveAgents] = useState<Agent[]>([]);
  const [reasoningSteps, setReasoningSteps] = useState<ReasoningStep[]>([]);
  const [currentThought, setCurrentThought] = useState<string>();

  const handleAgentUpdate = (agents: Agent[]) => {
    setActiveAgents(agents);
  };

  const handleReasoningUpdate = (steps: ReasoningStep[], thought?: string) => {
    setReasoningSteps(steps);
    setCurrentThought(thought);
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold">Employee Services AgenticAI</h1>
                <p className="text-sm text-muted-foreground">Knowledge Worker Mode • Marriage Certificate Upload Assistant</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Active
            </Badge>
            <Badge variant="outline">
              Knowledge Worker Mode
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <ChatInterface 
            onAgentUpdate={handleAgentUpdate}
            onReasoningUpdate={handleReasoningUpdate}
          />
        </div>

        {/* Right Sidebar */}
        <div className="w-96 border-l bg-muted/30 flex flex-col">
          {/* Agent Status */}
          <div className="p-4">
            <AgentStatus activeAgents={activeAgents} />
          </div>

          <Separator />

          {/* Reasoning Panel */}
          <div className="flex-1 p-4">
            <ReasoningPanel steps={reasoningSteps} currentThought={currentThought} />
          </div>

          <Separator />

          {/* Mode Info */}
          <div className="p-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <MessageSquare className="w-4 h-4" />
                  Knowledge Worker Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Rich, explanatory conversations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Context-aware responses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Proactive next steps</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Trade-off analysis</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}