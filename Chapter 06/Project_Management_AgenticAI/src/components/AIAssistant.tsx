import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Bot, Send, Loader2, Sparkles } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: Date;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. I can help you generate summaries, analyze feedback, and manage your tasks. What would you like me to help you with?",
      isAI: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isAI: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(input),
        isAI: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const getAIResponse = (userInput: string): string => {
    const responses = [
      "I've analyzed your request and here's what I found. Based on recent feedback patterns, I recommend focusing on the user interface improvements mentioned in the latest reviews.",
      "I can help you generate a comprehensive summary. Would you like me to include feedback from the past week or extend it to the last month?",
      "I've processed the available data and created an actionable summary. The key areas for improvement are: design consistency, user experience flow, and performance optimization.",
      "Great question! I'll analyze the feedback data and provide you with insights. The most common themes I'm seeing are related to navigation and visual hierarchy.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <Card className="w-full max-w-2xl bg-white shadow-lg border border-gray-100 h-[500px] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className="p-2 bg-purple-50 rounded-lg">
          <Bot className="w-5 h-5 text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">AI Assistant</h3>
          <p className="text-sm text-gray-500">AgenticAI • Online</p>
        </div>
        <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
          Active
        </Badge>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isAI ? "" : "justify-end"}`}
          >
            {message.isAI && (
              <div className="p-2 bg-purple-50 rounded-lg flex-shrink-0">
                <Sparkles className="w-4 h-4 text-purple-600" />
              </div>
            )}
            <div
              className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                message.isAI
                  ? "bg-gray-50 text-gray-800"
                  : "bg-purple-600 text-white ml-auto"
              }`}
            >
              <p className="leading-relaxed">{message.content}</p>
              <p
                className={`text-xs mt-2 ${
                  message.isAI ? "text-gray-500" : "text-purple-100"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3">
            <div className="p-2 bg-purple-50 rounded-lg flex-shrink-0">
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>
            <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                <span className="text-gray-600">AI is thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about your project..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-gray-50 border-gray-200 focus:border-purple-300 focus:ring-purple-200"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}