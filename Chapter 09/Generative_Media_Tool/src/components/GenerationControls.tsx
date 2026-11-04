import React from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Play, Pause, Square, RotateCcw } from 'lucide-react';

interface GenerationControlsProps {
  isGenerating: boolean;
  isPaused: boolean;
  progress: number;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onRestart: () => void;
}

export function GenerationControls({
  isGenerating,
  isPaused,
  progress,
  onPlay,
  onPause,
  onStop,
  onRestart
}: GenerationControlsProps) {
  return (
    <div className="bg-card border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3>Generation Controls</h3>
        <div className="flex gap-2">
          {!isGenerating || isPaused ? (
            <Button onClick={onPlay} size="sm" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              {isPaused ? 'Resume' : 'Generate'}
            </Button>
          ) : (
            <Button onClick={onPause} size="sm" variant="secondary" className="flex items-center gap-2">
              <Pause className="w-4 h-4" />
              Pause
            </Button>
          )}
          
          <Button onClick={onStop} size="sm" variant="outline" className="flex items-center gap-2">
            <Square className="w-4 h-4" />
            Stop
          </Button>
          
          <Button onClick={onRestart} size="sm" variant="outline" className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Restart
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="text-sm">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>
      
      {isPaused && (
        <div className="bg-accent/50 border border-accent rounded p-3">
          <p className="text-sm">
            Generation paused. You can adjust parameters and resume when ready.
          </p>
        </div>
      )}
    </div>
  );
}