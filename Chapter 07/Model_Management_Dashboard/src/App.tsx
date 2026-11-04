import { Header } from "./components/Header";
import { StatsOverview } from "./components/StatsOverview";
import { ModelInfoCard } from "./components/ModelInfoCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Dashboard Overview</h2>
          <p className="text-gray-600">Monitor and manage your AI models in production</p>
        </div>
        
        <StatsOverview />
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Details</h3>
            <ModelInfoCard />
          </div>
        </div>
      </main>
    </div>
  );
}