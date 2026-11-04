import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Alert } from './ui/alert';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  Eye, 
  Shield, 
  BarChart3,
  ArrowRight,
  FileText,
  Users
} from 'lucide-react';

export function DiagnosisReport() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[80vh] overflow-auto">
      {/* Primary Diagnosis Card */}
      <Card className="p-5 shadow-lg border-l-4 border-l-blue-500 h-fit">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="h-5 w-5 text-blue-600" />
          <h3 className="text-gray-900">Primary Diagnosis</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-gray-900 mb-1">Pneumonia Detected</h4>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Confidence: 87%
              </Badge>
            </div>
            <div className="text-right">
              <div className="w-24">
                <Progress value={87} className="h-2" />
              </div>
              <p className="text-xs text-gray-500 mt-1">High Confidence</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Reasoning Analysis Card */}
      <Card className="p-5 shadow-md h-fit">
        <div className="space-y-4">
          {/* Transparency Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="h-4 w-4 text-green-600" />
              <h4 className="text-gray-900">Transparency</h4>
              <span className="text-xs text-gray-500">(Why this result?)</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  X-ray patterns <span className="text-green-600 font-medium">match</span> 1,200 confirmed cases
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">Elevated white blood cell count</p>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Fever history <span className="text-green-600 font-medium">consistent</span> with pneumonia
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Scrutability Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <h4 className="text-gray-900">Scrutability</h4>
              <span className="text-xs text-gray-500">(Why not others?)</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Bronchitis</span>: lower <span className="text-orange-600 font-medium">match</span> (42%)
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="text-red-600 font-medium">COVID-19</span> ruled <span className="text-red-600 font-medium">out</span>: negative test
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Trust & Reliability Card */}
      <Card className="p-5 shadow-md h-fit">
        <div className="space-y-4">
          {/* Trust Calibration */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-purple-600" />
              <h4 className="text-gray-900">Trust Calibration</h4>
              <span className="text-xs text-gray-500">(Certainty)</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">Confidence range:</span>
                  <span className="text-purple-600 font-medium">82-90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="relative bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}>
                    <div className="absolute left-[82%] top-0 w-px h-2 bg-purple-400"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>82%</span>
                  <span>90%</span>
                </div>
              </div>
              
              <Alert className="border-amber-200 bg-amber-50 py-2">
                <AlertCircle className="h-3 w-3 text-amber-600" />
                <p className="text-xs text-amber-800">Lab results may improve certainty</p>
              </Alert>
            </div>
          </div>

          <Separator />

          {/* Transferability */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="h-4 w-4 text-teal-600" />
              <h4 className="text-gray-900">Transferability</h4>
              <span className="text-xs text-gray-500">(Generalizability)</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Based <span className="text-teal-600 font-medium">on</span> 50,000 patient cases
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Ages 18-70; <span className="text-amber-600 font-medium">caution</span> in pediatrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Next Steps Card */}
      <Card className="p-5 shadow-md border-l-4 border-l-indigo-500 h-fit">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-4 w-4 text-indigo-600" />
          <h4 className="text-gray-900">Recommended Next Steps</h4>
        </div>
        
        <div className="space-y-3">
          <Button variant="default" className="w-full bg-indigo-600 hover:bg-indigo-700">
            <FileText className="h-4 w-4 mr-2" />
            Compare with Past Cases
          </Button>
          
          <Button variant="outline" className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50">
            <Users className="h-4 w-4 mr-2" />
            Request Second Opinion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
}