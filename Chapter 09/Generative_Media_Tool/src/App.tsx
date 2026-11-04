import React, { useState, useEffect, useCallback } from 'react';
import { GenerationControls } from './components/GenerationControls';
import { ParameterPanel, SceneParameters } from './components/ParameterPanel';
import { SceneCanvas } from './components/SceneCanvas';
import { PresetManager } from './components/PresetManager';
import { GenerationHistory } from './components/GenerationHistory';

interface GenerationHistoryItem {
  id: string;
  timestamp: Date;
  parameters: SceneParameters;
  progress: number;
  status: 'completed' | 'paused' | 'stopped';
  duration: number;
}

const defaultParameters: SceneParameters = {
  lightIntensity: 80,
  lightAngle: 45,
  ambientStrength: 20,
  objectCount: 15,
  objectScale: 100,
  objectComplexity: 5,
  roughness: 30,
  metallic: 0,
  transparency: 0,
  fogDensity: 10,
  skyType: 'clear',
  groundType: 'grass',
  cameraHeight: 5,
  fieldOfView: 75
};

export default function App() {
  const [parameters, setParameters] = useState<SceneParameters>(defaultParameters);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [history, setHistory] = useState<GenerationHistoryItem[]>([]);

  // Generation logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isGenerating && !isPaused) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const increment = Math.random() * 2 + 0.5; // Random increment between 0.5-2.5
          const newProgress = Math.min(prev + increment, 100);
          
          // Auto-complete when reaching 100%
          if (newProgress >= 100) {
            setIsGenerating(false);
            addToHistory('completed', newProgress);
          }
          
          return newProgress;
        });
      }, 200);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGenerating, isPaused]);

  const addToHistory = (status: GenerationHistoryItem['status'], finalProgress: number) => {
    if (startTime) {
      const duration = Math.floor((Date.now() - startTime.getTime()) / 1000);
      const historyItem: GenerationHistoryItem = {
        id: Date.now().toString(),
        timestamp: new Date(),
        parameters: { ...parameters },
        progress: finalProgress,
        status,
        duration
      };
      setHistory(prev => [...prev, historyItem]);
    }
  };

  const handlePlay = () => {
    if (!isGenerating && progress === 0) {
      setStartTime(new Date());
    }
    setIsGenerating(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
    setIsGenerating(false);
  };

  const handleStop = () => {
    setIsGenerating(false);
    setIsPaused(false);
    addToHistory('stopped', progress);
    setProgress(0);
    setStartTime(null);
  };

  const handleRestart = () => {
    setIsGenerating(false);
    setIsPaused(false);
    setProgress(0);
    setStartTime(null);
  };

  const handleParameterChange = useCallback((key: keyof SceneParameters, value: number | string) => {
    setParameters(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleLoadPreset = (newParameters: SceneParameters) => {
    setParameters(newParameters);
  };

  const handleRestoreGeneration = (item: GenerationHistoryItem) => {
    setParameters(item.parameters);
    setProgress(item.progress);
    setIsGenerating(false);
    setIsPaused(item.status === 'paused');
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1>Generative 3D Media Creation</h1>
          <p className="text-muted-foreground">
            Create complex 3D scenes with AI. Pause, refine parameters, and resume generation without starting from scratch.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Parameters */}
          <div className="lg:col-span-1 space-y-6">
            <ParameterPanel
              parameters={parameters}
              onParameterChange={handleParameterChange}
              disabled={isGenerating && !isPaused}
            />
          </div>

          {/* Main Content - Canvas */}
          <div className="lg:col-span-2 space-y-6">
            <GenerationControls
              isGenerating={isGenerating}
              isPaused={isPaused}
              progress={progress}
              onPlay={handlePlay}
              onPause={handlePause}
              onStop={handleStop}
              onRestart={handleRestart}
            />
            
            <SceneCanvas
              parameters={parameters}
              progress={progress}
              isGenerating={isGenerating}
            />
          </div>

          {/* Right Sidebar - Presets & History */}
          <div className="lg:col-span-1 space-y-6">
            <PresetManager
              currentParameters={parameters}
              onLoadPreset={handleLoadPreset}
            />
            
            <GenerationHistory
              history={history}
              onRestoreGeneration={handleRestoreGeneration}
              onClearHistory={handleClearHistory}
            />
          </div>
        </div>

        {/* Tips */}
        <div className="bg-accent/50 border border-accent rounded-lg p-4">
          <h3 className="mb-2">Tips for Better Generation:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Use the pause feature to adjust parameters mid-generation</li>
            <li>• Save successful parameter combinations as presets</li>
            <li>• Higher object complexity increases generation time but improves quality</li>
            <li>• Experiment with different sky and ground combinations</li>
            <li>• The generation history helps you track and restore previous sessions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}