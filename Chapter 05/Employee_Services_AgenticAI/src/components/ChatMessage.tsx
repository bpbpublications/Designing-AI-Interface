import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { User, Bot, Clock, CheckCircle, AlertTriangle, FileText, Shield, Database } from "lucide-react";

interface ChatMessageProps {
  message: {
    id: string;
    type: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    agentCalls?: {
      agent: string;
      status: 'pending' | 'running' | 'complete';
      result?: string;
    }[];
    context?: {
      title: string;
      content: string;
      type: 'policy' | 'procedure' | 'data';
    }[];
    nextSteps?: string[];
    tradeOffs?: {
      option: string;
      pros: string[];
      cons: string[];
    }[];
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.type === 'user';

  const getAgentIcon = (agent: string) => {
    switch (agent.toLowerCase()) {
      case 'data extractor':
        return <Database className="w-4 h-4" />;
      case 'policy agent':
        return <Shield className="w-4 h-4" />;
      case 'document validator':
        return <FileText className="w-4 h-4" />;
      default:
        return <Bot className="w-4 h-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-3 h-3 text-green-500" />;
      case 'running':
        return <Clock className="w-3 h-3 text-blue-500 animate-pulse" />;
      default:
        return <Clock className="w-3 h-3 text-muted-foreground" />;
    }
  };

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar className="w-8 h-8">
        <AvatarFallback className={isUser ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}>
          {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </AvatarFallback>
      </Avatar>
      
      <div className={`flex-1 max-w-2xl ${isUser ? 'flex flex-col items-end' : ''}`}>
        <Card className={`${isUser ? 'bg-blue-500 text-white' : 'bg-card'}`}>
          <CardContent className="p-4">
            <p className="whitespace-pre-wrap">{message.content}</p>
            
            {/* Agent Calls */}
            {message.agentCalls && message.agentCalls.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium">Calling specialized agents:</p>
                <div className="grid gap-2">
                  {message.agentCalls.map((call, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <div className="flex items-center gap-2">
                        {getAgentIcon(call.agent)}
                        <span className="text-sm">{call.agent}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(call.status)}
                        <Badge variant="outline" className="text-xs">
                          {call.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Context Information */}
            {message.context && message.context.length > 0 && (
              <div className="mt-4 space-y-3">
                <p className="text-sm font-medium">Relevant Context:</p>
                {message.context.map((ctx, index) => (
                  <div key={index} className="p-3 bg-muted/50 rounded border-l-4 border-blue-500">
                    <div className="flex items-center gap-2 mb-1">
                      {ctx.type === 'policy' && <Shield className="w-4 h-4 text-orange-500" />}
                      {ctx.type === 'procedure' && <FileText className="w-4 h-4 text-blue-500" />}
                      {ctx.type === 'data' && <Database className="w-4 h-4 text-green-500" />}
                      <p className="font-medium text-sm">{ctx.title}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{ctx.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Trade-offs */}
            {message.tradeOffs && message.tradeOffs.length > 0 && (
              <div className="mt-4 space-y-3">
                <p className="text-sm font-medium">Options & Trade-offs:</p>
                <div className="grid gap-3">
                  {message.tradeOffs.map((tradeOff, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded">
                      <p className="font-medium text-sm mb-2">{tradeOff.option}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">Pros:</p>
                          <ul className="text-xs space-y-1">
                            {tradeOff.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">Cons:</p>
                          <ul className="text-xs space-y-1">
                            {tradeOff.cons.map((con, conIndex) => (
                              <li key={conIndex} className="flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3 text-orange-500" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Steps */}
            {message.nextSteps && message.nextSteps.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Suggested Next Steps:</p>
                <div className="space-y-2">
                  {message.nextSteps.map((step, index) => (
                    <Button key={index} variant="outline" size="sm" className="w-full justify-start text-left h-auto p-3">
                      <span className="text-sm">{index + 1}. {step}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <p className="text-xs text-muted-foreground mt-1">
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}