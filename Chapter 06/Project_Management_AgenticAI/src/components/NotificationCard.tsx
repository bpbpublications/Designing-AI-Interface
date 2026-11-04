import { Bell, Clock, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface NotificationCardProps {
  title: string;
  message: string;
  suggestion?: string;
  highlightedText?: string;
  onGenerateSummary?: () => void;
  onSnooze?: () => void;
  onDismiss?: () => void;
}

export function NotificationCard({
  title,
  message,
  suggestion,
  highlightedText,
  onGenerateSummary,
  onSnooze,
  onDismiss,
}: NotificationCardProps) {
  const renderSuggestion = () => {
    if (!suggestion || !highlightedText) return suggestion;
    
    const parts = suggestion.split(highlightedText);
    return (
      <>
        {parts[0]}
        <span className="text-purple-600 font-medium">{highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <Card className="w-full max-w-md bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className="p-2 bg-orange-50 rounded-lg">
          <Bell className="w-5 h-5 text-orange-600" />
        </div>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <p className="text-gray-800 leading-relaxed">{message}</p>
        
        {suggestion && (
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              {renderSuggestion()}
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4 pt-0 flex flex-wrap gap-2">
        <Button
          onClick={onGenerateSummary}
          className="bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Generate Summary
        </Button>
        
        <Button
          onClick={onSnooze}
          variant="outline"
          className="border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
        >
          <Clock className="w-4 h-4" />
          Snooze 2h
        </Button>
        
        <Button
          onClick={onDismiss}
          variant="outline"
          className="border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
        >
          <X className="w-4 h-4" />
          Dismiss
        </Button>
      </div>
    </Card>
  );
}