import { useState } from "react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Lock } from "lucide-react";

export function PrivacySettings() {
  const [dataSharing, setDataSharing] = useState("anonymized");

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header Card */}
      <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-violet-50 to-purple-50">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-violet-100">
              <Shield className="w-8 h-8 text-violet-600" />
            </div>
          </div>
          <CardTitle className="text-3xl text-gray-900">Fitness AI</CardTitle>
          <CardDescription className="text-lg text-gray-600">Privacy Settings</CardDescription>
        </CardHeader>
      </Card>

      {/* Main Settings Card */}
      <Card className="shadow-xl border-0 bg-white">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-violet-600" />
            <CardTitle className="text-xl text-gray-900">Data Sharing Preferences</CardTitle>
          </div>
          <CardDescription className="text-gray-600">
            Choose how your fitness data is shared to help improve our AI while protecting your privacy.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <RadioGroup value={dataSharing} onValueChange={setDataSharing} className="space-y-4">
            {/* Anonymized Option */}
            <Card className={`p-6 cursor-pointer transition-all duration-200 border-2 ${
              dataSharing === "anonymized" 
                ? "border-violet-200 bg-violet-50 shadow-md" 
                : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}>
              <div className="flex items-start space-x-4">
                <RadioGroupItem value="anonymized" id="anonymized" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="anonymized" className="cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg text-gray-900">Share anonymized activity only</span>
                      <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
                        Recommended
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Your workout data is anonymized and aggregated with other users to improve AI recommendations. 
                      Personal identifiers are completely removed.
                    </p>
                  </Label>
                </div>
              </div>
            </Card>
            
            {/* Full Data Option */}
            <Card className={`p-6 cursor-pointer transition-all duration-200 border-2 ${
              dataSharing === "full" 
                ? "border-violet-200 bg-violet-50 shadow-md" 
                : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}>
              <div className="flex items-start space-x-4">
                <RadioGroupItem value="full" id="full" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="full" className="cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg text-gray-900">Share full personal data</span>
                      <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50">
                        Advanced
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Share complete fitness data including personal metrics for highly personalized AI recommendations. 
                      Data is encrypted and securely stored.
                    </p>
                  </Label>
                </div>
              </div>
            </Card>
          </RadioGroup>

          {/* Explanation Card */}
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-violet-100 mt-1">
                  <Shield className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">Why we recommend anonymized sharing</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Anonymized data provides excellent AI improvements while completely protecting your identity. 
                    This approach ensures your personal information remains private while contributing to better 
                    fitness recommendations for everyone.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action buttons */}
          <div className="flex justify-center space-x-4 pt-6">
            <Button 
              size="lg"
              className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Save Settings
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}