import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export interface SceneParameters {
  // Lighting
  lightIntensity: number;
  lightAngle: number;
  ambientStrength: number;
  
  // Objects
  objectCount: number;
  objectScale: number;
  objectComplexity: number;
  
  // Materials
  roughness: number;
  metallic: number;
  transparency: number;
  
  // Environment
  fogDensity: number;
  skyType: string;
  groundType: string;
  
  // Camera
  cameraHeight: number;
  fieldOfView: number;
}

interface ParameterPanelProps {
  parameters: SceneParameters;
  onParameterChange: (key: keyof SceneParameters, value: number | string) => void;
  disabled?: boolean;
}

export function ParameterPanel({ parameters, onParameterChange, disabled = false }: ParameterPanelProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Scene Parameters</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="lighting" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="lighting">Lighting</TabsTrigger>
            <TabsTrigger value="objects">Objects</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="lighting" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Light Intensity</Label>
              <Slider
                value={[parameters.lightIntensity]}
                onValueChange={(value) => onParameterChange('lightIntensity', value[0])}
                max={100}
                step={1}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.lightIntensity}%</span>
            </div>
            
            <div className="space-y-2">
              <Label>Light Angle</Label>
              <Slider
                value={[parameters.lightAngle]}
                onValueChange={(value) => onParameterChange('lightAngle', value[0])}
                max={360}
                step={5}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.lightAngle}°</span>
            </div>
            
            <div className="space-y-2">
              <Label>Ambient Strength</Label>
              <Slider
                value={[parameters.ambientStrength]}
                onValueChange={(value) => onParameterChange('ambientStrength', value[0])}
                max={100}
                step={1}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.ambientStrength}%</span>
            </div>
          </TabsContent>
          
          <TabsContent value="objects" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Object Count</Label>
              <Slider
                value={[parameters.objectCount]}
                onValueChange={(value) => onParameterChange('objectCount', value[0])}
                min={1}
                max={50}
                step={1}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.objectCount} objects</span>
            </div>
            
            <div className="space-y-2">
              <Label>Object Scale</Label>
              <Slider
                value={[parameters.objectScale]}
                onValueChange={(value) => onParameterChange('objectScale', value[0])}
                min={10}
                max={200}
                step={5}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.objectScale}%</span>
            </div>
            
            <div className="space-y-2">
              <Label>Complexity</Label>
              <Slider
                value={[parameters.objectComplexity]}
                onValueChange={(value) => onParameterChange('objectComplexity', value[0])}
                min={1}
                max={10}
                step={1}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">Level {parameters.objectComplexity}</span>
            </div>
          </TabsContent>
          
          <TabsContent value="materials" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Roughness</Label>
              <Slider
                value={[parameters.roughness]}
                onValueChange={(value) => onParameterChange('roughness', value[0])}
                max={100}
                step={1}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.roughness}%</span>
            </div>
            
            <div className="space-y-2">
              <Label>Metallic</Label>
              <Slider
                value={[parameters.metallic]}
                onValueChange={(value) => onParameterChange('metallic', value[0])}
                max={100}
                step={1}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.metallic}%</span>
            </div>
            
            <div className="space-y-2">
              <Label>Transparency</Label>
              <Slider
                value={[parameters.transparency]}
                onValueChange={(value) => onParameterChange('transparency', value[0])}
                max={100}
                step={1}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.transparency}%</span>
            </div>
          </TabsContent>
          
          <TabsContent value="environment" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Sky Type</Label>
              <Select 
                value={parameters.skyType} 
                onValueChange={(value) => onParameterChange('skyType', value)}
                disabled={disabled}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clear">Clear Sky</SelectItem>
                  <SelectItem value="cloudy">Cloudy</SelectItem>
                  <SelectItem value="sunset">Sunset</SelectItem>
                  <SelectItem value="night">Night</SelectItem>
                  <SelectItem value="storm">Storm</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Ground Type</Label>
              <Select 
                value={parameters.groundType} 
                onValueChange={(value) => onParameterChange('groundType', value)}
                disabled={disabled}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grass">Grass</SelectItem>
                  <SelectItem value="sand">Sand</SelectItem>
                  <SelectItem value="stone">Stone</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                  <SelectItem value="concrete">Concrete</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Fog Density</Label>
              <Slider
                value={[parameters.fogDensity]}
                onValueChange={(value) => onParameterChange('fogDensity', value[0])}
                max={100}
                step={1}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.fogDensity}%</span>
            </div>
            
            <div className="space-y-2">
              <Label>Camera Height</Label>
              <Slider
                value={[parameters.cameraHeight]}
                onValueChange={(value) => onParameterChange('cameraHeight', value[0])}
                min={1}
                max={20}
                step={0.5}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.cameraHeight}m</span>
            </div>
            
            <div className="space-y-2">
              <Label>Field of View</Label>
              <Slider
                value={[parameters.fieldOfView]}
                onValueChange={(value) => onParameterChange('fieldOfView', value[0])}
                min={30}
                max={120}
                step={5}
                disabled={disabled}
              />
              <span className="text-sm text-muted-foreground">{parameters.fieldOfView}°</span>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}