import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OverlayMarker {
  id: string;
  x: number;
  y: number;
  type: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  confidence: number;
}

interface ImageOverlayViewerProps {
  imageUrl: string;
  overlays: OverlayMarker[];
}

export function ImageOverlayViewer({ imageUrl, overlays }: ImageOverlayViewerProps) {
  const [selectedOverlay, setSelectedOverlay] = useState<string | null>(null);
  const [showOverlays, setShowOverlays] = useState(true);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500 border-red-400';
      case 'medium': return 'bg-yellow-500 border-yellow-400';
      case 'low': return 'bg-blue-500 border-blue-400';
      default: return 'bg-gray-500 border-gray-400';
    }
  };

  const selectedOverlayData = overlays.find(o => o.id === selectedOverlay);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Medical Image Analysis</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowOverlays(!showOverlays)}
          className="flex items-center gap-2"
        >
          {showOverlays ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showOverlays ? 'Hide' : 'Show'} Overlays
        </Button>
      </div>

      <div className="relative bg-black rounded-lg overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt="Chest X-ray"
          className="w-full h-96 object-cover"
        />
        
        {showOverlays && overlays.map((overlay) => (
          <div
            key={overlay.id}
            className={`absolute w-4 h-4 rounded-full border-2 cursor-pointer transform -translate-x-2 -translate-y-2 transition-all duration-200 ${
              getSeverityColor(overlay.severity)
            } ${selectedOverlay === overlay.id ? 'scale-150 shadow-lg' : 'hover:scale-125'}`}
            style={{
              left: `${overlay.x}%`,
              top: `${overlay.y}%`,
            }}
            onClick={() => setSelectedOverlay(selectedOverlay === overlay.id ? null : overlay.id)}
            title={overlay.description}
          >
            <div className="w-full h-full rounded-full animate-pulse opacity-50"></div>
          </div>
        ))}
      </div>

      {selectedOverlayData && (
        <Card className="p-4 border-l-4 border-l-blue-500 bg-blue-50/50">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-blue-900">{selectedOverlayData.type}</h4>
            </div>
            <Badge variant={selectedOverlayData.severity === 'high' ? 'destructive' : 'secondary'}>
              {selectedOverlayData.confidence}% confidence
            </Badge>
          </div>
          <p className="text-sm text-gray-700 mb-3">{selectedOverlayData.description}</p>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              Severity: {selectedOverlayData.severity}
            </Badge>
            <Badge variant="outline" className="text-xs">
              Position: {selectedOverlayData.x}%, {selectedOverlayData.y}%
            </Badge>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {overlays.map((overlay) => (
          <Card
            key={overlay.id}
            className={`p-3 cursor-pointer transition-all duration-200 border ${
              selectedOverlay === overlay.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedOverlay(selectedOverlay === overlay.id ? null : overlay.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <Badge className={getSeverityColor(overlay.severity).replace('border-', 'border-l-').replace('bg-', 'bg-') + ' text-white text-xs'}>
                {overlay.type}
              </Badge>
              <span className="text-xs text-gray-500">{overlay.confidence}%</span>
            </div>
            <p className="text-sm text-gray-700 line-clamp-2">{overlay.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}