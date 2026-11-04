import { ExplainabilityDashboard } from "./components/ExplainabilityDashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-slate-800 mb-2">AgenticAI</h1>
          <p className="text-slate-600">AI Decision Explainability Dashboard</p>
        </div>

        {/* Main Dashboard */}
        <ExplainabilityDashboard />

        {/* Additional Context Cards */}
        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6">
            <h3 className="text-slate-800 mb-3">Model Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Model Version:</span>
                <span className="text-slate-800">v2.1.4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Training Data:</span>
                <span className="text-slate-800">Medical-2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Confidence Threshold:</span>
                <span className="text-slate-800">85%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6">
            <h3 className="text-slate-800 mb-3">Decision Metrics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Primary Confidence:</span>
                <span className="text-green-600">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Processing Time:</span>
                <span className="text-slate-800">0.23s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Factors Analyzed:</span>
                <span className="text-slate-800">127</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}