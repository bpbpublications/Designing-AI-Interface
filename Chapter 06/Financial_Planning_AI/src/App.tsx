import { QuickActionCard } from "./components/QuickActionCard";
import { ThinkItThroughCard } from "./components/ThinkItThroughCard";
import { ActionButtons } from "./components/ActionButtons";
import { Brain, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Financial Planning AI
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl text-gray-700 mb-2">Financial Co-Pilot</h2>
            <p className="text-gray-500">Your intelligent financial planning assistant</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <QuickActionCard />
          <ThinkItThroughCard />
          
          {/* Bottom Actions */}
          <div className="pt-6">
            <ActionButtons />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>Powered by AgenticAI • Your financial decisions, enhanced by AI</p>
        </div>
      </div>
    </div>
  );
}