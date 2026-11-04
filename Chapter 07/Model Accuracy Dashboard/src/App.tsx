import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ModelDriftAlert } from "./components/ModelDriftAlert";
import { ModelMetrics } from "./components/ModelMetrics";
import { ModelOverview } from "./components/ModelOverview";
import { RecentActivity } from "./components/RecentActivity";

export default function App() {
  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Alert Section */}
            <div className="space-y-4">
              <ModelDriftAlert />
            </div>
            
            {/* Metrics Section */}
            <div className="space-y-4">
              <h2 className="font-semibold text-gray-900">Key Metrics</h2>
              <ModelMetrics />
            </div>
            
            {/* Overview and Activity Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <ModelOverview />
              </div>
              <div className="xl:col-span-1">
                <RecentActivity />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}