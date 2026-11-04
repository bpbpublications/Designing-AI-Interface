import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, RotateCcw, Trash2 } from 'lucide-react';
import { SceneParameters } from './ParameterPanel';

interface GenerationHistoryItem {
  id: string;
  timestamp: Date;
  parameters: SceneParameters;
  progress: number;
  status: 'completed' | 'paused' | 'stopped';
  duration: number; // in seconds
}

interface GenerationHistoryProps {
  history: GenerationHistoryItem[];
  onRestoreGeneration: (item: GenerationHistoryItem) => void;
  onClearHistory: () => void;
}

export function GenerationHistory({ history, onRestoreGeneration, onClearHistory }: GenerationHistoryProps) {
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'stopped':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle>Generation History</CardTitle>
        {history.length > 0 && (
          <Button
            onClick={onClearHistory}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Clear
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {history.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            No generation history yet. Start generating to see your sessions here.
          </p>
        ) : (
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {history.slice(-10).reverse().map((item) => (
              <div key={item.id} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                      {item.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex justify-between">
                    <span>Progress:</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{formatDuration(item.duration)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Objects:</span>
                    <span>{item.parameters.objectCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sky:</span>
                    <span className="capitalize">{item.parameters.skyType}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => onRestoreGeneration(item)}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 flex-1"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Restore
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}