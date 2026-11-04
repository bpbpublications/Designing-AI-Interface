import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Brain, Heart, Activity, FileText, ImageIcon, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ImageOverlayViewer } from './ImageOverlayViewer';

interface CaseComparison {
  caseId: string;
  diagnosis: string;
  similarity: number;
  symptoms: string[];
  patientAge: number;
  date: string;
  outcome: string;
}

interface OverlayMarker {
  id: string;
  x: number;
  y: number;
  type: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  confidence: number;
}

export function AIAgentDiagnosis() {
  const [expandedSections, setExpandedSections] = useState<{
    comparisons: boolean;
    overlays: boolean;
  }>({
    comparisons: false,
    overlays: false,
  });

  const toggleSection = (section: 'comparisons' | 'overlays') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Mock data for case comparisons
  const caseComparisons: CaseComparison[] = [
    {
      caseId: "CASE-2024-0156",
      diagnosis: "Community-Acquired Pneumonia",
      similarity: 94,
      symptoms: ["Productive cough", "Fever >38.5°C", "Chest pain", "Shortness of breath"],
      patientAge: 67,
      date: "2024-09-15",
      outcome: "Full recovery - 14 days"
    },
    {
      caseId: "CASE-2024-0089", 
      diagnosis: "Bacterial Pneumonia",
      similarity: 89,
      symptoms: ["Productive cough", "High fever", "Fatigue", "Pleuritic pain"],
      patientAge: 72,
      date: "2024-08-22",
      outcome: "Recovered - 18 days"
    },
    {
      caseId: "CASE-2024-0203",
      diagnosis: "Atypical Pneumonia",
      similarity: 87,
      symptoms: ["Dry cough", "Low-grade fever", "Chest tightness", "Malaise"],
      patientAge: 45,
      date: "2024-09-28",
      outcome: "Recovered - 10 days"
    }
  ];

  // Mock data for image overlays
  const imageOverlays: OverlayMarker[] = [
    {
      id: "overlay-1",
      x: 65,
      y: 45,
      type: "Consolidation",
      description: "Right lower lobe consolidation with air bronchograms, consistent with bacterial pneumonia",
      severity: "high",
      confidence: 92
    },
    {
      id: "overlay-2", 
      x: 58,
      y: 35,
      type: "Infiltrate",
      description: "Patchy infiltrates in right middle lobe suggesting inflammatory process",
      severity: "medium",
      confidence: 85
    },
    {
      id: "overlay-3",
      x: 72,
      y: 55,
      type: "Pleural Thickening",
      description: "Mild pleural thickening noted at right costophrenic angle",
      severity: "low",
      confidence: 78
    }
  ];

  const chestXrayUrl = "https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzdCUyMHhyYXklMjBtZWRpY2FsfGVufDF8fHx8MTc1OTQzOTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-2xl text-blue-900">AI Medical Diagnosis</CardTitle>
                <p className="text-blue-600">Advanced medical image analysis powered by AI</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 px-3 py-1">
              <Activity className="w-4 h-4 mr-1" />
              Analysis Complete
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Diagnosis Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Primary Diagnosis */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Primary Diagnosis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Community-Acquired Pneumonia</h3>
                <Badge variant="secondary" className="px-3 py-1">ICD-10: J44.1</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Confidence:</span>
                  <Progress value={87} className="w-24 h-2" />
                  <span className="text-sm font-semibold">87%</span>
                </div>
                <Badge className="bg-orange-100 text-orange-800">High Priority</Badge>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Clinical Reasoning
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Analysis reveals consolidation patterns in the right lower lobe with air bronchograms, 
                consistent with bacterial pneumonia. Patient symptoms including productive cough, fever, 
                and elevated inflammatory markers support this diagnosis. Recommend immediate antibiotic 
                therapy and follow-up imaging.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Recommended Actions</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Start empirical antibiotic therapy (Amoxicillin-Clavulanate)</li>
                <li>• Monitor oxygen saturation and respiratory status</li>
                <li>• Follow-up chest X-ray in 48-72 hours</li>
                <li>• Consider sputum culture if symptoms persist</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-500" />
              Analysis Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Processing Time</span>
                <span className="font-semibold">2.3 seconds</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Images Analyzed</span>
                <span className="font-semibold">1 X-ray</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Models Used</span>
                <span className="font-semibold">3 models</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Similar Cases</span>
                <span className="font-semibold">{caseComparisons.length} found</span>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Differential Diagnoses</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pneumonia</span>
                  <Badge variant="outline">87%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pulmonary Edema</span>
                  <Badge variant="outline">12%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pleural Effusion</span>
                  <Badge variant="outline">8%</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-4">
        {/* Case Comparisons */}
        <Card>
          <CardHeader>
            <Button
              variant="ghost"
              onClick={() => toggleSection('comparisons')}
              className="w-full justify-between hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Similar Case Comparisons</span>
                <Badge variant="secondary">{caseComparisons.length} cases</Badge>
              </div>
              {expandedSections.comparisons ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </Button>
          </CardHeader>
          
          {expandedSections.comparisons && (
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">
                AI has identified {caseComparisons.length} similar cases from the medical database with comparable imaging patterns and symptoms.
              </p>
              
              <div className="grid gap-4">
                {caseComparisons.map((case_, index) => (
                  <Card key={case_.caseId} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-blue-900">{case_.caseId}</h4>
                          <p className="text-sm text-gray-600">Patient Age: {case_.patientAge} years</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800 mb-1">
                            {case_.similarity}% match
                          </Badge>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {case_.date}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium">Diagnosis: </span>
                          <span className="text-sm text-gray-700">{case_.diagnosis}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Symptoms: </span>
                          <span className="text-sm text-gray-700">{case_.symptoms.join(', ')}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Outcome: </span>
                          <span className="text-sm text-green-700">{case_.outcome}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Image Overlays */}
        <Card>
          <CardHeader>
            <Button
              variant="ghost"
              onClick={() => toggleSection('overlays')}
              className="w-full justify-between hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Medical Image Analysis</span>
                <Badge variant="secondary">{imageOverlays.length} findings</Badge>
              </div>
              {expandedSections.overlays ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </Button>
          </CardHeader>
          
          {expandedSections.overlays && (
            <CardContent>
              <ImageOverlayViewer 
                imageUrl={chestXrayUrl}
                overlays={imageOverlays}
              />
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}