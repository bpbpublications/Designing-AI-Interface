import React, { useEffect, useRef, useState } from 'react';
import { SceneParameters } from './ParameterPanel';

interface SceneCanvasProps {
  parameters: SceneParameters;
  progress: number;
  isGenerating: boolean;
}

interface SceneObject {
  id: string;
  type: 'cube' | 'sphere' | 'pyramid' | 'cylinder';
  x: number;
  y: number;
  z: number;
  scale: number;
  rotation: { x: number; y: number; z: number };
  color: string;
  opacity: number;
}

export function SceneCanvas({ parameters, progress, isGenerating }: SceneCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [objects, setObjects] = useState<SceneObject[]>([]);
  const animationRef = useRef<number>();

  // Generate objects based on parameters and progress
  useEffect(() => {
    const objectsToShow = Math.floor((parameters.objectCount * progress) / 100);
    const newObjects: SceneObject[] = [];
    
    for (let i = 0; i < objectsToShow; i++) {
      const types: SceneObject['type'][] = ['cube', 'sphere', 'pyramid', 'cylinder'];
      newObjects.push({
        id: `obj-${i}`,
        type: types[i % types.length],
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 400,
        z: Math.random() * 200,
        scale: (parameters.objectScale / 100) * (0.5 + Math.random() * 0.5),
        rotation: {
          x: Math.random() * 360,
          y: Math.random() * 360,
          z: Math.random() * 360
        },
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        opacity: 1 - (parameters.transparency / 100)
      });
    }
    
    setObjects(newObjects);
  }, [parameters, progress]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background based on sky type
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      switch (parameters.skyType) {
        case 'clear':
          gradient.addColorStop(0, '#87CEEB');
          gradient.addColorStop(1, '#E0F6FF');
          break;
        case 'cloudy':
          gradient.addColorStop(0, '#708090');
          gradient.addColorStop(1, '#D3D3D3');
          break;
        case 'sunset':
          gradient.addColorStop(0, '#FF6347');
          gradient.addColorStop(0.5, '#FFD700');
          gradient.addColorStop(1, '#FF69B4');
          break;
        case 'night':
          gradient.addColorStop(0, '#191970');
          gradient.addColorStop(1, '#000080');
          break;
        case 'storm':
          gradient.addColorStop(0, '#2F4F4F');
          gradient.addColorStop(1, '#696969');
          break;
        default:
          gradient.addColorStop(0, '#87CEEB');
          gradient.addColorStop(1, '#E0F6FF');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw fog overlay
      if (parameters.fogDensity > 0) {
        ctx.fillStyle = `rgba(255, 255, 255, ${parameters.fogDensity / 200})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Draw ground
      const groundGradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
      switch (parameters.groundType) {
        case 'grass':
          groundGradient.addColorStop(0, '#9ACD32');
          groundGradient.addColorStop(1, '#228B22');
          break;
        case 'sand':
          groundGradient.addColorStop(0, '#F4A460');
          groundGradient.addColorStop(1, '#DEB887');
          break;
        case 'stone':
          groundGradient.addColorStop(0, '#708090');
          groundGradient.addColorStop(1, '#2F4F4F');
          break;
        case 'water':
          groundGradient.addColorStop(0, '#4682B4');
          groundGradient.addColorStop(1, '#191970');
          break;
        case 'concrete':
          groundGradient.addColorStop(0, '#C0C0C0');
          groundGradient.addColorStop(1, '#808080');
          break;
        default:
          groundGradient.addColorStop(0, '#9ACD32');
          groundGradient.addColorStop(1, '#228B22');
      }
      
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);
      
      // Sort objects by depth (z-index)
      const sortedObjects = [...objects].sort((a, b) => b.z - a.z);
      
      // Draw objects
      sortedObjects.forEach((obj) => {
        ctx.save();
        
        // Apply perspective transformation
        const perspective = 1000;
        const scale = perspective / (perspective + obj.z);
        const x = (obj.x * scale) + canvas.width / 2;
        const y = (obj.y * scale) + canvas.height / 2;
        
        ctx.translate(x, y);
        ctx.scale(scale * obj.scale, scale * obj.scale);
        
        // Apply lighting based on parameters
        const lightness = 0.5 + (parameters.lightIntensity / 200);
        const ambient = parameters.ambientStrength / 100;
        
        ctx.globalAlpha = obj.opacity * (0.3 + 0.7 * lightness + ambient);
        ctx.fillStyle = obj.color;
        
        // Draw different shapes based on object type
        switch (obj.type) {
          case 'cube':
            ctx.fillRect(-25, -25, 50, 50);
            // Add 3D effect
            ctx.fillStyle = `rgba(0,0,0,0.2)`;
            ctx.fillRect(-20, -20, 45, 45);
            break;
          case 'sphere':
            ctx.beginPath();
            ctx.arc(0, 0, 25, 0, Math.PI * 2);
            ctx.fill();
            // Add 3D effect
            const sphereGradient = ctx.createRadialGradient(-10, -10, 0, 0, 0, 25);
            sphereGradient.addColorStop(0, 'rgba(255,255,255,0.3)');
            sphereGradient.addColorStop(1, 'rgba(0,0,0,0.1)');
            ctx.fillStyle = sphereGradient;
            ctx.fill();
            break;
          case 'pyramid':
            ctx.beginPath();
            ctx.moveTo(0, -25);
            ctx.lineTo(-25, 25);
            ctx.lineTo(25, 25);
            ctx.closePath();
            ctx.fill();
            break;
          case 'cylinder':
            ctx.fillRect(-15, -25, 30, 50);
            // Top ellipse
            ctx.beginPath();
            ctx.ellipse(0, -25, 15, 5, 0, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        
        ctx.restore();
      });
      
      // Continue animation if generating
      if (isGenerating) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [objects, parameters, isGenerating]);

  return (
    <div className="relative bg-card border rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="w-full h-full"
        style={{ maxHeight: '600px' }}
      />
      {progress < 100 && isGenerating && (
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
          Generating... {Math.round(progress)}%
        </div>
      )}
      {progress === 100 && (
        <div className="absolute top-4 left-4 bg-green-600/70 text-white px-3 py-1 rounded text-sm">
          Generation Complete
        </div>
      )}
    </div>
  );
}