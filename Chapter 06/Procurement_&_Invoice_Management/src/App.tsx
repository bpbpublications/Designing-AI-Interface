import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { AlertCircle, TrendingUp, Users, DollarSign, FileText, Clock } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Procurement & Invoice Management</h1>
            <p className="text-slate-600 mt-1">Intelligent Procurement & Invoice Management</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-white shadow-sm">
              <Clock className="w-4 h-4 mr-2" />
              Real-time Updates
            </Badge>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className="bg-white shadow-lg border-0 overflow-hidden">
          <div className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">Procurement AI — Invoice Approval</h2>
            </div>
            
            <Separator className="mb-6" />
            
            {/* Pending Invoices Section */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <span className="text-slate-700 font-medium">Pending Invoices:</span>
              </div>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 px-3 py-1 text-lg font-semibold">
                12
              </Badge>
            </div>

            {/* Smart Suggestion Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-semibold text-slate-900">Smart Suggestion</h3>
              </div>
              
              {/* Savings Insight */}
              <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 shadow-md">
                <div className="p-5">
                  <p className="text-slate-700 leading-relaxed">
                    <span className="text-emerald-600 font-semibold">Last</span> quarter you saved{" "}
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-semibold">12%</span>{" "}
                    by bundling <span className="text-purple-600 font-semibold">similar</span> vendor contracts.
                  </p>
                </div>
              </Card>

              {/* Current Suggestion */}
              <Card className="bg-white border-slate-200 shadow-md">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg mt-1">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-3">
                        <span className="text-purple-600">Group 5 similar</span> invoices{" "}
                        <span className="text-slate-600">for bulk discount?</span>
                      </h4>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-slate-600 font-medium">Vendors:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {['A12', 'A12', 'B07', 'B07', 'B07'].map((vendor, index) => (
                              <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                                {vendor}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-emerald-600" />
                          <span className="text-slate-600 font-medium">Est. savings:</span>
                          <span className="text-emerald-600 font-bold text-lg">₹48,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md px-6">
                      Bundle & Review
                    </Button>
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm px-6">
                      <span className="text-purple-600">Not</span> Now
                    </Button>
                    <Button variant="ghost" className="text-slate-600 hover:text-slate-800 hover:bg-slate-50 px-6">
                      Why shown?
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>

        {/* Bottom Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <div className="p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Total Invoices</h3>
              <p className="text-2xl font-bold text-blue-600 mt-1">847</p>
            </div>
          </Card>
          
          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <div className="p-5 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Savings This Quarter</h3>
              <p className="text-2xl font-bold text-emerald-600 mt-1">₹2.4M</p>
            </div>
          </Card>
          
          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <div className="p-5 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Avg. Processing Time</h3>
              <p className="text-2xl font-bold text-amber-600 mt-1">2.3 hrs</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}