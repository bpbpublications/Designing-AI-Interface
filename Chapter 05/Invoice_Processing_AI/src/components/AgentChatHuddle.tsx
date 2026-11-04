import { useState } from 'react';
import { ChatMessage, Agent } from '../types/invoice';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { 
  Send, 
  Bot, 
  User, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Activity
} from 'lucide-react';

interface AgentChatHuddleProps {
  messages: ChatMessage[];
  agents: Agent[];
}

export function AgentChatHuddle({ messages, agents }: AgentChatHuddleProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getMessageIcon = (type: string) => {
    switch (type) {
      case 'agent':
        return <Bot className="h-4 w-4" />;
      case 'user':
        return <User className="h-4 w-4" />;
      case 'alert':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <div className="w-2 h-2 bg-green-500 rounded-full" />;
      case 'processing':
        return <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />;
      default:
        return <div className="w-2 h-2 bg-gray-400 rounded-full" />;
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Agent Huddle</CardTitle>
        
        {/* Agent Status */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Active Agents</h4>
          <div className="space-y-2">
            {agents.map((agent) => (
              <div key={agent.id} className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">
                    {agent.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{agent.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{agent.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(agent.status)}
                  <Badge variant="outline" className="text-xs">
                    {agent.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <Separator />
      
      {/* Chat Messages */}
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <div
                  className={`flex gap-3 ${
                    message.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        message.type === 'alert'
                          ? 'bg-yellow-100'
                          : message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      {getMessageIcon(message.type)}
                    </div>
                  </div>
                  
                  <div className={`flex-1 min-w-0 ${message.type === 'user' ? 'text-right' : ''}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">{message.sender}</span>
                      <span className="text-xs text-muted-foreground">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                    
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        message.type === 'alert'
                          ? 'bg-yellow-50 border border-yellow-200'
                          : message.type === 'user'
                          ? 'bg-primary text-primary-foreground ml-8'
                          : 'bg-muted'
                      }`}
                    >
                      {message.content}
                    </div>
                    
                    {/* Action Buttons for Alerts */}
                    {message.actions && message.actions.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {message.actions.map((action) => (
                          <Button
                            key={action.id}
                            size="sm"
                            variant={action.variant || 'outline'}
                            className="text-xs"
                          >
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {/* Message Input */}
        <div className="sticky bottom-0 p-4 border-t bg-background z-10">
          <div className="flex gap-2">
            <Input
              placeholder="Ask agents a question or provide feedback..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}