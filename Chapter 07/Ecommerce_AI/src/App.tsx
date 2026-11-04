import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { AIRecommendations } from './components/AIRecommendations';
import { ProductGrid } from './components/ProductGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight">
              Discover Premium Tech
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience AI-powered recommendations that understand your preferences. 
              No complex explanations—just products you'll love.
            </p>
          </div>
          
          <FilterBar />
        </section>

        {/* AI Recommendations */}
        <AIRecommendations />

        {/* All Products */}
        <ProductGrid />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-xs">A</span>
              </div>
              <span className="text-sm text-muted-foreground">
                © 2024 AgenticAI. Powered by intelligent recommendations.
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-colors">Privacy</button>
              <button className="hover:text-foreground transition-colors">Terms</button>
              <button className="hover:text-foreground transition-colors">Support</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}