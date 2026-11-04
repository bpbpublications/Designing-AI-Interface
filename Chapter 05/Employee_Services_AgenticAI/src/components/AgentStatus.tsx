import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Loader2, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  status: 'idle' | 'running' | 'complete' | 'error';
  description: string;
  progress?: number;
}

interface AgentStatusProps {
  activeAgents: Agent[];
}

export function AgentStatus({ activeAgents }: AgentStatusProps) {
  const getStatusIcon = (status: Agent['status']) => {
    switch (status) {
      case 'running':
        return <Loader2 className="w-4 h-4 animate-spin" />;
      case 'complete':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'running':
        return 'bg-blue-500';
      case 'complete':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          Agent Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activeAgents.map((agent) => (
          <div key={agent.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              {getStatusIcon(agent.status)}
              <div>
                <p className="font-medium">{agent.name}</p>
                <p className="text-sm text-muted-foreground">{agent.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {agent.progress !== undefined && (
                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${getStatusColor(agent.status)}`}
                    style={{ width: `${agent.progress}%` }}
                  ></div>
                </div>
              )}
              <Badge variant={agent.status === 'running' ? 'default' : agent.status === 'complete' ? 'secondary' : 'destructive'}>
                {agent.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}