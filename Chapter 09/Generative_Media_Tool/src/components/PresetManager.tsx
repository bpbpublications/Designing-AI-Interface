import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Save, Trash2, Download, Upload } from 'lucide-react';
import { SceneParameters } from './ParameterPanel';

interface Preset {
  id: string;
  name: string;
  parameters: SceneParameters;
  createdAt: Date;
}

interface PresetManagerProps {
  currentParameters: SceneParameters;
  onLoadPreset: (parameters: SceneParameters) => void;
}

export function PresetManager({ currentParameters, onLoadPreset }: PresetManagerProps) {
  const [presets, setPresets] = useState<Preset[]>([
    {
      id: '1',
      name: 'Default Scene',
      parameters: {
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
      },
      createdAt: new Date('2024-01-01')
    },
    {
      id: '2',
      name: 'Sunset City',
      parameters: {
        lightIntensity: 60,
        lightAngle: 30,
        ambientStrength: 40,
        objectCount: 25,
        objectScale: 120,
        objectComplexity: 7,
        roughness: 20,
        metallic: 60,
        transparency: 10,
        fogDensity: 30,
        skyType: 'sunset',
        groundType: 'concrete',
        cameraHeight: 8,
        fieldOfView: 90
      },
      createdAt: new Date('2024-01-02')
    },
    {
      id: '3',
      name: 'Underwater',
      parameters: {
        lightIntensity: 40,
        lightAngle: 90,
        ambientStrength: 60,
        objectCount: 20,
        objectScale: 80,
        objectComplexity: 6,
        roughness: 10,
        metallic: 20,
        transparency: 50,
        fogDensity: 70,
        skyType: 'clear',
        groundType: 'water',
        cameraHeight: 3,
        fieldOfView: 100
      },
      createdAt: new Date('2024-01-03')
    }
  ]);
  
  const [newPresetName, setNewPresetName] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<string>('');

  const savePreset = () => {
    if (!newPresetName.trim()) return;
    
    const newPreset: Preset = {
      id: Date.now().toString(),
      name: newPresetName,
      parameters: { ...currentParameters },
      createdAt: new Date()
    };
    
    setPresets([...presets, newPreset]);
    setNewPresetName('');
  };

  const deletePreset = (id: string) => {
    setPresets(presets.filter(p => p.id !== id));
    if (selectedPreset === id) {
      setSelectedPreset('');
    }
  };

  const loadPreset = (id: string) => {
    const preset = presets.find(p => p.id === id);
    if (preset) {
      onLoadPreset(preset.parameters);
      setSelectedPreset(id);
    }
  };

  const exportPresets = () => {
    const dataStr = JSON.stringify(presets, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'scene-presets.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importPresets = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedPresets = JSON.parse(e.target?.result as string);
        setPresets([...presets, ...importedPresets]);
      } catch (error) {
        console.error('Invalid preset file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preset Manager</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Load Preset */}
        <div className="space-y-2">
          <Label>Load Preset</Label>
          <div className="flex gap-2">
            <Select value={selectedPreset} onValueChange={setSelectedPreset}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select a preset" />
              </SelectTrigger>
              <SelectContent>
                {presets.map((preset) => (
                  <SelectItem key={preset.id} value={preset.id}>
                    {preset.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              onClick={() => selectedPreset && loadPreset(selectedPreset)}
              disabled={!selectedPreset}
              size="sm"
            >
              Load
            </Button>
          </div>
        </div>

        {/* Save New Preset */}
        <div className="space-y-2">
          <Label>Save Current as Preset</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Preset name"
              value={newPresetName}
              onChange={(e) => setNewPresetName(e.target.value)}
            />
            <Button 
              onClick={savePreset}
              disabled={!newPresetName.trim()}
              size="sm"
              className="flex items-center gap-1"
            >
              <Save className="w-4 h-4" />
              Save
            </Button>
          </div>
        </div>

        {/* Preset List */}
        <div className="space-y-2">
          <Label>Saved Presets</Label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {presets.map((preset) => (
              <div key={preset.id} className="flex items-center justify-between p-2 border rounded">
                <div>
                  <p className="text-sm font-medium">{preset.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {preset.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <Button
                  onClick={() => deletePreset(preset.id)}
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 p-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Import/Export */}
        <div className="flex gap-2 pt-4 border-t">
          <Button
            onClick={exportPresets}
            variant="outline"
            size="sm"
            className="flex items-center gap-1 flex-1"
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
          <label className="flex-1">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 w-full"
              asChild
            >
              <span>
                <Upload className="w-4 h-4" />
                Import
              </span>
            </Button>
            <input
              type="file"
              accept=".json"
              onChange={importPresets}
              className="hidden"
            />
          </label>
        </div>
      </CardContent>
    </Card>
  );
}